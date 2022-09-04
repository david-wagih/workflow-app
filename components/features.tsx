import React from "react";
import { Flex, Text, VStack, Button, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <Box h={"100%"} bgColor={"#A79CA2"}>
        <Flex justifyContent={"center"} pt={"32px"} id={"features"}>
          <Image alt="" src={"/Workflow.svg"} width={"122px"} height={"22"} />
        </Flex>
        <VStack mt={"50px"}>
          <Text
            fontWeight={"700"}
            fontSize={"64px"}
            fontStyle={"normal"}
            color={"black"}
          >
            Features
          </Text>
          <Text
            fontWeight={"400"}
            fontSize={"20px"}
            fontStyle={"normal"}
            color={"black"}
            pb={"40px"}
          >
            Made for you and only you in mind.
          </Text>
          <Image
            alt=""
            src={"/Group 956.png"}
            width={"897px"}
            height={"310px"}
          />
        </VStack>
        <VStack
          mt={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
          pb={"100px"}
        >
          <Text color={"black"} fontSize={"17px"} fontWeight={"700"}>
            Tech Stack
          </Text>
          <Box
            width={"70px"}
            borderRadius={"15px"}
            border={"1px solid #000"}
          ></Box>
          <Box mt={"22px"}>
            <Image
              alt=""
              src={"/techStack.png"}
              width={"129px"}
              height={"114px"}
            />
          </Box>
        </VStack>
      </Box>
    </>
  );
}
