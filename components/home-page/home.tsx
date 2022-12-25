import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Tooltip
} from "@chakra-ui/react";
import { MotionBox, MotionFlex } from "components/ui/motion";
import Header from "components/layout/header";
import NextLink from 'next/link'
import { useLinkColor } from 'components/ui/theme'
import PopularArticles from "./PopularArticles";
import Image from "next/image";
import { Props } from "interfaces/interface";
import * as moment from "moment-timezone";
//import * as  Lanyard from 'data/lanyard';
import Listening from "data/Listening";
//import  { useLanyard } from 'react-use-lanyard';


const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home: React.FC<Props> = props => {
  const { posts } = props;

  const linkColor = useLinkColor()

  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
           <Tooltip hasArrow label="me" placement="bottom">
          <Avatar
          backgroundColor={'transparent'}
          size={'2xl'}
            // src={UserIcon}
            src={"https://avatars.githubusercontent.com/u/116839550?v=4"}
          />
         </Tooltip>
        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
                   <Header underlineColor={ORANGE}  mt={0}>
                   <span className="wave">👋</span>
            Hey!
          </Header>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            My name is{" "}
            <Box as="strong" fontWeight="600">
              Mert Kadir
            </Box>{" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
            Mobile Application Developer.
            </Box>{" "}
            <Box as="span" whiteSpace="nowrap">
             A software lover&nbsp;
            </Box>
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              Turkey 🇹🇷
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          Hey, Welcome to Mert's Digital Environment. 
          A place to share what I've learned and what I've done.😊
          </Box>
        </MotionFlex>
      </Flex>
    

   <Listening/>
            

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
            Highlists
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
              <ListItem>
                <NextLink href={'/blog'} passHref>
                  <Link color={linkColor}>
                    Blog page
                    <Badge ml="1" colorScheme="green">
                      New
                    </Badge>
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/open-source'} passHref>
                  <Link color={linkColor}>
                  Open Source
                    <Badge ml="1" colorScheme="blue">
                      New
                    </Badge>
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem>
                <NextLink href={'/projects'} passHref>
                  <Link color={linkColor}>
                  Projects page
                  <Badge ml="1" colorScheme="red">
                  New
                    </Badge>
                  </Link>
                </NextLink>
              </ListItem>
            </UnorderedList>
          </Stack>
          <PopularArticles posts={posts} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
