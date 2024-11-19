export const metadata = {
    title: "Saved Passwords | Password Generator",
    description: "page where users can view the passwords they have saved, they can also update the data of the passwords they select or they can delete the passwords they want",
    keywords: "password generator, secure passwords, free password tool, random passwords, strong passwords, saved passwords",
    applicationName: "Password Generator",
    author: {
        name: "Edizon Alexander Meza Leal",
        url: "https://edizon-leal.vercel.app/",
    },
    themeColor: "#1E40AF",
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "./favicon.ico",
    },
    openGraph: {
        title: "Password Generator | Secure and Free",
        description:
            "The ultimate tool to generate secure passwords for your online accounts. Fast, random, and completely free.",
        url: "https://passwordgenerator.vercel.app/",
        siteName: "Password Generator",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "../../public/img/metadata/img-home.jpg",
                width: 1200,
                height: 630,
                alt: "Password Generator - Secure and Free",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Password Generator | Secure and Free",
        description:
            "Generate strong, secure passwords effortlessly. Free, fast, and random password generator for your digital security needs.",
        site: "@elax_4",
        creator: "@elax_4",
        images: ["../../public/img/metadata/img-home.jpg"],
    },
};

export default function Layout({ children }) {
    return (
        <div className="flex">
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}
