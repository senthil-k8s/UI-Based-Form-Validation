// import { InputField } from "./input-field.component";

// interface FormProps {
//     register: any; // replace with the correct type
//     errors: any; // replace with the correct type
//     onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
//   }
  
// export const MyForm: React.FC<FormProps> = ({ register, errors, onSubmit }) => {
//     return (
//       <form onSubmit={onSubmit}>
//         <InputField id="firstName" type="text" placeholder="First Name" register={register} errors={errors} label="First Name" />
//         <InputField id="lastName" type="text" placeholder="Last Name" register={register} errors={errors} label="Last Name" />
//         <InputField id="email" type="text" placeholder="Email" register={register} errors={errors} label="Email" />
//         <InputField id="password" type="text" placeholder="Password" register={register} errors={errors} label="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };


// // import React, { useEffect, useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import createDynamicSchema, { dynamicFormSchema } from '../schemas/validationSchema';
// // import { z } from 'zod';
// // import ErrorMessage from './error-message.component';
// // import { IoIosOptions } from "react-icons/io";
// // import { useConditionalLogic } from '../hooks/useConditionalLogic';

// // interface MyFormProps {
// //     title: string;
// //     placeholder: string;
// //     label: string;
// //     dynamicSchema: any; // Pass the dynamic schema as a prop
// //     setDynamicSchema: any; // Function to update dynamic schema
// //     onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
// //     form:any;

// // }
// // const MyForm: React.FC<MyFormProps> = ({ title, placeholder, label, dynamicSchema, onSubmitForm, form }) => {
    
// //     const {
// //         register,
// //         formState: { errors },
// //     } = form;

// //     const {
// //         isOption,
// //         isLogic,
// //         selectedOption,
// //         value,
// //         setisOption,
// //         setisLogic,
// //         handleOptionChange,
// //         handleValueChange,
// //     } = useConditionalLogic(label);


// //     useEffect(() => {
// //         // setDynamicSchema(createDynamicSchema(label, selectedOption, value));
// //     }, [isLogic])



// //     return (
// //         <div className='flex-1 w-full p-2'>
// //             <form>
// //                 <div className="mb-4.5 flex flex-col gap-6 xl:flex-row items-center">
// //                     <div className="w-full xl:w-1/3">
// //                         <label className="mb-2.5 block text-black dark:text-white">
// //                             {title} <span className="text-meta-1">*</span>
// //                         </label>
// //                         <input
// //                             id={label}
// //                             type="text"
// //                             placeholder={placeholder}
// //                             {...register("firstName")}
// //                             className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
// //                         />
// //                         <ErrorMessage>{errors?.label?.message}</ErrorMessage>
// //                     </div>
// //                     <div onClick={() => setisOption(p => !p)}>
// //                         <IoIosOptions />
// //                         {isOption && (
// //                             <div onClick={() => setisLogic(p => !p)} className="p-2 cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
// //                                 <ul>
// //                                     <li>Enable conditional logic</li>
// //                                 </ul>
// //                             </div>
// //                         )}
// //                     </div>
// //                     {isLogic && (
// //                         <>
// //                             <div>
// //                                 <form className="max-w-sm mx-auto">
// //                                     <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
// //                                     <select onChange={handleOptionChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
// //                                         <option selected>Choose a condition</option>
// //                                         <option value="startsWith">Starts with</option>
// //                                         <option value="endsWith">Ends with</option>
// //                                         <option value="includes">contains</option>
// //                                     </select>
// //                                 </form>
// //                             </div>
// //                             <div className="w-full xl:w-1/3">
// //                                 <label className="mb-2.5 block text-black dark:text-white">
// //                                     Value
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     onChange={handleValueChange}
// //                                     className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
// //                                 />
// //                             </div>
// //                         </>
// //                     )}
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };


// // export default MyForm;
