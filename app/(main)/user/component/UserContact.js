"use client";

import { useMemo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Envelope, Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import SearchInput from "/component/SearchInput";
import useDebounce from "/hooks/useDebounce";

const UserContacts = () => {
    const { contacts } = useSelector((state) => state.user)
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)

    const debouncedSearch = useDebounce(search, 500)

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            contact.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            contact.grade.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [contacts, debouncedSearch])

    const contactsToShow = show
        ? filteredContacts
        : filteredContacts.slice(0, 5)
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h3 className="card-title">Contacts</h3>

                    <small className="text-gray-400">
                        You have {contacts.length} contacts
                    </small>
                </div>

                <button
                    className="plus-icon btn bg-primary text-white rounded-circle"
                    onClick={() => setShowAddModal(true)}
                >
                    <Plus />
                </button>
            </div>

            <div className="search-box position-relative mb-3">
                <Search
                    size={16}
                    className="text-primary position-absolute top-50 start-0 translate-middle-y ms-3"
                />
                <SearchInput value={search} onChange={setSearch} />
            </div>

            <div
                className="pe-1 overflow-y-auto h-380"
            >
                {contactsToShow.length === 0 ? (
                    <div className="text-center text-gray-400 py-5">
                        No contacts found.
                    </div>
                ) : (
                    contactsToShow.map((contact) => (
                        <div
                            key={contact.id}
                            className="d-flex justify-content-between mb-3"
                        >
                            <div className="icon-link gap-2">
                                <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                    <img
                                        src={contact.avatar}
                                        className="user-picture"
                                        alt={contact.name}
                                    />
                                </div>

                                <div>
                                    <span className="fw-medium">
                                        {contact.name}
                                    </span>

                                    <small className="d-block fs-small text-gray-400">
                                        {contact.grade}
                                    </small>
                                </div>
                            </div>

                            <a
                                href={`mailto:${contact.email}`}
                                className="btn btn-outline-primary rounded-circle plus-icon position-relative"
                            >
                                <Envelope
                                    size={20}
                                    className="position-absolute top-50 start-50 translate-middle"
                                />
                            </a>
                        </div>
                    ))
                )}
            </div>

            <Button
                variant="outline-primary"
                className="bg-purple-10 fw-medium w-100 rounded-pill mt-3"
                onClick={() => setShow(true)}
            >
                View All
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                scrollable
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>All Contacts</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {filteredContacts.length === 0 ? (
                        <div className="text-center text-gray-400 py-4">
                            No contacts found.
                        </div>
                    ) : (
                        filteredContacts.map((contact) => (
                            <div
                                key={contact.id}
                                className="d-flex justify-content-between mb-3"
                            >
                                <div className="icon-link gap-2">
                                    <div className="user-picture overflow-hidden rounded-circle bg-purple-10">
                                        <img
                                            src={contact.avatar}
                                            className="user-picture"
                                            alt={contact.name}
                                        />
                                    </div>

                                    <div>
                                        <span className="fw-medium">
                                            {contact.name}
                                        </span>

                                        <small className="d-block text-gray-400">
                                            {contact.grade}
                                        </small>

                                        <small className="d-block text-gray-400">
                                            {contact.email}
                                        </small>
                                    </div>
                                </div>

                                <a
                                    href={`mailto:${contact.email}`}
                                    className="btn btn-outline-primary rounded-circle plus-icon position-relative"
                                >
                                    <Envelope
                                        size={20}
                                        className="position-absolute top-50 start-50 translate-middle"
                                    />
                                </a>
                            </div>
                        ))
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UserContacts;