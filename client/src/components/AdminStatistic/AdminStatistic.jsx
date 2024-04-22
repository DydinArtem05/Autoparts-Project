import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AuthHttp } from '../../http/AuthHttp';
import { Box } from '@mui/material';

export function AdminStatistic() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await AuthHttp.getUserStatistic();
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = userData.map(item => ({
    name: new Date(item.date).toLocaleDateString(), // Преобразование даты в строку
    users: item.count,
  }));

  return (
    <Box  sx={{ paddingTop: '150px', width: "50vw", height: "80vh", margin: '0 auto' }}>
        <h4>Регистрация пользователей</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </Box>
  );
}