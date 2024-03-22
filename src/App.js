import React, { useState } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HCMore from 'highcharts/highcharts-more';
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
          minSize: "30%",
          maxSize: "+80%",
          //zMin: 0,
          //zMax: 1000,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.01,
          },
          dataLabels: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              return (
                "<div class='container'>"+
                this.point.name +
                `<img class='rounded' src=${this.point.url} width='150' height='150'/>`+
                "<div class='percentage-container'>"+this.point.percentage+'</div>'+
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
          data: [
            {
              name: "ASEAN",
              value: -88.2,
              percentage:'+80%',
              url:"https://cryptobubbles.net/backend/data/logos/25417.png"
            },
          ],
        },
        {
          name: "KOR ",
          data: [
            {
              name: "KOR",
              value: -605.2,
              percentage:'+80%',
              url:"https://cryptobubbles.net/backend/data/logos/1680.png"
            },
          ],
        },
        {
          name: "CHN ",
          data: [
            {
              name: "CHN",
              value: -427233.7,
              percentage:'+80%',
              url:"https://cryptobubbles.net/backend/data/logos/29920.png"
            },
          ],
        },
        {
          name: "ISA ",
          data: [
            {
              name: "ISA",
              value: -355.39,
              percentage:'+80%',
              url:"https://cryptobubbles.net/backend/data/logos/1168.png"
            },
          ],
        },
        {
          name: "ANZ ",
          data: [
            {
              name: "ANZ ",
              value: -3331.4,
              percentage:'+80%',
              url:"https://cryptobubbles.net/backend/data/logos/5034.png"
            },
          ],
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