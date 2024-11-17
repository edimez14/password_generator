import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

import { CiSaveDown2 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";

import handleLogout from "./handleLogout";
import LinkButton from "./LinkButton";

import "@/app/style/glassmorphism.css";

export default function DropDownMenu() {
    return (
        <Dropdown className="mt-5 glassmorphism">
            <DropdownTrigger className="border-0">
                <Button
                    isIconOnly
                    className="flex items-center p-0 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100"
                    variant="bordered" 
                >
                    <RiMenuLine />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="Profile" className="p-0 my-1">
                    <LinkButton icon={<FaRegUser />} text="Profile" url="/pages/profile" isExternal={false} wFull={true} />
                </DropdownItem>
                <DropdownItem key="Saved Passwords" className="p-0 my-1">
                    <LinkButton icon={<CiSaveDown2 />} text="Saved Passwords" url="/pages/saved-passwords" isExternal={false} wFull={true} />
                </DropdownItem>
                {/* <DropdownItem key="Settings" className="p-0 my-1">
                    <LinkButton icon={<IoMdSettings />} text="Settings" url="/pages/settings" isExternal={false} wFull={true} />
                </DropdownItem> */}
                <DropdownItem key="Logout" className="p-0">
                    <Button
                        className="flex justify-center items-center w-full my-1 bg-red-500 text-white hover:bg-red-800"
                        size="sm"
                        onClick={handleLogout}
                    >
                        <RiLogoutBoxLine />
                        Log out
                    </Button>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
