import { shallow } from "enzyme";

import RadioButtonGroup from "../atomicDesignComponents/molecules/radioButtonGroup/radioButtonGroup";

describe("RadioButtonGroup", () => {
  it("should render RadioButtonGroup", () => {
    const wrapper = shallow(<RadioButtonGroup />);
    expect(wrapper.find("RadioButton")).toHaveLength(3);
  });
});
