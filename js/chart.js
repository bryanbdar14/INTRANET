var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["20172", "20181", "20182","","","","","","",""],
        datasets: [{
            label: 'Promedio',
            data: [12.087, 12.838, 11.829],
            backgroundColor: [
                '#bfc2cd',
                '#bfc2cd',
                '#bfc2cd',
            ],
            hoverBackgroundColor:[
                '#e8403f',
                '#e8403f',
                '#e8403f',
            ],
        }],
    },
    options: {
        responsive:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                },
            }],
        },
    },
});