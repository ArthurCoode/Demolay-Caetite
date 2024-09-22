// script.js
function menuShow() {
    let menu = document.querySelector('nav ul');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}
// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        let menu = document.querySelector('nav ul');
        menu.classList.remove('open'); // Remove a classe 'open' para fechar o menu
    });
});
document.addEventListener('DOMContentLoaded', function () {
    barba.init({
        views: [
            {
                namespace: 'home',
                beforeEnter(data) {
                    // Código que executa antes da entrada na página
                },
                afterEnter(data) {
                    // Código que executa após a entrada na página
                },
                beforeLeave(data) {
                    // Código que executa antes da saída da página
                },
                afterLeave(data) {
                    // Código que executa após a saída da página
                }
            }
            // Adicione outras visualizações (views) se necessário
        ],
        transitions: [
            {
                name: 'fade',
                leave(data) {
                    return gsap.to(data.current.container, {
                        opacity: 0,
                        duration: 0.5
                    });
                },
                enter(data) {
                    return gsap.from(data.next.container, {
                        opacity: 0,
                        duration: 0.5
                    });
                }
            }

        ]
    });
});
