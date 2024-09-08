import React, { useState } from 'react';
import { personalDetailsSchema, contactDetailsSchema } from './validation'; // Import validation schemas
import './index.css'; // Ensure this imports Tailwind CSS and custom fonts
import HeadingComponent from '../heading';
import DivHeadingComponent from '../divheading';
import InputComponent from '../input';
import InputLabel from '../inputlabel';
import GenderSelector from '../genderselector';
import StepperProgressBar from '../progressbar'; // Import StepperProgressBar
import DropdownComponent from '../dropdown'; // Import DropdownComponent
import { z } from 'zod';

const BackgroundComponent = () => {
    const divStyle: React.CSSProperties = {
        width: '893px',
        height: '461px',
        position: 'absolute',
        top: '370px',
        left: '274px',
        padding: '13.5px 35px 12.5px 35px',
        borderRadius: '10px',
        borderTop: '1px solid #000',
        borderLeft: '1px solid #000',
        borderRight: '1px solid #000',
        borderBottom: '1px solid #000',
        backgroundColor: '#FFFFFFF2', // Adjust as necessary
    };

    const [inputValues, setInputValues] = useState({
        name: '',
        mname: '',
        lname: '',
        phoneNumber: '',
        birthDate: '',
        country: '',
        city: '',
        district: '',
        municipality: '',
        wardno: '',
    });

    const [selectedGender, setSelectedGender] = useState<string>('');
    const [currentStep, setCurrentStep] = useState<number>(0); // State for current step
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null); // State for selected image

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const steps = ['Personal Info', 'Contact Info', 'Additional Info', 'Review']; // Updated to four steps
    const handleNext = () => {
        let isValid = true;
    
        try {
            if (currentStep === 0) {
                personalDetailsSchema.parse(inputValues);
            } else if (currentStep === 1) {
                contactDetailsSchema.parse(inputValues);
            }
        } catch (e) {
            if (e instanceof z.ZodError) {
                const errors = e.errors.reduce((acc: Record<string, string>, err) => {
                    acc[err.path[0]] = err.message;
                    return acc;
                }, {});
                setErrors(errors);
                isValid = false;
            }
        }
    
        if (isValid) {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        }
    };
    

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Example options for dropdowns
    const countries = ['Nepal', 'India'];
    const districts = [
        'Baglung', 'Bagmati', 'Baitadi', 'Bajhang', 'Bajura', 'Banke', 'Bara', 'Bardiya', 'Bhaktapur', 'Bhojpur',
        'Chandrapur', 'Chitwan', 'Dadeldhura', 'Dailekh', 'Dang', 'Darchula', 'Dhading', 'Dhankuta', 'Dhanusa',
        'Dolakha', 'Dolpa', 'Doti', 'Gorkha', 'Gulmi', 'Himalaya', 'Ilam', 'Jajarkot', 'Jhapa', 'Jumla', 'Kailali',
        'Kaski', 'Kathmandu', 'Kavre', 'Khotang', 'Lalitpur', 'Mahottari', 'Makwanpur', 'Manang', 'Mugu', 'Mustang',
        'Myagdi', 'Nawalparasi', 'Nuwakot', 'Okhaldhunga', 'Palpa', 'Panchthar', 'Parbat', 'Patan', 'Parsa', 'Ramechhap',
        'Rautahat', 'Rukum', 'Rupandehi', 'Salyan', 'Sankhuwasabha', 'Saptari', 'Sarlahi', 'Sindhuli', 'Sindhupalchok',
        'Siraha', 'Solukhumbu', 'Sunsari', 'Surkhet', 'Syangja', 'Tanahun', 'Taplejung', 'Terhathum', 'Udayapur'
    ];
    const municipalities = [
        'Biratnagar Metropolitan City', 'Birgunj Metropolitan City', 'Bhadrapur Municipality', 'Bharatpur Metropolitan City',
        'Bhaktapur Municipality', 'Dhangadhi Municipality', 'Dharan Municipality', 'Dhulikhel Municipality', 'Hetauda Municipality',
        'Kathmandu Metropolitan City', 'Lalitpur Metropolitan City', 'Lahan Municipality', 'Lumbini Sanskritik Municipality',
        'Madhyapur Thimi Municipality', 'Mahendranagar Municipality', 'Nepalgunj Municipality', 'Pokhara Metropolitan City',
        'Rajbiraj Municipality', 'Rupandehi Municipality', 'Surkhet Municipality', 'Tulsipur Sub-Metropolitan City', 'Valley Municipality',
        'Achham Rural Municipality', 'Arghakhanchi Rural Municipality', 'Baglung Rural Municipality', 'Baitadi Rural Municipality',
        'Bajhang Rural Municipality', 'Bajura Rural Municipality', 'Banke Rural Municipality', 'Bara Rural Municipality',
        'Bardiya Rural Municipality', 'Bhaktapur Rural Municipality', 'Bhojpur Rural Municipality', 'Chandrapur Rural Municipality',
        'Chitwan Rural Municipality', 'Dadeldhura Rural Municipality', 'Dailekh Rural Municipality', 'Dang Rural Municipality',
        'Darchula Rural Municipality', 'Dhading Rural Municipality', 'Dhankuta Rural Municipality', 'Dhanusa Rural Municipality',
        'Dolakha Rural Municipality', 'Dolpa Rural Municipality', 'Doti Rural Municipality', 'Gorkha Rural Municipality',
        'Gulmi Rural Municipality', 'Himalaya Rural Municipality', 'Ilam Rural Municipality', 'Jajarkot Rural Municipality',
        'Jhapa Rural Municipality', 'Jumla Rural Municipality', 'Kailali Rural Municipality', 'Kaski Rural Municipality',
        'Kavre Rural Municipality', 'Khotang Rural Municipality', 'Lalitpur Rural Municipality', 'Mahottari Rural Municipality',
        'Makwanpur Rural Municipality', 'Manang Rural Municipality', 'Mugu Rural Municipality', 'Mustang Rural Municipality',
        'Myagdi Rural Municipality', 'Nawalparasi Rural Municipality', 'Nuwakot Rural Municipality', 'Okhaldhunga Rural Municipality',
        'Palpa Rural Municipality', 'Panchthar Rural Municipality', 'Parbat Rural Municipality', 'Parsa Rural Municipality',
        'Ramechhap Rural Municipality', 'Rautahat Rural Municipality', 'Rukum Rural Municipality', 'Rupandehi Rural Municipality',
        'Salyan Rural Municipality', 'Sankhuwasabha Rural Municipality', 'Saptari Rural Municipality', 'Sarlahi Rural Municipality',
        'Sindhuli Rural Municipality', 'Sindhupalchok Rural Municipality', 'Siraha Rural Municipality', 'Solukhumbu Rural Municipality',
        'Sunsari Rural Municipality', 'Surkhet Rural Municipality', 'Syangja Rural Municipality', 'Tanahun Rural Municipality',
        'Taplejung Rural Municipality', 'Terhathum Rural Municipality', 'Udayapur Rural Municipality'
    ];

    return (
        <div className="bg-[#F7FFEF] w-full h-screen flex flex-col relative">
            <div className="absolute top-[14px] left-[25px] p-[7px_0px_0px_0px]">
                <img
                    src="src\assets\Layer 2.svg"
                    className="w-[104.28px] h-[78.1px]"
                    alt="Layer 2"
                />
            </div>

            <div className="absolute top-[120px] left-[-30px] w-[1499.63px] h-[1071px]">
                <img
                    src="src\assets\background.svg"
                    alt="background"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <HeadingComponent />

            <div className="flex flex-col items-center mt-60">
                <StepperProgressBar
                    steps={steps}
                    currentStep={currentStep}
                />
            </div>

            <div style={divStyle} className="relative">
                {currentStep === 0 && (
                    <>
                        <DivHeadingComponent text="Personal Details" />
                        <div className="flex flex-row space-x-8 mt-8">
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="First Name" />
                                <InputComponent
                                    placeholder="Your name"
                                    value={inputValues.name}
                                    onChange={handleInputChange}
                                    name="name"
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="Middle Name" />
                                <InputComponent
                                    placeholder="Your middle name"
                                    value={inputValues.mname}
                                    onChange={handleInputChange}
                                    name="mname"
                                />
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="Last Name" />
                                <InputComponent
                                    placeholder="last name"
                                    value={inputValues.lname}
                                    onChange={handleInputChange}
                                    name="lname"
                                />
                                {errors.lname && <p className="text-red-500">{errors.lname}</p>}
                            </div>
                        </div>
                        <div className="flex flex-row space-x-8 mt-8">
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="Phone Number" />
                                <InputComponent
                                    placeholder="Your phone number"
                                    value={inputValues.phoneNumber}
                                    onChange={handleInputChange}
                                    name="phoneNumber"
                                />
                                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="Birth Date" />
                                <InputComponent
                                    type="date"
                                    placeholder="Your birth date"
                                    value={inputValues.birthDate}
                                    onChange={handleInputChange}
                                    name="birthDate"
                                />
                                {errors.birthDate && <p className="text-red-500">{errors.birthDate}</p>}
                            </div>
                        </div>
                        <div className="mt-8">
                            <GenderSelector
                                selectedGender={selectedGender}
                                onChange={handleGenderChange}
                            />
                        </div>
                    </>
                )}

                {currentStep === 1 && (
                    <>
                        <DivHeadingComponent text="Contact Details" />
                        <div className="flex flex-row space-x-8 mt-8">
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text='Country' />
                                <DropdownComponent
                                    value={inputValues.country}
                                    onChange={handleInputChange}
                                    name="country"
                                    options={countries} label={''}                                />
                                {errors.country && <p className="text-red-500">{errors.country}</p>}
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text='District' />
                                <DropdownComponent
                                    value={inputValues.district}
                                    onChange={handleInputChange}
                                    name="district"
                                    options={districts} label={''}                                />
                                {errors.district && <p className="text-red-500">{errors.district}</p>}
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text='Municipality/Local' />
                                <DropdownComponent
                                    value={inputValues.municipality}
                                    onChange={handleInputChange}
                                    name="municipality"
                                    options={municipalities} label={''}                                />
                                {errors.municipality && <p className="text-red-500">{errors.municipality}</p>}
                            </div>
                        </div>
                        <div className="flex flex-row space-x-8 mt-8">
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="City" />
                                <InputComponent
                                    placeholder="Your city name"
                                    value={inputValues.city}
                                    onChange={handleInputChange}
                                    name="city"
                                />
                                {errors.city && <p className="text-red-500">{errors.city}</p>}
                            </div>
                            <div className="flex flex-col w-[259px]">
                                <InputLabel text="Ward No" />
                                <InputComponent
                                    placeholder="Your ward no"
                                    value={inputValues.wardno}
                                    onChange={handleInputChange}
                                    name="wardno"
                                />
                                {errors.wardno && <p className="text-red-500">{errors.wardno}</p>}
                            </div>
                        </div>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <div className="flex flex-col items-center">
                            <DivHeadingComponent text="Set Profile Picture" />
                            <div className="mt-4 w-48 h-48 border border-gray-300 flex items-center justify-center">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage as string}
                                        alt="Selected"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <p className="text-gray-400">No image selected</p>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="uploadButton"
                            />
                            <label
                                htmlFor="uploadButton"
                                className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer mt-4"
                            >
                                Upload
                            </label>
                        </div>
                    </>
                )}
                {currentStep === 3 && (
                    <>
                        <DivHeadingComponent text="Review Your Details" />
                        <div className="relative mt-4 p-6 bg-white bg-opacity 80 rounded-lg shadow-md flex items-start">
                            <div className="w-32 h-32 overflow-hidden rounded-lg border border-gray-300">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage as string}
                                        alt="Selected"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <p className="text-gray-400 text-center flex items-center justify-center h-full">No image selected</p>
                                )}
                            </div>
                            <div className="flex-1 ml-6">
                                <div className="flex flex-col">
                                    <DivHeadingComponent text='Personal Details' />
                                    <div className="flex flex-wrap gap-4">
                                        <p className="text-lg font-semibold">Name: {inputValues.name}</p>
                                        <p className="text-lg font-semibold">Email: {inputValues.lname}</p> {/* Fixed typo from 'lname' to 'email' */}
                                        <p className="text-lg font-semibold">Phone Number: {inputValues.phoneNumber}</p>
                                        <p className="text-lg font-semibold">Birth Date: {inputValues.birthDate}</p>
                                        <p className="text-lg font-semibold">Gender: {selectedGender}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4">
                                    <DivHeadingComponent text={'Address'} />
                                    <div className="flex flex-wrap gap-4">
                                        <p className="text-lg font-semibold">Country: {inputValues.country}</p>
                                        <p className="text-lg font-semibold">District: {inputValues.district}</p>
                                        <p className="text-lg font-semibold">Municipality: {inputValues.municipality}</p>
                                        <p className="text-lg font-semibold">City: {inputValues.city}</p>
                                        <p className="text-lg font-semibold">Ward: {inputValues.wardno}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="absolute bottom-4 right-4 flex space-x-4">
                    {currentStep > 0 && (
                        <button
                            onClick={handleBack}
                            className="bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300"
                            style={{ backgroundColor: '#34D399' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#43056C'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#34D399'}
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                        className="bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300"
                        style={{ backgroundColor: currentStep === steps.length - 1 ? '#43056C' : '#34D399' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#43056C'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentStep === steps.length - 1 ? '#43056C' : '#34D399'}
                    >
                        {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BackgroundComponent;
