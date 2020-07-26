import React from 'react';
import styled from 'styled-components';


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <InputWrapper>
        <Input className="form_input" onChange={handleChange} {...otherProps} />
        {label ? (
            <label
                className={`${
                    !!otherProps.value ? "shrink" : ""
                    } form_input_label`}
            >
                {label}
            </label>
        ) : null}
    </InputWrapper>
);

export default FormInput;


const InputWrapper = styled.div`
  position: relative;
  margin: 45px 0;
  & .form_input_label {
    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    transition: 300ms ease all;
  }
  & .form_input_label.shrink {
        top: -10px;
        font-size: 12px;
        color: black; 
  }
`
const Input = styled.input`
    background: none;
    background-color: white;
    color:  gray;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid gray;
    margin: 25px 0;

    &:focus {
      outline: none;
    };
    &:focus ~ .form_input_label {
        top: -10px;
        font-size: 12px;
        color: black;
    }
`
