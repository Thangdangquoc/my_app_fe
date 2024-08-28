import videoHomePage from "../../assets/homepage.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-conatiner">
      <video width="750" height="500" autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};
export default HomePage;
