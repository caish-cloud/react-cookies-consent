<p align="center">
  <img alt="react-cookies-consent cover photo" src="./assets/cover.png" style="border-radius: 6px" />
</p>

# react-cookies-consent

[![npm version](https://badge.fury.io/js/react-cookies-consent.svg)](https://badge.fury.io/js/react-cookies-consent)

Introducing a comprehensive and customizable solution for managing cookie consent in your React applications! Our package includes a set of powerful components designed to make the implementation of cookie consent straightforward and compliant with user preferences.

Key Features:

- <b>`<CookiesConsentAlert />`</b>: Jumpstart user interaction with a simple alert at the bottom of the screen that asks users to confirm their cookie preferences, such as accepting all cookies or choosing which to accept and decline. This component is designed to be non-intrusive yet clear to ensure immediate understanding from the user.
- <b>`<CookiesConsentModal />`</b>: Provide users with detailed control over their cookie preferences. This modal allows for granular settings adjustments, giving users the power to manage their privacy preferences effectively.
- <b>Customization</b>: Tailor the appearance and behavior of your cookie consent components to match your application’s theme and branding. Supports both light and dark modes, ensuring a seamless integration regardless of your UI design.
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
  - [Basic Usage](#basic-usage)
    - [Alert](#alert)
      - [Light Theme](#light-theme-alert)
      - [Dark Theme](#dark-theme-alert)
    - [Modal](#modal)
      - [Light Theme](#light-theme-modal)
      - [Dark Theme](#dark-theme-modal)
  - [Props](#props)
    - ???
  - [Contributing](#contributing)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [Prerequisites](#prerequisites) section.

To install and set up the library, run:

```sh
npm install @caish-cloud/react-cookies-consent
```

Or if you prefer using Yarn:

```sh
yarn add @caish-cloud/react-cookies-consent
```

## Basic Usage

The usage examples below will get you started with using the alert component
in conjunction with the modal component. You <i>do not</i> have to use both!
You can use one or the other depending on your development needs.

While testing, if you can't get the alert to display again, you will need to go
into your browser's local storage settings, find the `react-cookies-consent/alert-dismissed` key, and change the value to `false`. This is how we keep track
of when the user saved their preferences and do not need to be shown the alert
anymore.

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

```tsx
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
```

#### Dark Theme (Alert)

As shown in the code below, you'll need to add the `theme="dark"` parameter to
the root component, and that's it!

<p align="center">
  <img alt="Dark Theme (Alert)" src="./assets/screenshots/alert_dark.png" style="border-radius: 6px" />
</p>

```tsx
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

```tsx
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
```

#### Dark Theme (Modal)

As shown in the code below, you'll need to add the `theme="dark"` parameter to
the root component, and that's it!

<p align="center">
  <img alt="Dark Theme (Modal)" src="./assets/screenshots/modal_dark.png" style="border-radius: 6px" />
</p>

```tsx
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
```

## Props

### `<CookiesConsentAlert />`

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

## Authors

<div style="display: flex; flex: 1; align-items: center; gap: 8px">
  <img alt="Timothy Caish Avatar" src="./assets/avatar.png" style="height: 50px; width: 50px" title="Timothy Caish" />
  <span style="margin-bottom: 0; margin-top: 0">Timothy Caish</span>
</div>

- Github: [@tcaish](https://github.com/tcaish)
- Website: [https://timothy-caish.vercel.app](https://timothy-caish.vercel.app)

See the list of [contributors](https://github.com/caish-cloud/react-cookies-consent/contributors) who also participated in this project.

## License

[MIT License](LICENSE) © 2024 Caish Cloud, LLC
