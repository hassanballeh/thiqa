// components/SelectFieldWrapper.tsx
import dynamic from "next/dynamic";

const SelectField = dynamic(() => import("./SelectField"), { ssr: false });

export default SelectField;
