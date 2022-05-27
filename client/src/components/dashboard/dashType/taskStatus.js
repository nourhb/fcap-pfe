import { Doughnut, defaults } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";

Chart.register(ArcElement, Tooltip, Legend);

function TaskProgress () {
    const [record, setRecord] = useState([]);

    const loadData = async () => {

        await axios.get(`http://localhost:5000/api/v1/todo/dash`)
            .then((res) => {
                const result = res.data
                console.log(result);
                setRecord(result);
            });
    };

    useEffect(() => {
        loadData();
    }, []);


    return (
        <div style={{ backgroundColor: "white" }}>
            <Doughnut
                data={{
                    labels: ['checked', 'started', 'paused', 'done'],
                    datasets: [
                        {
                            label: 'nombret des tasks par status',
                            data: [
                                record[0],
                                record[1],
                                record[2],
                                record[3],
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                            ],
                            borderWidth: 1,
                        }
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    )
}

export default TaskProgress;