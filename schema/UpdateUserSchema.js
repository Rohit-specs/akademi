import * as yup from "yup";

export const EditUserSchema = yup.object({
    fullname: yup
        .string()
        .required("Name is required")
        .matches(/^[A-Za-z ]+$/, "Name should contain only letters")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name cannot exceed 50 characters"),

    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/,
            "Enter a valid email"
        ),

    phone: yup
        .string()
        .nullable()
        .test(
            "phone",
            "Enter a valid phone number",
            value => !value || /^[6-9]\d{9}$/.test(value)
        ),

    location: yup
        .string()
        .nullable()
        .max(100, "Location cannot exceed 100 characters"),

    avatar: yup
        .mixed()
        .nullable()
        .test(
            "fileSize",
            "Image size must be less than 2 MB",
            value => !value || value.size <= 2 * 1024 * 1024
        )
        .test(
            "fileType",
            "Only JPG, JPEG and PNG images are allowed",
            value =>
                !value ||
                ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
        ),

    currentPassword: yup.string(),

    newPassword: yup
        .string()
        .nullable()
        .test(
            "password-strength",
            "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
            value =>
                !value ||
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
                    value
                )
        ),

    confirmPassword: yup
        .string()
        .nullable()
        .oneOf(
            [yup.ref("newPassword"), ""],
            "Passwords do not match"
        )
})
    .test(
        "password-required",
        null,
        function (values) {
            const {
                currentPassword,
                newPassword,
                confirmPassword,
            } = values

            const wantsToChange = currentPassword || newPassword || confirmPassword

            if (!wantsToChange) return true

            if (!currentPassword) {
                return this.createError({
                    path: "currentPassword",
                    message: "Current password is required",
                })
            }

            if (!newPassword) {
                return this.createError({
                    path: "newPassword",
                    message: "New password is required",
                })
            }

            if (!confirmPassword) {
                return this.createError({
                    path: "confirmPassword",
                    message: "Confirm your new password",
                })
            }

            if (currentPassword === newPassword) {
                return this.createError({
                    path: "newPassword",
                    message: "New password must be different from current password",
                })
            }

            return true
        }
    )