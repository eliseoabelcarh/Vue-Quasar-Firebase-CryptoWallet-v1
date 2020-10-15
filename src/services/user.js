

const user = {


  id: 1,

}
import firebase from 'firebase'


// service.getCurrentUser
export async function getCurrentUserId() {
  //console.log(user.id, 'esto es IDDDDDDDDDDDDDDD')
  //return user.id
  console.log('antes de firebase encontró: ')
  let user = firebase.auth().currentUser
  console.log('en userServie firebase encontró: ', user)
  return user.uid
}
