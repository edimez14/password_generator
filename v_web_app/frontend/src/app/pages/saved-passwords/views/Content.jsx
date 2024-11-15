'use client';
import { useState, useEffect } from 'react';

import { postToken, RequestPassword } from '@/app/utils/Request.api';

import NavBarAuth from '@/app/components/NavBarAuth';
import Footer from '@/app/components/Footer';
import { CopyButton } from '@/app/components/CopyButton';

import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';

export default function Content({ selectedPassword, onPasswordDeleted }) {
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (selectedPassword) {
            setPassword(selectedPassword.password_saved);
        }
    }, [selectedPassword]);

    const handleSave = async (field, newValue) => {
        try {
            const token = postToken(sessionStorage.getItem('authToken'));
            const userId = JSON.parse(sessionStorage.getItem('user'))?.id || null;
            const url = `view-all-saved-passwords/${selectedPassword.id}/update/`;
            const data = {
                user: userId,
                [field]: newValue,
            };
            const response = await RequestPassword('PUT', url, data, token);

            if (field === 'password_saved') {
                setPassword(newValue);
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const handleDelete = (deletedPasswordId) => {
        if (onPasswordDeleted) {
            onPasswordDeleted(deletedPasswordId);
        }
        window.location.reload();
    };


    return (
        <div className="flex flex-col justify-between h-full p-8">
            <div className="w-full">
                <NavBarAuth wantMenuButton={true} />
                <div className="flex flex-col gap-4 justify-start items-start w-full px-16 py-40 flex-grow">
                    {selectedPassword ? (
                        <>
                            <div className='grid grid-cols-2 gap-8'>
                                <div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <EditButton
                                            big={true}
                                            initialValue={selectedPassword.name_pages}
                                            field="name_pages"
                                            onSave={handleSave}
                                        />
                                    </div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <EditButton
                                            initialValue={selectedPassword.url}
                                            field="url"
                                            onSave={handleSave}
                                        />
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <EditButton
                                            isPassword={true}
                                            initialValue={password}
                                            field="password_saved"
                                            onSave={handleSave}
                                        />
                                        <CopyButton textToCopy={password} />
                                    </div>
                                </div>
                                <div className="flex justify-end items-end mt-4">
                                    <DeleteButton
                                        passwordId={selectedPassword.id}
                                        onDelete={handleDelete}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="text-4xl font-bold">Hola</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
