import React from "react";
import { Flex, Text, VStack, Button, Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  return (
    <>
      <Flex justifyContent={"center"} pt={"32px"} id={"features"}>
        <Link href={"/"}>
          <Image
            alt=""
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
            placeholder="Phone #"
            type={"number"}
          />
          <Button variant={"ghost"} colorScheme={"green"}>
            Submit
          </Button>
          <Flex justifyContent={"center"}>
            <Text color={"black"}>
              Don't have an account?
              <Link href={"/login"} className={"Link"}>
                Sign up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
