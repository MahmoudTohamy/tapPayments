/** @format */

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import valid from "card-validator";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./index.scss";
import InputField from "../InputField/index.tsx";
import {
  valuesInterface,
  validationInterface,
  fieldsConstant,
} from "../../Constants/interfaces.ts";
import { balanceActions } from "../../actions/balanceActions.ts";
let cardNameAndNumConstant: fieldsConstant = [
  {
    label: "Card Name",
    key: "cardholderName",
    type: "text",
    errorMsg: "name",
  },
  {
    label: "Card Number",
    key: "number",
    type: "number",
    errorMsg: "number",
  },
];
let cardExpirationDateAndCVVConstant: fieldsConstant = [
  {
    label: "Expiration Date",
    key: "expirationDate",
    customStyle: true,
    type: "text",
    errorMsg: "expiration date",
  },
  {
    label: "Card CVV",
    key: "cvv",
    customStyle: true,
    type: "number",
    errorMsg: "cvv",
  },
];

let intialData: valuesInterface = {
  cardholderName: "",
  number: null,
  expirationDate: null,
  cvv: null,
};
export default function Card(props) {
  const [isDisabled, toggleSubmit] = useState<boolean>(true);
  const [values, setValues] = useState<valuesInterface>(intialData);
  const [validation, setValidation] = useState<validationInterface>({
    cardholderName: true,
    number: true,
    expirationDate: true,
    cvv: true,
  });
  const dispatch = useDispatch();
  const { addBalance } = bindActionCreators(balanceActions, dispatch);
  const handleChange = (key: string, value: string | number) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
  const validateInfo = (key: string, value: string | number) => {
    let validInfo = valid[key](value);
    let validationClone = { ...validation };
    validationClone = { ...validationClone, [key]: validInfo.isValid };
    let cardValidationFlag = Object.values(validationClone).every(
      (element) => element === true
    );
    let cardValuesFlag = Object.values(values).every(
      (element) => element?.length > 0
    );

    toggleSubmit(!cardValidationFlag || !cardValuesFlag);
    setValidation(validationClone);
  };

  const handleSubmit = async () => {
    let response = await addBalance({
      amount: 10,
    });
    if (response.status === 200) {
      setValues(intialData);
      props.openSuccessModal();
    }
  };
  const renderInput = (field: fieldsConstant) => {
    return (
      <InputField
        key={field.key}
        title={field.label}
        stateName={field.key}
        value={values[field.key]}
        getChanges={handleChange}
        type={field.type}
        errorMsg={field.errorMsg}
        validateInfo={validateInfo}
        isValid={validation[field.key]}
      />
    );
  };
  return (
    <Modal
      open={props.isOpen}
      onClose={() => props.toggleModal(props.stateName)}>
      <div className='card-container'>
        {cardNameAndNumConstant.map((field: fieldsConstant) =>
          renderInput(field)
        )}
        <div className='card-container__ccv-expirationDate'>
          {cardExpirationDateAndCVVConstant.map((field: fieldsConstant) =>
            renderInput(field)
          )}
        </div>
        <button disabled={isDisabled} onClick={handleSubmit}>
          Charge 10$
        </button>
      </div>
    </Modal>
  );
}
