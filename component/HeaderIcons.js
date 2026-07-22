"use client"
import Link from 'next/link'
import { Bell, Gear } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const HeaderIcons = () => {
    const { user } = useSelector((state) => state.user)
    const formatName = (fullName) => {
        const nameParts = fullName.trim().split(" ")

        return `${nameParts[0]} ${nameParts[1][0]}.`
    }
    return (
        <>
            <span className='position-relative'>
                <Link className='stretched-link' href={"/activity"}></Link>
                <Bell className="text-gray-400 fs-4" /></span>

            <Gear className="text-gray-400 fs-4" />
            <span className="icon-link gap-3">
                <span>
                    <div className="fs-small">{formatName(user?.fullname)}</div>
                    <small className="text-gray-400 ms-auto">Admin</small>
                </span>
                <span className="position-relative rounded-circle user-picture bg-purple-10">
                    <Link className="stretched-link" href={"/user"}></Link>
                    <img src={user.avatar || "/images/user.png"} className="user-picture rounded-circle" />
                </span>
            </span>
        </>
    )
}

export default HeaderIcons
