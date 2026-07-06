import { Container } from "react-bootstrap"
import Sidebar from "./../../component/Sidebar"
import ProtectedRoute from "/helper/ProtectedRoutes"

const dashboardLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <Container fluid="true">
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          {children}
        </main>
          
      </div></Container>
    </ProtectedRoute>
  )
}

export default dashboardLayout
