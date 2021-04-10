import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Education from "./components/pages/EducationPage/Education";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Skill from "./components/pages/SkillPage/Skill";
import WorkingExperience from "./components/pages/WorkingExperience/WorkingExperience";
import ScrollToTop from "./components/ScrollToTop";
import WorkGallery from "./components/pages/WorkGalleryPage/WorkGallery";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  return (
    <div className="App">
    
      <Router>
        <Navbar />
        <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/educations" exact component={Education} />
          <Route path="/skills" exact component={Skill} />
          <Route
            path="/working-experiences"
            exact
            component={WorkingExperience}
          />
          <Route
            path="/work-gallery"
            exact
            component={WorkGallery}
          />
        </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
   
    </div>
  );
}

export default App;
