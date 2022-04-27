import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import StartAssessment from "./Pages/StartAssessment";
import Assessment from "./Pages/Assessment";
import ResultsPage from "./Pages/ResultsPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="startassessment" element={<StartAssessment />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="resultspage" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
