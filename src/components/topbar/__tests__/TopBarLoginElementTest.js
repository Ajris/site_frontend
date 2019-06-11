import React from "react";
import { create } from "react-test-renderer";
import TopBarLoginElement from "../TopBarLoginElement";
import {BrowserRouter} from "react-router-dom";

describe("TopBarLoginElement component", () => {
    test("it matches the snapshot", () => {
        const component = create(
            <BrowserRouter>
                <TopBarLoginElement/>
            </BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});