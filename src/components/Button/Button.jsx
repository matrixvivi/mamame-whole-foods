import React, { useRef } from 'react'

const Button = ({ children, type, onClick, position, bold, margin, size, scrollTo }) => {
  const buttonStyle = {
    border: '1.5px solid #181818',
    borderRadius: '3em', 
    padding: '0.9em 2.2em', // 0.9em top and bottom, 2.5em left and right
    backgroundColor: 'transparent', 
    marginBottom: margin !== undefined ? margin : 0,
    color: '#181818', 
      cursor: 'pointer',
      outline: 'none',
    left: position === 'absolute' ? '1.7em' : 'auto', // if position = absolute
    position: position === 'absolute' ? 'absolute' : 'relative',
    fontWeight: bold ? '800' : '450',
    fontSize: size
  };

  const targetRef = useRef(null);
  const targetSection = document.getElementById(scrollTo)
  
  const handleClick = () => {
    if (position === 'absolute') {
      if (onClick) {
        onClick();
      }
    } else {
      if (scrollTo) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth', 
        });
      }
    }
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

  // smaller font size for mobile/smaller screens
  const mobileFontSize = '1rem';
  const mobileButtonStyle = {
    ...currentStyle,

    fontSize: mobileFontSize,
  };

  return (
    <>
    <button
      style={window.innerwidth <= 880 ? mobileButtonStyle : currentStyle}
      onMouseEnter={() => setCurrentStyle(buttonHoverStyle)}
          onMouseLeave={() => setCurrentStyle(buttonStyle)}
          onClick={handleClick}
    >
      {children}
    </button>
    <div ref={targetRef}></div>
    </>
  );
};

export default Button;
