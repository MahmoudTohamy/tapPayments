/** @format */

export interface valuesInterface {
  cardholderName: string;
  number: number | null;
  expirationDate: number | null;
  cvv: number | null;
}
export interface validationInterface {
  cardholderName: boolean;
  number: boolean;
  expirationDate: boolean;
  cvv: boolean;
}

export interface fieldsConstant {
  label: string;
  key: string;
  type?: string;
  errorMsg: string;
  customStyle: boolean;
}
export interface inputFieldProps {
  key: string;
  title: string;
  stateName: string;
  value: string | number;
  getChanges(): { key: string; value: string | number };
  type: string;
  errorMsg: string;
  validateInfo(): { key: string; value: string | number };
  isValid: boolean;
}
