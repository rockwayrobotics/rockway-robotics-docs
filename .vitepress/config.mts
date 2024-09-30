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
                    { text: "Learn to use git", link: "/docs/git" },
                ],
            },
            {
                text: "WPILib Basics",
                link: "/basics/intro",
                items: [
                    { text: "Installation and Setup", link: "/basics/setup" },
                    { text: "Hardware Control", link: "/basics/hardware-control" },
                    { text: "The Robot and RobotContainer Classes", link: "/basics/robot-and-robot-container" },
                ],
            },
            {
                text: "Command-Based Programming",
                link: "/command-based/intro",
                items: [
                    {
                        text: "Subsystems",
                        link: "/command-based/subsystems/overview",
                        items: [
                            { text: "Creating a Subsystem", link: "/command-based/subsystems/creating" },
                            { text: "Common Issues", link: "/command-based/subsystems/common-issues" },
                            { text: "Best Practices", link: "/command-based/subsystems/best-practices" },
                        ],
                    },
                    {
                        text: "Commands",
                        link: "/command-based/commands/overview",
                        items: [
                            { text: "Creating a Command", link: "/command-based/commands/creating" },
                            { text: "Common Issues", link: "/command-based/commands/common-issues" },
                            { text: "Best Practices", link: "/command-based/commands/best-practices" },
                        ],
                    },
                    {
                        text: "Command Groups",
                        link: "/command-based/command-groups/overview",
                        items: [
                            { text: "Creating a Command Group", link: "/command-based/command-groups/creating" },
                            { text: "Common Issues", link: "/command-based/command-groups/common-issues" },
                            { text: "Best Practices", link: "/command-based/command-groups/best-practices" },
                        ],
                    },
                ],
            },
            {
                text: "Drivetrain & Motor Control",
                link: "/motor-control/intro",
                items: [
                    { text: "PID", link: "/motor-control/pid" },
                    { text: "Feedforwards", link: "/motor-control/feedforwards" },
                    { text: "Pose Estimation", link: "/motor-control/pose-estimation" },
                    { text: "Path Planning", link: "/motor-control/path-planning" },
                ],
            },
            {
                text: "Vision",
                link: "/vision/intro",
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/rockwayrobotics" },
        ],
    },
});
