import Http from '../utils/httpUtils'
import {
  CHECK_EXISTING_USER,
  CHECK_TOKEN,
  CREATE_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  LOGIN, LOGOUT,
  REGISTER,
  UPDATE_NOTE
} from './endpoints'

export function CheckExistingUser(params) {
  return Http.post(CHECK_EXISTING_USER, params)
}

export function CheckToken() {
  return Http.get(CHECK_TOKEN)
}

export function Login(params) {
  return Http.post(LOGIN, params)
}

export function Logout() {
  return Http.get(LOGOUT)
}

export function Register(params) {
  return Http.post(REGISTER, params)
}

export function GetNotes() {
  return Http.get(GET_NOTES)
}

export function CreateNote(params) {
  return Http.post(CREATE_NOTE, params)
}

export function DeleteNote(params) {
  return Http.post(DELETE_NOTE, params)
}

export function UpdateNote(params) {
  return Http.post(UPDATE_NOTE, params)
}
