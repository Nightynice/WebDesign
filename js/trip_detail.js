const trips = {

    "phuket-series-trail": {

        title: "ตามรอยแปลรักฉันด้วยใจเธอ",
        subtitle: "เที่ยวเมืองเก่าภูเก็ตและแหลมพรหมเทพ ตามรอยบรรยากาศสำคัญจากซีรีย์",

        country: "ไทย",
        location: "ภูเก็ต",
        duration: "2 วัน 1 คืน",
        season: "ฤดูร้อน",
        series: "แปลรักฉันด้วยใจเธอ",

        image: "/images/place/place-oldtown.jpg",

        description:
            "เส้นทางตามรอยแปลรักฉันด้วยใจเธอในภูเก็ต พาเที่ยวเมืองเก่าภูเก็ตและแหลมพรหมเทพ พร้อมแวะร้านอาหาร คาเฟ่ และที่พักที่เหมาะสำหรับจัดทริปตามรอยซีรีย์",

        itinerary: [

            {
                day: "DAY 01",
                title: "เดินเล่นเมืองเก่าภูเก็ต",
                subtitle: "สำรวจย่านเมืองเก่าและบรรยากาศจากเรื่องราวของซีรีย์",

                stops: [
                    {
                        time: "09:00",
                        name: "เมืองเก่าภูเก็ต",
                        desc: "เดินชมสถาปัตยกรรมชิโน-โปรตุกีส ถนนถลาง และซอยรมณีย์",
                        series: "แปลรักฉันด้วยใจเธอ"
                    },
                    {
                        time: "13:00",
                        name: "Raya Restaurant",
                        desc: "แวะรับประทานอาหารในย่านเมืองเก่าภูเก็ต",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "เดินเล่นย่านเมืองเก่า",
                        desc: "เก็บภาพบรรยากาศและสำรวจร้านค้ารอบย่านเมืองเก่า",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "แหลมพรหมเทพ",
                subtitle: "ปิดท้ายทริปด้วยวิวทะเลและพระอาทิตย์ตก",

                stops: [
                    {
                        time: "10:00",
                        name: "แหลมพรหมเทพ",
                        desc: "เดินชมจุดชมวิวและบรรยากาศริมทะเลทางตอนใต้ของภูเก็ต",
                        series: "แปลรักฉันด้วยใจเธอ"
                    },
                    {
                        time: "17:00",
                        name: "Promthep Cape Restaurant",
                        desc: "แวะรับประทานอาหารก่อนชมพระอาทิตย์ตก",
                        series: "Food & Cafe"
                    },
                    {
                        time: "18:00",
                        name: "ชมพระอาทิตย์ตก",
                        desc: "เก็บภาพบรรยากาศช่วงเย็นบริเวณแหลมพรหมเทพ",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "phuket-old-town",
                name: "เมืองเก่าภูเก็ต",
                country: "ไทย",
                image: "/images/place/place-oldtown.jpg",
                desc: "ย่านสถาปัตยกรรมชิโน-โปรตุกีสและหนึ่งในพื้นที่สำคัญของเรื่อง",
                url: "/pages/place_detail.html?place=phuket-old-town"
            },

            {
                id: "promthep-cape",
                name: "แหลมพรหมเทพ",
                country: "ไทย",
                image: "/images/place/lampromtep.jpg",
                desc: "จุดชมพระอาทิตย์ตกชื่อดังทางตอนใต้ของภูเก็ต",
                url: "/pages/place_detail.html?place=promthep-cape"
            }

        ],

        restaurants: [

            {
                id: "phuket-old-town-cafe",
                name: "Raya Restaurant",
                location: "เมืองเก่าภูเก็ต",
                image: "/images/restaurants/rayarestaurant.png",
                url: "/pages/restaurant_detail.html?restaurant=phuket-old-town-cafe"
            },

            {
                id: "promthep-cafe",
                name: "Promthep Cape Restaurant",
                location: "แหลมพรหมเทพ",
                image: "/images/restaurants/promthepcaperestaurant.jpg",
                url: "/pages/restaurant_detail.html?restaurant=promthep-cafe"
            }

        ],

        hotels: [

            {
                id: "phuket-old-town-hotel",
                name: "The Memory at On On Hotel",
                location: "เมืองเก่าภูเก็ต",
                image: "/images/hotels/thememoryatononhotel.png",
                url: "/pages/hotel_detail.html?hotel=phuket-old-town-hotel"
            },

            {
                id: "promthep-hotel",
                name: "The Nai Harn",
                location: "ภูเก็ต",
                image: "/images/hotels/thenaiharn.png",
                url: "/pages/hotel_detail.html?hotel=promthep-hotel"
            }

        ]
    },

    "phapan-dao-trail": {

        title: "ตามรอยนิทานพันดาว",
        subtitle: "เดินทางขึ้นดอย สัมผัสธรรมชาติและชุมชนบนพื้นที่สูง",

        country: "ไทย",
        location: "เชียงราย",
        duration: "2 วัน 1 คืน",
        season: "ฤดูหนาว",
        series: "นิทานพันดาว",

        image: "/images/place/bantean.jpg",

        description:
            "เส้นทางตามรอยนิทานพันดาวในพื้นที่เชียงราย เน้นบรรยากาศธรรมชาติ หมู่บ้านบนพื้นที่สูง และจุดชมวิวที่สะท้อนโลกของผาปันดาวในซีรีย์",

        itinerary: [

            {
                day: "DAY 01",
                title: "เข้าสู่หมู่บ้านผาปันดาว",
                subtitle: "สัมผัสบรรยากาศชุมชนและธรรมชาติบนพื้นที่สูง",

                stops: [
                    {
                        time: "09:00",
                        name: "บ้านเทียน – หมู่บ้านผาปันดาว",
                        desc: "สำรวจพื้นที่หมู่บ้านและบรรยากาศที่ใช้สร้างโลกของผาปันดาว",
                        series: "นิทานพันดาว"
                    },
                    {
                        time: "13:00",
                        name: "คาเฟ่ในเชียงราย",
                        desc: "พักรับประทานอาหารและเครื่องดื่มก่อนเดินทางต่อ",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "พักผ่อนในพื้นที่เชียงราย",
                        desc: "เตรียมตัวสำหรับการเดินทางขึ้นพื้นที่ภูเขาในวันถัดไป",
                        series: "Stay"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "ผาปันดาวและจุดชมวิว",
                subtitle: "ชมวิวภูเขาและบรรยากาศธรรมชาติ",

                stops: [
                    {
                        time: "08:00",
                        name: "ผาปันดาว จุดชมวิว",
                        desc: "ชมภูมิประเทศและวิวภูเขาที่สะท้อนบรรยากาศของเรื่อง",
                        series: "นิทานพันดาว"
                    },
                    {
                        time: "12:00",
                        name: "บ้านกาแฟผาตั้ง",
                        desc: "แวะพักระหว่างเส้นทาง",
                        series: "Food & Cafe"
                    },
                    {
                        time: "15:00",
                        name: "เดินทางกลับ",
                        desc: "ปิดท้ายทริปและเดินทางกลับจากพื้นที่ดอย",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "phapan-dao-village",
                name: "บ้านเทียน – หมู่บ้านผาปันดาว",
                country: "ไทย",
                image: "/images/place/bantean.jpg",
                desc: "พื้นที่หมู่บ้านที่ใช้สร้างโลกของผาปันดาวในเรื่อง",
                url: "/pages/place_detail.html?place=phapan-dao-village"
            },

            {
                id: "phapan-dao-viewpoint",
                name: "ผาปันดาว จุดชมวิว",
                country: "ไทย",
                image: "/images/place/phapundaw.jpg",
                desc: "พื้นที่ภูเขาและจุดชมวิวที่สะท้อนบรรยากาศธรรมชาติในเรื่อง",
                url: "/pages/place_detail.html?place=phapan-dao-viewpoint"
            }

        ],

        restaurants: [

            {
                name: "Chivit Thamma Da Coffee House",
                location: "เชียงราย",
                image: "/images/place/bantean.jpg",
                url: "/pages/place_detail.html?place=phapan-dao-village"
            },

            {
                name: "บ้านกาแฟผาตั้ง",
                location: "ดอยผาตั้ง",
                image: "/images/place/phapundaw.jpg",
                url: "/pages/place_detail.html?place=phapan-dao-viewpoint"
            }

        ],

        hotels: [

            {
                name: "Le Méridien Chiang Rai Resort",
                location: "เชียงราย",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=phapan-dao-village"
            },

            {
                name: "Pha Tang Hill Resort",
                location: "ดอยผาตั้ง เชียงราย",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=phapan-dao-viewpoint"
            }

        ]
    },

    "ayutthaya-trail": {

        title: "ตามรอยบุพเพสันนิวาส",
        subtitle: "เที่ยวโบราณสถานสำคัญในอยุธยา พร้อมสัมผัสบรรยากาศเมืองเก่าจากซีรีย์",

        country: "ไทย",
        location: "พระนครศรีอยุธยา",
        duration: "1 วัน",
        season: "ฤดูหนาว",
        series: "บุพเพสันนิวาส",

        image: "/images/place/watchaiwanaram.jpg",

        description:
            "เส้นทางท่องเที่ยวเมืองเก่าอยุธยาตามรอยบุพเพสันนิวาส พาเยี่ยมชมโบราณสถานสำคัญและบรรยากาศเมืองเก่าที่เชื่อมโยงกับเรื่องราวในซีรีย์",

        itinerary: [

            {
                day: "DAY 01",
                title: "ตามรอยอยุธยา",
                subtitle: "สำรวจโบราณสถานสำคัญภายในหนึ่งวัน",

                stops: [
                    {
                        time: "09:00",
                        name: "วัดไชยวัฒนาราม",
                        desc: "ชมโบราณสถานริมแม่น้ำเจ้าพระยาและสถาปัตยกรรมสมัยอยุธยา",
                        series: "บุพเพสันนิวาส"
                    },
                    {
                        time: "12:00",
                        name: "ร้านอาหารในย่านเมืองเก่า",
                        desc: "พักรับประทานอาหารและเดินทางต่อ",
                        series: "Food & Cafe"
                    },
                    {
                        time: "14:00",
                        name: "วัดพุทไธศวรรย์",
                        desc: "ชมพระปรางค์และบรรยากาศริมแม่น้ำเจ้าพระยา",
                        series: "บุพเพสันนิวาส"
                    },
                    {
                        time: "17:00",
                        name: "เดินทางกลับ",
                        desc: "ปิดท้ายเส้นทางท่องเที่ยวเมืองเก่าอยุธยา",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "wat-chaiwatthanaram",
                name: "วัดไชยวัฒนาราม",
                country: "ไทย",
                image: "/images/place/watchaiwanaram.jpg",
                desc: "โบราณสถานสำคัญริมแม่น้ำเจ้าพระยาและหนึ่งในภาพจำของเรื่อง",
                url: "/pages/place_detail.html?place=wat-chaiwatthanaram"
            },

            {
                id: "wat-phutthaisawan",
                name: "วัดพุทไธศวรรย์",
                country: "ไทย",
                image: "/images/place/watputthaisawan.png",
                desc: "วัดโบราณริมแม่น้ำเจ้าพระยาที่มีสถาปัตยกรรมอยุธยา",
                url: "/pages/place_detail.html?place=wat-phutthaisawan"
            }

        ],

        restaurants: [

            {
                name: "เรือนมยุรา Mayura's House",
                location: "อยุธยา",
                image: "/images/place/watchaiwanaram.jpg",
                url: "/pages/place_detail.html?place=wat-chaiwatthanaram"
            },

            {
                name: "SYAMA AYUDHYA Cafe",
                location: "อยุธยา",
                image: "/images/place/watputthaisawan.png",
                url: "/pages/place_detail.html?place=wat-phutthaisawan"
            }

        ],

        hotels: [

            {
                name: "sala ayutthaya",
                location: "พระนครศรีอยุธยา",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=wat-chaiwatthanaram"
            },

            {
                name: "ที่พักใกล้วัดพุทไธศวรรย์",
                location: "อยุธยา",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=wat-phutthaisawan"
            }

        ]
    },

    "chiang-mai-trail": {

        title: "ตามรอยกลิ่นกาสะลอง",
        subtitle: "เที่ยววัดและสถานที่สำคัญท่ามกลางบรรยากาศล้านนา",

        country: "ไทย",
        location: "เชียงใหม่",
        duration: "2 วัน 1 คืน",
        season: "ฤดูฝน",
        series: "กลิ่นกาสะลอง",

        image: "/images/place/wattonkwen.jpg",

        description:
            "เส้นทางตามรอยกลิ่นกาสะลองในเชียงใหม่ พาเที่ยววัดเก่าแก่และสถานที่ที่สะท้อนสถาปัตยกรรมล้านนา พร้อมสัมผัสบรรยากาศเมืองเก่า",

        itinerary: [

            {
                day: "DAY 01",
                title: "สัมผัสบรรยากาศล้านนา",
                subtitle: "เดินทางชมวัดและสถาปัตยกรรมเก่าแก่",

                stops: [
                    {
                        time: "09:00",
                        name: "วัดต้นเกว๋น",
                        desc: "ชมสถาปัตยกรรมล้านนาและบรรยากาศโดยรอบ",
                        series: "กลิ่นกาสะลอง"
                    },
                    {
                        time: "13:00",
                        name: "พักคาเฟ่",
                        desc: "แวะพักและรับประทานอาหารระหว่างเส้นทาง",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "เดินเล่นเชียงใหม่",
                        desc: "สัมผัสบรรยากาศเมืองเชียงใหม่ในช่วงเย็น",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "ตามรอยเมืองเก่า",
                subtitle: "ปิดท้ายด้วยวัดสำคัญในตัวเมืองเชียงใหม่",

                stops: [
                    {
                        time: "09:00",
                        name: "วัดโลกโมฬี",
                        desc: "ชมวิหาร เจดีย์ และซุ้มประตูแบบล้านนา",
                        series: "กลิ่นกาสะลอง"
                    },
                    {
                        time: "12:00",
                        name: "ร้านอาหารในเมือง",
                        desc: "พักรับประทานอาหารก่อนเดินทางกลับ",
                        series: "Food & Cafe"
                    }
                ]
            }

        ],

        places: [

            {
                id: "wat-ton-kwen",
                name: "วัดต้นเกว๋น (วัดอินทราวาส)",
                country: "ไทย",
                image: "/images/place/wattonkwen.jpg",
                desc: "วัดเก่าแก่ในอำเภอหางดงที่มีสถาปัตยกรรมล้านนาโดดเด่น",
                url: "/pages/place_detail.html?place=wat-ton-kwen"
            },

            {
                id: "wat-lok-molee",
                name: "วัดโลกโมฬี",
                country: "ไทย",
                image: "/images/place/watlokmolee.jpg",
                desc: "วัดเก่าแก่ในเขตเมืองเชียงใหม่ที่มีสถาปัตยกรรมล้านนา",
                url: "/pages/place_detail.html?place=wat-lok-molee"
            }

        ],

        restaurants: [

            {
                name: "Terroir Roasters",
                location: "เชียงใหม่",
                image: "/images/place/wattonkwen.jpg",
                url: "/pages/place_detail.html?place=wat-ton-kwen"
            },

            {
                name: "Victoria Cafe",
                location: "เชียงใหม่",
                image: "/images/place/watlokmolee.jpg",
                url: "/pages/place_detail.html?place=wat-lok-molee"
            }

        ],

        hotels: [

            {
                name: "Mountain Creek Resort",
                location: "เชียงใหม่",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=wat-ton-kwen"
            },

            {
                name: "Icon Park Hotel Chiang Mai",
                location: "เชียงใหม่",
                image: "/images/countries/thai.jpg",
                url: "/pages/place_detail.html?place=wat-lok-molee"
            }

        ]
    },

    "gongjin-trail": {

        title: "ตามรอย Hometown Cha-Cha-Cha",
        subtitle: "เดินเที่ยวตลาดและชายหาดในโพฮัง พร้อมสัมผัสบรรยากาศหมู่บ้านริมทะเล",

        country: "เกาหลีใต้",
        location: "โพฮัง",
        duration: "2 วัน 1 คืน",
        season: "ฤดูร้อน",
        series: "Hometown Cha-Cha-Cha",

        image: "/images/place/wolpobeach.jpg",

        description:
            "เส้นทางตามรอย Hometown Cha-Cha-Cha ในโพฮัง พาเที่ยวตลาดชองฮาและชายหาด Wolpo พร้อมแวะร้านอาหาร คาเฟ่ และที่พักริมทะเล",

        itinerary: [

            {
                day: "DAY 01",
                title: "ตลาดกงจิน",
                subtitle: "ตามรอยบรรยากาศหมู่บ้านริมทะเล",

                stops: [
                    {
                        time: "09:00",
                        name: "Cheongha Market",
                        desc: "เดินสำรวจตลาดจริงที่ใช้แทนตลาดกงจินในเรื่อง",
                        series: "Hometown Cha-Cha-Cha"
                    },
                    {
                        time: "12:00",
                        name: "Cheongha Market Food",
                        desc: "ลองอาหารท้องถิ่นบริเวณตลาด",
                        series: "Food & Cafe"
                    },
                    {
                        time: "15:00",
                        name: "เดินเล่นรอบโพฮัง",
                        desc: "สำรวจพื้นที่โดยรอบตลาดและบรรยากาศชุมชน",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "Wolpo Beach",
                subtitle: "เที่ยวชายหาดและสัมผัสบรรยากาศริมทะเล",

                stops: [
                    {
                        time: "09:00",
                        name: "Wolpo Beach",
                        desc: "เดินเล่นริมชายหาดและตามรอยฉากสำคัญของเรื่อง",
                        series: "Hometown Cha-Cha-Cha"
                    },
                    {
                        time: "13:00",
                        name: "Wolpo Beach Cafe",
                        desc: "พักดื่มกาแฟและชมบรรยากาศริมทะเล",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "เดินทางกลับ",
                        desc: "ปิดท้ายทริปบริเวณชายฝั่งโพฮัง",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "cheongha-market",
                name: "ตลาดชองฮา (Cheongha Market)",
                country: "เกาหลีใต้",
                image: "/images/place/cheonghamarket.jpg",
                desc: "ตลาดจริงที่ใช้แทนตลาดกงจินในเรื่อง",
                url: "/pages/place_detail.html?place=cheongha-market"
            },

            {
                id: "wolpo-beach",
                name: "Wolpo Beach",
                country: "เกาหลีใต้",
                image: "/images/place/wolpobeach.jpg",
                desc: "ชายหาดจริงที่ใช้เป็นฉากสำคัญของเรื่อง",
                url: "/pages/place_detail.html?place=wolpo-beach"
            }

        ],

        restaurants: [

            {
                id: "cheongha-market-food",
                name: "Cheongha Market Food",
                location: "โพฮัง",
                image: "/images/restaurants/cheonghamarketfood.jpg",
                url: "/pages/restaurant_detail.html?restaurant=cheongha-market-food"
            },

            {
                id: "wolpo-beach-cafe",
                name: "Wolpo Beach Cafe",
                location: "โพฮัง",
                image: "/images/restaurants/wolpobeachcafe.png",
                url: "/pages/restaurant_detail.html?restaurant=wolpo-beach-cafe"
            }

        ],

        hotels: [

            {
                id: "cheongha-market-hotel",
                name: "Pohang Hotel",
                location: "โพฮัง",
                image: "/images/hotels/pohanghotel.jpg",
                url: "/pages/hotel_detail.html?hotel=cheongha-market-hotel"
            },

            {
                id: "wolpo-beach-hotel",
                name: "Wolpo Beach Stay",
                location: "โพฮัง",
                image: "/images/hotels/wolpobeachstay.jpg",
                url: "/pages/hotel_detail.html?hotel=wolpo-beach-hotel"
            }

        ]
    },

    "otaru-first-love": {

        title: "ตามรอย First Love",
        subtitle: "เดินเล่นริมคลองและชายหาดในโอตารุ ท่ามกลางบรรยากาศแบบในซีรีย์",

        country: "ญี่ปุ่น",
        location: "โอตารุ",
        duration: "2 วัน 1 คืน",
        season: "ฤดูหนาว",
        series: "First Love",

        image: "/images/place/otarucanal.jpg",

        description:
            "เส้นทางตามรอย First Love ในโอตารุ พาเที่ยวคลองโอตารุและชายฝั่ง Zenibako พร้อมสัมผัสบรรยากาศเมืองเก่าและฤดูหนาวของฮอกไกโด",

        itinerary: [

            {
                day: "DAY 01",
                title: "Otaru Canal",
                subtitle: "สำรวจเมืองเก่าและคลองโอตารุ",

                stops: [
                    {
                        time: "09:00",
                        name: "Otaru Canal",
                        desc: "เดินเล่นริมคลองและชมอาคารเก่าแก่ของเมือง",
                        series: "First Love"
                    },
                    {
                        time: "13:00",
                        name: "Otaru Canal Cafe",
                        desc: "พักดื่มกาแฟในย่านคลองโอตารุ",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "เดินเล่นเมืองโอตารุ",
                        desc: "ชมบรรยากาศเมืองเก่าในช่วงเย็น",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "Zenibako Beach",
                subtitle: "เที่ยวชายฝั่งและเก็บบรรยากาศธรรมชาติ",

                stops: [
                    {
                        time: "09:00",
                        name: "Zenibako Beach",
                        desc: "เดินเล่นริมชายฝั่งและชมวิวอ่าวอิชิคาริ",
                        series: "First Love"
                    },
                    {
                        time: "12:00",
                        name: "ร้านอาหารระหว่างทาง",
                        desc: "พักรับประทานอาหารก่อนเดินทางกลับ",
                        series: "Food & Cafe"
                    }
                ]
            }

        ],

        places: [

            {
                id: "otaru-canal",
                name: "Otaru Canal",
                country: "ญี่ปุ่น",
                image: "/images/place/otarucanal.jpg",
                desc: "คลองประวัติศาสตร์ใจกลางโอตารุและหนึ่งในโลเคชันสำคัญของเรื่อง",
                url: "/pages/place_detail.html?place=otaru-canal"
            },

            {
                id: "zenibako-beach",
                name: "Zenibako Beach",
                country: "ญี่ปุ่น",
                image: "/images/place/zenibakobeach.jpg",
                desc: "ชายฝั่งริมอ่าวอิชิคาริที่ปรากฏในเรื่อง",
                url: "/pages/place_detail.html?place=zenibako-beach"
            }

        ],

        restaurants: [

            {
                id: "otaru-canal-cafe",
                name: "Otaru Canal Cafe",
                location: "โอตารุ ฮอกไกโด",
                image: "/images/restaurants/otarucanalcafe.jpg",
                url: "/pages/restaurant_detail.html?restaurant=otaru-canal-cafe"
            },

            {
                name: "Restaurant Shikisai",
                location: "Zenibako",
                image: "/images/place/zenibakobeach.jpg",
                url: "/pages/place_detail.html?place=zenibako-beach"
            }

        ],

        hotels: [

            {
                id: "otaru-canal-hotel",
                name: "Otaru Canal Hotel",
                location: "โอตารุ ฮอกไกโด",
                image: "/images/hotels/otarucanalhotel.jpg",
                url: "/pages/hotel_detail.html?hotel=otaru-canal-hotel"
            },

            {
                name: "Luna Coast",
                location: "Zenibako",
                image: "/images/countries/japan.jpg",
                url: "/pages/place_detail.html?place=zenibako-beach"
            }

        ]
    },

    "kamakura-trail": {

        title: "ตามรอยซีรีย์ริมทะเลคามาคุระ",
        subtitle: "เที่ยวสถานที่ริมทะเลและสัมผัสบรรยากาศเมืองคามาคุระแบบสบาย ๆ",

        country: "ญี่ปุ่น",
        location: "คามาคุระ",
        duration: "1 วัน",
        season: "ฤดูร้อน",
        series: "Saigo Kara Nibanme no Koi",

        image: "/images/place/yuigahamabeach.png",

        description:
            "เส้นทางเที่ยวคามาคุระตามรอย Saigo Kara Nibanme no Koi พาเที่ยว Yuigahama Beach และ Gokurakuji Station พร้อมแวะคาเฟ่และที่พักใกล้ทะเล",

        itinerary: [

            {
                day: "DAY 01",
                title: "Kamakura Seaside",
                subtitle: "เที่ยวชายหาดและโลเคชันสำคัญของคามาคุระ",

                stops: [
                    {
                        time: "09:00",
                        name: "Gokurakuji Station",
                        desc: "เริ่มต้นเส้นทางจากสถานี Enoden ขนาดเล็กที่เป็นภาพจำของเรื่อง",
                        series: "Saigo Kara Nibanme no Koi"
                    },
                    {
                        time: "11:00",
                        name: "Yuigahama Beach",
                        desc: "เดินเล่นริมชายหาดและชมบรรยากาศทะเล",
                        series: "Saigo Kara Nibanme no Koi"
                    },
                    {
                        time: "13:00",
                        name: "Yuigahama Beach Cafe",
                        desc: "พักรับประทานอาหารและเครื่องดื่มริมทะเล",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "เดินเล่นคามาคุระ",
                        desc: "ปิดท้ายทริปด้วยการเดินเที่ยวบริเวณชายฝั่ง",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "gokurakuji-station",
                name: "Gokurakuji Station",
                country: "ญี่ปุ่น",
                image: "/images/place/gokurakujistation.jpg",
                desc: "สถานี Enoden ขนาดเล็กและเป็นหนึ่งในโลเคชันสำคัญของเรื่อง",
                url: "/pages/place_detail.html?place=gokurakuji-station"
            },

            {
                id: "yuigahama-beach",
                name: "Yuigahama Beach",
                country: "ญี่ปุ่น",
                image: "/images/place/yuigahamabeach.png",
                desc: "ชายหาดสำคัญของคามาคุระที่ใช้เป็นฉากริมทะเล",
                url: "/pages/place_detail.html?place=yuigahama-beach"
            }

        ],

        restaurants: [

            {
                id: "yuigahama-cafe",
                name: "Yuigahama Beach Cafe",
                location: "คามาคุระ",
                image: "/images/restaurants/yuigahamabeachcafe.jpg",
                url: "/pages/restaurant_detail.html?restaurant=yuigahama-cafe"
            },

            {
                name: "SOMETHING'S COFFEEHOUSE",
                location: "Gokurakuji",
                image: "/images/place/gokurakujistation.jpg",
                url: "/pages/place_detail.html?place=gokurakuji-station"
            }

        ],

        hotels: [

            {
                id: "yuigahama-hotel",
                name: "Kamakura Beach Stay",
                location: "Yuigahama, คามาคุระ",
                image: "/images/hotels/kamakurabeachstay.jpg",
                url: "/pages/hotel_detail.html?hotel=yuigahama-hotel"
            },

            {
                name: "Kamakura Rakuan",
                location: "Gokurakuji",
                image: "/images/countries/japan.jpg",
                url: "/pages/place_detail.html?place=gokurakuji-station"
            }

        ]
    },

    "dali-hidden-life": {

        title: "ตามรอย Meet Yourself",
        subtitle: "พักผ่อนท่ามกลางธรรมชาติของต้าหลี่และทะเลสาบเอ๋อไห่ในบรรยากาศ slow life",

        country: "จีน",
        location: "ต้าหลี่",
        duration: "3 วัน 2 คืน",
        season: "ฤดูใบไม้ผลิ",
        series: "Meet Yourself",

        image: "/images/place/erhailake.jpg",

        description:
            "เส้นทางตามรอย Meet Yourself ในต้าหลี่ เน้นการเดินทางแบบ slow life ผ่านหมู่บ้าน Fengyangyi และทะเลสาบ Erhai พร้อมแวะคาเฟ่และที่พักในบรรยากาศเรียบง่าย",

        itinerary: [

            {
                day: "DAY 01",
                title: "Fengyangyi Village",
                subtitle: "เริ่มต้นทริปด้วยวิถีชีวิตแบบ slow life",

                stops: [
                    {
                        time: "09:00",
                        name: "Fengyangyi Village",
                        desc: "เดินชมหมู่บ้านและบรรยากาศชนบทของต้าหลี่",
                        series: "Meet Yourself"
                    },
                    {
                        time: "13:00",
                        name: "Qiu Garden Coffee",
                        desc: "พักคาเฟ่ในพื้นที่หมู่บ้าน",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "Youfeng Courtyard",
                        desc: "พักผ่อนและสัมผัสบรรยากาศที่พักแบบ slow life",
                        series: "Stay"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "Erhai Lake",
                subtitle: "เดินทางชมธรรมชาติริมทะเลสาบ",

                stops: [
                    {
                        time: "09:00",
                        name: "Erhai Lake",
                        desc: "ชมวิวทะเลสาบและพื้นที่ธรรมชาติโดยรอบ",
                        series: "Meet Yourself"
                    },
                    {
                        time: "13:00",
                        name: "Erhai Lake Cafe",
                        desc: "พักรับประทานอาหารและเครื่องดื่มริมทะเลสาบ",
                        series: "Food & Cafe"
                    },
                    {
                        time: "17:00",
                        name: "ชมพระอาทิตย์ตก",
                        desc: "พักผ่อนริมทะเลสาบและชมบรรยากาศช่วงเย็น",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 03",
                title: "Slow Morning",
                subtitle: "ใช้เวลาช่วงเช้าแบบสบาย ๆ ก่อนเดินทางกลับ",

                stops: [
                    {
                        time: "09:00",
                        name: "เดินเล่นรอบที่พัก",
                        desc: "ใช้เวลาช่วงเช้าสัมผัสบรรยากาศของต้าหลี่",
                        series: "Slow Life"
                    },
                    {
                        time: "12:00",
                        name: "เดินทางกลับ",
                        desc: "ปิดท้ายทริปตามรอย Meet Yourself",
                        series: "Travel Stop"
                    }
                ]
            }

        ],

        places: [

            {
                id: "fengyangyi-village",
                name: "Fengyangyi Village",
                country: "จีน",
                image: "/images/place/fengyangyivillage.jpg",
                desc: "หมู่บ้านที่ใช้เป็นหนึ่งในโลเคชันสำคัญของ Meet Yourself",
                url: "/pages/place_detail.html?place=fengyangyi-village"
            },

            {
                id: "erhai-lake",
                name: "Erhai Lake",
                country: "จีน",
                image: "/images/place/erhailake.jpg",
                desc: "ทะเลสาบสำคัญที่สร้างบรรยากาศ slow life ของเรื่อง",
                url: "/pages/place_detail.html?place=erhai-lake"
            }

        ],

        restaurants: [

            {
                id: "erhai-lake-cafe",
                name: "Erhai Lake Cafe",
                location: "ต้าหลี่ ยูนนาน",
                image: "/images/restaurants/erhailakecafe.jpg",
                url: "/pages/restaurant_detail.html?restaurant=erhai-lake-cafe"
            },

            {
                name: "Qiu Garden Coffee",
                location: "Fengyangyi Village",
                image: "/images/place/fengyangyivillage.jpg",
                url: "/pages/place_detail.html?place=fengyangyi-village"
            }

        ],

        hotels: [

            {
                id: "erhai-lake-hotel",
                name: "Erhai Lake Stay",
                location: "ต้าหลี่ ยูนนาน",
                image: "/images/hotels/erhailakestay.jpg",
                url: "/pages/hotel_detail.html?hotel=erhai-lake-hotel"
            },

            {
                name: "Youfeng Courtyard",
                location: "Fengyangyi Village",
                image: "/images/countries/chainas.jpg",
                url: "/pages/place_detail.html?place=fengyangyi-village"
            }

        ]
    }

};

const params = new URLSearchParams(window.location.search);

const tripId = params.get("trip");

const trip = trips[tripId];

if (!trip) {

    console.warn("ไม่พบข้อมูลทริป:", tripId);

    window.location.href = "/pages/trips.html";

}

document.getElementById("tripImage").src = trip.image;
document.getElementById("tripImage").alt = trip.title;

document.getElementById("tripCountry").textContent = trip.country;
document.getElementById("tripTitle").textContent = trip.title;
document.getElementById("tripSubtitle").textContent = trip.subtitle;

document.getElementById("tripDuration").textContent = trip.duration;
document.getElementById("tripSeason").textContent = trip.season;
document.getElementById("tripSeries").textContent = trip.series;

document.getElementById("tripDescription").textContent =
    trip.description;

const itineraryList =
    document.getElementById("itineraryList");

itineraryList.innerHTML = trip.itinerary.map(day => `

    <article class="itinerary-day">

        <div class="day-header">

            <span class="day-number">
                ${day.day.replace("DAY ", "")}
            </span>

            <div>

                <h3>
                    ${day.title}
                </h3>

                <p>
                    ${day.subtitle}
                </p>

            </div>

        </div>

        <div class="day-stops">

            ${day.stops.map(stop => `

                <div class="day-stop">

                    <div class="stop-time">
                        ${stop.time}
                    </div>

                    <div class="stop-content">

                        <h4>
                            ${stop.name}
                        </h4>

                        <p>
                            ${stop.desc}
                        </p>

                        <span class="stop-series">
                            ${stop.series}
                        </span>

                    </div>

                </div>

            `).join("")}

        </div>

    </article>

`).join("");

const tripPlaces =
    document.getElementById("tripPlaces");

tripPlaces.innerHTML = trip.places.map(place => `

    <article class="trip-place-card">

        <a
            href="${place.url}"
            style="display:block;color:inherit;text-decoration:none;"
        >

            <img
                src="${place.image}"
                alt="${place.name}"
            >

            <div class="trip-place-content">

                <span>
                    ${place.country}
                </span>

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.desc}
                </p>

            </div>

        </a>

    </article>

`).join("");

const tripRestaurants =
    document.getElementById("tripRestaurants");

tripRestaurants.innerHTML = trip.restaurants.map(item => `

    <a
        href="${item.url}"
        class="extra-item"
        style="color:inherit;text-decoration:none;"
    >

        <img
            src="${item.image}"
            alt="${item.name}"
        >

        <div>

            <h3>
                ${item.name}
            </h3>

            <p>
                ${item.location}
            </p>

        </div>

    </a>

`).join("");

const tripHotels =
    document.getElementById("tripHotels");

tripHotels.innerHTML = trip.hotels.map(item => `

    <a
        href="${item.url}"
        class="extra-item"
        style="color:inherit;text-decoration:none;"
    >

        <img
            src="${item.image}"
            alt="${item.name}"
        >

        <div>

            <h3>
                ${item.name}
            </h3>

            <p>
                ${item.location}
            </p>

        </div>

    </a>

`).join("");

const favoriteButton =
    document.getElementById("favoriteTrip");

function updateFavoriteButton() {

    const favorites =
        JSON.parse(
            localStorage.getItem("seriesTrailFavorites")
        ) || [];

    const existing =
        favorites.find(
            item => item.id === tripId
        );

    if (existing) {

        favoriteButton.innerHTML =
            `<i class="bi bi-heart-fill"></i>
             <span>อยู่ในรายการโปรดแล้ว</span>`;

        favoriteButton.classList.add("is-favorite");

    } else {

        favoriteButton.innerHTML =
            `<i class="bi bi-heart"></i>
             <span>เพิ่มในรายการโปรด</span>`;

        favoriteButton.classList.remove("is-favorite");

    }

}

favoriteButton.addEventListener("click", () => {

    const favorites =
        JSON.parse(
            localStorage.getItem("seriesTrailFavorites")
        ) || [];

    const existing =
        favorites.find(
            item => item.id === tripId
        );

    if (existing) {

        const updatedFavorites =
            favorites.filter(
                item => item.id !== tripId
            );

        localStorage.setItem(
            "seriesTrailFavorites",
            JSON.stringify(updatedFavorites)
        );

    } else {

        favorites.push({

            id: tripId,

            type: "trip",

            title: trip.title,

            image: trip.image,

            url:
                `/pages/trip_detail.html?trip=${tripId}`

        });

        localStorage.setItem(
            "seriesTrailFavorites",
            JSON.stringify(favorites)
        );

    }

    updateFavoriteButton();

});

updateFavoriteButton();
