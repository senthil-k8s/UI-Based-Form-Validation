import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createDynamicSchema, { dynamicFormSchema } from '../schemas/validationSchema';
import { InputField } from './input-field.component';

const Form = () => {
    const [dynamicSchema, setDynamicSchema] = useState(createDynamicSchema("", "", ""));
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<dynamicFormSchema>({
        resolver: zodResolver(dynamicSchema),
    });
    

    const data = [
        {
            Title: "First Name",
            type: "text",
            PlaceHolder: "Enter your First Name",
            label: "firstName",
        },
        {
            Title: "Last Name",
            type: "text",
            PlaceHolder: "Enter your Last Name",
            label: "lastName",
        },
        {
            Title: "Email",
            type: "text",
            PlaceHolder: "Enter your email id",
            label: "email",
        },
        {
            Title: "Password",
            type: "password",
            PlaceHolder: "Enter your password",
            label: "password",
        },
    ]

    const onSubmit = (data:any) => {
        alert(JSON.stringify({
            "firstName": data.firstName,
            "lastName": data.lastName,
            "Email": data.email,
            "Password": data.password,
          }, null, 2));
    }
    
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
                {data.map((item:any) => (
                        <InputField 
                            id={item.label}
                            type={item.type}
                            placeholder={item.PlaceHolder}
                            register={register}
                            errors={errors}
                            label={item.Title}
                            setDynamicSchema={setDynamicSchema}
                        />
                    ))
                }
            <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Submit</button>
        </form>    
        </>
    )
}

export default Form