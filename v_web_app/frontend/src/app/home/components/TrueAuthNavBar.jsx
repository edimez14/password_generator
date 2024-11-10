'use client';
import { useState } from "react";

import { RiLockPasswordLine, RiMenuLine } from "react-icons/ri";

import Link from "next/link";
import { Button } from "@nextui-org/button";

import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import DropDownMenu from "@/app/components/DropDownMenu";

import "@/app/style/glassmorphism.css";

export default function TrueAuthNavBar() {

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
                    <DropDownMenu />
                    <ThemeToggleButton />
                </div>
            </header>
        </div>
    );
}
