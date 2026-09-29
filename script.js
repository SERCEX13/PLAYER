document.addEventListener("DOMContentLoaded", () => {
    // 1. ANIMACIÓN CONTINUA DE PULSO Y ONDULACIÓN MEDIANTE BUCLE PERPETUO (JS)
    const elementsToAnimate = document.querySelectorAll('.card, .step-item, .mascota-img');

    let angle = 0;
    
    function continuousAnimationLoop() {
        angle += 0.03;
        const scaleValue = 1 + Math.sin(angle) * 0.02; // Variación constante e infinita en escala
        const glowValue = 10 + Math.sin(angle) * 8;     // Bucle de resplandor

        elementsToAnimate.forEach((el, index) => {
            // Descalce continuo de fase para cada elemento
            const offsetAngle = angle + index;
            const currentScale = 1 + Math.sin(offsetAngle) * 0.015;
            
            if (!el.classList.contains('mascota-img')) {
                el.style.transform = `scale(${currentScale})`;
            }
        });

        // Mantiene el ciclo ejecutándose infinitamente sin detenerse
        requestAnimationFrame(continuousAnimationLoop);
    }

    // Iniciar bucle perpetuo
    continuousAnimationLoop();

    // 2. EFECTO INTERACTIVO CONTINUO EN LOS BOTONES
    const buttons = document.querySelectorAll('.btn-cyan, .btn-outline');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.boxShadow = `${x / 5}px ${y / 5}px 20px rgba(0, 229, 255, 0.8)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
    });
});