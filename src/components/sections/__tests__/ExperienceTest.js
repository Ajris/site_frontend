import React from "react";
import { create } from "react-test-renderer";
import Experience from "../Experience";

describe("Experience component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Experience/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});