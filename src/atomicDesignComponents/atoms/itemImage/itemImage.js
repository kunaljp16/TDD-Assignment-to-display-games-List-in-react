import "./itemImage.scss";

function ItemImage(props) {
  return <img className="itemImage" src={props.src} alt={props.alt} />;
}

export default ItemImage;
