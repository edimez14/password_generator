export const metadata = {
    title: "Settings",
    description: "configuraciones, por ahora no disponibles",
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
