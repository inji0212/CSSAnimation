import { Select, SelectItem } from "@nextui-org/react";
const items = {
  ALL: "모든 타입",
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};
const selectItems = Object.entries(items).map(([key, value]) => ({
  key,
  label: value,
}));
export default function CustomSelector() {
  return (
    <>
      <Select
        labelPlacement="inside"
        placeholder="모든 타입"
        classNames={{
          base: "w-40 border rounded-lg focus:border focus:rounded-t-lg  focus:border-codeit_purple focus-visible:border-codeit_purple",

          popoverContent: "  border rounded-b-lg mt-0 data-focus:bg-gray-200",
          listbox: "border-b last:border-none",
          trigger: "ease-in-out duration-250 ",
        }}
      >
        {selectItems.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </>
  );
}
