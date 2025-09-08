import { ICourse } from "../interfaces/ICourse";

export const countAverageCourseDone = (courses: ICourse[]) => {
    const totalPercentages = courses.map(course => {
        if (course.workout_num === 0) {
            return 0;
        }
        return (course.workout_num / course.workouts_count) * 100;
    });
    const nonZeroPercentages = totalPercentages.filter(percentage => percentage !== Infinity);
    const result = nonZeroPercentages.reduce((total, percentage) => total + percentage, 0) / nonZeroPercentages.length
    return parseFloat(result.toFixed(1));
}