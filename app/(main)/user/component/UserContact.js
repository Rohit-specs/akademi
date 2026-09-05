"use client";
import { useMemo, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Envelope, Plus, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "/component/SearchInput";
import useDebounce from "/hooks/useDebounce";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddContactSchema } from "/schema/AddContactSchema";
import { toast } from "react-toastify";
import { addContact } from "/store/slices/UserSlice";

const UserContacts = () => {
    const { register, handleSubmit, setValue, watch, reset, formState: { errors }, } = useForm({
        resolver: yupResolver(AddContactSchema),
    })
    const dispatch = useDispatch()
    const { contacts } = useSelector((state) => state.user)
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)
    const [visibleCount, setVisibleCount] = useState(5)
    const [showAddModal, setShowAddModal] = useState(false)
    const debouncedSearch = useDebounce(search, 500)

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            contact.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            contact.grade.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    }, [contacts, debouncedSearch])
    const contactsToShow = filteredContacts.slice(0, visibleCount)
    const onSubmit = (data) => {
        dispatch(
            addContact({
                id: Date.now(),
                name: data.name.trim(),
                email: data.email.trim().toLowerCase(),
                grade: data.grade,
                avatar: URL.createObjectURL(data.avatar),
            })
        );

        toast.success("Contact added successfully")
        reset()
        setShowAddModal(false)
    }
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
                    className="plus-icon position-relative btn bg-primary text-white rounded-circle"
                    onClick={() => setShowAddModal(true)}
                >
                    <Plus size={24} className="position-absolute top-50 start-50 translate-middle" />
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
                onClick={() =>
                    setVisibleCount((prev) => prev >= filteredContacts.length ? 5 : prev + 5)}>
                {visibleCount >= filteredContacts.length
                    ? "View Less"
                    : "View More"}
            </Button>
            <Modal
                show={showAddModal}
                onHide={() => {
                    setShowAddModal(false)
                    reset()
                }}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Enter Full Name"
                                {...register("name")}
                            />

                            {errors.name && (
                                <small className="text-danger">
                                    {errors.name.message}
                                </small>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                {...register("email")}
                            />

                            {errors.email && (
                                <small className="text-danger">
                                    {errors.email.message}
                                </small>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Grade</Form.Label>

                            <Form.Select
                                {...register("grade")}
                            >
                                <option value="">Select Grade</option>

                                <option value="I A">Class I-A</option>
                                <option value="II A">Class II-A</option>
                                <option value="III A">Class III-A</option>
                                <option value="IV A">Class IV-A</option>
                                <option value="V A">Class V-A</option>
                                <option value="VI A">Class VI-A</option>
                                <option value="VII A">Class VII-A</option>
                                <option value="VIII A">Class VIII-A</option>
                                <option value="IX A">Class IX-A</option>
                                <option value="X A">Class X-A</option>
                                <option value="XI A">Class XI-A</option>
                                <option value="XII A">Class XII-A</option>
                            </Form.Select>

                            {errors.grade && (
                                <small className="text-danger">
                                    {errors.grade.message}
                                </small>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Avatar</Form.Label>

                            <Form.Control
                                type="file"
                                accept="image/png,image/jpeg,image/jpg,image/webp"
                                onChange={(e) =>
                                    setValue(
                                        "avatar",
                                        e.target.files[0],
                                        {
                                            shouldValidate: true,
                                        }
                                    )
                                }
                            />
                            {watch("avatar") && (
                                <div className="mt-3">
                                    <img
                                        src={URL.createObjectURL(watch("avatar"))}
                                        alt="Preview"
                                        width={90}
                                        height={90}
                                        className="rounded-circle object-fit-cover border"
                                    />
                                </div>
                            )}

                            {errors.avatar && (
                                <small className="text-danger">
                                    {errors.avatar.message}
                                </small>
                            )}
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>

                        <Button
                            variant="secondary"
                            onClick={() => {
                                reset();
                                setShowAddModal(false);
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="primary"
                        >
                            Add Contact
                        </Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default UserContacts;