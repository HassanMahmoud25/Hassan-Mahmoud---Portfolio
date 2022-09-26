import classes from "./App.module.css";
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Hero/Hero";
import What from "./Components/What/What";
import Facts from "./Components/Facts/Facts";
import Footer from "./Components/Footer/Footer";
import Resume from "../src/Components/Resume/EducationAndExperience/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <main className={classes.container}>
      <Navigation />
      <Hero />
      <What />
      <Facts />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
