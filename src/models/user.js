


export function crearProfileForGoogleUsers(userGoogle) {
  let profile = {}
  profile.username = (userGoogle.email).substring(0, (userGoogle.email).lastIndexOf("@"));
  profile.name = userGoogle.displayName
  profile.email = userGoogle.email
  profile.picture = userGoogle.photoURL
  return profile

}
