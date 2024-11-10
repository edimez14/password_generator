'use client'
import { useState } from "react"; 

import Link from "next/link";
import { Button } from "@nextui-org/button";

import { Input } from "@nextui-org/react";

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { SignInUser } from "@/app/utils/Request.api";

export default function SignInRequest() {
	const [errorMessage, setErrorMessage] = useState("");
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.email) {
			setErrorMessage("You must enter both email");
			return;
		}
		else if (!formData.password) {
			setErrorMessage("You must enter both password");
			return;
		}

		try {
			const response = await SignInUser(formData);
			sessionStorage.setItem('authToken', response.data.access);
			sessionStorage.setItem('user', JSON.stringify(response.data.user));
			window.location.href = "/";
		} catch (error) {
			if (error.response && error.response.data) {
				setErrorMessage(error.response.data.error || "Unexpected error");
			} else {
				setErrorMessage("Login failed");
				console.error("error en el login por: ", error.message || error);
			}
		}
	};

	return (
		<div>
			<form className="grid justify-center" onSubmit={handleSubmit}>
				<div>
					<div>
						<label className="text-center m-5" htmlFor="email">
							Email:
						</label>
						<div>
							<Input
								autoFocus
								className="bg-slate-300 rounded-xl text-slate-800 m-2"
								endContent={
									<MdOutlineEmail />
								}
								type="email"
								name="email"
								placeholder="Enter your email"
								onChange={handleChange}
							/>
						</div>
						{errorMessage && <p className="text-red-500 text-center my-2">{errorMessage}</p>}
					</div>
					<div>
						<label className="text-center m-5" htmlFor="password">
							Password:
						</label>
						<div>
							<Input
								className="bg-slate-300 rounded-xl text-slate-800 m-2"
								endContent={
									<RiLockPasswordLine />
								}
								type="password"
								name="password"
								placeholder="Enter your password"
								onChange={handleChange}
							/>
						</div>
						{errorMessage && <p className="text-red-500 text-center my-2">{errorMessage}</p>}
					</div>
				</div>
				<div className="flex justify-center p-2">
					<Button
						type="submit"
						className="flex items-center p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900"
					>
						Sign in
					</Button>
				</div>
			</form>
			<div className="flex justify-center">
				<p className="m-5">
					You don't have an account?{" "}
					<Link
						target="_self"
						className="hover:border-b-2 hover:border-b-gray-900"
						href="/auth/sign-up"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
}
