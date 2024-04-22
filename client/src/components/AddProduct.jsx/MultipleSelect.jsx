import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function MultipleSelect({ options, placeholder,selectedOptions, setSelectedOptions }) {
  const theme = useTheme();
  const [] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const selectedObjects = options.filter((option) =>
      value.includes(option._id)
    );

    setSelectedOptions(selectedObjects);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}  size='small'>
        <InputLabel id="demo-multiple-name-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedOptions.map((option) => option._id)}
          onChange={handleChange}
          input={<OutlinedInput label={placeholder} />}
          MenuProps={MenuProps}
         
        >
          {options.map(({ _id, title }) => (
            <MenuItem
              key={_id}
              value={_id}
              style={getStyles(_id, selectedOptions, theme)}
            >
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
