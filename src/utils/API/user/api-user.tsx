import axios from "axios"
import { IUpdateProfile } from "../../../interfaces/api/IProfile"

const userApiUrl = process.env.REACT_APP_API_URL + '/user'
const userProfileApiUrl = process.env.REACT_APP_API_URL + '/user/profile'
const userProfileAvatarApiUrl = process.env.REACT_APP_API_URL + '/user/profile/avatar'

export const getUserInfo = async (token: string) => {
  return axios.get(userApiUrl, { headers: { Authorization: token } }).then(result => result.data).catch(() => { throw new Error() })
}

export const updateProfile = async (profileData: IUpdateProfile, token: string) => {
  return await axios.post(userProfileApiUrl, profileData, { headers: { Authorization: token } }).then((res) => { return res.data }).catch(() => { throw new Error() })
}

export const updateProfileAvatar = async (avatar: string, token: string) => {
  return await axios.post(userProfileApiUrl, { avatar: avatar }, { headers: { Authorization: token } }).then((res) => { return res.data }).catch(() => { throw new Error() })
}

export const sendAvatarToApi = async (formData: any, profileId: number, token: string) => {
  const url = userProfileAvatarApiUrl + '?account_id=' + profileId;
  return await axios.post(url, formData, { headers: { Authorization: token } }).then((res) => { return res.data }).catch(() => { throw new Error() })
}