import React from "react";
import { Row, Col, Label, Input, FormGroup, Button } from "reactstrap";

// redux
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

// validasi
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

let FormComponent = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="nama"
              component={renderField}
              label="nama"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="alamat"
              component={renderField}
              label="alamat"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="nohp"
              component={renderField}
              label="nohp"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Field
              type="text"
              name="umur"
              component={renderField}
              label="umur"
            />
          </FormGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="12">
          <FormGroup>
            <Button color="dark" type="submit" disabled={props.submitting}>
              Submit
            </Button>
          </FormGroup>
        </Col>
      </FormGroup>
    </form>
  );
};

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
