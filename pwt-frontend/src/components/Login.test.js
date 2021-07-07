// toggle.test.js

import React from "react";
import { screen, render } from "@testing-library/react";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { act } from "react-dom/test-utils";
import {Provider} from 'react-redux'
import authReducer from "../store/auth-reducer";
import thunkMiddleware from 'redux-thunk'
import Login from "./Login";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
//   unmountComponentAtNode(container);
  container.remove();
  container = null;
});



const store = createStore(combineReducers({authReducer}),  applyMiddleware(thunkMiddleware));

const Wrapper = ({ children }) => (
	<Provider store={store}>{children}</Provider>
);

it("changes value when clicked", async() => {

    const fakeResponse = { success:true, token: "mock name" };
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeResponse)
        })
      );


  const onChange = jest.fn();
  act(() => {
    render(<Login/>, { wrapper: Wrapper });
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=login-button]");
//   expect(button.innerHTML).toBe("Turn on");


  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  store.subscribe(()=>{
    console.log(store.getState())
    expect(store.getState().authReducer.authenticated).toBeTruthy();
  })


  const userName = await screen.findByText("Authenticated");
//   console.log(userName)
    expect(userName).toBeTruthy();

//   console.log('end' , store.getState().authReducer)
//   expect(store.getState().authReducer.authenticated).toBeTruthy();

//   expect(onChange).toHaveBeenCalledTimes(1);
//   expect(button.innerHTML).toBe("Turn off");

});