import React from "react";
import { Flex, Text, VStack, Button, Box, chakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
export default function verify() {
  return (
    <>
      <Flex justifyContent={"center"} pt={"32px"} id={"features"}>
        <Link href={"/"}>
          <Image src={"/Workflow.svg"} width={"122px"} height={"22"} />
        </Link>
      </Flex>
      <Text
        color={"black"}
        fontSize={"48px"}
        fontWeight={"800"}
        textAlign={"center"}
        mt={"100px"}
      >
        Verification
      </Text>
      <VStack
        className={"header"}
        w={"500px"}
        h={"200px"}
        bgColor={"primary.50"}
        mt={"30px"}
        justifyContent={"center"}
      >
        <Text color={"black"} fontSize={"20px"} fontWeight={"300"}>
          Verify your sms code here:
        </Text>
        <Flex alignItems={"center"} gap={"10px"}>
          <input
            type={"number"}
            placeholder={"Code"}
            className={"login-input1"}
          />
          <chakra.span
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"106px"}
            height={"39px"}
            bgColor={"#292929"}
            borderRadius={"12px"}
            transition={"all 0.3s ease-in-out"}
            _hover={{
              bgColor: "transparent",
              border: "1px solid #292929",
            }}
          >
            <Link href={"/login"}>Verify</Link>
          </chakra.span>
        </Flex>
      </VStack>
    </>
  );
}
