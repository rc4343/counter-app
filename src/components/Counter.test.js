import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter App", () => {
test("it should have correct initail value", () => {
    render(<Counter initialValue={7} />);
    const count = screen.getByText("7");
    expect(count).toBeInTheDocument();
});

test("it should have default initial value", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
});

test("it should increment on click of add button", () => {
    render(<Counter initialValue={1} />);
    const addButton = screen.getByRole("button", { name: "Add"});
    userEvent.click(addButton);
    const count = screen.getByText("2");
    expect(count).toBeInTheDocument();
});

test("it should decrese on click of remove button", () => {
    render(<Counter initialValue={1} />);
    const removeButton = screen.getByRole("button", { name: "Remove"});
    userEvent.click(removeButton);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
});

test("it should not decrese below zero", () => {
    render (<Counter initialValue={0} />);
    const removeButton = screen.getByRole("button", { name: "Remove"});
    userEvent.click(removeButton);
    const count = screen.getByText("0");
    expect(count).toBeInTheDocument();
});

test("it should increment above 10", () => {
    render (<Counter initialValue={10} />);
    const addButton = screen.getByRole("button", { name: "Add"});
    userEvent.click(addButton);
    const count = screen.getByText("11");
    expect(count).toBeInTheDocument();
});
});