import { Box, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ThemeButton } from "./base/ThemeButton";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p={5}>
      <Box p="2">
        <Link href={"/"}>
          <Heading
            size="md"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Chakra App
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <ButtonGroup>
        <ThemeButton />
      </ButtonGroup>
    </Flex>
  );
};
