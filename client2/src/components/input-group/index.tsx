
import classNames from "classnames";

interface InputGroupProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  name: string
  type:string
}

export default function InputGroup({ label, onChange, value, id, name, type }: InputGroupProps) {
  return (
    <label htmlFor={id} className="relative">
      <span
        className={classNames(
          "text-10 absolute    left-4 transition-all duration-300",
          {
            "-top-2 text-sm": value,
            "top-1/2 -translate-y-1/2": !value
          }
        )}
      >
        {label}
      </span>
      <input
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="outline-none border-b py-3 px-4  border-10 w-full  text-100"
      />
    </label>
  );
}
