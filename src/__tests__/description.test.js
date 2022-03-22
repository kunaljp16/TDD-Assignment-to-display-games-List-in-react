import { shallow } from "enzyme";
import Description from "./../atomicDesignComponents/organisms/description/description";

describe("Description", () => {
  it("should Render Description", () => {
    const wrapper = shallow(<Description />);
    console.log(wrapper.debug());

    const itemImage = wrapper.find("ItemImage");
    expect(itemImage).toHaveLength(1);

    const description = wrapper.find("Description");
    expect(description).toHaveLength(1);
  });
});
