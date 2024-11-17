export default function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
};