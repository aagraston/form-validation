import Countries from './countries'

const validityChecker = () => {
  const countryChecker = Countries()

  const checkEmail = (element) => {
    let retBool = false
    if (element.checkValidity()) {
      retBool = true
    }
    return retBool
  }

  const checkCountry = (element) => {
    let retBool = false
    if (countryChecker.isCountry(element.value)) {
      retBool = true
    }
    return retBool
  }

  const checkPostal = (element) => {
    let retBool = false
    if (element.value.includes('-')) {
      if (element.checkValidity()) {
        retBool = true
      }
    } else if (element.value.length === 6) {
      const charArrayP1 = element.value.slice(0, 3)
      const charArrayP2 = element.value.slice(3, 6)
      const newString = `${charArrayP1}-${charArrayP2}`

      element.value = newString

      retBool = true
    } else {
      element.setCustomValidity('Please input a properly formatted postal code')
      element.reportValidity()
    }
    return retBool
  }

  return { checkEmail, checkCountry, checkPostal }
}

export default validityChecker
