import NewProjectForm from "./NewProjectForm";
import Folder from "../assets/folder.png";

export default function MainDisplay({ activePage, onChangePage, onSave }) {
  return (
    <div
      id="main-display"
      className="relative flex h-[90%] w-[100%] justify-center pt-[70px]"
    >
      {activePage == "main" ? (
        <div className="flex flex-col items-center">
          <img className="mt-[50px] w-[120px]" src={Folder} />
          <h2 className="mt-[15px] mb-[10px] text-[32px] font-bold text-neutral-600">
            No Project Selected
          </h2>
          <p className="text-[24px] text-neutral-400">
            Select a project or get started with a new one
          </p>
        </div>
      ) : activePage == "form" ? (
        <NewProjectForm onSave={onSave} onChangePage={onChangePage} />
      ) : undefined}
    </div>
  );
}
