// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import Display from "./Display";
import { act } from "react-testing-library";

//Gate Exists
test("Gate is unlocked and open", () => {
    const display = render(<Display />);

    //Check if div is unlocked
    const gateUnlocked = display.findByText("Unlocked")
    
    //Ccheck if div is open
    const gateOpen = display.findByText("Open");
})



