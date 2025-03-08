import { useRef } from "react";

export default function NewProjectForm({ onSave, onChangePage }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();
  const handleSave = () => {
    onSave(title.current.value, desc.current.value, date.current.value);
    onChangePage("main");
  };
  return (
    <div className="flex w-[60%] flex-col">
      <div className="flex gap-x-[10px] self-end">
        <button
          className="w-[80px] cursor-pointer rounded py-[10px] hover:bg-neutral-300"
          onClick={() => onChangePage("main")}
        >
          Cancel
        </button>
        <button
          className="w-[80px] cursor-pointer rounded bg-black py-[10px] text-white hover:bg-neutral-500"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <label
        className="mt-[25px] text-[14px] font-bold text-neutral-700"
        htmlFor="title"
      >
        TITLE
      </label>
      <input
        className="border-b-[2px] border-b-neutral-400 bg-neutral-300 p-[5px] focus:border-b-neutral-700 focus:outline-0"
        name="title"
        type="text"
        ref={title}
      />
      <label
        className="mt-[25px] text-[14px] font-bold text-neutral-700"
        htmlFor="description"
      >
        DESCRIPTION
      </label>
      <textarea
        className="border-b-[2px] border-b-neutral-400 bg-neutral-300 p-[5px] focus:border-b-neutral-700 focus:outline-0"
        name="description"
        ref={desc}
      />
      <label
        className="mt-[25px] text-[14px] font-bold text-neutral-700"
        htmlFor="date"
      >
        DUE DATE
      </label>
      <input
        className="border-b-[2px] border-b-neutral-400 bg-neutral-300 p-[5px] focus:border-b-neutral-700 focus:outline-0"
        name="date"
        type="date"
        ref={date}
      />
    </div>
  );
}
