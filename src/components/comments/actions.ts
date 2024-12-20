"use server"

import { validateRequest } from "@/auth"
import prisma from "@/lib/prisma";
import { getCommentDataInclude, getPostDataInclude, PostData } from "@/lib/types";
import { createCommentSchema, createPostSchema } from "@/lib/validation";

export async function submitComment({ post, content }: { post: PostData, content: string }) {


    const { user } = await validateRequest();
    if (!user) throw Error("Unauthorizzed");

    const { content: contentValidated } = createCommentSchema.parse({ content });


    const [newComment] = await prisma.$transaction([
        prisma.comment.create({
            data: {
                content: contentValidated,
                postId: post.id,
                userId: user.id,
            },
            include: getCommentDataInclude(user.id)
        }),
        ...(post.user.id !== user.id ?
            [prisma.notification.create({
                data: {
                    issuerId: user.id,
                    recipientId: post.user.id,
                    postId: post.id,
                    type: "COMMENT"
                }
            })] :
            []
        )
    ])
    return newComment;
}

export async function deleteComment(id: string) {

    const { user } = await validateRequest();
    if (!user) throw Error("Unauthorizzed");

    const comment = await prisma.comment.findUnique({
        where: { id }
    })

    if (!comment) throw new Error("Comment Not Found");
    if (comment.userId !== user.id) throw Error("Unauthorizzed");

    const deletedComment = await prisma.comment.delete({
        where: { id },
        include: getCommentDataInclude(user.id)
    })

    return deletedComment;
}