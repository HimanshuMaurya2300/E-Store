import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import './Failed.scss'
import { useNavigate } from 'react-router-dom';

const Failed = () => {

    const navigate = useNavigate();


    const navigateHome = () => {
        navigate('/')
    }



    return (
        <div className='container'>

            <div className='container-box'>

                <RxCrossCircled size={80} className='cancel' />

                <div className='messageheading'>
                    Transaction failed
                </div>

                <div className='message'>
                    The transaction failed due to a technocal error. If your money was debited, you should get a refund within the next 24 hrs.
                </div>

                <button onClick={navigateHome}> Return to shop</button>

            </div>

        </div>
    )
}

export default Failed