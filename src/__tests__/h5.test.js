import { shallow } from "enzyme";
import H5 from "./../atomicDesignComponents/atoms/h5/h5";

describe("h5", () => {
  it("shouldRenderH5", () => {
    shallow(<H5 />);
  });
});
