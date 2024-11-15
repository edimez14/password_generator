'use client';
import { useState, useEffect } from 'react';

import { IsAuth } from "@/app/utils/AuthContext";
import LoadingPage from "@/app/views/LoadingPage";

import SideNav from "./views/SideNav";
import Content from "./views/Content";

export default function SavedPasswords() {
    const [selectedPassword, setSelectedPassword] = useState(null);
    const [loading, setLoading] = useState(true);
    const isAuthenticated = IsAuth();

    useEffect(() => {
        setLoading(false);
    }, []);

    const handlePasswordSelect = (password) => {
        setSelectedPassword(password);
    };

    return (
        <>
            {
                loading ? <LoadingPage /> : (
                    <>
                        {
                            isAuthenticated ? (
                                <div className="h-screen flex">
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