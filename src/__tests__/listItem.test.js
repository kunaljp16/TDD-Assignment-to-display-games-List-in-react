import { shallow } from "enzyme";
import ListItem from "./../atomicDesignComponents/organisms/listItem/listItem";

describe("ListItem", () => {
  it("should Render ListItem", () => {
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
    const wrapper = shallow(<ListItem gameData={gameObjData}/>);
    expect(wrapper.find('Description').length).toEqual(1);
    expect(wrapper.find('Description').prop('gameData')).not.toEqual(null)
    expect(wrapper.find('Button').length).toEqual(1);

  });
});
