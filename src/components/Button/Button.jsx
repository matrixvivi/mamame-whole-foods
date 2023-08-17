import React from 'react'

const Button = ({ children, type, onClick, position, bold, margin, size }) => {
    const buttonStyle = {
      border: '1.5px solid #181818',
      borderRadius: '3em', 
      padding: position === 'absolute' ? '0.8em 2.2em' : '0.85em 2.5em', // 0.85em top and bottom, 2.5em left and right
      backgroundColor: 'transparent', 
      marginBottom: margin !== undefined ? margin : 0,
      color: '#181818', 
        cursor: 'pointer',
        outline: 'none',
      left: position === 'absolute' ? '2.2em' : 'auto', // if position = absolute
      position: position === 'absolute' ? 'absolute' : 'relative',
      fontWeight: bold ? '800' : '450',
      fontSize: size
    };
  
    const greenHoverStyle = {
        backgroundColor: '#34772C',
      };
    
      const yellowHoverStyle = {
        backgroundColor: '#F2AA3C',
      };
    
      // merging base style with the hover style based on the button type
      const buttonHoverStyle =
        type === 'green' ? { ...buttonStyle, ...greenHoverStyle } : { ...buttonStyle, ...yellowHoverStyle };
    
      
  const [currentStyle, setCurrentStyle] = React.useState(buttonStyle);

  return (
    <button
      style={currentStyle}
      onMouseEnter={() => setCurrentStyle(buttonHoverStyle)}
          onMouseLeave={() => setCurrentStyle(buttonStyle)}
          onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
