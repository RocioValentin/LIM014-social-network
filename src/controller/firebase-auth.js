/* ********ADMINISTRAR USUARIOS********* */
export const currentUser = () => {
  firebase.auth().onAuthStateChanged(

  );
};
export const getDataUser = (currentUser) => {
  const db = firebase.firestore();
  return db.collection('user').doc(currentUser).get();
};
export const getCurrentUser = () => firebase.auth().currentUser;

/* ********SIG UP********* */
export const createUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = firebase.auth();
  // Crear usuario con correo electrónico y contraseña
  return user.createUserWithEmailAndPassword(email, password);
};

// enviar e-mail de verificación
export const sendEmail = () => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = firebase.auth();
  const configuration = {
    url: 'http://localhost:5000/#/',
  };
  // Enviar e-mail de verificación
  return getCurrentUser().sendEmailVerification(configuration);
};

/* ********LOG IN********* */

export const loginUser = (email, password) => {
  // Acceso a la información del usuario en el servicio de autenticación
  const user = firebase.auth();
  // Usuarios existentes puedan acceder con su dirección de correo electrónico y una contraseña
  return user.signInWithEmailAndPassword(email, password);
};

export const signInGoogle = () => {
  const user = firebase.auth();
  // Autenticar con Firebase a través del objeto del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  // Para acceder con una ventana emergente
  user.signInWithPopup(provider);
};

// Salir de sesión de un usuario
export const logOut = () => firebase.auth().signOut();

// // Enviar correo de verificación
// export const sendRecoverPass = (email) => {
//   const auth = firebase.auth();
//   return auth.sendPasswordResetEmail(email);
// };

// /* export const updateUsername = (username) => {
//   console.log('ingresó a username');

//   const user = firebase.auth().currentUser;

//   return user.updateProfile({
//     displayName: username,
//   });
// };
//  */