import { StreamChat } from "stream-chat";
import { useSession } from "../SessionProvider";
import { useEffect, useState } from "react";
import kyInstance from "@/lib/ky";


export default function useInitializeChatClient() {
    const { user } = useSession();
    const [chatClient, setchatClient] = useState<StreamChat | null >(null)

    useEffect(() => {
        const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!)

        client.connectUser({
            id: user.id,
            username: user.displayName,
            name: user.displayName,
            image: user.avatarUrl
        },
        async () => kyInstance.get("/api/get-token")
        .json<{token: string}>()
        .then((data) => data.token)
    )
    .catch(error => console.error("Failed to connect user", error))
    .then(() => setchatClient(client))

    return () => {
        setchatClient(null);
        client.disconnectUser()
        .catch(error => console.error("Failed to disconnect user", error))
        .then(() => console.log("Connection closed")
        )
    }
    }, [user.id, user.username, user.displayName, user.avatarUrl])
    
    return chatClient;
};
