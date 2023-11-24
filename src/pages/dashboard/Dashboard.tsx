import { useState, useEffect } from "react";
import { PageContainer } from "../../components/pageContainer";
import { useToggle } from "../../hooks/hookToggle";
import { EmptyDashboard } from "../../components/dashboard-page/dashboardSection/EmptyDashboard";
import { JoinCourseModal } from "../../components/dashboard-page/JoinCourseModal";
import { sessionStore } from "../../store/sessionStore";
import { userStore } from "../../store/profileStore";
import { getUserCourses } from "../../utils/API/courses/api-courses";
import { CoursesDashboard } from "../../components/dashboard-page/dashboardSection/CourseDashboard";
import { DashboardSkeleton } from "../../components/dashboard-page/dashboardSection/Skeleton";
import { StatusHeader } from "../../components/dashboard-page/statusHeader/StatusHeader";

export const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const courseLength = courses.length;
  const user = userStore.getUserProfile();
  const [isJoin, toggleJoin] = useToggle();
  const [courseCode, setCourseCode] = useState("");
  const username = user.name;
  const level = 0; // api data = будет позже

  useEffect(() => {
    const fetchCourses = async () => {
      const token = sessionStore.getSessionCode();
      if (token) {
        const coursesFromApi = await getUserCourses(token);
        setCourses(coursesFromApi);
      }
    };
    fetchCourses()
      .then(() => {
        setCoursesLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <PageContainer>
        <StatusHeader
          username={username}
          level={level}
          courses={courses}
          coursesLoading={coursesLoading}
        />
        {coursesLoading ? (
          <DashboardSkeleton />
        ) : courseLength > 0 ? (
          <CoursesDashboard courses={courses} toggleModal={toggleJoin} />
        ) : (
          <EmptyDashboard toggleModal={toggleJoin} />
        )}
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
