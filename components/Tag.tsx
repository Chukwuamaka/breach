import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface TagProps extends ButtonProps {
  selectable?: boolean;
  isSelected?: boolean;
}

export default function Tag({ children, selectable = true, isSelected = false, ...props }: PropsWithChildren<TagProps>) {
  return (
    <Button as={selectable ? 'button' : 'div'} variant={isSelected ? 'solid' : 'outline'}
      size='sm' textTransform='capitalize' maxW='max-content' {...props}
    >
      {children}
    </Button>
  )
}
