import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HCMore from 'highcharts/highcharts-more';
import {data} from './bubbled.ts'
HCMore(Highcharts);

const App = () => {

 const calculateHeight=()=>{
    return window.innerHeight - 50;
  }

  const getLogoWidth=(point)=>{
    
    return point.radius > 22 ? 44 : point.radius/1.2;

  }

  const showPointName =(point)=>{
    return point.radius > 22 ?true:false
  }


  const getLogoHeight=(point)=>{
    return point.radius > 22 ? 44 : point.radius/1.2;
  }

//   const getWidth=(point)=>{
//     console.log(point.radius*2 + 'px')
//     return `${point.radius*2 }`+ 'px'
//   }


  const [chartOptions, setChartOptions] = useState({

      chart: {
        type: "packedbubble",
        height: calculateHeight(),
      },
      // tooltip: {
      //   useHTML: true,
      //   pointFormat: "<b>{point.name}:</b> {point.value}",
      // },
      plotOptions: {
        packedbubble: {
          minSize: '100%',
          maxSize: '120%',  
          opacity:1,
            point:{
                events:{
                    click:function handleClick(event){
                        console.log(event)
                    },
                }
            },
            
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.001,
            seriesInteraction: false,
            dragBetweenSeries: false,
            parentNodeLimit: true,
            enableSimulation:true,
            bubblePadding:20
          },
          states:{
            hover:{
              enabled:false
            }
          },
          dataLabels: {
            enabled: true,
            useHTML: true,
            allowOverlap:true,
            formatter: function () {
                return (
                    // `<div class='container'>` +
                    // showPointName(this.point) ? this.point.symbol : null +
                    // `<img class='rounded' src="${this.point.url}" width="${getLogoWidth(this.point)}" height="${getLogoHeight(this.point)}"/>` +
                    // "</div>"
                    `<div class='container'> ${showPointName(this.point) ? this.point.symbol : ''}
                    <img class='rounded' src="${this.point.url}" width="${getLogoWidth(this.point)}" height="${getLogoHeight(this.point)}"/>
                    </div>`
                );

            },
          },
        },
      },
      series: [
        {
          name: "ASEAN",
          data: data,
        },
      ],

   
  });




  return (
      <div>
        <HighchartsReact
          height={'500px'}
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )
}

export default App