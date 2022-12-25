import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mert Kadir. All Rights Reserved.`,
  author: {
    name: "Mert Kadir",
    accounts: [
      {
        url: "https://github.com/itsmertkadir",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/itsmertkadir",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/mert_kadir",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:mert.kadir9395@gmail.com",
        label: "Mail Mert",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
