"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card, Form, Button, InputGroup, } from "react-bootstrap";

import { Eye, EyeSlash, Google, RocketTakeoff, } from "react-bootstrap-icons";
import { SignUpSchema } from "/schema/SignUpSchema";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  })

  const onSubmit = (data) => {

    localStorage.setItem(
      "user",
      JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
        password: data.password,
      })
    )

    toast.success("Account Created Successfully");

    router.push("/signin")
  }

  return (
    <Card
      className="border-0 shadow rounded-4 w-100 signupcard"
    >
      <Card.Body className="p-4 p-lg-5">

        <div className="text-center mb-4">

          <h2 className="fw-bold">
            Create Account <RocketTakeoff className="text-danger" />
          </h2>

          <p className="text-secondary mb-0">
            Fill in your details to get started.
          </p>

        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3">

            <Form.Label>Full Name</Form.Label>

            <Form.Control
              size="lg"
              className="rounded-pill"
              placeholder="Enter your full name"
              {...register("fullname")}
            />

            <small className="text-danger">
              {errors.fullname?.message}
            </small>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Email Address</Form.Label>

            <Form.Control
              type="email"
              size="lg"
              className="rounded-pill"
              placeholder="Enter your email"
              {...register("email")}
            />

            <small className="text-danger">
              {errors.email?.message}
            </small>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Phone Number</Form.Label>

            <Form.Control
              type="tel"
              size="lg"
              className="rounded-pill"
              placeholder="Enter your phone number"
              {...register("phone")}
            />

            <small className="text-danger">
              {errors.phone?.message}
            </small>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Password</Form.Label>

            <InputGroup>

              <Form.Control
                type={showPassword ? "text" : "password"}
                size="lg"
                className="border-end-0 rounded-start-pill"
                placeholder="Create password"
                {...register("password")}
              />

              <Button
                type="button"
                variant="light"
                className="border border-start-0 rounded-end-pill"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>

            </InputGroup>

            <small className="text-danger">
              {errors.password?.message}
            </small>

          </Form.Group>


          <Form.Group className="mb-3">

            <Form.Label>Confirm Password</Form.Label>

            <InputGroup>

              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                size="lg"
                className="border-end-0 rounded-start-pill"
                placeholder="Confirm password"
                {...register("confirmPassword")}
              />

              <Button
                type="button"
                variant="light"
                className="border border-start-0 rounded-end-pill"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? (
                  <EyeSlash />
                ) : (
                  <Eye />
                )}
              </Button>

            </InputGroup>

            <small className="text-danger">
              {errors.confirmPassword?.message}
            </small>

          </Form.Group>

          <Form.Check
            className="mb-3"
            {...register("terms")}
            label={
              <>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </>
            }
          />

          <small className="text-danger d-block mb-3">
            {errors.terms?.message}
          </small>

          <Button
            type="submit"
            variant="primary"
            className="w-100 rounded-pill py-2 mb-3"
          >
            Create Account
          </Button>

          <div className="text-center text-secondary mb-3">
            OR
          </div>

          <Button
            type="button"
            variant="light"
            className="w-100 rounded-pill border d-flex justify-content-center align-items-center gap-2"
          >
            <Google className="text-danger" />
            Continue with Google
          </Button>

          <p className="text-center mt-4 mb-0">

            Already have an account?

            <Link
              href="/signin"
              className="ms-2 text-decoration-none fw-semibold"
            >
              Sign In
            </Link>

          </p>

        </Form>

      </Card.Body>
    </Card>
  );
};

export default SignUp;