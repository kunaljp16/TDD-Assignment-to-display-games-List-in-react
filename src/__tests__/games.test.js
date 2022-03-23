import { shallow } from "enzyme";
import Games from "./../atomicDesignComponents/pages/games";

describe("Games", () => {
  it("should render Games template", () => {
    const wrapper = shallow(<Games />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('ListGroup').length).toEqual(1);
  });
});
