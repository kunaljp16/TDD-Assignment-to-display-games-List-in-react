import { shallow } from "enzyme";
import Header from "./../atomicDesignComponents/molecules/header/header";
import H4 from "./../atomicDesignComponents/atoms/h4/h4";

describe("header", () => {
  it("should render header ", () => {
    const wrapper = shallow(<Header />);
    console.log(wrapper.debug());
    const h4 = wrapper.find("H4");
    expect(h4).toHaveLength(1);

    const dropdown = wrapper.find("Dropdown");
    expect(dropdown).toHaveLength(1);
  });
});
