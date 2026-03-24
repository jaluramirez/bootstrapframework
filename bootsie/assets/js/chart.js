document.addEventListener("DOMContentLoaded", function () {

    const ctx = document.getElementById('trendsChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                '0','1','2','3','4','5','6','7','8','9',
                '10','11','12','13','14','15','16','17','18','19','20','21','22'
            ],
            datasets: [{
                label: 'Today',
                data: [
                    5, 8, 11, 14, 20, 30, 40, 55, 50, 42,
                    38, 28, 20, 32, 38, 35, 32, 30, 25, 22, 18, 15, 10
                ],
                borderColor: '#3751FF',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(55, 81, 255, 0.1)',
                pointRadius: 4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#3751FF'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: { grid: { color: '#e5e5e5' } }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

});
