// src/components/moodInput.jsx
import React, { useState } from 'react';
import { db } from '../context/firebase';
import { collection, addDoc } from 'firebase/firestore';

const MoodInput = () => {
  const [mood, setMood] = useState('');

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    if (mood !== '') {
      try {
        await addDoc(collection(db, 'moods'), {
          mood: mood,
          timestamp: new Date(),
        });
        setMood('');
        alert('Mood logged successfully!');
      } catch (err) {
        console.error('Error adding mood entry: ', err);
      }
    } else {
      alert('Please enter a mood!');
    }
  };

  return (
    <div>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleMoodSubmit}>
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Enter your mood"
          required
        />
        <button type="submit">Log Mood</button>
      </form>
    </div>
  );
};

export default MoodInput;
