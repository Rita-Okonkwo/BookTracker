import { MemoryRouter } from "react-router-dom";
import * as React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe('App component containing routes', () => {
    it('will render correctly', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
    })
})