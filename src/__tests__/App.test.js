import { shallow } from 'enzyme';
import App from "../app";

describe("app component", () => {
  it("should render h1", () => {
    const wrapper = shallow(<App />);
    const heading = wrapper.find('h1');
    expect(heading.length).toBe(1);
  });
  it("should render button", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(button.length).toBe(1);
    expect(button.text()).toEqual('SORT GAMES');
  });
});
