import "./ProductSkeleton.scss";

const Products = () => {
    return (
        <div className="products-container">
            <div className="sec-heading">
                Popular Products
            </div>

            <div className="products">

                {Array.from({ length: 20 }).map((ele, index) => (
                    <div className="product-card" key={index}>
                        <div className="thumbnail">
                        </div>
                        <div className="prod-details">
                            <span className="name"></span>
                            <span className="price"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;