'use client';
import { useState, useEffect } from 'react';

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/dropdown";
import { Button } from '@nextui-org/button';

import { IsAuth } from "@/app/utils/AuthContext";
import LoadingPage from "@/app/views/LoadingPage";

import SideNav from "./views/SideNav";
import Content from "./views/Content";
import ViewPasswords from './components/ViewPasswords';
import SearchBar from './components/SearchBar';

import "@/app/style/glassmorphism.css";

export default function SavedPasswords() {
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [loading, setLoading] = useState(true);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = IsAuth();

    useEffect(() => {
        setLoading(false);
        setWindowSize(window.innerWidth);
    }, [windowSize]);

    const handlePasswordSelect = (password) => {
        setSelectedPassword(password);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {
                loading ? <LoadingPage /> : (
                    <>
                        {
                            isAuthenticated ? (
                                <div className="h-screen flex-row md:flex">
                                    <SideNav onPasswordSelect={handlePasswordSelect} />
                                    <div className="flex-1">
                                        <Content selectedPassword={selectedPassword} />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {
                                        window.location.href = "/auth/sign-in"
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </>
    );
}
