import React from 'react';
import Image1 from './images.jpeg';
import Image2 from './images1.jpeg';
import Image3 from './images2.jpeg';

const CustomFlex = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '0' }}>Superior Collaboration</h1>
        <span style={{ marginLeft: '10px' }}>
          <h3 style={{ margin: '0' }}>Visualize Quality</h3>
        </span>
      </div>
      <p style={{ marginLeft: '20px' }}>
        Superior collaboration fosters innovation and synergy among diverse teams. By embracing open communication, sharing ideas, and leveraging collective expertise, organizations can achieve remarkable outcomes. It encourages a culture of mutual respect and empowers individuals to contribute their best, creating an environment where excellence thrives.<br/><br/><br/>
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'center' }}>
          <img src={Image1} alt="1" style={{ width: '400px', height: '200px' }} />
          <p>Image Name 1</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={Image2} alt="2" style={{ width: '400px', height: '200px' }} />
          <p>Image Name 2</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={Image3} alt="3" style={{ width: '400px', height: '200px' }} />
          <p>Image Name 3</p>
        </div>
      </div>
    </div>
  );
};

export default CustomFlex;
