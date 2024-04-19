import './CategorySkeleton.scss';

const CategorySkeleton = () => {

    return (
        <div className="skeleton">
            <div className="categories">
                {Array.from({ length: 4 }).map((ele, index) => (
                    <div className="category" key={index}>
                        <img src={''} alt="" />
                        <div className="title">
                            <span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CategorySkeleton;
