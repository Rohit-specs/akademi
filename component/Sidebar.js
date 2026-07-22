'use client'
import SidebarItem from "./SidebarItem"
import { menuItems } from "/data/SidebarData"
const Sidebar = () => {
  return (
    <aside className='d-none d-sm-block sidebar bg-linear-3 vh-100 overflow-y-auto position-sticky top-0'>
        <div className='sidebar-logo icon-link p-lg-4 p-3'>
            <img src={"/logo/logo.svg"} alt="Akedemi Logo"/>
            <h2 className="logo ms-2 text-light d-none d-lg-block">Academy</h2>
        </div>
        <div className="sidebar-menu mb-lg-1">
            <ul className="d-flex flex-column ms-lg-4">
                 {menuItems.map((item)=>(
                <SidebarItem key={item.path} {...item}/>
            ))}
            </ul>
            {/* p-lg-4 p-3 */}
        </div>
        <div className="sidebar-footer ms-3 mt-5">
            <small className="text-light fs-small fw-bold d-none d-lg-inline">Academy - School Admin <br/> Dashboard</small>
            <small className="text-light d-none d-lg-block">© 2026 Indixpert</small>
        </div>
    </aside>
  )
}
export default Sidebar
