import * as React from "react";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

export default function Orders1() {
    return (
        <React.Fragment>
        <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Message</InputLabel>
            <FilledInput id="filled-adornment-amount" />
            </FormControl>
            <Button
            type="submit"
            h
            variant="contained"
            sx={{ position: "relative", left: 7 }}
            >
                Send
            </Button>
        </div>
        </React.Fragment>
    );
}
