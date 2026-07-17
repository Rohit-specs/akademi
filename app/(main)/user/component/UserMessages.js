"use client"
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectChat } from "/store/slices/ChatSlice";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import useDebounce from "/hooks/useDebounce";
import SearchInput from "/component/SearchInput";

const UserMessages = () => {
    const { chats } = useSelector((state) => state.chat)
    const dispatch = useDispatch()
    const router = useRouter()
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000)
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    return (
        <>
            <h3 className="card-title mb-2 mb-lg-3">Messages</h3>

            <div className="search-box position-relative mb-2 mb-lg-3">
                <Search
                    size={16}
                    className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                />

                <SearchInput onChange={setSearch} value={search} />
            </div>{filteredChats.length > 0 ? (
                filteredChats.slice(0, 5).map((chat) => (
                    <div
                        key={chat.id}
                        className="d-flex justify-content-between mb-3 "
                        role="button"
                        onClick={() => {
                            dispatch(selectChat({
                                type: "chat",
                                id: chat.id,
                            }))
                            router.push("/chat")
                        }}
                    >
                        <div className="icon-link gap-2">
                            <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                <img
                                    className="user-picture"
                                    src={chat.avatar}
                                    alt={chat.name}
                                />
                            </div>

                            <div>
                                <span className="fw-medium mb-2">{chat.name}</span>
                                <small className="d-block fs-small text-gray-400">
                                    {chat.lastMessage}
                                </small>
                            </div>
                        </div>

                        <div>
                            <small className="text-gray-400 mb-2">{chat.lastMessageTime}</small>

                            {chat.unread !== 0 && (
                                <div className="ms-auto unread-message">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    </div>
                ))

            ) : (
                <div className="text-center py-4 text-gray-400">
                    No chats found.
                </div>
            )}
            <Button as={Link} href="/chat" variant="outline-primary"
                className="mt-2 mb-2 bg-purple-10 fw-medium w-100 rounded-pill">
                View More
            </Button>
        </>
    )
}

export default UserMessages