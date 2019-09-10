// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

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

test("Close button changes text when clicked", () => {

    const dashboard = render(<Dashboard />);

    //Need to close first
    let closeButton = document.querySelectorAll("button")[1];
    expect(closeButton).toHaveTextContent("Close Gate");
    fireEvent.click(closeButton, {button: 0});

    let openButton = document.querySelectorAll("button")[1];
    expect(openButton).toHaveTextContent("Open Gate")
})

test("Lock button changes text when clicked", () => {
    const dashboard = render(<Dashboard />);

    let closeButton = document.querySelectorAll("button")[1];
    fireEvent.click(closeButton, {button: 0});

    const lockButton = document.querySelectorAll("button")[0]
    expect(lockButton).toHaveTextContent("Lock Gate");
    fireEvent.click(lockButton, {button: 0});

    const unlockButton = document.querySelectorAll("button")[0];
    expect(unlockButton).toHaveTextContent("Unlock Gate")
})

