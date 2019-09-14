import React from 'react'

function Starts(props) {
    const {start} = props
    return (
        <React.Fragment>
            <div className="starts">
                <div className="borderLine">
                    <h4 className="popularTitle"><span className="title">{start.name}</span><span className="price">${' '}{start.price}.00</span></h4>
                    <p className="desc">{start.desc}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Starts
