import React, { useState } from "react";

type Props = {
  order: number;
  enKey: string;
  value: string;
  onChange: (value: string) => void;
};

function TableRow({ order, enKey, value, onChange }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const handleDoubleClick = (e: any) => {
    e.preventDefault();
    setIsEdit(true);
  };
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <tr
      className="p-4 hover:bg-surface-secondary relative h-full"
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onBlur={() => setIsEdit(false)}
    >
      <td className="border-2 p-4 border-surface-tertiary">{order}</td>
      <td className="border-2 p-4 border-surface-tertiary">{enKey}:</td>
      {!isEdit ? (
        <td
          className="border-2  border-surface-tertiary min-h-[20rem] h-full"
          onDoubleClick={handleDoubleClick}
        >
          <div className="p-4">{value}</div>
        </td>
      ) : (
        <td>
          <textarea
            className="h-full w-full p-4 bg-transparent focus:border-none focus:outline-none"
            onBlur={() => setIsEdit(false)}
            onChange={handleChange}
            value={value}
          />
        </td>
      )}
    </tr>
  );
}

{
  /* <Image
alt="Edit"
className="w-5 h-5 theme-invert cursor-pointer absolute top-[calc(50%-10px)] right-10"
src={pencil}
/> */
}
export default TableRow;
