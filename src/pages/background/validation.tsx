
import { z } from 'zod';

export const personalDetailsSchema = z.object({
    name: z.string().min(1, "First name is required"),
    mname: z.string().optional(),
    lname: z.string().min(1, "Last name is required"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits long"),
    birthDate: z.string().nonempty("Birth date is required"),
});

export const contactDetailsSchema = z.object({
    country: z.string().nonempty("Country is required"),
    district: z.string().nonempty("District is required"),
    municipality: z.string().nonempty("Municipality is required"),
    city: z.string().nonempty("City is required"),
    wardno: z.string().nonempty("Ward number is required"),
});

export const addressSchema = z.object({
    
});
