'use client';
import { useState, useEffect } from 'react';

import { IsAuth } from "@/app/utils/AuthContext";
import LoadingPage from "@/app/views/LoadingPage";

export default function Profile() {
    const [loading, setLoading] = useState(true);
    const isAuthenticated = IsAuth();

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {
                loading ? <LoadingPage /> : (
                    <>
                        {
                            isAuthenticated ? (
                                <div className="h-screen flex justify-center items-center m-auto">
                                    <p>Profile</p>
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