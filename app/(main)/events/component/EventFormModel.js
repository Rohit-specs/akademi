"use client"
import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import EventSchema from "/schema/EventSchema";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "/store/slices/EventsSlice";
import { format, parseISO } from "date-fns";
import { addActivity } from "/store/slices/ActivitySlice";

const EventFormModel = ({ selectedDate }) => {
    const [show, setShow] = useState(false);
    const { events } = useSelector((state) => state.event)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(EventSchema),
        defaultValues: {
            className: "",
            subject: "",
            date: "",
            startTime: "",
            endTime: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(
            addEvent({
                ...data,
                date: format(data.date, "yyyy-MM-dd"),
            })
        )
        dispatch(addActivity({
            type: "event",
            user: "Admin",
            action: "created a new event",
            target: data.subject,
            color: "warning",
            date: format(new Date(), "yyyy-MM-dd"),
            time: format(new Date(), "hh:mm a"),
        }))

        toast.success("New Event Added Successfully")
        reset()
        setShow(false)
    }

    const handleClose = () => {
        reset()
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)} className="rounded-pill btn py-2">
                <Plus className="me-2" size={24}/>
                New Event
            </Button>

            <Modal show={show} onHide={handleClose} centered><fieldset></fieldset>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Class</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Class Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter class name"
                                {...register("className")}
                            />
                            <small className="text-danger">
                                {errors.className?.message}
                            </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter subject"
                                {...register("subject")}
                            />
                            <small className="text-danger">
                                {errors.subject?.message}
                            </small>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                {...register("date")}
                            />
                            <small className="text-danger">
                                {errors.date?.message}
                            </small>
                        </Form.Group>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        {...register("startTime")}
                                    />
                                    <small className="text-danger">
                                        {errors.startTime?.message}
                                    </small>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        {...register("endTime")}
                                    />
                                    <small className="text-danger">
                                        {errors.endTime?.message}
                                    </small>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>

                        <Button type="submit" variant="primary">
                            Save Class
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default EventFormModel;