import React from 'react'

function Popular(props) {
    const {popular} = props
    return (
        <React.Fragment>
            <div className="col-md-5">
                <div className="borderLine">
                    <h4 className="popularTitle"><span className="title">{popular.name}</span><span className="price">${' '}{popular.price}.00</span></h4>
                    <p className="desc">{popular.desc}</p>
                </div>
            </div>
            <div className="col-md-1"></div>
        </React.Fragment>
    )
}

export default Popular
