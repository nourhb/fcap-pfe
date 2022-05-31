
import { Pie, defaults } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
Chart.register(ArcElement, Tooltip, Legend);

function SoldViaPromotedListing() {
    const [record, setRecord] = useState([]);

    const loadData = async () => {

        await axios.get(`http://localhost:5000/api/v1/ebay/SoldViaPromotedListing`)
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
            <Pie
                data={{
                    labels: ['Yes', 'No',],
                    datasets: [
                        {
                            label: 'Sold Via Promoted Listing',
                            data: [
                                record[0],
                                record[1],
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                                'rgba(68, 33, 41, 1)',
                                'rgba(54, 162, 235, 1)',
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

export default SoldViaPromotedListing;