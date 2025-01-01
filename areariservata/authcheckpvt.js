function checkAuthentication() {
    const isLoggedInpvt = localStorage.getItem('isLoggedInpvt'); // Recupera lo stato di accesso
    
    if (isLoggedInpvt === 'true') {
        console.log('Utente autenticato.');
        // Se necessario, reindirizza a una pagina protetta
    } else {
        console.log('Utente non autenticato, reindirizzamento in corso...');
        // Reindirizza solo se non sei già nella pagina di login
        if (window.location.pathname !== 'logris.html') {
            window.location.href = 'logris.html';
        }
    }
}
document.addEventListener('DOMContentLoaded', checkAuthentication);

function logout() {
    logoff();
    location.href="../index.html";
}
function logoff() {
    localStorage.removeItem('isLoggedInpvt', 'false');
    console.log('Logoff eseguito.');
}

setInterval(logoff, 60000);