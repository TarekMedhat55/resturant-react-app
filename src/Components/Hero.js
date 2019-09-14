import React from 'react'

function Hero({hero,children}) {
    return (
        <header className={hero}>
            <div className="heroOverlay">
            {children}
            </div>
        </header>
    )
}

export default Hero
