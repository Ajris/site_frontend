import React from "react";
import {create} from "react-test-renderer";
import TopBarComputer from "../TopBarComputer";
import {BrowserRouter} from "react-router-dom";

describe("TopBarComputer component", () => {
    test("it matches the snapshot", () => {
        const component = create(
            <BrowserRouter>
                <TopBarComputer/>
            </BrowserRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});