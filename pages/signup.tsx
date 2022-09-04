import React from "react";
import { Flex, Text, VStack, Button, Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
    <>
      <Flex justifyContent={"center"} pt={"32px"} id={"features"}>
        <Link href={"/"}>
          <Image
            src={"/Workflow.svg"}
            width={"122px"}
            height={"22"}
            className={"animate__animated animate__fadein"}
          />
        </Link>
      </Flex>
      <Text>Login</Text>
      <Box display={"flex"} justifyContent={"center"} mt={"100px"}>
        <Flex
          w={"317px"}
          h={"376px"}
          bgColor={"#ffff"}
          borderRadius={"10px"}
          flexDirection={"column"}
          justifyContent={"center"}
          gap={"20px"}
          zIndex={"9999"}
          shadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
          <input className="login-input" placeholder="Email" type={"email"} />
          <input
            className="login-input"
            placeholder="Confirm Email"
            type={"email"}
          />
          <input
            className="login-input"
            placeholder="Phone #"
            type={"number"}
          />
          <Button variant={"ghost"} colorScheme={"green"}>
            Submit
          </Button>
          <Text color={"black"}>
            already have a account? <Link href={"/login"}>login</Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
}
