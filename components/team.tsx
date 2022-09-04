import React from "react";
import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <VStack>
        <Text color={"black"} fontWeight={"700"} fontSize={"48px"} mt={"170px"}>
          Meet the Team
        </Text>
        <Box
          width={"230px"}
          borderRadius={"15px"}
          border={"1px solid #000"}
          id={"team"}
        ></Box>
        <Box pt={"100px"} pb={"180px"}>
          <Image
            alt=""
            src={"/Group 957.png"}
            width={"1080px"}
            height={"347"}
          />
        </Box>
      </VStack>
    </>
  );
}
