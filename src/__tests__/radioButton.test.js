import { shallow, mount } from "enzyme";
import RadioButton from "./../atomicDesignComponents/atoms/radioButton/radioButton";

describe("RadioButton component", () => {
  it("should render radio input with label", () => {
    const wrapper = shallow(<RadioButton />);
    const radio = wrapper.find('[type="radio"]');
    expect(radio.length).toBe(1);
    const label = wrapper.find("label");
    expect(label.length).toBe(1);
    wrapper.at(0).simulate('click', { target: { checked: true } });
  });
});
