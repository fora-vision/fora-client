import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { P } from '../typographic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { PureWrapper } from '../wrappers';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Wrapper = styled(PureWrapper)`
    background: rgba(245, 245, 245, 0.08);
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const StyledSelect = styled.select`
    margin-top: 10px;
    background-color: #1B1A18;
    color: white;
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
    width: 150px;

    option {
        background-color: #fff;
        color: #242321;
    }
`;

function formatTimeFromMinutes(minutes) {
    const totalSeconds = Math.round(minutes * 60);
    const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${minutesLeft.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function TrainingDurationChart({ workoutsDays }) {
    const [period, setPeriod] = useState('180'); // По умолчанию - 6 месяцев
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    // Определение настроек графика
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem) {
                        return `Длительность тренировки: ${formatTimeFromMinutes(tooltipItem.raw)}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0)'
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white',
                    callback: function (value) {
                        return formatTimeFromMinutes(value);
                    }
                }
            }
        }
    };

    useEffect(() => {
        const lastDays = getLastDays(period);
        updateChartData(lastDays);
    }, [period, workoutsDays]); // eslint-disable-line 

    function getLastDays(days) {
        const dates = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        for (let i = 0; i < days; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            dates.push(date);
        }
        return dates.reverse();
    }

    function updateChartData(lastDays) {
        const filteredWorkouts = workoutsDays.filter(workout => {
            const workoutDate = new Date(workout.timestamp * 1000);
            workoutDate.setHours(0, 0, 0, 0);
            return lastDays.some(date => date.getTime() === workoutDate.getTime());
        });

        const dataForChart = lastDays.map(date => {
            const workout = filteredWorkouts.find(w => {
                const workoutDate = new Date(w.timestamp * 1000);
                workoutDate.setHours(0, 0, 0, 0);
                return workoutDate.getTime() === date.getTime();
            });
            return workout ? workout.total_time / 60 : 0;
        });

        setChartData({
            labels: lastDays.map(date => `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`),
            datasets: [
                {
                    label: '',
                    data: dataForChart,
                    backgroundColor: [
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderRadius: 5
                }
            ]
        });
    }

    return (
        <Wrapper>
            <div>
                <P fontWeight={700}>Длительность тренировок по дням</P>
                <StyledSelect value={period} onChange={e => setPeriod(e.target.value)}>
                    <option value="180">6 месяцев</option>
                    <option value="90">3 месяца</option>
                    <option value="30">1 месяц</option>
                    <option value="14">2 недели</option>
                </StyledSelect>
            </div>
            <div style={{ width: '100%', height: '354px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </Wrapper>
    );
}


export default TrainingDurationChart;
