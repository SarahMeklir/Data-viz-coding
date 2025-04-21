var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22-23', '24-25', '26-29', '30-34', '35-49', '50-64', '65'],
        datasets: [{
            label: 'Percentage of age group using marijuana',
            data: [1.1, 3.4, 8.7, 14.5, 22.5, 28, 33.7, 33.4, 34, 33, 28.4, 24.9, 20.8, 16.4, 10.4, 7.3, 1.2],
            fill: true,
            borderColor: 'rgba(255, 8, 0)',
            backgroundColor: 'rgba(255, 8, 0, 0.1)',
            tension: 0.1},
        {
            label: 'Median number of times marijuana was used',
            data: [4, 15, 24, 25, 30, 36, 52, 60, 60, 52, 52, 60, 52, 72, 48, 52, 36],
            fill: true,
            borderColor: 'rgba(255, 165, 0)',
            backgroundColor: 'rgba(255, 165, 0, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Yearly marijuana use by age group',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Marijuana use frequency spiked sharply in the 30–34-year age group'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});