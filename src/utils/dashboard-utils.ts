import { ICourse } from "../interfaces/ICourse";

export const countAverageCourseDone = (courses: ICourse[]) => {
    const totalPercentages = courses.map(course => {
        if (course.workout_num === 0) {
            return 0;
        }
        return (course.workouts_count / course.workout_num) * 100;
    });

    const nonZeroPercentages = totalPercentages.filter(percentage => percentage !== Infinity);
    return nonZeroPercentages.reduce((total, percentage) => total + percentage, 0) / nonZeroPercentages.length;
}