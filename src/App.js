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

          series:{
            animation:false
          },
  
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0,
            seriesInteraction: false,
            dragBetweenSeries: false,
            parentNodeLimit: true,
            enableSimulation:true
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
                "<div class='container'>"+
                this.point.name +
                `<img class='rounded' src=${this.point.url} width='60' height='60'/>`+
               
                "</div>"
              );
            },
            parentNodeFormat: "{point.series.name}",
          },
        },
      },
      series: [
        {
          name: "ASEAN",
          data: data,
        },

        // {
        //   name: "JP ",
        //   data: [
        //     {
        //       name: "JP1",
        //       value: -22470857.0,
        //       percentage:'+80%',
        //       url:"https://cryptobubbles.net/backend/data/logos/24600.png"
        //     },
        //     {
        //       name: "JP2",
        //       value: -21470857.0,
        //       percentage:'+80%',
        //       url:"https://cryptobubbles.net/backend/data/logos/28541.png"
        //     },
        //   ],
        // },
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