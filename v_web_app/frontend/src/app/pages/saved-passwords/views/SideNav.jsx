'use client';
import { useState } from 'react';

import ViewPasswords from '../components/ViewPasswords';
import SearchBar from '../components/SearchBar';

import "@/app/style/glassmorphism.css";

export default function SideNav({ onPasswordSelect }) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full md:w-3/12 h-1/4 md:h-screen p-4">
            <div className="w-full h-full glassmorphism rounded-xl p-4 overflow-y-auto">
                <SearchBar onSearch={setSearchTerm} />
                <ViewPasswords onPasswordSelect={onPasswordSelect} searchTerm={searchTerm} />
            </div>
        </div>
    );
}
