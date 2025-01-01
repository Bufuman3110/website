localStorage.setItem('isLoggedInpvt', 'false');

//nuovo script(login)
function login(){
    let password=document.getElementById('Psw').value;
    let username=document.getElementById('mail').value;
    if (password === "peggle" && username==="bufuman"){
        location.href="arearis.html";
        localStorage.setItem('isLoggedInpvt', 'true');
    }
    else if (password === "sigma" && username==="golden"){
        location.href="arearis.html";
        localStorage.setItem('isLoggedInpvt', 'true');
    } else {
        // Se la password è sbagliata, mostra un messaggio di accesso negato, blocca clic destro, F12 e F11
        document.getElementById("negrato").style.display = "block";
    }
}

function salvaLogin() {
    if(isLoggedIn==true){
        localStorage.setItem('isLoggedInpvt', 'true'); // Salva come stringa
        console.log('Login salvato in localStorage.');
    }
    else{
        localStorage.setItem('isLoggedInpvt', 'false'); // Salva come stringa
        console.log('NEGRI');
    }
}

let azioneEseguita=false;

function resetAzione() {
    localStorage.removeItem('isLoggedInpvt', 'false');
    console.log('Stato azione resettato.');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Hai premuto Invio!');
        login();
    }
});