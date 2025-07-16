document.querySelectorAll('.ramo').forEach(ramo => {
  const requisitos = ramo.getAttribute('data-requisitos')
    .split(',').map(r => r.trim()).filter(Boolean);

  function actualizarEstado() {
    if (ramo.classList.contains('aprobado')) return;

    const aprobados = Array.from(document.querySelectorAll('.ramo.aprobado'))
      .map(r => r.textContent.trim());

    if (requisitos.every(r => aprobados.includes(r))) {
      ramo.classList.add('habilitado');
      ramo.classList.remove('bloqueado');
    } else {
      ramo.classList.add('bloqueado');
      ramo.classList.remove('habilitado');
    }
  }

  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;
    ramo.classList.toggle('aprobado');
    document.querySelectorAll('.ramo').forEach(actualizarEstado);
  });

  actualizarEstado();
});
