import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "components/ui/page-transitions";
import Header from "components/layout/header";
import NextLink from "next/link";
import { useLinkColor } from "components/ui/theme";
import { FaBaby } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaSchool} from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
};
const Achievements = () => {
  const linkColor = useLinkColor();

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
     
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FaHome} skipTrail>
            Internship
              .
            </TimelineItem>
            <text fontSize={"1rem"} fontWeight={"300"}>I started my internship at Yd Software. And here I gained experience working with more knowledgeable people.</text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>
          <Box>
            <TimelineItem icon={FaJava} skipTrail>
            Java Learning
              .
            </TimelineItem>
            <text fontSize={"1rem"} fontWeight={"300"}>I started learning Java and made small applications.</text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2018
          </Heading>
          <Box>
            <TimelineItem icon={FaMobile} skipTrail>
            Hello Mobile Software
              .
            </TimelineItem>
            <text fontSize={"1rem"} fontWeight={"300"}>When I started high school, I became interested in Mobile Software and took courses and watched them.</text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2017
          </Heading>
          <Box>
            <TimelineItem icon={FaSchool} skipTrail>
            High School
              .
            </TimelineItem>
            <text fontSize={"1rem"} fontWeight={"300"}>I studied at Vocational High School and my field was Information Technologies.</text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2014
          </Heading>
          <Box>
            <TimelineItem icon={FaCode} skipTrail>
            Meet the Software
              .
            </TimelineItem>
            <text fontSize={"1rem"} fontWeight={"300"}>When I first met with software, I started with Web Software and used simple languages such as Html, Css.</text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2004
          </Heading>
          <Box>
            <TimelineItem icon={FaBaby} skipTrail>
            Hello World I was born
              .
            </TimelineItem>
            <text fontSize="x-small">
              Happy Birthday Mert, Turkey I was born in Istanbul on May 29, 2004.
            </text>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};
export default Achievements;
