// Carrossel

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImg();   
}, 4000) 

function nextImg(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById('radio'+ count).checked = true;


}

// Contato

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let hasError = false;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        errorMessage.textContent += 'Por favor, insira seu nome.\n';
        hasError = true;
    }

    if (!email || !validateEmail(email)) {
        errorMessage.textContent += 'Por favor, insira um e-mail válido.\n';
        hasError = true;
    }

    if (!subject) {
        errorMessage.textContent += 'Por favor, insira o assunto.\n';
        hasError = true;
    }

    if (!message) {
        errorMessage.textContent += 'Por favor, insira sua mensagem.\n';
        hasError = true;
    }

    if (!hasError) {
        alert('Formulário enviado com sucesso!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

