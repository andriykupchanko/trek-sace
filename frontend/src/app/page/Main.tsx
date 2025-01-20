"use client";

import React, { useRef, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import InfoTabs from "../components/common/InfoTabs";
import MenuDrawer from "../components/common/MenuDrawer";

const MainPage = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch("/api/auth/session");
      if (response.ok) {
        const data = await response.json();
        if (data.user) {
          setIsAuthentication(true);
          // Перевірте, чи користувач є адміністратором
          if (data.user.role === "admin") {
            setIsAdmin(true);
          }
        }
      }
    };
    checkSession();
  }, []);

  return (
    <div className="flex">
      <InfoTabs isAuth={isAuthentication} isAdmin={isAdmin} />
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        btnRef={btnRef}
        isAuth={isAuthentication}
        setIsAuth={setIsAuthentication}
        isAdmin={isAdmin}
      />
    </div>
  );
};

export default MainPage;
