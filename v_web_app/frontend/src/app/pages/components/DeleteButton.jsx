'use client';
import { useState } from 'react';

import { Button } from '@nextui-org/button';

import { postToken, BackendRequest } from '@/app/utils/Request.api';

export default function DeleteButton({textButton, requestUrl, id, onDelete }) {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            const token = postToken(sessionStorage.getItem('authToken'));
            const userId = JSON.parse(sessionStorage.getItem('user'))?.id || null;
            const url = `${requestUrl}/${id}/delete/`;
            const response = await BackendRequest('DELETE', url, userId, token);
            
            if (response.status === 204) {
                onDelete(id);
            } else {
                console.error("Error deleting password:", response.data);
            }
        } catch (error) {
            console.error("Error deleting password:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleDelete}
            disabled={loading}
            className="flex items-center text-2xl gap-2 px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white"
        >
            {loading ? "Deleting..." : textButton}
        </Button>
    );
}
