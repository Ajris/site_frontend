import React from "react";
import { create } from "react-test-renderer";
import Projects from "../Projects";

describe("Projects component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Projects/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
