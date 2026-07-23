"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { addActivity } from "/store/slices/ActivitySlice"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { TeacherRegistrationSchema } from "/schema/TeachersDetailSchema"
import { editTeacher } from "/store/slices/TeacherSlice"
import { Search } from "react-bootstrap-icons"
import DashboardDrawer from "/component/DashboardDrawer"
import HeaderIcons from "/component/HeaderIcons"
import { Button, Col, Form, Row } from "react-bootstrap"

const EditTeacherForm = ({ id }) => {
    const { teachers } = useSelector((state) => state.teacher)
    const teacher = teachers.find(
        (teacher) => teacher.id === Number(id)
    )
    const router = useRouter()
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(TeacherRegistrationSchema),
    })
    const address = watch("address", "")
    const [preview, setPreview] = useState(null)
    const dispatch = useDispatch()
    const SubmitHandler = (data) => {
        if (!data.photo) {
            data.photo = teacher.photo
        }

        dispatch(
            editTeacher({
                ...teacher,
                ...data,
                photo: preview || teacher.photo,
                dateOfBirth:
                    typeof data.dateOfBirth === "string"
                        ? data.dateOfBirth
                        : data.dateOfBirth.toISOString().split("T")[0],

                startDate:
                    typeof data.startDate === "string"
                        ? data.startDate
                        : data.startDate.toISOString().split("T")[0],

                endDate:
                    typeof data.endDate === "string"
                        ? data.endDate
                        : data.endDate.toISOString().split("T")[0],
            })
        )

        dispatch(
            addActivity({
                type: "teacher",
                user: "Admin",
                action: "updated a teacher data",
                target: `${data.firstName} ${data.lastName}`,
                color: "primary",
                date: format(new Date(), "yyyy-MM-dd"),
                time: format(new Date(), "hh:mm a"),
            })
        )
        reset()
        router.push("/teachers/" + id)
        toast.success("Teacher Data Updated Successfully")
    }

    useEffect(() => {
        if (teacher) {
            reset(teacher)
            setPreview(teacher.photo)
            setValue("photo", teacher.photo, {
                shouldValidate: false,
            })
        }
    }, [teacher, reset, setValue])

    return (
        <>
            <div className="m-lg-4 m-3">
                <header>
                    <div className="mb-lg-4 mb-2 d-flex justify-content-between align-items-center">
                        <h1 className="logo">Edit Teacher</h1>
                        <div className="d-xxl-flex gap-4 justify-content-between align-items-center d-none">

                            {/* <div className="search-box position-relative d-none d-xl-inline-block">
                                <Search
                                    size={16}
                                    className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                                />
                                <Form.Control
                                    type="text"
                                    className="bg-white border-0 form-control ps-5 rounded-pill"
                                    placeholder="Search here..."
                                />

                            </div> */}
                            <HeaderIcons />
                        </div>

                        <DashboardDrawer /></div>

                </header>
                <main>


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
                                            placeholder="University Academy Historia"
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

                            <Button type="submit" className="rounded-pill" variant="primary">Update</Button>
                        </div>
                    </Form>

                </main></div>


        </>
    )
}


export default EditTeacherForm
