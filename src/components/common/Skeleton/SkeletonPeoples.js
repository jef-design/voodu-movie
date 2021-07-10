import Shimmer from "./Shimmer";
import SkeletonElements from "./SkeletonElements";

const SkeletonPeople = () => {
    return (
         <div className="person-card-wrapper">
                <SkeletonElements type="people-card">
                
                </SkeletonElements>
                <SkeletonElements type="people-name"/>
                <Shimmer/>
            </div>
    );
};

export default SkeletonPeople;
