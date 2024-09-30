## Introduction

Git is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage different versions of their projects. It's an essential tool in modern software development.

## Core Concepts

### 1. Repository

A repository (or "repo") is like a project's folder. It contains all of your project's files and each file's revision history.

### 2. Working Directory

This is where you make changes to your files. It's your project's current state on your local machine.

### 3. Staging Area

This is a middle ground between your working directory and the Git repository. It's where you prepare changes before committing them.

### 4. Commit

A commit is a snapshot of your repository at a specific point in time. It's like saving a version of your project.

## Basic Git Commands

### 1. git add

The `git add` command moves changes from your working directory to the staging area.

```bash
git add filename.txt  # Add a specific file
git add .             # Add all changed files
```

**Example:**
Let's say you've created a new file called `hello.py`. To prepare it for committing:

```bash
git add hello.py
```

### 2. git commit

The `git commit` command saves the staged changes to the repository.

```bash
git commit -m "Your commit message here"
```

**Example:**
After adding `hello.py`, you can commit it:

```bash
git commit -m "Add hello.py file"
```

### 3. git push

The `git push` command uploads your local repository content to a remote repository.

```bash
git push origin main
```

Here, `origin` is the default name for the remote repository, and `main` is the branch name.

**Example:**
After committing your changes locally:

```bash
git push origin main
```

This pushes your commits to the `main` branch on the remote repository.

### 4. git pull

The `git pull` command fetches changes from a remote repository and merges them into your current branch.

```bash
git pull origin main
```

**Example:**
Before starting work for the day, you might run:

```bash
git pull origin main
```

This ensures your local `main` branch is up-to-date with the remote repository.

> [!TIP]
> Most of you don't have to use branches, we use branches for specific features or experiments.

### 5. Branches

Branches allow you to diverge from the main line of development and work on different features or experiments without affecting the main codebase.

#### Creating a branch:

```bash
git branch feature-branch
```

#### Switching to a branch:

```bash
git checkout feature-branch
```

Or, create and switch in one command:

```bash
git checkout -b feature-branch
```

**Example:**
Let's say you want to add a new feature to your project:

```bash
git checkout -b add-login-feature
```

Now you can work on the login feature without affecting the main branch. When you're done:

```bash
git add .
git commit -m "Implement login feature"
git push origin add-login-feature
```

## Workflow Example

Let's put it all together with a typical workflow:

1. Start your workday by pulling the latest changes:

   ```bash
   git pull origin main
   ```

2. Create a new branch for your feature:

   ```bash
   git checkout -b new-awesome-feature
   ```

3. Make changes to your files.

4. Stage your changes:

   ```bash
   git add .
   ```

5. Commit your changes:

   ```bash
   git commit -m "Implement awesome feature"
   ```

6. Push your branch to the remote repository:

   ```bash
   git push origin new-awesome-feature
   ```

7. Create a pull request on GitHub or your Git hosting platform to merge your feature branch into the main branch.

