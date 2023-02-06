import Navbar from "./components/common/Navbar";
import Profile from "./components/home/Profile";
import Socials from "./components/home/Socials";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-16 md:h-10 lg:h-8"></div>
      <Profile />
    </>
  );
}

export default App;
