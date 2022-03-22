import { shallow } from "enzyme";
import ListGroup from "./../atomicDesignComponents/organisms/listGroup/listGroup";
import ListItem from "./../atomicDesignComponents/organisms/listItem/listItem";

describe("ListGroup", () => {
  const gameObjData = [
    {
      displayName: "Lucky Wizard",
      image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
      provider: "RedTiger",
      minimumStake: "0.1",
    },
    {
      displayName: "Greek Gods",
      image: "/cms/5de91d2a91253e002efe72f7/icon-320and250_GreekGods.jpg",
      provider: "Pragmatic",
      minimumStake: "0.25",
    },
  ];
  it("should Render List Group", () => {
    const wrapper = shallow(<ListGroup gameData={gameObjData} />);
    expect(wrapper.find(ListItem)).toHaveLength(2);
  });
});
