// import Mock from 'mockjs';
import Mock from 'mockjs';
let List: Array<any> = []
const count = 100
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        timestamp: +Mock.Random.date('T'),
        author: '@first',
        reviewer: '@first',
        title: '@title(5, 10)',
        content_short: 'mock data',
        forecast: '@float(0, 100, 2, 2)',
        importance: '@integer(1, 3)',
        'type|1': ['china', 'usa', 'japan', 'france'],
        'status|1': ['published', 'draft'],
        display_time: '@datetime',
        comment_disabled: true,
        pageviews: '@integer(300, 5000)',
        platforms: ['a-platform']
    }))
}

export const dataSource = (type: string) => {
    const page = 1
    const limit = 5
    let mockList = List.filter(item => {
        if (type && item.type !== type) return false
        return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return pageList
}




