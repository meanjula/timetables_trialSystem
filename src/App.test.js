import {
  fireEvent,
  render,
  screen,
  cleanup,
  debug,
} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Itenary from "./components/Itenary";
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
  });

  test("triggers request submit button", () => {
    const getData = jest.fn();

    render(<App getData={getData} />);
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
    const submitButton = screen.getByTestId("button");
    console.log(submitButton);
    fireEvent.click(submitButton);
    expect(getData).toHaveBeenCalled();
  });
});
