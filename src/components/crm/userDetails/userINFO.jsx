import { Box, Grid } from '@mui/material'
import React from 'react'
import LastSynced from '../../../layout/LastSynced'
import UserInfo from './userINFO/userInfo'
import WalletInfo from './userINFO/walletInfo'
import TotalInfo from './userINFO/totalInfo'

export default function UserINFO() {
    return (
        <Box>
            <LastSynced heading={'User info'} />
            <Grid container sx={{ p: { sx: 2, md: 4 } }} spacing={2}>
                <Grid item xs={12} md={5}>
                    <UserInfo />
                </Grid>
                <Grid item xs={12} md={7}>
                    <WalletInfo />
                </Grid>
                <Grid item xs={12}>
                    <TotalInfo />
                </Grid>
            </Grid>
        </Box>
    )
}
