import { useToast } from "@/components/ui/use-toast";
import { QueryFilters, useMutation, useQueryClient, InfiniteData } from '@tanstack/react-query';
import { submitPost } from "./actions";
import { PostsPage } from "@/lib/types";

export function useSubmitPostMutation() {

    const { toast } = useToast();
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: submitPost,
        onSuccess: async(newPost) => {
            const queryfilter: QueryFilters = { queryKey: ["post-feed", "for-you"]} 
            await queryClient.cancelQueries(queryfilter)

            queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(queryfilter,
                (oldData) => {
                    const firstPage = oldData?.pages[0]

                    if (firstPage) {
                        return {
                            pageParams: oldData.pageParams,
                            pages: [
                                {
                                    posts: [newPost, ...firstPage.posts],
                                    nextCursor: firstPage.nextCursor
                                },
                                ...oldData.pages.slice(1)
                            ]
                        }
                    }
                }
            )
            toast({
                description: "Post Created"
            })
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to post. Please try again"
            })
        },
    })
    return mutation
}
