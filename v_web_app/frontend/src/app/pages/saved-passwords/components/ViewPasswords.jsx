'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { Button } from '@nextui-org/button';

import { postToken, RequestPassword } from '@/app/utils/Request.api';

export default function ViewPasswords({ onPasswordSelect }) {
    const [passwords, setPasswords] = useState([]);
    const [selectedPasswordId, setSelectedPasswordId] = useState(null);
    const token = postToken(sessionStorage.getItem('authToken'));
    const userId = JSON.parse(sessionStorage.getItem('user'))?.id || null;

    useEffect(() => {
        const fetchPasswords = async () => {
            try {
                const response = await RequestPassword("GET", "view-all-saved-passwords/", userId, token);
                setPasswords(response.data.passwords);
            } catch (error) {
                console.error('Error fetching passwords', error);
            }
        };

        fetchPasswords();
    }, []);

    const handlePasswordClick = (password) => {
        setSelectedPasswordId(password.id);
        onPasswordSelect(password);
    };

    return (
        <div>
            <p>Passwords saved by the user:</p>
            <div>
            {passwords.length === 0 ? (
                    <p>No saved passwords found</p>
                ) : (
                    passwords.map((password) => (
                        <Link
                            key={password.id}
                            href={"#"}
                            className={`grid cursor-pointer p-2 rounded-xl m-2 ${selectedPasswordId === password.id ? 'bg-gray-500 text-zinc-900 font-bold' : 'hover:bg-gray-200 hover:text-zinc-900'}`}
                            onClick={() => handlePasswordClick(password)}
                        >
                            {password.name_pages}
                            <br/>
                            {password.url}
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}