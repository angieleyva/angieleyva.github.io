const $isLoggedIn = document.querySelector('#isLoggedIn');
const $isNotLoggedIn = document.querySelector('#isNotLoggedIn');

const $closeSesionDesktop = document.querySelector('#closeSesionDesktop');
const $closeSesionMobile = document.querySelector('#closeSesionMobile');

const $activeService = document.querySelector('#activeService');
const $calculatorService = document.querySelector('#calculatorService');

validateAuthentication();
validateType();

$isLoggedIn.addEventListener('click', () => {
  validateAuthentication();
  window.location.href = "/loginRegister.html";
});

$closeSesionDesktop.addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('type');
  validateAuthentication();
  window.location.href = "/";
});
$closeSesionMobile.addEventListener('click', () => {
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('type');
  validateAuthentication();
  window.location.href = "/";
});

function validateAuthentication() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') ?? false);

  if(isLoggedIn) {
    $isLoggedIn.classList.add('d-none');
    $isLoggedIn.classList.remove('d-block');

    $isNotLoggedIn.classList.add('d-flex');
    $isNotLoggedIn.classList.remove('d-none');
  } else {
    $isLoggedIn.classList.remove('d-none');
    $isLoggedIn.classList.add('d-block');

    $isNotLoggedIn.classList.remove('d-flex');
    $isNotLoggedIn.classList.add('d-none');
  }
}

function validateType() {
  const getType = localStorage.getItem('type') || "personal";

  $calculatorService.querySelector('a').href = `/pages/calculadora/${getType}/calculadora-home.html`;

  if(getType === "personal" || getType === "familiar") {
    $activeService.classList.add('d-block');
    $activeService.classList.remove('d-none');

    if(getType === "personal") {
      $activeService.querySelector('a').href = "/pages/flujo/registro-de-actividades-diarias-transporte.html";
    } else {
      $activeService.querySelector('a').href = "/pages/familiar.html";
    }
  } else {
    $activeService.classList.remove('d-block');
    $activeService.classList.add('d-none');
  }
}