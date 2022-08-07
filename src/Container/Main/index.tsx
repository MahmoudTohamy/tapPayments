/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "../../Components/Card/index.tsx";
import SuccessModal from "../../Components/SuccessModal/index.tsx";
import { balanceActions } from "../../actions/balanceActions.ts";
import "./index.scss";
export default function Main() {
  const [isOpen, setOpen] = useState({
    cardModal: false,
    successModal: false,
  });
  const { balance } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getBalance } = bindActionCreators(balanceActions, dispatch);
  useEffect(() => {
    getBalance();
  }, []);

  const toggleModal = (stateName: string) => {
    setOpen({ ...isOpen, [stateName]: !isOpen[stateName] });
  };
  const openSuccessModal = () => {
    setOpen({
      cardModal: false,
      successModal: true,
    });
  };

  return (
    <div>
      <h1>Balance:{balance}</h1>
      <button onClick={() => toggleModal("cardModal")}>
        Recharge/Add Balance
      </button>
      <Card
        isOpen={isOpen.cardModal}
        stateName='cardModal'
        toggleModal={toggleModal}
        openSuccessModal={openSuccessModal}
      />
      <SuccessModal
        isOpen={isOpen.successModal}
        stateName='successModal'
        toggleModal={toggleModal}
      />
    </div>
  );
}
