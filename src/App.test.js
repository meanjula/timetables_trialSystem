import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
afterEach(cleanup);

describe("testing rendering", () => {
  test("render timetables_trail_system", () => {
    render(<App />);
    expect(screen.getByTestId("inputFrom")).toBeInTheDocument();
    expect(screen.getByTestId("inputTo")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
  test("from input value test", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("inputFrom"), {
      target: { value: "Lapinlahdenkatu 12" },
    });
    expect(screen.getByTestId("inputFrom").value).toBe("Lapinlahdenkatu 12");
  });
  test("to input value test", () => {
    render(<App />);
    fireEvent.change(screen.getByTestId("inputTo"), {
      target: { value: "Itäkeskus" },
    });
    expect(screen.getByTestId("inputTo").value).toBe("Itäkeskus");
  });
});

test("renders correctly", () => {
  render(<App />);
  expect(screen.getByTestId("button")).toBeTruthy();
});
describe("submit button", () => {
  test("doe not trigger getData", () => {
    const getData = jest.fn();
    render(<App getData={getData} />);
    fireEvent.click(screen.getByTestId("button"));
    expect(getData).not.toHaveBeenCalled();
  });

  test("triggers change", () => {
    render(<App />);
    const inputFrom = screen.getByTestId("inputFrom");
    fireEvent.change(inputFrom, {
      target: { value: "kamppi" },
    });
    expect(inputFrom.value).toBe("kamppi");

    const inputTo = screen.getByTestId("inputTo");
    fireEvent.change(inputTo, {
      target: { value: "itäkeskus" },
    });
    expect(inputTo.value).toBe("itäkeskus");
  });
  test("triggers request submit button", () => {
    const handleSubmit = jest.fn();

    render(
      <button data-testid="button" onClick={handleSubmit} className="button">
        submit
      </button>
    );

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
