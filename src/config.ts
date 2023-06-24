import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rome-builds.vercel.app/",
  author: "Jerome Andre Wong",
  desc: "Personal blog for documenting my journey as a software engineer.",
  title: "RomeBuilds",
  ogImage: "profilepic.png",
  lightAndDarkMode: false,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 32,
  height: 32,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jeromeandrewong",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/jeromeandrewong",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/jeromeandrewong",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jeromeandrewong@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/jeromeandrewong",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
