'use client';
import ViewPasswords from '../components/ViewPasswords';

import "@/app/style/glassmorphism.css";

export default function SideNav({ onPasswordSelect }) {
    return (
        <div className="w-3/12 h-screen p-4">
            <div className='w-full h-full glassmorphism rounded-xl p-4 overflow-y-auto'>
                <ViewPasswords onPasswordSelect={onPasswordSelect} />
            </div>
        </div>
    );
}
