import H4 from "./../../atoms/h4/h4";
import FilterDropdown from "../../atoms/filterDropdown/filterDropdown";
import "./header.scss";

function Header() {
  return (
    <section className="headerWrapper">
      <H4 text="LOTTOLAND GAMES" />
      <FilterDropdown text="SORT GAMES" />
    </section>
  );
}

export default Header;
