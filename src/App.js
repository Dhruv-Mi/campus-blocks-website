import { About } from "./modules/about/About";
import { Home } from "./modules/home/Home";
import { Join_us } from "./modules/join us/Join_us";
import { Past_event } from "./modules/past event/Past_event";
import { Team } from "./modules/team/Team";
import { Upcoming_event } from "./modules/upcoming event/Upcoming_event";
import { Navbar } from "./shared/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Upcoming_event />
        </div>
        <div>
          <Past_event />
        </div>
        <div>
          <Team />
        </div>
        <div>
          <Join_us />
        </div>
      </div>
    </>
  );
}

export default App;
