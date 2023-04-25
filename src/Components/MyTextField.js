import { TextField } from '@material-ui/core';

const MyTextField = (props) => {
    return (
        <TextField value={props.value}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            size="small"
            onChange={props.handleChange}
        />
    );
}

export default MyTextField;