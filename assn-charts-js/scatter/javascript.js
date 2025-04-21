var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 3.9, y: 3.0},
                ],
                label: "12",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 8.5, y: 6},
                ],
                label: "13",
                borderColor: "#3cba9f",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 18.1, y: 5},
                ],
                label: "14",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 29.9, y: 6},
                ],
                label: "15",
                borderColor: "#800080",
                backgroundColor:"rgb(128,0,128,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 40.1, y: 10},
                ],
                label: "16",
                borderColor: "#e80202",
                backgroundColor:"rgb(232,2,2,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 49.3, y: 13},
                ],
                label: "17",
                borderColor: "#020ae8",
                backgroundColor:"rgb(2,10,232,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 58.7, y: 24},
                ],
                label: "18",
                borderColor: "#fc2deb",
                backgroundColor:"rgb(252,45,235,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 64.6, y: 36},
                ],
                label: "19",
                borderColor: "#15f700",
                backgroundColor:"rgb(21,247,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 69.7, y: 48},
                ],
                label: "20",
                borderColor: "#09690e",
                backgroundColor:"rgb(9,105,14,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 83.2, y: 52},
                ],
                label: "21",
                borderColor: "#ffee00",
                backgroundColor:"rgb(255,238,0,0.1)",
                borderWidth:2,
                
              }
            ] 
          },
          options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
               title: {
                  display: true,
                  text: 'Alcohol use by age',
                  font: {
                    size: 18
                  }
                },
              subtitle: {
                 display: true,
                  text: 'While alcohol use and frequency of use goes up with age, significant numbers of children and underage adults consume alcohol regularly'
              }
          }, 
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Alcohol frequency'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Alcohol use'
                  }
              }
            }
          }
        });