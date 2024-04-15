import axios from "axios";
import { useParams } from "next/navigation";
import React, { KeyboardEvent, useRef, useState } from "react";

type Props = {
  order: number;
  enKey: string;
  value: string;
  objectKey: string;
  onChange: (value: string) => void;
};

function TableRow({ order, enKey, value, onChange, objectKey }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const refElement = useRef<null | HTMLTextAreaElement>(null);
  const params = useParams();
  const handleOnBlur = async () => {
    setIsEditMode(false);
    axios.post("/api/setLocaleMessages", {
      locale: params.locale,
      key: objectKey,
      value: value,
    });
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && refElement) {
      refElement.current?.blur();
    }
  };
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
            ref={refElement}
            onKeyDown={handleKeyDown}
            autoFocus={true}
            value={value}
            onBlur={handleOnBlur}
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

export default TableRow;
