import Sidebar from "./../../component/Sidebar"

const dashboardLayout = ({children}) => {
  return (
    <div className="d-flex">
        <Sidebar/>
        <main className="flex-grow-1">
            {children}
        </main>

    </div>
  )
}

export default dashboardLayout
