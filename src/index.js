import './scss/app.scss'
import ValidityChecker from './validityChecker'

// select input elements
const emailInput = document.querySelector('#input-email')
const countryInput = document.querySelector('#input-country')
const postalInput = document.querySelector('#input-postal-code')
const passwordInput = document.querySelector('#input-password')
const confirmPasswordInput = document.querySelector('#input-confirm-password')

emailInput.addEventListener('input', disableValidityCheck)
countryInput.addEventListener('input', disableValidityCheck)
postalInput.addEventListener('input', disableValidityCheck)
passwordInput.addEventListener('input', disableValidityCheck)
confirmPasswordInput.addEventListener('input', disableValidityCheck)

countryInput.addEventListener('change', checkCountry)
postalInput.addEventListener('change', checkPostal)
passwordInput.addEventListener('change', checkPasswordsMatch)
confirmPasswordInput.addEventListener('change', checkPasswordsMatch)

// setup validity checker

const validityChecker = ValidityChecker()

console.log(validityChecker)

function checkCountry(e) {
  const t = e.target
  if (validityChecker.checkCountry(t)) {
    t.setCustomValidity('')
  } else {
    t.setCustomValidity('This must be a real country')
  }
  t.reportValidity()
}

function checkPostal(e) {
  const t = e.target
  validityChecker.checkPostal(t)
}

// computing here because access to both passwords inputs
function checkPasswordsMatch(e) {
  const t = e.target
  let retBool = false
  console.log(`${passwordInput.value} ${confirmPasswordInput.value}`)
  if (
    passwordInput.value !== confirmPasswordInput.value &&
    passwordInput.value != null &&
    passwordInput.value !== '' &&
    confirmPasswordInput.value != null &&
    confirmPasswordInput.value !== ''
  ) {
    console.log("shouldn't be here")
    t.setCustomValidity('Passwords must match')
    t.reportValidity()
  } else {
    retBool = true
  }
  return retBool
}

function disableValidityCheck(e) {
  const t = e.target
  t.setCustomValidity('')
  t.reportValidity()
}
