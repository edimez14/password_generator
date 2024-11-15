export const metadata = {
    title: "Profile",
    description: "perfil de usuario",
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
