document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE FILTRAR CURSOS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos e adiciona no clicado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            courseCards.forEach(card => {
                if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Pequeno delay para efeito visual
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- LÓGICA DO FORMULÁRIO ---
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede a página de recarregar

        const name = document.getElementById('name').value;
        
        // Simula salvamento/envio com mensagem de sucesso gamer
        formMessage.innerHTML = `<i class="fas fa-check-circle"></i> Player <strong>${name}</strong> cadastrado com sucesso! Missão Iniciada.`;
        formMessage.className = "success"; // Adiciona classe verde do CSS
        
        // Limpa o formulário
        form.reset();
    });
});