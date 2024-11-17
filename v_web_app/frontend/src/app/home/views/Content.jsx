"use client";

import { useState } from 'react';

import { Button } from "@nextui-org/button";
import { CopyButton } from '@/app/components/CopyButton';

import { getGeneratePassword } from '@/app/utils/Request.api';

export default function Content() {
  const [password, setPassword] = useState("Press the button to generate a password");

  const handleOnClick = async () => {
    try {
      const newPassword = await getGeneratePassword();
      setPassword(newPassword);
    } catch (error) {
      console.error("Error getting password:", error);
    }
  };

  return (
    <>
      <main className="flex flex-col gap-2 lg:gap-8 md:gap-4 sm:gap-2 items-center justify-center">
        <div className='flex gap-3 items-center justify-between'>
          <p className='text-2xl lg:text-4xl md:text-4xl sm:text-2xl text-center'>{password}</p>
          <CopyButton textToCopy={password} />
        </div>
        <div className='flex gap-2'>
          <Button
            className='p-2 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-600'
            onClick={handleOnClick}
          >
            generate password
          </Button>
        </div>
      </main>
    </>
  );
}