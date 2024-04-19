import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from './Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from '../../utils/api'
import { Context } from '../../utils/context.js'
import CategorySkeleton from "./Category/CategorySkeleton.jsx";
import ProductSkeleton from "../Products/ProductSkeleton.jsx";

const Home = () => {

    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {

        const getProducts = () => {
            fetchDataFromApi('/api/products?populate=*').then(res => {
                setProducts(res)
                // console.log(res)
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
    }, [setCategories, setProducts])

    const offline = !navigator.onLine

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {categories === undefined || offline ? <CategorySkeleton /> : <Category categories={categories} />}
                    {products === undefined || offline ? <ProductSkeleton /> : <Products headingText="Popular Products" products={products} />}
                </div>
            </div>
        </div>
    )
};

export default Home;
