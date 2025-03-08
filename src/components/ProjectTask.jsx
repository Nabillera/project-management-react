export default function ProjectTask({ onClear, title, index }) {
  return (
    <div className="flex max-w-[1000px] justify-between bg-neutral-200 p-[12px]">
      <p className="text-[18px] leading-[18px]">{title}</p>
      <button
        className="cursor-pointer hover:text-red-700"
        onClick={() => onClear(index)}
      >
        Clear
      </button>
    </div>
  );
}
