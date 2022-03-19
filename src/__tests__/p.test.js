import { shallow } from "enzyme";
import P from "../../../../atomicDesignComponents/Atoms/p/p";

describe("P", () => {
  it("shouldRenderP", () => {
    shallow(<P />);
  });
});
