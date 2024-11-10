'use client';
import { useState } from "react";

import { FiUserPlus } from "react-icons/fi";
import { RiLockPasswordLine, RiLoginBoxLine, RiMenuLine } from "react-icons/ri";

import Link from "next/link";
import { Button } from "@nextui-org/button";

import LinkButton from "@/app/components/LinkButton";
import ThemeToggleButton from "@/app/components/ThemeToggleButton";

import "@/app/style/glassmorphism.css";

export default function NavBar() {

    return (
        <div className="w-full h-auto header-sm">
            <header className="glassmorphism rounded-lg flex justify-between p-2 z-10">
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
                <div className="flex space-x-4">
                    <LinkButton icon={<RiLoginBoxLine />} text="Sign in" url="/auth/sign-in" align="right" isExternal={false} />
                    <LinkButton icon={<FiUserPlus />} text="Sign up" url="/auth/sign-up" align="right" isExternal={false} />
                    <ThemeToggleButton />
                </div>
            </header>
        </div>
    );
}
