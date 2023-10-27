import AppRoute from "./Route/AppRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <AppRoute/>
    </div>
  )
}

export default App;