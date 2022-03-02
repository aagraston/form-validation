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

  return { checkEmail, checkCountry }
}

export default validityChecker
