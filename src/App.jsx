import "./App.css";

import { html } from "../README.md";

function App() {
  return <div className="App" dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default App;
