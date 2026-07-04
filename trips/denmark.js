// trips/norway.js
window.currentTripData = {
  "countryKey": "denmark",
  "title": "丹麥",
  "emoji": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e9-1f1f0.svg",
  "dateRange": "08/11 - 08/14",
  "weatherLocation": "Copenhagen",
  "weatherExternalLink": "https://www.accuweather.com/zh/dk/copenhagen/123094/weather-forecast/123094",
  "weatherFeatures": [
    "氣候與日照提醒：8月北歐氣候舒適但早晚溫差大，建議採洋蔥式穿搭，並隨身攜帶防風/防水薄外套。夏末日照時間仍較長。",
  ],
  "days": {
    "1": {
      "date": "08/11",
      "route": "奧斯陸 (Oslo) → 哥本哈根(Copenhagen)港口 → 市區",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 1 | 登陸哥本哈根與核心建立",
          "desc": "今日行程的核心故事是從海上登陸哥本哈根，建立交通動線並透過水路快速摸透城市地理概況。",
          "reminders": "下船後務必先在手機 App 開通 72 小時 City Pass Small；買遊船票時記得出示學生證。"
        },
        {
          "type": "transportation",
          "subtype": "boat",
          "title": "DFDS 渡輪抵達與大眾運輸移防",
          "time": "10:00",
          "desc": "早上從 Oslo 搭乘的 DFDS 渡輪準時抵達港口。",
          "depStation": "Oslo (奧斯陸)",
          "depMapQuery": "DFDS Oslo Terminal",
          "arrStation": "哥本哈根港口",
          "arrMapQuery": "DFDS Terminal Copenhagen"
        },
        {
          "type": "transportation",
          "subtype": "train",
          "title": "搭乘公車/地鐵直奔青旅",
          "time": "10:30",
          "desc": "港口區域屬於 Zone 1，可無腦刷卡搭乘 27 號公車或步行到最近的地鐵站，直奔青旅辦理寄放行李。",
          "depStation": "哥本哈根港口",
          "depMapQuery": "DFDS Terminal Copenhagen",
          "arrStation": "Meininger Hotel Copenhagen",
          "arrMapQuery": "Meininger Hotel Copenhagen"
        },
        {
          "type": "afternoon",
          "title": "新港 (Nyhavn) 與 Stromma 運河遊船",
          "time": "14:00",
          "hasReservation": false,
          "desc": "步行前往新港，現場亮出學生證購買 Stromma 運河遊船（Canal Tours）的學生票。搭船繞一圈，用 1 小時快速建立對這座城市的地理與歷史認知。",
          "mapQuery": "Nyhavn Copenhagen"
        },
        {
          "type": "restaurant",
          "title": "Netto / Føtex 超市採買",
          "time": "18:00",
          "hasReservation": false,
          "desc": "利用市區地鐵順路去大型超市，補給接下來幾天的麵包、牛奶或輕量晚餐資產，回青旅廚房。",
          "mapQuery": "Netto Copenhagen"
        },
        {
          "type": "accommodation",
          "title": "Meininger Hostel Copenhagen",
          "checkIn": "14:00",
          "checkOut": "11:00",
          "desc": "抵達市區後直奔青旅辦理 Check-in 或寄放行李。",
          "mapQuery": "Meininger Hotel Copenhagen"
        }
      ]
    },
    "2": {
      "date": "08/12",
      "route": "哥本哈根市區 (雙城堡強攻)",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 2 | 皇家城堡防禦作戰",
          "desc": "今日行程主軸為深入丹麥皇室歷史，連續攻破兩大經典城堡，並從高處俯瞰哥本哈根老城區。",
          "reminders": "務必在中午 12:00 前抵達阿美琳堡皇宮廣場卡位看衛兵交接；售票處記得買「羅森堡＋阿美琳堡」學生聯票。"
        },
        {
          "type": "morning",
          "title": "羅森堡城堡 (Rosenborg Slot)",
          "time": "09:30",
          "hasReservation": false,
          "desc": "搭地鐵到 Nørreport 站步行前往。在售票處買聯票，進入城堡欣賞皇室極盡奢華的皇冠寶物與內裝。",
          "mapQuery": "Rosenborg Castle"
        },
        {
          "type": "afternoon",
          "title": "阿美琳堡皇宮 (Amalienborg) 衛兵交接",
          "time": "11:45",
          "hasReservation": false,
          "desc": "穿過國王新廣場，中午前抵達廣場觀看著名的丹麥皇家衛兵交接儀式，隨後憑聯票進入博物館參觀。",
          "mapQuery": "Amalienborg Palace"
        },
        {
          "type": "afternoon",
          "title": "圓塔 (Rundetårn)",
          "time": "15:00",
          "hasReservation": false,
          "desc": "沿著獨特的無階梯螺旋走廊一路走上塔頂，俯瞰整個哥本哈根老城區的紅色屋頂（現場可買學生票）。",
          "mapQuery": "Rundetårn"
        },
        {
          "type": "accommodation",
          "title": "Meininger Hostel Copenhagen",
          "checkIn": "",
          "checkOut": "",
          "desc": "",
          "mapQuery": "Meininger Hotel Copenhagen"
        }
      ]
    },
    "3": {
      "date": "08/13",
      "route": "哥本哈根市區 (政治島嶼與百年樂園)",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 3 | 權力核心與童話樂園",
          "desc": "今日從丹麥的政治權力中心一路漫步到水岸，晚上則沉浸在激發華特迪士尼靈感的百年童話樂園中。",
          "reminders": "克里斯蒂安堡宮有 Student Ticket 學生組合票；蒂沃利花園無學生折價，需購買全票。"
        },
        {
          "type": "morning",
          "title": "克里斯蒂安堡宮 (Christiansborg Slot)",
          "time": "10:00",
          "hasReservation": false,
          "desc": "前往位於城堡島的克里斯蒂安堡宮。臨櫃購買學生組合票，一次攻破皇家接待室、地下廢墟和皇家馬廄。",
          "mapQuery": "Christiansborg Palace"
        },
        {
          "type": "afternoon",
          "title": "黑鑽石圖書館與小美人魚像",
          "time": "14:00",
          "hasReservation": false,
          "desc": "沿運河步行到黑鑽石（皇家圖書館）拍照，或搭乘 City Pass 內含的港口巴士船（Harbour Bus），在水上吹風順路去拍小美人魚像。",
          "mapQuery": "The Little Mermaid Copenhagen"
        },
        {
          "type": "night",
          "title": "蒂沃利花園 (Tivoli Gardens)",
          "time": "17:00",
          "hasReservation": false,
          "desc": "傍晚直奔市中心樂園。現場買票入場，在燈光亮起時體驗這座全世界最古老、充滿魔幻氛圍的夜景樂園。",
          "mapQuery": "Tivoli Gardens"
        },
        {
          "type": "accommodation",
          "title": "Meininger Hostel Copenhagen",
          "checkIn": "",
          "checkOut": "",
          "desc": "",
          "mapQuery": "Meininger Hotel Copenhagen"
        }
      ]
    },
    "4": {
      "date": "08/14",
      "route": "哥本哈根市區 → 哥本哈根機場 (CPH)",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 4 | 機場撤退與完美閉幕",
          "desc": "行程的最後一天，清晨完成退房與行李整理，準備搭乘早班機前往布拉格。",
          "reminders": "計算好 72 小時 City Pass 的有效期限，確保清晨可以免費搭乘地鐵直達機場。"
        },
        {
          "type": "transportation",
          "subtype": "train",
          "title": "M2 地鐵 / DSB 火車 (直攻機場)",
          "time": "04:30 - 05:00",
          "desc": "清晨帶著所有行李，從市中心 (Zone 1) 搭上 M2 地鐵或 DSB 火車，憑 City Pass 一路坐到終點站哥本哈根機場 (Zone 4)。",
          "depStation": "哥本哈根市區車站 (如 Nørreport)",
          "depMapQuery": "Nørreport Station",
          "arrStation": "哥本哈根機場 (CPH)",
          "arrMapQuery": "Copenhagen Airport"
        },
        {
          "type": "transportation",
          "subtype": "plane",
          "title": "07:00 CPH - PRG",
          "time": "07:00 - 08:10",
          "desc": "搭乘早班機前往布拉格。",
          "depStation": "哥本哈根機場 (CPH)",
          "depMapQuery": "Copenhagen Airport",
          "arrStation": "布拉格機場 (PRG)",
          "arrMapQuery": "Prague Airport"
        }
      ]
    }
  }
}