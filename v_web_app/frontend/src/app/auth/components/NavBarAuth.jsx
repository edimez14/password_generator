// SignInFormPage
'use client'

import Link from "next/link";
import { Button } from "@nextui-org/button";

import { RiLockPasswordLine } from "react-icons/ri";

import ThemeToggleButton from "@/app/components/ThemeToggleButton";

export default function NavBarAuth() {
    return (
        <>
            <div className="flex justify-between">
                <div className="rounded-md mx-4 p-1">
                    <Link
                        target="_self"
                        rel={undefined}
                        href="/"
                    >
                        <Button
                            isIconOnly
                            className={
                                "flex items-center p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900"
                            }
                            align="left"
                        >
                            <RiLockPasswordLine />
                        </Button>
                    </Link>
                </div>
                <div className="flex rounded-md mx-4 p-1 space-x-4">
                    <ThemeToggleButton />
                </div>
            </div>
        </>
    );
}