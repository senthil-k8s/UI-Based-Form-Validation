import { z } from 'zod';

const dynamicSchema: any = {
    firstName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters"),
    lastName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters"),
    email: z.string().email('Invalid email').max(100, 'Email cannot exceed 100 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters').max(50, 'Password cannot exceed 50 characters'),
};
export type dynamicFormSchema = z.infer<typeof dynamicSchema>


const createDynamicSchema = (field: string, validationFunction: string, value: string) => {
    const originalSchema = {...dynamicSchema};
    switch(field){
        case "email":
            dynamicSchema[field]  = originalSchema[field].refine((data: any) => !data[validationFunction](value), {
                required_error: `Email should not contains ${value}`,
                invalid_type_error: `Email should not contains ${value}`,
                message: `Email should not contains ${value}`
            });
            break;
        case "firstName":
            dynamicSchema[field] = originalSchema[field].refine((data: any) => !data[validationFunction](value), {
                message: `${field} must not ${validationFunction} ${value}`,
            });
            break;
        case "lastName":
            dynamicSchema[field] = originalSchema[field].refine((data: any) => !data[validationFunction](value), {
                message: `${field} must not ${validationFunction} ${value}`,
            });
            break;
        default:
            null;
            break;
    }
    return z.object(dynamicSchema);
};

export default createDynamicSchema;

