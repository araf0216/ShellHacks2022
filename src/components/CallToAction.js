import React from 'react';
import googlePlayLogo from '../assets/google-play-badge.png'
import appStoreLogo from '../assets/app-store-badge.svg'

const CallToAction = () => {
    return (    
        <div className='Call-to-action'>
            <div className='Call-to-action-sub'>
                <h2>Managing Subscriptions <br/> Made Simple</h2>
                <button>Sign up for free</button>
                <p>#1 most downloaded personal finance app among college students</p>
            </div>
            <div className='Download-links'>
                <img src={appStoreLogo} alt='Google Play Download' />
                <img src={googlePlayLogo} alt='Google Play Download' />
            </div>
        </div>
    )
}


export default CallToAction