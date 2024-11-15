"use client";

import { useState, useEffect } from 'react';

import { CopyButton } from '@/app/components/CopyButton';

import ModalSavedPasswords from './ModalSavedPasswords';
import ButtonGeneratePassword from '@/app/components/ButtonGeneratePassword';

export default function TrueAuthContent() {
  const [password, setPassword] = useState("Press the button to generate a password");

  useEffect(() => {
    setPassword(password);
  }, [password]);

  const handlePasswordChange = (data) => {
    setPassword(data);
};

  return (
    <>
      <main className="flex flex-col gap-8 items-center justify-center">
        <div className='flex gap-3 items-center justify-between'>
          <p className='text-4xl text-center'>{password}</p>
          <CopyButton textToCopy={password} />
        </div>
        <div className='flex gap-2'>
          <ButtonGeneratePassword
            textButton="Generate password"
            onReturnPassword={handlePasswordChange}
          />
          <ModalSavedPasswords password={password} changePassword={handlePasswordChange} />
        </div>
      </main>
    </>
  );
}