export default function Cards(props) {
  const Click = () => {
    var header_Image = document.getElementById("headerImage");
    if (header_Image) {
      header_Image.src = props.img;
    }
  };
  return (
    <div className="destination-card" onClick={Click}>
      <img src={props.img} alt="Waterfall" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
