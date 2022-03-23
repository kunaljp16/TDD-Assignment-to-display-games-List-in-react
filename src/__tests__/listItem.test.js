import { shallow } from "enzyme";
import ListItem from "./../atomicDesignComponents/organisms/listItem/listItem";

describe("ListItem", () => {
  it("should Render ListItem", () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.find('Button').length).toEqual(1);
    expect(wrapper.find('Description').length).toEqual(1);
  });
});
