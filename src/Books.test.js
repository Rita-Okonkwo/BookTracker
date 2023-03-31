import {  MemoryRouter } from "react-router-dom";
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import Books from "./Books";
import userEvent from "@testing-library/user-event";

describe('Books component', () => {
    it('will render correctly', () => {
        render(<Books books={[]} handleChange={() => {}}/>, {wrapper: MemoryRouter})
    })
    it('will navigate to search page when add icon is clicked', async () => {
        const user = userEvent.setup()
        render(<Books books={[]} handleChange={() => {}}/>, {wrapper: MemoryRouter})
        await act(() => user.click(screen.getByText(/add a book/i))) 
        expect(screen.queryByText(/add a book/i)).not.toBeInTheDocument()
    })
})