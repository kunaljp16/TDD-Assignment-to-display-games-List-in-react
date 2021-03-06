import { shallow } from "enzyme";
import Header from "./../atomicDesignComponents/molecules/header/header";

describe("header", () => {
  it("should render header ", () => {
    const wrapper = shallow(<Header />);
    const h4 = wrapper.find("H4");
    expect(h4).toHaveLength(1);

    const FilterDropdown = wrapper.find("FilterDropdown");
    expect(FilterDropdown).toHaveLength(1);
  });
});
