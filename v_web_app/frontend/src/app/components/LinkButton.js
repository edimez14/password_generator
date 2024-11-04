import Link from 'next/link';
import {Button} from "@nextui-org/button";

export default function LinkButton({ icon, text, url, style, size = "", isExternal = true}) {
    return (
        <Link target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined} href={url} passHref style={style}>
            <Button
                className={'flex justify-between items-center p-2 rounded-lg transition-colors duration-200 bg-slate-300 text-zinc-900 hover:text-slate-100 hover:bg-zinc-900'}
                style={{ fontSize: size }}
            >
                {icon} {text}
            </Button>
        </Link>
    );
}