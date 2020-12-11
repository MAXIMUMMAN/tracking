export function errorForAuth(text) {
    var bodyError = `${text}`

    var error = document.getElementById('errors');
    error.innerHTML = bodyError;
}