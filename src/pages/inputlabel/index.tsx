import React from 'react';

interface InputLabelProps {
  text: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ text }) => {
  return (
    <label className="font-poppins text-[20px] font-medium leading-[23.4px] text-left block mb-2 px-[10px] py-[0px]">
      {text}
    </label>
  );
};

export default InputLabel;
