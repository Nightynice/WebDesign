const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get("place");

const placeDetailData = {
    "phuket-old-town": {
        id: "phuket-old-town",
        country: "ไทย",
        series: "แปลรักฉันด้วยใจเธอ",
        location: "เมืองเก่าภูเก็ต / ถนนถลาง – ซอยรมณีย์, ภูเก็ต",
        name: "เมืองเก่าภูเก็ต",
        image: "/images/place/place-01.jpg",
        description: "ย่านสถาปัตยกรรมชิโน-โปรตุกีสที่เป็นพื้นที่หลักของเรื่องและเป็นฉากชีวิตประจำวันของเต๋กับโอ้เอ๋ว",
        episode: "ปรากฏหลาย EP ตลอดเรื่อง",
        scene: "ฉากเดินทางด้วยรถพ่วงข้าง ฉากเดินเล่น พบปะ และฉากที่สะท้อนชีวิตวัยเรียนของตัวละคร",
        event: "ฉากเดินทางด้วยรถพ่วงข้าง ฉากเดินเล่น พบปะ และฉากที่สะท้อนชีวิตวัยเรียนของตัวละคร",
        significance: "เมืองเก่าภูเก็ตไม่ใช่เพียงฉากหลัง แต่เป็นส่วนหนึ่งของอัตลักษณ์เรื่อง เพราะผู้สร้างใช้วัฒนธรรมภูเก็ตและสถาปัตยกรรมจีน-โปรตุเกสเป็นองค์ประกอบของเรื่อง",
        address: "ย่านเมืองเก่าภูเก็ต จังหวัดภูเก็ต",
        openingHours: "พื้นที่สาธารณะและร้านค้าหลายแห่ง เวลาแตกต่างกัน",
        admission: "ไม่มีค่าเข้าชมสำหรับการเดินชมย่าน",
        transportation: "เดินทางด้วยรถยนต์ รถโดยสาร หรือรถรับจ้างภายในเมืองภูเก็ต",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Cafe Delight Phuket Old Town",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "อยู่ในย่านเมืองเก่าภูเก็ต เหมาะสำหรับแวะพักระหว่างเดินตามรอยถนนถลางและซอยรมณีย์"
            }
        ],
        hotels: [
            {
                name: "Ratri Hotel Phuket Old Town",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักในย่านเมืองเก่าภูเก็ต เหมาะสำหรับใช้เป็นฐานพักเพื่อเดินเที่ยวโลเคชันในเมืองเก่า"
            }
        ]
    },

    "promthep-cape": {
        id: "promthep-cape",
        country: "ไทย",
        series: "แปลรักฉันด้วยใจเธอ",
        location: "แหลมพรหมเทพ, ภูเก็ต",
        name: "แหลมพรหมเทพ",
        image: "/images/place/place-02.jpg",
        description: "จุดชมพระอาทิตย์ตกชื่อดังทางตอนใต้ของภูเก็ต มองเห็นทะเลอันดามันและแนวเกาะ",
        episode: "ปรากฏในช่วงท้ายเรื่อง / ฉากสำคัญของความสัมพันธ์",
        scene: "ใช้เป็นพื้นที่สำหรับฉากที่ตัวละครเปิดเผยความรู้สึกและฉากเชิงอารมณ์ที่เกี่ยวกับความสัมพันธ์ของเต๋ากับโอ้เอ๋ว",
        event: "ตัวละครเปิดเผยความรู้สึกและเผชิญกับช่วงหัวเลี้ยวหัวต่อของความสัมพันธ์",
        significance: "ภาพพระอาทิตย์ตกกลายเป็นภาพแทนของช่วงหัวเลี้ยวหัวต่อทางความรู้สึก และเป็นหนึ่งในสถานที่ที่แฟนซีรีส์ตามรอยมากที่สุด",
        address: "แหลมพรหมเทพ จังหวัดภูเก็ต",
        openingHours: "พื้นที่ชมวิว เปิดให้เข้าชมตามเวลาของสถานที่",
        admission: "ควรตรวจสอบข้อมูลก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์ รถรับจ้าง หรือรถโดยสารในพื้นที่ราไวย์",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "CY Cafe & Restaurant",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "อยู่บริเวณแหลมพรหมเทพ/ราไวย์ เหมาะสำหรับแวะรับประทานอาหารหรือเครื่องดื่มก่อนหรือหลังชมพระอาทิตย์ตก"
            }
        ],
        hotels: [
            {
                name: "The Nai Harn, Phuket",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักบริเวณราไวย์ ใกล้โซนแหลมพรหมเทพ เหมาะสำหรับเที่ยวพื้นที่ตอนใต้ของภูเก็ต"
            }
        ]
    },

    "phapan-dao-village": {
        id: "phapan-dao-village",
        country: "ไทย",
        series: "นิทานพันดาว",
        location: "พื้นที่หมู่บ้าน / บ้านเทียน – หมู่บ้านผาปันดาว, เชียงราย",
        name: "บ้านเทียน – หมู่บ้านผาปันดาว",
        image: "/images/place/place-01.jpg",
        description: "พื้นที่หมู่บ้านที่ใช้สร้างโลกของผาปันดาว โดยทีมงานสร้างบ้านเทียน บ้านชาวบ้าน และโรงเรียนผาปันดาวขึ้นในพื้นที่เชียงราย",
        episode: "ปรากฏตลอดเรื่อง โดยเฉพาะตั้งแต่ EP.1–2 เป็นต้นไป",
        scene: "เทียนเดินทางขึ้นดอยเพื่อเป็นครูอาสา พบหัวหน้าภูผา ปรับตัวกับชีวิตที่ไม่มีสิ่งอำนวยความสะดวก และเริ่มผูกพันกับชุมชน",
        event: "เทียนเริ่มต้นชีวิตใหม่ในชุมชนและค่อย ๆ สร้างความสัมพันธ์กับภูผาและผู้คนในหมู่บ้าน",
        significance: "พื้นที่หมู่บ้านเป็นหัวใจของเรื่อง เพราะเป็นโลกใหม่ที่ทำให้เทียนเปลี่ยนมุมมองชีวิตและความสัมพันธ์กับภูผา",
        address: "พื้นที่เชียงรายที่ใช้สร้างหมู่บ้านผาปันดาว",
        openingHours: "ขึ้นอยู่กับพื้นที่และสถานที่จริงที่เปิดให้เข้าชม",
        admission: "ขึ้นอยู่กับสถานที่จริง",
        transportation: "เดินทางด้วยรถยนต์จากตัวเมืองเชียงรายไปยังพื้นที่ภูเขา",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Chivit Thamma Da Coffee House, Bistro & Bar",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "ร้านอาหารและคาเฟ่ในเชียงราย เหมาะสำหรับใช้เป็นจุดรับประทานอาหารระหว่างจัดเส้นทางตามรอยซีรีส์"
            }
        ],
        hotels: [
            {
                name: "Le Méridien Chiang Rai Resort, Thailand",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักในตัวเมืองเชียงราย เหมาะสำหรับใช้เป็นฐานพักสำหรับเดินทางไปยังโลเคชันต่าง ๆ"
            }
        ]
    },

    "phapan-dao-viewpoint": {
        id: "phapan-dao-viewpoint",
        country: "ไทย",
        series: "นิทานพันดาว",
        location: "ผาปันดาว / จุดชมวิวในพื้นที่เรื่อง, เชียงราย",
        name: "ผาปันดาว จุดชมวิว",
        image: "/images/place/place-02.jpg",
        description: "พื้นที่ภูเขาที่ใช้แทนภูมิประเทศของผาปันดาวและฉากธรรมชาติในเรื่อง",
        episode: "EP.2 และ EP.9 มีเหตุการณ์เกี่ยวกับ Pha Pan Dao Cliff",
        scene: "ตัวละครเดินทางไปยังพื้นที่หน้าผา/จุดชมวิวเพื่อทำภารกิจและเชื่อมโยงกับเรื่องราวของทอร์ฟุนและภูผา",
        event: "ตัวละครเดินทางไปยังพื้นที่หน้าผาและจุดชมวิวเพื่อทำภารกิจและเชื่อมโยงเรื่องราวในอดีตกับปัจจุบัน",
        significance: "เป็นพื้นที่ที่เชื่อมอดีตของภูผากับปัจจุบันของเทียน และเป็นหนึ่งในสถานที่ธรรมชาติที่มีความหมายต่อเรื่อง",
        address: "พื้นที่ดอยผาตั้ง จังหวัดเชียงราย",
        openingHours: "ขึ้นอยู่กับเวลาเปิดของพื้นที่ท่องเที่ยว",
        admission: "ควรตรวจสอบข้อมูลก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์ไปยังพื้นที่ดอยผาตั้ง",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "บ้านกาแฟผาตั้ง",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านบริเวณดอยผาตั้ง เหมาะสำหรับแวะพักระหว่างตามรอยโลเคชัน"
            }
        ],
        hotels: [
            {
                name: "Pha Tang Hill Resort, Doi Pha Tang, Chiang Rai",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักบริเวณดอยผาตั้ง เหมาะสำหรับใช้เป็นที่พักสำหรับการตามรอยโลเคชัน"
            }
        ]
    },

    "wat-chaiwatthanaram": {
        id: "wat-chaiwatthanaram",
        country: "ไทย",
        series: "บุพเพสันนิวาส",
        location: "พระนครศรีอยุธยา",
        name: "วัดไชยวัฒนาราม",
        image: "/images/place/place-01.jpg",
        description: "โบราณสถานสำคัญริมแม่น้ำเจ้าพระยา สร้างในสมัยพระเจ้าปราสาททอง และเป็นหนึ่งในภาพจำหลักของเรื่อง",
        episode: "EP.1 และมีการกลับมาใช้อ้างอิง/ปรากฏอีกหลายตอน",
        scene: "ช่วงต้นเรื่อง เกศสุรางค์กับเรืองฤทธิ์เดินทางมาศึกษาโบราณคดีที่วัดในยุคปัจจุบัน ก่อนเกิดเหตุเหนือธรรมชาติและเกศสุรางค์พบวิญญาณการะเกด ต่อมาในโลกอดีตวัดปรากฏเป็นโบราณสถานที่ยังรุ่งเรือง",
        event: "เกศสุรางค์เริ่มเชื่อมโยงโลกปัจจุบันกับกรุงศรีอยุธยาในอดีต",
        significance: "สถานที่นี้ทำหน้าที่เชื่อมโลกปัจจุบันกับกรุงศรีอยุธยาในอดีต และเป็นจุดเริ่มต้นสำคัญของการเดินทางข้ามเวลาของเกศสุรางค์",
        address: "วัดไชยวัฒนาราม จังหวัดพระนครศรีอยุธยา",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์ รถรับจ้าง หรือรถโดยสารภายในอยุธยา",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "เรือนมยุรา Mayura's House",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "ร้านบริเวณวัดไชยวัฒนาราม เหมาะสำหรับแวะพักหลังเที่ยวโบราณสถาน"
            }
        ],
        hotels: [
            {
                name: "sala ayutthaya",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักในเขตเมืองเก่าอยุธยาและอยู่ริมแม่น้ำ เหมาะสำหรับใช้เป็นฐานพักในการตามรอยสถานที่สำคัญ"
            }
        ]
    },

    "wat-phutthaisawan": {
        id: "wat-phutthaisawan",
        country: "ไทย",
        series: "บุพเพสันนิวาส",
        location: "พระนครศรีอยุธยา",
        name: "วัดพุทไธศวรรย์",
        image: "/images/place/place-02.jpg",
        description: "วัดโบราณริมแม่น้ำเจ้าพระยา มีพระปรางค์ประธานและสถาปัตยกรรมอยุธยาที่ใช้สร้างบรรยากาศย้อนยุค",
        episode: "ปรากฏเป็นหนึ่งในสถานที่ถ่ายทำของละคร แต่เลข EP ของฉากเฉพาะควรตรวจจากตัวตอนอีกครั้ง",
        scene: "ใช้เป็นฉากที่สะท้อนพื้นที่ศักดิ์สิทธิ์และบรรยากาศของกรุงศรีอยุธยาในเรื่อง",
        event: "ใช้พื้นที่วัดเพื่อสร้างสภาพแวดล้อมทางประวัติศาสตร์ของเรื่อง",
        significance: "ช่วยเพิ่มความสมจริงของโลกประวัติศาสตร์และทำให้การตามรอยละครเชื่อมกับโบราณสถานจริงหลายแห่งในอยุธยา",
        address: "วัดพุทไธศวรรย์ จังหวัดพระนครศรีอยุธยา",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์ รถรับจ้าง หรือรถโดยสารภายในอยุธยา",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "SYAMA AYUDHYA Cafe",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในเขตเมืองเก่าอยุธยา เหมาะสำหรับแวะพักระหว่างเที่ยวตามรอยสถานที่ประวัติศาสตร์"
            }
        ],
        hotels: [
            {
                name: "iuDia Hotel",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "ที่พักบริเวณถนนอู่ทองในเขตเมืองเก่าอยุธยา เหมาะสำหรับเดินทางไปยังสถานที่ทางประวัติศาสตร์หลายแห่ง"
            }
        ]
    },

    "wat-ton-kwen": {
        id: "wat-ton-kwen",
        country: "ไทย",
        series: "กลิ่นกาสะลอง",
        location: "อำเภอหางดง, เชียงใหม่",
        name: "วัดต้นเกว๋น (วัดอินทราวาส)",
        image: "/images/place/place-01.jpg",
        description: "วัดเก่าแก่ในอำเภอหางดง มีสถาปัตยกรรมล้านนาโดดเด่นและเป็นหนึ่งในโลเคชันหลักที่กองถ่ายใช้บ่อย",
        episode: "ใช้ในหลายฉาก แต่ยังไม่พบหลักฐานยืนยันเลข EP ของแต่ละฉากอย่างชัดเจน",
        scene: "ฉากที่เกี่ยวข้องกับกาสะลองและตัวละครในช่วงอดีต รวมถึงฉากบริเวณวัดและสถาปัตยกรรมล้านนา",
        event: "ใช้เป็นส่วนหนึ่งของเรื่องราวในช่วงอดีตและแสดงวิถีชีวิตกับสภาพแวดล้อมแบบล้านนา",
        significance: "เป็นหนึ่งในสถานที่ที่สร้างภาพจำของโลกล้านนาและสามารถตามรอยได้จริงในปัจจุบัน",
        address: "วัดต้นเกว๋น อำเภอหางดง จังหวัดเชียงใหม่",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถยนต์หรือรถรับจ้างจากตัวเมืองเชียงใหม่",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Terroir Roasters",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "ร้านกาแฟในตำบลหนองควาย อำเภอหางดง อยู่ในพื้นที่เดียวกับวัดต้นเกว๋นและประมาณ 400 เมตรจากวัด"
            }
        ],
        hotels: [
            {
                name: "Mountain Creek Resort",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "รีสอร์ตในพื้นที่เชียงใหม่ฝั่งหางดง เหมาะสำหรับใช้เป็นตัวเลือกที่พักเมื่อจัดเส้นทางเที่ยวบริเวณนอกเมือง"
            }
        ]
    },

    "wat-lok-molee": {
        id: "wat-lok-molee",
        country: "ไทย",
        series: "กลิ่นกาสะลอง",
        location: "เมืองเชียงใหม่",
        name: "วัดโลกโมฬี",
        image: "/images/place/place-02.jpg",
        description: "วัดเก่าแก่ในเขตเมืองเชียงใหม่ มีวิหาร เจดีย์ และซุ้มประตูแบบล้านนา และเป็นหนึ่งในสถานที่ถ่ายทำของเรื่อง",
        episode: "ยืนยันว่าเป็นสถานที่ถ่ายทำ แต่ยังไม่พบเลข EP ของฉากที่วัดโลกโมฬีโดยตรง",
        scene: "ฉากที่แสดงบรรยากาศเมืองเชียงใหม่และสถาปัตยกรรมล้านนา โดยมีซุ้มประตูและพื้นที่ภายในวัดปรากฏ",
        event: "ใช้สร้างสภาพแวดล้อมของเรื่องในบริบทล้านนา",
        significance: "ช่วยเสริมความสมจริงของฉากหลังทางวัฒนธรรมและเป็นโลเคชันที่สามารถตามรอยได้",
        address: "วัดโลกโมฬี จังหวัดเชียงใหม่",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถยนต์ รถรับจ้าง หรือรถโดยสารในเมืองเชียงใหม่",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Victoria Cafe",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านอาหารและคาเฟ่ในบริเวณศรีภูมิ ใกล้เขตเมืองเก่าเชียงใหม่และวัดโลกโมฬี"
            }
        ],
        hotels: [
            {
                name: "Icon Park Hotel Chiang Mai",
                type: "ที่พัก",
                image: "/images/countries/thai.jpg",
                description: "โรงแรมในบริเวณศรีภูมิ ใกล้เขตเมืองเก่า เหมาะสำหรับเที่ยววัดและสถานที่สำคัญในตัวเมือง"
            }
        ]
    },

    "cheongha-market": {
        id: "cheongha-market",
        country: "เกาหลีใต้",
        series: "Hometown Cha-Cha-Cha",
        location: "โพฮัง, เกาหลีใต้",
        name: "ตลาดชองฮา (Cheongha Market / Gongjin Market)",
        image: "/images/place/place-01.jpg",
        description: "ตลาดจริงที่ใช้แทนตลาดกงจินในเรื่อง เป็นพื้นที่รวมฉากของ Bora Supermarket, O-yoon Café และ Cheongho Hardware และเป็นศูนย์กลางชีวิตประจำวันของชาวกงจิน",
        episode: "ปรากฏหลายตอนตลอดเรื่อง",
        scene: "ฉากซื้อของ พบปะพูดคุย และฉากชีวิตประจำวันของฮเยจิน หัวหน้าฮง และชาวบ้าน รวมถึงพื้นที่ของร้านต่าง ๆ ในกงจิน",
        event: "ฮเยจินค่อย ๆ ทำความรู้จักกับชุมชนและวิถีชีวิตของกงจินผ่านตลาดและร้านค้ารอบตลาด",
        significance: "เป็นหัวใจของชุมชนกงจินและทำให้โลกของเรื่องดูเป็นเมืองชายทะเลที่มีชีวิตจริง",
        address: "Cheongha-myeon, Pohang, South Korea",
        openingHours: "ขึ้นอยู่กับร้านค้าและพื้นที่ตลาด",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถยนต์หรือระบบขนส่งท้องถิ่นจาก Pohang",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Cafe One's Youth",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "ร้านกาแฟภายในพื้นที่ตลาดชองฮา เหมาะสำหรับแวะพักระหว่างตามรอย"
            }
        ],
        hotels: [
            {
                name: "풀비치카라반 (Full Beach Caravan)",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "ที่พักแนววิลล่าในพื้นที่ Cheongha-myeon เหมาะสำหรับพักใกล้เส้นทางตามรอยกงจิน"
            }
        ]
    },

    "wolpo-beach": {
        id: "wolpo-beach",
        country: "เกาหลีใต้",
        series: "Hometown Cha-Cha-Cha",
        location: "Wolpo Beach, Pohang",
        name: "Wolpo Beach",
        image: "/images/place/place-02.jpg",
        description: "ชายหาดจริงที่ใช้เป็นฉากพบกันครั้งแรกของฮเยจินกับหัวหน้าฮง และเป็นพื้นที่ที่หัวหน้าฮงเล่นเซิร์ฟ",
        episode: "ช่วงต้นเรื่อง",
        scene: "ฮเยจินมาถึงชายหาด รองเท้าราคาแพงถูกคลื่นซัดหาย และหัวหน้าฮงช่วยเก็บรองเท้าคืนให้หนึ่งข้าง ขณะเดียวกันเขาเล่นกระดานโต้คลื่นอยู่บริเวณชายหาด",
        event: "การพบกันครั้งแรกของพระเอกและนางเอกกลายเป็นจุดเริ่มต้นของความสัมพันธ์และความขัดแย้งเล็ก ๆ ระหว่างทั้งคู่",
        significance: "เป็นสถานที่สำคัญต่อจุดเริ่มต้นความสัมพันธ์ของฮเยจินและหัวหน้าฮง และมีภาพจำเกี่ยวกับทะเลของเรื่องอย่างชัดเจน",
        address: "Wolpo Beach, Pohang, South Korea",
        openingHours: "พื้นที่ชายหาดเปิดตามสภาพพื้นที่",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถยนต์หรือขนส่งท้องถิ่นในพื้นที่ Cheongha-myeon",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Solkape",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในพื้นที่ Cheongha-myeon เหมาะสำหรับพักระหว่างเที่ยวเส้นทางชายฝั่ง"
            }
        ],
        hotels: [
            {
                name: "Wolpo Donghae Pension",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "เกสต์เฮาส์/เพนชันในพื้นที่ใกล้ Wolpo Beach"
            }
        ]
    },

    "gamgodang-gil": {
        id: "gamgodang-gil",
        country: "เกาหลีใต้",
        series: "Can This Love Be Translated?",
        location: "จงโน, โซล, เกาหลีใต้",
        name: "Gamgodang-gil",
        image: "/images/place/place-01.jpg",
        description: "ถนนในเขตจงโนที่ใช้เป็นหนึ่งในสถานที่ถ่ายทำของเรื่อง เป็นพื้นที่เมืองเก่าที่มีบรรยากาศเดินเล่นและสถาปัตยกรรมเกาหลี",
        episode: "ปรากฏในเรื่อง แต่ยังไม่พบหลักฐานที่น่าเชื่อถือพอสำหรับเลข EP เฉพาะฉาก",
        scene: "จูโฮจินเดินเคียงข้างและแกะ/คลี่ผ้าพันคอในระหว่างเดินบนถนน",
        event: "ฉากใช้การเดินและบทสนทนาเพื่อแสดงความใกล้ชิดของตัวละคร",
        significance: "ช่วยสร้างบรรยากาศโรแมนติกของโซลและเป็นสถานที่จริงที่สามารถตามรอยฉากเดินของตัวละครได้",
        address: "Gamgodang-gil, Jongno-gu, Seoul, South Korea",
        openingHours: "พื้นที่ถนนสาธารณะ",
        admission: "ไม่มีค่าเข้าชมสำหรับการเดินชมถนน",
        transportation: "เดินทางด้วยรถไฟใต้ดินหรือรถโดยสารในกรุงโซล",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "gabae langsom insadong cafe",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ในย่านอินซาดง เดินทางต่อจาก Gamgodang-gil ได้สะดวก"
            }
        ],
        hotels: [
            {
                name: "Junoh Hotel",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "ที่พักในย่าน Insadong/Jongno เหมาะสำหรับใช้เป็นฐานเที่ยวจุดถ่ายทำในโซล"
            }
        ]
    },

    "pinodia-expo-tower": {
        id: "pinodia-expo-tower",
        country: "เกาหลีใต้",
        series: "Can This Love Be Translated?",
        location: "ซกโช, เกาหลีใต้",
        name: "Pinodia Expo Tower",
        image: "/images/place/place-02.jpg",
        description: "หอคอยชมวิวในเมืองซกโชที่ถูกใช้แทนจุดชมวิวในต่างประเทศของเรื่อง",
        episode: "ปรากฏในเรื่อง แต่ยังไม่พบหลักฐานที่น่าเชื่อถือพอสำหรับเลข EP เฉพาะฉาก",
        scene: "ชินจีซอนเดินทางมาที่จุดชมวิว และจูโฮจินตามมาหลังทราบว่าเธออยู่ที่นั่น",
        event: "สถานที่กลายเป็นพื้นที่ที่ตัวละครกลับมาเผชิญหน้ากันและเชื่อมโยงเส้นเรื่องความสัมพันธ์",
        significance: "เป็นตัวอย่างของการใช้สถานที่จริงในเกาหลีเพื่อแทนสถานที่ต่างประเทศในเรื่อง",
        address: "Sokcho, Gangwon-do, South Korea",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารในเมืองซกโช",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "속초산도 (Sokcho Sando)",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในเมืองซกโช เหมาะสำหรับแวะพักก่อนหรือหลังขึ้นชมจุดถ่ายทำ"
            }
        ],
        hotels: [
            {
                name: "Brooklyn Hotel",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "โรงแรมในเมืองซกโช เหมาะสำหรับใช้เป็นฐานพักเพื่อเที่ยวจุดถ่ายทำในพื้นที่"
            }
        ]
    },

    "gwanghwamun-square": {
        id: "gwanghwamun-square",
        country: "เกาหลีใต้",
        series: "The King: Eternal Monarch",
        location: "โซล, เกาหลีใต้",
        name: "Gwanghwamun Square",
        image: "/images/place/place-01.jpg",
        description: "จัตุรัสสำคัญใจกลางกรุงโซล ใช้เป็นสถานที่ถ่ายทำฉากแรก ๆ ที่ Lee Gon และ Jung Tae-eul พบกัน",
        episode: "EP.1",
        scene: "Lee Gon ปรากฏตัวในกรุงโซลและพบ Jung Tae-eul บริเวณ Gwanghwamun Square",
        event: "การพบกันครั้งแรกเปิดเส้นเรื่องความสัมพันธ์ระหว่างตัวละครจากสองโลก",
        significance: "เป็นสถานที่ที่เชื่อมโลกแฟนตาซีกับกรุงโซลจริง และเป็นหนึ่งในฉากเปิดเรื่องที่สำคัญ",
        address: "Gwanghwamun Square, Seoul, South Korea",
        openingHours: "พื้นที่สาธารณะ",
        admission: "ไม่มีค่าเข้าชมสำหรับพื้นที่จัตุรัส",
        transportation: "เดินทางด้วยรถไฟใต้ดินและรถโดยสารในกรุงโซล",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "FourB, Gwanghwamun",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ใกล้จัตุรัส เหมาะสำหรับพักระหว่างตามรอย"
            }
        ],
        hotels: [
            {
                name: "Shilla Stay Gwanghwamun",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "โรงแรมในเขต Jongno เดินทางสะดวกสำหรับเที่ยว Gwanghwamun และสถานที่ใจกลางโซล"
            }
        ]
    },

    "ahopsan-bamboo-forest": {
        id: "ahopsan-bamboo-forest",
        country: "เกาหลีใต้",
        series: "The King: Eternal Monarch",
        location: "Busan, South Korea",
        name: "Ahopsan Bamboo Forest",
        image: "/images/place/place-02.jpg",
        description: "ป่าไผ่ขนาดใหญ่ใน Busan ที่ใช้เป็นสถานที่ของประตูเชื่อมระหว่างสองโลกในเรื่อง",
        episode: "ปรากฏหลายช่วงของเรื่อง แต่เลข EP ของทุกฉากควรตรวจจากตัวตอนอีกครั้ง",
        scene: "Lee Gon และตัวละครที่เกี่ยวข้องเดินทางผ่านป่าไผ่และบริเวณประตูที่เชื่อมระหว่างจักรวรรดิเกาหลีกับสาธารณรัฐเกาหลี",
        event: "ป่าไผ่เป็นพื้นที่สำคัญต่อการเดินทางข้ามโลกและการดำเนินเรื่องเหนือธรรมชาติ",
        significance: "เป็นหนึ่งในภาพจำที่ชัดที่สุดของเรื่อง และเป็นสถานที่ธรรมชาติจริงที่มีความหมายโดยตรงต่อโครงเรื่อง",
        address: "Ahopsan Forest, Busan, South Korea",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารไปยังพื้นที่ Gijang",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Café Darak",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในพื้นที่ Cheolma-myeon ใกล้เส้นทาง Ahopsan Forest"
            }
        ],
        hotels: [
            {
                name: "koum_ryokan - Busan Premium Ryokan & Private Spa Hotel",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "ที่พักในพื้นที่ Busan เหมาะสำหรับใช้เป็นฐานพักเมื่อเที่ยวฝั่ง Gijang"
            }
        ]
    },

    "guryongpo-japanese-house-street": {
        id: "guryongpo-japanese-house-street",
        country: "เกาหลีใต้",
        series: "When the Camellia Blooms",
        location: "โพฮัง, เกาหลีใต้",
        name: "Guryongpo Japanese House Street",
        image: "/images/place/place-01.jpg",
        description: "ย่านบ้านไม้เก่าใน Guryongpo ที่ใช้แทน Ongsan Food Street และเป็นฉากหลักของชุมชนในเรื่อง",
        episode: "ปรากฏหลายตอน โดยเฉพาะช่วงต้นเรื่อง แต่เลข EP ของแต่ละมุมควรตรวจจากตัวตอนอีกครั้ง",
        scene: "ฉากตลาดและร้านค้าของชุมชนองซาน รวมถึงบริเวณ Camellia และพื้นที่หน้าบ้านของตัวละคร",
        event: "Dong-baek เริ่มต้นชีวิตและเปิดร้านในชุมชน ก่อนจะค่อย ๆ สร้างความสัมพันธ์กับ Yong-sik และได้รับการสนับสนุนจากคนในชุมชน",
        significance: "เป็นฉากหลักของชีวิตประจำวันและความสัมพันธ์ของตัวละคร ทำให้ย่านประวัติศาสตร์จริงกลายเป็นภาพจำของ Ongsan",
        address: "Guryongpo, Pohang, South Korea",
        openingHours: "พื้นที่ย่านประวัติศาสตร์",
        admission: "ควรตรวจสอบข้อมูลของสถานที่ก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารจาก Pohang",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "동백을지나서 (Dongbaek-eul Jinasoseo)",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ในย่าน Guryongpo ใกล้พื้นที่ตามรอยเรื่อง"
            }
        ],
        hotels: [
            {
                name: "Pohang Sevenstay",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "เกสต์เฮาส์ใน Guryongpo เหมาะสำหรับพักใกล้เส้นทางตามรอย"
            }
        ]
    },

    "guryongpo-modern-history-museum": {
        id: "guryongpo-modern-history-museum",
        country: "เกาหลีใต้",
        series: "When the Camellia Blooms",
        location: "Guryongpo, Pohang, South Korea",
        name: "Guryongpo Modern History Museum",
        image: "/images/place/place-02.jpg",
        description: "อาคารบ้านไม้เก่าที่ตั้งอยู่บริเวณต้นถนน Guryongpo Japanese House Street และถูกใช้เป็นฉากภายนอกในเรื่อง",
        episode: "EP.3 มีการระบุฉากสำคัญจากแหล่งข้อมูลการตามรอย",
        scene: "บริเวณบ้านไม้สองชั้นด้านบนของถนนปรากฏเป็นฉากภายนอกของ Ongsan และมีข้อมูลการตามรอยระบุว่าฉากสารภาพความรู้สึกของ Yong-sik ต่อ Dong-baek อยู่บริเวณนี้",
        event: "Yong-sik แสดงความรู้สึกต่อ Dong-baek ในพื้นที่ที่ทำหน้าที่เป็นฉากหลังของชุมชน",
        significance: "เป็นจุดที่เชื่อมสถานที่ประวัติศาสตร์จริงกับเหตุการณ์ความสัมพันธ์ของตัวละครโดยตรง",
        address: "Guryongpo, Pohang, South Korea",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารจาก Pohang",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "안녕구룡포 (Annyeong Guryongpo)",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ใน Guryongpo ใกล้ย่านประวัติศาสตร์"
            }
        ],
        hotels: [
            {
                name: "구룡포아지매민박",
                type: "ที่พัก",
                image: "/images/countries/korea.jpg",
                description: "ที่พัก/โฮมสเตย์ใน Guryongpo เหมาะสำหรับพักใกล้ย่านตามรอย"
            }
        ]
    },

    "otaru-canal": {
        id: "otaru-canal",
        country: "ญี่ปุ่น",
        series: "First Love",
        location: "ฮอกไกโด, ญี่ปุ่น",
        name: "Otaru Canal",
        image: "/images/place/place-01.jpg",
        description: "คลองประวัติศาสตร์ใจกลางโอตารุ เป็นหนึ่งในสถานที่ที่ปรากฏในเรื่องและเชื่อมโยงกับความทรงจำของ Yae และ Harumichi",
        episode: "EP.6",
        scene: "Yae นัดพบกับพ่อของเธอที่บริเวณคลองโอตารุในฉากที่เกี่ยวข้องกับการกลับมาพบกันอีกครั้ง",
        event: "Yae เดินทางไปพบพ่อที่โอตารุ และคลองทำหน้าที่เป็นจุดนัดพบของฉากดังกล่าว",
        significance: "เป็นสถานที่ที่เชื่อมความทรงจำในอดีตกับช่วงเวลาปัจจุบันของ Yae และเป็นภาพจำสำคัญของเส้นเรื่องโอตารุ",
        address: "Otaru, Hokkaido, Japan",
        openingHours: "พื้นที่สาธารณะ",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถไฟและรถโดยสารในเมืองโอตารุ",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Sonia Coffee",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ภายใน Hotel Sonia Otaru อยู่บริเวณคลองโอตารุ"
            }
        ],
        hotels: [
            {
                name: "Hotel Sonia Otaru",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "โรงแรมที่ตั้งอยู่ด้านหน้าคลองโอตารุ เหมาะสำหรับใช้เป็นฐานพักในย่านคลองและใจกลางเมือง"
            }
        ]
    },

    "zenibako-beach": {
        id: "zenibako-beach",
        country: "ญี่ปุ่น",
        series: "First Love",
        location: "ฮอกไกโด, ญี่ปุ่น",
        name: "Zenibako Beach",
        image: "/images/place/place-02.jpg",
        description: "ชายฝั่งริมอ่าวอิชิคาริในเขตโอตารุ เป็นพื้นที่ธรรมชาติที่ปรากฏในเรื่อง โดยมีกังหันลมเป็นองค์ประกอบเด่นของฉาก",
        episode: "EP.2",
        scene: "Yae และ Harumichi ในช่วงวัยเรียนใช้เวลาร่วมกันและออกเดตบริเวณชายฝั่ง",
        event: "ทั้งคู่เดินทางมาที่ชายทะเลและใช้เวลาร่วมกันในช่วงความสัมพันธ์วัยเรียน",
        significance: "สะท้อนช่วงเวลาความสัมพันธ์ในวัยเยาว์ของตัวละครและสร้างบรรยากาศของความทรงจำก่อนเรื่องราวในปัจจุบัน",
        address: "Zenibako, Otaru, Hokkaido, Japan",
        openingHours: "พื้นที่ชายหาด",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถไฟหรือรถยนต์จาก Otaru",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Restaurant Shikisai",
                type: "ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านอาหารญี่ปุ่นในย่าน Zenibako เหมาะสำหรับแวะรับประทานอาหารหลังตามรอยชายฝั่ง"
            }
        ],
        hotels: [
            {
                name: "Luna Coast",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "ที่พักในย่าน Zenibako อยู่ใกล้ชายฝั่งและเหมาะสำหรับพักบริเวณเดียวกับโลเคชัน"
            }
        ]
    },

    "setagaya-daita-station": {
        id: "setagaya-daita-station",
        country: "ญี่ปุ่น",
        series: "silent",
        location: "โตเกียว, ญี่ปุ่น",
        name: "Setagaya-Daita Station",
        image: "/images/place/place-01.jpg",
        description: "สถานีรถไฟสายโอดะคิวที่ปรากฏบ่อยในเรื่องและเป็นหนึ่งในจุดสำคัญของเส้นทางชีวิตประจำวันของ Tsumugi",
        episode: "EP.1 และปรากฏในหลายตอน",
        scene: "Tsumugi เห็น Sou ที่สถานีหลังจากไม่ได้พบกันมานาน และติดตามเขาออกจากสถานี",
        event: "การพบกันโดยบังเอิญที่สถานีทำให้ Tsumugi กลับเข้าสู่เรื่องราวในอดีตและได้พบ Sou อีกครั้ง",
        significance: "สถานีเป็นจุดเริ่มต้นสำคัญของการกลับมาพบกันของตัวละครหลักและกลายเป็นหนึ่งในภาพจำของเรื่อง",
        address: "Setagaya, Tokyo, Japan",
        openingHours: "สถานีรถไฟเปิดตามตารางการเดินรถ",
        admission: "ไม่มีค่าเข้าชมพื้นที่สถานีโดยทั่วไป",
        transportation: "เดินทางด้วยรถไฟสาย Odakyu",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "latte",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่/ร้านอาหารสไตล์เรโทรโมเดิร์น อยู่ห่างจากสถานีประมาณ 2 นาที"
            }
        ],
        hotels: [
            {
                name: "yuenbettei daita",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "ที่พักสไตล์เรียวกังในย่าน Daita อยู่ใกล้สถานี"
            }
        ]
    },

    "ashikaga-west-high-school": {
        id: "ashikaga-west-high-school",
        country: "ญี่ปุ่น",
        series: "silent",
        location: "Tochigi, Japan",
        name: "Former Ashikaga West High School",
        image: "/images/place/place-02.jpg",
        description: "อาคารโรงเรียนเก่าที่ใช้แทนโรงเรียน Takasaki Minami High School ในเรื่อง",
        episode: "ปรากฏในหลายตอนของช่วงย้อนอดีต แต่ไม่ควรระบุเลข EP เฉพาะฉากโดยไม่มีการตรวจจากตัวตอนอีกครั้ง",
        scene: "ฉากย้อนอดีตสมัยมัธยมของตัวละครหลัก ทั้งฉากในอาคารเรียนและบริเวณโรงเรียน",
        event: "เรื่องราวความสัมพันธ์ของ Tsumugi กับ Sou ในวัยเรียนถูกเล่าย้อนกลับผ่านสถานที่แห่งนี้",
        significance: "เป็นพื้นที่ที่ทำหน้าที่แทนอดีตของตัวละครและช่วยอธิบายความสัมพันธ์ก่อนเหตุการณ์หลักในปัจจุบัน",
        address: "Ashikaga, Tochigi, Japan",
        openingHours: "ขึ้นอยู่กับการเปิดพื้นที่ให้เข้าชม",
        admission: "ควรตรวจสอบข้อมูลก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถไฟไปยัง Ashikaga",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Cafe Aragin",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในเมือง Ashikaga เหมาะสำหรับแวะพักระหว่างตามรอยโลเคชัน"
            }
        ],
        hotels: [
            {
                name: "Toyoko INN Tochigi Ashikaga Station North",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "โรงแรมใกล้สถานี Ashikaga เหมาะสำหรับใช้เป็นฐานพักในการเดินทางไปยังโลเคชันต่าง ๆ"
            }
        ]
    },

    "gokurakuji-station": {
        id: "gokurakuji-station",
        country: "ญี่ปุ่น",
        series: "Saigo Kara Nibanme no Koi",
        location: "คามาคุระ, คานางาวะ, ญี่ปุ่น",
        name: "Gokurakuji Station",
        image: "/images/place/place-01.jpg",
        description: "สถานี Enoden ขนาดเล็กในคามาคุระ ซึ่งเป็นหนึ่งในโลเคชันที่ปรากฏซ้ำและเป็นภาพจำสำคัญของเรื่อง",
        episode: "EP.1 และปรากฏในหลายตอน",
        scene: "Chiaki และตัวละครอื่น ๆ เดินทางเข้าออกสถานีและพูดคุยกันบริเวณชานชาลาและถนนข้างสถานี",
        event: "สถานีเป็นส่วนหนึ่งของชีวิตประจำวันของตัวละครและเป็นจุดเชื่อมการเดินทางระหว่างบ้านกับพื้นที่ต่าง ๆ ในคามาคุระ",
        significance: "สะท้อนบรรยากาศคามาคุระและความสัมพันธ์ของตัวละครอย่างต่อเนื่องจนกลายเป็นหนึ่งในภาพจำหลักของซีรีส์",
        address: "Gokurakuji, Kamakura, Kanagawa, Japan",
        openingHours: "สถานีเปิดตามตารางการเดินรถ",
        admission: "ไม่มีค่าเข้าชมพื้นที่สถานีโดยทั่วไป",
        transportation: "เดินทางด้วยรถไฟ Enoden",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "SOMETHING'S COFFEEHOUSE",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "ร้านกาแฟในย่าน Gokurakuji อยู่ใกล้สถานี"
            }
        ],
        hotels: [
            {
                name: "Kamakura Rakuan",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "ที่พักในย่าน Sakanoshita ใกล้พื้นที่ Gokurakuji–Hase"
            }
        ]
    },

    "yuigahama-beach": {
        id: "yuigahama-beach",
        country: "ญี่ปุ่น",
        series: "Saigo Kara Nibanme no Koi",
        location: "คามาคุระ, คานางาวะ, ญี่ปุ่น",
        name: "Yuigahama Beach",
        image: "/images/place/place-02.jpg",
        description: "ชายหาดสำคัญของคามาคุระที่ใช้เป็นฉากริมทะเลหลายครั้งในเรื่อง",
        episode: "EP.4 และ EP.5",
        scene: "ตัวละครพูดคุยกันริมทะเลและใช้พื้นที่ชายหาดเป็นฉากสำหรับการสื่อสารความรู้สึกและความสัมพันธ์",
        event: "ใน EP.4 Shinpei เดินกับ Midori บริเวณชายฝั่ง และใน EP.5 Wakai กับ Erina ค้นหาเปลือกหอยบริเวณหาด",
        significance: "ชายหาดทำหน้าที่เป็นพื้นที่เปิดสำหรับบทสนทนาและฉากที่ตัวละครทบทวนความรู้สึก ช่วยขับบรรยากาศโรแมนติกของคามาคุระ",
        address: "Yuigahama, Kamakura, Kanagawa, Japan",
        openingHours: "พื้นที่ชายหาด",
        admission: "ไม่มีข้อมูลค่าเข้าชมในเอกสาร",
        transportation: "เดินทางด้วยรถไฟ Enoden หรือรถโดยสารในคามาคุระ",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Bread, Espresso &",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่และร้านเบเกอรี่ในย่าน Yuigahama เหมาะสำหรับแวะอาหารเช้าหรือเครื่องดื่ม"
            }
        ],
        hotels: [
            {
                name: "KKR Kamakura Wakamiya",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "โรงแรมในย่าน Yuigahama อยู่ใกล้ชายหาด"
            }
        ]
    },

    "tsurumaki-bridge": {
        id: "tsurumaki-bridge",
        country: "ญี่ปุ่น",
        series: "Brush Up Life",
        location: "Hadano, Kanagawa, Japan",
        name: "Tsurumaki Bridge",
        image: "/images/place/place-01.jpg",
        description: "สะพานข้ามแม่น้ำ Murokawa ในเมือง Hadano เป็นหนึ่งในโลเคชันที่ปรากฏในเส้นเรื่องชีวิตของ Asami",
        episode: "EP.4",
        scene: "Asami, Natsuki และ Miho นั่งบนรถเข็น/台車 ขณะที่ Mita-sensei เป็นผู้เข็นข้ามสะพาน",
        event: "กลุ่มตัวละครเดินทางผ่านสะพานในฉากที่เป็นส่วนหนึ่งของเหตุการณ์ในชีวิตรอบที่สามของ Asami",
        significance: "สะท้อนพื้นที่บ้านเกิดและชีวิตประจำวันของตัวละคร และเป็นจุดที่ผู้ชมสามารถตามรอยได้จริงในเมือง Hadano",
        address: "Tsurumaki-Kita, Hadano, Kanagawa, Japan",
        openingHours: "พื้นที่สาธารณะ",
        admission: "ไม่มีค่าเข้าชม",
        transportation: "เดินทางด้วยรถยนต์หรือรถไฟไปยัง Hadano",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Coffee & Cake Andolian",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ในย่าน Tsurumaki-Kita ของ Hadano เหมาะสำหรับแวะพัก"
            }
        ],
        hotels: [
            {
                name: "Grand Hotel Kanachu Hadano",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "โรงแรมในเมือง Hadano เหมาะสำหรับใช้เป็นฐานพักเพื่อเดินทางไปยังโลเคชันต่าง ๆ"
            }
        ]
    },

    "nishihirabatake-park": {
        id: "nishihirabatake-park",
        country: "ญี่ปุ่น",
        series: "Brush Up Life",
        location: "Matsuda, Kanagawa, Japan",
        name: "Nishihirabatake Park / Matsuda Herb Garden",
        image: "/images/place/place-02.jpg",
        description: "สวนบนเนิน Matsudayama ในเมือง Matsuda มองเห็นภูเขาไฟฟูจิและอ่าว Sagami และใช้เป็นฉากสำคัญของเรื่อง",
        episode: "EP.4",
        scene: "Tanabe อยู่ในรถกับ Asami และสารภาพความรู้สึกกับเธอบริเวณจุดจอดรถบนพื้นที่สูงของสวน",
        event: "Tanabe สารภาพกับ Asami ในช่วงชีวิตรอบที่สาม ทำให้ฉากนี้เป็นหนึ่งในเหตุการณ์ด้านความสัมพันธ์ที่สำคัญของตอน",
        significance: "เป็นฉากกลางแจ้งที่ใช้ภูมิทัศน์และมุมมองจากที่สูงประกอบเหตุการณ์ด้านความสัมพันธ์ และเป็นสถานที่ท่องเที่ยวที่มีทัศนียภาพเด่นในปัจจุบัน",
        address: "Matsuda, Kanagawa, Japan",
        openingHours: "ควรตรวจสอบกับสวนก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถไฟไปยัง Matsuda",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Uchisora",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "คาเฟ่ในย่าน Matsuda-soryo อยู่ในพื้นที่เดียวกับสวน"
            }
        ],
        hotels: [
            {
                name: "松葉屋旅館 (Matsubaya Ryokan)",
                type: "ที่พัก",
                image: "/images/countries/japan.jpg",
                description: "ที่พักสไตล์เรียวกังใน Matsuda เหมาะสำหรับพักในพื้นที่เดียวกับโลเคชัน"
            }
        ]
    },

    "shapowei": {
        id: "shapowei",
        country: "จีน",
        series: "Hidden Love",
        location: "เซียะเหมิน, ฝูเจี้ยน, จีน",
        name: "Shapowei (沙坡尾)",
        image: "/images/place/place-01.jpg",
        description: "ย่านท่าเรือเก่าและชุมชนริมทะเลที่ใช้เป็นพื้นที่บ้านพักของ Duan Jiaxu ในเรื่อง และปรากฏในฉากชีวิตประจำวันหลายช่วง",
        episode: "ปรากฏหลายตอน แต่ไม่ระบุเลข EP ของทุกฉากอย่างเฉพาะเจาะจง",
        scene: "ฉากที่เกี่ยวข้องกับบ้านและพื้นที่รอบที่พักของ Duan Jiaxu รวมถึงฉากเดินเล่นในย่านริมทะเล",
        event: "Shapowei เชื่อมกับชีวิตประจำวันของ Duan Jiaxu และเป็นหนึ่งในสถานที่ที่ Sang Zhi เดินทางไปพบและใช้เวลาร่วมกับเขา",
        significance: "ช่วยสร้างภาพจำของชีวิตของ Duan Jiaxu นอกมหาวิทยาลัย และเชื่อมเส้นเรื่องโรแมนซ์กับพื้นที่ริมทะเลจริงของเซียะเหมิน",
        address: "Shapowei, Xiamen, Fujian, China",
        openingHours: "พื้นที่ย่านชุมชนและร้านค้าต่างกัน",
        admission: "ไม่มีข้อมูลค่าเข้าชมสำหรับย่าน",
        transportation: "เดินทางด้วยรถยนต์ รถโดยสาร หรือขนส่งสาธารณะใน Xiamen",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "32HOW Café",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ในย่าน Shapowei บนถนน Daxue เหมาะสำหรับแวะพักระหว่างเดินตามรอย"
            }
        ],
        hotels: [
            {
                name: "Conrad Xiamen",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "โรงแรมในเขต Siming ใกล้ Shapowei และ Xiamen University"
            }
        ]
    },

    "chengyi-science-center": {
        id: "chengyi-science-center",
        country: "จีน",
        series: "Hidden Love",
        location: "Jimei, Xiamen, China",
        name: "Chengyi Science and Technology Exploration Center",
        image: "/images/place/place-02.jpg",
        description: "ศูนย์วิทยาศาสตร์และเทคโนโลยีในเขต Jimei ซึ่งถูกใช้เป็นพิพิธภัณฑ์/สถานที่ท่องเที่ยวในเรื่อง",
        episode: "EP.5",
        scene: "Sang Zhi และ Duan Jiaxu มาเที่ยวพิพิธภัณฑ์วิทยาศาสตร์และเทคโนโลยีด้วยกัน",
        event: "ทั้งคู่ใช้เวลาร่วมกันในพื้นที่จัดแสดงเกี่ยวกับอวกาศ เทคโนโลยี และการทดลองต่าง ๆ ทำให้ฉากมีบรรยากาศการเดตและการเรียนรู้ร่วมกัน",
        significance: "เป็นฉากที่ช่วยพัฒนาความสัมพันธ์ของตัวละครหลักผ่านกิจกรรมร่วมกัน และเป็นสถานที่จริงที่สามารถตามรอยได้",
        address: "Jimei, Xiamen, Fujian, China",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือระบบขนส่งสาธารณะใน Xiamen",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "nowwa Nuowa Coffee",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านกาแฟในย่าน Jimei/Software Park ซึ่งเป็นพื้นที่เดียวกับเส้นทางไปศูนย์วิทยาศาสตร์"
            }
        ],
        hotels: [
            {
                name: "Wyndham Grand Plaza Royale Jimei Xiamen",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "โรงแรมในเขต Jimei และอยู่ในกลุ่มที่พักใกล้ Chengyi Science and Technology Exploration Center"
            }
        ]
    },

    "fengyangyi-village": {
        id: "fengyangyi-village",
        country: "จีน",
        series: "Meet Yourself",
        location: "ต้าหลี่, ยูนนาน, จีน",
        name: "Fengyangyi Village (凤阳邑村)",
        image: "/images/place/place-01.jpg",
        description: "หมู่บ้านไป๋บนเส้นทาง Ancient Tea-Horse Road ที่ใช้เป็นต้นแบบและสถานที่ถ่ายทำของ Yunmiao Village รวมถึง Youfeng Courtyard",
        episode: "ปรากฏตั้งแต่ช่วงต้นเรื่องและต่อเนื่องหลายตอน แต่ไม่ได้ให้เลข EP รายฉากครบทุกฉาก",
        scene: "Xu Hongdou ย้ายเข้ามาอยู่ที่ Youfeng Courtyard และเริ่มใช้ชีวิตร่วมกับคนในหมู่บ้าน",
        event: "การย้ายมาอยู่หมู่บ้านทำให้ Xu Hongdou ได้พบ Xie Zhiyao และผู้คนรอบตัว ก่อนค่อย ๆ ปรับตัวกับชีวิตชนบทและเริ่มต้นความสัมพันธ์ใหม่",
        significance: "เป็นหนึ่งในหัวใจของเรื่อง เพราะเป็นพื้นที่ที่ตัวละครหลักพัก ฟื้นฟูจิตใจ ใช้ชีวิตประจำวัน และพัฒนาความสัมพันธ์",
        address: "Fengyangyi Village, Dali, Yunnan, China",
        openingHours: "พื้นที่หมู่บ้านและสถานที่แต่ละแห่งแตกต่างกัน",
        admission: "ควรตรวจสอบข้อมูลก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์จาก Dali",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "Qiu Garden Coffee (楸园咖啡)",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ภายใน Fengyangyi Village ซึ่งข้อมูลการตามรอยระบุว่าใช้เป็นโลเคชันของ Gesanghua Restaurant"
            }
        ],
        hotels: [
            {
                name: "Youfeng Courtyard (有风小院)",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "ที่พัก/เกสต์เฮาส์ที่ใช้เป็นต้นแบบและโลเคชันของที่พักในเรื่อง อยู่ใน Fengyangyi Village"
            }
        ]
    },

    "erhai-lake": {
        id: "erhai-lake",
        country: "จีน",
        series: "Meet Yourself",
        location: "ต้าหลี่, ยูนนาน, จีน",
        name: "Erhai Lake (洱海)",
        image: "/images/place/place-02.jpg",
        description: "ทะเลสาบขนาดใหญ่ทางตะวันออกของต้าหลี่ เป็นหนึ่งในภูมิทัศน์สำคัญของเรื่องและปรากฏในฉากเดินทาง ขี่จักรยาน และสนทนาระหว่างตัวละคร",
        episode: "EP.3",
        scene: "Xu Hongdou ออกไปตามหา Xie Xiaochun's Café และ Xie Zhiyao พาเธอเดินทางผ่านบริเวณ Erhai Lake",
        event: "ทั้งคู่หยุดพูดคุยริมทะเลสาบ ขณะที่ Xie Zhiyao เล่าเรื่องวัยเด็กและชีวิตในพื้นที่ ทำให้ Xu Hongdou เริ่มรู้สึกสงบและเปิดใจต่อสถานที่แห่งนี้",
        significance: "ทะเลสาบเป็นองค์ประกอบหลักของบรรยากาศแบบ slow life และช่วยเชื่อมการเดินทางของตัวละครกับธรรมชาติของต้าหลี่",
        address: "Erhai Lake, Dali, Yunnan, China",
        openingHours: "พื้นที่ริมทะเลสาบเปิดตามพื้นที่ท่องเที่ยว",
        admission: "ขึ้นอยู่กับจุดท่องเที่ยวที่เข้าชม",
        transportation: "เดินทางด้วยรถยนต์ รถจักรยาน หรือขนส่งท้องถิ่นรอบต้าหลี่",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Baxi Coffee",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านกาแฟในเมืองต้าหลี่ เหมาะสำหรับใช้เป็นจุดพักก่อนหรือหลังเที่ยวเส้นทางรอบ Erhai"
            }
        ],
        hotels: [
            {
                name: "Dali Village",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "ที่พักบริเวณฝั่งตะวันตกของ Erhai ในเมืองต้าหลี่ เหมาะสำหรับเป็นฐานพักเที่ยวทะเลสาบและหมู่บ้านโดยรอบ"
            }
        ]
    },

    "caihuaqing-qingqiu": {
        id: "caihuaqing-qingqiu",
        country: "จีน",
        series: "Eternal Love",
        location: "Puzhehei Scenic Area, Yunnan, China",
        name: "Caihuaqing / Qingqiu",
        image: "/images/place/place-01.jpg",
        description: "พื้นที่ธรรมชาติใน Puzhehei ที่ใช้เป็นภาพภายนอกของ Qingqiu และ Ten Miles of Peach Blossom โดยฉากบ้านและสวนบางส่วนเป็นฉากที่สร้างขึ้นเพื่อการถ่ายทำ",
        episode: "ปรากฏหลายช่วงของเรื่อง แต่ไม่ได้ระบุเลข EP รายฉากครบถ้วน",
        scene: "ฉากภายนอกของ Qingqiu และป่า Peach Blossom รวมถึงภูมิทัศน์ที่ใช้ประกอบเรื่องราวของ Bai Qian และ Ye Hua",
        event: "ภูมิทัศน์ของ Puzhehei ถูกใช้สร้างโลกของ Qingqiu ให้มีภูเขา ทะเลสาบ และพื้นที่สีเขียวที่เชื่อมกับเรื่องราวของตัวละคร",
        significance: "เป็นหนึ่งในโลเคชันธรรมชาติจริงที่ทำให้โลกแฟนตาซีของเรื่องเชื่อมกับสถานที่ท่องเที่ยวในปัจจุบันได้",
        address: "Puzhehei Scenic Area, Yunnan, China",
        openingHours: "ขึ้นอยู่กับพื้นที่ท่องเที่ยว",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถท้องถิ่นใน Puzhehei",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "云·夕湖落日湖景咖啡餐吧",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่/ร้านอาหารริมทะเลสาบใน Puzhehei Village เหมาะสำหรับชมบรรยากาศก่อนหรือหลังตามรอย"
            }
        ],
        hotels: [
            {
                name: "普者黑泰瑞福寓客栈",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "ที่พักใน Puzhehei Village เหมาะสำหรับใช้เป็นฐานพักเพื่อเดินทางต่อไปยังจุดต่าง ๆ"
            }
        ]
    },

    "xiangshan-movie-town": {
        id: "xiangshan-movie-town",
        country: "จีน",
        series: "Eternal Love",
        location: "หนิงโป, เจ้อเจียง, จีน",
        name: "Xiangshan Movie & Television Town",
        image: "/images/place/place-02.jpg",
        description: "เมืองภาพยนตร์และโทรทัศน์ขนาดใหญ่ที่ใช้สร้างฉากส่วนใหญ่ของโลกแฟนตาซีใน Eternal Love",
        episode: "ปรากฏตลอดเรื่องในหลายฉาก เนื่องจากเป็นฐานถ่ายทำหลัก แต่ไม่ระบุเลข EP รายฉากเฉพาะที่ยังไม่มีหลักฐานตรง",
        scene: "ฉากในโลกแฟนตาซี เช่น พระราชวัง เมือง และพื้นที่ที่สร้างขึ้นสำหรับ Qingqiu, Heavenly Palace และโลกอื่น ๆ",
        event: "ทีมงานสร้างฉากขึ้นใหม่จำนวนมากเพื่อใช้แทนโลกในเรื่อง ทำให้ตัวละครสามารถเคลื่อนเรื่องราวระหว่างโลกแฟนตาซีต่าง ๆ ได้",
        significance: "เป็นสถานที่ถ่ายทำหลักของซีรีส์และช่วยสร้างสเกลของโลกแฟนตาซี โดยข้อมูลการผลิตระบุว่ามากกว่า 80% ของฉากถูกสร้างขึ้นใหม่",
        address: "Xiangshan, Ningbo, Zhejiang, China",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารไปยัง Xiangshan",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Xiangshan Restaurant",
                type: "ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านอาหารใกล้พื้นที่ Xiangshan Film and Television Town"
            }
        ],
        hotels: [
            {
                name: "LESTAY HOTEL BY LANDISON HIIN XIANGSHAN",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "โรงแรมใน Xinqiao Town อยู่ประมาณ 0.58 กม. จาก Xiangshan Global Studios"
            }
        ]
    },

    "songji-water-mill": {
        id: "songji-water-mill",
        country: "จีน",
        series: "A Dream of Splendor",
        location: "Wuxi, Jiangsu, China",
        name: "Songji Water Mill / 水浒城 (Water Margin City)",
        image: "/images/place/place-01.jpg",
        description: "宋记水磨坊 ภายใน Water Margin City เป็นสถานที่ถ่ายทำของ 赵氏茶铺 ซึ่งในเรื่องตั้งอยู่ที่钱塘 และเป็นฉากสำคัญของช่วงต้นเรื่อง",
        episode: "EP.1",
        scene: "เปิดเรื่องด้วย 赵盼儿 ใน 茶铺 ริมน้ำและพื้นที่บ้านเมืองแบบ Jiangnan ก่อนเรื่องราวการเดินทางเข้าสู่เส้นเรื่องหลัก",
        event: "赵盼儿 ดำเนินกิจการร้านชาและใช้ชีวิตอยู่ที่钱塘 ก่อนรับรู้เรื่อง欧阳旭 และตัดสินใจออกเดินทางเพื่อทวงความเป็นธรรม",
        significance: "เป็นจุดเริ่มต้นของเส้นเรื่องและเป็นพื้นที่ที่กำหนดภาพจำของ 赵氏茶铺 รวมถึงบรรยากาศเมืองน้ำแบบ Jiangnan ของเรื่อง",
        address: "Water Margin City, Wuxi, Jiangsu, China",
        openingHours: "ควรตรวจสอบกับสถานที่ก่อนเดินทาง",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารใน Wuxi",
        gallery: [
            "/images/place/place-01.jpg",
            "/images/place/place-02.jpg"
        ],
        restaurants: [
            {
                name: "XiErDun Yi Lin Hotel Café",
                type: "คาเฟ่ / ร้านอาหาร",
                image: "/images/place/place-01.jpg",
                description: "คาเฟ่ในพื้นที่รีสอร์ต Shanshui City ซึ่งอยู่ในโซนเดียวกับกลุ่มสถานที่ท่องเที่ยว Water Margin/Three Kingdoms Scenic"
            }
        ],
        hotels: [
            {
                name: "TaiHu HuaYuan Hotel",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "โรงแรมในพื้นที่ Shanshui City Scenic Resort เหมาะสำหรับใช้เป็นฐานพักเพื่อเที่ยว Water Margin City และพื้นที่รอบ Taihu"
            }
        ]
    },

    "wanslang-bridge": {
        id: "wanslang-bridge",
        country: "จีน",
        series: "A Dream of Splendor",
        location: "Yuantouzhu, Wuxi, China",
        name: "Wanslang Bridge / 万浪桥",
        image: "/images/place/place-02.jpg",
        description: "สะพานและพื้นที่ริมทะเลสาบ Taihu ภายใน Yuantouzhu Scenic Area ใช้เป็นฉากริมทะเลสาบของเรื่อง",
        episode: "ปรากฏในฉากของเรื่อง แต่ยังไม่ระบุเลข EP อย่างชัดเจน",
        scene: "赵盼儿 และ 孙三娘 เดินเล่นและพูดคุยกันริมทะเลสาบ",
        event: "ทั้งคู่ใช้เวลาเดินพูดคุยกันริม Taihu และฉากถูกถ่ายให้เห็นภูมิทัศน์กว้างของทะเลสาบแทนบรรยากาศ Jiangnan",
        significance: "เป็นหนึ่งในฉากธรรมชาติที่ช่วยให้เรื่องมีภาพจำแบบเมืองน้ำและเป็นโลเคชันจริงที่สามารถตามรอยได้",
        address: "Yuantouzhu Scenic Area, Wuxi, Jiangsu, China",
        openingHours: "ขึ้นอยู่กับเวลาทำการของพื้นที่ Yuantouzhu",
        admission: "ควรตรวจสอบข้อมูลล่าสุดก่อนเดินทาง",
        transportation: "เดินทางด้วยรถยนต์หรือรถโดยสารไปยัง Yuantouzhu",
        gallery: [
            "/images/place/place-02.jpg",
            "/images/place/place-01.jpg"
        ],
        restaurants: [
            {
                name: "Guangfu Temple Vegetarian Noodle Restaurant",
                type: "ร้านอาหาร",
                image: "/images/place/place-02.jpg",
                description: "ร้านอาหารมังสวิรัติภายในพื้นที่ Yuantouzhu เหมาะสำหรับแวะรับประทานอาหารระหว่างเที่ยวสวนและทะเลสาบ"
            }
        ],
        hotels: [
            {
                name: "Wuxi Sakura Villa",
                type: "ที่พัก",
                image: "/images/countries/chainas.jpg",
                description: "ที่พักใกล้ Yuantouzhu โดยข้อมูลที่พักระบุระยะประมาณ 0.58 กม. จากพื้นที่ Yuantouzhu"
            }
        ]
    }
};

const place = placeDetailData[placeId];

if (!place) {
    document.querySelector("main").innerHTML = `
        <section class="place-not-found">
            <h1>ไม่พบข้อมูลสถานที่</h1>
            <p>ไม่พบสถานที่ที่คุณกำลังค้นหา</p>
            <a href="/pages/series.html?category=places" class="btn-primary">
                กลับไปดูสถานที่ทั้งหมด
            </a>
        </section>
    `;
} else {
    renderPlaceDetail(place);
}

function renderPlaceDetail(place) {
    document.getElementById("placeHeroImage").src = place.image;
    document.getElementById("placeHeroImage").alt = place.name;

    document.getElementById("placeCountry").textContent = place.country;
    document.getElementById("placeName").textContent = place.name;

    document.querySelector("#placeLocation span").textContent =
        place.location;

    document.getElementById("placeDescription").textContent =
        place.description;

    document.getElementById("sceneSeries").textContent =
        place.series;

    document.getElementById("sceneEpisode").textContent =
        place.episode;

    document.getElementById("sceneDescription").textContent =
        place.scene;

    document.getElementById("sceneEvent").textContent =
        place.event;

    document.getElementById("sceneSignificance").textContent =
        place.significance;

    document.getElementById("travelAddress").textContent =
        place.address;

    document.getElementById("travelOpeningHours").textContent =
        place.openingHours;

    document.getElementById("travelAdmission").textContent =
        place.admission;

    document.getElementById("travelTransportation").textContent =
        place.transportation;

    document.getElementById("mapButton").href =
        `/pages/map.html?place=${place.id}`;

    initFavorite(place);

    renderGallery(place.gallery);
    renderNearby(place);
}

function renderGallery(images) {
    const gallery = document.getElementById("placeGallery");

    gallery.innerHTML = images.map(image => `
        <div class="gallery-item">
            <img src="${image}" alt="รูปสถานที่">
        </div>
    `).join("");
}

function renderNearby(place) {
    const grid = document.getElementById("nearbyGrid");

    const restaurants = (place.restaurants || []).map(item => ({
        ...item,
        category: item.type || "ร้านอาหาร"
    }));

    const hotels = (place.hotels || []).map(item => ({
        ...item,
        category: item.type || "ที่พัก"
    }));

    const nearby = [...restaurants, ...hotels];

    if (nearby.length === 0) {
        grid.innerHTML = `
            <p class="no-nearby">
                ยังไม่มีข้อมูลสถานที่ใกล้เคียง
            </p>
        `;
        return;
    }

    grid.innerHTML = nearby.map(item => `
        <article class="nearby-card">
            <img src="${item.image}" alt="${item.name}">

            <div class="nearby-card-body">
                <span>${item.category}</span>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        </article>
    `).join("");
}

function initFavorite(place) {
    const favoriteButton = document.getElementById("favoriteButton");

    if (!favoriteButton) return;

    let favorites =
        JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

    const isFavorite = favorites.some(
        item => item.id === place.id && item.type === "place"
    );

    if (isFavorite) {
        favoriteButton.classList.add("active");
        favoriteButton.innerHTML =
            '<i class="bi bi-heart-fill"></i>';
        favoriteButton.setAttribute("aria-label", "ลบออกจากรายการโปรด");
        favoriteButton.setAttribute("title", "ลบออกจากรายการโปรด");
    }

    favoriteButton.addEventListener("click", () => {
        favorites =
            JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

        const index = favorites.findIndex(
            item => item.id === place.id && item.type === "place"
        );

        if (index === -1) {
            favorites.push({
                id: place.id,
                type: "place",
                title: place.name,
                image: place.image,
                url: `/pages/place_detail.html?place=${place.id}`
            });

            favoriteButton.classList.add("active");
            favoriteButton.innerHTML =
                '<i class="bi bi-heart-fill"></i>';
            favoriteButton.setAttribute(
                "aria-label",
                "ลบออกจากรายการโปรด"
            );
            favoriteButton.setAttribute(
                "title",
                "ลบออกจากรายการโปรด"
            );
        } else {
            favorites.splice(index, 1);

            favoriteButton.classList.remove("active");
            favoriteButton.innerHTML =
                '<i class="bi bi-heart"></i>';
            favoriteButton.setAttribute(
                "aria-label",
                "เพิ่มในรายการโปรด"
            );
            favoriteButton.setAttribute(
                "title",
                "เพิ่มในรายการโปรด"
            );
        }

        localStorage.setItem(
            "seriesTrailFavorites",
            JSON.stringify(favorites)
        );
    });
}