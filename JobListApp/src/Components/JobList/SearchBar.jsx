import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Box, Chip, FormControl, InputLabel } from '@material-ui/core';
import { LocationTypes, noOfExpirence, roleSearch, salarySearch } from '../../Redux/SearchSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      margin: '1rem',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'center', // Center items horizontally for large screens
        alignItems: 'center', // Center items vertically for large screens
      },
    },
    textField: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        marginRight: theme.spacing(1),
      },
    },
    select: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 200,
      },
    },
    multiselect: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '15rem',
      },
    },
  }));
  

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

export default function SearchBar({ onSearch }) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedExp, setSelectedExp] = useState('');
  const theme = useTheme();
  const dispatch = useDispatch()
  const [locationType, setLocationType] = React.useState([]);

  const handleSearch = () => {
    onSearch(searchTerm);

  };

  useEffect(() => {
    const time=setTimeout(() => {
        dispatch(roleSearch(searchTerm))
        dispatch(salarySearch(selectedValue))
        dispatch(noOfExpirence(selectedExp))
        dispatch(LocationTypes(locationType))
    }, 500);
    return()=>{
        clearTimeout(time)
    }

  }, [searchTerm,selectedValue,selectedExp,locationType])

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setLocationType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDropDown = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleExpirence = (event) => {
    setSelectedExp(event.target.value);
  };



  return (
    <div className={classes.root} columns={{ xs: 4, sm: 8, md: 12 }}>
      <TextField
        className={classes.textField}
        variant="outlined"
        label="Search Role"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Box sx={{ m: 1, minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Minmum Base Salary</InputLabel>
         <Select
        value={selectedValue}
        onChange={handleDropDown}
        className={classes.select}
        input={<OutlinedInput />}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select an option"
      >
        <MenuItem  value="Minmum Base Salary" disabled>
          <em>Salary in USD ($)</em>
        </MenuItem>
        {
            ['0','10','20','30','40','50','60','70','80'].map((sal)=>{
                return(
                <MenuItem value={sal}>{sal}</MenuItem>
                )
            })
        }
      </Select>
      </FormControl>
      </Box>
      <Box sx={{ m: 1, minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Minimum Expirence</InputLabel>
         <Select
        value={selectedExp}
        onChange={handleExpirence}
        className={classes.select}
        input={<OutlinedInput />}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select an option"
      >
        <MenuItem  value="Expirence" disabled>
          <em>Expirence</em>
        </MenuItem>
        {
            ['0','1','2','3','4','5','6','7','8','10','11','12','13','14','15'].map((exp)=>{
                return(
                <MenuItem value={exp}>{exp}</MenuItem>
                )
            })
        }
      </Select>
      </FormControl>
      </Box>
      <Box sx={{ m: 1, minWidth: 120 }}>
      <FormControl fullWidth className={classes.multiselect} sx={{ m: 1, Width:300, }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={locationType}
          onChange={handleChange1}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {['remote','Hybrid','delhi ncr'].map((name) => (
            <MenuItem
              key={name}
              value={name}
            //   style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Box>
    </div>
  );
}
