import { shallow } from "enzyme";
import Description from "./../atomicDesignComponents/organisms/description/description";

describe("Description", () => {
  it("should Render Description", () => {
    const wrapper = shallow(<Description />);
    const itemImage = wrapper.find("ItemImage");
    expect(itemImage).toHaveLength(1);

    const itemTextInfo = wrapper.find("ItemTextInfo");
    expect(itemTextInfo).toHaveLength(1);
  });
});
