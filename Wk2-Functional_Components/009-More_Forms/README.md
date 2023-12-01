# More Forms

This Form component is an extension of the original [Hook Form](./008-Hook_Form) project, incorporating additional logic for conditional rendering and front-end validations on each form field. The key changes are outlined below.

### Table of Contents
1. Objectives Implemented
2. Individual Field Handling
3. Password Matching Validation
4. Clearing Password Mismatch Error


## Objectives Implemented

**Conditional rendering** in this project involves dynamically displaying content based on certain conditions. For instance, error messages are selectively rendered only when specific criteria, such as input length or password matching, are met, providing a more responsive user interface.

**Ternary operators**, utilized throughout the code, offer a concise way to implement conditional logic. They act as shorthand for simple if-else statements, streamlining the code by providing a compact and readable way to handle different cases, such as displaying error messages or determining whether passwords match.

## Individual Field Handling

<div align="center">
<img src="./readme-assets/009-Demo.gif" width="450px" height="auto">
</div>

Each form field (First Name, Last Name, Email, Password, Confirm Password) is now handled separately, allowing for more granular control over conditional rendering and validation.

### Example: Handling First Name

```jsx
const handleFirstName = (e) => {
    setUser({ ...user, firstName: e.target.value });
    if (e.target.value.length < 1) {
        setErrors({ ...errors, firstName: "First Name is required!" });
    } else if (e.target.value.length < 2) {
        setErrors({ ...errors, firstName: "First Name must be at least 2 characters!" });
    } else {
        setErrors({ ...errors, firstName: "" });
    }
}
```

## Password Matching Validation

Password and Confirm Password fields are now validated to ensure they match. If a mismatch is detected, an error message is displayed for both fields.

### Example: Handling Password

```jsx
const handlePassword = (e) => {
    const passwordValue = e.target.value;
    const confirmPasswordValue = user.confirmPassword;
    setUser({ ...user, password: passwordValue });

    if (passwordValue.length < 1) {
        setErrors({ ...errors, password: "Password is required!" });
    } else if (passwordValue.length < 8) {
        setErrors({ ...errors, password: "Password must be at least 8 characters!" });
    } else {
        setErrors({ ...errors, password: "" });
        // Check if confirmPassword field is not empty
        if (confirmPasswordValue) {
            // Validate if passwords match
            if (passwordValue !== confirmPasswordValue) {
                setErrors({
                    ...errors,
                    password: "Passwords do not match!",
                    confirmPassword: "Passwords do not match!",
                });
            } else {
                setErrors({ ...errors, confirmPassword: "" });
            }
        }
    }
}
```

## Clearing Password Mismatch Error

The error message for password mismatch is now cleared in the password field when the user corrects the passwords.

### Example: Clearing Password Mismatch Error

```jsx
{errors.password ? (
    <p className="mx-auto text-center fw-medium text-danger mb-0 mt-2">{errors.password}</p>
) : ( "" )}
```

These changes enhance the form's functionality and provide a cleaner and more user-friendly experience by guiding users through the input requirements and highlighting any errors in real-time.

---
<p align="right">Completed: ２０２３年１２月０１日（金）</p>