import { Form } from "react-bootstrap";

const SearchInput = ({ value, onChange, placeholder="Search here..." }) => {
    return (
        <Form.Control
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="bg-white border-1 border-gray-300 form-control ps-5 rounded-pill"
        />
    );
};

export default SearchInput;