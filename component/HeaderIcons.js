import Link from 'next/link'
import { Bell, Gear } from 'react-bootstrap-icons'

const HeaderIcons = () => {
    return (
        <>
            <span className='position-relative'>
                <Link className='stretched-link' href={"/activity"}></Link>
                <Bell className="text-gray-400 fs-4" /></span>

            <Gear className="text-gray-400 fs-4" />
            <span className="icon-link gap-3">
                <span>
                    <div className="fs-small">Nabila A.</div>
                    <small className="text-gray-400 ms-auto">Admin</small>
                </span>
                <span className="position-relative rounded-circle user-picture bg-purple-10">
                    <Link className="stretched-link" href={"/user"}></Link>
                    <img src={"https://i.pravatar.cc/150?img=2"} className="user-picture rounded-circle" />
                </span>
            </span>
        </>
    )
}

export default HeaderIcons
