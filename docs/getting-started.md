# Getting Started with FRC and WPILib

## Installing the FRC Development Environment

1. **Download the WPILib Installer**

   - Go to the official WPILib releases page: [https://github.com/wpilibsuite/allwpilib/releases](https://github.com/wpilibsuite/allwpilib/releases)
   - Find the latest release and download the appropriate installer for your operating system

2. **Run the Installer**
3. **Follow the Installation Wizard**

## Installing git

https://github.com/git-guides/install-git

[Learn to use git](./git)

## Setting Up Your Development Environment

1. **Launch Visual Studio Code**

   - Look for "WPILib VS Code" in your start menu or applications folder

2. **Install WPILib Extension**

   - The WPILib extension should be pre-installed
   - If not, go to the Extensions view (Ctrl+Shift+X) and search for "WPILib"
   - Install the official WPILib extension

3. **Configure Team Number**
   - Click on the WPILib icon in the VS Code sidebar
   - Select "Set Team Number" and enter your FRC team number

## Creating Your First FRC Project

1. **Create a New Project**

   - Press Ctrl+Shift+P to open the command palette
   - Type "WPILib: Create a new project" and select it

2. **Configure Project Settings**

   - Choose a project type (Template, Example, or Empty)
   - Select your programming language (Java or C++)
   - Choose a project base (Command-Based, Timed, or RobotBase)
   - Enter a project name and location

3. **Explore Project Structure**
   - Familiarize yourself with the generated files and folders
   - The main robot code is typically in `src/main/java` (for Java) or `src/main/cpp` (for C++)

## Basic WPILib Concepts

1. **Robot Program Structure**

   - Understand the basic structure of a robot program
   - Learn about the `Robot` class and its important methods (e.g., `robotInit()`, `teleopPeriodic()`)

2. **Subsystems and Commands**

   - If using Command-Based programming, learn about Subsystems and Commands
   - Understand how they work together to control robot behavior

3. **Motor Controllers and Sensors**

   - Learn how to use WPILib classes for motor controllers (e.g., `PWMVictorSPX`, `TalonSRX`)
   - Explore classes for various sensors (e.g., `DigitalInput`, `AnalogInput`)

4. **Drivetrain Basics**
   - Understand how to implement basic drivetrain control
   - Learn about different drive types (e.g., tank drive, arcade drive)

## Resources and Further Learning

1. **Official WPILib Documentation**

   - [WPILib Documentation](https://docs.wpilib.org/en/stable/)

2. **FIRST Robotics Competition Documentation**

   - [FRC Control System](https://docs.wpilib.org/en/stable/docs/controls-overviews/control-system-hardware.html)

3. **Community Forums**
   - [Chief Delphi](https://www.chiefdelphi.com/): A forum for FRC teams to share knowledge and ask questions
