import { shallow, mount } from "enzyme";
import Button from "./../components/sharedUI/button/button";

describe("button component", () => {
  it("should render button", () => {
    const wrapper = shallow(<Button text="SORT GAMES"></Button>);
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
    expect(button.text()).toBe("SORT GAMES");
  });
});
