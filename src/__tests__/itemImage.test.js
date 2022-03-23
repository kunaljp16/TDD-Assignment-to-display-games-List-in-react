import { shallow } from "enzyme";
import ItemImage from "./../atomicDesignComponents/atoms/itemImage/itemImage";

describe("ItemImage", () => {
  it("should renders ItemImage", () => {
    const wrapper = shallow(<ItemImage />);
    expect(wrapper.find("img").prop("src")).not.toBeNull();
    expect(wrapper.find("img").prop("alt")).not.toBeNull();
  });
});
