import { z } from 'zod';

const dynamicSchema: any = {
    firstName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters").refine((data: any) => !data.endsWith("@gmail.com"), {
        message: 'Name must not end with @gmail.com',
    }),
    lastName: z.string().min(1, "Atleast One character needed").max(40, "First Name cannot Exceed 50 characters"),
    // email: z.string().email('Invalid email').max(100, 'Email cannot exceed 100 characters'),
    // password: z.string().min(6, 'Password must be at least 6 characters').max(50, 'Password cannot exceed 50 characters'),
};
export type dynamicFormSchema = z.infer<typeof dynamicSchema>


const createDynamicSchema = (field: string, validationFunction: string, validation: string) => {
    // Add the common properties to the schema
    
    // Add any additional properties or validations based on user input
    if (field === 'email') {
        dynamicSchema.email.refine((data: any) => data.endsWith("@gmail.com"), {
            required_error: "Name is required",
            invalid_type_error: "Name must be a string"
        });
    } else if (field === 'firstName') {
        dynamicSchema.firstName.refine((data: any) => !data.endsWith("@gmail.com"), {
            message: 'Name must not end with @gmail.com',
        });
        
    } else if (field === 'lastName') {
        dynamicSchema.lastName.refine((data: any) => data.endsWith("@gmail.com"), {
            message: 'Name must not end with @gmail.com',
        });
    }
    return z.object(dynamicSchema);
};

export default createDynamicSchema;

