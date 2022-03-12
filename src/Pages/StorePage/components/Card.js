import React from "react";

function Card() {
    return (
            <div className='card'>
                <img src={require('./storePageCar.png')} className="card-img" alt="bmw"/>
                <h2 className='card-title'>Model: BMW 4 Series</h2>
                <p className="card-content">
                    <ul>
                        <li>19" Bicolour Double-spoke M light alloy wheels</li>
                        <li>Exclusive Aluminium Fabric High-gloss interior trim </li>
                        <li>BMW High-gloss Shadow Line with extended contents</li>
                        <li>Adaptive M suspension</li>
                    </ul>
                </p>
                <button className="card-btn">BUY</button>
            </div>
    )
}
export default Card;