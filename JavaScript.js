
document.addEventListener('DOMContentLoaded', () => {
  // Obtener las opciones de emoji
  const emojiOptions = document.querySelectorAll('.emoji-option');
  const submitButton = document.getElementById('submitButton');
  const radios = document.querySelectorAll('input[name="satisfaction"]');

  // Función para ocultar todas las secciones de preguntas
  function hideAllQuestions() {
    document.querySelectorAll('.survey-questions').forEach(question => {
      question.style.display = 'none';
    });
  }

  // Mostrar la sección correspondiente al emoji seleccionado
  emojiOptions.forEach(option => {
    option.addEventListener('click', () => {
      hideAllQuestions();
      const value = option.getAttribute('data-value');
      document.getElementById(`${value.toLowerCase()}-questions`).style.display = 'block';
    });
  });

  // Mostrar botón de enviar cuando se selecciona una opción
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        submitButton.classList.remove('d-none');
      }
    });
  });

  // Mostrar/ocultar campo de texto según la opción seleccionada
  document.getElementById('solutionEffectiveness')?.addEventListener('change', function () {
    const otherSolutionContainer = document.getElementById('otherSolutionContainer');
    otherSolutionContainer.style.display = this.value === 'Otro' ? 'block' : 'none';
  });

   // Mostrar/ocultar campo de texto según la opción seleccionada en Punto Positivo
   const puntoPositivoSelect = document.getElementById('puntoPositivoSelect');
   const otroPuntoPositivoContainer = document.getElementById('otroPuntoPositivoContainer');
 
   puntoPositivoSelect.addEventListener('change', function () {
    if (this.value === 'Otro') {
      otroPuntoPositivoContainer.style.display = 'block'; // Muestra el contenedor
    } else {
      otroPuntoPositivoContainer.style.display = 'none'; // Oculta el contenedor
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const companyInput = document.getElementById('companyInput');
  const nameInput = document.getElementById('nameInput');
  const emojiOptions = document.querySelectorAll('.emoji-option');
  const satisfactionInputs = document.querySelectorAll('input[name="satisfaction"]');

  function toggleEmojiAvailability() {
    const isCompanyFilled = companyInput.value.trim() !== '';
    const isNameFilled = nameInput.value.trim() !== '';

    if (isCompanyFilled && isNameFilled) {
      // Habilitar emojis
      emojiOptions.forEach(option => option.classList.remove('disabled'));
      satisfactionInputs.forEach(input => input.disabled = false);
    } else {
      // Deshabilitar emojis
      emojiOptions.forEach(option => option.classList.add('disabled'));
      satisfactionInputs.forEach(input => input.disabled = true);
    }
  }

  // Verificar en tiempo real los campos
  companyInput.addEventListener('input', toggleEmojiAvailability);
  nameInput.addEventListener('input', toggleEmojiAvailability);

  // Inicializar con emojis deshabilitados
  toggleEmojiAvailability();
});


