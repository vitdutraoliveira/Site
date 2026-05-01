document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (validateForm(nome, email, mensagem)) {
            sendFeedback(nome);
            form.reset(); 
        }
    });

    /**
     * @param {string} nome 
     * @param {string} email 
     * @param {string} mensagem 
     * @returns {boolean}
     */
    function validateForm(nome, email, mensagem) {
        if (nome.length < 3) {
            alert('Por favor, digite seu nome completo.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido (exemplo@dominio.com).');
            return false;
        }

        if (mensagem.length < 10) {
            alert('Sua mensagem é muito curta. Conte-nos um pouco mais sobre como ajudar seu pet.');
            return false;
        }

        return true;
    }

    /**
     * @param {string} nome 
     */
    function sendFeedback(nome) {
        console.log(`Formulário enviado por: ${nome}`);
        
        alert(`Sucesso! 👋 Olá ${nome.split(' ')[0]}, recebemos seu contato. 
Nossa equipe técnica da PetsLife entrará em contato em breve!`);
    }

    const linksInternos = document.querySelectorAll('nav a[href^="#"]');
    
    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            const target = document.querySelector(id);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });
});