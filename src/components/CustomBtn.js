import React from 'react';

const CustomButton = ({ bgColor, textColor, label, Width, onClick  }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    width: Width,
    color: textColor,
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent page reload
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className='font-semibold text-[14px] rounded-[7px] dark:text-[#1C1C25!important]' style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};

export default CustomButton;
