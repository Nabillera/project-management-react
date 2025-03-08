import { useState } from "react";
import "./App.css";
import MainDisplay from "./components/MainDisplay";
import Sidebar from "./components/Sidebar";

function App() {
  const [activePage, setActivePage] = useState("main");
  const [savedProjects, setSavedProjects] = useState([]);

  const handleChangePage = (page) => {
    setActivePage(() => page);
  };

  const handleSaveProject = (title, desc, date) => {
    const newProject = {
      title: title,
      desc: desc,
      dueDate: date,
    };
    setSavedProjects((prev) => [...prev, newProject]);
  };

  const handleDeleteProject = (title) => {
    setSavedProjects((prev) => {
      const i = savedProjects.find((project) => project.title == title);
      prev.splice(i, 1);
      return prev;
    });
    handleChangePage("main");
  };

  return (
    <div className="flex h-[100%] items-center justify-between">
      <Sidebar
        activePage={activePage}
        onChangePage={handleChangePage}
        onDelete={handleDeleteProject}
        projects={savedProjects}
      />
      <MainDisplay
        activePage={activePage}
        onChangePage={handleChangePage}
        onSave={handleSaveProject}
      />
    </div>
  );
}

export default App;
