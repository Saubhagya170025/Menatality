// src/components/moodDashboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../context/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const MoodDashboard = () => {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'moods'), (snapshot) => {
      const moods = snapshot.docs.map(doc => doc.data());
      setMoodData(moods);
    });
    return () => unsubscribe();
  }, []);

  const moodCounts = moodData.reduce((acc, { mood }) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: 'Mood Frequency',
        data: Object.values(moodCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Mood Dashboard</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default MoodDashboard;
