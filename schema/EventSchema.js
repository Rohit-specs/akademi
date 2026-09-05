import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  className: Yup.string()
    .required("Class name is required"),

  subject: Yup.string()
    .required("Subject is required"),

  date: Yup.date()
    .required("Date is required")
    .min(
      new Date(new Date().setHours(0, 0, 0, 0)),
      "Date must be today or a future date"
    ),

  startTime: Yup.string()
    .required("Start time is required"),

  endTime: Yup.string()
    .required("End time is required")
    .test(
      "is-after-start",
      "End time must be after start time",
      function (value) {
        const { startTime } = this.parent;

        if (!startTime || !value) return true;

        const start = new Date(`1970-01-01T${startTime}`);
        const end = new Date(`1970-01-01T${value}`);

        return end > start;
      }
    ),
});

export default EventSchema;