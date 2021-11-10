import axios from "axios";

function convertUSAData(data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        res.push({
            name: data[i].name_map,
            value: data[i].confirm
        })
    }
    return res;
}

const fun1 = async function () {
    let usaData = []
    await axios.get("http://127.0.0.1:8081/region", {
        params: {
            country: "美国"
        }
    }).then(response => {
        if (response.status === 200) {
            // 执行该回调函数
            usaData = convertUSAData(response.data)
            usaData.sort(function (a, b) {
                return a.value - b.value;
            });
        }

    })

    const barOption = {

        backgroundColor: 'rgb(238,238,238)',
        title: {
            text:  '美国各州疫情数据',
            subtext: 'Gradient Color, Shadow, Click Zoom',
            left: "left"
        },

        legend: {},
        // 设置鼠标注意显示
        tooltip: {
            trigger: 'axis',
        },
        // 设置缩放显示
        dataZoom: [
            {
                type: 'inside'
            }
        ],
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                rotate: 30
            },
            data: usaData.map(function (item) {
                return item.name;
            })
        },
        animationDurationUpdate: 1000,
        series: {
            type: 'bar',
            id: 'population',
            data: usaData.map(function (item) {
                return item.value;
            }),
            universalTransition: true
        }
    };

    return barOption;
}

export default fun1();
