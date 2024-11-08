import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen m-auto p-6">
            <h1 className="text-9xl font-extrabold text-gray-400">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mt-4">
                Page not found
            </h2>
            <p className="text-gray-600 mt-2 mb-6 text-center max-w-md">
                We're sorry, the page you're looking for does not exist or has been moved.
            </p>
            <Link
                target="_self"
                rel={undefined}
                href="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
                Back to home
            </Link>
        </div>
    );
}
