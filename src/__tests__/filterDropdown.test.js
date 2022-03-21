import { shallow } from "enzyme";
import FilterDropdown from "../atomicDesignComponents/atoms/filterDropdown/filterDropdown";

describe("FilterDropdown", () => {
  it("should render FilterDropdown without radioGroup", () => {
    const wrapper = shallow(<FilterDropdown />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);

    const arrow = wrapper.find("Arrow");
    expect(arrow).toHaveLength(1);
  });
  it("should render FilterDropdown with radioGroup", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <FilterDropdown>
        <button onClick={mockCallBack} />
      </FilterDropdown>
    );
    wrapper.find("button").simulate("click");
    const radioButtonGroup = wrapper.find("RadioButtonGroup");
    expect(radioButtonGroup).toHaveLength(1);
  });
});
