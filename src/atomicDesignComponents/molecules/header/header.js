import H4 from "./../../atoms/h4/h4";
import Dropdown from "../../atoms/filterDropdown/filterDropdown";

function Header() {
  return (
    <div className="headerWrapper">
      <H4 text="LOTTOLAND GAMES" />
      <Dropdown text="SORT GAMES"/>
    </div>
  );
}

export default Header;
