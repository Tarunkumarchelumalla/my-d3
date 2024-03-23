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
    calculateFontSize(point)
    return point.radius > 30 ? 44 : point.radius/1.5;

  }

  const showPointName =(point)=>{
    return true
  }

  const calculateFontSize = (point) => {
    let element = document.getElementById(point.id);
    if (!element) return;
    element.style.fontSize = (point.radius / 2) + 'px';
}


  const getLogoHeight=(point)=>{
    return point.radius > 30 ? 44 : point.radius/1.5;
  }

//   const getWidth=(point)=>
//     console.log(point.radius*2 + 'px')
//     return `${point.radius*2 }`+ 'px'
//   }


  const [chartOptions, setChartOptions] = useState({

      chart: {
        type: "packedbubble",
        height: calculateHeight(),
        title:{
            enabled:false
        }
      },
      tooltip: {
       enabled:false
      },
      plotOptions: {
        packedbubble: {
          minSize: '60%',
          maxSize: '120%',  
          opacity:1,
          showInLegend:false,
          label:{
            enabled:false
          },
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
            jitter:false,
            allowOverlap:true,
            formatter: function () {
                return (
                    // `<div class='container'>` +
                    // showPointName(this.point) ? this.point.symbol : null +
                    // `<img class='rounded' src="${this.point.url}" width="${getLogoWidth(this.point)}" height="${getLogoHeight(this.point)}"/>` +
                    // "</div>"
                    `<div class='container' id=${this.point.id}>
                    <img class='rounded' src="${this.point.url}" width="${getLogoWidth(this.point)}" height="${getLogoHeight(this.point)}"/>
                    ${showPointName(this.point) ? this.point.symbol : ''}
                    
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