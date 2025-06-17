import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';

const Dashboard = () => {
  return (
    <div className="dashboard-container bg-[#0d1117] min-h-screen text-white">
      <h1 className="text-center text-3xl font-bold py-6">
        Welcome to SortVision.com !!
      </h1>
      <SortingVisualizer />
    </div>
  );
};

export default Dashboard;





