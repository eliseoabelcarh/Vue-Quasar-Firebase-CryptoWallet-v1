import { firebaseAuth } from '../boot/firebase'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    firebaseAuth.onAuthStateChanged(user => {
      console.log('beforeEach Router evalúa user: ', user)
      if (!user && to.path !== '/') {
        next({ name: 'Home' })
      } else {
        next()
      }
      next()
    })
  })
}
