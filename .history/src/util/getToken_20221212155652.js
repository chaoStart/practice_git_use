export function getToken() {
    return JSON.parse(localStorage.getItem('ticket'));
}