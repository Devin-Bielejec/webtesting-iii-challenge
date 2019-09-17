// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

//Gate Exists
test("Gate is unlocked and open by default", () => {
    const display = render(<Display />);

    //Check if div is unlocked
    const gateUnlocked = document.querySelector("div.green-led")
    expect(gateUnlocked).toHaveTextContent("Unlocked")
    
    //Ccheck if div is open
    const gateOpen = document.querySelectorAll("div.green-led")[1]
    expect(gateOpen).toHaveTextContent("Open")
})


test("Gate is locked if locked and red", () => {
    const display = render(<Display locked={true}/>);
    //Check to see if gate is locked
    const gate = document.querySelector("div.red-led");
    expect(gate).toHaveTextContent("Locked");   
})

test("Gate is unlocked if unlocked and green", () => {
    const display = render(<Display locked={false}/>);
    //Check to see if gate is locked
    const gate = document.querySelector("div.display");
    expect(gate).toHaveTextContent("Unlocked");
    expect(gate.lastChild).toHaveClass("green-led");    
})

test("Gate is open if open and green", () => {
    const display = render(<Display closed={false}/>);
    //Check to see if gate is locked
    const gate = document.querySelector("div.display");
    expect(gate.lastChild).toHaveTextContent("Open");
    expect(gate.lastChild).toHaveClass("green-led");    
})

test("Gate is closed if closed and red", () => {
    const display = render(<Display closed={true}/>);
    //Check to see if gate is locked
    const gate = document.querySelector("div.display");
    expect(gate.lastChild).toHaveTextContent("Closed");  
    expect(gate.lastChild).toHaveClass("red-led"); 
})



