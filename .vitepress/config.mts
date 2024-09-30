import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rockway Robotics Docs",
  description: "Documentation for FRC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: "Start here",
        items: [
                    { text: "Getting started", link: "/docs/getting-started" },
                    { text: "Learn to use git", link: "/docs/git" }
                ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/rockwayrobotics" },
    ],
  },
});
