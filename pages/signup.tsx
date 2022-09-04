import React, { useState } from "react";
import { Flex, Text, VStack, Button, Box, Input } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { config } from "../config";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    console.log(email, phone);
    if (email !== confirmEmail) {
      alert("Emails do not match");
      return;
    } else {
      const newUser = await fetch(`${config.host}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
        }),
      });
      if (newUser) {
        const newUserJson = await newUser.json();
        console.log(newUserJson);
        router.push("/login");
      } else {
        alert("Something went wrong");
      }
    }
  };

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
          <input
            className="login-input"
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="Confirm Email"
            type={"email"}
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="Phone #"
            type={"number"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button
            type="submit"
            variant={"ghost"}
            colorScheme={"green"}
            onClick={handleRegister}
          >
            Submit
          </Button>
          <Text color={"black"}>
            already have a account? <Link href={"/login"}>login</Link>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default SignUp;
