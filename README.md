[![npm version](https://badge.fury.io/js/react-cookies-consent.svg)](https://badge.fury.io/js/react-cookies-consent)

# react-cookies-consent

> Introducing a comprehensive and customizable solution for managing cookie consent in your React applications! Our package includes a set of powerful components designed to make the implementation of cookie consent straightforward and compliant with user preferences.
>
> Key Features:
>
> - <b>`<CookiesConsentAlert />` Component</b>: Jumpstart user interaction with a simple alert at the bottom of the screen that asks users to confirm their cookie preferences, such as accepting all cookies or choosing which to accept and decline. This component is designed to be non-intrusive yet clear to ensure immediate understanding from the user.
> - <b>`<CookiesConsentModal />` Component</b>: Provide users with detailed control over their cookie preferences. This modal allows for granular settings adjustments, giving users the power to manage their privacy preferences effectively.
> - <b>Customization</b>: Tailor the appearance and behavior of your cookie consent components to match your application’s theme and branding. Supports both light and dark modes, ensuring a seamless integration regardless of your UI design.
> - <b>Developer-Friendly Ref API</b>: Access additional methods and functionalities through a well-documented Ref API for each component that enhances your ability to control and respond to user preferences programmatically.
>
> &nbsp;

## Prerequisites

This one and only prerequisite is only for the `<CookiesConsentAlert />` component
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
    - [Modal](#modal)
  - [API](#api)
    - [useBasicFetch](#usebasicfetch)
      - [Options](#options)
    - [fetchData](#fetchdata)
  - [Contributing](#contributing)
  - [Credits](#credits)
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
in conjunction with the modal component.

### Alert

#### Light Theme

<div style="display: flex; flex: 1; justify-content: center">
  <img src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/7bfdbb7a-2e37-4e76-bf1a-b9e8e7f16bac" style="border-radius: 6px" />
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

#### Dark Theme

<div style="display: flex; flex: 1; justify-content: center">
  <img src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/b07d70db-10c3-4775-869b-fbc69d03dc4c" style="border-radius: 6px" />
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

#### Light Theme

<div style="display: flex; flex: 1; justify-content: center">
  <img src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/0de6ed18-9298-4e7b-b280-be6060625147" style="border-radius: 6px" />
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

#### Dark Theme

<div style="display: flex; flex: 1; justify-content: center">
  <img src="https://github.com/caish-cloud/react-cookies-consent/assets/134313463/aac05d91-9da7-420e-9169-a1fd0cd59a0a" style="border-radius: 6px" />
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

## API

### useBasicFetch

```js
useBasicFetch(((url: string) = ''), ((delay: number) = 0));
```

Supported options and result fields for the `useBasicFetch` hook are listed below.

#### Options

`url`

| Type   | Default value |
| ------ | ------------- |
| string | ''            |

If present, the request will be performed as soon as the component is mounted

Example:

```tsx
const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch(
    'https://api.icndb.com/jokes/random'
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

`delay`

| Type   | Default value | Description          |
| ------ | ------------- | -------------------- |
| number | 0             | Time in milliseconds |

If present, the request will be delayed by the given amount of time

Example:

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const MyComponent: React.FC = () => {
  const { data, error, loading } = useBasicFetch<Joke>(
    'https://api.icndb.com/jokes/random',
    2000
  );

  if (error) {
    return <p>Error</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h2>Chuck Norris Joke of the day</h2>
      {data && data.value && <p>{data.value.joke}</p>}
    </div>
  );
};
```

### fetchData

```js
fetchData(url: string)
```

Perform an asynchronous http request against a given url

```tsx
type Joke = {
  value: {
    id: number;
    joke: string;
  };
};

const ChuckNorrisJokes: React.FC = () => {
  const { data, fetchData, error, loading } = useBasicFetch<Joke>();
  const [jokeId, setJokeId] = useState(1);

  useEffect(() => {
    fetchData(`https://api.icndb.com/jokes/${jokeId}`);
  }, [jokeId, fetchData]);

  const handleNext = () => setJokeId(jokeId + 1);

  if (error) {
    return <p>Error</p>;
  }

  const jokeData = data && data.value;

  return (
    <div className="Comments">
      {loading && <p>Loading...</p>}
      {!loading && jokeData && (
        <div>
          <p>Joke ID: {jokeData.id}</p>
          <p>{jokeData.joke}</p>
        </div>
      )}
      {!loading && jokeData && !jokeData.joke && <p>{jokeData}</p>}
      <button disabled={loading} onClick={handleNext}>
        Next Joke
      </button>
    </div>
  );
};
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

- Dropwizard - Bla bla bla
- Maven - Maybe
- Atom - ergaerga
- Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **John Doe** - _Initial work_ - [JohnDoe](https://github.com/JohnDoe)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
