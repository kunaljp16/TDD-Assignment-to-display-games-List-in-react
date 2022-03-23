import "./itemImage.scss";

function ItemImage(props) {
  return <img className="itemImage" src={props.imageSrc} alt={props.alt} />;
}

export default ItemImage;
