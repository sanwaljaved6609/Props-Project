import React from 'react'

function Card(p) {
  return (
    <div>
      
      <div className="cards">
        <div className="card">
        <img src={p.imgsrc} alt={p.imgalt} className='pic' />
          <div className="info">
            <span className='span' > Original Netflix Series </span>
            <h2>{p.seriesTitle}</h2>
            <a href ={p.seriesLink} target='blank' >
            <button className='watch-btn'>WATCH NOW</button>
            </a>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Card
