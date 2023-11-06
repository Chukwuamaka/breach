import { useStyleConfig } from "@chakra-ui/react";
import { LinkProps } from "@chakra-ui/next-js";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import('@chakra-ui/next-js').then((mod) => mod.Link), {
  ssr: false,
})

export interface CustomLinkProps extends LinkProps {
  size?: 'sm' | 'md';
  variant?: 'solid' | 'outline' | 'unstyled';
}

export default function CustomLink({ children, size, variant, ...props }: PropsWithChildren<CustomLinkProps>) {
  const styles = useStyleConfig('CustomLink', { variant, size });
  return (
    <Link textStyle='md_text' __css={styles} {...props}>
      {children}
    </Link>
  )
}
