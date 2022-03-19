import { shallow, mount } from "enzyme";
import ButtonWithArrow from "../components/sharedUI/buttonWithArrow/buttonWithArrow";
describe("button component", () => {
 
  it("should render button with Arrow", () => {
    const wrapper = shallow(<ButtonWithArrow text="SORT GAMES" />);
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
    const arrow = wrapper.find("i");
    expect(arrow.length).toBe(1);
  });
});
