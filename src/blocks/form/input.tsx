import { FormField } from "@/types/blocks/form";
import { ControllerRenderProps } from "react-hook-form";
import { Input as InputComponent } from "@/components/ui/input";

export function Input({
  field,
  formField,
  data,
}: {
  field: FormField;
  formField: ControllerRenderProps<Record<string, unknown>, string>;
  data?: any;
}) {
  return (
    <InputComponent
      value={formField.value as string}
      onChange={formField.onChange}
      type={field.type || "text"}
      placeholder={field.placeholder}
      className="bg-background rounded-md placeholder:text-base-content/50"
      {...field.attributes}
    />
  );
}
