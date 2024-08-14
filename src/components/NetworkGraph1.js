import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './style.css';

const NetworkGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear previous SVG content if any
    d3.select(svgRef.current).selectAll('*').remove();

    // Validate data: ensure all edges reference existing nodes
    const nodeIds = new Set(data.nodes.map(node => node.id));
    const validEdges = data.edges.filter(edge => {
      const sourceId = typeof edge.source === 'object' ? edge.source.id : edge.source;
      const targetId = typeof edge.target === 'object' ? edge.target.id : edge.target;
      return nodeIds.has(sourceId) && nodeIds.has(targetId);
    });

    // Set up SVG dimensions
    const width = 1400; // Expanded width
    const height = 800;
    const marginLeft = 50; // Adjusted margin for moving to the right

    // Create SVG element and group (g) element
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('margin-left', `${marginLeft}px`);

    const g = svg.append('g'); // Append group to SVG for zoom/pan

    // Apply zoom behavior
    svg.call(d3.zoom().on('zoom', (event) => {
      g.attr('transform', event.transform);
    }));

    // Define arrowhead marker
    g.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 15)
      .attr('refY', 0)
      .attr('markerWidth', 14)
      .attr('markerHeight', 20)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999');

    // Initialize simulation
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(validEdges).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-70))
      .force('collide', d3.forceCollide().radius(30)) // Increased radius
      .force('center', d3.forceCenter((width / 2) - marginLeft, height / 2)) // Center adjusted for margin
      .alphaDecay(0.05)
      .on('tick', ticked);

    // Drawing links (edges)
    const link = g.append('g')
      .selectAll('line')
      .data(validEdges)
      .enter().append('line')
      .attr('class', 'link') 
      .attr('marker-end', 'url(#arrowhead)');

    // Drawing nodes
    const node = g.append('g')
      .selectAll('g')
      .data(data.nodes)
      .enter().append('g');

    node.append('circle')
      .attr('r', 25) //circle radius
      .attr('class', d => `node ${d.category}`)
      .call(drag(simulation));

    node.append('text')
      .attr('dy', '.3em')
      .attr('text-anchor', 'middle')
      .style('font-size', '10px') 
      .style('fill', '#fff')
      .text(d => {
        const firstWord = d.content ? d.content.split(' ')[0] : '';
        return firstWord;
      });

    // Tooltip
    const tooltip = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('background', '#333')
      .style('color', '#fff')
      .style('padding', '10px')
      .style('border', '1px solid #555')
      .style('border-radius', '5px')
      .style('box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.3)')
      .style('font-size', '12px')
      .style('pointer-events', 'none')
      .style('display', 'none');

      node.on('mouseover', (event, d) => {
        const truncatedContent = d.content && d.content.length > 100 
          ? `${d.content.substring(0, 100)}...` 
          : d.content || 'No content to show';
      
        const docId = d.doc_id !== undefined ? d.doc_id : 0;
      
        // Create the tooltip content with a clickable link
        tooltip.style('display', 'block')
          .html(`
            <strong>${d.label}</strong><br>
            ${truncatedContent} 
            <br>Doc ID: ${docId}
            <br><span class="show-more" style="color: #ccc; cursor: pointer; pointer-events: auto;">Show more</span>
          `)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`);
      
        // Ensure the show-more span is clickable
        tooltip.select('.show-more')
          .on('click', () => {
            if (d.link) {
              console.log(d.link);
              window.open(d.link, '_blank'); // Open link in a new tab
            }
          });
      });
      
      // Move tooltip with the mouse
      node.on('mousemove', (event) => {
        tooltip
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`);
      });
      
      // Hide tooltip on mouseout
      node.on('mouseout', () => {
        // tooltip.style('display', 'none');
      });

    // Tick function
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    }

    // Drag function
    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart(); 
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default NetworkGraph;
