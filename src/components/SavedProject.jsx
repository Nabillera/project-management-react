import { useState, useRef } from "react";
import { format } from "date-fns";
import ProjectTask from "./ProjectTask";

export default function SavedProject({ projectInfo, onDelete }) {
  const [savedTasks, setSavedTasks] = useState([]);
  const task = useRef();
  const handleAddTask = () => {
    setSavedTasks((prev) => {
      const updatedTasks = [...prev];
      updatedTasks.unshift(task.current.value);
      return updatedTasks;
    });
  };

  const handleClearTask = (index) => {
    setSavedTasks((prev) => prev.filter((t, i) => i != index));
  };

  return (
    <div className="absolute flex w-[90%] max-w-[1000px] flex-col bg-white">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[15px]">
          <h2 className="text-[40px] leading-[36px] font-bold text-neutral-700">
            {projectInfo.title}
          </h2>
          <p className="text-[20px] text-neutral-400">
            {format(projectInfo.dueDate, "MMM dd, yyyy")}
          </p>
          <p className="text-[20px] text-neutral-800">{projectInfo.desc}</p>
        </div>
        <button
          className="h-fit cursor-pointer p-[5px] text-[18px]"
          onClick={() => onDelete(projectInfo.title)}
        >
          Delete Project
        </button>
      </div>

      <div className="mt-[20px]">
        <p className="mb-[15px] text-[26px] font-bold text-neutral-800">
          Tasks
        </p>
        <div className="flex gap-x-[30px]">
          <input
            ref={task}
            className="w-[300px] rounded bg-neutral-300 p-[5px] focus:outline-blue-700"
          />
          <button className="cursor-pointer" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <div className="pt-[20px]">
          {savedTasks.length != 0 ? (
            savedTasks.map((task, i) => (
              <ProjectTask
                onClear={handleClearTask}
                title={task}
                key={i}
                index={i}
              />
            ))
          ) : (
            <p className="text-[18px]">This project does not have any tasks</p>
          )}
        </div>
      </div>
    </div>
  );
}
