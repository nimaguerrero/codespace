export const validateName = (name,errors) => {
    if (!name) {
        errors.name = 'El nombre es requerido';
      } else if (
        !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)
      ) {
        errors.name = 'Nombre invalido';
      } else if (name.length < 2) {
        errors.name = 'Debe tener un minimo de 2 caracteres';
      } 
}

export const validateEmail = (email,errors) => {
    if (!email) {
        errors.email = 'El correo es requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
      ) {
        errors.email = 'Correo invalido';
      } 
}

export const validatePassword = (password,errors) => {
    if (!password) {
        errors.password = 'La contraseña es requerida';
      }
    else if (password.length < 8) {
        errors.password = 'Debe tener un minimo de ocho caracteres'
    }
}

export const equalPasswords = (pass1,pass2, errors) => {
    if (pass1!==pass2) {
        errors.password = 'Tiene que ser la misma contraseña'
        errors.passwordRepeat = 'Tiene que ser la misma contraseña'
    }
}