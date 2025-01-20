"use client";

import React from "react";
import ButtonOpenModal from "../blocks/ButtonOpenModl";
import MsgDrawer from "./MsgDrawer";
import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import { CiUser, CiBellOn, CiSettings, CiLogout } from "react-icons/ci";

const MenuListAfterAuth: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Stack spacing={6}>
      <Button
        variant="outline"
        colorScheme="teal"
        leftIcon={<CiUser />}
        w={"100%"}
      >
        Your Profile
      </Button>
        <hr/>

      <ButtonOpenModal title={"Messages"} variantVisible={"outline"} icon={<CiBellOn />} onOpen={onOpen} btnRef={btnRef}/>
      <MsgDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Button
        variant="outline"
        colorScheme="teal"
        leftIcon={<CiSettings />}
        w={"100%"}
      >
        Settings
      </Button>
      <hr />

      <a href="/api/auth/logout">
        <Button
          variant="outline"
          colorScheme="teal"
          leftIcon={<CiLogout />}
          w={"100%"}
        >
          Log Out
        </Button>
      </a>
    </Stack>
  );
};

export default MenuListAfterAuth;
