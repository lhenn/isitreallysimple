export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        username: newUser.username,
        initials: 'tt'
      })
    }).then(() => {
      dispatch({type:'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({type:'SIGNUP_ERROR', err})
    })
  }
}

export const logIn = (credentials) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type:'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type:'LOGIN_ERROR', err})
    })
  }
}

export const logOut = () => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(()=> {
      dispatch({type: 'LOGOUT_SUCCESS'})
    })
  }
}
