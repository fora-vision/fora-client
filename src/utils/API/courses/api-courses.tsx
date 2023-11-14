import axios from "axios"

const courseApiUrl = process.env.REACT_APP_API_URL + '/user/course'

export const getUserCourses = async (token: string) => {
    return await axios.get(courseApiUrl, { headers: { Authorization: token } }).then(result => result.data.courses).catch(() => { throw new Error() })
}

export const addUserCourse = async (token: string, courseId: number) => {
    return await axios.post(courseApiUrl, { course_id: courseId }, { headers: { Authorization: token } }).then(result => result.data).catch(() => { throw new Error() })
}

export const getCourseInfo = async (token: string, courseCode: string) => {
    const courseDetailsApiUrl = courseApiUrl + `/search?invite_code=${courseCode}`
    return axios.get(courseDetailsApiUrl, { headers: { Authorization: token } }).then(result => result.data).catch(() => { throw new Error() })
}

export const getRoomUrl = async (token: string, courseId: number, workoutNum: number) => {
    const roomUrlApi = courseApiUrl + '/workout/room_url';
    const params = {
        course_id: courseId,
        workout_index: workoutNum
    };
    return axios.get(roomUrlApi, { headers: { Authorization: token }, params: params }).then(result => result.data).catch(() => { throw new Error() })
}