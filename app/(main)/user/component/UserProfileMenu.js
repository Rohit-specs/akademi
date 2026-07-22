"use client";

import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Dot, ThreeDotsVertical } from "react-bootstrap-icons";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "/store/slices/UserSlice";

const DEFAULT_AVATAR = "/images/user.png"
const UserProfileMenu = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)

    const profileIncomplete =
        !user.location ||
        !user.phone ||
        user.avatar === DEFAULT_AVATAR

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("currentUserId")
        dispatch(logoutUser())
        router.replace("/signin")
    }
    return (
        <Dropdown align="end">
            <Dropdown.Toggle
                as="button"
                bsPrefix=" "
                className="btn border-0 bg-transparent shadow-none position-absolute end-0 z-2 bottom-50"
            >
                <ThreeDotsVertical size={22} />
                {profileIncomplete && (
                    <Dot size={28} className="position-absolute top-0 start-100 translate-middle text-danger" />
                )}
            </Dropdown.Toggle>
         

            <Dropdown.Menu className="rounded-4 shadow border-0 p-2">

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
    );
};

export default UserProfileMenu;