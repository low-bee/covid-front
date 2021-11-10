import axios from "axios";

function convertUSAData(data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        res.push({
            name: data[i].name_map,
            // value: [data[i].confirm, data[i].dead, data[i].heal]
            value: [
                {name: "confirm", value: data[i].confirm},
                {name: "dead", value: data[i].dead,visualMap: false},
                {name: "heal", value: data[i].heal,visualMap: false},
            ]
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

    const mapOption = {
        backgroundColor: 'rgb(238,238,238)',
        title: {
            text: '美国各州疫情数据',
            subtext: 'Gradient Color, Shadow, Click Zoom',
            left: "left"
        },
        // 设置鼠标注意显示
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let toolTipHtml = ''
                for (let i = 0; i < usaData.length; i++) {
                    if (params.name === usaData[i].name) {
                        toolTipHtml += usaData[i].name + '<br>'
                        for (let j = 0; j < usaData[i].value.length; j++) {
                            toolTipHtml += "\t" + usaData[i].value[j].name + ':' + usaData[i].value[j].value + "<br>"
                        }
                    }
                }
                return toolTipHtml;
            }
        },

        visualMap: [
            {
                type: 'continuous',
                left: 'right',
                min: 50000,
                max: 4000000,
                inRange: {
                    // prettier-ignore
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            }
        ],

        series: [
            {
                id: 'confirm',
                type: 'map',
                roam: true,
                map: 'usa',
                animationDurationUpdate: 1000,
                universalTransition: true,
                data: usaData.map(item => {
                    return {
                        name: item.name,
                        value: item.value[0].value
                    }
                })
            }
        ]
    }

    return mapOption;
}

export default fun1();
