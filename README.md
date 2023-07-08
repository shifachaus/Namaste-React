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

### To run a project

npx parcel index.html

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

## chapter 05 - Let's get hooked

### Two types of Export/Import

- Default Export/Import
  export default Component
  import Component from "path"

- Named Export/Import
  export const Component
  import {Component} from "path"

### React Hooks (useState)

- Normal JavaScript utility functions
- useState() - Superpowerful state variable in react (sync UI)

  ```
    import { useState } from "react";
    const [state, setState] = useState("set initial value")

  ```

### React

- It makes developer experience easy
- Write less code do more
- Find out the diffrence between two Virtual Dom and update the UI
- It has Diff algorithm
- React Fibre is a new Reconcialiation process to efficiently manipulate the DOM (Virtual Dom)

React uses `Reconcialiation Algorithm` (React Fibre)
React create Virtual Dom

- not an actual dom but a representation of actual dom
- React.createElement => Object

## chapter 06 - Exploring the world

- Making an API call
- Optional Chaining (Handling data)
- Shimmer UI (For UX)
- Conditional Rendering
- Events (onClick, onChange)

### React Hooks (useEffect)

useEffect is used to handle side effects like fetching data or subscribing to events.

- makes an API call after the render is done
- fetch (super power which JS engine has)

  ```
    import { useEffect } from "react";
    useEffect(()=>{
      console.log("useEffect Called")
    },[dependencies])

  ```

### cors policy

When your browser blocks you from calling an API from one origin to a different origin

```
  useState() is a special React variable,

  Whenever a state variable updates React (Triggers a Reconciliation cycle) Re-render the componet

```

## chapter 07 - Finding the path

### useEffect hook

    If no dependency array is passed to `useEffect`, the effect will be called on every render of the component.

    If dependency array is empty `[]` then the useEffect will be called on initial render(just once)

    If you pass a value in the dependency array of `useEffect`, the effect will be called every time that value changes

### useState hook

    Never create `useState` hook outside of your React component

    Used to create `local state variable` in the `function components`

    the `useState` hook should be called at the top level of your functional component

    Don't create `useState` hook inside an `if-statement`

### react-router-dom library

- Routing configuration (createBrowserRouter)
- Provide router (RouterProvider)
- gives us an access to useRouterError
- Outlet (This allows nested UI to show up when child routes are rendered.)
- Link (Navigate to different route)

  ```
    import { createBrowserRouter, RouterProvider, useRouteError, Outlet, Link } from "react-router-dom";
  ```

### SINGLE PAGE APPLICATION (SPA)

- Changing the component
- Not reoading the page

### Two types of routing in web apps

- Client Side Routing
- Server Side Routing - making network calls

## chapter 08 - Let's get Classy

- Class based component (old way)

  - Normal JS class
  - extends makes react know this is the class component
  - React.Component is a class given by React
  - render() method return some piece of `jsx`
  - The Constructor is a special function that receives the props

  - super()

    - It is used to call the constructor of its parent class.
    - This is required when we need to access some variables of its parent class.

  - Props

    - properties
    - Used for passing data from one component to another
    - Props data is read-only, which means that data coming from the parent should not be changed by child components.

  - this.props

    - If we want to use `this.props` inside the constructor we need to pass it with the `super()` function.

  - when an instance of a class is created, the constructor is called.

  - state variables

    - Create inside `Constructor`
    - update state varibale

      - this.setState({
        count: this.state.count + 1,
        });

    - Never update state variables directly
      - this.state.count = this.state.count + 1

  - Life cycle method

    - Mounting/Loading the component

      - start loading class component
      - new instance of a class is created

        1. the constructor is called
        2. then, the render method is called

    - componentDidMount()

      - Called once the component has beed mounted
      - Used to make an API call
      - Quickly render component then make and an Api call
      - componentDidMount supports being async

```
  class UserClass extends React.Component {

        constructor(props) {
          super(props);
          console.log(props);

          this.state = {
          count: 0,
          count2: 1,
          };

        }

        render() {
          return (<div className="user__card">
            <h1>Count: {this.state.count}</h1> //state variable
            <p>{this.props.name}</p>
          </div>);
        }
      }

  export default UserClass
```

1. Mounting (dummy data)
   Mounted in 2 phases

   - Render Phase

     - constructor (dummy data)
     - Render (dummy data)

   - Commit Phase

     - Update the DOM - <HTML Dummy>
     - componentDidMount() - make an api call
     - <this.setState> - state variable is update

2. Updating

   - Render (Api Data)
   - <HTML> (new Api Data)
   - call componentDidUpdate()

3. Unmounting

   - componentWillUnmount()
   - removing from the UI

```
    Parent Component

      Parent Constructore
      Parent render

        Child Component (Multiple children)

          First Child Constructore
          First Child render

          Second Child Constructore
          Second Child render

         // DOM UPDATED - IN SINGLE BATCH

          First child component Did Mount
          Second child component Did Mount

    Parent component Did Mount

```

### Why we should not use async keyword with useEffect?

- React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts.
- Using an async function here will cause a bug as the cleanup function will never get called.

```
  useEffect(async () => {
    console.log('Hi :)')

    return () => {
      console.info('Bye!') // It won't run
    };
  }, []);

```

## chapter 09 - Optimizing our App

### **Single responsibility principle**

- component should have a single responsibility
- suppose we have a component `restaurantMenu` the job of this component is to displaying the menu
- this is the good way of maintaining the code in madular fashion

- **Modularity**

  - breaking code into small, reusable modules
  - improves maintainability, reusability and testability

### Custom hooks

- hooks are just a normal JavaScript function
- but custom hooks are special function which are given to us by react
- React provides several built-in hooks, such as `useState`, `useEffect`and `useParams`
- hooks are utility/helper function
- The function name should start with the word "use" to indicate that it is a hook.

```
  const useRestaurantMenu = (input ) => {

    return output;
  };

  export default useRestaurantMenu;

```

### Optimizing

the size of a JavaScript file increases with the number of components it holds.

- create a smaller bundle of JavaScript
  - Chuncking
  - Code Spliting
  - Dynamic Bundling
  - Lazy Loading
  - On Demand Loading

```
  import React, { lazy, Suspense } from "react";

  const ReactComponent = lazy(() => import("path"));

  //Error:
  component suspended while responding to synchronous input
```

Lazy loading components with Suspense

```

  {
    path: "/grocery",
    element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
  },

```

fallback:
what should it load when the component code is not available

```

 {
    path: "/grocery",
    element: (
          <Suspense fallback={<p>Loading...<p/>}>
            <Grocery />
          </Suspense>
        ),
  },

```

## chapter 10 - Jo dikhta hai, vo bikta hai

### Ways of writing css

1. **sass** - advance css
2. **Styled Components**
3. **Material UI** - react component library
4. **Bootstrap**
5. **Chakra UI**
6. **Ant Design**

### Style the Component using [Tailwind CSS](https://tailwindcss.com/docs/installation)

**Configure tailwind**

- Getting Started
- Framework Guides
- Parcel
- Installation
- Tailwind CSS with Parcel

**Install Tailwind CSS**

```
 npm install -D tailwindcss postcss
 npx tailwindcss init
```

**`postcss`**

- a tool for transforming CSS with JS
- tailwindcss uses postcss behind scene

When we execute the package using `npx tailwindcss init`
it will create a `tailwing.config.js` file for us

- create .postcssrc file
  add⬇️

  ```
  {
    "plugins": {
      "tailwindcss": {} //It's way to understand what is writen inside tailwind
    }
  }

  ```

Parcel(Bundler) need to use .postcssrc file to read tailwind

**Configure your template paths**

```
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

```

Now our project will track the tailwind classes and understand it

**Importing tailwind into index.css file**

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

- Done the configuration

### How Tailwind CSS works:

- Utility Classes: Tailwind CSS provides a utility classes that represent various CSS properties

```
<div class="bg-blue-500 text-white text-center p-4">Hello</div>
```

### PROS:

- we don’t need to switch between the css and html
- we can easily customize according to our needs.
- light-weight (import one class) : When Parcel builds a bundle for CSS, it analyzes your code and includes only the CSS that is required for the specific web page.
- keep the bundle size small
-

### CONS:

- less readable, markup becomes more verbose.
- we need to implement everything from scratch
- you have to know pre-defined classes used in tailwind CSS.
