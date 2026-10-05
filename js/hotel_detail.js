const urlParams = new URLSearchParams(window.location.search);
const hotelId = urlParams.get("hotel");

const hotelExtraData = {

    "phuket-old-town-hotel": {
        hotelId: "phuket-old-town-hotel",

        address: "ย่านเมืองเก่าภูเก็ต จังหวัดภูเก็ต",

        description:
            "ที่พักในย่านเมืองเก่าภูเก็ต เหมาะสำหรับผู้ที่ต้องการสัมผัสบรรยากาศเมืองเก่าและเดินทางตามรอยสถานที่จากแปลรักฉันด้วยใจเธอ",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "ห้องพักมาตรฐาน",
                description: "ห้องพักขนาดกะทัดรัด เหมาะสำหรับพักผ่อนหลังเดินเที่ยวเมืองเก่า",
                price: "ประมาณ ฿2,000 / คืน"
            },
            {
                name: "ห้องพักดีลักซ์",
                description: "ห้องพักกว้างขึ้น เหมาะสำหรับการพักผ่อนแบบสบาย ๆ",
                price: "ประมาณ ฿3,000 / คืน"
            },
            {
                name: "ห้องสวีท",
                description: "ห้องพักขนาดใหญ่ เหมาะสำหรับการพักหลายวัน",
                price: "ประมาณ ฿4,000 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "สามารถเดินเที่ยวสถานที่ต่าง ๆ ในย่านเมืองเก่าได้",
            "เหมาะสำหรับจัดเส้นทางร่วมกับเมืองเก่าภูเก็ต"
        ],

        facilities: [
            "Wi-Fi",
            "ห้องอาหาร",
            "เครื่องปรับอากาศ",
            "บริการทำความสะอาด",
            "พื้นที่พักผ่อน"
        ],

        mapQuery: "เมืองเก่าภูเก็ต จังหวัดภูเก็ต"
    },

    "promthep-hotel": {
        hotelId: "promthep-hotel",

        address: "บริเวณหาดในหาน จังหวัดภูเก็ต",

        description:
            "ที่พักบริเวณชายฝั่งทางตอนใต้ของภูเก็ต เหมาะสำหรับผู้ที่ต้องการเที่ยวแหลมพรหมเทพและสถานที่ท่องเที่ยวริมทะเลใกล้เคียง",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "ห้องพักมาตรฐาน",
                description: "ห้องพักสำหรับการพักผ่อนทั่วไป พร้อมพื้นที่ใช้งานที่เป็นสัดส่วน",
                price: "ประมาณ ฿3,000 / คืน"
            },
            {
                name: "ห้องพักวิวทะเล",
                description: "ห้องพักที่เน้นบรรยากาศและวิวบริเวณชายฝั่ง",
                price: "ประมาณ ฿5,000 / คืน"
            },
            {
                name: "ห้องพักขนาดใหญ่",
                description: "เหมาะสำหรับผู้ที่ต้องการพื้นที่พักผ่อนมากขึ้น",
                price: "ประมาณ ฿7,000 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "เหมาะกับการเที่ยวชายฝั่งทางตอนใต้ของภูเก็ต",
            "ควรใช้รถยนต์หรือรถรับจ้างในการเดินทางระหว่างสถานที่"
        ],

        facilities: [
            "Wi-Fi",
            "สระว่ายน้ำ",
            "ห้องอาหาร",
            "เครื่องปรับอากาศ",
            "พื้นที่พักผ่อน"
        ],

        mapQuery: "The Nai Harn Phuket"
    },

    "cheongha-market-hotel": {
        hotelId: "cheongha-market-hotel",

        address: "พื้นที่โพฮัง จังหวัดคย็องซังบุกโด ประเทศเกาหลีใต้",

        description:
            "ที่พักในพื้นที่โพฮัง เหมาะสำหรับผู้ที่ต้องการเดินทางตามรอย Hometown Cha-Cha-Cha และเที่ยวสถานที่ริมทะเลโดยรอบ",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "Standard Room",
                description: "ห้องพักเรียบง่ายสำหรับการพักผ่อนหลังออกเที่ยว",
                price: "ประมาณ ฿2,500 / คืน"
            },
            {
                name: "Deluxe Room",
                description: "ห้องพักกว้างขึ้น เหมาะสำหรับการพักหลายคืน",
                price: "ประมาณ ฿3,500 / คืน"
            },
            {
                name: "Family Room",
                description: "ห้องพักสำหรับผู้ที่เดินทางเป็นกลุ่มหรือครอบครัว",
                price: "ประมาณ ฿4,500 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "ใช้เป็นฐานเดินทางเที่ยวพื้นที่โพฮัง",
            "เหมาะสำหรับจัดเส้นทางร่วมกับตลาดชองฮาและชายหาด"
        ],

        facilities: [
            "Wi-Fi",
            "ที่จอดรถ",
            "เครื่องปรับอากาศ",
            "ห้องอาหาร",
            "บริการทำความสะอาด"
        ],

        mapQuery: "Cheongha Market Pohang South Korea"
    },

    "wolpo-beach-hotel": {
        hotelId: "wolpo-beach-hotel",

        address: "บริเวณ Wolpo Beach จังหวัดโพฮัง ประเทศเกาหลีใต้",

        description:
            "ที่พักบริเวณชายฝั่งโพฮัง เหมาะสำหรับผู้ที่ต้องการพักใกล้ทะเลและเดินทางตามรอยสถานที่ใน Hometown Cha-Cha-Cha",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "Standard Room",
                description: "ห้องพักเรียบง่าย เหมาะสำหรับการพักระยะสั้น",
                price: "ประมาณ ฿2,300 / คืน"
            },
            {
                name: "Ocean View Room",
                description: "ห้องพักที่เน้นบรรยากาศและวิวทะเล",
                price: "ประมาณ ฿3,500 / คืน"
            },
            {
                name: "Family Room",
                description: "ห้องพักขนาดใหญ่สำหรับการเดินทางหลายคน",
                price: "ประมาณ ฿4,500 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "เหมาะสำหรับคนที่ต้องการเที่ยวพื้นที่ริมทะเล",
            "สามารถจัดเส้นทางร่วมกับ Cheongha Market"
        ],

        facilities: [
            "Wi-Fi",
            "ที่จอดรถ",
            "เครื่องปรับอากาศ",
            "พื้นที่พักผ่อน",
            "ร้านอาหารหรือคาเฟ่"
        ],

        mapQuery: "Wolpo Beach Pohang South Korea"
    },

    "otaru-canal-hotel": {
        hotelId: "otaru-canal-hotel",

        address: "ย่านคลองโอตารุ จังหวัดฮอกไกโด ประเทศญี่ปุ่น",

        description:
            "ที่พักในย่านโอตารุ เหมาะสำหรับเที่ยวคลองโอตารุและสถานที่ต่าง ๆ ในเมือง พร้อมสัมผัสบรรยากาศแบบเดียวกับ First Love",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "Standard Twin",
                description: "ห้องพักแบบเตียงคู่ เหมาะสำหรับการเดินทางสองคน",
                price: "ประมาณ ฿3,000 / คืน"
            },
            {
                name: "Deluxe Room",
                description: "ห้องพักกว้างขึ้น เหมาะสำหรับการพักผ่อนหลายคืน",
                price: "ประมาณ ฿4,000 / คืน"
            },
            {
                name: "Family Room",
                description: "ห้องพักขนาดใหญ่สำหรับผู้ที่เดินทางเป็นกลุ่ม",
                price: "ประมาณ ฿5,500 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "เดินทางสะดวกสำหรับเที่ยวพื้นที่เมืองโอตารุ",
            "เหมาะกับการตามรอย First Love ในช่วงฤดูหนาว"
        ],

        facilities: [
            "Wi-Fi",
            "เครื่องปรับอากาศ",
            "ห้องอาหาร",
            "บริการรับฝากสัมภาระ",
            "พื้นที่พักผ่อน"
        ],

        mapQuery: "Otaru Canal Hokkaido Japan"
    },

    "yuigahama-hotel": {
        hotelId: "yuigahama-hotel",

        address: "บริเวณ Yuigahama เมืองคามาคุระ จังหวัดคานางาวะ ประเทศญี่ปุ่น",

        description:
            "ที่พักใกล้ชายหาดยูอิงาฮามะ เหมาะสำหรับเที่ยวคามาคุระและตามรอยบรรยากาศริมทะเลจาก Saigo Kara Nibanme no Koi",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "Standard Room",
                description: "ห้องพักสำหรับการพักผ่อนทั่วไป",
                price: "ประมาณ ฿3,000 / คืน"
            },
            {
                name: "Ocean View Room",
                description: "ห้องพักที่มองเห็นบรรยากาศบริเวณชายฝั่ง",
                price: "ประมาณ ฿4,000 / คืน"
            },
            {
                name: "Japanese Style Room",
                description: "ห้องพักสไตล์ญี่ปุ่น เหมาะสำหรับสัมผัสบรรยากาศท้องถิ่น",
                price: "ประมาณ ฿5,000 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "เหมาะกับการเดินเที่ยวชายหาดและพื้นที่คามาคุระ",
            "สามารถจัดเส้นทางร่วมกับ Gokurakuji Station และสถานที่ริมทะเล"
        ],

        facilities: [
            "Wi-Fi",
            "เครื่องปรับอากาศ",
            "พื้นที่พักผ่อน",
            "บริการฝากสัมภาระ",
            "ห้องอาหาร"
        ],

        mapQuery: "Yuigahama Beach Kamakura Japan"
    },

    "shapowei-hotel": {
        hotelId: "shapowei-hotel",

        address: "ย่าน Shapowei เมืองเซียะเหมิน มณฑลฝูเจี้ยน ประเทศจีน",

        description:
            "ที่พักในเขตเมืองเซียะเหมิน เหมาะสำหรับผู้ที่ต้องการเที่ยว Shapowei และตามรอยบรรยากาศริมทะเลจาก Hidden Love",

        stayType: "เหมาะสำหรับพัก 1–2 คืน",

        rooms: [
            {
                name: "Standard Room",
                description: "ห้องพักเรียบง่ายสำหรับการพักผ่อน",
                price: "ประมาณ ฿3,500 / คืน"
            },
            {
                name: "Deluxe Room",
                description: "ห้องพักที่มีพื้นที่กว้างขึ้นและเหมาะสำหรับพักหลายคืน",
                price: "ประมาณ ฿4,500 / คืน"
            },
            {
                name: "Sea View Room",
                description: "ห้องพักที่เน้นบรรยากาศบริเวณริมทะเล",
                price: "ประมาณ ฿5,500 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 1–2 คืน",
            "เหมาะสำหรับเที่ยว Shapowei และย่านเมืองเก่าของเซียะเหมิน",
            "สามารถจัดเส้นทางร่วมกับสถานที่ในเรื่อง Hidden Love"
        ],

        facilities: [
            "Wi-Fi",
            "ห้องอาหาร",
            "เครื่องปรับอากาศ",
            "บริการทำความสะอาด",
            "พื้นที่พักผ่อน"
        ],

        mapQuery: "Shapowei Xiamen China"
    },

    "erhai-lake-hotel": {
        hotelId: "erhai-lake-hotel",

        address: "บริเวณทะเลสาบเอ๋อไห่ เมืองต้าหลี่ มณฑลยูนนาน ประเทศจีน",

        description:
            "ที่พักบริเวณทะเลสาบเอ๋อไห่ เหมาะสำหรับผู้ที่ต้องการเที่ยวต้าหลี่และสัมผัสบรรยากาศ slow life แบบเดียวกับ Meet Yourself",

        stayType: "เหมาะสำหรับพัก 2–3 คืน",

        rooms: [
            {
                name: "Standard Room",
                description: "ห้องพักเรียบง่ายสำหรับการพักผ่อน",
                price: "ประมาณ ฿2,500 / คืน"
            },
            {
                name: "Garden View Room",
                description: "ห้องพักที่มองเห็นพื้นที่สีเขียวและบรรยากาศโดยรอบ",
                price: "ประมาณ ฿3,500 / คืน"
            },
            {
                name: "Lake View Room",
                description: "ห้องพักที่เน้นวิวและบรรยากาศบริเวณทะเลสาบ",
                price: "ประมาณ ฿4,500 / คืน"
            }
        ],

        planningInfo: [
            "เหมาะสำหรับพัก 2–3 คืน",
            "เหมาะสำหรับเที่ยว Erhai Lake และพื้นที่โดยรอบ",
            "เหมาะกับการเดินทางแบบ slow life และพักผ่อน"
        ],

        facilities: [
            "Wi-Fi",
            "ห้องอาหาร",
            "พื้นที่พักผ่อน",
            "เครื่องปรับอากาศ",
            "จักรยานหรือบริการเช่าจักรยาน"
        ],

        mapQuery: "Erhai Lake Dali Yunnan China"
    }
};

const hotel = hotelsData.find(item => item.id === hotelId);
const extra = hotelExtraData[hotelId];

if (!hotel || !extra) {
    showNotFound();
} else {
    renderHotelDetail(hotel, extra);
}

function renderHotelDetail(hotel, extra) {

    const mainImage = document.getElementById("hotelMainImage");

    if (mainImage) {
        mainImage.src = hotel.image;
        mainImage.alt = hotel.name;
    }

    document.getElementById("hotelType").textContent = hotel.type;
    document.getElementById("hotelName").textContent = hotel.name;
    document.getElementById("hotelLocation").textContent = hotel.location;

    document.getElementById("hotelDescription").textContent =
        extra.description || hotel.description;

    document.getElementById("hotelSeries").textContent =
        hotel.series || "-";

    document.getElementById("mapButton").href =
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(extra.mapQuery)}`;

    initFavorite(hotel);

    document.getElementById("summaryType").textContent =
        hotel.type;

    document.getElementById("summaryLocation").textContent =
        hotel.location;

    document.getElementById("summaryCountry").textContent =
        hotel.country;

    document.getElementById("summaryStay").textContent =
        extra.stayType || "เหมาะสำหรับพักผ่อนและท่องเที่ยว";

    renderGallery(hotel);

    renderRooms(extra.rooms);

    renderPlanningInfo(extra.planningInfo);

    renderFacilities(extra.facilities);

    renderPlaceLink(hotel);
}

function renderGallery(hotel) {

    const container = document.getElementById("hotelGallery");

    if (!container) {
        return;
    }

    const images = [
        hotel.image,
        hotel.image,
        hotel.image,
        hotel.image
    ];

    container.innerHTML = images.map((image, index) => `
        <button
            type="button"
            class="hotel-gallery-item"
            data-image="${image}"
            aria-label="ดูรูปที่ ${index + 1}"
        >
            <img src="${image}" alt="${hotel.name}">
        </button>
    `).join("");

    const buttons = container.querySelectorAll(".hotel-gallery-item");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const mainImage =
                document.getElementById("hotelMainImage");

            mainImage.src = this.dataset.image;

        });

    });
}

function renderRooms(rooms) {

    const container = document.getElementById("hotelRooms");

    if (!rooms || rooms.length === 0) {

        container.innerHTML = `
            <p class="no-data">
                ยังไม่มีข้อมูลประเภทห้องพัก
            </p>
        `;

        return;
    }

    container.innerHTML = rooms.map(room => `
        <article class="room-item">

            <div class="room-info">

                <h3>${room.name}</h3>

                <p>
                    ${room.description}
                </p>

            </div>

            <strong class="room-price">
                ${room.price}
            </strong>

        </article>
    `).join("");
}

function renderPlanningInfo(items) {

    const container =
        document.getElementById("planningInfo");

    if (!items || items.length === 0) {

        container.innerHTML = `
            <p class="no-data">
                ยังไม่มีข้อมูลการวางแผน
            </p>
        `;

        return;
    }

    container.innerHTML = items.map(item => `
        <div class="planning-item">
            <i class="bi bi-check-circle"></i>
            <span>${item}</span>
        </div>
    `).join("");
}

function renderFacilities(items) {

    const container =
        document.getElementById("hotelFacilities");

    if (!items || items.length === 0) {

        container.innerHTML = `
            <p class="no-data">
                ยังไม่มีข้อมูลสิ่งอำนวยความสะดวก
            </p>
        `;

        return;
    }

    container.innerHTML = items.map(item => `
        <span class="facility-tag">
            ${item}
        </span>
    `).join("");
}

function renderPlaceLink(hotel) {

    const button =
        document.getElementById("placeButton");

    if (!button) {
        return;
    }

    if (!hotel.placeId) {

        button.style.display = "none";

        return;
    }

    button.href =
        `/pages/place_detail.html?place=${hotel.placeId}`;
}

function showNotFound() {

    document.querySelector("main").innerHTML = `
        <section class="place-not-found">

            <h1>ไม่พบข้อมูลที่พัก</h1>

            <p>
                ไม่พบที่พักที่คุณกำลังค้นหา
            </p>

            <a
                href="/pages/series.html?category=hotels"
                class="btn-primary"
            >
                กลับไปดูที่พักทั้งหมด
            </a>

        </section>
    `;
}

function initFavorite(hotel) {

    const favoriteButton =
        document.getElementById("favoriteButton");

    if (!favoriteButton) return;

    let favorites =
        JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

    const isFavorite = favorites.some(
        item =>
            item.id === hotel.id &&
            item.type === "hotel"
    );

    if (isFavorite) {
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
    }

    favoriteButton.addEventListener("click", () => {

        favorites =
            JSON.parse(
                localStorage.getItem("seriesTrailFavorites")
            ) || [];

        const index = favorites.findIndex(
            item =>
                item.id === hotel.id &&
                item.type === "hotel"
        );

        if (index === -1) {

            favorites.push({
                id: hotel.id,
                type: "hotel",
                title: hotel.name,
                image: hotel.image,
                url:
                    `/pages/hotel_detail.html?hotel=${hotel.id}`
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
