"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Card, Form, Button, InputGroup, Stack, } from "react-bootstrap";

import {
  Eye,
  EyeSlash,
  Google,
} from "react-bootstrap-icons";
import { SignInSchema } from "/schema/SignInSchema";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.info("No account found. Please Sign Up first.");
      return;
    }

    if (
      user.email === data.email &&
      user.password === data.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      router.push("/dashboard");
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <Card
      className="border-0 shadow rounded-4 w-100 signupcard"
    >
      <Card.Body className="p-4 p-lg-5">

        <div className="text-center mb-4">
          <h2 className="fw-bold">
            Welcome Back 👋
          </h2>

          <p className="text-secondary mb-0">
            Sign in to continue to your account.
          </p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3">

            <Form.Label>Email Address</Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter your email"
              size="lg"
              className="rounded-pill"
              {...register("email")}
            />

            <small className="text-danger">
              {errors.email?.message}
            </small>

          </Form.Group>
          <Form.Group className="mb-3">

            <Form.Label>Password</Form.Label>

            <InputGroup>

              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                size="lg"
                className="border-end-0 rounded-start-pill"
                {...register("password")}
              />

              <Button
                type="button"
                variant="light"
                className="border border-start-0 rounded-end-pill"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeSlash />
                ) : (
                  <Eye />
                )}
              </Button>

            </InputGroup>

            <small className="text-danger">
              {errors.password?.message}
            </small>

          </Form.Group>

          <Stack
            direction="horizontal"
            className="justify-content-between mb-4"
          >
            <Form.Check
              type="checkbox"
              label="Remember me"
            />

            <Link
              href="/forgot-password"
              className="text-decoration-none"
            >
              Forgot Password?
            </Link>
          </Stack>

          <Button
            type="submit"
            variant="primary"
            className="w-100 rounded-pill py-2 mb-3"
          >
            Sign In
          </Button>

          <div className="text-center text-secondary mb-3">
            OR
          </div>

          <Button
            type="button"
            variant="light"
            className="w-100 rounded-pill border d-flex align-items-center justify-content-center gap-2"
          >
            <Google className="text-danger" />
            Continue with Google
          </Button>

          <p className="text-center mt-4 mb-0">
            Don't have an account?

            <Link
              href="/signup"
              className="ms-2 fw-semibold text-decoration-none"
            >
              Sign Up
            </Link>
          </p>

        </Form>

      </Card.Body>
    </Card>
  );
};

export default SignIn;