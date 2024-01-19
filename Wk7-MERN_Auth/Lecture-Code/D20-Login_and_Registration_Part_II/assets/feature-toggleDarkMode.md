## Switching Between Light and Dark Mode

### Overview

This web app provides users with the ability to toggle between light and dark mode for an enhanced visual experience. The implementation involves using React, Tailwind CSS for styling, and a simple localStorage mechanism to persist the user's preference.

### Components and Structure

#### 1. App Component (`App.jsx`)

The main component where the application structure is defined. It manages the global state for dark mode and provides the toggle functionality.

- **State Management:** Utilizes React `useState` and `useEffect` hooks to manage the dark mode state.
- **Toggle Functionality:** Implements a `toggleDarkMode` function to switch between light and dark mode.
- **Effect Hook:** Applies the selected theme to the root element and stores the user's preference in localStorage.

#### 2. Header Component (`HeaderStyled.jsx`)

A styled header component that receives the dark mode state and renders the app title along with other navigation elements.

- **Conditional Styling:** Applies different styles based on the current mode, ensuring a seamless transition between light and dark themes.
- **Child Component:** Receives the `h1Child` prop to dynamically render the app title.

#### 3. Switch Button Component (`SwitchLightDarkModeBtn.jsx`)

A button component responsible for triggering the dark mode toggle.

- **Conditional Styling:** Adjusts the button's appearance based on the current mode.
- **Toggle Function:** Calls the `toggleDarkMode` function from the parent component on click.

### Styling with Tailwind CSS

Tailwind CSS classes are leveraged to style components, providing a clean and responsive design for both light and dark modes. The styling is organized to ensure readability and maintainability.

### Theme Switching Logic

The application uses a custom data attribute (`data-theme`) on the root element to dynamically switch between light and dark themes. The color scheme is defined in the global CSS.

### Conclusion

This implementation allows users to seamlessly switch between light and dark modes, enhancing user experience and accessibility.
