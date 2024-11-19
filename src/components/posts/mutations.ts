import { PostsPage } from "@/lib/types";
import { useToast } from "../ui/use-toast";
import { InfiniteData, QueryFilters, useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from "next/navigation";
import { deletePost } from "./actions";

export function useDeletePostMutation() {
    const { toast } = useToast();

    const queryClient = useQueryClient();

    const rouer = useRouter();
    const pathname = usePathname();

    const mutation = useMutation({
        mutationFn: deletePost,
        onSuccess: async (deletePost) => {
            const queryFilter: QueryFilters = { queryKey: ["post-feed"]}

            await queryClient.cancelQueries(queryFilter);
            
            queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(queryFilter,
                (oldData) => {
                    if(!oldData) return;
                    return {
                        pageParams: oldData.pageParams,
                        pages: oldData.pages.map(page => ({
                            nextCursor: page.nextCursor,
                            posts: page.posts.filter(post => post.id !== deletePost.id)
                        }))
                    }
                }
            )

            toast({
                description: "Post Succeefully Deleted!"
            })

            if(pathname === `/posts/${deletePost.id}`) {
                rouer.push(`/users/${deletePost.user.username}`)
            }
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to delete post. Please try again."
            })
        },
    })

    return mutation
}