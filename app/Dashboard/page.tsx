import React from 'react'
import { Box,Grid2,Paper } from '@mui/material'
import Styles from './Dashboard.module.scss'
const Dashboard = () => {

  return (
    <main>
    <div>
    Dashboard
    </div>
    <Box>
        <Grid2 container gap={2} className={Styles.topcardContainer}>
            <Grid2>
                <Paper className={Styles.datacard}>xs=4</Paper>
            </Grid2>
            <Grid2>
                <Paper className={Styles.datacard}>xs=4</Paper>
            </Grid2>
            <Grid2>
                <Paper className={Styles.datacard}>xs=4</Paper>
            </Grid2>
        </Grid2>
        <Grid2  marginY={2}>
            <Paper className={Styles.datacard}>xs=12</Paper>
        </Grid2>
    </Box>
    </main>

  )

}

export default Dashboard
