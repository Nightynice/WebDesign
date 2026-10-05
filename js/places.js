const placesData = [

    {
        id: "phuket-old-town",
        category: "places",
        country: "ไทย",
        series: "แปลรักฉันด้วยใจเธอ",
        location: "ภูเก็ต",
        name: "เมืองเก่าภูเก็ต",
        image: "/images/place/place-oldtown.jpg",
        description: "ย่านเมืองเก่าภูเก็ตที่มีสถาปัตยกรรมชิโนโปรตุกีสและบรรยากาศโดดเด่นของเมืองเก่า",
        detail: "place_detail.html?place=phuket-old-town"
    },

    {
        id: "promthep-cape",
        category: "places",
        country: "ไทย",
        series: "แปลรักฉันด้วยใจเธอ",
        location: "ภูเก็ต",
        name: "แหลมพรหมเทพ",
        image: "/images/place/lampromtep.jpg",
        description: "จุดชมวิวทะเลชื่อดังของภูเก็ตที่มีทิวทัศน์และบรรยากาศริมทะเล",
        detail: "place_detail.html?place=promthep-cape"
    },

    {
        id: "phapan-dao-village",
        category: "places",
        country: "ไทย",
        series: "นิทานพันดาว",
        location: "เชียงราย",
        name: "บ้านเทียน – หมู่บ้านผาปันดาว",
        image: "/images/place/bantean.jpg",
        description: "พื้นที่หมู่บ้านบนดอยที่สะท้อนบรรยากาศชนบทและวิถีชีวิตของชุมชนในเรื่อง",
        detail: "place_detail.html?place=phapan-dao-village"
    },

    {
        id: "phapan-dao-viewpoint",
        category: "places",
        country: "ไทย",
        series: "นิทานพันดาว",
        location: "เชียงราย",
        name: "ผาปันดาว จุดชมวิว",
        image: "/images/place/phapundaw.jpg",
        description: "จุดชมวิวธรรมชาติที่สะท้อนบรรยากาศภูเขาและพื้นที่ชุมชนบนดอย",
        detail: "place_detail.html?place=phapan-dao-viewpoint"
    },

    {
        id: "wat-chaiwatthanaram",
        category: "places",
        country: "ไทย",
        series: "บุพเพสันนิวาส",
        location: "พระนครศรีอยุธยา",
        name: "วัดไชยวัฒนาราม",
        image: "/images/place/watchaiwanaram.jpg",
        description: "โบราณสถานสำคัญที่ช่วยสร้างบรรยากาศของกรุงศรีอยุธยาในเรื่อง",
        detail: "place_detail.html?place=wat-chaiwatthanaram"
    },

    {
        id: "wat-phutthaisawan",
        category: "places",
        country: "ไทย",
        series: "บุพเพสันนิวาส",
        location: "พระนครศรีอยุธยา",
        name: "วัดพุทไธศวรรย์",
        image: "/images/place/watputthaisawan.png",
        description: "วัดโบราณริมแม่น้ำเจ้าพระยาที่ช่วยสร้างบรรยากาศของกรุงศรีอยุธยา",
        detail: "place_detail.html?place=wat-phutthaisawan"
    },

    {
        id: "wat-ton-kwen",
        category: "places",
        country: "ไทย",
        series: "กลิ่นกาสะลอง",
        location: "เชียงใหม่",
        name: "วัดต้นเกว๋น (วัดอินทราวาส)",
        image: "/images/place/wattonkwen.jpg",
        description: "วัดเก่าแก่ที่มีสถาปัตยกรรมล้านนาและบรรยากาศที่สะท้อนเอกลักษณ์ของเชียงใหม่",
        detail: "place_detail.html?place=wat-ton-kwen"
    },

    {
        id: "wat-lok-molee",
        category: "places",
        country: "ไทย",
        series: "กลิ่นกาสะลอง",
        location: "เชียงใหม่",
        name: "วัดโลกโมฬี",
        image: "/images/place/watlokmolee.jpg",
        description: "วัดสำคัญในเมืองเชียงใหม่ที่มีสถาปัตยกรรมล้านนาและบรรยากาศทางประวัติศาสตร์",
        detail: "place_detail.html?place=wat-lok-molee"
    },

    {
        id: "cheongha-market",
        category: "places",
        country: "เกาหลีใต้",
        series: "Hometown Cha-Cha-Cha",
        location: "โพฮัง",
        name: "ตลาดชองฮา (Cheongha Market / Gongjin Market)",
        image: "/images/place/cheonghamarket.jpg",
        description: "ตลาดจริงที่ใช้แทนตลาดกงจินและเป็นพื้นที่สำคัญของชีวิตประจำวันในเรื่อง",
        detail: "place_detail.html?place=cheongha-market"
    },

    {
        id: "wolpo-beach",
        category: "places",
        country: "เกาหลีใต้",
        series: "Hometown Cha-Cha-Cha",
        location: "โพฮัง",
        name: "Wolpo Beach",
        image: "/images/place/wolpobeach.jpg",
        description: "ชายหาดริมทะเลที่ใช้เป็นหนึ่งในสถานที่สำคัญของเรื่องและภาพจำเกี่ยวกับกงจิน",
        detail: "place_detail.html?place=wolpo-beach"
    },

    {
        id: "gamgodang-gil",
        category: "places",
        country: "เกาหลีใต้",
        series: "Can This Love Be Translated?",
        location: "โซล",
        name: "Gamgodang-gil",
        image: "/images/place/gamgodang-gil.png",
        description: "ถนนในโซลที่ใช้เป็นหนึ่งในสถานที่ถ่ายทำของเรื่อง",
        detail: "place_detail.html?place=gamgodang-gil"
    },

    {
        id: "pinodia-expo-tower",
        category: "places",
        country: "เกาหลีใต้",
        series: "Can This Love Be Translated?",
        location: "ซกโช",
        name: "Pinodia Expo Tower",
        image: "/images/place/pinodiaexpotower.jpg",
        description: "จุดชมวิวและสถานที่ในเมืองซกโชที่ใช้เป็นส่วนหนึ่งของเส้นทางถ่ายทำ",
        detail: "place_detail.html?place=pinodia-expo-tower"
    },

    {
        id: "gwanghwamun-square",
        category: "places",
        country: "เกาหลีใต้",
        series: "The King: Eternal Monarch",
        location: "โซล",
        name: "Gwanghwamun Square",
        image: "/images/place/gwanghwamun.jpg",
        description: "จัตุรัสใจกลางกรุงโซลที่ปรากฏในฉากสำคัญของเรื่อง",
        detail: "place_detail.html?place=gwanghwamun-square"
    },

    {
        id: "ahopsan-bamboo-forest",
        category: "places",
        country: "เกาหลีใต้",
        series: "The King: Eternal Monarch",
        location: "ปูซาน",
        name: "Ahopsan Bamboo Forest",
        image: "/images/place/ahopsanforest.jpg",
        description: "ป่าไผ่ขนาดใหญ่ที่ใช้เป็นสถานที่สำคัญสำหรับฉากประตูเชื่อมระหว่างสองโลก",
        detail: "place_detail.html?place=ahopsan-bamboo-forest"
    },

    {
        id: "guryongpo-japanese-house-street",
        category: "places",
        country: "เกาหลีใต้",
        series: "When the Camellia Blooms",
        location: "โพฮัง",
        name: "Guryongpo Japanese House Street",
        image: "/images/place/guryongpojapanesehousestreet.png",
        description: "ย่านบ้านญี่ปุ่นเก่าที่ช่วยสร้างบรรยากาศของเมืองและชุมชนในเรื่อง",
        detail: "place_detail.html?place=guryongpo-japanese-house-street"
    },

    {
        id: "guryongpo-modern-history-museum",
        category: "places",
        country: "เกาหลีใต้",
        series: "When the Camellia Blooms",
        location: "โพฮัง",
        name: "Guryongpo Modern History Museum",
        image: "/images/place/guryongpomodernhistorymuseum.png",
        description: "พิพิธภัณฑ์ประวัติศาสตร์สมัยใหม่ในพื้นที่กูรยงโพที่ใช้เป็นหนึ่งในสถานที่ถ่ายทำ",
        detail: "place_detail.html?place=guryongpo-modern-history-museum"
    },

    {
        id: "otaru-canal",
        category: "places",
        country: "ญี่ปุ่น",
        series: "First Love",
        location: "โอตารุ ฮอกไกโด",
        name: "Otaru Canal",
        image: "/images/place/otarucanal.jpg",
        description: "คลองเก่าแก่ของโอตารุที่มีบรรยากาศโรแมนติกและเป็นภาพจำสำคัญของฮอกไกโด",
        detail: "place_detail.html?place=otaru-canal"
    },

    {
        id: "zenibako-beach",
        category: "places",
        country: "ญี่ปุ่น",
        series: "First Love",
        location: "โอตารุ ฮอกไกโด",
        name: "Zenibako Beach",
        image: "/images/place/zenibakobeach.jpg",
        description: "ชายหาดริมทะเลที่สะท้อนบรรยากาศธรรมชาติของฮอกไกโดในเรื่อง",
        detail: "place_detail.html?place=zenibako-beach"
    },

    {
        id: "setagaya-daita-station",
        category: "places",
        country: "ญี่ปุ่น",
        series: "silent",
        location: "โตเกียว",
        name: "Setagaya-Daita Station",
        image: "/images/place/setagaya-daitastation.jpg",
        description: "สถานีรถไฟในโตเกียวที่เป็นหนึ่งในสถานที่สำคัญของเรื่อง",
        detail: "place_detail.html?place=setagaya-daita-station"
    },

    {
        id: "ashikaga-west-high-school",
        category: "places",
        country: "ญี่ปุ่น",
        series: "silent",
        location: "โทจิงิ",
        name: "Former Ashikaga West High School",
        image: "/images/place/formerashikagawesthighschool.png",
        description: "อาคารโรงเรียนเก่าที่ใช้เป็นสถานที่ถ่ายทำและเชื่อมโยงกับความทรงจำของตัวละคร",
        detail: "place_detail.html?place=ashikaga-west-high-school"
    },

    {
        id: "gokurakuji-station",
        category: "places",
        country: "ญี่ปุ่น",
        series: "Saigo Kara Nibanme no Koi",
        location: "คามาคุระ",
        name: "Gokurakuji Station",
        image: "/images/place/gokurakujistation.jpg",
        description: "สถานีรถไฟในคามาคุระที่เป็นหนึ่งในภาพจำของเมืองและบรรยากาศของเรื่อง",
        detail: "place_detail.html?place=gokurakuji-station"
    },

    {
        id: "yuigahama-beach",
        category: "places",
        country: "ญี่ปุ่น",
        series: "Saigo Kara Nibanme no Koi",
        location: "คามาคุระ",
        name: "Yuigahama Beach",
        image: "/images/place/yuigahamabeach.png",
        description: "ชายหาดชื่อดังของคามาคุระที่สะท้อนบรรยากาศริมทะเลของเรื่อง",
        detail: "place_detail.html?place=yuigahama-beach"
    },

    {
        id: "tsurumaki-bridge",
        category: "places",
        country: "ญี่ปุ่น",
        series: "Brush Up Life",
        location: "ฮาดาโนะ จังหวัดคานางาวะ",
        name: "Tsurumaki Bridge",
        image: "/images/place/tsurumakibridge.png",
        description: "สะพานในพื้นที่ฮาดาโนะที่ปรากฏเป็นหนึ่งในสถานที่ถ่ายทำของเรื่อง",
        detail: "place_detail.html?place=tsurumaki-bridge"
    },

    {
        id: "nishihirabatake-park",
        category: "places",
        country: "ญี่ปุ่น",
        series: "Brush Up Life",
        location: "มัตสึดะ จังหวัดคานางาวะ",
        name: "Nishihirabatake Park / Matsuda Herb Garden",
        image: "/images/place/nishihirabatakepark.jpg",
        description: "สวนและจุดชมวิวในมัตสึดะที่ใช้เป็นสถานที่ถ่ายทำของเรื่อง",
        detail: "place_detail.html?place=nishihirabatake-park"
    },

    {
        id: "shapowei",
        category: "places",
        country: "จีน",
        series: "Hidden Love",
        location: "เซียะเหมิน มณฑลฝูเจี้ยน",
        name: "Shapowei (沙坡尾)",
        image: "/images/place/shapowei.jpg",
        description: "ย่านริมทะเลและชุมชนเก่าในเซียะเหมินที่มีบรรยากาศโดดเด่น",
        detail: "place_detail.html?place=shapowei"
    },

    {
        id: "chengyi-science-center",
        category: "places",
        country: "จีน",
        series: "Hidden Love",
        location: "เซียะเหมิน มณฑลฝูเจี้ยน",
        name: "Chengyi Science and Technology Exploration Center",
        image: "/images/place/chengyiscienceandtechnologyexplorationcenter.jpg",
        description: "ศูนย์วิทยาศาสตร์และเทคโนโลยีที่ปรากฏเป็นหนึ่งในสถานที่ของเรื่อง",
        detail: "place_detail.html?place=chengyi-science-center"
    },

    {
        id: "fengyangyi-village",
        category: "places",
        country: "จีน",
        series: "Meet Yourself",
        location: "ต้าหลี่ มณฑลยูนนาน",
        name: "Fengyangyi Village (凤阳邑村)",
        image: "/images/place/fengyangyivillage.jpg",
        description: "หมู่บ้านเก่าแก่ในต้าหลี่ที่สะท้อนบรรยากาศชนบทและวิถีชีวิตของยูนนาน",
        detail: "place_detail.html?place=fengyangyi-village"
    },

    {
        id: "erhai-lake",
        category: "places",
        country: "จีน",
        series: "Meet Yourself",
        location: "ต้าหลี่ มณฑลยูนนาน",
        name: "Erhai Lake (洱海)",
        image: "/images/place/erhailake.jpg",
        description: "ทะเลสาบขนาดใหญ่ในต้าหลี่ที่เป็นหนึ่งในภาพจำด้านธรรมชาติของเรื่อง",
        detail: "place_detail.html?place=erhai-lake"
    },

    {
        id: "caihuaqing-qingqiu",
        category: "places",
        country: "จีน",
        series: "Eternal Love",
        location: "ผู่เจ่อเฮย มณฑลยูนนาน",
        name: "Caihuaqing / Qingqiu, Puzhehei Scenic Area",
        image: "/images/place/qingqiu,puzheheiscenicarea.png",
        description: "พื้นที่ธรรมชาติใน Puzhehei ที่ใช้เป็นฉากสำคัญของโลกแฟนตาซีในเรื่อง",
        detail: "place_detail.html?place=caihuaqing-qingqiu"
    },

    {
        id: "xiangshan-movie-town",
        category: "places",
        country: "จีน",
        series: "Eternal Love",
        location: "หนิงโป มณฑลเจ้อเจียง",
        name: "Xiangshan Movie & Television Town",
        image: "/images/place/xiangshanmovie.jpg",
        description: "เมืองถ่ายทำภาพยนตร์และซีรีส์ขนาดใหญ่ที่ใช้สร้างฉากย้อนยุค",
        detail: "place_detail.html?place=xiangshan-movie-town"
    },

    {
        id: "songji-water-mill",
        category: "places",
        country: "จีน",
        series: "A Dream of Splendor",
        location: "อู๋ซี มณฑลเจียงซู",
        name: "Songji Water Mill / Water Margin City",
        image: "/images/place/songjiwatermill.jpg",
        description: "พื้นที่จำลองเมืองโบราณและสถาปัตยกรรมริมน้ำที่ใช้สร้างบรรยากาศย้อนยุค",
        detail: "place_detail.html?place=songji-water-mill"
    },

    {
        id: "wanslang-bridge",
        category: "places",
        country: "จีน",
        series: "A Dream of Splendor",
        location: "อู๋ซี มณฑลเจียงซู",
        name: "Wanslang Bridge / 万浪桥",
        image: "/images/place/wanslangbridge.jpg",
        description: "สะพานและพื้นที่ริมน้ำที่ช่วยสร้างบรรยากาศเมืองโบราณแบบ Jiangnan",
        detail: "place_detail.html?place=wanslang-bridge"
    }
];
