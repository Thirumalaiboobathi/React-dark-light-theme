import React from 'react';

const FlexRow = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#7CFC00', padding: '10px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '700px', width: '100%', marginLeft: '40px' }}>
        <h1 style={{ margin: "0", textAlign: "left" }}>Dramatically Engage<br/></h1>
        <p style={{ margin: "10px 0", textAlign: "left" }}>Objectively innovate empowered manufactured products whereas parallel platforms<br/><br/></p>
        <div>
          <button style={{ padding: "8px 12px", width: 'auto' }}>Engage Now</button>
        </div>
        
      </div>
    </div>
  );
};

export default FlexRow;
