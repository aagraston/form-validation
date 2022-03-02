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

function disableValidityCheck(e) {
  const t = e.target
  t.setCustomValidity('')
  t.reportValidity()
}
