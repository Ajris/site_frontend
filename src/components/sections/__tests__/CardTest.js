import React from "react";
import { create } from "react-test-renderer";
import ItemCard from "../ItemCard";

describe("ItemCard component", () => {
    test("it matches the snapshot", () => {
        const component = create(<ItemCard/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});