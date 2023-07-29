import React from 'react'

const Button = ({ children, type }) => {
    const buttonStyle = {
      border: '1.5px solid #181818',
      borderRadius: '3em', 
      padding: '1em 2.5em', // 1.5em top and bottom, 2.5em left and right
      backgroundColor: 'transparent', 
      color: '#181818', // Set the text color to match the border color
        cursor: 'pointer',
        outline: 'none'
    };
  
    const greenHoverStyle = {
        backgroundColor: '#34772C',
      };
    
      const yellowHoverStyle = {
        backgroundColor: '#F2AA3C',
      };
    
      // Merge the base style with the hover style based on the button type
      const buttonHoverStyle =
        type === 'green' ? { ...buttonStyle, ...greenHoverStyle } : { ...buttonStyle, ...yellowHoverStyle };
    
      
  const [currentStyle, setCurrentStyle] = React.useState(buttonStyle);

  return (
    <button
      style={currentStyle}
      onMouseEnter={() => setCurrentStyle(buttonHoverStyle)}
      onMouseLeave={() => setCurrentStyle(buttonStyle)}
    >
      {children}
    </button>
  );
};

export default Button;
