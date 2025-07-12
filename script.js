document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('timeAllocationChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['도입 (10분)', '전개 (30분)', '정리 및 차시 예고 (5분)'],
            datasets: [{
                label: '수업 시간 배분',
                data: [10, 30, 5],
                backgroundColor: [
                    '#00A1E4', 
                    '#3B77BC', 
                    '#002D5B'
                ],
                borderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                              return label.join(' ');
                            } else {
                              return label;
                            }
                        }
                    }
                }
            }
        }
    });
});