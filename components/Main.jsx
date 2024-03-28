import React from "react"

export default function Main() {
    return (
        <div className="main--container">
            <div className="section--header">
                <h1 className="header--title">Our Collection</h1>
                <p className="header--paragraph">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            </div>
            <div className="section--list">
                <div className="buttons">
                    <button className="button">All Products</button>
                    <button className="button">Available Now</button>
                </div>
                <div className="card--list">
                    <div className="card"></div>
                </div>
            </div>
        </div>
    )
}