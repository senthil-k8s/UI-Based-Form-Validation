import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import createDynamicSchema, { dynamicFormSchema } from '../schemas/validationSchema';
import { z } from 'zod';
import { InputField } from './input-field.component';

const Form = () => {
    const [dynamicSchema, setDynamicSchema] = useState(createDynamicSchema("", z.string(), ""));
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<dynamicFormSchema>({
        resolver: zodResolver(dynamicSchema),
    });

    
    console.log(errors);
    

    const data = [
        {
            Title: "First Name",
            PlaceHolder: "Enter your First Name",
            label: "firstName",
        },
        {
            Title: "Last Name",
            PlaceHolder: "Enter your Last Name",
            label: "lastName",
        },
        {
            Title: "Email",
            PlaceHolder: "Enter your email id",
            label: "email",
        },
        {
            Title: "Password",
            PlaceHolder: "Enter your password",
            label: "password",
        },
    ]

    const form = useForm<dynamicFormSchema>({
        resolver: zodResolver(dynamicSchema),
    });
    return (
        <div>
        <form onSubmit={handleSubmit((data) => console.log("data", data))} >
                <InputField id="firstName" type="text" placeholder="First Name" register={register} errors={errors} label="First Name" setDynamicSchema={setDynamicSchema} />
                <InputField id="lastName" type="text" placeholder="Last Name" register={register} errors={errors} label="Last Name" setDynamicSchema={setDynamicSchema} />
                <InputField id="email" type="text" placeholder="Email" register={register} errors={errors} label="Email" setDynamicSchema={setDynamicSchema} />
                <InputField id="password" type="text" placeholder="Password" register={register} errors={errors} label="Password" setDynamicSchema={setDynamicSchema} />
            <button type="submit">Submit</button>
        </form>    
        </div>
    )
}

export default Form