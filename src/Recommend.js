import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommend = ({ city }) => {
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=467056bta9bca10b1ob3b3c4101a5b4f&units=metric`);
        const forecast = response.data.daily.slice(0, 6); // Get the next 6 days forecast

        let totalWindSpeed = 0;
        let clearDays = 0;

        forecast.forEach(day => {
          totalWindSpeed += day.wind.speed;
          if (day.condition.description === 'sky is clear') {
            clearDays += 1;
          }
        });

        const averageWindSpeed = totalWindSpeed / 6;

        let recommendationMessage = '';
        if (clearDays > 3) {
          recommendationMessage += '☀️ Solar Panels ';
        }
        if (averageWindSpeed > 3) {
          recommendationMessage += '🍃 Wind Turbines ';
        }

        setRecommendation(recommendationMessage);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setRecommendation('Unable to fetch weather data.');
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <p>{recommendation}</p>
    </div>
  );
};

export default Recommend;