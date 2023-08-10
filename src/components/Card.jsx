import React from 'react'

function Card(props) {
    const cardData = props.item
    let badgeText

    if(cardData.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    }
    else if(cardData.location === "Online")
    {
        badgeText = "ONLINE"
    }

  return (
        <div className="card">
            <img src={`src/assets/${cardData.coverImg}`} alt="card-image" className="card-image" />
            <div className="rating">
                <img src="src/assets/star.png" alt="star image" className="star-rating" />
                <span className="rating-number">{cardData.stats.rating}</span>
                <span className="rating-person-number">({cardData.stats.reviewCount})</span>
                <ul className='rating-region'>
                    <li><span className="region">{cardData.location}</span></li>
                </ul>
            </div>
            <div className="card-title">{cardData.title}</div>
            <div className="price"><span className="per-person">From ${cardData.price}</span> / person</div>
            {badgeText && <div className="card-tag">{badgeText}</div>}
        </div>
  )
}

export default Card