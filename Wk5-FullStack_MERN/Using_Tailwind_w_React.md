# How to Implement Tailwind CSS in React Projects

## Step 1: Installing Tailwind CSS

1. Go to the official Tailwind CSS website.
2. Click on the get started tab.
3. In the already created react project, install tailwindcss via npm, and create the `tailwind.config.js` file.
    ```bash
    npm install -D tailwindcss
    npx tailwindcss init
    ```

4. In `tailwind.config.js`, configure template paths:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```

5. Add the tailwind directives to your CSS. This can be done by adding the `@tailwind` directives for each of Tailwind's layers to the main CSS file, `src/``**input.css**`.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Step 2: Styling Front End with Tailwind CSS

6. Start the Tailwind CLI build process by running the CLI tool to scan your template files for classes and build your CSS.
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

7. Now Tailwind can be used in your HTML. Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content. `src/`**`index.html`**:
    ```html
    <!doctype html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/output.css" rel="stylesheet">
    </head>
    <body>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>
    </body>
    </html>
    ```
