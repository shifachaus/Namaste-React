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
`<React.Fragment></React.Fragment> | <></>`

```
