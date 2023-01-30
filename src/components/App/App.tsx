import "./App.css";
import Info from "../Info/Info";
import Button from "../Button/Button";
import Gentlemen from "../Gentlemen/Gentlemen";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <Info />
      <Button />
      <main className="main">
        <ul className="gentlemen">
          <Gentlemen />
        </ul>
      </main>
    </div>
  );
};

export default App;
