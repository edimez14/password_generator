// SignUpFormPage
'use client'

import Footer from "@/app/components/Footer";

import SignUpRequest from "./views/SignUpRequest";
import NavBarAuth from "../components/NavBarAuth";

import "@/app/style/glassmorphism.css";

export default function Page() {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center h-screen font-[family-name:var(--font-geist-sans)]">
                <div className="">
                    <NavBarAuth />
                </div>
                <div className="flex h-auto justify-center items-center z-50">
                    <div className="w-6/12 m-2 px-3 py-6 rounded-2xl glassmorphism">
                        <div>
                            <h1 className="text-4xl text-center m-5">Sing Up</h1>
                        </div>
                        <SignUpRequest />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}