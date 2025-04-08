import React from 'react';

const ClimateChangePage = () => {
  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 64, // Account for navbar height
        left: 0,
        right: 0,
        bottom: 0,
        padding: 0,
        margin: 0,
        overflow: 'hidden'
      }}
    >
      <iframe
        src="/climateChange.html"
        title="Climate Change"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
};

export default ClimateChangePage; 