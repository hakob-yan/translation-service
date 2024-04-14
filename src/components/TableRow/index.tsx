import React, { useState } from "react";

type Props = {
  order: number;
  enKey: string;
  value: string;
  onChange: (value: string) => void;
};

function TableRow({ order, enKey, value, onChange }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <div className="border p-4 border-surface-tertiary">{order}</div>
      <div className="border p-4 border-surface-tertiary">{enKey}</div>
      <div
        className={`border ${
          !isEditMode ? "p-4" : ""
        }  border-surface-tertiary`}
        onDoubleClick={() => setIsEditMode(true)}
      >
        {isEditMode ? (
          <textarea
            autoFocus={true}
            value={value}
            onBlur={() => setIsEditMode(false)}
            className="h-full w-full bg-transparent p-4"
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
    </>
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
