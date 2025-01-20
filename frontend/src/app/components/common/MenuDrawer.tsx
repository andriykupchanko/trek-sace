import React, { useRef } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton
} from "@chakra-ui/react";
import MenuListBeforeAuth from "./MenuListBeforeAuth";
import MenuListAfterAuth from "./MenuListAfterAuth";
import MenuListWhenAdmin from "./MenuListWhenAdmin";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isAuth, isAdmin }) => {
  const {
    isOpen: isOpenDrawerMenu,
    onOpen: onOpenDrawerMenu,
    onClose: onCloseDrawerMenu
  } = useDisclosure();

  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        mt={4}
        mr={6}
        ml={6}
        pr={6}
        pl={6}
        ref={btnRef}
        onClick={onOpenDrawerMenu}
        variant="outline"
        colorScheme="teal"
        rightIcon={<ArrowForwardIcon />}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpenDrawerMenu}
        placement="right"
        onClose={onCloseDrawerMenu}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {!isAuth ? (
              <MenuListBeforeAuth />
            ) : !isAdmin ? (
              <MenuListAfterAuth />
            ) : (
              <MenuListWhenAdmin />
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onClick={onCloseDrawerMenu} w={"100%"}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
