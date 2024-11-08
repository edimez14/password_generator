export default function handleLogout() {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    window.location.href = "/";
};