# FRC-2024 Robot Code Structure

You can clone the repository and open it up to see the code structure.

```bash
git clone https://github.com/rockwayrobotics/FRC-2024.git
```

## Project Layout

The project follows a standard FRC robot project structure:

```
FRC-2024/
├── src/
│   └── main/
│       ├── deploy/
│       │   ├── example.txt
│       │   ├── pathplanner/
│       │   │   ├── autos/
│       │   │   ├── paths/
│       │   │   └── navgrid.json
│       │   └── images/
│       └── java/
│           └── frc/
│               └── robot/
│                   ├── commands/
│                   │   └── autoSequences/
│                   ├── subsystems/
│                   ├── Constants.java
│                   ├── Main.java
│                   ├── Robot.java
│                   └── RobotContainer.java
```

## Key Components

### 1. Constants.java

This file contains all the constant values used throughout the robot code. It's organized into nested classes for different subsystems and functionalities:

- `Gamepads`: Controller port assignments
- `CAN`: CAN IDs for various motors
- `Digital`: Digital input port assignments
- `Drive`: Drive-related constants
- `Climber`: Climber-related constants
- `Shooter`: Shooter-related enums and constants
- `Angler`: Constants for the shooter angle mechanism
- `LED`: LED-related constants and enums

### 2. Robot.java

This is the main robot class that extends `TimedRobot`. It handles the robot's lifecycle:

- Initialization
- Periodic functions for different modes (disabled, autonomous, teleop, test)
- Manages the `RobotContainer` instance

### 3. RobotContainer.java

This class is the main orchestrator for the robot:

- Instantiates all subsystems
- Creates and configures autonomous chooser
- Sets up button bindings for controllers
- Provides methods for getting the autonomous command and handling mode-specific initializations

### 4. Subsystems

Each subsystem is implemented as a separate class extending `SubsystemBase`:

- `DrivebaseSubsystem`: Manages the robot's drivetrain
- `ClimberSubsystem`: Controls the climbing mechanism
- `ShooterSubsystem`: Handles the shooting mechanism
- `IntakeSubsystem`: Manages the intake system
- `AnglerPIDSubsystem`: Controls the shooter's angle using PID
- `LedSubsystem`: Manages the LED lighting system

### 5. Commands

The `commands` package contains various command classes for different robot actions:

- Basic movement commands (`DriveDistance`, `DriveRotate`, etc.)
- Shooting sequences (`ShootSequenceFull`, `ShootSequenceWebAdj`, etc.)
- Intake and loading commands
- Auto sequences for different game strategies

#### Auto Sequences

The `autoSequences` subpackage contains command groups for autonomous routines:

- Different strategies for two-piece, three-piece, and four-piece autos
- Alliance-specific routines (red vs blue)
- Various positioning and scoring sequences
