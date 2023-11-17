import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ComponentSkeleton = ({ ...props }) => {
    return <Skeleton baseColor={'rgba(245, 245, 245, 0.04)'} highlightColor=' rgba(255, 255, 255, 0.01)'{...props} />
};