# Namaste React 🚀

## chapter 01 - Inception

### _Emmet_

- Visual Studio Code (VS Code) has built-in support for Emmet
- Emmet allows you to use abbreviations and shortcuts to generate code snippets
- For example, typing html:5 and then pressing Tab will generate the basic HTML5 skeleton

### Hello World program in html

```
  html:5 - generate the basic HTML5 skeleton

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <h1>Hello World</h1>
    </div>
  </body>
  </html>
```

### Hello World program JavaScript

```
 <div id="root"></div>

  <script>
   //create h1 tag
   const heading = document.createElement("h1)
   heading.innerHTML ="Hello World from JS";

   //get reference to the div tag
   const root = document.getElementById("root")

   //add
   root.apppendChild(heading)
  </script>
```

### Hello World program React

- `React is js library at the end of the day is Just JavaScript`
- `Browser do not understand react code`
- `DOM manipulation is most costly operation`
- `React gives us the power to manipuate the DOM`

configure react

1. **CDN React**

   - content delivery networks
   - CDN is a place where the react library is hosted
   - fetching react from CDN link into our project
   <!-- - gives you a lot of function to use -->
   - two important CDN (Content Delivery Network) files related to React

     1. `React (core file)`

        - contains the core functionality of React
        - responsible for building user interfaces
        - managing component state, and handling component lifecycles

     2. `ReactDOM`

        - react library useful for DOM manipulation
        - `ReactDOM` serves as the bridge between React and the browser's Document Object Model (DOM)

- `React.createElement()`

  - it is a method used to create a elements
  - it is an object
  - React.createElement() takes three arguments:

    1. Element Type (Tag Name):

    - what tag you need to create? 'h1', 'div', 'span'

    2. Attributes Object (Props):

    - an object that contains the attributes
    - These attributes can include properties like className, id

    3. Children Elements (Content):

    - what we have put inside that tag

- `ReactDOM.createRoot()`

  - it is a method used to create a root
  - root is the place all the react code will run

  - use `ReactDOM.createRoot()` to create a root instance, and then we call the `render()` method on that root to render the App component inside the specified root element (with id="root").

- `render()`
  - responsible for converting the React elements `(created using React.createElement())` into browser-understandable elements
  - render method can replaced the existing content inside the root element

```
  <script>

    const heading = React.createElement("h1",{},"Hello World from React"); --> react element

    const root = ReactDOM.createRoot(ment.getElementById("root"));

    root.render(heading)

  </script>

```

- `nested` html structure in React

🌟 _`React Element is an Object that becomes an HTML element  that the browser understands while rendering onto the DOM`_

```
 <script>

    const heading = React.createElement(
      "div",
      {id:"parent"},
      React.createElement("div",{id:"child"},
      React.createElement("h1",{},"H1 tag")
     )
    );

    const root = ReactDOM.createRoot(ment.getElementById("root"));

    root.render(heading)

  </script>
```

- Two elements as siblings

  - The third argument is for the children when creating React elements using `React.createElement()`.
  - This can be a single child element or an array of different child elements.
  - react throws an error - Each child in a list should have a unique `key` prop.

```
 <script>

    const heading = React.createElement(
      "div",
      {id:"parent"},
      React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"H1 tag"),
      React.createElement("h1",{},"H1 tag")
     ])
    );

    const root = ReactDOM.createRoot(ment.getElementById("root"));

    root.render(heading)

  </script>
```

- _The order of files matters_
- _React file should be placed before the App.js file_

🌟*The browser reads our HTML*
🌟*loads the scripts including React and ReactDOM*
🌟*loads app.js*
🌟*and starts executing the code line by line*
🌟*When it encounters the render method*
🌟*it renders the React element inside the root element*

<!--
using CDN links we are importing react code into our project

react is use in different place `React Native`

render() method take object -> create h1 tag which the browser understand `React.createElement()` -> put inside root
React take control over root

**Difference between development and producntion**

**Library and framework**

React is a libarary it can work on small portion of the app as well

Framework which comes with a load of thing

**`Crossorigin`**

ReactDOM.render() is the bridge between React's virtual representation (JavaScript objects) and the actual browser DOM.
-->

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

## chapter 11 - Data is the new Oil

🌟**UI layer is powered by Data layer**

### higher order component

- _A Higher-Order Component (HOC) is a design pattern used in React_

- _A Higher-Order Component is a function that takes a component as input and returns a new component with additional functionality or props._

- _HOC is a pure function_

- _The purpose of HOCs is to enhance the behavior or appearance of a component without modifying the component itself_

```

    const RestaurantCard=()=>{
      return(<div>Restaurant Card</div>)
    }
    export const withPromotedLabel = (RestaurantCard) => {
      return () => {
        return (
          <div>
            <label>promoted</label>
            <RestaurantCard />
          </div>
        );
      };
    };

    export default RestaurantCard


    import RestaurantCard, { withPromotedLabel } from "path";

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


```

<!-- render restaurant card component but if the restaurant is promoted then it will render the new promoted card component

withPromotedLabel is Higher order component we have passed RestaurantCard in it, it will return us new component which has label inside it -->

### Data Layer and UI Layer

🌟`Handling data is crucial part of building an application`

**UI layer**

- things which are visible on the web page (View)

**Data layer**

- responsible for managing and storing data within the application

<!-- babel convert jsx to object(virtual Dom)
Role of virtual dom - reconciliation -->

**props**

- passing data from a parent component to its child components
- They are immutable (once set, their values cannot be modified by the child component)
- Props are read-only for the child components

- **state**

- local varibale
- it can be passed as a props
- manage and store mutable data within a component
- can be changed or updated by the component itself

### Controlled and Uncontrolled Components

**Controlled**

- rely on their parent to manage their state
- The parent component passes down the value and any event handlers required for the controlled component as props

**Uncontrolled**

- they Don't rely on their parent components to manage their state
- maintain their own internal state

🌟**_components do not share state with each other_**

### **Lifting the state up**

_Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children_

- Each Component Maintains its Own State
- Components Cannot Directly Modify the State of Another Sibling Component
- Maintaining State in Parent Component
- Parent Component Having Control Over State
<!--


- All the component maintain it's own state (copy of state)

- cannot directly modify the state of another sibling component
- Instead of each component maintain their own state we can maintain their state in parent component
- Now parent will have control over state -->

### Props Drilling

_Passing data from a parent component to a child component_

- makes your code cluttered

```
  <AppLayout/>
   - (user)//state
    <Body user={user}/>
      <RestaurantCard user={user}/>
      <RestaurantCard user={user}/>
        <h4>{user}</h4>
```

<!-- ### Handle data

- the data flow between components is unidirectional (one way)
  Central space - to store data
  Shared state for whole app
  Any component can use that data

- Context Api
- Redux
- flux
- mobx
- ngrx (angular) -->

### 🌟Context

_create a central data store that holds shared data, allowing any component in the application to access that data without the need for prop passing_

- object or some piece of data
- avoid prop drilling
- global space, any component can access it

1. **Create a Context**

- `createContext` is a function
- context will hold the shared data (default value for context)

```
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});

export default UserContext;
```

2. **Set Up the Provider**

- Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes
- The Provider component accepts a value prop
<!--

**UserContext.Provider**

- Modifying the UserContext using a Provider
- modify the state value - value={user}
- Override the default value
- Wrap the component with UserContext.Provider to access value -->

🌟 **The default value of a context can be overridden by the value provided by the `Provider`**

3. **Accessing the Shared Data**

- use the `useContext` hook to access the data from the context

```
import {  useContext } from "react";
import UserContext from "path";

const user = useContext(UserContext);
```

🌟 **We can have multiple context in our App**

- cart context
- userInfo context
- rating context

_state and props are tide to to individual components_
_context is seperate and allows data to be shared and accessed by multiple components_

<!-- - data which is require to our app in diff. palaces
- useState for whole app
- data store -->

### **How to use context in class based components?**

🌟 **Class component do not have access to React hooks.**

1. React gives a power of `Context.Consumer` for accessing context data.
2. The "Context.Consumer" can be treated as a component
3. Within the `Context.Consumer` you can define JSX along with a callback function

- The callback function receives the context data as an argument, providing access to the context within the JSX defined in the function.

```
import UserContext from "../Utils/UserContext";

 <UserContext.Consumer>
    {(value) => console.log(value)} //object
  </UserContext.Consumer>
```

<!-- 🌟*display name for debugging* -->

<!--
```
State
 const [user, setUser] = useState({
    name: "abc",
    email: "abc@gmail.com",
  });

Context
  <UserContext.Provider value={{ user: user , setUser:setUser}}>
        <Header />
        <Outlet />
  </UserContext.Provider>

  Get user
  const {user, setUser} = useContext(UserContext);
```


```
UserContext.displayName = "UserContext";
```

🌟🌟🌟
_Even when the code is not loaded context will update the state_
_UI layer is different from Data layer_
_UI layer Does all the work of reconciation and rendering the component_
_On refresh it will reset the value_ -->

## chapter 12 - Let's build our store

- _REDUX IS NOT MANDATORY_
- _Use for large scale applination where data is heavily used_
- _Redux and React are different libraries_
- _Redux offers easy debugging (chrome extension - redux dev tool )_
- _Redux offers state management_
- _`React-redux` (bridge the gap beetween react and redux), `React toolkit` libraries_
- _Redux has huge initial learning curve_

### Redux ToolKit (RTK)🌟

- `redux store` - big js object kept in a global centric place
- any component can access redux store
- `slice` - part(small portion) of redux store
  - cart slice
  - user slice
- cannot directly modify the slice

🌟**Write data**

**_➡️When you click on the add button ➡️ it dispatchs an action ➡️and then this action will call a function ➡️ this function internally modifies the cart slice_**

- where, this function is know as `reducer`

**_➡️ When you click on the add button ➡️ it dispatchs an action ➡️ which calls the reducer function ➡️ which modifies the slice of the redux store_**

🌟**Read data**

**_➡️To Read the data from the store use selector ➡️ and this selector will modify the React component_**

**_`Selector `- sunscribing to the store (in sync), it will update the UI automagically as soon as store updates_**

💡💡
**Add ➡️ `dispatch` an action ➡️ call `reducer function` ➡️ updates the `slice` of the `store` ➡️ Header component is subscribed to the store using `selector`**

1. _Create store using `configureStore()` ➡️ import from RTK_

2. _Provide store to app ➡️`<Provider store={store}></Provider>` ➡️ import from react-redux_

3. _Create Slice using `createSlice()` function ➡️ import from RTK_

- createSlice() function takes a configuration
  - name
  - initial state
  - reducers - object
    - reducer function corresponding to each action (think of it like api to communicate with redux store )
    - reducer function modify the slice of the store
    - get access to `state` and `action`
    - update the state based on action
    - mutating the state directly

```
  createSlice({
    name:"",
    initialState:{
      items :[]
    },
    reducers:{
      addItem(action): (state, action)={
        //Won't return anything
        //mutating the state here
        state.items.push(action.payload)
      },
      removeItems:(state)=>{
        state.items.pop()
      }
    }
  })
```

4. _export reducer and action_

```
  // Named export
    export const { addItem, removeItem, clearCart } = cartSlice.actions;

  // export default
    export default cartSlice.reducer;
  // _combine all the reducers to export _
```

🌟💡💡🌟
_whenever you create a slice it will return a object contain something known as reducer, actions_

5. _Put the `Slice` into store_

   - `reducer` - responsible to modify the store
   - it contains small reducer of each slice

```
  import { configureStore } from "@reduxjs/toolkit";
  import cartReducer from "./cartSlice";

  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  export default store;
```

6. Read data
   - subscribe to store -> import `useSelector`
   - It s hook comes from react-redux library
   - it gives you access to the store

```
  import { useSelector } from "react-redux";

  //subscribing to store here
  const cartItems = useSelector((store) => store.cart.item);

```

7. Dispatch an action

   - access dispatch which a is function get from useDispath hook
   - useDispath hook comes from react-redux library
   - Dispatch an action and which we had exported from cart slice
   - pass the payload - action.payload

   <!-- - redux will create object out of it 2nd argument  -->

```
  import {addItem} from "path";
  import {useDispatch} from react-redux;

  const dispatch = useDispath()
  dispatch(addItem("Grapes"))

```

<!--

  - const cartItems = useSelector((store) => store.cart.item);
  - 🌟make sure you are subscribibg to the rigth portion of the store

  - const cartItems = useSelector((store) => store);
  - performance loss
  - very less efficient
  - store variable update whenever there is change in small portion of the store
  - whole store will update

  - store - reducer - one big reducer can have multiple small reducers
  - slice - reducers - multiple reducer function - export one reducer from it


  ////////////////////
  - _creating a store the Api comes from RTK (for store)_
- _Provider, useSelector, useDispatch comes from react-redux (components uses it)_

**useSelector is used to subscribe to store**
_Only subscribe to specific portion of the slice_

🌟🌟🌟

_When I click on add button it dispatches an action which calls the reducer fucntion which updates the slice of the store_

_then, cart (UI) is subscribe to store using useSelector and it will update automagically_

_React is triggering its reconciation process also_

middlewares
thunks
rtk query

 -->

**_`store` - reducer - one reducer (big object ) can have multiple small reducers_**

**_`slice` - reducers - multiple reducer function - export one reducer from it_**

**Older redux - Don't mutate stata, returning was mandatory**
**redux toolkit - we have to mutate the stata**

**redux toolkit uses immer library BTS**
**RTK - either Mutate th existing state or return the new state (Replace the Original State)**

<!--

**redux uses immer library - find the difference between original state and mutated state - gives ypu back new immutable state**

current > draft > next

deep clone - immutable copy

```
//clear cart
state = [] //this won't work (local copy)
no modifying the state , adding referance of it
```
{current} -> import from rtk
console.log(current(state))

return {items :[]} //new state
-->

## chapter 13 - Time for the test
