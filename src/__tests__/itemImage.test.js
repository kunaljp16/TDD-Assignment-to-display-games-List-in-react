import { shallow, mount } from "enzyme";
import ItemImage from "./../atomicDesignComponents/atoms/itemImage/itemImage";

describe("ItemImage", () => {
  it("should renders ItemImage", () => {
    const wrapper = shallow(<ItemImage />);
    console.log(wrapper.debug());
    expect(wrapper.find("img").prop("src")).not.toBeNull();
    expect(wrapper.find("img").prop("alt")).not.toBeNull();
  });
});
