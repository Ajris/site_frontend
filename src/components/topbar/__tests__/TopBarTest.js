import React from "react";
import { create } from "react-test-renderer";
import TopBar from "../TopBar";
import {BrowserRouter} from "react-router-dom";

describe("TopBar component", () => {
    test("it matches the snapshot", () => {
        const component = create(
            <BrowserRouter>
                <TopBar/>
            </BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});