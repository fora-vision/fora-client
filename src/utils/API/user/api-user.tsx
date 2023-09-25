import axios from "axios"
import { IUpdateProfile } from "../../../interfaces/api/IApi"

const userApiUrl = process.env.REACT_APP_API_URL + '/user'
const userProfileApiUrl = process.env.REACT_APP_API_URL + '/user/profile'

export const getUserInfo = async (token: string) => {
  return axios.get(userApiUrl, { headers: { Authorization: token } }).then(result => result.data).catch(() => { throw new Error() })
}

export const updateProfile = async (profileData: IUpdateProfile, token: string) => {
  return await axios.post(userProfileApiUrl, profileData, { headers: { Authorization: token } }).then((res) => { return res.data }).catch(error => { throw new Error() })
}