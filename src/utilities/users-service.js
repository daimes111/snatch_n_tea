import * as usersAPI from './users-api'

export async function signUp (userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData)
  // Persist the token to localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}

export async function login (credentials) {
  const token = await usersAPI.login(credentials)
  // console.log(token)
  // Persist the token to window.localStorage
  window.localStorage.setItem('token', token)
  return getUser()
}

export function getToken () {
  const token = window.localStorage.getItem('token')
  // getItem will return null if no key
  if (!token) {
    // console.log("no token")
    return null}
  const payload = JSON.parse(atob(token.split('.')[1]))
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // console.log("ext")
    // Token has expired
    window.localStorage.removeItem('token')
    return null
  }
  // console.log("get token: ", token)
  return token
}

export function getUser () {
  const token = getToken()
  // console.log("get user token: ", token)
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut () {
  window.localStorage.removeItem('token')
}