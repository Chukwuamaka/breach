import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface TagProps extends ButtonProps {
  id: string;
  selectable?: boolean;
  isSelected?: boolean;
  handleSelect: (value: string) => void;
}

export default function Tag({ children, id, selectable = true, isSelected = false, handleSelect, ...props }: PropsWithChildren<TagProps>) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!selectable) return;
    const buttonId = (e.target as HTMLButtonElement).id;
    handleSelect(buttonId);
  }

  return (
    <Button id={id} as={selectable ? 'button' : 'div'} variant={isSelected ? 'solid' : 'outline'}
      size='sm' textTransform='capitalize' maxW='max-content' {...props} onClick={handleClick}
    >
      {children}
    </Button>
  )
}
