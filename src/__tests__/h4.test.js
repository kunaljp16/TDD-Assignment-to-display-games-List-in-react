import { shallow } from "enzyme";
import H4 from "./../atomicDesignComponents/atoms/h4/h4";

describe("h4", () => {
  it("shouldRenderH4", () => {
    shallow(<H4 />);
  });
});
