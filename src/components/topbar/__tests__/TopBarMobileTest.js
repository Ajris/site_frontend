import React from "react";
import {create} from "react-test-renderer";
import TopBarMobile from "../TopBarMobile";
import {BrowserRouter} from "react-router-dom";

describe("TopBarMobile component", () => {
    test("it matches the snapshot", () => {
        const component = create(
            <BrowserRouter>
                <TopBarMobile/>
            </BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});