// Funzione per disabilitare il clic destro
function disableRightClick(e) {
    e.preventDefault();
    alert("Il clic destro è disabilitato.");
}

// Funzione per disabilitare F12, F11 e altre combinazioni di ispezione
function disableDevTools(e) {
    if (
        e.key === "F12" ||             // Blocca F12
        e.key === "F11" ||             // Blocca F11
        (e.ctrlKey && e.shiftKey && e.key === "I") // Blocca Ctrl+Shift+I
    ) {
        e.preventDefault();
        alert("L'ispezione e la modalità a schermo intero non sono consentite su questa pagina.");
    }
}

document.addEventListener("contextmenu", disableRightClick);
document.addEventListener("keydown", disableDevTools);
localStorage.setItem('isLoggedIn', 'false');

//nuovo script(login)
function login(){
    let password=document.getElementById('Psw').value;
    if (password === "deeds"){
        location.href="index.html";
        localStorage.setItem('isLoggedIn', 'true');
    }
    else if (password === "negro") {
        // Se la password è "porco giani", reindirizza a un URL specifico
        location.href = "img/sgabola.mp4";
    } else {
        // Se la password è sbagliata, mostra un messaggio di accesso negato, blocca clic destro, F12 e F11
        document.getElementById("negrato").style.display = "block";
    }
}

function salvaLogin() {
    if(isLoggedIn==true){
        localStorage.setItem('isLoggedIn', 'true'); // Salva come stringa
        console.log('Login salvato in localStorage.');
    }
    else{
        localStorage.setItem('isLoggedIn', 'false'); // Salva come stringa
        console.log('NEGRI');
    }
}

let azioneEseguita=false;

function resetAzione() {
    localStorage.removeItem('isLoggedIn', 'false');
    console.log('Stato azione resettato.');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Hai premuto Invio!');
        login();
    }
});