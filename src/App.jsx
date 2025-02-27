import "./App.css";
import Body from "./Components/Body";
import Branding from "./Components/Branding";
import Feautures from "./Components/Features";
import Footer from "./Components/Footer";
import Footer_end from "./Components/Footer_end";
import Footer_navbar from "./Components/Footer_navbar";
import Logos from "./Components/Logos";
import Main from "./Components/main";
import Navbar from "./Components/Navbar";
import Trending from "./Components/Trending";
import Trending_body from "./Components/Trending_body";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Main/>
      <Logos/>
      <Feautures/>
      <Branding/>
      <Trending/>
      <Trending_body/>
      <Footer_navbar/>
      <Footer/>
      <Footer_end/>
    </>
  );
}

export default App;
