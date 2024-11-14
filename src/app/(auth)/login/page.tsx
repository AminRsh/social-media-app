import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./LoginForm";
import loginImage from '@/assets/login-image.jpg';
import Image from "next/image";


export const metadata: Metadata = {
    title: "Login",
};


export default function page() {
    return <div className="flex h-screen items-center justify-center p-5">
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
            <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
                <div className="space-y-1 text-center">
                    <h1 className="text-3xl font-bold">Login to AminHub</h1>
                </div>
                <div className="space-y-5">
                    <LoginForm />
                    <Link href="/signup" className="block text-center hover:underline">
                        Don&apos;t have have an account? Sign up
                    </Link>
                </div>
            </div>
            <Image
                    src={loginImage}
                    alt=''
                    className="w-1/2 hidden md:block object-cover"
                />
        </div>
    </div>
}