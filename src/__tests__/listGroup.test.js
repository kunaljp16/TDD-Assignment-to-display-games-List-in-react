import { shallow } from "enzyme";
import ListGroup from "./../atomicDesignComponents/template/listGroup/listGroup";
import ListItem from "./../atomicDesignComponents/organisms/listItem/listItem";

describe("ListGroup", () => {
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
  it("should Render List Group", () => {
    const wrapper = shallow(<ListGroup gameData={gameObjData} />);
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});
