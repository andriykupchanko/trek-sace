"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

interface InfoTabsProps {
  isAuth: boolean;
  isAdmin: boolean;
}

const InfoTabs: React.FC<InfoTabsProps> = ({ isAuth, isAdmin }) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="green" w={"100%"} p={4}>
      <TabList>
        <Tab
          w={{ base: "50%", md: "25%", xl: "10%" }}
          maxW={{ base: "100%", xl: "350px" }}
          fontSize={{ base: "sm", md: "md", xl: "lg" }}
          p={{ base: 1.5, md: 4 }}
        >
          Main
        </Tab>
        <Tab
          w={{ base: "50%", md: "25%", xl: "10%" }}
          maxW={{ base: "100%", xl: "350px" }}
          fontSize={{ base: "sm", md: "md" }}
          p={{ base: 1.5, md: 4 }}
          isDisabled={!isAuth}
        >
          Statistic
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default InfoTabs;
