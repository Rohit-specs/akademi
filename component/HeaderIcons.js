"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Bell, Dot, Gear } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '/store/slices/UserSlice'
const DEFAULT_AVATAR = "/images/user.png"
const HeaderIcons = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const formatName = (fullName = "") => {
        const nameParts = fullName
            .trim()
            .split(" ")
            .filter(Boolean);
        if (nameParts.length === 0) return ""
        if (nameParts.length === 1) return nameParts[0]
        return `${nameParts[0]} ${nameParts[1].charAt(0)}.`
    }
    const profileIncomplete =
        !user.location ||
        !user.phone ||
        user.avatar === DEFAULT_AVATAR
    const handleLogout = () => {
        dispatch(logoutUser())
        router.replace("/signin")
    }
    return (
        <>
            <span className='position-relative'>
                <Link className='stretched-link' href={"/activity"}></Link>
                <Bell className="text-gray-400 fs-4" /></span>

            {/* <Gear className="text-gray-400 fs-4" /> */}
            <Dropdown style={{ justifyContent: 'center', alignItems: "center" }}>
                <Dropdown.Toggle
                    as="button"
                    bsPrefix=" "
                    className='border-0 bg-transparent'
                >
                    <Gear className="text-gray-400 fs-4" />
                    {profileIncomplete && (
                        <Dot size={28} className="position-absolute top-0 start-100 translate-middle text-danger" />
                    )}
                </Dropdown.Toggle>


                <Dropdown.Menu className="rounded-4 shadow border-0 p-2">

                    <Dropdown.Item
                        onClick={() => router.push("/user")}
                    >
                        View Profile
                    </Dropdown.Item>
                    <Dropdown.Item
                        className="d-flex justify-content-between align-items-center"
                        onClick={() => router.push("/user/update-user")}
                    >
                        Update Profile

                        {profileIncomplete && (
                            <OverlayTrigger
                                placement="left"
                                overlay={
                                    <Tooltip id="profile-tooltip">
                                        Please complete your profile
                                    </Tooltip>
                                }
                            >
                                <span className="d-flex">
                                    <Dot
                                        size={28}
                                        className="text-danger"
                                    />
                                </span>
                            </OverlayTrigger>
                        )}
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item
                        className="text-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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
