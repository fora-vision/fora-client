import { ICourse } from "./ICourse";

export interface IStatusHeader {
  username: string,
  level: number,
  courses: ICourse[],
  coursesLoading: boolean
}