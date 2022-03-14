import React from "react";
import { render, screen } from "@testing-library/react";

import  {Message}  from "../Message.js";

describe("Message tests", () => {
  it("render athuor & text", () => {
    render(<Message text="test" athuor="athuor" />);

    const text = screen.getByText("athuor: test");
    expect(text).toBeDefined();
  });
});
