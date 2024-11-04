import { useState } from 'react';
import {Button} from "@nextui-org/button";

export default function ThemeToggleButton({ isDarkMode }) {
    const [theme, setTheme] = useState(isDarkMode);

    const toggleTheme = () => {
        setTheme((prev) => !prev);
        document.documentElement.classList.toggle('theme-dark', !theme);
        document.documentElement.classList.toggle('theme-white', theme);
    };

    return (
        <Button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-zinc-950">
            {theme ? '☀️ Light' : '🌙 Dark'}
        </Button>
    );
}
