import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";

function TextField(props) {
    const {
        label,
        placeholder,
        type,
        autofocus = false,
        onChange,
        value,
        disabled = false,
        size = "sm",
    } = props;
    return (
        <div>
            <FormGroup floating>
                <Input
                    type={type}
                    name={label}
                    id={label}
                    placeholder={placeholder}
                    onChange={onChange}
                    bsSize={size}
                    autoFocus={autofocus}
                    className="mt-2 mb-2"
                    value={value}
                    disabled={disabled}
                />
                {label !== "false" ? <Label for={label}>{label}</Label> : null}
            </FormGroup>
        </div>
    );
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default TextField;