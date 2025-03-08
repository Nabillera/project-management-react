import NewProjectForm from "./NewProjectForm";

export default function MainDisplay({ activePage, onChangePage, onSave }) {
  return (
    <div
      id="main-display"
      className="relative pt-[70px] justify-center flex h-[90%] w-[100%]"
    >
      {activePage == "main" ? (
        <div className="flex flex-col items-center">
          <h2 className="text-[26px] font-bold text-neutral-600">
            No Project Selected
          </h2>
          <p className="text-[18px] text-neutral-400">
            Select a project or get started with a new one
          </p>
        </div>
      ) : activePage == "form" ? (
        <NewProjectForm onSave={onSave} onChangePage={onChangePage} />
      ) : undefined}
    </div>
  );
}
