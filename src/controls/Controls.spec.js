// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

//Gate Exists
test("Buttons to close and lock gate exisit", () => {
    const controls = render(<Controls />);

    //Check button Lock Gate exists
    const lockButton = document.querySelector("div.controls:first-child");
    expect(lockButton).toHaveTextContent("Lock Gate");

    const closeButton = document.querySelector("div.controls:last-child");
    expect(closeButton).toHaveTextContent("Close Gate");
})

test("Close button is disabled if gate is locked", () => {
    const controls = render(<Controls locked={true}/>);

    const closeButton = document.querySelectorAll("button")[1]
    expect(closeButton).toBeDisabled();
})

test("Lock button is disabled if gate is open", () => {
    const controls = render(<Controls closed={false}/>);

    const lockButton = document.querySelectorAll("button")[0]
    expect(lockButton).toBeDisabled();
})

