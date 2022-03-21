import "./itemImage.scss";

function ItemImage(props) {
  return <img className="itemImage" src={props.image} alt={props.alt} />;
}

export default ItemImage;
