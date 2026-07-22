'use client'
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import { Search } from "react-bootstrap-icons"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { EditUserSchema } from "/schema/UpdateUserSchema";
import { updateUser } from "/store/slices/UserSlice";
import DashboardDrawer from "/component/DashboardDrawer";
import { toast } from "react-toastify";
import HeaderIcons from "/component/HeaderIcons";

const EditUserPageContent = () => {
    const { user } = useSelector((state) => state.user)
    console.log(JSON.stringify(user))
    const dispatch = useDispatch()
    const [preview, setPreview] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(EditUserSchema),
    });
    useEffect(() => {
        if (user) {
            reset({
                fullname: user.fullname,
                email: user.email,
                phone: user.phone || "",
                location: user.location || "",
            });

            setPreview(user.avatar)
        }
    }, [user, reset]);
    const SubmitHandler = (data) => {
        dispatch(
            updateUser({
                ...data,
                avatar: preview,
            })
        )
        const users = JSON.parse(localStorage.getItem("users")) || []
        const currentUserId = Number(localStorage.getItem("currentUserId"))

        const updatedUsers = users.map((user) =>
            user.id === currentUserId
                ? {
                    ...user,
                    fullname: data.fullname,
                    email: data.email,
                    phone: data.phone,
                    location: data.location,
                    avatar: data.photo || user.avatar,
                }
                : user
        )

        localStorage.setItem("users", JSON.stringify(updatedUsers))

        toast.success("Profile updated successfully")
    }
    return (
        <>
            <header className="mb-2 d-flex justify-content-between align-items-center m-4">
                <h1 className="logo">User Details</h1>
                <div className="d-xl-flex gap-4 justify-content-between align-items-center d-none">
                    <HeaderIcons />
                </div>
                <DashboardDrawer />
            </header>
            <main className="p-4">
                <Form onSubmit={handleSubmit(SubmitHandler)}>
                    <div className="bg-light py-2 px-4 rounded-4 pb-3 pb-lg-5 mb-3 mb-lg-4 card-top-primary">
                        <h2 className="card-title text-light mb-3 mb-lg-4">
                            Update Profile
                        </h2>

                        <Row className="g-3 g-lg-4">

                            <Col xs={12} lg={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Name <span className="text-danger">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="John Doe"
                                        {...register("fullname")}
                                    />

                                    <small className="text-danger">
                                        {errors.name?.message}
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
                                        placeholder="john@mail.com"
                                        {...register("email")}
                                    />

                                    <small className="text-danger">
                                        {errors.email?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} lg={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Phone
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="+91 9876543210"
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
                                        Location
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="New Delhi, India"
                                        {...register("location")}
                                    />

                                    <small className="text-danger">
                                        {errors.location?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12}>
                                <Form.Label className="fw-medium fs-5">
                                    Profile Photo
                                </Form.Label>

                                <Form.Control
                                    type="file"
                                    id="avatar"
                                    hidden
                                    accept="image/png,image/jpeg,image/jpg"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];

                                        if (!file) return;

                                        setValue("avatar", file, {
                                            shouldDirty: true,
                                            shouldValidate: true,
                                        });

                                        setPreview(URL.createObjectURL(file));
                                    }}
                                />

                                <label htmlFor="avatar" className="upload-box">
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="upload-preview"
                                        />
                                    ) : (
                                        <p>
                                            Click here or drag an image to upload
                                        </p>
                                    )}
                                </label>

                                <small className="text-danger">
                                    {errors.avatar?.message}
                                </small>
                            </Col>
                            <Col xs={12}>
                                <hr className="my-2 my-lg-3" />
                                <h4 className="fw-semibold mb-3">Change Password</h4>
                            </Col>

                            <Col xs={12} lg={4}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Current Password
                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Current Password"
                                        {...register("currentPassword")}
                                    />

                                    <small className="text-danger">
                                        {errors.currentPassword?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} lg={4}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        New Password
                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="New Password"
                                        {...register("newPassword")}
                                    />

                                    <small className="text-danger">
                                        {errors.newPassword?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col xs={12} lg={4}>
                                <Form.Group>
                                    <Form.Label className="fw-medium fs-5">
                                        Confirm Password
                                    </Form.Label>

                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...register("confirmPassword")}
                                    />

                                    <small className="text-danger">
                                        {errors.confirmPassword?.message}
                                    </small>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                        <Button
                            type="reset"
                            variant="outline-primary"
                            className="rounded-pill"
                        >
                            Reset
                        </Button>

                        <Button
                            type="submit"
                            variant="primary"
                            className="rounded-pill"
                        >
                            Update Profile
                        </Button>
                    </div>
                </Form>
            </main>
        </>
    )
}

export default EditUserPageContent