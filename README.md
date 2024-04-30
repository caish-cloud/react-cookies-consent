[![npm version](https://badge.fury.io/js/react-cookies-consent.svg)](https://badge.fury.io/js/react-cookies-consent)

# react-cookies-consent

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
  - [Versioning](#versioning)
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

<div style="display: flex; flex: 1; justify-content: center">
  <img alt="Light Theme (Alert)" src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/7bfdbb7a-2e37-4e76-bf1a-b9e8e7f16bac" style="border-radius: 6px" />
</div>

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

<div style="display: flex; flex: 1; justify-content: center">
  <img alt="Dark Theme (Alert)" src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/b07d70db-10c3-4775-869b-fbc69d03dc4c" style="border-radius: 6px" />
</div>

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

<div style="display: flex; flex: 1; justify-content: center">
  <img alt="Light Theme (Modal)" src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/0de6ed18-9298-4e7b-b280-be6060625147" style="border-radius: 6px" />
</div>

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

<div style="display: flex; flex: 1; justify-content: center">
  <img alt="Dark Theme (Modal)" src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/aac05d91-9da7-420e-9169-a1fd0cd59a0a" style="border-radius: 6px" />
</div>

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
conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Built With

<div style="display: flex; flex: 1; flex-direction: row; align-items: center; gap: 4px">
  <img alt="React Logo" src="https://github.com/caish-cloud/react-cookies-consent/assets/77754475/6b2fa888-0943-4d42-95b0-aa496d8e6542" style="height: 50px; width: 50px" />
  <h3>React</h3>
</div>

## Authors

**Timothy Caish** - [@tcaish](https://github.com/tcaish)

See the list of [contributors](https://github.com/caish-cloud/react-cookies-consent/contributors) who also participated in this project.

## License

[MIT License](LICENSE) © 2024 Caish Cloud, LLC
