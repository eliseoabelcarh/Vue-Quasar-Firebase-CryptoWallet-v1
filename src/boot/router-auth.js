import { firebaseAuth } from '../boot/firebase'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    firebaseAuth.onAuthStateChanged(user => {
      console.log('abfeoreecach en rotuher*ath: ', user)
      if (!user && to.path !== '/') {
        next({ name: 'Home' })
      } else {
        // console.log(loggedIn);
        next()
      }
      next()
    })
  })
}
