import { validateRequest } from "@/auth"
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";


export default async function Layout({ children }: { children: React.ReactNode }) {

    const session = await validateRequest();
    if (!session.user) redirect("/login")
    return (
        <SessionProvider value={session}>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex w-full grow max-w-7xl mx-auto p-5 gap-5">
                    <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80 "/>
                    {children}
                </div>
                <MenuBar className="bg-card sticky flex w-full justify-center gap-5 border-t sm:hidden p-3" />
            </div>
        </SessionProvider>)
}