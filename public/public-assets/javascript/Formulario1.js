// Selección del formulario
const form = document.querySelector('form[name="login-form"]');

form.addEventListener("submit", (event) => {
  const fcorreo = form.elements["fcorreo"].value.trim();
  const fpassword = form.elements["fpassword"].value.trim();

  // Validar campos vacíos
  if (!fcorreo || !fpassowrd) {
    event.preventDefault(); // Evita el envío del formulario
    alert("Por favor, complete todos los campos requeridos.");
    return; // Sale de la función para no continuar con el envío
  }

  // Validar formato de correo
  if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }
});

// Función para validar el correo electrónico
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
