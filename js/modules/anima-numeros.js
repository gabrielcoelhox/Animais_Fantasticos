export default function initAnimaNumeros() {
    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((numero) => {
            const total = +numero.innerText;
            const incremento = Math.floor(total / 100); // arredonda os números

            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if (start > total) {
                    numero.innerText = total; // se passar volta para o total
                    clearInterval(timer);
                }
            }, 35 * Math.random()); // Velocidade aleatória, faz com que os números cheguem ao final diferente
        });
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect(); // Evita que recomece ao dar scroll
            animaNumeros();
        }
    }

    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation); // Observador

    observer.observe(observerTarget, { attributes: true });
}
