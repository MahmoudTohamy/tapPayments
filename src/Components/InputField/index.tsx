/** @format */

import React from "react";
import { inputFieldProps } from "../../Constants/interfaces.ts";
import "./index.scss";
export default function InputField(props: inputFieldProps) {
  return (
    <div className={`input-cont `}>
      <span>{props.title} </span>
      <div
        className={`input-cont__field-cont ${
          props.errors && "input-cont__field-cont--error"
        }`}>
        <input
          value={props.value}
          type={props.type}
          onChange={(e) =>
            props.getChanges(props.stateName, e.target.value, props.id)
          }
          onBlur={(e) => props.validateInfo(props.stateName, e.target.value)}
        />
      </div>
      {!props.isValid ? (
        <span className='input-cont__error-msg'>
          Credit card {props.errorMsg} is invalid
        </span>
      ) : null}
    </div>
  );
}
