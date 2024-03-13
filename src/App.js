import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import './App.css';

function App() {
    const svgRef = useRef(null);
  
    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = +svg.attr("width");
        const height = +svg.attr("height");
        const color = d3.scaleOrdinal(d3.schemeTableau10);

        const data = () => {
            const k = width / 200;
            const r = d3.randomUniform(k, k * 4);
            const n = 4;
            return Array.from({ length: 200 }, (_, i) => ({ r: r(), group: i && (i % n + 1) }));
        };

        const nodes = data();

        const simulation = d3.forceSimulation(nodes)
            .alphaTarget(0.3) // stay hot
            .velocityDecay(0.1) // low friction
            .force("x", d3.forceX().strength(0.01))
            .force("y", d3.forceY().strength(0.01))
            .force("collide", d3.forceCollide().radius(d => d.r + 1).iterations(3))
            .force("charge", d3.forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 3))
            .on("tick", ticked);

        function ticked() {
            const circles = svg.selectAll("circle")
                .data(nodes)
                .join("circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", d => d.r)
                .attr("fill", d => color(d.group));
                return true
        }

        return () => {
            simulation.stop();
        };
    }, []);

    return (
        <div className="App">
          
            <svg ref={svgRef} width={1000} height={1000}></svg>
        </div>
    );
}

export default App;
