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
import { config } from "../config";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const router = useRouter();
  // so here is the logic for the login

  const handleLogin = async () => {
    const login = await fetch(`${config.host}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        phone: phone,
      }),
    });
    const loginJSON = await login.json();
    console.log(loginJSON);
    if (loginJSON) {
      setCookie("token", loginJSON.token);
      router.push("/hub");
    } else {
      alert("error");
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
          <input
            className="login-input"
            placeholder="Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleLogin}
          >
            Submit
          </Button>
          <Flex justifyContent={"center"}>
            <Text color={"black"}>
              not having an account? {"   "}
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
};

export default Login;
