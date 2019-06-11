import React from "react";
import { create } from "react-test-renderer";
import Home from "../Home";

describe("Home component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Home/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});