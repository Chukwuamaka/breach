import { useStyleConfig } from "@chakra-ui/react";
import { CSSProperties, PropsWithChildren } from "react";
import { Link, LinkProps } from "@chakra-ui/react";

export interface CustomLinkProps extends LinkProps {
  size?: 'sm' | 'md';
  variant?: 'solid' | 'outline' | 'unstyled';
  customStyles?: CSSProperties;
}

export default function CustomLink({ children, size, variant, customStyles, ...props }: PropsWithChildren<CustomLinkProps>) {
  const styles = useStyleConfig('CustomLink', { variant, size });
  return (
    <Link textStyle='md_text' sx={styles} style={customStyles} {...props}>
      {children}
    </Link>
  )
}
