import { useNavigate } from "react-router-dom";
import AnimalsList from "../../components/Animals/AnimalsList";
import dog from "../../assets/animals/dog-sitting.svg";
import "./homepage.css";
import Header from "../../components/Header/header";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <Header />
      <div className="homepage">
        <div>About Wink</div>
        <div className="belowAbout">
        <div className="centerlist">
          <h1 className="homeheaders" onClick={() => navigate("/animals")}>
            Visit the Pets
          </h1>
          <div className="home-animallist">
            <div className="home-animal">
            <AnimalsList location={'homepage'}/>
            </div>
          </div>
        </div>
        <div>
          <h1 onClick={() => navigate("/adopt")} className="homeheaders">
            Adopt a Pet
          </h1>
          <div className="home-adopt">
            <img className="homeheaders" src={dog} alt="cartoon of a smling dog"/>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}
