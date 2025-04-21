var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22-23', '24-25', '26-29', '30-34', '35-49', '50-64', '65'],
        datasets: [{
            label: 'Total alcoholic drinks consumed',
            data: [3.9, 8.5, 18.1, 29.2, 40.1, 49.3, 58.7,64.6, 69.7, 83.2, 84.2, 83.1, 80.7, 77.5, 75.0, 67.2, 49.3],
            backgroundColor: [
                '#ff0800'
            ]
        },
        {
            label: 'Weeks per year in which alcohol was consumed',
            data: [3, 6, 5, 6, 10, 13, 24, 36, 48, 52, 52, 52, ,52, 52, 52, 52, 52],
            backgroundColor: [
                '#FFA500'
            ],
        }
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Consumption of alcohol by age and frequency',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Use quantity increased until legal age, then decreased into old age, while weeks of use rose until leveling out to every week upon reaching legal age.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});