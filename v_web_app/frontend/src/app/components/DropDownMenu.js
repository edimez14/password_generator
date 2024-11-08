import { Button } from "@nextui-org/button";

import handleLogout from "./handleLogout";

import "@/app/style/glassmorphism.css";

export default function DropDownMenu() {
    return (
        <div className=" absolute right-0 mt-16 w-48 glassmorphism rounded-lg shadow-lg p-2 z-50">
            <Button className="w-full my-1 p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900" size="sm">
                profile
            </Button>
            <Button className="w-full my-1 p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900" size="sm">
                Saved Passwords
            </Button>
            <Button className="w-full my-1 p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900" size="sm">
                Settings
            </Button>
            <Button
                className="w-full my-1 bg-red-500 text-white hover:bg-red-800"
                size="sm"
                onClick={handleLogout}
            >
                Log out
            </Button>
        </div>
    );
}
