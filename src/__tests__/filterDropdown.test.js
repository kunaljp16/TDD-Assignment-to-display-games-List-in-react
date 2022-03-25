import { shallow, mount } from "enzyme";
import FilterDropdown from "../atomicDesignComponents/atoms/filterDropdown/filterDropdown";

describe("FilterDropdown", () => {
  it("should render FilterDropdown without radioGroup", () => {
    const wrapper = shallow(<FilterDropdown />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);

    const arrow = wrapper.find("Arrow");
    expect(arrow).toHaveLength(1);
  });
});
