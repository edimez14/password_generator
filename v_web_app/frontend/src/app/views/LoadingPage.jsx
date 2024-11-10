export default function LoadingPage() {
    return (
        <div className="flex items-center justify-center min-h-screen m-auto">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-lg font-semibold text-gray-700">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
}
