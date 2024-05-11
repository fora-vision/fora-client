import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { P } from '../typographic';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import { PureWrapper } from '../wrappers';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const Wrapper = styled(PureWrapper)`
    background: rgba(245, 245, 245, 0.08);
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 400px;
    width: calc(316px - 48px);
`;


function PositionChangeChart({ sortedUsers, myUser }) {
    const myIndex = sortedUsers.findIndex(user => user.name === myUser.name) + 1;

    const dates = Array.from({ length: 4 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (3 - i));
        return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}`;
    });

    const topUsers = sortedUsers.slice(0, 5);
    if (!topUsers.find(user => user.name === myUser.name)) {
        topUsers.pop();
        topUsers.push(myUser);
    }

    const datasets = topUsers.map((user, index) => ({
        label: user.name === myUser.name ? `Вы (${myIndex})` : `${user.name} (${index + 1})`,
        data: Array.from({ length: 5 }, (_, idx) => {
            if (idx === 3) {
                return user.name === myUser.name ? myIndex : index + 1;
            }
            return Math.floor(Math.random() * 25);
        }),
        borderColor: ['#F6D658', '#5FB768', '#C84848', '#F8961E'][index % 4],
        backgroundColor: ['#F6D658', '#5FB768', '#C84848', '#F8961E'][index % 4],
        pointRadius: 3,
        pointHoverRadius: 5,
        borderWidth: user.name === myUser.name ? 3 : 1
    }));

    const data = {
        labels: dates,
        datasets
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    color: 'white'
                }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                reverse: false,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white'
                }
            }
        }
    };

    return (
        <Wrapper>
            <P fontWeight={700}>Изменение позиции</P>
            <div style={{ width: '100%', height: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </Wrapper>
    );
}

export default PositionChangeChart;
