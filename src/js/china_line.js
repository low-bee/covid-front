import axios from "axios";

function covertChinaCovidData(data) {
    const res = [];
    res.push([])
    res.push([])
    res.push([])
    res.push([])
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        res[0].push(item.now_confirm);
        res[1].push(item.local_confirm);
        res[2].push(item.imported_case);
        res[3].push(item.date);
    }
    console.log(res)
    return res;
}

const getChinaStatus = async function(){
    let chinaLine;
    await axios.get("http://127.0.0.1:8081/china/status", {
        params: {
            country: 'china'
        }
    }).then(response => {
        if (response.status === 200){
            // 二维[]
            chinaLine = covertChinaCovidData(response.data)
        }
    })
    const option = {
        // title: {
        //     text: '中国新冠疫情数据'
        // },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['现存确诊人数', '本地确诊人数(含输入病例)', '境外输入样例总数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: chinaLine[3]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '现存确诊人数',
                type: 'line',
                stack: 'Total',
                data: chinaLine[0]
            },
            {
                name: '本地确诊人数(含输入病例)',
                type: 'line',
                stack: 'Total',
                data: chinaLine[1]
            },
            {
                name: '境外输入样例总数',
                type: 'line',
                stack: 'Total',
                data: chinaLine[2]
            },
            // {
            //     name: '死亡率',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [150, 232, 201, 154, 190, 330, 410]
            // },
            // {
            //     name: '治愈率',
            //     type: 'line',
            //     stack: 'Total',
            //     data: [150, 232, 201, 154, 190, 330, 410]
            // },
        ]
    };

    return option
}
export default getChinaStatus();
