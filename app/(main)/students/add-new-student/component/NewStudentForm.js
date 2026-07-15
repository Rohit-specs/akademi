"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { StudentRegistrationSchema } from "/schema/StudentsDetailSchema"
import { format } from "date-fns"
import { addStudent } from "/store/slices/StudentSlice"
import { addActivity } from "/store/slices/ActivitySlice"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
const NewStudentForm = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors },reset } = useForm(
        { resolver: yupResolver(StudentRegistrationSchema) }
    )
    const address = watch("address", "")
    const router = useRouter()
    const parentAddress = watch("parentAddress", "")
    const [preview, setPreview] = useState(null)
    const dispatch = useDispatch()
    const SubmitHandler = (data) => {
        dispatch(addStudent({
            ...data,
            photo: preview,
            dateOfBirth:
                typeof data.dateOfBirth === "string"
                    ? data.dateOfBirth
                    : data.dateOfBirth.toISOString().split("T")[0],
        }))
        dispatch(addActivity({
            type: "student",
            user: "Admin",
            action: "added a new student",
            target: `${data.firstName} ${data.lastName}`,
            color: "success",
            date: format(new Date(), "yyyy-MM-dd"),
            time: format(new Date(), "hh:mm a"),
        }))
        reset()
        router.push("/students")
        toast.success("Student Registered Sucessfully")
    }
    return (
        <Form onSubmit={handleSubmit(SubmitHandler)}>
            <div className='bg-light py-2 px-4 rounded-4 pb-3 pb-lg-5 mb-3 mb-lg-4 card-top-primary'>
                <h2 className="card-title text-light mb-3 mb-lg-4">Student Details</h2>
                <Row className="g-4">
                    <Col xs={12} lg={3}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Photo <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                type="file"
                                id="photo"
                                accept="image/*"
                                hidden
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    if (!file) return;

                                    setValue("photo", file, {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                    });

                                    setPreview(URL.createObjectURL(file));
                                }}
                            />

                            <label htmlFor="photo" className="upload-box mw-300">
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="upload-preview"
                                    />
                                ) : (
                                    <p className="m-0 text-center">
                                        Drag and drop or click here to select file
                                    </p>
                                )}
                            </label>

                            <small className="text-danger">
                                {errors.photo?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={9}>
                        <Row className="g-4">

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        First Name <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Samantha"
                                        {...register("firstName")}
                                    />

                                    <small className="text-danger">
                                        {errors.firstName?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Last Name <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="William"
                                        {...register("lastName")}
                                    />

                                    <small className="text-danger">
                                        {errors.lastName?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Date of Birth <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="date"
                                        {...register("dateOfBirth")}
                                    />

                                    <small className="text-danger">
                                        {errors.dateOfBirth?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Place of Birth <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Jakarta"
                                        {...register("placeOfBirth")}
                                    />

                                    <small className="text-danger">
                                        {errors.placeOfBirth?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Email <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        placeholder="historia@mail.com"
                                        {...register("email")}
                                    />

                                    <small className="text-danger">
                                        {errors.email?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Phone <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="tel"
                                        placeholder="+1234567890"
                                        {...register("phone")}
                                    />

                                    <small className="text-danger">
                                        {errors.phone?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Parent Name <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Maria William"
                                        {...register("parentName")}
                                    />

                                    <small className="text-danger">
                                        {errors.parentName?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Address <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        maxLength={2000}
                                        placeholder="Enter address..."
                                        {...register("address")}
                                    />

                                    <div className="text-end text-gray-400 mt-1">
                                        {address.length}/2000
                                    </div>

                                    <small className="text-danger">
                                        {errors.address?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </div>
            <div className='bg-light py-2 px-4 rounded-4 pb-3  pb-lg-5  mt-4 mb-3 mb-lg-4 card-top-primary'>
                <h2 className="card-title text-light mb-3 mb-lg-4">Parent Details</h2>
                <Row className="g-4">
                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                First Name <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Maria"
                                {...register("parentFirstName")}
                            />

                            <small className="text-danger">
                                {errors.parentFirstName?.message}
                            </small>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Last Name <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="William"
                                {...register("parentLastName")}
                            />

                            <small className="text-danger">
                                {errors.parentLastName?.message}
                            </small>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Email <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="manager@mail.com"
                                {...register("parentEmail")}
                            />

                            <small className="text-danger">
                                {errors.parentEmail?.message}
                            </small>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Phone <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                type="tel"
                                placeholder="+1234567890"
                                {...register("parentPhone")}
                            />

                            <small className="text-danger">
                                {errors.parentPhone?.message}
                            </small>
                        </Form.Group>
                    </Col>

                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Address <span className="text-danger">*</span>
                            </Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={5}
                                maxLength={2000}
                                placeholder="Enter parent's address..."
                                {...register("parentAddress")}
                            />

                            <div className="text-end text-gray-400 mt-1">
                                {parentAddress?.length || 0}/2000
                            </div>

                            <small className="text-danger">
                                {errors.parentAddress?.message}
                            </small>
                        </Form.Group>
                    </Col>

                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Payments <span className="text-danger">*</span>
                            </Form.Label>

                            <div className="d-flex flex-column flex-sm-row gap-3 mt-2">
                                <Form.Check
                                    inline
                                    type="radio"
                                    id="payment-cash"
                                    label="Cash"
                                    value="cash"
                                    {...register("payment")}
                                />

                                <Form.Check
                                    inline
                                    type="radio"
                                    id="payment-debit"
                                    label="Debit"
                                    value="debit"
                                    {...register("payment")}
                                />
                            </div>

                            <small className="text-danger">
                                {errors.payment?.message}
                            </small>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            <div className="d-flex gap-2 justify-content-end">
                <Button className="rounded-pill" variant="outline-primary">Save as Draftt</Button>
                <Button type="submit" className="rounded-pill" variant="primary">Submit</Button>
            </div>
        </Form>
    )
}

export default NewStudentForm
