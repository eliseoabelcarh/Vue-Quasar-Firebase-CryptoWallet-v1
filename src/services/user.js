

const user = {


  id: 1,

}
import firebase from 'firebase'


// service.getCurrentUser
export async function getCurrentUserId() {
  //return user.id
  let user = firebase.auth().currentUser
  //console.log('en userServie firebase encontró: ', user)
  return user.uid
}
