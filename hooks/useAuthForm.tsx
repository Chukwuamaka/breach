import { sendData } from "@/services/send_data.service";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEventHandler, FormEvent, useState } from "react";

interface FormDataState {
  email: string;
  password: string;
}

const initialFormData = {
  email: '',
  password: '',
};

export default function useAuthForm({endpoint}: {endpoint: 'login' | 'register'}) {
  const [formData, setFormData] = useState<FormDataState>(initialFormData);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const makeToast = useToast();
  const toastId = endpoint === 'login' ? 'login_toast' : 'register_toast';

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

  const handleError = (message: string, description?: string) => {
    if (!makeToast.isActive(toastId)) {
      makeToast({
        id: toastId,
        title: message,
        description,
        status: 'error',
        duration: 5000,
      })
    }
  }

  const handleSuccess = (data: object) => {
    setFormData(initialFormData);
    if (!makeToast.isActive(toastId) && endpoint === 'register') {
      makeToast({
        id: toastId,
        title: 'Registration successful',
        status: 'success',
        duration: 3000,
      });
    }
    if (endpoint === 'login') {
      localStorage.setItem('breach_user', JSON.stringify(data))
      router.push('/welcome');
    } else {
      router.push('/login');
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendData(`/auth/${endpoint}`, formData);
      const data = await response.json();
      data.error ? handleError(data.message, "Please try again.") : handleSuccess(data);
    }
    catch (error) {
      handleError("An error ocurred", "Please check your internet connection or try again later.");
    }
    setLoading(false);
  }
  
  return ({
    formData,
    loading,
    updateFormData,
    validateFormData,
    handleSubmit
  })
}
