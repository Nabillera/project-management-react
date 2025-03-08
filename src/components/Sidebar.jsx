import { createPortal } from "react-dom";
import SavedProject from "./SavedProject";

export default function Sidebar({
  activePage,
  onChangePage,
  onDelete,
  projects,
}) {
  return (
    <div className="flex h-[90%] w-[470px] flex-col items-start gap-y-[30px] rounded-r-3xl bg-black p-[40px] pt-[70px]">
      <p className="text-[24px] font-bold text-white">YOUR PROJECTS</p>
      <button
        className="cursor-pointer rounded bg-neutral-700 p-[12px] text-[18px] text-neutral-300 hover:bg-neutral-600"
        onClick={() => onChangePage("form")}
      >
        + Add Project
      </button>

      <ul className="flex h-[100%] w-[100%] flex-col gap-y-[10px] overflow-y-hidden">
        {projects.map((project, index) => {
          let activeClass;
          activePage == index
            ? (activeClass = "bg-neutral-900")
            : (activeClass = "");
          return (
            <li key={index}>
              <div
                className={`cursor-pointer rounded p-[7px] text-[18px] text-neutral-300 hover:bg-neutral-900 hover:text-neutral-100 ${activeClass}`}
                onClick={() => onChangePage(index)}
              >
                {project.title}
              </div>
              {activePage == index
                ? createPortal(
                    <SavedProject projectInfo={project} onDelete={onDelete} />,
                    document.getElementById("main-display"),
                  )
                : undefined}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
