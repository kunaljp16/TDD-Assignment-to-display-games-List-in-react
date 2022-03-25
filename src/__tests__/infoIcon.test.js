import { shallow } from "enzyme";
import InfoIcon from "./../atomicDesignComponents/atoms/infoIcon/infoIcon";

describe("InfoIcon", () => {
  it("should render info icon image ", () => {
    const wrapper = shallow(<InfoIcon />);
    const infoIcon = wrapper.find("img");
    expect(infoIcon).toHaveLength(1);
  });
});
