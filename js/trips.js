const tripsData = [
    {
        id: "phuket-series-trail",
        country: "ไทย",
        location: "ภูเก็ต",
        title: "ตามรอยแปลรักฉันด้วยใจเธอ",
        duration: "2 วัน 1 คืน",
        places: 2,
        season: "ฤดูร้อน",
        series: "แปลรักฉันด้วยใจเธอ",
        type: "ทะเล / เมืองเก่า",
        image: "/images/place/place-oldtown.jpg",
        description: "เที่ยวเมืองเก่าภูเก็ตและแหลมพรหมเทพ ตามรอยบรรยากาศสำคัญจากซีรีย์",
        detail: "trip_detail.html?trip=phuket-series-trail"
    },

    {
        id: "phapan-dao-trail",
        country: "ไทย",
        location: "เชียงใหม่",
        title: "ตามรอยนิทานพันดาว",
        duration: "2 วัน 1 คืน",
        places: 2,
        season: "ฤดูหนาว",
        series: "นิทานพันดาว",
        type: "ธรรมชาติ / ภูเขา",
        image: "/images/place/bantean.jpg",
        description: "เดินทางขึ้นดอย สัมผัสบรรยากาศธรรมชาติและชุมชนบนพื้นที่สูง",
        detail: "trip_detail.html?trip=phapan-dao-trail"
    },

    {
        id: "ayutthaya-trail",
        country: "ไทย",
        location: "พระนครศรีอยุธยา",
        title: "ตามรอยบุพเพสันนิวาส",
        duration: "1 วัน",
        places: 2,
        season: "ฤดูหนาว",
        series: "บุพเพสันนิวาส",
        type: "ประวัติศาสตร์ / เมืองเก่า",
        image: "/images/place/watchaiwanaram.jpg",
        description: "เที่ยวโบราณสถานสำคัญในอยุธยา พร้อมสัมผัสบรรยากาศเมืองเก่าจากซีรีย์",
        detail: "trip_detail.html?trip=ayutthaya-trail"
    },

    {
        id: "chiang-mai-trail",
        country: "ไทย",
        location: "เชียงใหม่",
        title: "ตามรอยกลิ่นกาสะลอง",
        duration: "2 วัน 1 คืน",
        places: 2,
        season: "ฤดูฝน",
        series: "กลิ่นกาสะลอง",
        type: "วัฒนธรรม / เมืองเก่า",
        image: "/images/place/wattonkwen.jpg",
        description: "เที่ยววัดและสถานที่สำคัญท่ามกลางบรรยากาศล้านนา",
        detail: "trip_detail.html?trip=chiang-mai-trail"
    },

    {
        id: "gongjin-trail",
        country: "เกาหลีใต้",
        location: "โพฮัง",
        title: "ตามรอย Hometown Cha-Cha-Cha",
        duration: "2 วัน 1 คืน",
        places: 2,
        season: "ฤดูร้อน",
        series: "Hometown Cha-Cha-Cha",
        type: "ทะเล / เมืองชายฝั่ง",
        image: "/images/place/wolpobeach.jpg",
        description: "เดินเที่ยวตลาดและชายหาดในพื้นที่โพฮัง พร้อมสัมผัสบรรยากาศหมู่บ้านริมทะเล",
        detail: "trip_detail.html?trip=gongjin-trail"
    },

    {
        id: "otaru-first-love",
        country: "ญี่ปุ่น",
        location: "โอตารุ",
        title: "ตามรอย First Love",
        duration: "2 วัน 1 คืน",
        places: 2,
        season: "ฤดูหนาว",
        series: "First Love",
        type: "เมืองเก่า / หิมะ",
        image: "/images/place/otarucanal.jpg",
        description: "เดินเล่นริมคลองและชายหาดในโอตารุ ท่ามกลางบรรยากาศแบบในซีรีย์",
        detail: "trip_detail.html?trip=otaru-first-love"
    },

    {
        id: "kamakura-trail",
        country: "ญี่ปุ่น",
        location: "คามาคุระ",
        title: "ตามรอยซีรีย์ริมทะเลคามาคุระ",
        duration: "1 วัน",
        places: 2,
        season: "ฤดูร้อน",
        series: "Saigo Kara Nibanme no Koi",
        type: "ทะเล / เมืองชายฝั่ง",
        image: "/images/place/yuigahamabeach.png",
        description: "เที่ยวสถานที่ริมทะเลและสัมผัสบรรยากาศเมืองคามาคุระแบบสบาย ๆ",
        detail: "trip_detail.html?trip=kamakura-trail"
    },

    {
        id: "dali-hidden-life",
        country: "จีน",
        location: "ต้าหลี่",
        title: "ตามรอย Meet Yourself",
        duration: "3 วัน 2 คืน",
        places: 2,
        season: "ฤดูใบไม้ผลิ",
        series: "Meet Yourself",
        type: "ธรรมชาติ / Slow Life",
        image: "/images/place/erhailake.jpg",
        description: "พักผ่อนท่ามกลางธรรมชาติของต้าหลี่และทะเลสาบเอ๋อไห่ในบรรยากาศ slow life",
        detail: "trip_detail.html?trip=dali-hidden-life"
    }
];

const tripGrid = document.getElementById("tripGrid");
const tripSearch = document.getElementById("tripSearch");
const tripResultCount = document.getElementById("tripResultCount");
const tripEmpty = document.getElementById("tripEmpty");

const filterButtons = document.querySelectorAll(".trip-filter");

let currentCountry = "all";

function renderTrips(data) {
    tripGrid.innerHTML = "";
    tripResultCount.textContent = `พบ ${data.length} ทริป`;

    if (data.length === 0) {
        tripEmpty.hidden = false;
        return;
    }

    tripEmpty.hidden = true;

    data.forEach(trip => {
        tripGrid.innerHTML += `
            <article class="trip-card">

                <div class="trip-image">
                    <img src="${trip.image}" alt="${trip.title}">
                </div>

                <div class="trip-card-body">

                    <span class="trip-country">
                        ${trip.country}
                    </span>

                    <h3>
                        ${trip.title}
                    </h3>

                    <div class="trip-info">
                        <span>
                            <i class="bi bi-clock"></i>
                            ${trip.duration}
                        </span>

                        <span>
                            <i class="bi bi-geo-alt"></i>
                            ${trip.places} สถานที่
                        </span>
                    </div>

                    <div class="trip-divider"></div>

                    <a href="${trip.detail}" class="trip-detail">
                        เปิดดูเส้นทาง
                        <i class="bi bi-arrow-right"></i>
                    </a>

                </div>

            </article>
        `;
    });
}

function filterTrips() {

    const keyword = tripSearch.value
        .toLowerCase()
        .trim();

    let filteredTrips = tripsData.filter(trip => {

        const matchCountry =
            currentCountry === "all" ||
            trip.country === currentCountry;

        const searchText = `
            ${trip.title}
            ${trip.country}
            ${trip.location}
            ${trip.series}
            ${trip.type}
            ${trip.description}
        `.toLowerCase();

        const matchSearch =
            keyword === "" ||
            searchText.includes(keyword);

        return matchCountry && matchSearch;

    });

    renderTrips(filteredTrips);
}

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentCountry = this.dataset.filter;

        filterTrips();

    });

});

tripSearch.addEventListener(
    "input",
    filterTrips
);

renderTrips(tripsData);
