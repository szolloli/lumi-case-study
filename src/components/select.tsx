import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Select({
  options,
  value,
  type,
  onChange,
}: {
  options: string[];
  value: string;
  type: string;
  onChange: (value: string) => void;
}) {
  return (
    <ShadcnSelect onValueChange={onChange} value={value}>
      <SelectTrigger className=" min-w-[100px]">
        <SelectValue placeholder={`Select ${type}`} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, i) => (
          <SelectItem key={i} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
}

export default Select;
