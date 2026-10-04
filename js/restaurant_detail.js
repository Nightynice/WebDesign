const urlParams = new URLSearchParams(window.location.search);
const restaurantId = urlParams.get("restaurant");

const restaurantExtraData = {
    "phuket-old-town-cafe": {
        address: "ย่านเมืองเก่าภูเก็ต จังหวัดภูเก็ต",
        openingHours: "10:00 - 21:00 น.",
        priceRange: "ประมาณ 100 - 400 บาท / คน",
        rating: "4.8",
        reviewCount: 120,
        mapQuery: "Raya Restaurant Phuket",

        menu: [
            {
                name: "เมนูอาหารไทยพื้นเมือง",
                description: "เมนูอาหารไทยและอาหารพื้นเมืองสำหรับรับประทานระหว่างเที่ยวเมืองเก่าภูเก็ต",
                price: "฿฿"
            },
            {
                name: "อาหารจานหลัก",
                description: "เมนูอาหารสำหรับรับประทานเป็นมื้อกลางวันหรือมื้อเย็น",
                price: "฿฿"
            },
            {
                name: "เครื่องดื่ม",
                description: "เครื่องดื่มสำหรับพักระหว่างเดินเที่ยวในย่านเมืองเก่า",
                price: "฿"
            }
        ],

        reviews: [
            {
                name: "Ploy R.",
                rating: "5.0",
                text: "บรรยากาศเข้ากับการเดินเที่ยวเมืองเก่าภูเก็ตมาก เหมาะสำหรับแวะพักระหว่างตามรอย"
            },
            {
                name: "K-TraVeler",
                rating: "4.8",
                text: "เหมาะกับการจัดเส้นทางเที่ยวเมืองเก่าและสถานที่ตามรอยซีรีย์ในบริเวณเดียวกัน"
            }
        ],

        gallery: [
            "/images/restaurants/rayarestaurant.png",
            "/images/place/place-oldtown.jpg",
            "/images/place/lampromtep.jpg"
        ]
    },

    "promthep-cafe": {
        address: "บริเวณแหลมพรหมเทพ จังหวัดภูเก็ต",
        openingHours: "10:00 - 21:00 น.",
        priceRange: "ประมาณ 100 - 400 บาท / คน",
        rating: "4.7",
        reviewCount: 96,
        mapQuery: "Promthep Cape Restaurant Phuket",

        menu: [
            {
                name: "อาหารไทย",
                description: "เมนูอาหารไทยสำหรับรับประทานก่อนหรือหลังชมพระอาทิตย์ตก",
                price: "฿฿"
            },
            {
                name: "อาหารจานหลัก",
                description: "เมนูอาหารสำหรับรับประทานเป็นมื้อหลัก",
                price: "฿฿"
            },
            {
                name: "เครื่องดื่ม",
                description: "เครื่องดื่มสำหรับนั่งพักและชมบรรยากาศ",
                price: "฿"
            }
        ],

        reviews: [
            {
                name: "Mild P.",
                rating: "4.8",
                text: "เหมาะกับการแวะพักหลังจากไปชมวิวแหลมพรหมเทพ บรรยากาศผ่อนคลาย"
            },
            {
                name: "Travel Note",
                rating: "4.6",
                text: "สามารถจัดรวมกับเส้นทางตามรอยแปลรักฉันด้วยใจเธอในภูเก็ตได้"
            }
        ],

        gallery: [
            "/images/restaurants/promthepcaperestaurant.jpg",
            "/images/place/lampromtep.jpg"
        ]
    },

    "cheongha-market-food": {
        address: "บริเวณตลาดชองฮา เมืองโพฮัง ประเทศเกาหลีใต้",
        openingHours: "10:00 - 20:00 น.",
        priceRange: "ประมาณ ₩10,000 - ₩25,000 / คน",
        rating: "4.7",
        reviewCount: 85,
        mapQuery: "Cheongha Market Pohang",

        menu: [
            {
                name: "อาหารเกาหลี",
                description: "อาหารท้องถิ่นสำหรับรับประทานระหว่างเดินเที่ยวตลาด",
                price: "₩₩"
            },
            {
                name: "อาหารว่าง",
                description: "อาหารว่างและของกินระหว่างเดินชมตลาด",
                price: "₩"
            },
            {
                name: "เครื่องดื่ม",
                description: "เครื่องดื่มสำหรับพักระหว่างตามรอยกงจิน",
                price: "₩"
            }
        ],

        reviews: [
            {
                name: "Ploy R.",
                rating: "5.0",
                text: "บรรยากาศตลาดทำให้รู้สึกเหมือนได้เดินตามรอย Hometown Cha-Cha-Cha จริง ๆ"
            },
            {
                name: "Korea Trip",
                rating: "4.7",
                text: "เหมาะสำหรับแวะพักระหว่างเดินตามรอยสถานที่ในกงจิน"
            }
        ],

        gallery: [
            "/images/restaurants/cheonghamarketfood.jpg",
            "/images/place/cheonghamarket.jpg"
        ]
    },

    "wolpo-beach-cafe": {
        address: "บริเวณ Wolpo Beach เมืองโพฮัง ประเทศเกาหลีใต้",
        openingHours: "10:00 - 21:00 น.",
        priceRange: "ประมาณ ₩8,000 - ₩20,000 / คน",
        rating: "4.8",
        reviewCount: 74,
        mapQuery: "Wolpo Beach Pohang",

        menu: [
            {
                name: "กาแฟ",
                description: "เครื่องดื่มกาแฟสำหรับนั่งพักริมชายหาด",
                price: "₩"
            },
            {
                name: "เครื่องดื่มเย็น",
                description: "เครื่องดื่มเย็นที่เหมาะกับการนั่งพักหลังเดินเที่ยว",
                price: "₩"
            },
            {
                name: "ของหวาน",
                description: "ของหวานและเบเกอรี่สำหรับรับประทานคู่กับเครื่องดื่ม",
                price: "₩"
            }
        ],

        reviews: [
            {
                name: "Mina K.",
                rating: "4.9",
                text: "วิวทะเลดีมาก เหมาะกับการนั่งพักหลังตามรอยฉากริมชายหาด"
            },
            {
                name: "Series Trip",
                rating: "4.7",
                text: "บรรยากาศเข้ากับการเที่ยวตามรอย Hometown Cha-Cha-Cha มาก"
            }
        ],

        gallery: [
            "/images/restaurants/wolpobeachcafe.png",
            "/images/place/wolpobeach.jpg"
        ]
    },

    "otaru-canal-cafe": {
        address: "บริเวณ Otaru Canal เมืองโอตารุ ฮอกไกโด ประเทศญี่ปุ่น",
        openingHours: "10:00 - 20:00 น.",
        priceRange: "ประมาณ ¥1,000 - ¥3,000 / คน",
        rating: "4.8",
        reviewCount: 110,
        mapQuery: "Otaru Canal Hokkaido",

        menu: [
            {
                name: "กาแฟ",
                description: "กาแฟและเครื่องดื่มร้อนสำหรับนั่งชมบรรยากาศเมืองโอตารุ",
                price: "¥"
            },
            {
                name: "เบเกอรี่",
                description: "ขนมอบและของหวานสำหรับรับประทานคู่กับเครื่องดื่ม",
                price: "¥"
            },
            {
                name: "ของหวาน",
                description: "ของหวานสไตล์คาเฟ่สำหรับพักระหว่างเที่ยว",
                price: "¥¥"
            }
        ],

        reviews: [
            {
                name: "Yuki T.",
                rating: "4.9",
                text: "บรรยากาศเมืองโอตารุเหมาะกับการเดินตามรอย First Love มาก"
            },
            {
                name: "Travel Diary",
                rating: "4.7",
                text: "เหมาะสำหรับแวะพักระหว่างเดินชมคลองและย่านเมืองเก่า"
            }
        ],

        gallery: [
            "/images/restaurants/otarucanalcafe.jpg",
            "/images/place/otarucanal.jpg"
        ]
    },

    "yuigahama-cafe": {
        address: "บริเวณ Yuigahama Beach เมืองคามาคุระ ประเทศญี่ปุ่น",
        openingHours: "09:00 - 20:00 น.",
        priceRange: "ประมาณ ¥1,000 - ¥3,000 / คน",
        rating: "4.7",
        reviewCount: 88,
        mapQuery: "Yuigahama Beach Kamakura",

        menu: [
            {
                name: "กาแฟ",
                description: "เครื่องดื่มกาแฟสำหรับนั่งพักริมทะเล",
                price: "¥"
            },
            {
                name: "เครื่องดื่มเย็น",
                description: "เครื่องดื่มเย็นสำหรับวันที่อากาศอบอุ่น",
                price: "¥"
            },
            {
                name: "เบเกอรี่",
                description: "ขนมและเบเกอรี่สำหรับรับประทานระหว่างเที่ยวคามาคุระ",
                price: "¥"
            }
        ],

        reviews: [
            {
                name: "Kana S.",
                rating: "4.8",
                text: "บรรยากาศริมทะเลสบายมาก เหมาะกับการเดินเที่ยวแบบชิล ๆ"
            },
            {
                name: "Japan Lover",
                rating: "4.6",
                text: "สามารถแวะพักระหว่างตามรอยสถานที่ในคามาคุระได้"
            }
        ],

        gallery: [
            "/images/restaurants/yuigahamabeachcafe.jpg",
            "/images/place/yuigahamabeach.png"
        ]
    },

    "shapowei-cafe": {
        address: "Shapowei เมืองเซียะเหมิน มณฑลฝูเจี้ยน ประเทศจีน",
        openingHours: "10:00 - 21:00 น.",
        priceRange: "ประมาณ ¥30 - ¥100 / คน",
        rating: "4.7",
        reviewCount: 92,
        mapQuery: "Shapowei Xiamen",

        menu: [
            {
                name: "กาแฟ",
                description: "เครื่องดื่มกาแฟสำหรับพักระหว่างเดินเที่ยวชุมชนเก่า",
                price: "¥"
            },
            {
                name: "เครื่องดื่มเย็น",
                description: "เครื่องดื่มเย็นและเมนูสำหรับนั่งพัก",
                price: "¥"
            },
            {
                name: "ของหวาน",
                description: "ขนมและของหวานสไตล์คาเฟ่",
                price: "¥¥"
            }
        ],

        reviews: [
            {
                name: "Sang Z.",
                rating: "4.8",
                text: "ย่าน Shapowei มีบรรยากาศน่ารักและเหมาะกับการเดินตามรอย Hidden Love"
            },
            {
                name: "China Trip",
                rating: "4.6",
                text: "เหมาะกับการจัดเป็นจุดพักระหว่างเที่ยวบริเวณท่าเรือเก่า"
            }
        ],

        gallery: [
            "/images/restaurants/shapoweicafe.jpg",
            "/images/place/shapowei.jpg"
        ]
    },

    "erhai-lake-cafe": {
        address: "บริเวณทะเลสาบเอ๋อไห่ เมืองต้าหลี่ มณฑลยูนนาน ประเทศจีน",
        openingHours: "09:00 - 21:00 น.",
        priceRange: "ประมาณ ¥30 - ¥120 / คน",
        rating: "4.8",
        reviewCount: 105,
        mapQuery: "Erhai Lake Dali Yunnan",

        menu: [
            {
                name: "กาแฟ",
                description: "เครื่องดื่มกาแฟสำหรับนั่งพักและชมวิวทะเลสาบ",
                price: "¥"
            },
            {
                name: "เครื่องดื่มเย็น",
                description: "เครื่องดื่มเย็นสำหรับนั่งชมวิวรอบทะเลสาบ",
                price: "¥"
            },
            {
                name: "อาหารและของว่าง",
                description: "เมนูอาหารและของว่างสำหรับพักระหว่างเดินทาง",
                price: "¥¥"
            }
        ],

        reviews: [
            {
                name: "Hongdou",
                rating: "4.9",
                text: "วิวทะเลสาบสวยและบรรยากาศเหมาะกับการนั่งพักมาก"
            },
            {
                name: "Yunnan Trip",
                rating: "4.7",
                text: "เหมาะสำหรับจัดเป็นจุดพักระหว่างตามรอย Meet Yourself"
            }
        ],

        gallery: [
            "/images/restaurants/erhailakecafe.jpg",
            "/images/place/erhailake.jpg"
        ]
    }
};

const restaurant = typeof restaurantsData !== "undefined"
    ? restaurantsData.find(item => item.id === restaurantId)
    : null;

if (!restaurant) {
    showNotFound();
} else {
    renderRestaurantDetail(restaurant);
}

function renderRestaurantDetail(restaurant) {

    const extra = restaurantExtraData[restaurant.id] || {};

    document.getElementById("restaurantHeroImage").src =
        restaurant.image;

    document.getElementById("restaurantHeroImage").alt =
        restaurant.name;

    document.getElementById("restaurantName").textContent =
        restaurant.name;

    document.getElementById("restaurantType").textContent =
        restaurant.type || "คาเฟ่ / ร้านอาหาร";

    document.getElementById("restaurantLocation").textContent =
        restaurant.location || "ดูข้อมูลสถานที่";

    document.getElementById("restaurantPlace").textContent =
        restaurant.place || "สถานที่ตามรอยซีรีย์";

    document.getElementById("restaurantOpeningHours").textContent =
        extra.openingHours || "โปรดตรวจสอบกับร้านอีกครั้ง";

    document.getElementById("restaurantPrice").textContent =
        extra.price || "ขึ้นอยู่กับเมนู";

    document.getElementById("restaurantRating").textContent =
        extra.rating || "—";

    renderGallery(restaurant, extra);
    renderMenu(extra);
    renderTrail(restaurant);
    renderReviews(extra);

    document.getElementById("restaurantMapButton").href =
        `/pages/map.html?restaurant=${restaurant.id}`;

    initFavorite(restaurant);
}

function renderGallery(restaurant, extra) {

    const gallery = document.getElementById("restaurantGallery");

    let images = extra.gallery || [];

    if (images.length === 0) {
        images = [
            restaurant.image,
            restaurant.image,
            restaurant.image,
            restaurant.image,
            restaurant.image
        ];
    }

    gallery.innerHTML = images.map((image, index) => `
        <div class="restaurant-gallery-item">
            <img
                src="${image}"
                alt="${restaurant.name} รูปที่ ${index + 1}"
            >
        </div>
    `).join("");
}

function renderMenu(extra) {

    const menu = document.getElementById("restaurantMenu");

    const menuData = extra.menu || [
        {
            name: "เมนูแนะนำ",
            price: "—",
            description: "รายละเอียดเมนูจะแสดงเมื่อมีข้อมูล"
        },
        {
            name: "เมนูเครื่องดื่ม",
            price: "—",
            description: "รายละเอียดเมนูจะแสดงเมื่อมีข้อมูล"
        }
    ];

    menu.innerHTML = menuData.map(item => `
        <article class="menu-item">

            <div class="menu-item-top">
                <h3>${item.name}</h3>

                <span class="menu-price">
                    ${item.price}
                </span>
            </div>

            <p>
                ${item.description}
            </p>

        </article>
    `).join("");
}

function renderTrail(restaurant) {

    const placeName = restaurant.place || "สถานที่ถ่ายทำใกล้เคียง";

    document.getElementById("nearbyPlace").textContent =
        placeName;

    document.getElementById("nearbySeries").textContent =
        restaurant.series
            ? `สถานที่นี้เกี่ยวข้องกับ ${restaurant.series}`
            : "ร้านที่เหมาะสำหรับแวะพักระหว่างตามรอยซีรีย์";

    if (restaurant.placeId) {

        document.getElementById("nearbyPlaceLink").href =
            `/pages/place_detail.html?place=${restaurant.placeId}`;

    } else {

        document.getElementById("nearbyPlaceLink").href =
            "/pages/series.html?category=places";

    }
}

function renderReviews(extra) {

    const reviewContainer =
        document.getElementById("restaurantReviews");

    const reviews = extra.reviews || [];

    if (reviews.length === 0) {

        reviewContainer.innerHTML = `
            <div class="review-item">
                <p class="review-text">
                    ยังไม่มีรีวิวสำหรับร้านนี้
                </p>
            </div>
        `;

        return;
    }

    reviewContainer.innerHTML = reviews.map(review => {

        const initial =
            review.name.charAt(0).toUpperCase();

        return `
            <article class="review-item">

                <div class="review-top">

                    <div class="reviewer">

                        <span class="reviewer-avatar">
                            ${initial}
                        </span>

                        <span class="reviewer-name">
                            ${review.name}
                        </span>

                    </div>

                    <span class="review-rating">
                        ★ ${review.rating}
                    </span>

                </div>

                <p class="review-text">
                    "${review.text}"
                </p>

            </article>
        `;

    }).join("");
}

function showNotFound() {

    document.querySelector("main").innerHTML = `
        <section class="restaurant-not-found">

            <h1>ไม่พบข้อมูลร้าน</h1>

            <p>
                ไม่พบร้านอาหารหรือคาเฟ่ที่คุณกำลังค้นหา
            </p>

            <a
                href="/pages/series.html?category=restaurants"
                class="btn-primary"
            >
                กลับไปดูร้านอาหารทั้งหมด
            </a>

        </section>
    `;
}

function initFavorite(restaurant) {
    const favoriteButton = document.getElementById("favoriteButton");

    if (!favoriteButton) return;

    let favorites =
        JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

    const isFavorite = favorites.some(
        item => item.id === restaurant.id && item.type === "restaurant"
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
            JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

        const index = favorites.findIndex(
            item =>
                item.id === restaurant.id &&
                item.type === "restaurant"
        );

        if (index === -1) {
            favorites.push({
                id: restaurant.id,
                type: "restaurant",
                title: restaurant.name,
                image: restaurant.image,
                url: `/pages/restaurant_detail.html?restaurant=${restaurant.id}`
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