import styled from "styled-components"
import { GrayLine } from "../lines"
import { IExpandedCourse } from "../../interfaces/ICourse"
import { CourseAndAuthor } from "./CourseAndAuthor"
import { CourseDuration } from "./CourseDuration"
import { CourseWorkouts } from "./CourseWorkouts"
import { CourseUsers } from "./CourseUsers"
import { CourseLevel } from "./CourseLevel"

const Wrapper = styled.div`
    width: 100%
`

const CourseData = styled.div`
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid var(--transparent-white-4, rgba(245, 245, 245, 0.04));
    background: var(--transparent-white-4, rgba(245, 245, 245, 0.04));
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    padding: 20px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

export const InfoBlock = styled.div`
    display: flex;
    gap: 2px;
    flex-direction: column;
`

export const TextWithIcon = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`

export const CoursePreview = ({ course }: { course: IExpandedCourse }) => {
    return (
        <Wrapper>
            <CourseAndAuthor course={course} />
            <CourseData>
                <CourseDuration course={course} />
                <GrayLine />
                <CourseWorkouts course={course} />
                <GrayLine />
                <CourseUsers course={course} />
                <GrayLine />
                <CourseLevel course={course} />
            </CourseData>
        </Wrapper>
    )
}
