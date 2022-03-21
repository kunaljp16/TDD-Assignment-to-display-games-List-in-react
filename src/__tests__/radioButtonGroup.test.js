import { shallow } from "enzyme";

import RadioButtonGroup from "../atomicDesignComponents/molecules/radioButtonGroup/radioButtonGroup";
import RadioButton from "../atomicDesignComponents/atoms/radioButton/radioButton";

describe("RadioButtonGroup", () => {
  it("should render RadioButtonGroup", () => {
    const wrapper = shallow(<RadioButtonGroup />);
    console.log(wrapper.debug());
    expect(wrapper.find("RadioButton")).toHaveLength(3);
  });
});
