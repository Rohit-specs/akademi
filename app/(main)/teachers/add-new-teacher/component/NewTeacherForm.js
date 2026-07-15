"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { TeacherRegistrationSchema } from "/schema/TeachersDetailSchema"
import { format } from "date-fns"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { addTeacher } from "/store/slices/TeacherSlice"
import { addActivity } from "/store/slices/ActivitySlice"

const NewTeacherForm = () => {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm(
        { resolver: yupResolver(TeacherRegistrationSchema) }
    )
    const address = watch("address", "")
    // const photoRegister = register("photo")
    const [preview, setPreview] = useState(null)
    const dispatch = useDispatch()
    const SubmitHandler = (data) => {
        dispatch(addTeacher(data))
        dispatch(addActivity({
            type: "teacher",
            user: "Admin",
            action: "added a new teacher",
            target: data.name,
            color: "primary",
            date: format(new Date(), "yyyy-MM-dd"),
            time: format(new Date(), "hh:mm a"),
        }))
        toast.success("Teacher Sucessfully Registered")
    }
    return (
        <Form onSubmit={handleSubmit(SubmitHandler)}>
            <div className='bg-light py-2 px-4 rounded-4 pb-3 pb-lg-5 mb-3 mb-lg-4 card-top-primary'>
                <h2 className="card-title text-light mb-3 mb-lg-4">Personal Details</h2>
                <Row className="g-3 g-lg-4">
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                First Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Maria"
                                {...register("firstName")}
                            />

                            <small className="text-danger">
                                {errors.firstName?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Last Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Historia"
                                {...register("lastName")}
                            />

                            <small className="text-danger">
                                {errors.lastName?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Historia@mail.com"
                                {...register("email")}
                            />

                            <small className="text-danger">
                                {errors.lastName?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Phone <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="+1234567890"
                                {...register("phone")}
                            />

                            <small className="text-danger">
                                {errors.phone?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Address <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                as={"textarea"}
                                rows={6}
                                name="address"
                                maxLength={2000}
                                placeholder="Lorem ipsum dolor sunt, consectetur dolore nihil quod, quae laborum in."
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
                    <Col xs={12} lg={6}>
                        <Form.Label className="fw-medium fs-5">
                            Photo <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            type="file"
                            id="photo"
                            accept="image/*"
                            hidden
                            onChange={(e) => {
                                const file = e.target.files?.[0]

                                if (!file) return
                                setValue("photo", file, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                })
                                setPreview(URL.createObjectURL(file));
                            }}
                        />

                        <label htmlFor="photo" className="upload-box">
                            {preview ? (
                                <img src={preview} alt="Preview" className="upload-preview" />
                            ) : (
                                <>
                                    {/* <CloudUpload size={28} /> */}
                                    <p>Drag and drop or click here to select file</p>
                                </>
                            )}
                        </label>

                        <small className="text-danger">
                            {errors.photo?.message}
                        </small>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Date of Birth <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="24 Feburary 1997"
                                {...register("dateOfBirth")}
                            />

                            <small className="text-danger">
                                {errors.dateOfBirth?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Place of Birth <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="placeOfBirth"
                                placeholder="Jakarta, Indonesia"
                                {...register("placeOfBirth")}
                            />

                            <small className="text-danger">
                                {errors.placeOfBirth?.message}
                            </small>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            <div className='bg-light py-2 px-4 rounded-4 pb-3  pb-lg-5  mt-4 mb-3 mb-lg-4 card-top-primary'>
                <h2 className="card-title text-light mb-3 mb-lg-4">Education</h2>
                <Row className="g-3 g-lg-4">
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                University <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="University Akademi Historia"
                                {...register("university")}
                            />

                            <small className="text-danger">
                                {errors.university?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Degree <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="History Major"
                                {...register("degree")}
                            />

                            <small className="text-danger">
                                {errors.degree?.message}
                            </small>
                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                Start & End Date <span className="text-danger">*</span>
                            </Form.Label>
                            <div className="d-flex gap-2">
                                <div>
                                    <Form.Control
                                        type="date"
                                        placeholder="September 2013"
                                        {...register("startDate")}
                                    />
                                    <small className="text-danger">
                                        {errors.startDate?.message}
                                    </small>
                                </div>
                                <div>
                                    <Form.Control
                                        type="date"
                                        placeholder="September 2017"
                                        {...register("endDate")}
                                    />

                                    <small className="text-danger">
                                        {errors.endDate?.message}
                                    </small>
                                </div>
                            </div>

                        </Form.Group>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Form.Group>
                            <Form.Label className="fw-medium fs-5">
                                City <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Yogyakarta, Indonesia"
                                {...register("city")}
                            />

                            <small className="text-danger">
                                {errors.city?.message}
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

export default NewTeacherForm
