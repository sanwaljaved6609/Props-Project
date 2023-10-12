import React from 'react'
import Card from './component/cards.jsx'
import "./App.css"
import sData from './component/seriesData.jsx'

function App() {
  return (
    <div>

      <h1 className='heading' >LIST OF TOP 5 NETFLIX SERIES</h1>

    <Card imgsrc={sData[0].imgsrc}
    seriesTitle={sData[0].sname}
    imgalt={sData[0].imgalt}
    seriesLink={sData[0].slink}/>

<Card imgsrc={sData[1].imgsrc}
    seriesTitle={sData[1].sname}
    imgalt={sData[1].imgalt}
    seriesLink={sData[1].slink}/>

<Card imgsrc={sData[2].imgsrc}
    seriesTitle={sData[2].sname}
    imgalt={sData[2].imgalt}
    seriesLink={sData[2].slink}/>

<Card imgsrc={sData[3].imgsrc}
    seriesTitle={sData[3].sname}
    imgalt={sData[3].imgalt}
    seriesLink={sData[3].slink}/>

<Card imgsrc={sData[4].imgsrc}
    seriesTitle={sData[4].sname}
    imgalt={sData[4].imgalt}
    seriesLink={sData[4].slink}/>

     

    </div>
  )
}

export default App
