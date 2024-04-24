# react-cookies-consent

This is a React component that provides an easy-to-implement solution for handling cookie consent in your web application.

Write about these things:

- All the props, descriptions, default values for all components
- The ref and actions you can perform on the alert root component
- Light/dark theme
- The use of local storage
- Responsiveness for desktop and mobile
- The libraries we use, such as Chakra UI, Zustand, and Framer Motion
- Alert button click animation is disabled on text variant
- For testing, to reset the alert to show again, change the `react-cookies-consent/alert-dismissed` local storage key value to be `false`

Bugs:

- When changing the theme, styles do not update
- Lots of rerenders? Test performance of components via profiler

### Requirements

```
html {
  height: 100%;
  width: 100%;
}
```
