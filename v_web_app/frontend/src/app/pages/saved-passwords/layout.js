export const metadata = {
    title: "Password Generator",
    description: "Web application to generate secure passwords, randomly and completely free",
};

export default function Layout({ children }) {
    return (
        <div className="h-screen flex">
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}
