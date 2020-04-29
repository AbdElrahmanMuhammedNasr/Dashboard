var ctx = $('#LineChart');


var data ={
    labels : [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets : [
        {
            label:'abdo',
            data: [20,40,60,10,62,18,20,30,60,10,62,80],
            backgroundColor: "red",
            borderColor: "red",
            fill:false,
            lineTension: 0.3,
            pointRedis: 1
        }
    ]
};
var options ={
    title:{
        display: false,
    
    },
    legend:{
        display:false
    }
}




var chart = new Chart(ctx, {
    type:'line',
    data: data,
    options:options

})

/***************************************************************************** */

var ctx2 = $('#BarChart');

var data1 ={
    labels : ['Jan','Feb','Mar','Abr','May','Jun','Jul',
                'Aug','Sep','Oct','Nov','Dec'],
    datasets : [
        {
            label:'abdo',
            data: [50,40,60,62,50,35,60,62,80,60,62,80],
            backgroundColor:[
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "red",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "red",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "rgba(10,20,30,0.3)",
                "red",
                "rgba(10,20,30,0.3)",
                "red",
              

            ],
            borderColor: [
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",
                "rgba(10,20,30,1)",

            ],
            borderWidth: 1,
            

        }
    ]
};
var options1 ={
    title:{
        display: false,
    
    },
    legend:{
        display:false
    }
}


var chart = new Chart(ctx2, {
    type:'bar',
    data: data1,
    options:options1

})
/******************************************************** */
var ctx3 = $('#PieChart');

var data3 ={
    labels : ['jan','feb','mar','apr'],
    datasets:[
        {
            label : 'Abdo',
            data : [10,20,30,40],
            backgroundColor: ['red','orange','gold','black'],
            borderColor : ['black','black','black','black'],
            borderWidth : [1,1,1,1]

        }
    ]
};
var options3 ={
    title:{
        display: false,
    
    },
    legend:{
        display:false
    }
}



var chart = new Chart(ctx3,{
    type:'doughnut',
    data:data3,
    options: options3
})