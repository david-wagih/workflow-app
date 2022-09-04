import React from "react";
import { Flex, Text, HStack, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
export default function About() {
  return (
    <>
      <Flex flexDirection={"column"} mt={"105px"} alignItems={"center"}>
        <Text
          color={"black"}
          fontSize={"50px"}
          fontWeight={"800px"}
          fontStyle={"normal"}
          id={"about"}
        >
          Why do we do this?
        </Text>
        <Text
          color={"black"}
          fontSize={"24px"}
          fontWeight={"300px"}
          fontStyle={"normal"}
        >
          Well, we are students too
        </Text>
      </Flex>
      <Flex alignItems={"center"} mt={"120px"} flexDirection={"column"}>
        <Image alt="" src={"/Group 955.png"} width={"936px"} height={"363px"} />
        <Box my={"100px"}>
          <Image
            alt=""
            src={"/Group 3.png"}
            width={"1130px"}
            height={"442px"}
          />
        </Box>
      </Flex>
    </>
  );
}
