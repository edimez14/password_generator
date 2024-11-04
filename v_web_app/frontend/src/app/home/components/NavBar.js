'use client'

import "../../style/glassmorphism.css";
import LinkButton from "@/app/components/LinkButton";
import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import { FaDollarSign, FaUser, FaGithub } from 'react-icons/fa';

import { useState } from "react";


export default function NavBar() {
    return (
        <div className="w-full h-auto header-sm">
            <header className="glassmorphism rounded-lg flex justify-between p-2 z-10">
                <LinkButton
                    icon={<FaDollarSign />}
                    text="Donate"
                    url="https://www.paypal.com/donate/?hosted_button_id=TLWPKXW745KHQ"
                    align="left"
                    
                />
                <div className="flex space-x-4">
                    <LinkButton
                        icon={<FaUser />}
                        text="Portfolio"
                        url="https://github.com/edimez14/"
                        align="right"
                        
                    />
                    <LinkButton
                        icon={<FaGithub />}
                        text="Github"
                        url="https://github.com/edimez14/password_generator/tree/web_version"
                        align="right"
                    />
                    <ThemeToggleButton />
                </div>
            </header>
        </div>
    );
}
