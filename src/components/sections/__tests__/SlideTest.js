import {create} from "react-test-renderer";
import Slide from "../Slide";
import React from "react";

describe("Slide component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Slide/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});