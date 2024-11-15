'use client'
import { useState, useEffect } from "react";

import { Button } from "@nextui-org/button";

import { getGeneratePassword } from '@/app/utils/Request.api';

export default function ButtonGeneratePassword({ textButton, onReturnPassword }) {
    const newPassword = async () => await getGeneratePassword();
    const [password, setPassword] = useState(newPassword);

    const handleOnClick = async () => {
        try {
            const newPassword = await getGeneratePassword();
            setPassword(newPassword);
            onReturnPassword(password);
        } catch (error) {
            console.error("Error getting password:", error);
        }
    };

    return (
        <>
            <Button
                className='p-2 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-600'
                onClick={handleOnClick}
            >
                {textButton}
            </Button>
        </>
    );
}