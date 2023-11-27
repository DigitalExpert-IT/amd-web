import { BsFacebook, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export interface INavChild {
  title: string;
  link: string;
}
export interface INavigation {
  name: string;
  link?: string;
  children?: INavChild[];
}

export interface ISocial {
  name: string;
  href: string;
  icon: IconType;
}

export const NAVIGATION: Array<INavigation> = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "services",
    link: "#services",
  },
  {
    name: "contact",
    link: "#contact",
  },
];

export const SOCIAL: Array<ISocial> = [
  {
    name: "facebook",
    href: "#",
    icon: BsFacebook,
  },
  {
    name: "Twitter",
    href: "#",
    icon: BsTwitter,
  },
];
