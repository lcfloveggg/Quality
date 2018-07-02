/**
 * Created by 唯改挚爱 on 2018/6/29.
 */
//概况
{
    // 基于准备好的dom，初始化echarts实例
    var dom = document.getElementById('main');
    var myChart = echarts.init(dom);

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '系统概况',
            left: 'center'
        },
        tooltip: {},
        color:['#2f7ed8'],
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ["数据源", "规则", "任务"]
        },
        yAxis: {

        },
        series: [{
            name: '数量（个）',
            type: 'bar',
            data: [9, 32, 44]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//数据源
{
    var dom1 = document.getElementById("Overview");
    var myChart1 = echarts.init(dom1);
    var option1 = null;
    option1 = {
        title: {
            text: '数据源概况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#005292','#0077b7','#009bdb'],
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['MySQL', 'MS SQL Server', 'Oracle']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: 100, name: 'MySQL'},
                    {value: 100, name: 'MS SQL Server'},
                    {value: 500, name: 'Oracle'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option1 && typeof option1 === "object") {
        myChart1.setOption(option1, true);
    }
}
//规则
{
    var dom2 = document.getElementById("Rule");
    var myChart2 = echarts.init(dom2);
    var option2 = null;
    option2 = {
        title: {
            text: '数据源概况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#005292','#0077b7','#009bdb','#00bfff','#24e3ff','#48ffff','#6dffff','#91ffff'],
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['MySQL', 'MS SQL Server', 'Oracle','SQL', 'MS SQL', 'Orac','My', 'SQL Server']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: 400, name: 'MySQL'},
                    {value: 300, name: 'MS SQL Server'},
                    {value: 100, name: 'Oracle'},
                    {value: 100, name: 'SQL'},
                    {value: 150, name: 'MS SQL'},
                    {value: 200, name: 'Orac'},
                    {value: 100, name: 'My'},
                    {value: 100, name: 'SQL Server'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option2 && typeof option2 === "object") {
        myChart2.setOption(option2, true);
    }
}
//任务
{
    var dom3 = document.getElementById("Task");
    var myChart3 = echarts.init(dom3);
    var option3 = null;
    option3 = {
        title: {
            text: '数据源概况',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#005292','#0077b7','#009bdb','#00bfff','#24e3ff'],
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['MySQL', 'MS SQL Server', 'Oracle','MS SQL', 'Orac']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: 100, name: 'MySQL'},
                    {value: 200, name: 'MS SQL Server'},
                    {value: 100, name: 'Oracle'},
                    {value: 200, name: 'MS SQL'},
                    {value: 500, name: 'Orac'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option3 && typeof option3 === "object") {
        myChart3.setOption(option3, true);
    }
}
