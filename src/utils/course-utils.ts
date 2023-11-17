import { ICourse, IExpandedCourse, IUser } from "../interfaces/ICourse";

export const countTotalProgress = (course: ICourse | IExpandedCourse) => {
  // const totalLessons = course.workouts_count;
  // const doneLessons = course.workout_num;
  const totalLessons = course.program?.workouts.length || course.workouts_count;
  const doneLessons = course.level || course.workout_num;
  return Number(((doneLessons / totalLessons) * 100).toFixed(0))
}

export const sortByPosition = (a: IUser, b: IUser) => {
  return a.position - b.position;
}
