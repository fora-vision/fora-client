// Импортируем необходимые компоненты из chart.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { P } from '../typographic';
import { PureWrapper } from '../wrappers';

// Регистрируем компоненты ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

// Создаем стилизованный обертку
const Wrapper = styled(PureWrapper)`
    background: rgba(245, 245, 245, 0.08);
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

// Данные в минутах
const durationsInMinutes = [35, 95, 75, 55, 0, 80, 70];

// Функция для преобразования минут в формат `чч:мм`
function formatMinutesToHoursMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
}

// Формируем данные с форматированными ярлыками для оси Y
const data = {
    labels: ['09.05', '09.05', '09.05', '09.05', '11.05', '13.05', '14.05'],
    datasets: [
        {
            label: '',
            data: durationsInMinutes,
            backgroundColor: [
                '#959595',
                '#959595',
                '#959595',
                '#959595',
                '#959595',
                '#959595',
                'rgba(255, 206, 86, 1)'
            ],
            borderRadius: 5
        }
    ]
};

// Опции для отображения графика
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
                    const value = tooltipItem.raw;
                    return `Длительность тренировки: ${formatMinutesToHoursMinutes(value)}`;
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
                    return formatMinutesToHoursMinutes(value);
                }
            }
        }
    }
};

// Создаем график как компонент
function TrainingDurationChart() {
    return (
        <Wrapper>
            <P fontWeight={700}>Длительность тренировок по дням</P>
            <div style={{ width: '100%', height: '354px' }}>
                <Bar data={data} options={options} />
            </div>
        </Wrapper>
    );
}

export default TrainingDurationChart;
