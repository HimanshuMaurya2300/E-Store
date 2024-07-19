import { useEffect, useContext, useState } from "react";
import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from '../../utils/api'
import { Context } from '../../utils/context.js'
import CategorySkeleton from "./Category/CategorySkeleton.jsx";
import ProductSkeleton from "../Products/ProductSkeleton.jsx";
import { FadeLoader } from "react-spinners";

const Home = () => {

    const { categories, setCategories, products, setProducts, axiosError, setAxiosError } = useContext(Context);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);

        const fetchInitialData = async () => {
            try {
                const productsResponse = await fetchDataFromApi('/api/products?populate=*');
                const categoriesResponse = await fetchDataFromApi('/api/categories?populate=*');

                console.log(productsResponse)
                console.log(categoriesResponse)

                setProducts(productsResponse);
                setCategories(categoriesResponse);
            } catch (error) {
                if (error.name === 'AxiosError') {
                    setAxiosError(true);
                }
            } finally {
                setLoader(false);
            }
        };

        fetchInitialData();

    }, [setCategories, setProducts, setAxiosError]);

    return (
        <div>
            <div className="loader">
                {loader && <FadeLoader color="#36d7b7" />}
            </div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {categories === undefined || axiosError ? <CategorySkeleton /> : <Category categories={categories} />}
                    {products === undefined || axiosError ? <ProductSkeleton /> : <Products headingText="Popular Products" products={products} />}
                </div>
            </div>
        </div>
    )
};

export default Home;
