const trips = {
    "chiang-rai": {
        title: "ตามรอยซีรีย์ในเชียงราย",
        subtitle: "สัมผัสธรรมชาติและสถานที่จากเรื่องราวในซีรีย์",
        country: "ประเทศไทย",
        duration: "3 วัน 2 คืน",
        season: "ฤดูหนาว",
        series: "แปลรักฉันด้วยใจเธอ",
        image: "/images/trip-01.jpg",

        description:
            "ทริปสำหรับคนที่อยากเดินทางตามรอยซีรีย์ พร้อมแวะชมสถานที่ท่องเที่ยว คาเฟ่ และร้านอาหารในเส้นทางเดียวกัน",

        itinerary: [
            {
                day: "DAY 01",
                title: "เริ่มต้นการเดินทาง",
                subtitle: "เดินทางเข้าสู่เชียงรายและสำรวจสถานที่แรก",

                stops: [
                    {
                        time: "10:00",
                        name: "สถานที่ท่องเที่ยวจุดที่ 1",
                        desc: "เริ่มต้นทริปด้วยการชมบรรยากาศและเก็บภาพตามรอยซีรีย์",
                        series: "แปลรักฉันด้วยใจเธอ"
                    },
                    {
                        time: "14:00",
                        name: "คาเฟ่ในเส้นทาง",
                        desc: "พักรับประทานอาหารและใช้เวลาช่วงบ่ายในบรรยากาศสบาย ๆ",
                        series: "Travel Stop"
                    },
                    {
                        time: "18:00",
                        name: "เช็กอินที่พัก",
                        desc: "พักผ่อนและเตรียมตัวสำหรับเส้นทางในวันถัดไป",
                        series: "Stay"
                    }
                ]
            },

            {
                day: "DAY 02",
                title: "ตามรอยฉากสำคัญ",
                subtitle: "สำรวจสถานที่ที่เกี่ยวข้องกับเรื่องราว",

                stops: [
                    {
                        time: "09:00",
                        name: "สถานที่ถ่ายทำหลัก",
                        desc: "เดินทางไปยังโลเคชันที่มีความสำคัญต่อเรื่อง",
                        series: "แปลรักฉันด้วยใจเธอ"
                    },
                    {
                        time: "13:00",
                        name: "ร้านอาหารท้องถิ่น",
                        desc: "พักรับประทานอาหารและสำรวจบรรยากาศโดยรอบ",
                        series: "Food & Cafe"
                    },
                    {
                        time: "16:00",
                        name: "จุดชมวิว",
                        desc: "ชมวิวช่วงเย็นและเก็บภาพบรรยากาศของสถานที่",
                        series: "Travel Stop"
                    }
                ]
            },

            {
                day: "DAY 03",
                title: "ปิดท้ายทริป",
                subtitle: "แวะสถานที่เพิ่มเติมก่อนเดินทางกลับ",

                stops: [
                    {
                        time: "09:00",
                        name: "สถานที่แนะนำ",
                        desc: "เดินเล่นและสำรวจสถานที่ในช่วงเช้า",
                        series: "Travel Stop"
                    },
                    {
                        time: "12:00",
                        name: "ร้านอาหาร",
                        desc: "รับประทานอาหารก่อนเดินทางกลับ",
                        series: "Food & Cafe"
                    }
                ]
            }
        ],

        places: [
            {
                name: "สถานที่ตามรอยซีรีย์",
                country: "ประเทศไทย",
                image: "/images/trip-01.jpg",
                desc: "โลเคชันที่เกี่ยวข้องกับฉากสำคัญของเรื่อง"
            },
            {
                name: "จุดชมวิว",
                country: "ประเทศไทย",
                image: "/images/place/bantean.jpg",
                desc: "สถานที่สำหรับชมวิวและถ่ายภาพ"
            },
            {
                name: "ย่านเมืองเก่า",
                country: "ประเทศไทย",
                image: "/images/place/phapundaw.jpg",
                desc: "พื้นที่เดินเล่นและสัมผัสบรรยากาศท้องถิ่น"
            }
        ],

        restaurants: [
            {
                name: "คาเฟ่แนะนำในเส้นทาง",
                location: "เชียงราย",
                image: "/images/trip-01.jpg"
            },
            {
                name: "ร้านอาหารท้องถิ่น",
                location: "เชียงราย",
                image: "/images/place/bantean.jpg"
            }
        ],

        hotels: [
            {
                name: "ที่พักแนะนำ",
                location: "เชียงราย",
                image: "/images/place/phapundaw.jpg"
            },
            {
                name: "โรงแรมใกล้เส้นทาง",
                location: "เชียงราย",
                image: "/images/trip-01.jpg"
            }
        ]
    }
};


const params = new URLSearchParams(window.location.search);
const tripId = params.get("trip");

const trip = trips[tripId] || trips["chiang-rai"];


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


/* Itinerary */

const itineraryList = document.getElementById("itineraryList");

itineraryList.innerHTML = trip.itinerary.map(day => `
    <article class="itinerary-day">

        <div class="day-header">
            <span class="day-number">${day.day.replace("DAY ", "")}</span>

            <div>
                <h3>${day.title}</h3>
                <p>${day.subtitle}</p>
            </div>
        </div>

        <div class="day-stops">

            ${day.stops.map(stop => `
                <div class="day-stop">

                    <div class="stop-time">
                        ${stop.time}
                    </div>

                    <div class="stop-content">

                        <h4>${stop.name}</h4>

                        <p>${stop.desc}</p>

                        <span class="stop-series">
                            ${stop.series}
                        </span>

                    </div>

                </div>
            `).join("")}

        </div>

    </article>
`).join("");


/* Places */

const tripPlaces = document.getElementById("tripPlaces");

tripPlaces.innerHTML = trip.places.map(place => `
    <article class="trip-place-card">

        <img src="${place.image}" alt="${place.name}">

        <div class="trip-place-content">

            <span>${place.country}</span>

            <h3>${place.name}</h3>

            <p>${place.desc}</p>

        </div>

    </article>
`).join("");


/* Restaurants */

const tripRestaurants = document.getElementById("tripRestaurants");

tripRestaurants.innerHTML = trip.restaurants.map(item => `
    <article class="extra-item">

        <img src="${item.image}" alt="${item.name}">

        <div>
            <h3>${item.name}</h3>
            <p>${item.location}</p>
        </div>

    </article>
`).join("");


/* Hotels */

const tripHotels = document.getElementById("tripHotels");

tripHotels.innerHTML = trip.hotels.map(item => `
    <article class="extra-item">

        <img src="${item.image}" alt="${item.name}">

        <div>
            <h3>${item.name}</h3>
            <p>${item.location}</p>
        </div>

    </article>
`).join("");


/* Favorite */

const favoriteButton = document.getElementById("favoriteTrip");

favoriteButton.addEventListener("click", () => {

    const favorites =
        JSON.parse(localStorage.getItem("seriesTrailFavorites")) || [];

    const existing = favorites.find(
        item => item.id === tripId
    );

    if (existing) {
        localStorage.setItem(
            "seriesTrailFavorites",
            JSON.stringify(
                favorites.filter(item => item.id !== tripId)
            )
        );

        favoriteButton.innerHTML =
            "♡ <span>เพิ่มในรายการโปรด</span>";

    } else {

        favorites.push({
            id: tripId,
            type: "trip",
            title: trip.title,
            image: trip.image,
            url: `/pages/trip_detail.html?trip=${tripId}`
        });

        localStorage.setItem(
            "seriesTrailFavorites",
            JSON.stringify(favorites)
        );

        favoriteButton.innerHTML =
            "♥ <span>อยู่ในรายการโปรดแล้ว</span>";
    }
});

