import React from "react";
import MessageCard from "../blocks/MessageCard";
import {Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack } from "@chakra-ui/react";

interface MsgDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    btnRef: React.RefObject<HTMLButtonElement>;
}

const MsgDrawer: React.FC<MsgDrawerProps> = ({ isOpen, onClose, btnRef }) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Message</DrawerHeader>

                <DrawerBody>
                   <MessageCard title={"Message"} description={"descriptirehtyjerptkwerkewjte'tjwqeqt\qwr'lqw\rlq\'rkqw;r'qwjl;ghe;lrjqlejwq;lfjefjq;won"} dateMsg={new Date(2022, 10, 24)} timeMsg={"12:23"} />
                </DrawerBody>

                <DrawerFooter>
                    <Button className="w-full" variant="outline" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default MsgDrawer;
