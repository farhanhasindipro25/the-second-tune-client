import React from "react";

const Blog = () => {
  return (
    <div className="bg-primary">
      <h2 className="text-accent text-center text-3xl font-semibold pt-20">
        BLOGS
      </h2>
      <div className="container mx-auto py-32">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-success rounded-box"
        >
          <div className="collapse-title text-xl text-secondary font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content text-secondary">
            <p>
              There are four kinds of states in React, namely, local state,
              global state, server state and URL state. All states can be
              managed by using the useState and useEffect hook. However the
              useReducer hook is often used to manage local or global states.
              Server state on the other hand can be managed using useSWR and
              React Query. Lastly, to manage URL states, useHistory, useLocation
              and useParams hooks can be used.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-success rounded-box"
        >
          <div className="collapse-title text-xl text-secondary font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content text-secondary">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-arrow border border-base-300 bg-success rounded-box"
        >
          <div className="collapse-title text-xl text-secondary font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content text-secondary">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-success rounded-box"
        >
          <div className="collapse-title text-xl text-secondary font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content text-secondary">
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Furthermore, Vue has an overlap with
              Angular and React with respect to their functionality like the use
              of components.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
