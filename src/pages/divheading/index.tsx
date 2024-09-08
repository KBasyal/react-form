import React from 'react';
import '../../index.css'; 

interface HeadingComponentProps {
  text: string;
}

const DivHeadingComponent: React.FC<HeadingComponentProps> = ({ text }) => {
  const headingStyle: React.CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '48px',
    textAlign: 'left',
  };

  return (
    <div
      style={headingStyle}
      className="w-[347px] h-[47px] gap-0"
    >
      {text}
    </div>
  );
};

export default DivHeadingComponent;
