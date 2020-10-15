import firebase from 'firebase'


export async function getCurrentUserFirebase() {
  return firebase.auth().currentUser
}
