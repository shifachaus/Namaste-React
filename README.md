# Namaste React 🚀

## chapter 01 - Inception

## chapter 02 - Igniting Our App

### parcel📦

    - Dev Build
    - Local Server
    - HMP = Hot Module Replacement
    - File Watching Algorithm - written in c++
    - Caching - Faster Builds
    - Image Optimization
    - Minification
    - Bundling
    - Compress
    - Consistent Hashing
    - Code Splitting
    - Differential Bundling - support older browsers
    - Diagnostic
    - Error Handling
    - HTTPs
    - Tree Shaking - remove unused code
    - Different Dev and Production bundles

### `npx parcel index.html`

    To run a project

## chapter 03 - Laying the foundation

To run or build a project find scripts in package.json

```
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
},
```

### `npm run start | npm start`

    Runs the app in the development mode

### `npm run build`

    Builds the app for production

### JSX React

- JSX is not HTML inside JavaScript
- HTML-like or XML-like syntax

### Babel

- JavaScript transpiler
- Convert JSX to React code

```
React.createElement => Object => HTMLElement(render)

JSX (transpiled before it reaches the JS Engine) => PARCEL => Babel

JSX =>Babel transpiles it to React.createE lement => ReactElement (JS Object) => HTMLElement (render)
```

### React Component

- Everything is component in react
- Class Based Component - OLD
- Functional Component - NEW (function which returns some piece of JSX code)
- Component Composition - passing components to other components

### React Fragment

```
<React.Fragment></React.Fragment> | <></>

```

## chapter 04 - Talk is cheap, show me the code

### 🍜food ordering app

`Component`

- Headder
  - Logo
  - Nav items
- Body
  - Search
  - RestaurantContainer
    - Restaurant card
      - Image
      - Star rating
      - Cuisine
      - Delivery time
- Footer
  - Copyright
  - Links
  - Address
  - Contact

```
Inline styling

    style={{backgroundColor: "#f0f0f0"}}
```

### Props

- a way to pass data from a parent component to a child component in React
- normal arguments to a function

### Config Driven UI

- Instead of writing fixed code for each UI element, the UI is defined and controlled by data

### Reusable component

- component that can be used multiple times throughout an application with different data or configurations.

### Why we need key

- Each component needs its own special ID that makes it stand out and be recognized as unique.
- If a unique key is not provided to components in React, they may be re-rendered unnecessarily.
- It is not recommended to use indexes as keys in React components

```
  !Key (!Acceptable) <<<< Index as key <<<< Unique id
```

## Let's get hooked

### Two types of Export/Import

- Default Export/Import
  export default Component
  import Component from "path"

- Named Export/Import
  export const Component
  import {Component} from "path"

### React Hooks

- Normal JavaScript utility functions
- useState() - Superpowerful state variable in react (sync UI)
- useEffect()

```
  import { useState } from "react";
  const [state, setState] = useState("set initial value")

  Whenever a state variable updates React Re-render the componet
```

### React

- It makes developer experience easy
- Write less code do more
- Find out the diffrence between two Virtual Dom and update the UI
- It has Diff algorithm
- Effecient DOM manupulation (Virtual Dom)

React uses `Reconcialiation Algorithm` (React Fibre)
React create Virtual Dom

- not an actual dom but a representation of actual dom
- React.createElement => Object
