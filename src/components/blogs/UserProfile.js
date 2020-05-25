import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";

const UserProfile = () => {
    const [fields, setFields] = useState([{ value: null }]);

    const handleChange = (i, event) => {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    };
    const handleAdd = () => {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    };
    const handleRemove = (i) => {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    };
    const handleSubmit =(event) =>{
        alert('A name was submitted: ' + values);
        event.preventDefault();
    }
    return (
        <div>
            <h3>Here the user profile</h3>
            {fields.map((field, index) => {
                return (
                    <Box key={index} pt={2}>
                        <form
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Box display={"inline-block"} mr={2}>
                                <TextField
                                    type="text"
                                    placeholder="username"
                                    size="small"
                                    value={field.value || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    label="user name"
                                    variant="outlined"
                                />
                            </Box>
                            {/* <Box display={"inline-block"} mr={2}>
                                <TextField
                                    type="text"
                                    placeholder="email id"
                                    size="small"
                                    value={field.value || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    label="email id"
                                    variant="outlined"
                                />
                            </Box> */}
                            <button onClick={() => handleRemove(index)}>
                                X
                            </button>
                            <input type="submit" value="Submit" />
                        </form>
                    </Box>
                );
            })}
            <Box pt={2}>
                <Button color="primary" onClick={() => handleAdd()}>
                    Add Field
                </Button>
            </Box>
        </div>
    );
};
export default UserProfile;
