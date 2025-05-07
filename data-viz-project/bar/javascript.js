var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'],
        datasets: [{
            label: 'Home Runs with the Nationals',
            data: [22, 20, 13, 42, 24, 29],
            backgroundColor: [
                '#AB0003'
            ]
        },
        {
            label: 'Home Runs with the Phillies',
            data: [35, 13, 35, 18, 21, 30],
            backgroundColor: [
                '#E81828'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Comparing Harper Homers Between Nats and Phillies ',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'His debut season with the Phillies started strong, but his performance has declined over time.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});