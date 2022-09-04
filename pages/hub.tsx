import React from "react";
import { Flex, Text, HStack, Button, Box, chakra } from "@chakra-ui/react";
import Image from "next/image";

type List = {
  title: string;
  link: string;
};

const list: List[] = [
  {
    title: "Livestream",
    link: "https://twilio-live-interactive-video-7386-6011-dev.twil.io/?passcode=48151573866011",
  },
  {
    title: "Video Chat",
    link: "https://video-app-2132-8779-dev.twil.io/?passcode=84009721328779",
  },
  {
    title: "Text Chat",
    link: "http://localhost:3000/chat/",
  },
];

export default function Hub() {
  return (
    <>
      <Flex justifyContent={"center"} pt={"32px"} id={"features"}>
        <Image alt="" src={"/Workflow.svg"} width={"122px"} height={"22"} />
      </Flex>
      <Text
        textAlign={"center"}
        color={"black"}
        fontSize={"64px"}
        fontWeight={"800"}
        mt={"100px"}
      >
        Products
      </Text>
      <HStack justifyContent={"center"} gap={"50px"} mt={"40px"}>
        {list.map((i) => {
          return (
            <Box
              key={i.title}
              width={"300px"}
              height={"400px"}
              bgColor={"primary.50"}
              borderRadius={"20px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Text
                color={"black"}
                fontSize={"32px"}
                fontWeight={"800"}
                pt={"50px"}
                key={i.title}
              >
                {i.title}
              </Text>
              <chakra.a
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"136px"}
                height={"49px"}
                mt={"80px"}
                bgColor={"#292929"}
                borderRadius={"12px"}
                transition={"all 0.3s ease-in-out"}
                _hover={{
                  bgColor: "transparent",
                  border: "1px solid #292929",
                  transform: "scale(1.1)",
                }}
                key={i.link}
                href={i.link}
              >
                Enter
              </chakra.a>
            </Box>
          );
        })}
      </HStack>
    </>
  );
}
