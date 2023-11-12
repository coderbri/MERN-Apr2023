# First Vite

The project **First Vite** serves as a quick guide on setting up a React project using Vite.

### Table of Contents
1. [First Vite](#first-vite)
   1. [Getting Started](#getting-started)
      1. [Create Vite App](#1-create-vite-app)
      2. [Configure App](#2-configure-app)
      3. [Set Up Project](#3-set-up-project)
   2. [Notes](#notes)

Feel free to adjust the formatting or the structure based on your preferences or any additional content you add to the README.

## Getting Started

### 1. Create Vite App

Run the following command in the terminal to create a new Vite app:

```bash
npm create vite@latest
```

### 2. Configure App

When prompted:
- Enter the name of the application (e.g., `first-vite`) and press **Enter**.
- Select React from the list of frameworks and press **Enter**.
- Choose `JavaScript + SWC` for the variant and press **Enter**.

### 3. Set Up Project

After creating the app, follow these steps:

1. Ensure that you're inside the app's directory:

   ```bash
   cd first-vite
   ```

   Note: This step is not performed automatically; you need to do it every time.

2. Generate the package.json file and install dependencies:

   ```bash
   npm install
   ```

   This command installs the dependencies listed in package.json.

3. Start the local development environment:

   ```bash
   npm run dev
   ```

   The application will be hosted locally on port 5173 by default. Click the provided link in the terminal to open the application.

4. Close the application:

   Whenever you want to close the application running on the local port, use `CTRL`/`Command+C`.

## Notes

- The `npm run dev` command spins up the local environment for the React application.
- Customize the project as needed and explore Vite's capabilities for a fast development experience.

---
<p align="right">Completed: ２０２３年１１月１１日（土）</p>