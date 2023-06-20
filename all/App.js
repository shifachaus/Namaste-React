import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const elem = <span>React Element</span>;

const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    {elem} Namaste React using JSX 🚀
  </h1>
);

// React Functional Component
const Title = () => {
  return (
    <React.Fragment>
      {jsxHeading} {/* Javascript inside JSX */}
    </React.Fragment>
  );
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title /> {/* Component composition */}
      {Title()}
      <Title></Title>
      <h3>Namaste React Functional Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
