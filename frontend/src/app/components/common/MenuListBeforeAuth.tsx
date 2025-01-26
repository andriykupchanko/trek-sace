import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";

const MenuListBeforeAuth = () => {
  return (
    <Stack spacing={6}>
      <a href="/api/auth/login">
        <Button
            variant="outline"
            colorScheme="teal"
            leftIcon={<CiUser />}
            w={"100%"}
          >
            Log In
          </Button>
      </a>
    </Stack>
  );
};

export default MenuListBeforeAuth;

