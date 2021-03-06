const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//37.549472, 126.946110
//37.552047, 126.936959
//37.550542, 126.937180

// 37.549198, 126.937770
// 37.549751, 126.943180
const shops = [
    {
        id: 1,
        lng: 37.550116,
        lat: 126.943930,
        name: 'a',
        url : "https://en.smartcity.org.tw/images/blog/Industry%20News/7-11.jpg",
        services: {
            delivery: 0,
            public: 1,
            findChild: 1,
            laundry: 1,
            usedPhone: 0,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 2,
        lng: 37.548023,
        lat: 126.941892,
        name: 'b',
        url : "https://en.smartcity.org.tw/images/blog/Industry%20News/7-11.jpg",
        services: {
            delivery: 1,
            public: 0,
            findChild: 1,
            laundry: 1,
            usedPhone: 0,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 3,
        lng: 37.548823,
        lat: 126.939467,
        name: 'c',
        url : "https://en.smartcity.org.tw/images/blog/Industry%20News/7-11.jpg",
        services: {
            delivery: 0,
            public: 0,
            findChild: 1,
            laundry: 1,
            usedPhone: 1,
            document: 1,
            print: 1,
            flight: 0
        }
    },
    {
        id: 4,
        lng: 37.550227,
        lat: 126.936077,
        name: 'd',
        url : "http://res.cloudinary.com/aceshinek/image/upload/c_fit,f_auto,h_420,w_600/v1515630656/w0mftxrtcmrme1h51uuv.jpg",
        services: {
            delivery: 1,
            public: 1,
            findChild: 1,
            laundry: 0,
            usedPhone: 1,
            document: 1,
            print: 1,
            flight: 1
        }
    },
    {
        id: 0,
        lng: 37.553127,
        lat: 126.937448,
        name: 'e',
        url : "http://cphoto.asiae.co.kr/listimglink/4/2017101211004501330_2.jpg",
        services: {
            delivery: 0,
            public: 0,
            findChild: 0,
            laundry: 0,
            usedPhone: 1,
            document: 1,
            print: 0,
            flight: 1
        }
    }
]

const products = [
    {
        id: 1,
        shop: 1,
        name: '오모리 김치찌개',
        stock: 4,
        rate: 3.5,
        url: "https://www.ktown1st.com/uploads/images/smarteditor/2018/04/23/8da171781c9a9a63d63edbcf4a5deb9c.JPG",
        event : 1
    },
    {
        id: 2,
        shop: 2,
        name: '식빵',
        stock: 4,
        rate: 5,
        url: "http://cphoto.asiae.co.kr/listimglink/4/2015091008215927146_1.jpg",
        event : 0
    },
    {
        id: 4,
        shop: 4,
        name: '치킨',
        stock: 4,
        rate: 1.5,
        url: "http://img.insight.co.kr/static/2017/04/05/700/EG4DS97M0NH44JP7EAT5.jpg",
        event : 1
    },
    {
        id: 3,
        shop: 1,
        name: '핫도그',
        stock: 1,
        rate: 3,
        url: "https://t1.daumcdn.net/cfile/tistory/2153BD4553B6275B1F",
        event : 2
    },
    {
        id: 3,
        shop: 1,
        name: '피자',
        stock: 4,
        rate: 3,
        url: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F25048C3B55DA502D3A2E85",
        event : 3
    },
    {
        id: 3,
        shop: 1,
        name: '육각김밥',
        stock: 4,
        rate: 3,
        url: "/hexa_gimbab.png",
        event : 0
    }
]

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('server listening')
})

app.get('/', (req, res) => {
    res.render('index.ejs', { lng: 37.548243, lat: 126.942779, shops: [] })
})

app.post('/', (req, res) => {
    res.redirect('/search/' + req.body.lng + '/' + req.body.lat)
})

//37.548243, 126.942779
app.get('/search/:lng/:lat', (req, res) => {
    res.render('index.ejs', { lng: req.params.lng, lat: req.params.lat, shops: shops })
    //res.send('lng: ' + req.params.lng + ' lat: ' + req.params.lat)
})

app.get('/detail/:id', (req, res) => {
    filtered_products = products.filter(product => product.shop == req.params.id)
    currShop = shops.filter(shop => shop.id == req.params.id)
    res.render('detail.ejs', { products: filtered_products, shop: currShop[0] })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})
