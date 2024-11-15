// SignInFormPage
'use client'

import Footer from "@/app/components/Footer";

import SignInRequest from "./views/SignInRequest";
import NavBarAuth from "../../components/NavBarAuth";

import "@/app/style/glassmorphism.css";

export default function Page() {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center h-screen font-[family-name:var(--font-geist-sans)]">
                <NavBarAuth />
                <div className="flex h-auto justify-center items-center z-50">
                    <div className="w-6/12 m-5 px-5 py-16 rounded-2xl glassmorphism">
                        <div>
                            <h1 className="text-4xl text-center m-5">Sing In</h1>
                        </div>
                        <SignInRequest />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}