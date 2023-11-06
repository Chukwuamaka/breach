import { Button, Text, VStack } from "@chakra-ui/react";
import CustomInput from "./CustomInput";
import CustomLink from "./CustomLink";
import useAuthForm from "@/hooks/useAuthForm";

export default function AuthForm({ purpose = "join" }: { purpose?: 'login' | 'join' }) {
  const { loading, formData, updateFormData, validateFormData, handleSubmit } = useAuthForm();

  return (
    <VStack as='form' spacing='38px' mt={12} maxW='448px' mx='auto' onSubmit={handleSubmit}>
      <CustomInput input_id='email' label='Email' placeholder='Enter email'
        value={formData.email} onChange={updateFormData}
      />
      <CustomInput input_id='password' label='Password' placeholder='Enter password'
        value={formData.password} onChange={updateFormData}
      />
      <VStack spacing='22px' w='full'>
        <Button type='submit' w='full' bg='brand.grey.900' isLoading={loading} loadingText='Submitting...' 
          isDisabled={validateFormData()} _disabled={{bg: 'brand.grey.300'}}
        >
          Continue
        </Button>
        <Text textStyle='sm_text' color='brand.grey.900'>
          {purpose === "join" ? "Already have an account" : "Don't have an account"}{'? '} 
          <CustomLink href={`/${purpose === "join" ? "login" : "join"}`}
            textDecor='underline' textStyle='sm_text' customStyles={{fontSize: '0.875rem'}}
          >
            {purpose === "join" ? "Log in" : "Sign up"}
          </CustomLink>
        </Text>
      </VStack>
    </VStack>
  )
}
