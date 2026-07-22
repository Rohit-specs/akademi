import * as yup from "yup";
export const AddContactSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .matches(
            /^[A-Za-z ]+$/,
            "Name can only contain letters and spaces"
        ),

    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "Enter a valid email address"
        ),

    grade: yup
        .string()
        .required("Grade is required"),

    avatar: yup
        .mixed()
        .required("Avatar is required")
        .test(
            "fileType",
            "Only JPG, JPEG, PNG and WEBP images are allowed",
            (value) => {
                if (!value) return false;

                return [
                    "image/jpeg",
                    "image/jpg",
                    "image/png",
                    "image/webp",
                ].includes(value.type);
            }
        )
        .test(
            "fileSize",
            "Image size must be less than 2 MB",
            (value) => {
                if (!value) return false;

                return value.size <= 2 * 1024 * 1024;
            }
        ),
});