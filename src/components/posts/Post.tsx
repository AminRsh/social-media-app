import { PostData } from "@/lib/types"
import Link from "next/link"
import UserAvatar from "../UserAvatar"
import { formatRelativeDates } from "@/lib/utils"



interface PostProps {
    post: PostData
}
export default function Post({ post }: PostProps) {
    function formatRelativeDate(createdAt: Date): import("react").ReactNode {
        throw new Error("Function not implemented.")
    }

    return <article className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
        <div className="flex flex-wrap gap-3">
            <Link href={`/users/${post.user.username}`}>
                <UserAvatar avatarUrl={post.user.avatarUrl} />
            </Link>
            <div>
                <Link
                    href={`/users/${post.user.username}`}
                    className="block font-medium hover:underline">
                    {post.user.displayName}
                </Link>
                <Link
                    href={`/posts/${post.id}`}
                    className="block text-sm text-muted-foreground hover:underline">
                    {formatRelativeDates(post.createdAt)}
                </Link>
            </div>
        </div>
        <div className="whitespace-pre-line break-words pl-1">
            {post.content}
        </div>
    </article>
}
