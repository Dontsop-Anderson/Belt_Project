import * as React from 'react';
import Title from '../components/Title';
import BasicPopover from './Pop1';
import BasicPopover2 from './Pop2';
import { Box } from '@mui/material';
import BasicPopover3 from './Pop3';

// Generate Sales Data
    export default function Chart1() {


    return (
        <React.Fragment>
        <Title>Event Features</Title>
        <div>
            <BasicPopover />
            <Box sx={{ position: "relative", top: 5 }}><BasicPopover2 /></Box>
            <Box sx={{ position: "relative", top: 10 }}><BasicPopover3 /></Box>
        </div>
        </React.Fragment>
    );
}