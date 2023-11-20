import './Success.scss'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../utils/context";



const Success = () => {

    const navigate = useNavigate();

    const { setScrollLock, handlePageScroll } = useContext(Context)

    const navigateHome = () => {
        setScrollLock(false)
        navigate('/')
        handlePageScroll()
    }


    return (
        <div className='container'>

            <div className='container-box'>

                <AiOutlineCheckCircle size={80} className='msgSymbol' />

                <div className='messageheading'>
                    Transaction Complete
                </div>

                <div className='message'>
                    <p>Your payment has been processed!</p>
                    <p>Details of transaction are sent over email</p>
                </div>

                <button onClick={navigateHome}>Return to shop</button>

            </div>

        </div>
    )
}

export default Success