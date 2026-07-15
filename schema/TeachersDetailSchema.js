import * as yup from "yup";
export const TeacherRegistrationSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(20, "First name cannot exceed 12 characters")
        .test("no-spaces", "First name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(20, "Last name cannot exceed 20 characters")
        .matches(/^[A-Za-z]+$/, "Last name can only contain letters")
        .test(
            "no-spaces",
            "Last name cannot contain spaces",
            (value) => !value || !value.includes(" ")
        ),

    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            "Enter a valid email address"
        ),

    phone: yup
        .string()
        .required("phone Number is required")
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid 10 digit phone number"),

    address: yup
        .string()
        .required("Address is required"),

    photo: yup
        .mixed()
        .required("Please upload a photo")
        .test(
            "fileType",
            "Only JPG, JPEG and PNG are allowed",
            (file) => {
                if (!file) return false;
                if (typeof file === "string") {
                    return true
                }
                return ["image/jpeg", "image/png"].includes(file.type);
            }
        ),

    dateOfBirth: yup
        .date()
        .typeError("Please select your date of birth")
        .required("Date of birth is required")
        .test(
            "is-18",
            "You must be at least 18 years old",
            function (value) {
                if (!value) return true;
                const today = new Date();
                const dob = new Date(value);
                let age = today.getFullYear() - dob.getFullYear();
                const monthDiff = today.getMonth() - dob.getMonth();
                if (
                    monthDiff < 0 ||
                    (monthDiff === 0 && today.getDate() < dob.getDate())
                ) {
                    age--;
                }
                return age >= 18;
            }
        ),

    placeOfBirth: yup
        .string()
        .required("Place of birth is required"),

    university: yup
        .string()
        .trim()
        .required("University is required"),

    degree: yup
        .string()
        .trim()
        .required("Degree is required"),

    startDate: yup
        .date()
        .typeError("Select start date")
        .required("Start date is required"),

    endDate: yup
        .date()
        .typeError("Select end date")
        .min(
            yup.ref("startDate"),
            "End date must be after start date"
        )
        .required("End date is required"),

    city: yup
        .string()
        .trim()
        .required("City is required"),

})