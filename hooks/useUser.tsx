import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface User {
  userId: number;
  token: string;
}

export default function useUser() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const makeToast = useToast();

  const redirectToLogin = () => {
    makeToast({
      title: 'Please log in first',
      status: 'info',
      duration: 3000,
      colorScheme: 'brand.purple'
    })
    router.push('/login');
  }

  useEffect(() => {
    const userExists = localStorage.getItem('breach_user');
    const userDetails = userExists && JSON.parse(userExists);
    userDetails ? setUser(userDetails) : redirectToLogin();
  }, []);
  
  return (
    {
      user
    }
  )
}
