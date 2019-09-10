// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Display from "./Display";
import { act } from "react-testing-library";

//Gate Exists
test("Gate is unlocked and open by default", () => {
    const display = render(<Display />);

    //Check if div is unlocked
    const gateUnlocked = display.findByText("Unlocked")
    
    //Ccheck if div is open
    const gateOpen = display.findByText("Open");
})


test("Gate is locked if locked", () => {
    const display = render(<Display locked={true}/>);
    //Check to see if gate is locked
    const gate = display.findByText("Locked");    
})

test("Gate is unlocked if unlocked", () => {
    const display = render(<Display locked={false}/>);
    //Check to see if gate is locked
    const gate = display.findByText("Unlocked");    
})

test("Gate is open if open", () => {
    const display = render(<Display closed={false}/>);
    //Check to see if gate is locked
    const gate = display.findByText("Open");    
})

test("Gate is closed if closed", () => {
    const display = render(<Display closed={true}/>);
    //Check to see if gate is locked
    const gate = display.findByText("Closed");    
})


