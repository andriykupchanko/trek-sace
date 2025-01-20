import React from "react";
import {  Stack } from "@chakra-ui/react";

const MenuListBeforeAuth = () => {
  return (
    <Stack spacing={6}>
      <a href="/api/auth/login">
        Log In
      </a>
    </Stack>
  );
};

export default MenuListBeforeAuth;

