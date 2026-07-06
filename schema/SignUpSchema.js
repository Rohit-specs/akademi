import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
    fullname: yup
        .string()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters"),

    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "Enter a valid email"
        ),

    phone: yup
        .string()
        .required("Phone number is required")
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid phone number"
        ),

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])/,
            "Password must contain at least one lowercase letter"
        )
        .matches(
            /^(?=.*[A-Z])/,
            "Password must contain at least one uppercase letter"
        )
        .matches(
            /^(?=.*\d)/,
            "Password must contain at least one number"
        )
        .matches(
            /^(?=.*[@$!%*?&])/,
            "Password must contain at least one special character"
        ),

    confirmPassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf(
            [yup.ref("password")],
            "Passwords do not match"
        ),

    terms: yup
        .boolean()
        .oneOf([true], "You must accept Terms & Conditions"),
});