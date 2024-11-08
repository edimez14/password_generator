import { FaDollarSign, FaUser, FaGithub } from 'react-icons/fa';

import LinkButton from "@/app/components/LinkButton";

export default function Footer() {
    return (
        <>
            <footer className='flex justify-center items-center'>
                <div className='grid gap-2 items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        <LinkButton
                            icon={<FaDollarSign />}
                            text="Donate"
                            url="https://www.paypal.com/donate/?hosted_button_id=TLWPKXW745KHQ"
                            sm={true}
                        />
                        <LinkButton
                            icon={<FaUser />}
                            text="Portfolio"
                            url="https://edizon-leal.vercel.app/"
                            sm={true}
                        />
                        <LinkButton
                            icon={<FaGithub />}
                            text="Github"
                            url="https://github.com/edimez14/password_generator/tree/web_version"
                            sm={true}
                        />
                    </div>
                    <div>
                        <p>
                            &copy; 2024 - 2024 all rights reserved v0.2.2
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}