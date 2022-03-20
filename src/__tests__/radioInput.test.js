import { shallow, mount } from "enzyme";
import RadioInput from "./../atomicDesignComponents/atoms/radioInput/radioInput";

describe("RadioInput component", () => {
  it("should render radio input with label", () => {
    const wrapper = shallow(<RadioInput />);
    const radio = wrapper.find('[type="radio"]');
    expect(radio.length).toBe(1);
    const label = wrapper.find("label");
    expect(label.length).toBe(1);
  });
});
