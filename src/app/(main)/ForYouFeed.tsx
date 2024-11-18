"use client"

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer"
import Post from "@/components/posts/Post"
import PostsLoadingSkeleton from "@/components/posts/PostsLoadingSkeleton"
import { Button } from "@/components/ui/button"
import kyInstance from "@/lib/ky"
import { PostsPage } from "@/lib/types"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"


export default function ForYouFeed() {
    const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
        queryKey: ["post-feed","for-you"],
        queryFn: ({pageParam}) => kyInstance.get("/api/posts/for-you", 
            pageParam ? { searchParams: { cursor: pageParam}} : {}).json<PostsPage>(),
        initialPageParam: null as string | null,
        getNextPageParam: (lastPage) => lastPage.nextCursor
        // queryFn: kyInstance.get("/api/posts/for-you").json<PostData[]>
        // async () => {
        //     const res = await fetch("/api/posts/for-you");
        //     if(!res.ok) throw Error(`Request failed with status code ${res.status}`);

        //     return res.json();
        // }
    })
    
    const posts = data?.pages.flatMap(page => page.posts) || []

    if(status === "pending") {
        return <PostsLoadingSkeleton />
    }

    if(status === "success" && !posts.length && !hasNextPage) {
        return <p className="text-center text-muted-foreground">No one has posted anything yet</p>
    }


    if(status === "error") {
        return <p className="text-center text-destructive">An error occurred while loading posts</p>
    }

    return <InfiniteScrollContainer 
    onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    className="space-y-5">
        {
            posts.map(post => (
                <Post key={post.id} post={post}/>
            ))
        }
        { isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>

};