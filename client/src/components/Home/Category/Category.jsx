import "./Category.scss";
import { useNavigate } from 'react-router-dom'


const Category = ({ categories }) => {

    const navigate = useNavigate()

    return (
        <div className="shop-by-category">
            <div className="categories">
                {
                    categories?.data?.map((item) => (

                        <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>

                            {/* testing */}
                            {/* <img src={process.env.REACT_APP_DEV_URL + item?.attributes.img.data.attributes.url} alt="" /> */}

                            <img src={item.attributes.img.data[0].attributes.url} alt="" />

                            <div className="title">
                                <span>{item.attributes.title}</span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Category;
