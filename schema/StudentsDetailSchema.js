import * as yup from "yup";
export const StudentRegistrationSchema = yup.object().shape({
    photo: yup
        .mixed()
        .required("Please upload a photo")
        .test(
            "fileType",
            "Only JPG, JPEG and PNG are allowed",
            (file) => {
                if (!file) return false
                if (typeof file === "string") {
                    return true
                }
                return ["image/jpeg", "image/png"].includes(file.type)
            }
        ),

    firstName: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(20, "First name cannot exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "First name can only contain letters")
        .test(
            "no-spaces",
            "First name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    lastName: yup
        .string()
        .trim()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(20, "Last name cannot exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
        .test(
            "no-spaces",
            "Last name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    dateOfBirth: yup
        .date()
        .typeError("Please select your date of birth")
        .required("Date of birth is required"),

    placeOfBirth: yup
        .string()
        .trim()
        .required("Place of birth is required"),

    parentName: yup
        .string()
        .trim()
        .required("Parent name is required")
        .min(2, "Parent name must be at least 2 characters")
        .max(50, "Parent name cannot exceed 50 characters"),

    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Enter a valid email address"
        ),

    phone: yup
        .string()
        .required("Phone number is required")
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid 10 digit phone number"
        ),

    address: yup
        .string()
        .trim()
        .required("Address is required")
        .max(200, "Address cannot exceed 200 characters"),

    parentFirstName: yup
        .string()
        .trim()
        .required("Parent first name is required")
        .min(2, "Parent first name must be at least 2 characters")
        .max(20, "Parent first name cannot exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "Parent first name can only contain letters")
        .test(
            "no-spaces",
            "Parent first name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    parentLastName: yup
        .string()
        .trim()
        .required("Parent last name is required")
        .min(2, "Parent last name must be at least 2 characters")
        .max(20, "Parent last name cannot exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "Parent last name can only contain letters")
        .test(
            "no-spaces",
            "Parent last name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    parentEmail: yup
        .string()
        .required("Parent email is required")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Enter a valid email address"
        ),

    parentPhone: yup
        .string()
        .required("Parent phone number is required")
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid 10 digit phone number"
        ),

    parentAddress: yup
        .string()
        .trim()
        .required("Parent address is required")
        .max(200, "Parent address cannot exceed 200 characters"),

    payment: yup
        .string()
        .required("Please select a payment method")
        .oneOf(["cash", "debit"], "Invalid payment method"),
});