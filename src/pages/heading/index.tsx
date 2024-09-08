import React from 'react';

const HeadingComponent: React.FC = () => {

  const headingStyle: React.CSSProperties = {
    width: '204px',
    height: '56px',
    position: 'absolute',
    top: '147px',
    left: '618px',
    fontFamily: 'Poppins, sans-serif', 
    fontSize: '48px', 
    fontWeight: '700', 
    lineHeight: '56.16px', 
    textAlign: 'left'
  };

  return (
    <div style={headingStyle} className="flex items-center">
      Register
    </div>
  );
};

export default HeadingComponent;
