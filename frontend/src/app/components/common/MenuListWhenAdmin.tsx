import { Button, Stack } from "@chakra-ui/react";
import MenuListAfterAuth from "./MenuListAfterAuth";
import { MdOutlineAdminPanelSettings } from "react-icons/md";



const MenuListWhenAdmin = () => {
  return (
    <Stack spacing={6}>
      <Button
        w={"100%"}
        variant="outline"
        colorScheme="teal"
        leftIcon={<MdOutlineAdminPanelSettings />}
      >
        Admin Panel
      </Button>
      <hr />
      <MenuListAfterAuth />
    </Stack>
  );
};

export default MenuListWhenAdmin;
