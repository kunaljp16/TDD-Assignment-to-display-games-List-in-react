import { shallow, mount } from "enzyme";
import Description from "./../atomicDesignComponents/organisms/description/description";

describe("Description", () => {
  it("should Render Description", () => {
    const gameObjData = [
      {
        displayName: "Lucky Wizard",
        image: "Icon_320and250_LuckyWizard.jpg",
        provider: "RedTiger",
        minimumStake: "0.1",
      },
      {
        displayName: "Greek Gods",
        image: "icon-320and250_GreekGods.jpg",
        provider: "Pragmatic",
        minimumStake: "0.25",
      },
    ];
    const wrapper = mount(<Description gameData={gameObjData} />);
    const itemImage = wrapper.find("ItemImage");
    expect(itemImage).toHaveLength(1);

    const itemTextInfo = wrapper.find("ItemTextInfo");
    expect(itemTextInfo).toHaveLength(1);
  });
});
