import "animate.css";
import React from "react";
import { Flex, Text, HStack, Button, Box, Fade } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Flex justifyContent={"center"} pt={"32px"} id={"logo"}>
        <Image alt="" src={"/Workflow.svg"} width={"122px"} height={"22"} />
      </Flex>
      <Box position={"relative"}>
        <Box textAlign={"center"} position={"absolute"} w={"100%"} pt={"45px"}>
          <Text
            color={"#000"}
            w={"600px"}
            h={"200px"}
            fontStyle={"normal"}
            fontSize={"72px"}
            textAlign={"center"}
            fontWeight={"800"}
            className={"center-text animate__animated animate__fadeIn "}
          >
            Share and Learn together
          </Text>
          <Text
            color={"#000"}
            w={"600px"}
            h={"100px"}
            fontStyle={"normal"}
            fontSize={"32px"}
            textAlign={"center"}
            fontWeight={"300"}
            className={"center-text animate__animated animate__fadeIn"}
            pt={"45px"}
          >
            All in one classroom platform for Students{" "}
          </Text>

          <Button
            mt={"75px"}
            variant={"unstyled"}
            bgColor={"primary.50"}
            w={"256px"}
            h={"77px"}
            borderRadius={"15px"}
            fontSize={"24px"}
            color={"black"}
            transition={"all 0.3s ease-in-out"}
            _hover={{
              bgColor: "transparent",
              border: "2px solid #000",
              transform: "scale(0.95)",
            }}
            zIndex={"99"}
          >
            See features
          </Button>
          <Text
            color={"black"}
            fontWeight={"300"}
            fontSize={"14px"}
            mt={"50px"}
          >
            {" "}
            For Students, By students
          </Text>
        </Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          my={"80px"}
        >
          <Image
            alt=""
            src={"/pablo-241 1.png"}
            width={"420px"}
            height={"657px"}
            className={"animate__animated animate__slideInLeft"}
          />
          <Image
            alt=""
            src={"/pablo-240 1.png"}
            width={"420px"}
            height={"657px"}
            className={"animate__animated animate__slideInRight"}
          />
        </Flex>
      </Box>
      <Box
        w={"100%"}
        h={"133px"}
        bgColor={"primary.50"}
        className={"marquee"}
        color={"black"}
        my={"80px"}
        overflow={"hidden"}
      >
        <ul className="marquee-content">
          <li>Productive</li>
          <li>Organized</li>
          <li>Focused</li>
          <li>Effective</li>
        </ul>
      </Box>
    </>
  );
}
