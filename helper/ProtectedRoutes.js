"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { initializeUser } from "/store/slices/UserSlice";

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.replace("/signin")
      return
    }

    dispatch(initializeUser())
    setAuthorized(true)
  }, [dispatch, router])
  if (!authorized) {
    return null
  }

  return children
}