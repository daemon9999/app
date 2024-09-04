import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
interface TabsProps {
  selectedLoc: number;
  setSelectedLoc: Dispatch<SetStateAction<number>>;
}

export default function Tabs({ selectedLoc, setSelectedLoc }: TabsProps) {
  const arr = ["First", "Second", "Third", "Fourth"];
  return (
    <div className="flex items-center gap-x-4 flex-wrap  justify-center gap-y-3">
      {arr.map((item: string, index: number) => (
        <button
        onClick={() => setSelectedLoc(index)}
          className={classNames(
            ` w-[200px]  px-3 py-2  rounded-md text-lg border border-700 transition-all duration-300 flex items-center justify-center`,
            {
              "bg-700 text-400": index === selectedLoc,
              "bg-transparent text-700 hover:bg-700 hover:text-400 ": index !== selectedLoc
            }
          )}
          type="button"
          key={index}
        >
          {item} area
        </button>
      ))}
    </div>
  );
}
