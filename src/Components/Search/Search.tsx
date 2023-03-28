

import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Search = (() => {


    return <>
    <TextField fullWidth id="standard-basic" label="Search" variant="standard" />
    <IconButton>
    <SearchOutlinedIcon />
    </IconButton>
    </>

})