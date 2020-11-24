import React from "react";

export const Form = ({ onSubmit }) => {
  return React.createElement(
    "form",
    {
      onSubmit
    },
    React.createElement(
      "div",
      {
        className: "form-group"
      },
      React.createElement(
        "label",
        {
          htmlFor: "name"
        },
        "Name"
      ),
      React.createElement("input", {
        className: "form-control",
        type: "text",
        id: "name"
      })
    ),
    React.createElement(
      "div",
      {
        className: "form-group"
      },
      React.createElement(
        "label",
        {
          htmlFor: "email"
        },
        "Email"
      ),
      React.createElement("input", {
        className: "form-control",
        type: "email",
        id: "email",
        placeholder: "name@examle.com"
      })
    ),
    React.createElement(
      "div",
      {
        className: "form-group"
      },
      React.createElement(
        "button",
        {
          className: "form-control btn btn-primary",
          type: "submit"
        },
        "Submit"
      )
    )
  );
};
export default Form;
