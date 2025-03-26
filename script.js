function updateLabels() {
  const nombre = document.getElementById('nombre').value;
  document.getElementById('labelEdad').innerHTML = `Edad de ${nombre || 'la persona'}: <input type="number" id="edad" required />`;
  document.getElementById('labelDireccion').innerHTML = `Dirección de ${nombre || 'la persona'}: <input type="text" id="direccion" required />`;
}

function validateAndNext(currentPage, nextPageNum) {
  const inputs = document.querySelectorAll(`#page${currentPage} input[required]`);
  for (const input of inputs) {
    if (!input.value) {
      alert('Por favor complete todos los campos obligatorios.');
      return;
    }
  }
  nextPage(nextPageNum);
}

function nextPage(pageNum) {
  const pages = document.querySelectorAll('.form-page');
  pages.forEach(page => page.style.display = 'none');
  document.getElementById(`page${pageNum}`).style.display = 'block';

  if (pageNum === 5) {
    showSummary();
  }
}

function showSummary() {
  const nombre = document.getElementById('nombre').value;
  const edad = document.getElementById('edad').value;
  const direccion = document.getElementById('direccion').value;

  const familiarNombre = document.getElementById('familiarNombre').value;
  const parentesco = document.getElementById('parentesco').value;
  const familiarEdad = document.getElementById('familiarEdad').value;

  const enfermedad = document.getElementById('enfermedad').value;
  const tiempoEnfermedad = document.getElementById('tiempoEnfermedad').value;

  const fecha = document.getElementById('fecha').value;
  const centroMedico = document.getElementById('centroMedico').value;
  const diagnostico = document.getElementById('diagnostico').value;

  const formattedDate = new Date(fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

  const summary = `
    Datos Personales:
    - Nombre: ${nombre}
    - Edad: ${edad}
    - Dirección: ${direccion}

    Familiar:
    - Nombre: ${familiarNombre}
    - Parentesco: ${parentesco}
    - Edad: ${familiarEdad}

    Condiciones Pre-Existentes:
    - Enfermedad: ${enfermedad}
    - Tiempo con la Enfermedad: ${tiempoEnfermedad} años

    Internamientos Realizados:
    - Fecha: ${formattedDate}
    - Centro Médico: ${centroMedico}
    - Diagnóstico: ${diagnostico}
  `;

  document.getElementById('result').textContent = summary;
}

function addFamiliar() {
  const familiarNombre = document.getElementById('familiarNombre').value;
  const parentesco = document.getElementById('parentesco').value;
  const familiarEdad = document.getElementById('familiarEdad').value;
  if (familiarNombre && parentesco && familiarEdad) {
    const li = document.createElement('li');
    li.textContent = `${familiarNombre} (${parentesco}, ${familiarEdad} años)`;
    document.getElementById('familiaresList').appendChild(li);
  } else {
    alert('Por favor complete todos los campos del familiar.');
  }
}

function addCondicion() {
  const enfermedad = document.getElementById('enfermedad').value;
  const tiempoEnfermedad = document.getElementById('tiempoEnfermedad').value;
  if (enfermedad && tiempoEnfermedad) {
    const li = document.createElement('li');
    li.textContent = `${enfermedad} (durante ${tiempoEnfermedad} años)`;
    document.getElementById('condicionesList').appendChild(li);
  } else {
    alert('Por favor complete todos los campos de condición.');
  }
}

function addInternamiento() {
  const fecha = document.getElementById('fecha').value;
  const centroMedico = document.getElementById('centroMedico').value;
  const diagnostico = document.getElementById('diagnostico').value;
  if (fecha && centroMedico && diagnostico) {
    const li = document.createElement('li');
    const formattedDate = new Date(fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    li.textContent = `${formattedDate} - ${centroMedico}: ${diagnostico}`;
    document.getElementById('internamientosList').appendChild(li);
  } else {
    alert('Por favor complete todos los campos del internamiento.');
  }
}