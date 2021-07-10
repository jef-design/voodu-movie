import SkeletonElements from "./SkeletonElements";

const SkeletonPersonInfo = () => {
    return (
        <section className="person">
            <div className="peron__img">
                <SkeletonElements type="personimage" />
            </div>

            <div className="person__details">
                <SkeletonElements type="title" />
                <SkeletonElements type="text" />
            </div>
            <h1>LOADING HATOP</h1>
        </section>
    );
};

export default SkeletonPersonInfo;
