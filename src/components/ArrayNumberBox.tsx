import { NumberBoxProps } from "~/types";

export const ArrayNumberBox: React.FC<NumberBoxProps> = ({ value }) => {
  return (
    <li className="w-6 text-center list-none border-2 border-solid border-black inline-block mx-1">
      {value}
    </li>
  );
};

export default ArrayNumberBox;
