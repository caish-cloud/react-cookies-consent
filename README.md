<p align="center">
  <img alt="react-cookies-consent cover photo" src="./assets/cover.png" style="border-radius: 6px" />
</p>

# react-cookies-consent

[npm_url]: https://www.npmjs.org/package/react-cookies-consent

[![npm version](https://badge.fury.io/js/react-cookies-consent.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/react-cookies-consent.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-cookies-consent.svg)][npm_url]

```
To Do:
- Make local storage value configurable and update any documentation referencing
it

Write about these things:

- All the props, descriptions, default values for all components
- The ref and actions you can perform on the modal root component
- Alert button click animation is disabled on text variant
- Modal body is required
- Check which components can accept Chakra UI attributes and note that

Bugs:

- When changing the theme, styles do not update
- Lots of rerenders? Test performance of components via profiler
```

Introducing a comprehensive and customizable solution for managing cookie consent in your React applications! Our package includes a set of powerful components designed to make the implementation of cookie consent straightforward and compliant with user preferences.

Key Features:

- <b>`<CookiesConsentAlert />`</b>: Jumpstart user interaction with a simple alert at the bottom of the screen that asks users to confirm their cookie preferences, such as accepting all cookies or choosing which to accept and decline. This component is designed to be non-intrusive yet clear to ensure immediate understanding from the user.
- <b>`<CookiesConsentModal />`</b>: Provide users with detailed control over their cookie preferences. This modal allows for granular settings adjustments, giving users the power to manage their privacy preferences effectively.
- <b>Customization</b>: Tailor the appearance and behavior of your cookie consent components to match your application’s theme and branding. Supports both light and dark modes, ensuring a seamless integration regardless of your UI design.
- <b>Responsive</b>: Looks great on desktop, tablet, and mobile.
- <b>Developer-Friendly Ref API</b>: Access additional methods and functionalities through a well-documented Ref API for each component that enhances your ability to control and respond to user preferences programmatically.

Whether you are looking to ensure compliance, improve user experience, or both, our react-cookies-consent components package offers the tools you need to integrate cookie consent functionality into your applications effortlessly!

## Prerequisites

### Storing User Preferences

This library is only for saving you the time for developing the components
necessary to give the user control over their cookie preferences. You will have
to manage the actual preferences of the user by storing in your database,
local storage, etc. So please be sure you already have this in place or will
plan to!

### Styling

This prerequisite is only for the `<CookiesConsentAlert />` component
due to it being absolutely positioned in the DOM.

Your `<html />` and/or `<body />` tag(s) need to have at least this styling:

```css
... {
  height: 100%;
  width: 100%;
}
```

## Table of contents

- [react-cookies-consent](#react-cookies-consent)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Alert](#alert)
      - [Light Theme](#light-theme-alert)
      - [Dark Theme](#dark-theme-alert)
    - [Modal](#modal)
      - [Light Theme](#light-theme-modal)
      - [Dark Theme](#dark-theme-modal)
  - [Props](#props)
  - [Refs](#refs)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Installation

**BEFORE YOU INSTALL** - please read the [Prerequisites](#prerequisites) section.

To install and set up the library, run:

```sh
npm install @caish-cloud/react-cookies-consent
```

Or if you prefer using Yarn:

```sh
yarn add @caish-cloud/react-cookies-consent
```

## Usage

The usage examples below will get you started with using the alert component
in conjunction with the modal component. You <i>do not</i> have to use both!
You can use one or the other depending on your development needs.

### Alert

This component lives at the bottom of the screen, and will animate in (if chosen
to) to alert the user of their ability to choose their cookie preferences.

The best place to put this is at the root of your project, such as your providers file, `App.js`, or `layout.js` (for Next.js developers). This is because we want this alert to display on any page the user navigates to if not the home page.

#### Light Theme (Alert)

This is the default theme for the component and does not require any additional
configuration.

<p align="center">
  <img alt="Light Theme (Alert)" src="./assets/screenshots/alert_light.png" style="border-radius: 6px" />
</p>

```jsx
import { CookiesConsentAlert } from '@caish-cloud/react-cookies-consent';

function ExampleComponent() {
  return (
    <CookiesConsentAlert>
      <CookiesConsentAlert.Content>
        <CookiesConsentAlert.Title text="About cookies on this site" />

        <CookiesConsentAlert.Description text="This website uses cookies to ensure you get the best experience on our website." />

        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user clicks on "Learn more" button
          }}
          text="Learn more"
          variant="text"
        />
      </CookiesConsentAlert.Content>

      <CookiesConsentAlert.Actions>
        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user accepts all cookies
          }}
          text="Accept cookies"
        />

        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user rejects all cookies
          }}
          regularButtonColor="#2D3748"
          shouldShowModal={true}
          text="Cookie settings"
        />
      </CookiesConsentAlert.Actions>
    </CookiesConsentAlert>
  );
}
```

#### Dark Theme (Alert)

As shown in the code below, you'll need to add the `theme="dark"` parameter to
the root component, and that's it!

<p align="center">
  <img alt="Dark Theme (Alert)" src="./assets/screenshots/alert_dark.png" style="border-radius: 6px" />
</p>

```jsx
import { CookiesConsentAlert } from '@caish-cloud/react-cookies-consent';

function ExampleComponent() {
  return (
    <CookiesConsentAlert theme="dark">
      <CookiesConsentAlert.Content>
        <CookiesConsentAlert.Title text="About cookies on this site" />

        <CookiesConsentAlert.Description text="This website uses cookies to ensure you get the best experience on our website." />

        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user clicks on "Learn more" button
          }}
          text="Learn more"
          variant="text"
        />
      </CookiesConsentAlert.Content>

      <CookiesConsentAlert.Actions>
        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user accepts all cookies
          }}
          text="Accept cookies"
        />

        <CookiesConsentAlert.Button
          onClick={() => {
            // Handle what happens when user rejects all cookies
          }}
          regularButtonColor="grey"
          shouldShowModal={true}
          text="Cookie settings"
        />
      </CookiesConsentAlert.Actions>
    </CookiesConsentAlert>
  );
}
```

### Modal

This component will animate in to the center or top-middle of the screen to give
the user granular control over their cookie preferences.

The best place to put this is at the root of your project, such as your
providers file, `App.js`, or `layout.js` (for Next.js developers) next to the
alert component (if you chose to use it). This is because we want this modal to
display on any page the user navigates to if not the home page.

#### Light Theme (Modal)

This is the default theme for the component and does not require any additional
configuration.

<p align="center">
  <img alt="Light Theme (Modal)" src="./assets/screenshots/modal_light.png" style="border-radius: 6px" />
</p>

```jsx
import { CookiesConsentModal } from '@caish-cloud/react-cookies-consent';

function ExampleComponent() {
  return (
    <CookiesConsentModal>
      <CookiesConsentModal.Header text="Cookie Settings" />

      <CookiesConsentModal.Body>
        <CookiesConsentModal.Text text="This website uses cookies to ensure you get the best experience on our website." />

        <CookiesConsentModal.CtaActions>
          <CookiesConsentModal.Button
            onClick={() => {
              // Handle what happens when user accepts all cookies
            }}
            regularButtonColor="#2D3748"
            text="Accept all"
          />

          <CookiesConsentModal.Button
            onClick={() => {
              // Handle what happens when user rejects all cookies
            }}
            regularButtonColor="#2D3748"
            text="Reject all"
          />
        </CookiesConsentModal.CtaActions>

        <CookiesConsentModal.CookieActions>
          <CookiesConsentModal.CookieAction
            description="Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default."
            switchDisabled={true}
            switchToggledOn={true}
            title="Necessary cookies"
          />

          <CookiesConsentModal.CookieAction
            description="Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles preferences cookies
            }}
            title="Preferences"
          />

          <CookiesConsentModal.CookieAction
            description="Analytical cookies help us improve our website by collecting and reporting information on its usage."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles analytics cookies
            }}
            title="Analytics"
          />

          <CookiesConsentModal.CookieAction
            description="Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements. By enabling marketing cookies, you grant permission for personalized advertising across various platforms."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles marketing cookies
            }}
            title="Marketing"
          />
        </CookiesConsentModal.CookieActions>
      </CookiesConsentModal.Body>

      <CookiesConsentModal.Footer>
        <CookiesConsentModal.Button
          onClick={() => {
            // Handle what happens when user saves their cookie settings
          }}
          text="Save settings"
        />
      </CookiesConsentModal.Footer>
    </CookiesConsentModal>
  );
}
```

#### Dark Theme (Modal)

As shown in the code below, you'll need to add the `theme="dark"` parameter to
the root component, and that's it!

<p align="center">
  <img alt="Dark Theme (Modal)" src="./assets/screenshots/modal_dark.png" style="border-radius: 6px" />
</p>

```jsx
import { CookiesConsentModal } from '@caish-cloud/react-cookies-consent';

function ExampleComponent() {
  return (
    <CookiesConsentModal theme="dark">
      <CookiesConsentModal.Header text="Cookie Settings" />

      <CookiesConsentModal.Body>
        <CookiesConsentModal.Text text="This website uses cookies to ensure you get the best experience on our website." />

        <CookiesConsentModal.CtaActions>
          <CookiesConsentModal.Button
            onClick={() => {
              // Handle what happens when user accepts all cookies
            }}
            regularButtonColor="grey"
            text="Accept all"
          />

          <CookiesConsentModal.Button
            onClick={() => {
              // Handle what happens when user rejects all cookies
            }}
            regularButtonColor="grey"
            text="Reject all"
          />
        </CookiesConsentModal.CtaActions>

        <CookiesConsentModal.CookieActions>
          <CookiesConsentModal.CookieAction
            description="Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default."
            switchDisabled={true}
            switchToggledOn={true}
            title="Necessary cookies"
          />

          <CookiesConsentModal.CookieAction
            description="Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles preferences cookies
            }}
            title="Preferences"
          />

          <CookiesConsentModal.CookieAction
            description="Analytical cookies help us improve our website by collecting and reporting information on its usage."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles analytics cookies
            }}
            title="Analytics"
          />

          <CookiesConsentModal.CookieAction
            description="Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements. By enabling marketing cookies, you grant permission for personalized advertising across various platforms."
            onSwitchToggle={(isSwitchOn) => {
              // Handle what happens when user toggles marketing cookies
            }}
            title="Marketing"
          />
        </CookiesConsentModal.CookieActions>
      </CookiesConsentModal.Body>

      <CookiesConsentModal.Footer>
        <CookiesConsentModal.Button
          onClick={() => {
            // Handle what happens when user saves their cookie settings
          }}
          text="Save settings"
        />
      </CookiesConsentModal.Footer>
    </CookiesConsentModal>
  );
}
```

## Props

### `<CookiesConsentAlert />`

This is the root/parent component for the alert. This is required.

#### `containerStyle`

The styles for the container of the alert.

| Required | Type                                                         | Default                                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | `{ dark: { backgroundColor: "#2D3748" }, light: { backgroundColor: "white" } }` |

#### Example

```jsx
<CookiesConsentAlert
  containerStyle={{
    dark: {
      backgroundColor: '#2D3748'
    },
    light: {
      backgroundColor: 'white'
    }
  }}
/>
```

---

#### `enterExitAnimation`

How the alert should enter and exit the screen.

| Required | Type                                           | Default         |
| -------- | ---------------------------------------------- | --------------- |
| False    | `"from-bottom" \| "from-left" \| "from-right"` | `"from-bottom"` |

#### Example

```jsx
<CookiesConsentAlert enterExitAnimation="from-left" />
```

---

#### `enterExitAnimationEnabled`

Whether the enter/exit animations for the alert is enabled.

| Required | Type      | Default |
| -------- | --------- | ------- |
| False    | `boolean` | `true`  |

#### Example

```jsx
<CookiesConsentAlert enterExitAnimationEnabled={false} />
```

---

#### `placement`

The placement of the alert on the screen.

| Required | Type                                                 | Default           |
| -------- | ---------------------------------------------------- | ----------------- |
| False    | `"bottom-center" \| "bottom-left" \| "bottom-right"` | `"bottom-center"` |

#### Example

```jsx
<CookiesConsentAlert placement="bottom-left" />
```

---

#### `theme`

The theme for the alert (i.e. light/dark mode).

| Required | Type                | Default   |
| -------- | ------------------- | --------- |
| False    | `"dark" \| "light"` | `"light"` |

#### Example

```jsx
<CookiesConsentAlert theme="dark" />
```

### `<CookiesConsentAlert.Content />`

This is the container for the content of the alert, which can accept these
custom components:

- `<CookiesConsentAlert.Title />`
- `<CookiesConsentAlert.Description />`
- `<CookiesConsentAlert.Button />`

#### `containerStyle`

The styles for the container of the content.

| Required | Type                                                         | Default |
| -------- | ------------------------------------------------------------ | ------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content
    containerStyle={{
      dark: {
        backgroundColor: '#2D3748'
      },
      light: {
        backgroundColor: 'white'
      }
    }}
  ></CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

### `<CookiesConsentAlert.Title />`

This is the title of the alert.

#### `containerStyle`

The styles for the container of the title.

| Required | Type                                                         | Default |
| -------- | ------------------------------------------------------------ | ------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Title
      containerStyle={{
        dark: {
          backgroundColor: '#2D3748'
        },
        light: {
          backgroundColor: 'white'
        }
      }}
    />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

---

#### `text`

The text to display as the title.

| Required | Type     | Default |
| -------- | -------- | ------- |
| True     | `string` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Title text="Cookie Settings" />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

---

#### `textStyle`

The styles for the title text.

| Required | Type                                                         | Default                                                     |
| -------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | `{ dark: { color: "white" }, light: { color: "#2D3748" } }` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Title
      textStyle={{
        dark: {
          color: 'white'
        },
        light: {
          color: '#2D3748'
        }
      }}
    />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

### `<CookiesConsentAlert.Description />`

This is the description of the alert.

#### `containerStyle`

The styles for the container of the description.

| Required | Type                                                         | Default |
| -------- | ------------------------------------------------------------ | ------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Description
      containerStyle={{
        dark: {
          backgroundColor: '#2D3748'
        },
        light: {
          backgroundColor: 'white'
        }
      }}
    />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

---

#### `text`

The text to display as the description.

| Required | Type     | Default |
| -------- | -------- | ------- |
| True     | `string` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Description text="This is a description of our cookie consent alert." />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

---

#### `textStyle`

The styles for the description text.

| Required | Type                                                         | Default                                                     |
| -------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | `{ dark: { color: "white" }, light: { color: "#2D3748" } }` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Content>
    <CookiesConsentAlert.Description
      textStyle={{
        dark: {
          color: 'white'
        },
        light: {
          color: '#2D3748'
        }
      }}
    />
  </CookiesConsentAlert.Content>
</CookiesConsentAlert>
```

### `<CookiesConsentAlert.Actions />`

This is the container for the Call-to-Action (CTA) buttons in the alert, which
can accept these components:

- `<CookiesConsentAlert.Button />`

#### `containerStyle`

The styles for the container of the actions.

| Required | Type                                                         | Default |
| -------- | ------------------------------------------------------------ | ------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions
    containerStyle={{
      dark: {
        backgroundColor: '#2D3748'
      },
      light: {
        backgroundColor: 'white'
      }
    }}
  ></CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

### `<CookiesConsentAlert.Button />`

This is a button used within the alert. This component can be used within
these components:

- `<CookiesConsentAlert.Content />`
- `<CookiesConsentAlert.Actions />`

#### `clickAnimationEnabled`

Whether the button should have click animations.

> Note: this is disabled by default when using the `"text"` variant.

| Required | Type      | Default |
| -------- | --------- | ------- |
| False    | `boolean` | `true`  |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button clickAnimationEnabled={false} />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `containerStyle`

The styles for the container of the button.

| Required | Type                                                         | Default                                                                           |
| -------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | `{ dark: { backgroundColor: "#0082ba" }, light: { backgroundColor: "#0082ba" } }` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button
      containerStyle={{
        dark: {
          backgroundColor: '#2D3748'
        },
        light: {
          backgroundColor: 'white'
        }
      }}
    />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `hoverAnimationEnabled`

Whether the button should animate when hovered.

| Required | Type      | Default |
| -------- | --------- | ------- |
| False    | `boolean` | `true`  |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button hoverAnimationEnabled={false} />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `onClick`

Handles what happens when the button is clicked.

| Required | Type         | Default |
| -------- | ------------ | ------- |
| True     | `() => void` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button onClick={() => console.log('clicked')} />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `regularButtonColor`

The color of the regular variant button.

| Required | Type     | Default     |
| -------- | -------- | ----------- |
| False    | `string` | `"#0082ba"` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button
      regularButtonColor="#0082ba"
      variant="regular"
    />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `shouldDismissAlert`

Whether the alert should be dismissed when the button is clicked.

| Required | Type      | Default |
| -------- | --------- | ------- |
| False    | `boolean` | `true`  |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button shouldDismissAlert={false} />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `shouldShowModal`

Whether the modal should be shown when the button is clicked.

| Required | Type      | Default |
| -------- | --------- | ------- |
| False    | `boolean` | `false` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button shouldShowModal={true} />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `text`

The text to display in the button.

| Required | Type     | Default |
| -------- | -------- | ------- |
| True     | `string` | -       |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button text="Accept All" />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `textButtonColor`

The color of the text variant button.

| Required | Type     | Default     |
| -------- | -------- | ----------- |
| False    | `string` | `"#00a2e8"` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button textButtonColor="#00a2e8" variant="text" />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `textStyle`

The styles for the button text.

| Required | Type                                                         | Default                                                   |
| -------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| False    | `{ dark?: React.CSSProperties, light: React.CSSProperties }` | `{ dark: { color: "white" }, light: { color: "white" } }` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button
      textStyle={{
        dark: {
          color: 'white'
        },
        light: {
          color: '#2D3748'
        }
      }}
    />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

#### `variant`

The type of button to render.

- `"regular"` - A regular looking button.
- `"text"` - A button that looks like a text link.

| Required | Type                  | Default     |
| -------- | --------------------- | ----------- |
| False    | `"regular" \| "text"` | `"regular"` |

#### Example

```jsx
<CookiesConsentAlert>
  <CookiesConsentAlert.Actions>
    <CookiesConsentAlert.Button variant="text" />
  </CookiesConsentAlert.Actions>
</CookiesConsentAlert>
```

---

## Refs

### `<CookiesConsentAlert />`

#### `hide()`

Hides the alert.

#### Example

```tsx
import React from 'react';
import {
  CookiesConsentAlert,
  CookiesConsentAlertRef
} from '@caish-cloud/react-cookies-consent';

const alertRef = React.useRef<CookiesConsentAlertRef>(null);

React.useEffect(() => {
  alertRef.current?.hide();
}, [alertRef.current]);

function ExampleComponent() {
  return <CookiesConsentAlert ref={alertRef} />;
}
```

#### `show()`

Shows the alert.

#### Example

```tsx
import React from 'react';
import {
  CookiesConsentAlert,
  CookiesConsentAlertRef
} from '@caish-cloud/react-cookies-consent';

const alertRef = React.useRef<CookiesConsentAlertRef>(null);

React.useEffect(() => {
  alertRef.current?.show();
}, [alertRef.current]);

function ExampleComponent() {
  return <CookiesConsentAlert ref={alertRef} />;
}
```

### `<CookiesConsentModal />`

## Troubleshooting

### The alert disappeared and doesn't show anymore.

If you can't get the alert to display again, you will need to go into your
browser's local storage settings, find the `react-cookies-consent/alert-dismissed`
key, and change the value to `false`. This is how we keep track of when the user
saved their preferences and do not need to be shown the alert anymore.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct and the process for submitting pull requests to us.

## Built With

<div style="display: flex; flex: 1; align-items: center; gap: 16px">
  <img alt="React Logo" src="./assets/brand-logos/react_logo.png" style="height: 50px; width: 50px" title="React" />
  <img alt="TypeScript Logo" src="./assets/brand-logos/typescript_logo.png" style="height: 50px; width: 50px" title="TypeScript" />
  <img alt="Chakra UI Logo" src="./assets/brand-logos/chakra_logo.png" style="height: 50px; width: 50px" title="Chakra UI" />
  <img alt="Framer Motion Logo" src="./assets/brand-logos/framer_motion_logo.png" style="height: 50px; width: 50px" title="Framer Motion" />
  <img alt="Zustand Logo" src="./assets/brand-logos/zustand_logo.png" style="height: 50px; width: 50px" title="Zustand" />
</div>

<br/>

The design concepts came from the implementation of BugSnag's cookies consent
alert and modal. See it in action [here](https://docs.bugsnag.com).

## Authors

<h3 style="margin-bottom: 0; margin-top: 0">Timothy Caish</h3>

- Github: [@tcaish](https://github.com/tcaish)
- Website: [https://timothy-caish.vercel.app](https://timothy-caish.vercel.app)

See the list of [contributors](https://github.com/caish-cloud/react-cookies-consent/contributors) who also participated in this project.

## License

[MIT License](LICENSE) © 2024 Caish Cloud, LLC
