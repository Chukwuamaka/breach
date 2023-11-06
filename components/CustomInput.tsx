import { FormControl, FormControlProps, FormLabel, Input, InputProps, InputGroup, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

export interface CommonCustomInputProps {
  input_id: string;
  label: string;
  isLabelVisible?: boolean;
  required?: boolean;
  errorMessage?: string;
  helperText?: React.ReactNode;
  containerProps?: FormControlProps;
}

interface CustomInputProps extends CommonCustomInputProps {
  rightEle?: React.ReactNode;
  leftEle?: React.ReactNode;
}

export default function CustomInput({
  input_id, label, isLabelVisible = true, required, errorMessage, helperText,
  rightEle, leftEle, containerProps, ...props
}: CustomInputProps & InputProps) {
  return (
    <FormControl isRequired={required} {...containerProps}>
      <FormLabel htmlFor={input_id} mb={2} color='brand.grey.900' fontSize='0.750rem' className={!isLabelVisible ? 'sr-only' : undefined}>
        {label}
      </FormLabel>
      {rightEle || leftEle ? 
        <InputGroup>
          {leftEle}
          <Input id={input_id} name={input_id} {...props} />
          {rightEle}
        </InputGroup>
        :
        <Input id={input_id} name={input_id} {...props} />
      }
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}