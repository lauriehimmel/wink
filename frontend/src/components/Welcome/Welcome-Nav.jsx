import exitIcons from "../../assets/Wink-Exit-Icons.svg";

export default function WelcomeNav () {
    return (
        <div className="cpu-screen">
          <div>
            <u>F</u>ile <u>E</u>dit <u>V</u>iew <u>F</u>avorites
          </div>
          <div className="imgs">
            <img className="imgs" src={exitIcons}/>
          </div>
          <div className="urlbar">
            Address
            <div className="nineties-url">https://winkfriends.netlify.app/</div>
          </div>
        </div>
    )
}