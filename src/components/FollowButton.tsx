"use client"

import { FollowerInfo } from "@/lib/types"
import { useToast } from "./ui/use-toast"
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import useFollowerInfo from "@/hooks/useFollowerInfo";
import { Button } from "./ui/button";
import ky from "ky";

interface FollowButtonProps {
    userId: string
    intialState: FollowerInfo
}
export default function FollowButton({ userId, intialState}: FollowButtonProps) {

    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { data } = useFollowerInfo(userId, intialState);

    const queryKey: QueryKey = ["folower-info", userId];

    const { mutate } = useMutation({
        mutationFn: () => 
            data.isFollowedByUser 
                ? ky.delete(`/api/users/${userId}/followers`)
                : ky.post(`/api/users/${userId}/followers`),
            onMutate: async () => {

                await queryClient.cancelQueries({queryKey});

                const previousState = queryClient.getQueryData<FollowerInfo>(queryKey)

                queryClient.setQueryData<FollowerInfo>(queryKey, () => ({
                    followers: 
                    (previousState?.followers || 0) + 
                    (previousState?.isFollowedByUser ? -1 : +1),
                    isFollowedByUser: !previousState?.isFollowedByUser
                }));

                return { previousState }
            },
            onError(error, variables, context) {
                queryClient.setQueryData(queryKey, context?.previousState);
                console.error(error);
                toast({
                    variant: "destructive",
                    description: "Something went wrong! Please try again."
                })
            },
        
    })

    return <Button 
        onClick={() => mutate()}
        className=""
        variant={data.isFollowedByUser ? "secondary"  : "default"}
    >
        {data.isFollowedByUser ? "Unfollow"  : "Follow"}
    </Button>
}