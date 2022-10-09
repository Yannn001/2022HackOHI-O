import * as React from 'react';
import "./Event1.css";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const choices = [
  {
    value: 'yes',
    label: 'yes',
  },
  {
    value: 'no',
    label: 'no',
  },
];

const startChoices = [
  {
    value: 'Ohio union',
    label: 'Ohio union',
  },
  {
    value: '99P labs',
    label: '99P labs',
  },
];

const endChoices = [
  {
    value: 'RPAC',
    label: 'RPAC',
  },
  {
    value: 'Dreese lab',
    label: 'Dreese lab',
  },
];

function Event1({ setOpenModal}) {
  const [preferWalk, setPreferWalk] = React.useState(true);
  const [preferDrive, setPreferDrive] = React.useState(false);
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  const handleWalkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value === 'no'){
      setPreferWalk(false);
    }else if(event.target.value === 'yes'){
      setPreferWalk(true);
    }
    console.log(preferWalk)

  };
  const handleDriveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreferDrive(event.target.value);
  };
  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStart(event.target.value);
  };
  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(event.target.value);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          {/* ______________________________________________________ */}
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
         
          id="outlined-required"
          label="optional"
          defaultValue=""
          helperText="What's your OSU #ID?"
        />
        <TextField
          id="outlined-select-preferWalk"
          select
          label="Select"
          value={preferWalk}
          onChange={handleWalkChange}
          helperText="Do you prefer to walk?"
        >
          {choices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-preferDrive"
          select
          label="Select"
          value={preferDrive}
          onChange={handleDriveChange}
          helperText="Do you prefer to drive?"
        >
          {choices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-start"
          select
          label="Select"
          value={start}
          onChange={handleStartChange}
          helperText="What is your starting point?"
        >
          {startChoices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-end"
          select
          label="Select"
          value={end}
          onChange={handleEndChange}
          helperText="Where is your destination?"
        >
          {endChoices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

    </Box>
          {/* ______________________________________________________ */}
          {/* <h1>Are You Sure You Want to Continue?</h1> */}
          </div>
        <div className="body">
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Event1;