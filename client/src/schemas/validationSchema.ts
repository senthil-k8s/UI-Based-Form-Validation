import { z } from 'zod';
import { useConditionalLogic } from '../hooks/useConditionalLogic';

const dynamicSchema: any = {
    firstName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters").refine((data: any) => !data.endsWith("@gmail.com"), {
        message: 'Name must not end with @gmail.com',
    }),
    lastName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters"),
    email: z.string().email('Invalid email').max(100, 'Email cannot exceed 100 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters').max(50, 'Password cannot exceed 50 characters'),
};
export type dynamicFormSchema = z.infer<typeof dynamicSchema>


const createDynamicSchema = (field: string, validationFunction: string, value: string) => {
    
    if (field === 'email') {
        dynamicSchema[field]  = dynamicSchema[field].refine((data: any) => !data[validationFunction](value), {
            required_error: `Email should not contains ${value}`,
            invalid_type_error: `Email should not contains ${value}`,
            message: `Email should not contains ${value}`
        });
    } else if (field === 'firstName') {
        dynamicSchema[field] = dynamicSchema[field].refine((data: any) => !data[validationFunction](value), {
            message: `Name must not ${validationFunction} ${value}`,
        });
        
    } else if (field === 'lastName') {
        dynamicSchema[field] = dynamicSchema[field].refine((data: any) => !data[validationFunction](value), {
            message: `Name must not ${validationFunction} ${value}`,
        });
    }
    return z.object(dynamicSchema);
};

export default createDynamicSchema;

