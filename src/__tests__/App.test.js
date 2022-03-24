import { shallow } from "enzyme";
import App from "../app";

describe("app component", () => {
  it("should render app", () => {
    const wrapper = shallow(<App />);
  });
});
