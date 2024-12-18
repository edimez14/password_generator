// ModalSavedPasswords.jsx
'use client';
import { useState, useEffect } from "react";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

import FormSavedPasswords from "../components/FormSavedPasswords";
import ButtonGeneratePassword from '@/app/components/ButtonGeneratePassword';

import { postToken, BackendRequest } from "@/app/utils/Request.api";

import "@/app/style/glassmorphism.css";

export default function ModalSavedPasswords({ password, changePassword }) {
    const [formData, setFormData] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const token = sessionStorage.getItem('authToken');

    useEffect(() => {
        if (formData) {
            setFormData(prevFormData => ({
                ...prevFormData,
                passwordSaved: password
            }));
        }
    }, [password]);

    const handleFormDataChange = (data) => {
        // console.log("Datos actualizados recibidos en el modal:", data);
        setFormData(data);
    };

    const handleSavePassword = async () => {
        if (formData) {
            let dataToSend = {
                name_pages: formData.namePages,
                url: formData.url,
                user: formData.user,
                password_saved: password
            };

            // console.log("contraseña guardada:", dataToSend.passwordSaved);

            try {
                const response = await BackendRequest("POST", "save-passwords/", dataToSend, postToken(token));
                // console.log(response);
            } catch (error) {
                console.error("Error saving password:", error.response?.data || error.message || error);
            }
        } else {
            console.log("formData es null o vacío, no se puede guardar");
        }
    };

    return (
        <>
            <Button onPress={onOpen} className='p-2 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-600'>Save</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                className="bg-slate-400"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-zinc-900">Save Password</ModalHeader>
                            <ModalBody>
                                <FormSavedPasswords password={password} onDataChange={handleFormDataChange} />
                            </ModalBody>
                            <ModalFooter>
                                <ButtonGeneratePassword
                                    textButton="Change password"
                                    onReturnPassword={changePassword}
                                />
                                <Button
                                    className='p-2 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-600'
                                    onPress={() => {
                                        handleSavePassword();
                                        alert("password saved successfully");
                                        onClose();
                                    }}>
                                    save password
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}