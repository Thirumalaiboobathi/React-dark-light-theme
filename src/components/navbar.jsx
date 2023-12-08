/*import React, { useState } from 'react';
import FlexRow from './FlexRow';
import CustomFlex from './CustomFFlex';

const NavBar = () => {
  const [theme, setTheme] = useState('dark');
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching...');
    // Your search logic here
  };

  const handleServiceSelection = (service) => {
    console.log(`Selected service: ${service}`);
    // Your logic for handling service selection
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  return (
    <div>
      <nav style={{ backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="path_to_your_logo" alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '20px' }} />
          <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '20px', color: 'white' }}><a href="/">Home</a></li>
            <li style={{ marginRight: '20px', color: 'white' }}><a href="/about">About</a></li>
            <li style={{ marginRight: '20px', color: 'white' }}><a href="/product">Product</a></li>
            <li style={{ marginRight: '20px', position: 'relative' }}>
              <span onClick={toggleServiceDropdown} style={{ cursor: 'pointer', color: 'white' }}>Service &#9662;</span>
              <ul style={{ listStyleType: 'none', backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black', position: 'absolute', top: '100%', left: 0, display: serviceDropdown ? 'block' : 'none', minWidth: '120px' }}>
                <li style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleServiceSelection('Service 1')}>Service 1</li>
                <li style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleServiceSelection('Service 2')}>Service 2</li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <input type="text" placeholder="Search..." style={{ marginRight: '5px', padding: '5px' }} />
            <button type="submit" style={{ padding: '5px 10px', backgroundColor: theme === 'dark' ? 'white' : 'black', color: theme === 'dark' ? 'black' : 'white', border: 'none', cursor: 'pointer' }}>Search</button>
          </form>
          <button onClick={toggleTheme} style={{ padding: '5px 10px', backgroundColor: theme === 'dark' ? 'white' : 'black', color: theme === 'dark' ? 'black' : 'white', border: 'none', cursor: 'pointer' }}>
            {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </nav>

      <FlexRow />
      <CustomFlex />
    </div>
  );
};

export default NavBar;*/

import React, { useState } from 'react';
import FlexRow from './FlexRow';
import CustomFlex from './CustomFlex'; // Corrected the import name

const NavBar = () => {
  const [theme, setTheme] = useState('dark');
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching...');
    // Your search logic here
  };

  const handleServiceSelection = (service) => {
    console.log(`Selected service: ${service}`);
    // Your logic for handling service selection
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  return (
    <div>
      <nav style={{ backgroundColor:"black", display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
        
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="path_to_your_logo" alt="Logo" style={{ height: '40px', width: 'auto', marginRight: '20px' }} />
        <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '20px' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li style={{ marginRight: '20px' }}><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li style={{ marginRight: '20px' }}><a href="/product" style={{ color: 'white', textDecoration: 'none' }}>Product</a></li>
          <li style={{ marginRight: '20px', position: 'relative' }}>
            <span onClick={toggleServiceDropdown} style={{ cursor: 'pointer', color: 'white' }}>Service &#9662;</span>
            <ul style={{ listStyleType: 'none', backgroundColor: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black', position: 'absolute', top: '100%', left: 0, display: serviceDropdown ? 'block' : 'none', minWidth: '120px' }}>
              <li style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleServiceSelection('Service 1')}>Service 1</li>
              <li style={{ padding: '5px', cursor: 'pointer' }} onClick={() => handleServiceSelection('Service 2')}>Service 2</li>
            </ul>
          </li>
        </ul>
      </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <input type="text" placeholder="Search..." style={{ marginRight: '5px', padding: '5px' }} />
            <button type="submit" style={{ padding: '5px 10px', backgroundColor: theme === 'dark' ? 'white' : 'black', color: theme === 'dark' ? 'black' : 'white', border: 'none', cursor: 'pointer' }}>Search</button>
          </form>
          <button onClick={toggleTheme} style={{ padding: '5px 10px', backgroundColor: theme === 'dark' ? 'white' : 'black', color: theme === 'dark' ? 'black' : 'white', border: 'none', cursor: 'pointer' }}>
            {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
      </nav>

      <FlexRow theme={theme} />
      <CustomFlex theme={theme} />
    </div>
  );
};

export default NavBar;




