"use client"

import { useSession } from "@/app/(main)/SessionProvider"
import { DropdownMenuPortal, DropdownMenuSubContent, DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { LogOutIcon, Monitor, Moon, Sun, UserIcon } from "lucide-react";
import { logout } from "@/app/(auth)/action";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";


interface UserButtonProps {
    className?: string
}
export default function UserButton({ className }: UserButtonProps) {

    const { user } = useSession();

    const { themes, setTheme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full", className)}>
                    <UserAvatar avatarUrl={user.avatarUrl} size={40} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Logged in as @{user.username}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/users/${user.username}`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Monitor className="mr-2 size-4" />
                        Theme
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <Monitor className="mr-2 size-4" />
                                System default
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 size-4" />
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 size-4" />
                                Dark
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                    logout()
                }}
                >
                    <LogOutIcon className="mr-2 size-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}