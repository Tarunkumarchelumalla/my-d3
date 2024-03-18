import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import './App.css';


function App() {

    const graphData=
    {
        "nodes": [
            {
                "id": "1",
                "name": "1",
                "isClusterNode": true,
                "val": 20, 
                "color":"rgb(230, 178, 46)",
                "opacity":1
            },
            {
                "id": "2",
                "name": "2",
                "isClusterNode": true,
                "val": 15,
                "color":"rgb(230, 178, 46)",
            },
            {
                "id": "3",
                "name": "3",
                "isClusterNode": true,
                "val": 7,
                "color":"rgb(230, 178, 46)",
            },
            {
                "id": "4",
                "name": "test",
                "isClusterNode": true,
                "val": 19
            },
            {
                "id": "5",
                "name": "test",
                "isClusterNode": true,
                "val": 7
            },
            {
                "id": "6",
                "name": "test",
                "isClusterNode": true,
                "val": 15
            },
            {
                "id": "7",
                "name": "test",
                "isClusterNode": true,
                "val": 6
            },
            {
                "id": "8",
                "name": "test",
                "isClusterNode": true,
                "val": 12
            },
            {
                "id": "9",
                "name": "test",
                "isClusterNode": true,
                "val": 6
            },
            {
                "id": "10",
                "name": "test",
                "isClusterNode": true,
                "val": 17
            },
            {
                "id": "11",
                "name": "test",
                "isClusterNode": true,
                "val": 9
            },
            {
                "id": "12",
                "name": "test",
                "isClusterNode": true,
                "val": 18
            },
            {
                "id": "13",
                "name": "test",
                "isClusterNode": true,
                "val": 12
            },
            {
                "id": "14",
                "name": "test",
                "isClusterNode": true,
                "val": 9
            },
            {
                "id": "15",
                "name": "test",
                "isClusterNode": true,
                "val": 13
            },
            {
                "id": "16",
                "name": "test",
                "isClusterNode": true,
                "val": 18
            },
            {
                "id": "17",
                "name": "test",
                "isClusterNode": true,
                "val": 10
            },
            {
                "id": "18",
                "name": "test",
                "isClusterNode": true,
                "val": 20
            },
            {
                "id": "19",
                "name": "test",
                "isClusterNode": true,
                "val": 10
            },
            {
                "id": "20",
                "name": "test",
                "isClusterNode": true,
                "val": 8
            },
            {
                "id": "21",
                "name": "test",
                "isClusterNode": true,
                "val": 7
            },
            {
                "id": "22",
                "name": "test",
                "isClusterNode": true,
                "val": 8
            },
            {
                "id": "23",
                "name": "test",
                "isClusterNode": true,
                "val": 10
            },
            {
                "id": "24",
                "name": "test",
                "isClusterNode": true,
                "val": 14
            },
            {
                "id": "25",
                "name": "test",
                "isClusterNode": true,
                "val": 16
            },
            {
                "id": "26",
                "name": "test",
                "isClusterNode": true,
                "val": 17
            },
            {
                "id": "27",
                "name": "test",
                "isClusterNode": true,
                "val": 7
            },
            {
                "id": "28",
                "name": "test",
                "isClusterNode": true,
                "val": 9
            },
            {
                "id": "29",
                "name": "test",
                "isClusterNode": true,
                "val": 8
            },
            {
                "id": "30",
                "name": "test",
                "isClusterNode": true,
                "val": 12
            },
            {
                "id": "31",
                "name": "test",
                "isClusterNode": true,
                "val": 14
            },
            {
                "id": "32",
                "name": "test",
                "isClusterNode": true,
                "val": 13
            },
            {
                "id": "33",
                "name": "test",
                "isClusterNode": true,
                "val": 18
            },
            {
                "id": "34",
                "name": "test",
                "isClusterNode": true,
            }
        ],
        "links":[
            {
                source:'1',
                target:'2',
                value:0,
            },
            {
                source:'1',
                target:'3',
                value:12,
            },
            {
                source:'3',
                target:'2',
                value:18,
            }
        ]
    }

    const ref = useRef()

    useEffect(() => {
    }, []);

    return (
        <div>
            <ForceGraph2D
            ref={ref}
            graphData={graphData}
            backgroundColor='#0E061A'
            nodeCanvasObjectMode={() => "after"}
            linkAutoColorBy='#fff'
            zoomToFit={()=>2}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "black"; //node.color;
            }}
            onNodeClick={(node,event)=>{
              console.log(node)
            }}
            autoPauseRedraw={true}
            enableNodeDrag={true}
            linkDirectionalParticleColor={() => "red"}
            linkDirectionalParticleWidth={6}
            linkHoverPrecision={10}
            linkDirectionalArrowLength={2}
            nodeVisibility={(node) => node.id !== "0"}
          />
        </div>
    );
}

export default App;
