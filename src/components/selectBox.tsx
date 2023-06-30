import React from 'react';

type ClientComponentProps = {
  options: string[];
  onSelect: (selectedOption: string) => void;
};

const SelectBox: React.FC<ClientComponentProps> = ({ options, onSelect }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;