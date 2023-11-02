import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ProfileDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
        <Dropdown.Item href="/settings">Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdown;