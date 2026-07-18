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
    const { chats, groups } = useSelector((state) => state.chat)
    const dispatch = useDispatch()
    const router = useRouter()
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 1000)
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    const searchResults = [
    ...filteredChats.map(chat => ({
        ...chat,
        type: "chat",
    })),
    ...filteredGroups.map(group => ({
        ...group,
        type: "group",
    })),
].slice(0, 5)
    return (
        <>
            <h3 className="card-title mb-2 mb-lg-3">Messages</h3>

            <div className="search-box position-relative mb-2">
                <Search
                    size={16}
                    className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                />

                <SearchInput onChange={setSearch} value={search} />
            </div>
            {searchResults.length === 0 ? (
    <div className="text-center py-4 text-gray-400">
        No results found.
    </div>
) : (
    searchResults.map((item) => (
        <div
            key={`${item.type}-${item.id}`}
            className="d-flex justify-content-between mb-3"
            role="button"
            onClick={() => {
                dispatch(
                    selectChat({
                        type: item.type,
                        id: item.id,
                    })
                );
                router.push("/chat");
            }}
        >
            <div className="icon-link gap-2">
                <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                    <img
                        className="user-picture"
                        src={item.avatar}
                        alt={item.name}
                    />
                </div>

                <div>
                    <span className="fw-medium">{item.name}</span>

                    <small className="d-block fs-small text-gray-400">
                        {item.lastMessage}
                    </small>

                    <small className="text-primary text-capitalize">
                        {item.type}
                    </small>
                </div>
            </div>

            <div>
                <small className="text-gray-400">
                    {item.lastMessageTime}
                </small>

                {item.unread > 0 && (
                    <div className="ms-auto unread-message">
                        {item.unread}
                    </div>
                )}
            </div>
        </div>
    ))
)}
            <Button as={Link} href="/chat" variant="outline-primary"
                className="mb-2 bg-purple-10 fw-medium w-100 rounded-pill">
                View More
            </Button>
        </>
    )
}

export default UserMessages