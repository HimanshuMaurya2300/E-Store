import "./Cart.scss";
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import CartItem from './CartItem/CartItem'
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";



const Cart = ({ setShowCart }) => {

    const navigate = useNavigate();
    const { cartItems, cartSubTotal, setScrollLock, handlePageScroll, setCartItems, setCartCount } = useContext(Context)

    const navigateHome = () => {
        navigate('/')
    }


    const handleCheckout = () => {
        navigate('/success')
        setShowCart(false)
        setCartItems([])
        setCartCount(0)
    }


    return (

        <div className="cart-panel">
            <div className="opac-layer-container">
                <div className="opac-layer"></div>
            </div>

            <div className="cart-content">
                <div className="cart-header">

                    <span className="heading">Shopping Cart</span>

                    <span
                        className="close-btn"
                        onClick={() => {
                            setScrollLock(false)
                            setShowCart(false)
                            handlePageScroll()
                        }}
                    >
                        <MdClose />
                        <span className="text">close</span>
                    </span>

                </div>

                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <button
                        className="return-cta"
                        onClick={() => {
                            setScrollLock(false)
                            setShowCart(false)
                            navigateHome()
                            handlePageScroll()
                        }}
                    >
                        RETURN TO SHOP
                    </button>
                </div>}


                {!!cartItems?.length &&
                    <>

                        <CartItem />

                        <div className="cart-footer">

                            <div className="subtotal">
                                <span className="text">Subtotal</span>
                                <span className="text total">&#8377;{cartSubTotal}</span>
                            </div>

                            <div className="button">
                                <button className="checkout-cta" onClick={handleCheckout}>
                                    Checkout
                                </button>
                            </div>

                        </div>
                    </>
                }

            </div>
        </div>
    )
};

export default Cart;
