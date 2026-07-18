"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginUser } from "/store/slices/UserSlice";

export default function ProtectedRoute({ children }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [authorized, setAuthorized] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn")
    const currentUserId = Number(localStorage.getItem("currentUserId"))
    if (!token || !currentUserId) {
      router.replace("/signin")
      return
    }
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((item) => item.id === currentUserId)
    if (!user) {
      router.replace("/signin")
      return
    }
    dispatch(loginUser(user))
    setAuthorized(true)
  }, [dispatch, router])

  if (!authorized) {
    return null
  }
  return children
}