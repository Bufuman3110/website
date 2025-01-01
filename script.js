function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Recupera lo stato di accesso
    
    if (isLoggedIn === 'true') {
        console.log('Utente autenticato.');
        // Se necessario, reindirizza a una pagina protetta
    } else {
        console.log('Utente non autenticato, reindirizzamento in corso...');
        // Reindirizza solo se non sei già nella pagina di login
        if (window.location.pathname !== 'login.html') {
            window.location.href = 'login.html';
        }
    }
}
document.addEventListener('DOMContentLoaded', checkAuthentication);

function logout() {
    logoff();
    location.reload();
}
function logoff() {
    localStorage.removeItem('isLoggedIn', 'false');
    console.log('Logoff eseguito.');
}

setInterval(logoff, 600000);