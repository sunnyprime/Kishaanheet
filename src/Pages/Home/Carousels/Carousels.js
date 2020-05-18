import React from 'react'
import { Carousel } from 'antd';
// import "./Carousels.scss"

const imgs = [
  {src:"https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/bigstock-IoT-agriculture-164157296_bjhg70.jpg"},
  {src:"https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/DUSwqYyXkAENKHP.jpg"},
  {src:"https://github.com/sunnyprime/LOGO/blob/master/carousol/Advanced-Farming-Market8-002.jpg?raw=true"}
]

export default function Carousels() {
    return (
       
            <Carousel autoplay>
    {/* <div>
      <h3>1</h3>
    </div> */}
    {/* <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div> */}
    {/* <div> */}
      
    {imgs.map(item=>{
      return(<div><img src="https://raw.githubusercontent.com/sunnyprime/LOGO/master/carousol/bigstock-IoT-agriculture-164157296_bjhg70.jpg" width="500px" height="200px" /></div>)
    })}
    
  </Carousel>
       
    )
}
