import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NetworkGraph from '../components/NetworkGraph1'
import graphData from './cleaned_data_two (1).json'; 
import Sidebar from '../components/Vertical-nav/vertical-nav';
import Help from '../assets/NeedHelp.png';

const KnowledgeGraph = () => {

    const [cleanedData, setCleanedData] = useState(null);

    useEffect(() => {
      // Function to clean the data
      const cleanData = (data) => {
        const nodeIds = new Set(data.nodes.map(node => node.id));
        
        const filteredEdges = data.edges
          .filter(edge => nodeIds.has(edge.from) && nodeIds.has(edge.to))
          .map(edge => ({
            source: edge.from,
            target: edge.to,
            ...edge,
            from: undefined,
            to: undefined
          }));
  
        return {
          nodes: data.nodes,
          edges: filteredEdges
        };
      };
  
      // Clean the data and set it in state
      const cleaned = cleanData(graphData);
      setCleanedData(cleaned);
  
    }, []);
  
    return (
      <div>
        <Sidebar />
        {cleanedData && <NetworkGraph data={cleanedData} />}
        <div className="fixed bottom-4 right-10">
            <img className="w-12 h-12 md:w-full md:h-full shadow" src={Help} alt="help icon" />
        </div>
      </div>
    );
};

export default KnowledgeGraph;
