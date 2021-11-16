import React from 'react'

function Card({card}) {
    return (
        <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
             <div className="backgroundEffect" />
             <div className="pic">
               <img className src={card.image} alt />
               <div className="date">
                 <span className="month">{card.cardRank} </span>
               </div>
             </div>
             <div className="content">
               <p className="h-1 mt-4">{card.name}</p>
               <p className="text-muted mt-3">
                 {card.description}
               </p>
               <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                 <div className="btn btn-primary">
                   Đăng kí ngay
                   <span className="fas fa-arrow-right" />
                 </div>
                 <div className="d-flex align-items-center justify-content-center foot">
                   <p className="ps-3 icon text-muted">
                     <span className="fas fa-comment-alt pe-1" />5
                   </p>
                 </div>
               </div>
             </div>
           </div>
    )
}

export default Card
