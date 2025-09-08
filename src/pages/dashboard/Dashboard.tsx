import { PageContainer } from "../../components/pageContainer";
import { JoinCourseModal } from "../../components/dashboard-page/JoinCourseModal";
import { StatusHeader } from "../../components/dashboard-page/statusHeader/StatusHeader";
import { useDashboardPage } from "../../hooks/use-dashboardPage.hook";
import { Courses } from "../../components/dashboard-page/Courses";

export const Dashboard = () => {
  const {
    username,
    level,
    courses,
    coursesLoading,
    toggleJoin,
    isJoin,
    courseCode,
    setCourseCode,
  } = useDashboardPage();

  return (
    <div>
      <PageContainer>
        <StatusHeader
          username={username}
          level={level}
          courses={courses}
          coursesLoading={coursesLoading}
        />
        <Courses
          coursesLoading={coursesLoading}
          courses={courses}
          toggleJoin={toggleJoin}
        />
      </PageContainer>
      {isJoin && (
        <JoinCourseModal
          code={courseCode}
          setCode={setCourseCode}
          toggleModal={toggleJoin}
        />
      )}
    </div>
  );
};
