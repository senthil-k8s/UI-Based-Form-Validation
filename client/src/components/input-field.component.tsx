import { IoIosOptions } from "react-icons/io";
import { useConditionalLogic } from "../hooks/useConditionalLogic";
import ErrorMessage from "./error-message.component";
import createDynamicSchema from "../schemas/validationSchema";
import { useEffect } from "react";

interface InputFieldProps {
    id: string;
    type: string;
    placeholder: string;
    register: any; 
    errors: any; 
    label: string;
    setDynamicSchema:any
}

export const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, register, errors, label, setDynamicSchema }) => {
    const {
        isOption,
        isLogic,
        selectedCondition,
        value,
        setisOption,
        setisLogic,
        handleOptionChange,
        handleValueChange,
    } = useConditionalLogic(label);

    useEffect(() => {
        if(selectedCondition && value){
            setDynamicSchema(createDynamicSchema(id, selectedCondition, value))   
        }
    },[selectedCondition, value])
    
    return (
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row items-center">
            <div className="w-full xl:w-1/3">
                <label className="mb-2.5 block text-black dark:text-white">
                    {label} <span className="text-meta-1">*</span>
                </label>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...register(id)}
                    className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                />
                <ErrorMessage>{errors?.[id]?.message}</ErrorMessage>
            </div>
            <div onClick={() => setisOption(p => !p)}>
                <IoIosOptions />
                {isOption && (
                    <div onClick={() => setisLogic(p => !p)} className="p-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <ul>
                            <li>Enable conditional logic</li>
                        </ul>
                    </div>
                )}
            </div>
            {isLogic && (
                <>
                    <div>
                        <form className="max-w-sm mx-auto">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select onChange={handleOptionChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a condition</option>
                                <option value="startsWith">Should not Starts with</option>
                                <option value="endsWith">Should not Ends with</option>
                                <option value="includes">Should not contains</option>
                            </select>
                        </form>
                    </div>
                    <div className="w-full xl:w-1/3">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Value
                        </label>
                        <input
                            type="text"
                            onChange={handleValueChange}
                            className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                        />
                    </div>
                </>
            )}
        </div>
    );
};