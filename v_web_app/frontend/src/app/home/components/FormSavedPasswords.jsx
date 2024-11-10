// FormSavedPasswords.jsx
'use client'
import { useState, useEffect } from "react";

import { Input } from "@nextui-org/react";

import { BiRename } from "react-icons/bi";
import { GoLink } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";

export default function FormSavedPasswords({ password, onDataChange }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        namePages: '',
        url: '',
        user: JSON.parse(sessionStorage.getItem('user'))?.id || null
    });
    const [passwordSaved, setPasswordSaved] = useState(password);

    useEffect(() => {
        setPasswordSaved(password);
    }, [password]);


    const handleChange = (e) => {
        const updatedFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(updatedFormData);
        if (e.target.name === "passwordSaved") {
            setPasswordSaved(e.target.value);
        }
        onDataChange({ ...updatedFormData, passwordSaved: passwordSaved });
    };

    return (
        <>
            <form>
                <div className="grid gap-2">
                    <Input
                        autoFocus
                        name="namePages"
                        endContent={
                            <BiRename />
                        }
                        label="Page name"
                        placeholder="Enter the page name"
                        variant="bordered"
                        onChange={handleChange}
                        className="text-slate-800 bg-slate-300 rounded-xl"
                    />
                    <Input
                        name="url"
                        label="URL"
                        endContent={
                            <GoLink />
                        }
                        placeholder="Enter the URL"
                        type="url"
                        variant="bordered"
                        onChange={handleChange}
                        className="text-slate-800 bg-slate-300 rounded-xl"
                    />
                    <Input
                        name="passwordSaved"
                        label="Password to save"
                        endContent={
                            <RiLockPasswordLine />
                        }
                        value={passwordSaved}
                        type="text"
                        variant="bordered"
                        className="text-slate-800 bg-slate-300 rounded-xl"
                    />
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </div>
            </form>
        </>
    );
}