// SignUpFormPage
'use client'

import Footer from "@/app/components/Footer";

import SignUpRequest from "./views/SignUpRequest";
import NavBarAuth from "../../components/NavBarAuth";

import "@/app/style/glassmorphism.css";

export default function Page() {
    return (
        <>
            <div className="flex flex-col gap-4 justify-center h-auto sm:h-auto md:h-screen font-[family-name:var(--font-geist-sans)]">
                <NavBarAuth />
                <div className="flex h-auto justify-center items-center m-auto sm:m-0 z-50">
                    <div className="sm:w-6/12 m-1 px-2 py-4 sm:px-3 sm:py-6 rounded-2xl glassmorphism">
                        <div>
                            <h1 className="text-2xl sm:text-4xl text-center m-2 sm:m-5">Sing Up</h1>
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