'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BackendRequest } from '@/app/utils/Request.api';
import { Button } from '@nextui-org/button';

export default function AvatarUploader({ currentAvatar, userId, token, onUpdateAvatar }) {
    const [selectedFile, setSelectedFile] = useState(null);
    // const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;
    
        const formData = new FormData();
        formData.append("avatar", selectedFile);
    
        try {
            setLoading(true);
            const isMultipart = true
            const response = await BackendRequest('PUT', `profile/${userId}/update/`, formData, token, isMultipart);
            
            if (response.data.avatar) {
                onUpdateAvatar(response.data.avatar);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error uploading avatar:", error);
            setLoading(false);
        }
    };

    return (
        <div className="grid avatar-uploader">
            <div className="flex justify-center items-center">
                {currentAvatar ? (
                    <Image
                        src={`https://passwordgenerator-nelt.onrender.com${currentAvatar}`}
                        alt="Avatar"
                        width={200}
                        height={200}
                        className="p-2 mx-2 md:mx-6 rounded-full"
                    />
                ) : (
                    <div className="text-center">No avatar</div>
                )}
            </div>
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="mt-2"
            />
            <Button
                onClick={handleUpload}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                disabled={loading}
            >
                {loading ? 'Uploading...' : 'Upload Avatar'}
            </Button>
        </div>
    );
}
