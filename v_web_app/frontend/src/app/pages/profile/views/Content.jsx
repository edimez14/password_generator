'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';

import { postToken, BackendRequest } from '@/app/utils/Request.api';

import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';

import AvatarUploader from '../components/AvatarUploader';

import "@/app/style/glassmorphism.css";

export default function Content({ onDeleteAccount }) {
    const [userData, setUserData] = useState([]);
    const [newUserData, setNewUserData] = useState('');
    const token = postToken(sessionStorage.getItem('authToken'));
    const userId = JSON.parse(sessionStorage.getItem('user'))?.id || null;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await BackendRequest("POST", "profile/", userId, token);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchUserData();
    }, []);

    const handleSave = async (field, newValue) => {
        try {
            const url = `profile/${userData.id}/update/`;
            const data = {
                user: userId,
                [field]: newValue,
            };
            const response = await BackendRequest('PUT', url, data, token);
            setUserData((prevData) => ({
                ...prevData,
                [field]: newValue,
            }));
            if (field === 'password_saved') {
                setNewUserData(newValue);
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    const handleDelete = (deleteAccountId) => {
        if (onDeleteAccount) {
            onDeleteAccount(deleteAccountId);
        }
        sessionStorage.clear();
        window.location.href = "/";
    };

    return (
        <>
            <div className='px-2 py-3 md:py-10 glassmorphism rounded-xl'>
                <p className='flex justify-center items-center text-2xl md:text-4xl'>user data:</p>
                <div>
                    {Object.keys(userData).length === 0 ? (
                        <p className='flex justify-center items-center'>No user data found</p>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex justify-center items-center'>
                                {userData.avatar && (
                                    <AvatarUploader
                                        currentAvatar={userData.avatar}
                                        userId={userData.id}
                                        token={token}
                                        onUpdateAvatar={(newAvatar) => setUserData((prevData) => ({ ...prevData, avatar: newAvatar }))}
                                    />
                                )}
                            </div>
                            <div className='flex flex-col gap-1 justify-center items-start'>
                                <div className='grid grid-cols-1 md:grid-cols-2'>
                                    <div>
                                        <div className='p-2'>
                                            <label className='font-bold text-xl sm:text-2xl md:text-3xl'>User Name</label>
                                            <EditButton
                                                initialValue={userData.username}
                                                field="username"
                                                onSave={handleSave}
                                            />
                                        </div>
                                        <div className='p-2'>
                                            <label className='font-bold text-xl sm:text-2xl md:text-3xl'>Email</label>
                                            <EditButton
                                                initialValue={userData.email}
                                                field="email"
                                                onSave={handleSave}
                                            />
                                        </div>
                                        {/* <div className='p-2'>
                                            <label className='font-bold text-xl sm:text-2xl md:text-3xl'>Password</label>
                                            <p
                                                className='p-1 text-2xl'
                                            >
                                                {userData.password}
                                            </p>
                                        </div> */}
                                    </div>
                                    <div>
                                        <div className='p-2'>
                                            <label className='font-bold text-xl sm:text-2xl md:text-3xl'>Full Name</label>
                                            <EditButton
                                                initialValue={userData.first_name}
                                                field="first_name"
                                                onSave={handleSave}
                                            />
                                            <EditButton
                                                initialValue={userData.last_name}
                                                field="last_name"
                                                onSave={handleSave}
                                            />
                                        </div>
                                        <div className='p-2'>
                                            <label className='font-bold text-xl sm:text-2xl md:text-3xl'>Number Phone</label>
                                            <EditButton
                                                initialValue={userData.number_phone}
                                                field="number_phone"
                                                onSave={handleSave}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-end mt-4">
                                    <DeleteButton
                                        textButton="delete account"
                                        requestUrl="profile"
                                        id={userData.id}
                                        onDelete={handleDelete}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}