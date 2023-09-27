import "../index.css";
export default function Header(props) {
  return (
    <div>
      <img id="headerImage" src={props.imgage} alt="Majestic Waterfall" />
      <h1>Natural Wonders Expedition</h1>
      <p>
        Embark on a virtual journey to explore the world's most awe-inspiring
        natural wonders
      </p>
    </div>
  );
}
