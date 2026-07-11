"use client"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
const Toast = () => {
  return (
    <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
  )
}

export default Toast
