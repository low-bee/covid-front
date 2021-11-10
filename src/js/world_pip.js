import axios from "axios";

function convertContinentData(data) {
    let continentData = [];
    continentData.push(["continent"])
    continentData.push(["confirm"])
    continentData.push(["dead"])
    continentData.push(["heal"])
    data.map(
        continent => {
            continentData[0].push(continent.continent)
            continentData[1].push(continent.confirm)
            continentData[2].push(continent.dead)
            continentData[3].push(continent.heal)
        }
    );
    console.log(continentData)
    return continentData;

}

const getContinent = async function() {
    let continentData ;
    await axios.get("http://127.0.0.1:8081/homework/world/continent").then(
        response => {
            if (response.status === 200){
                continentData = convertContinentData(response.data)
            }
        }
    )

    const pieOption = {
        backgroundColor: 'rgb(238,238,238)',
        legend: {},
        tooltip: {
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        dataset: {
            source: continentData,
        },
        series: [
            {
                name: '北美洲',
                type: 'pie',
                radius: '20%',
                center: ['20%', '33%'],
                encode: {
                    itemName: 'continent',
                    value: '北美洲'
                }
                // No encode specified, by default, it is '北美洲'.
            },
            {   name:'亚洲',
                type: 'pie',
                radius: '20%',
                center: ['50%', '33%'],
                encode: {
                    itemName: 'continent',
                    value: '亚洲'
                }
            },

            {   name:'南美洲',
                type: 'pie',
                radius: '20%',
                center: ['80%', '33%'],
                encode: {
                    itemName: 'continent',
                    value: '南美洲'
                }
            },
            {
                name:'欧洲',
                type: 'pie',
                radius: '20%',
                center: ['20%', '75%'],
                encode: {
                    itemName: 'continent',
                    value: '欧洲'
                }
            },
            {   name:'非洲',
                type: 'pie',
                radius: '20%',
                center: ['40%', '75%'],
                encode: {
                    itemName: 'continent',
                    value: '非洲'
                }
            },
            {
                name:'大洋洲',
                type: 'pie',
                radius: '20%',
                center: ['60%', '75%'],
                encode: {
                    itemName: 'continent',
                    value: '大洋洲'
                }
            },
            {
                name:'其他',
                type: 'pie',
                radius: '20%',
                center: ['80%', '75%'],
                encode: {
                    itemName: 'continent',
                    value: '其他'
                }
            }
        ]
    }

    return pieOption
}

export default getContinent();
