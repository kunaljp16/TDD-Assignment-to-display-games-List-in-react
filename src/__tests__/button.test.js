import { shallow } from "enzyme";
import Button from "./../atomicDesignComponents/atoms/button/button";

describe("Button", () => {
  const buttonText = "PLAY";
  const wrapper = shallow(<Button text={buttonText} />);
  it("should Render Button", () => {
    const button = wrapper.find("button").text(buttonText);
    expect(button).toBe("PLAY");
  });
});
