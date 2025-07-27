import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  InputAdornment,
} from '@mui/material';
import { postFrom, getExpenseFrom ,putExpenseForm} from '../../api';
import { SquarePlus } from 'lucide-react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';

const initialExpenseSplit = [
  { id: 0, label: 'Groceries', value: 0 },
  { id: 1, label: 'Utilities', value: 0 },
  { id: 2, label: 'Entertainment', value: 0 },
  { id: 3, label: 'Transportation', value: 0 },
];

function ExpenseForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [currentMonth, setCurrentMonth] = useState<any>();
  const [totalIncome, setTotalIncome] = useState('');
  const [expenseSplit, setExpenseSplit] = useState(initialExpenseSplit);
  const [otherExpenses, setOtherExpenses] = useState([{ name: '', value: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [formId,setformID] = useState<any>('');
  const ContactId = queryParams.get('ContactId');
  const month = queryParams.get('month');

  const userData = localStorage.getItem('user');
  const localUserId = userData ? JSON.parse(userData).id : null;

  useEffect(() => {
    const fetchExpenses = async () => {
      if (!ContactId || !month) return;

      try {
        setLoading(true);
        const decodedMonth = decodeURIComponent(month);
        const response = await getExpenseFrom(ContactId, decodedMonth);
        const data = response.data.expense;
          setTotalIncome(data.totalIncome?.toString() || '');
          setExpenseSplit(data.expenseSplit || initialExpenseSplit);
          setOtherExpenses(data.other || [{ name: '', value: '' }]);
          setCurrentMonth(new Date(data.currentMonth)); // e.g. "July 2025 01"
          setformID(data?._id)
      } catch (err: any) {
        console.error('Failed to fetch expenses:', err);
        setError('Failed to fetch existing data.');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const handleSplitChange = (id: number, newValue: string) => {
    const val = newValue.replace(/[^0-9.]/g, '');
    setExpenseSplit((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: val === '' ? 0 : parseFloat(val) } : item
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ContactId: ContactId || localUserId,
      currentMonth: currentMonth ? format(currentMonth, 'MMMM yyyy') : null,
      totalIncome: parseFloat(totalIncome),
      expenseSplit: [...expenseSplit],
      other: otherExpenses
        .filter((row) => row.name.trim() !== '')
        .map((row) => ({
          name: row.name,
          value: parseFloat(row.value) || 0,
        })),
    };
    try {
      let response :any = {}
      if (!ContactId || !month) {
       response = await postFrom(payload);
      }
      else {
         response = await putExpenseForm(formId,payload);
      }
      alert(response.data.message || 'Expense saved successfully!');
    } catch (error) {
      alert('Expense not saved.');
      console.error(error);
    }
  };

  const addRow = () => {
    setOtherExpenses([...otherExpenses, { name: '', value: '' }]);
  };

  const onChangeRow = (index: number, field: 'name' | 'value', value: any) => {
    const updated = [...otherExpenses];
    updated[index][field] = value;
    setOtherExpenses(updated);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 480,
        mx: 'auto',
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Monthly Expense Form
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          label="Expense of Month"
          maxDate={new Date()}
          value={currentMonth}
          onChange={(newValue) => setCurrentMonth(newValue)}
        />
      </LocalizationProvider>

      <TextField
        label="Total Income of the Month"
        type="number"
        margin="normal"
        fullWidth
        value={totalIncome}
        onChange={(e:any) => setTotalIncome(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          inputProps: { min: 0, step: '0.01' },
        }}
        required
      />

      <Typography variant="h6" mt={3} mb={1}>
        Expenses Split
      </Typography>

      {expenseSplit.map(({ id, label, value }) => (
        <TextField
          key={id}
          label={label}
          type="number"
          margin="normal"
          fullWidth
          value={value}
          onChange={(e:any) => handleSplitChange(id, e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
            inputProps: { min: 0, step: '0.01' },
          }}
        />
      ))}

      <Typography className="Other-grid" variant="h6" mt={3} mb={1}>
        Other Expenses
        <SquarePlus style={{ cursor: 'pointer' }} onClick={addRow} />
      </Typography>

      {otherExpenses.map((row, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 1 }}>
          <Grid item xs={7}>
            <TextField
              label="Expense Name"
              fullWidth
              value={row.name}
              onChange={(e:any) => onChangeRow(index, 'name', e.target.value)}
              placeholder="Custom category"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Amount"
              type="number"
              fullWidth
              value={row.value}
              onChange={(e:any) => onChangeRow(index, 'value', e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                inputProps: { min: 0, step: '0.01' },
              }}
            />
          </Grid>
        </Grid>
      ))}

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
        Submit
      </Button>

      <style>
        {`
          .Other-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </Box>
  );
}

export default ExpenseForm;
