import firebase from 'firebase'


export async function getCurrentUser() {
  return firebase.auth().currentUser
}
