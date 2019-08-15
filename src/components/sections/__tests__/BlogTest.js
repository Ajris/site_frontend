import {create} from "react-test-renderer";
import React from "react";
import Blog from "../Blog";

describe("Blog component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Blog/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});