import React from "react";
import { Button, Form } from "react-bootstrap";

function Filter() {
  return (
    <div className="filter">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Desending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of box"
          name="group1"
          type="radio"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast devlavery"
          name="group1"
          type="radio"
          id={`inline-4`}
        />
        <label style={{ paddingRight: 10 }}>Rating: </label>
      </span>

      <Button variant="light">Clear Filter</Button>
    </div>
  );
}

export default Filter;
