import "./header.css";

export default function Header(props) {
  return (
    <div className="header">
      <a href="/" className="header-nav">
        All pets
      </a>
      <a href="/" className="header-title">
        Wink
      </a>
      <a href="/" className="header-nav">
        New pet
      </a>
    </div>
  );
}
