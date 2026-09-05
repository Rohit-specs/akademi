"use client"
import Sidebar from "./../../component/Sidebar"
import ProtectedRoute from "/helper/ProtectedRoutes"
import { Provider } from "react-redux"
import store from "/store/store"

const dashboardLayout = ({ children }) => {

  return (
    <Provider store={store}>
      <ProtectedRoute>
        <div className="d-flex">
          <Sidebar />
          <main className="flex-grow-1">
            {children}
          </main>
        </div>
      </ProtectedRoute>
    </Provider>
  )
}

export default dashboardLayout
