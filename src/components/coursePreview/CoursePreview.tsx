import dayjs from "dayjs"
import styled from "styled-components"
import { AccountPhotoWrapper, EmptyPhoto } from "../header/account-panel/AccountPhoto"
import { GrayLine } from "../lines"
import { H2, P, PSmall } from "../typographic"
import { ReactComponent as CalendarIcon } from "../../images/calendar.svg"
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right.svg"
import { ReactComponent as UsersIcon } from "../../images/user-group.svg"
import { DifficultLevel } from "../Level/DifficultLevel"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
    width: 100%
`

const CourseHeader = styled.div`
    border-radius: 4px;
    border: 1px solid rgba(245, 245, 245, 0.04);
    background: #F6D658;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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

const AuthorWrapper = styled.div`
    display: flex;
    gap: 15px;
`

const DarkPSmall = styled(PSmall)`color: #11100E`
const DarkP = styled(P)`color: #11100E`
const DarkH2 = styled(H2)`color: #11100E`
const DarkGrayLine = styled(GrayLine)`background: rgba(17, 16, 12, 0.25);`

const InfoBlock = styled.div`
    display: flex;
    gap: 2px;
    flex-direction: column;
`

const TextWithIcon = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`

export const CoursePreview = ({ course }: { course: any }) => {
    const { t } = useTranslation()
    const courseAuthorPhoto = course.author.avatar_url;
    const formattedDeadline = dayjs.unix(course.deadline).format('DD/MM');
    const courseLevel = 3
    return (
        <Wrapper>
            <CourseHeader>
                <InfoBlock>
                    <DarkPSmall>{t('course.course')}</DarkPSmall>
                    <DarkH2>{course.name}</DarkH2>
                </InfoBlock>
                <DarkGrayLine />
                <AuthorWrapper>
                    <AccountPhotoWrapper>
                        {courseAuthorPhoto ? <img src={courseAuthorPhoto} alt="Author" /> : <EmptyPhoto >{course.author.name[0]}</EmptyPhoto>}
                    </AccountPhotoWrapper>
                    <InfoBlock>
                        <DarkPSmall>{t('course.author')}</DarkPSmall>
                        <DarkP>{course.author.name}</DarkP>
                    </InfoBlock>
                </AuthorWrapper>
            </CourseHeader>
            <CourseData>
                <InfoBlock>
                    <PSmall transparent={0.5}>{t('course.duration')}</PSmall>
                    <TextWithIcon>
                        <CalendarIcon />
                        <P>{formattedDeadline}</P>
                    </TextWithIcon>
                </InfoBlock>
                <GrayLine />
                <InfoBlock>
                    <PSmall transparent={0.5}>{t('course.trainingNumber')}</PSmall>
                    <TextWithIcon>
                        <ArrowRightIcon />
                        <P>{course.program.workouts.length}</P>
                    </TextWithIcon>
                </InfoBlock>
                <GrayLine />
                <InfoBlock>
                    <PSmall transparent={0.5}>{t('course.users')}</PSmall>
                    <TextWithIcon>
                        <UsersIcon />
                        <P>{course.users_count}</P>
                    </TextWithIcon>
                </InfoBlock>
                <GrayLine />
                <InfoBlock>
                    <PSmall transparent={0.5}>{t('course.difficulty')}</PSmall>
                    <DifficultLevel difficultLevel={courseLevel} />
                </InfoBlock>
            </CourseData>
        </Wrapper>
    )
}
