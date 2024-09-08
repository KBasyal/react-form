// src/components/GenderSelector.tsx
import React from 'react';

interface GenderSelectorProps {
    selectedGender: string;
    onChange: (gender: string) => void;
}

const GenderSelector: React.FC<GenderSelectorProps> = ({ selectedGender, onChange }) => {
    return (
        <div className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Gender</span>
            <div className="flex items-center space-x-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={selectedGender === 'Male'}
                        onChange={() => onChange('Male')}
                        className="mr-2"
                    />
                    Male
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={selectedGender === 'Female'}
                        onChange={() => onChange('Female')}
                        className="mr-2"
                    />
                    Female
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={selectedGender === 'Other'}
                        onChange={() => onChange('Other')}
                        className="mr-2"
                    />
                    Other
                </label>
            </div>
        </div>
    );
};

export default GenderSelector;
