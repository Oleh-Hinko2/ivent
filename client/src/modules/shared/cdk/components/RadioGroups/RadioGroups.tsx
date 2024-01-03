import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { BaseSyntheticEvent } from "react";

interface Groups {
  label: string;
  value: string;
  id: string;
}

interface RadioGroupsProps {
  title: string;
  groups: Groups[];
  onChange: (e: BaseSyntheticEvent) => void;
  name: string;
  row?: boolean;
  value: string;
}

const RadioGroups = ({
  title,
  groups,
  onChange,
  row,
  name,
  value,
}: RadioGroupsProps) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{title}</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="demo-row-radio-buttons-group-label"
        onChange={onChange}
        name={name}
        value={value}
      >
        {groups.map((group) => (
          <FormControlLabel
            value={group.value}
            control={<Radio />}
            label={group.label}
            key={group.id}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroups;
