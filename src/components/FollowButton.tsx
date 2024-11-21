"use client"

import { FollowerInfo } from "@/lib/types"
import { useToast } from "./ui/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
    const { data } = useFollowerInfo(userId, intialState)

    const { mutate } = useMutation({
        mutationFn: () => (
            data.isFollowedByUser 
                ? ky.delete(`/api/users/${userId}/followers`)
                : ky.post(`/api/users/${userId}/followers`)
        )
    })

    return <Button 
        onClick={() => mutate()}
        className=""
        variant={data.isFollowedByUser ? "secondary"  : "default"}
    >
        {data.isFollowedByUser ? "Unfollow"  : "Follow"}
    </Button>
}