const urlParams = new URLSearchParams(window.location.search);
const seriesId = urlParams.get("series");

const seriesDetailData = {
    "bpo": {
        name: "แปลรักฉันด้วยใจเธอ",
        country: "ไทย",
        season: "ฤดูร้อน",
        poster: "/images/series/itoldsunsetaboutyou.jpg",
        synopsis: "เรื่องราวความรักของเต๋าและโอ้เอ๋วที่เกิดขึ้นท่ามกลางบรรยากาศของภูเก็ต โดยเมืองเก่า ทะเล และพระอาทิตย์ตกกลายเป็นส่วนสำคัญของเรื่อง",
        placeIds: [
            "phuket-old-town",
            "promthep-cape"
        ],
        similar: [
            {
                name: "Hometown Cha-Cha-Cha",
                country: "เกาหลีใต้",
                image: "/images/series/hometownchacha.jpg",
                link: "/pages/series_detail.html?series=hometown-cha-cha-cha"
            },
            {
                name: "First Love",
                country: "ญี่ปุ่น",
                image: "/images/series/firstlove.jpg",
                link: "/pages/series_detail.html?series=first-love"
            }
        ]
    },

    "1000stars": {
        name: "นิทานพันดาว",
        country: "ไทย",
        season: "ฤดูหนาว",
        poster: "/images/series/firstlove.jpg",
        synopsis: "เรื่องราวของเทียนที่เดินทางขึ้นดอยเพื่อเริ่มต้นชีวิตใหม่ในชุมชนผาปันดาว และได้พบกับภูผา ความสัมพันธ์ของทั้งคู่ค่อย ๆ เติบโตท่ามกลางธรรมชาติและวิถีชีวิตบนดอย",
        placeIds: [
            "phapan-dao-village",
            "phapan-dao-viewpoint"
        ],
        similar: [
            {
                name: "Meet Yourself",
                country: "จีน",
                image: "/images/series/meetyourself.jpg",
                link: "/pages/series_detail.html?series=meet-yourself"
            },
            {
                name: "Hometown Cha-Cha-Cha",
                country: "เกาหลีใต้",
                image: "/images/series/hometownchacha.jpg",
                link: "/pages/series_detail.html?series=hometown-cha-cha-cha"
            }
        ]
    },

    "love-destiny": {
        name: "บุพเพสันนิวาส",
        country: "ไทย",
        season: "ฤดูหนาว",
        poster: "/images/series/meetyourself.jpg",
        synopsis: "เรื่องราวของเกศสุรางค์หญิงสาวจากยุคปัจจุบันที่เดินทางข้ามเวลาไปยังกรุงศรีอยุธยา และได้เรียนรู้ประวัติศาสตร์ วิถีชีวิต และความสัมพันธ์ในโลกอดีต",
        placeIds: [
            "wat-chaiwatthanaram",
            "wat-phutthaisawan"
        ],
        similar: [
            {
                name: "A Dream of Splendor",
                country: "จีน",
                image: "/images/series/adreamofsplendor.jpg",
                link: "/pages/series_detail.html?series=a-dream-of-splendor"
            },
            {
                name: "Eternal Love",
                country: "จีน",
                image: "/images/series/eternallove.jpg",
                link: "/pages/series_detail.html?series=eternal-love"
            }
        ]
    },

    "klinsakalong": {
        name: "กลิ่นกาสะลอง",
        country: "ไทย",
        season: "ฤดูฝน",
        poster: "/images/series/adreamofsplendor.jpg",
        synopsis: "เรื่องราวความรัก ความแค้น และความผูกพันของตัวละครท่ามกลางบรรยากาศล้านนา โดยใช้วัดเก่าและสถาปัตยกรรมเชียงใหม่เป็นส่วนสำคัญของเรื่อง",
        placeIds: [
            "wat-ton-kwen",
            "wat-lok-molee"
        ],
        similar: [
            {
                name: "นิทานพันดาว",
                country: "ไทย",
                image: "/images/series/smellofflower.jpg",
                link: "/pages/series_detail.html?series=1000stars"
            },
            {
                name: "บุพเพสันนิวาส",
                country: "ไทย",
                image: "/images/series/lovedestiny.jpg",
                link: "/pages/series_detail.html?series=love-destiny"
            }
        ]
    },

    "hometown-cha-cha-cha": {
        name: "Hometown Cha-Cha-Cha",
        country: "เกาหลีใต้",
        season: "ฤดูร้อน",
        poster: "/images/series/hometownchacha.jpg",
        synopsis: "เรื่องราวความสัมพันธ์ของหมอฟันฮเยจินและหัวหน้าฮงในหมู่บ้านริมทะเลกงจิน ทั้งคู่ค่อย ๆ เรียนรู้ชีวิต ผู้คน และความสัมพันธ์ผ่านชุมชนเล็ก ๆ แห่งนี้",
        placeIds: [
            "cheongha-market",
            "wolpo-beach"
        ],
        similar: [
            {
                name: "When the Camellia Blooms",
                country: "เกาหลีใต้",
                image: "/images/series/whenthecamelliablooms.jpg",
                link: "/pages/series_detail.html?series=when-the-camellia-blooms"
            },
            {
                name: "แปลรักฉันด้วยใจเธอ",
                country: "ไทย",
                image: "/images/series/itoldsunsetaboutyou.jpg",
                link: "/pages/series_detail.html?series=bpo"
            }
        ]
    },

    "can-this-love-be-translated": {
        name: "Can This Love Be Translated?",
        country: "เกาหลีใต้",
        season: "ฤดูใบไม้ร่วง–ฤดูหนาว",
        poster: "/images/series/whenthecamelliablooms.jpg",
        synopsis: "เรื่องราวความสัมพันธ์ระหว่างนักแปลและดาราสาวที่ต้องทำงานร่วมกัน การเดินทางไปยังสถานที่ต่าง ๆ ทำให้ความสัมพันธ์ของทั้งคู่ค่อย ๆ เปลี่ยนแปลง",
        placeIds: [
            "gamgodang-gil",
            "pinodia-expo-tower"
        ],
        similar: [
            {
                name: "Hometown Cha-Cha-Cha",
                country: "เกาหลีใต้",
                image: "/images/series/canthislovebetranslated.jpg",
                link: "/pages/series_detail.html?series=hometown-cha-cha-cha"
            },
            {
                name: "First Love",
                country: "ญี่ปุ่น",
                image: "/images/series/firstlove.jpg",
                link: "/pages/series_detail.html?series=first-love"
            }
        ]
    },

    "the-king-eternal-monarch": {
        name: "The King: Eternal Monarch",
        country: "เกาหลีใต้",
        season: "ฤดูใบไม้ผลิ–ฤดูใบไม้ร่วง",
        poster: "/images/series/theking_ eternalmonarch.jpg",
        synopsis: "เรื่องราวของโลกคู่ขนานและความสัมพันธ์ระหว่าง Lee Gon และ Jung Tae-eul เมื่อทั้งสองโลกเชื่อมโยงกันผ่านสถานที่และเหตุการณ์เหนือธรรมชาติ",
        placeIds: [
            "gwanghwamun-square",
            "ahopsan-bamboo-forest"
        ],
        similar: [
            {
                name: "Can This Love Be Translated?",
                country: "เกาหลีใต้",
                image: "/images/series/theking_ eternalmonarch.jpg",
                link: "/pages/series_detail.html?series=can-this-love-be-translated"
            },
            {
                name: "Eternal Love",
                country: "จีน",
                image: "/images/series/eternallove.jpg",
                link: "/pages/series_detail.html?series=eternal-love"
            }
        ]
    },

    "when-the-camellia-blooms": {
        name: "When the Camellia Blooms",
        country: "เกาหลีใต้",
        season: "ฤดูใบไม้ร่วง",
        poster: "/images/series/whenthecamelliablooms.jpg",
        synopsis: "เรื่องราวชีวิตและความรักของ Dong-baek ในชุมชนริมทะเลที่เต็มไปด้วยความสัมพันธ์ของผู้คน เธอค่อย ๆ สร้างชีวิตใหม่และความสัมพันธ์กับ Yong-sik",
        placeIds: [
            "guryongpo-japanese-house-street",
            "guryongpo-modern-history-museum"
        ],
        similar: [
            {
                name: "Hometown Cha-Cha-Cha",
                country: "เกาหลีใต้",
                image: "/images/series/whenthecamelliablooms.jpg",
                link: "/pages/series_detail.html?series=hometown-cha-cha-cha"
            },
            {
                name: "Can This Love Be Translated?",
                country: "เกาหลีใต้",
                image: "/images/series/canthislovebetranslated.jpg",
                link: "/pages/series_detail.html?series=can-this-love-be-translated"
            }
        ]
    },

    "first-love": {
        name: "First Love",
        country: "ญี่ปุ่น",
        season: "ฤดูหนาว",
        poster: "/images/series/firstlove.jpg",
        synopsis: "เรื่องราวความรักและความทรงจำของคนสองคนที่เคยพบกันในวัยเยาว์ ก่อนจะกลับมาพบกันอีกครั้งในช่วงเวลาที่ชีวิตของทั้งคู่เปลี่ยนไป",
        placeIds: [
            "otaru-canal",
            "zenibako-beach"
        ],
        similar: [
            {
                name: "silent",
                country: "ญี่ปุ่น",
                image: "/images/series/silent.jpg",
                link: "/pages/series_detail.html?series=silent"
            },
            {
                name: "Hometown Cha-Cha-Cha",
                country: "เกาหลีใต้",
                image: "/images/series/hometownchacha.jpg",
                link: "/pages/series_detail.html?series=hometown-cha-cha-cha"
            }
        ]
    },

    "silent": {
        name: "silent",
        country: "ญี่ปุ่น",
        season: "ฤดูใบไม้ร่วง–ฤดูหนาว",
        poster: "/images/series/silent.jpg",
        synopsis: "เรื่องราวของ Tsumugi และ Sou ที่กลับมาพบกันอีกครั้งหลังจากห่างหายไปหลายปี ความทรงจำในวัยเรียนและสถานที่ต่าง ๆ ค่อย ๆ เชื่อมโยงทั้งคู่กลับเข้าหากัน",
        placeIds: [
            "setagaya-daita-station",
            "ashikaga-west-high-school"
        ],
        similar: [
            {
                name: "First Love",
                country: "ญี่ปุ่น",
                image: "/images/series/silent.jpg",
                link: "/pages/series_detail.html?series=first-love"
            },
            {
                name: "Saigo Kara Nibanme no Koi",
                country: "ญี่ปุ่น",
                image: "/images/series/saigokaranibanmenokoi.png",
                link: "/pages/series_detail.html?series=saigo-kara-nibanme-no-koi"
            }
        ]
    },

    "saigo-kara-nibanme-no-koi": {
        name: "Saigo Kara Nibanme no Koi",
        country: "ญี่ปุ่น",
        season: "ฤดูฝน / ต้นฤดูร้อน",
        poster: "/images/series/saigokaranibanmenokoi.png",
        synopsis: "เรื่องราวชีวิต ความสัมพันธ์ และมิตรภาพของผู้คนในเมืองคามาคุระ โดยสถานีรถไฟ ชายหาด และพื้นที่ริมทะเลเป็นส่วนหนึ่งของชีวิตประจำวันของตัวละคร",
        placeIds: [
            "gokurakuji-station",
            "yuigahama-beach"
        ],
        similar: [
            {
                name: "silent",
                country: "ญี่ปุ่น",
                image: "/images/series/saigokaranibanmenokoi.png",
                link: "/pages/series_detail.html?series=silent"
            },
            {
                name: "First Love",
                country: "ญี่ปุ่น",
                image: "/images/series/firstlove.jpg",
                link: "/pages/series_detail.html?series=first-love"
            }
        ]
    },

    "brush-up-life": {
        name: "Brush Up Life",
        country: "ญี่ปุ่น",
        season: "ฤดูหนาว–ฤดูใบไม้ผลิ",
        poster: "/images/series/brushuplife.jpg",
        synopsis: "เรื่องราวชีวิตของ Asami และการย้อนกลับไปใช้ชีวิตใหม่อีกครั้ง ผ่านเหตุการณ์ในชีวิตประจำวันและความสัมพันธ์กับผู้คนรอบตัว",
        placeIds: [
            "tsurumaki-bridge",
            "nishihirabatake-park"
        ],
        similar: [
            {
                name: "silent",
                country: "ญี่ปุ่น",
                image: "/images/series/brushuplife.jpg",
                link: "/pages/series_detail.html?series=silent"
            },
            {
                name: "Saigo Kara Nibanme no Koi",
                country: "ญี่ปุ่น",
                image: "/images/series/saigokaranibanmenokoi.png",
                link: "/pages/series_detail.html?series=saigo-kara-nibanme-no-koi"
            }
        ]
    },

    "hidden-love": {
        name: "Hidden Love",
        country: "จีน",
        season: "ฤดูร้อน / ฤดูฝน",
        poster: "/images/series/hiddenlove.jpg",
        synopsis: "เรื่องราวความรักและความสัมพันธ์ที่ค่อย ๆ เติบโตระหว่าง Sang Zhi และ Duan Jiaxu โดยมีพื้นที่ริมทะเลและสถานที่ท่องเที่ยวในเซียะเหมินเป็นส่วนหนึ่งของเรื่อง",
        placeIds: [
            "shapowei",
            "chengyi-science-center"
        ],
        similar: [
            {
                name: "Meet Yourself",
                country: "จีน",
                image: "/images/series/meetyourself.jpg",
                link: "/pages/series_detail.html?series=meet-yourself"
            },
            {
                name: "First Love",
                country: "ญี่ปุ่น",
                image: "/images/series/firstlove.jpg",
                link: "/pages/series_detail.html?series=first-love"
            }
        ]
    },

    "meet-yourself": {
        name: "Meet Yourself",
        country: "จีน",
        season: "ฤดูใบไม้ผลิ / ฤดูฝน",
        poster: "/images/series/meetyourself.jpg",
        synopsis: "เรื่องราวของ Xu Hongdou ที่เดินทางไปใช้ชีวิตในหมู่บ้านท่ามกลางธรรมชาติของยูนนาน ก่อนค่อย ๆ ฟื้นฟูจิตใจและสร้างความสัมพันธ์ใหม่กับผู้คนในชุมชน",
        placeIds: [
            "fengyangyi-village",
            "erhai-lake"
        ],
        similar: [
            {
                name: "นิทานพันดาว",
                country: "ไทย",
                image: "/images/series/meetyourself.jpg",
                link: "/pages/series_detail.html?series=1000stars"
            },
            {
                name: "Hidden Love",
                country: "จีน",
                image: "/images/series/hiddenlove.jpg",
                link: "/pages/series_detail.html?series=hidden-love"
            }
        ]
    },

    "eternal-love": {
        name: "Eternal Love",
        country: "จีน",
        season: "ฤดูใบไม้ผลิ / ฤดูร้อน",
        poster: "/images/series/eternallove.jpg",
        synopsis: "เรื่องราวความรักในโลกแฟนตาซีของ Qingqiu และ Heavenly Palace โดยภูมิทัศน์ธรรมชาติและเมืองภาพยนตร์ถูกใช้สร้างโลกต่าง ๆ ของเรื่อง",
        placeIds: [
            "caihuaqing-qingqiu",
            "xiangshan-movie-town"
        ],
        similar: [
            {
                name: "บุพเพสันนิวาส",
                country: "ไทย",
                image: "/images/series/eternallove.jpg",
                link: "/pages/series_detail.html?series=love-destiny"
            },
            {
                name: "A Dream of Splendor",
                country: "จีน",
                image: "/images/series/adreamofsplendor.jpg",
                link: "/pages/series_detail.html?series=a-dream-of-splendor"
            }
        ]
    },

    "a-dream-of-splendor": {
        name: "A Dream of Splendor",
        country: "จีน",
        season: "ฤดูใบไม้ผลิ–ฤดูร้อน",
        poster: "/images/series/adreamofsplendor.jpg",
        synopsis: "เรื่องราวของ Zhao Pan'er และการเดินทางของเธอในเมืองโบราณแบบ Jiangnan โดยมีร้านชา เมืองน้ำ และพื้นที่ริมทะเลสาบเป็นองค์ประกอบสำคัญของเรื่อง",
        placeIds: [
            "songji-water-mill",
            "wanslang-bridge"
        ],
        similar: [
            {
                name: "Eternal Love",
                country: "จีน",
                image: "/images/series/adreamofsplendor.jpg",
                link: "/pages/series_detail.html?series=eternal-love"
            },
            {
                name: "บุพเพสันนิวาส",
                country: "ไทย",
                image: "/images/series/lovedestiny.jpg",
                link: "/pages/series_detail.html?series=love-destiny"
            }
        ]
    }
};

const series = seriesDetailData[seriesId];

if (!series) {
    showNotFound();
} else {
    renderSeriesDetail(series);
}

function renderSeriesDetail(series) {
    document.getElementById("seriesPoster").src = series.poster;
    document.getElementById("seriesPoster").alt = series.name;

    document.getElementById("seriesCountry").textContent =
        series.country;

    document.getElementById("seriesName").textContent =
        series.name;

    document.getElementById("seriesSynopsis").textContent =
        series.synopsis;

    document.getElementById("seriesPlaceCount").textContent =
        `${series.placeIds.length} แห่ง`;

    document.getElementById("seriesCountrySummary").textContent =
        series.country;

    document.getElementById("seriesSeason").textContent =
        series.season;

    document.getElementById("tripButton").href =
        `/pages/trips.html?series=${seriesId}`;

    renderFilmingLocations(series.placeIds);
    renderSimilarSeries(series.similar);
}

const favoriteButton = document.getElementById("favoriteButton");

let favorites =
    JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

const isFavorite = favorites.some(
    item => item.id === series.id && item.type === "series"
);

if (isFavorite) {
    favoriteButton.classList.add("active");
    favoriteButton.innerHTML = '<i class="bi bi-heart-fill"></i>';
}

favoriteButton.addEventListener("click", () => {
    favorites =
        JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

    const index = favorites.findIndex(
        item => item.id === series.id && item.type === "series"
    );

    if (index === -1) {
        favorites.push({
            id: series.id,
            type: "series",
            title: series.title || series.name,
            image: series.image,
            url: `/pages/series_detail.html?series=${series.id}`
        });

        favoriteButton.classList.add("active");
        favoriteButton.innerHTML = '<i class="bi bi-heart-fill"></i>';
    } else {
        favorites.splice(index, 1);

        favoriteButton.classList.remove("active");
        favoriteButton.innerHTML = '<i class="bi bi-heart"></i>';
    }

    localStorage.setItem(
        "seriesTrailFavorites",
        JSON.stringify(favorites)
    );
});

function renderFilmingLocations(placeIds) {
    const container = document.getElementById("filmingLocations");

    const locations = placeIds
        .map(id => placesData.find(place => place.id === id))
        .filter(Boolean);

    if (locations.length === 0) {
        container.innerHTML = `
            <p>ยังไม่มีข้อมูลสถานที่ถ่ายทำ</p>
        `;
        return;
    }

    container.innerHTML = locations.map((place, index) => `
        <article class="filming-card">

            <div class="filming-number">
                ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="filming-image">
                <img src="${place.image}" alt="${place.name}">
            </div>

            <div class="filming-content">

                <h3>${place.name}</h3>

                <p class="filming-location">
                    ${place.location}, ${place.country}
                </p>

                <p class="filming-scene">
                    ${place.detail || place.description}
                </p>

                <a
                    href="/pages/place_detail.html?place=${place.id}"
                    class="filming-link"
                >
                    ดูรายละเอียดสถานที่ >
                </a>

            </div>

        </article>
    `).join("");
}

function renderSimilarSeries(seriesList) {
    const container = document.getElementById("similarSeries");

    container.innerHTML = seriesList.map(item => `
        <a href="${item.link}" class="similar-card">

            <div class="similar-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="similar-info">
                <span>${item.country}</span>
                <h3>${item.name}</h3>
            </div>

        </a>
    `).join("");
}

function showNotFound() {
    document.querySelector("main").innerHTML = `
        <section class="place-not-found">
            <h1>ไม่พบข้อมูลซีรีย์</h1>
            <p>ไม่พบซีรีย์ที่คุณกำลังค้นหา</p>
            <a href="/pages/series.html" class="btn-primary">
                กลับไปดูซีรีย์ทั้งหมด
            </a>
        </section>
    `;
}
