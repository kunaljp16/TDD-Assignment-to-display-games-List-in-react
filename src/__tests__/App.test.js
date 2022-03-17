import { shallow } from 'enzyme';
import App from "../App";

describe("app component", () => {
  it("should render h1", () => {
    const wrapper = shallow(<App />);
    const heading = wrapper.find('h1');
    expect(heading.length).toBe(1);
  });
});
