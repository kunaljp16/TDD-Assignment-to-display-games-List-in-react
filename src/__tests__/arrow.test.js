import { shallow, mount } from "enzyme";
import Arrow from "./../atomicDesignComponents/atoms/arrows/arrow";

describe("Arrow component", () => {
  it("should render i element", () => {
    const wrapper = shallow(<Arrow />);
    const arrow = wrapper.find("i");
    expect(arrow.length).toBe(1);
  });

  it("should render i element with direction", () => {

    const direction = {
      up: "up",
      down: "down",
      right: "right",
      left: "left",
    };

    const wrapper = shallow(<Arrow className={"arrow " + direction} />);
    if (direction === direction.up) {
      expect(wrapper.hasClass("up")).toBeTruthy();
    }

    if (direction === direction.down) {
      expect(wrapper.hasClass("down")).toBeTruthy();
    }

    if (direction === direction.right) {
      expect(wrapper.hasClass("right")).toBeTruthy();
    }

    if (direction === direction.left) {
      expect(wrapper.hasClass("left")).toBeTruthy();
    }

  });
});
