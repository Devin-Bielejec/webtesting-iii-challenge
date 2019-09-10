// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Display from "./Display";

describe("<Display/>", () => {
    it("should match snapshot", () => {
        const tree = renderer.create(<Display/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


