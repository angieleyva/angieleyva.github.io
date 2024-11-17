// Selección del formulario
const form = document.querySelector('form[name="register-form"]');

form.addEventListener("submit", (event) => {
  const fnombre = form.elements["fnombre"].value.trim();
  const fnombre_us = form.elements["fnombre_us"].value.trim();
  const fcorreo = form.elements["fcorreo"].value.trim();
  const fdistrito = form.elements["fdistrito"].value.trim();
  const fcontraseña = form.elements["fcontraseña"].value.trim();
  const fconfirm_contraseña = form.elements["fconfirm_contraseña"].value.trim();

  // Validar campos vacíos
  if (!fnombre || !fnombre_us || !fcorreo || !fdistrito || !fcontraseña || !fconfirm_contraseña) {
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
