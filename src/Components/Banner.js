import React from 'react'

function Banner({title,subtitle,children}) {
    return (
        <React.Fragment>
            <div className="banner">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Banner
