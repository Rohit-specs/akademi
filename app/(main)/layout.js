"use client"
import { Container } from "react-bootstrap"
import Sidebar from "./../../component/Sidebar"
import ProtectedRoute from "/helper/ProtectedRoutes"
import { Provider } from "react-redux"
import store from "/store/store"

const dashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <Provider store={store}>
        <div className="d-flex">
          <Sidebar />
          <main className="flex-grow-1">
            {children}
          </main>
        </div>
      </Provider>
    </ProtectedRoute>
  )
}

export default dashboardLayout
