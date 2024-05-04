import axios from "axios"

const authApiUrl = process.env.REACT_APP_API_URL + '/user/auth/email'
const userApiUrl = process.env.REACT_APP_API_URL + '/user'
const newEmailUrl = process.env.REACT_APP_API_URL + '/console/admin/email'

export const sendEmail = async (email: string) => {
  return await axios.post(authApiUrl, { email: email }).then((res) => { return res.data }).catch(() => { throw new Error() })
}

export const sendCode = async (email: string, code: number) => {
  return await axios.post(userApiUrl, { email: email, code: code }).then((res) => { return res.data }).catch(() => { throw new Error() })
}

export const changeEmail = async (newEmail: string, token: string) => {
  const data = { "email": newEmail }
  return await axios.post(newEmailUrl, data, { headers: { Authorization: token } }).then((res) => { return res.data }).catch(() => { throw new Error() })
}
