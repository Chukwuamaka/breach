import { ChangeEventHandler, useState } from "react";

interface FormDataState {
  email: string;
  password: string;
}

const initialFormData = {
  email: '',
  password: '',
};

export default function useAuthForm() {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);

  const updateFormData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validateEmail = (email: string) => {
    // Regex pattern coined from https://www.regular-expressions.info/email.html
    const emailPattern = /^[A-Z0-9][A-Z0-9._%+-]+?@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
    const isEmailValid = emailPattern.test(email);
    return isEmailValid;
  }

  const validateFormData = () => {
    // Use this to determine when to disable the submit button (i.e. if any of the required input fields is empty, incomplete, or incorrect).
    const { email, password } = formData;
    return !validateEmail(email) || password === '';
  }

  const handleSubmit = () => {}
  
  return ({
    formData,
    loading,
    updateFormData,
    validateFormData,
    handleSubmit
  })
}
