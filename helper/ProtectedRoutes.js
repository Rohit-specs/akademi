"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
    useEffect(()=>{
          const token = localStorage.getItem("isLoggedIn");
    if (!token) {
      router.push("/signin");
    } else {
      setAuthorized(true);
    }
    },[router])
  

  if (!authorized) {
    return null;
  }

  return children;
}