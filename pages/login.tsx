import React from "react";
import {
  Flex,
  Text,
  VStack,
  Button,
  Box,
  Input,
  chakra,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function login() {
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
      <Flex justifyContent={"center"} mt={"80px"}>
        <Text fontSize={"72px"} fontWeight={"800"} color={"black"}>
          Login
        </Text>
      </Flex>
      <Box display={"flex"} justifyContent={"center"} mt={"70px"}>
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
              Don't have an account? {"   "}
              <chakra.span color={"primary.50"}>
                <Link href={"/signup"} className={"Link"}>
                  Sign up
                </Link>
              </chakra.span>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
