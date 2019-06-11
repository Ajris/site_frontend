import React from "react";
import {create} from "react-test-renderer";
import TopBarElement from "../TopBarElement";
import {BrowserRouter} from "react-router-dom";

describe("TopBarElement component", () => {
    test("it matches the snapshot", () => {
        const component = create(
            <BrowserRouter>
                <TopBarElement/>
            </BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});