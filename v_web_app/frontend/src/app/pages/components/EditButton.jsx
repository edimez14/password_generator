// EditableButton.jsx
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { MdOutlineEdit, MdOutlineSave } from "react-icons/md";
import ButtonGeneratePassword from '@/app/components/ButtonGeneratePassword';

export default function EditButton({ big = false, isPassword = false, initialValue, field, onSave }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(initialValue);
    const [password, setPassword] = useState(initialValue);

    useEffect(() => {
        setInputValue(initialValue);
        setPassword(initialValue);
    }, [initialValue]);

    const handleEditClick = () => {
        if (isEditing) {
            onSave(field, inputValue);
        }
        setIsEditing(!isEditing);
    };

    const handlePasswordChange = (newPassword) => {
        setInputValue(newPassword);
        setPassword(newPassword);
    };

    return (
        <div className="flex items-center gap-2">
            {
                isEditing ? (
                    <>
                        {
                            !isPassword ? (
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="border p-1 rounded"
                                />
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={() => {}}
                                        className="border p-1 rounded"
                                    />
                                    <ButtonGeneratePassword
                                        textButton="Change password"
                                        onReturnPassword={handlePasswordChange}
                                    />
                                </>
                            )
                        }
                    </>
                ) : (
                    !big ? <span className="text-2xl">{inputValue}</span> : <span className="text-4xl font-bold">{inputValue}</span>
                )
            }
            <Button isIconOnly className='bg-transparent' onClick={handleEditClick}>
                {isEditing ? <MdOutlineSave className='text-2xl hover:text-slate-400' /> : <MdOutlineEdit className='text-2xl hover:text-slate-400' />}
            </Button>
        </div>
    );
}
