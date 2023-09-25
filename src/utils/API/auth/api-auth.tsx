import axios from "axios"

const authApiUrl = process.env.REACT_APP_API_URL + '/user/auth/email'
const userApiUrl = process.env.REACT_APP_API_URL + '/user'

export const sendEmail = async (email: string) => {
  return await axios.post(authApiUrl, { email: email }).then((res) => { return res.data }).catch(error => { throw new Error() })
}

export const sendCode = async (email: string, code: number) => {
  return await axios.post(userApiUrl, { email: email, code: code }).then((res) => { return res.data }).catch(error => { throw new Error() })
}