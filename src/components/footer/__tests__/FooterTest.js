import React from "react";
import { create } from "react-test-renderer";
import FooterLinks from "../FooterLinks";

describe("Login component", () => {
    test("it matches the snapshot", () => {
        const component = create(<FooterLinks/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});