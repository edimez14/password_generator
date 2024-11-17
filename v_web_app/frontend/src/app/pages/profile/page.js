'use client';
import { useState, useEffect } from 'react';

import { IsAuth } from "@/app/utils/AuthContext";
import LoadingPage from "@/app/views/LoadingPage";
import NavBarAuth from '@/app/components/NavBarAuth';

import Content from './views/Content';
import Footer from '@/app/components/Footer';

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
                                <div className="h-screen flex flex-col">
                                    <NavBarAuth wantMenuButton={true} />
                                    <div className='flex justify-center items-center m-auto'>
                                        <Content />
                                    </div>
                                    <Footer />
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