import { fail, redirect } from '@sveltejs/kit';


// Datos de usuarios existentes (simulados)
const usuariosExistentes = {
  'usuario1': { email: 'usuario1@example.com', password: 'password1' },
  'usuario2': { email: 'usuario2@example.com', password: 'password2' },
  'usuario3': { email: 'usuario3@example.com', password: 'password3' }
};

let userMatch = {};



/** @satisfies {import('./$types').Actions} */
export const actions = {
  //login
  ing: async ({event, cookies, request}) => {
    // TODO log the user in
    const data = await request.formData();
    const user = data.get('Usuario');
    const password = data.get('Password');


    // Validar si el usuario no coincide
    if (usuariosExistentes[user]) {
      userMatch[user] = {email: usuariosExistentes[user]['email'], password: usuariosExistentes[user]['password']};
      console.log(userMatch)
    }else{
      return { response: 'usuarioInexistente' };
    }
    // Validar si el password no coincide
    if (userMatch[user]['password'] != password) {
      return { response: 'passwordInexistente' };
    }

  cookies.set('sessionid', user, { path: '/' });
    return {response: "yeah",
      'user': user,
      'password': password
    }
  },
  //registro
  reg: async ({event, request}) => {
    // TODO register the user
    const data = await request.formData();
    const email = data.get('Email');
    const user = data.get('Usuario');
    const password = data.get('Password');
    const repassword = data.get('Re-Password');


    // Validar si las contraseñas coinciden
    if (password !== repassword) {
      return { response: 'passDif' };
    }

    // Validar si el email ya existe
    if (Object.values(usuariosExistentes).some(u => u.email === email) ) {
      return { response: 'EmailExistente' };
    }
    // Validar si el usuario ya existen
    if (usuariosExistentes[user]) {
      return { response: 'usuarioExistente' };
    }


    // Aquí iría la lógica para guardar el nuevo usuario en la base de datos
    usuariosExistentes[email] = { usuario: user, password: password };

    // Si todo está bien, retornar una respuesta de éxito
    return { response: 'success' };


  }

}
