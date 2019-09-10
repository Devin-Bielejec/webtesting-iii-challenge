// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "../controls/Controls";
import Dashboard from "../dashboard/Dashboard";
import Display from "../display/Display";

test("Show controls and display", () => {
    const dashboard = render(<Dashboard />);

    expect(document.querySelector("div.display.panel")).toBeInTheDocument();
    expect(document.querySelector("div.controls.panel")).toBeInTheDocument();
})