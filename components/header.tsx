import React from "react";
import { Flex, Text, HStack, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  return (
    <>
      <HStack
        position={"fixed"}
        zIndex={"99"}
        h={"100vh"}
        alignItems={"end"}
        pb={"50px"}
        justifyContent={"center"}
        className={"header"}
      >
        <Flex
          gap={"55px"}
          bgColor={"#445C55"}
          opacity={"85%"}
          width={"738px"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"70px"}
          borderRadius={"100px"}
        >
          <Link href={"#logo"}>
            <Button
              transition={"all 0.3s ease-in-out"}
              variant={"unstyled"}
              display={"flex"}
              _hover={{ filter: "brightness(0.8)" }}
            >
              <Image
                alt=""
                src={"/Group954.svg"}
                height={"52px"}
                width={"77px"}
              />
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              w={"69px"}
              h={"45px"}
              p={"10px"}
              borderRadius={"100px"}
              variant={"unstyled"}
              _hover={{ bgColor: "rgb(143, 212, 189, 0.32)" }}
            >
              App
            </Button>
          </Link>
          <Link href={"#about"}>
            <Button
              variant={"unstyled"}
              w={"69px"}
              h={"45px"}
              borderRadius={"100px"}
              _hover={{ bgColor: "rgb(143, 212, 189, 0.32)" }}
            >
              About
            </Button>
          </Link>
          <Link href={"#features"}>
            <Button
              variant={"unstyled"}
              p={"10px"}
              h={"45px"}
              borderRadius={"100px"}
              _hover={{ bgColor: "rgb(143, 212, 189, 0.32)" }}
            >
              Features
            </Button>
          </Link>
          <Link href={"#team"}>
            <Button
              variant={"unstyled"}
              w={"69px"}
              h={"45px"}
              borderRadius={"100px"}
              _hover={{ bgColor: "rgb(143, 212, 189, 0.32)" }}
            >
              Team
            </Button>
          </Link>
          <Link href={"/login"}>
            <div
              style={{
                display: cookies.token ? "none" : "block",
              }}
            >
              <Button
                w={"70px"}
                bgColor={"#82B5A5"}
                borderRadius={"100px"}
                variant={"unstyled"}
                transition={"all 0.3s ease-in-out"}
                _hover={{ bgColor: "#6fa492", color: "black" }}
              >
                Login
              </Button>
            </div>
          </Link>
          <Link href={"#"}>
            <div
              style={{
                display: cookies.token ? "block" : "none",
              }}
              onClick={() => {
                removeCookie("token");
              }}
            >
              <Button
                w={"100px"}
                bgColor={"#82B5A5"}
                borderRadius={"100px"}
                variant={"unstyled"}
                transition={"all 0.3s ease-in-out"}
                _hover={{ bgColor: "#6fa492", color: "black" }}
              >
                Logout
              </Button>
            </div>
          </Link>
        </Flex>
      </HStack>
    </>
  );
}
