import React from "react";
import { create } from "react-test-renderer";
import Login from "../Login";

describe("Login component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Login/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});