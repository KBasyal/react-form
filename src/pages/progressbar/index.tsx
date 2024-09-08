import React from 'react';

interface StepperProgressBarProps {
  steps: string[];
  currentStep: number;
}

const StepperProgressBar: React.FC<StepperProgressBarProps> = ({ steps, currentStep }) => {
  const stepWidth = 593 / (steps.length - 1); 
  const imageWidth = 33.93; 
  const imageHeight = 20.6; 

  // Calculate image position with a conditional adjustment for the first node
  const imagePosition = (currentStep * stepWidth) - (imageWidth / 2);

  return (
    <div className="flex justify-center mt-8 relative">
      <div className="relative flex items-center w-[593px]">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index === currentStep && (
              <img
                src="src/image/Vector.svg"
                alt="Progress Step"
                className="absolute"
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                  top: `-20px`,
                  left: `${imagePosition}px`,
                  opacity: '1',
                  transform: 'rotate(-15.56deg)',
                  transformOrigin: 'center bottom', 
                  transition: 'left 0.3s ease',
                }}
              />
            )}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index === currentStep
                  ? 'bg-[#43056C] text-white border-[#43056C]' 
                  : index < currentStep
                  ? 'bg-green-500 text-white border-green-500' 
                  : 'bg-white text-gray-400 border-gray-300' 
              }`}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  index < currentStep ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepperProgressBar;
