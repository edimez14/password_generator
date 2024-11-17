'use client'

import { useState } from "react";

import Link from "next/link";
import { Button } from "@nextui-org/button";

import { createUser } from "@/app/utils/Request.api";

export default function SignUpRequest() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        number_phone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formData).some(field => !field)) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        try {
            const response = await createUser(formData);
            sessionStorage.setItem('authToken', response.data.access);
            sessionStorage.setItem('refreshToken', response.data.refresh);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = "/";
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMsg = typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data);
                setErrorMessage(errorMsg);
            } else {
                setErrorMessage("Unexpected error occurred.");
            }
        }
    };

    return (
        <>
            <div>
                <form className="grid justify-center" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-3 px-10">
                        <div className="">
                            <label
                                className="text-center  m-5"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className="text-center  m-5"
                                htmlFor="password"
                            >
                                Password:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className="text-center  m-5"
                                htmlFor="text"
                            >
                                User name:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="text"
                                    placeholder="User name"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className="text-center  m-5"
                                htmlFor="text"
                            >
                                First name:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="text"
                                    placeholder="First name"
                                    name="first_name"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className="text-center  m-5"
                                htmlFor="text"
                            >
                                Last name:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="text"
                                    placeholder="Last name"
                                    name="last_name"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className="text-center  m-5"
                                htmlFor="text"
                            >
                                Phone number:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2 border-1 border-neutral-900"
                                    type="text"
                                    placeholder="Phone number"
                                    name="number_phone"
                                    onChange={handleChange}
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-center my-2">{errorMessage}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center p-2 col-span-2">
                        <Button
                            type="submit"
                            className="flex items-center p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900"
                        >
                            Sign up
                        </Button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <p className="m-5 text-small sm:text-medium lg:text-large">
                        Already have an account?{" "}
                        <Link
                            target="_self"
                            rel={undefined}
                            className="hover:border-b-2 hover:border-b-gray-900"
                            href="/auth/sign-in"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}