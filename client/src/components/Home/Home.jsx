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

        setLoader(true)

        const getProducts = () => {
            fetchDataFromApi('/api/products?populate=*').then(res => {
                if (res.name === 'AxiosError') {
                    setAxiosError(true)
                }
                setProducts(res)
            })
        }

        const getCategories = () => {

            fetchDataFromApi('/api/categories?populate=*').then(res => {
                setCategories(res)
                // console.log(res)
            })
        }

        getCategories()
        getProducts()

        if (products !== undefined && categories !== undefined) {
            setLoader(false)
        }

    }, [setCategories, setProducts, setAxiosError, products, categories])


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
