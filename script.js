document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBrochureBtn');
  const coverDiv = document.getElementById('coverPanel');
  
  const panels = [
    document.getElementById('panel1'),
    document.getElementById('panel2'),
    document.getElementById('panel3')
  ];

  let currentIndex = 0;

  function showPanel(index) {
    panels.forEach((panel, i) => {
      if (i === index) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  // 1. ABRIR EL FOLLETO DESDE LA PORTADA
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      coverDiv.classList.add('hidden');
      currentIndex = 0;
      showPanel(currentIndex);
    });
  }

  // 2. BOTONES DE SIGUIENTE (NEXT)
  const nextButtons = document.querySelectorAll('.next-btn');
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentIndex < panels.length - 1) {
        currentIndex++;
        showPanel(currentIndex);
      }
    });
  });

  // 3. BOTONES DE ATRÁS (PREV)
  const prevButtons = document.querySelectorAll('.prev-btn');
  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        showPanel(currentIndex);
      }
    });
  });

  // 4. BOTÓN DE CERRAR / REINICIAR FOLLETO
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      coverDiv.classList.remove('hidden');
      panels.forEach(panel => panel.classList.remove('active'));
      currentIndex = 0;
    });
  }
});