// import React from 'react';
// import App from './App';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe("search component", () => {
  test("renders", () => {
    expect(2+2).toBe(4);
  })
});