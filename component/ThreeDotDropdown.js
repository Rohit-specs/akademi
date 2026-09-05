import { ThreeDots } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';

function ThreeDotDropdown() {
  return (
    <Dropdown as={'span'} bsPrefix=''>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ThreeDots/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThreeDotDropdown;