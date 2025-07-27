
import { Grid, Paper, Typography, Box } from '@mui/material';
import PieChart from '../Chart/PieChart';

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Total Balance</Typography>
            <Typography variant="h5" color="green">$8,430.00</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Income</Typography>
            <Typography variant="h5" color="blue">$3,200.00</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Expenses</Typography>
            <Typography variant="h5" color="red">$1,850.00</Typography>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Spending by Category</Typography>
            <PieChart />
          </Paper>
        </Grid>

        {/* Recent Transactions
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Recent Transactions</Typography>
            <TransactionsList />
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Dashboard;
