import { shallow } from "enzyme";
import P from "./../atomicDesignComponents/atoms/p/p";

describe("P", () => {
  it("shouldRenderP", () => {
    shallow(<P />);
  });
});
