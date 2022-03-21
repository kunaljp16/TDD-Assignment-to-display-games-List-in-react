import { shallow, mount } from "enzyme";
import Description from "./../atomicDesignComponents/molecules/description/description";

describe("Description", () => {
  const wrapper = shallow(<Description />);

  it("should Render Paragraph For P, H5 and P", () => {
    const paraOne = wrapper.find("P").first();
    expect(paraOne.exists()).toBe(true);

    const heading = wrapper.find("H5").first();
    expect(heading.exists()).toBe(true);

    const paraTwo = wrapper.find("P").at(1);
    expect(paraTwo.exists()).toBe(true);
  });
});
