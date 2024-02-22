import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createDynamicSchema, { dynamicFormSchema } from '../schemas/validationSchema';
import { z } from 'zod';
import ErrorMessage from './error-message.component';

const MyForm = ({ dynamicField }: { dynamicField: any }) => {
    const dynamicSchema = createDynamicSchema(dynamicField, z.string(), "");

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<dynamicFormSchema>({
        resolver: zodResolver(dynamicSchema),
    });
    
    
    const onSubmit = (data: any) => {
        console.log('Form data submitted:', data);
    };
    const onSubmitForm = handleSubmit((data:any) => {
        createDynamicSchema("firstName", "", "");
        onSubmit(data);
    });
    
    return (
        <form onSubmit={onSubmitForm}>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                        First Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName")}
                        className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                    />
                    <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </div>

                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                        Last Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName")}
                        className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                    />
                    <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
            </div>
            {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                        Conditional Logic for FirstName
                    </label>
                    <input
                        type="text"
                        className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                    />
                    <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </div>

                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                    Conditional Logic for LastName
                    </label>
                    <input
                        type="text"
                        className="w-full rounded border-2 border-stroke bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-strokedark dark:border-form-strokedark dark:bg-form-input focus:ring-0 focus:border-findmyleather focus:focus:border-findmyleather"
                    />
                    <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
            </div> */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
