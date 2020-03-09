import React from "react";
import { mount, shallow, render, ShallowWrapper } from "enzyme";
import Login from "..";
import { Router } from "react-router";
import history from "../../../assets/history/history";
import "@testing-library/jest-dom/extend-expect";
import TextField from "@material-ui/core/TextField";
import AuthContextProvider from "../../../contexts/AuthContext";

it("should display a blank login form", () => {
  const wrapper = mount(
    <AuthContextProvider>
      <Router history={history}>
        <Login />
      </Router>
    </AuthContextProvider>
  );
  expect(wrapper).toMatchSnapshot();
  const FORM = wrapper.find("form").first();
});

// function getByCssSelector(shallowComp: ShallowWrapper, keyVal)

it("renders username input with label (default type)", () => {
  const FORM = mount(
    <AuthContextProvider>
      <Router history={history}>
        <Login />
      </Router>
    </AuthContextProvider>
  );
  const username = FORM.find("#username").first();
  expect(username).toHaveLength(1);
  expect(username.prop("id")).toEqual("username");
  expect(username.prop("label")).toEqual("Username");
  expect(username.prop("name")).toEqual("userName");
  expect(username.prop("type")).toEqual("text");
});

it("renders password input with label given the type", () => {
  const FORM = mount(
    <AuthContextProvider>
      <Router history={history}>
        <Login />
      </Router>
    </AuthContextProvider>
  );
  const password = FORM.find("#password-input").first();
  expect(password).toHaveLength(1);
  expect(password.prop("id")).toEqual("password-input");
  expect(password.prop("label")).toEqual("Password");
  expect(password.prop("name")).toEqual("password");
  expect(password.prop("type")).toEqual("password");
  expect(password.prop("autoComplete")).toEqual("current-password");
  expect(password.prop("variant")).toEqual("outlined");
  expect(password.prop("value")).toEqual("");
});

// it("should allow entering a username", async () => {
//   const FORM = mount(
//     <AuthContextProvider>
//       <Router history={history}>
//         <Login />
//       </Router>
//     </AuthContextProvider>
//   );
//   const username = FORM.find("#username").first();

//   username.simulate("change", { value: "mohcine" });
//   username.update();
//   console.log(username.find("input").props());
//   expect(username.find("input").props().value).toEqual("mohcine");
// });
