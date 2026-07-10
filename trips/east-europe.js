// trips/east-europe.js
window.currentTripData = {
  "countryKey": "east-europe",
  "title": "東歐：捷克、波蘭、匈牙利、斯洛伐克、奧地利",
  "emoji": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1ea-1f1fa.svg",
  "dateRange": "08/13 - 08/28",
  "weatherLocation": "Prague / Kraków / Budapest / Bratislava / Vienna / Brno",
    "weatherExternalLink": "https://www.accuweather.com/en/search-locations?query=",
    "weatherFeatures": [
      "8月中下旬的中東歐氣候正值夏末秋初，白天氣溫溫暖舒適（約 20°C - 26°C），體感非常適合徒步旅遊。",
      "各城市氣候略有差異：布拉格與克拉科夫早晚偏涼，布達佩斯因多瑙河河岸地帶風速較大，入夜後氣溫下降較快，建議準備薄外套。"
    ],
  "days": {
    "1": {
      "date": "08/13",
      "route": "桃園機場 → 飛機上",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 1 | 啟程",
          "desc": "今日深夜由桃園機場出發，搭乘班機前往布拉格。",
          "reminders": "23:50 TPE 出發。"
        },
        {
          "type": "transportation",
          "subtype": "airplane",
          "title": "桃園機場起飛",
          "time": "23:50",
          "hasReservation": true,
          "desc": "23:50 桃園機場起飛",
          "reminders": "20:30 開櫃",
          "depStation": "桃園機場",
          "depMapQuery": "Taoyuan+International+Airport",
          "arrStation": "布拉格機場",
          "arrMapQuery": "Václav Havel Airport Prague Terminal 1"
        }
      ]
    },
    "2": {
      "date": "08/14",
      "route": "Prague",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 2 | 抵達布拉格與城區漫步",
          "desc": "下午抵達布拉格後前往公寓 Check-in，隨後安排城區漫步並逛超市煮晚餐。",
          "reminders": "下午 15:00 後可辦理公寓 Check-in。"
        },
        {
          "type": "transportation",
          "subtype": "airplane",
          "title": "抵達布拉格",
          "time": "13:00",
          "hasReservation": true,
          "desc": "13:00 抵達PRG第一航廈。",
          "reminders": "",
          "depStation": "桃園機場",
          "depMapQuery": "Taoyuan+International+Airport",
          "arrStation": "布拉格機場",
          "arrMapQuery": "Václav Havel Airport Prague Terminal 1"
        },
        {
          "type": "recommendation",
          "title": "逛市區與超市煮晚餐",
          "isOptional": true,
          "desc": "抵達後可在公寓附近適應環境，前往當地超市採買食材煮晚餐。",
          "mapQuery": "Prague+Supermarket"
        },
        {
          "type": "accommodation",
          "title": "住宿：Anenska by Charles Bridge 2",
          "checkIn": "15:00",
          "checkOut": "10:00",
          "desc": "",
          "mapQuery": "Anenska+by+Charles+Bridge+2"
        }
      ]
    },
    "3": {
      "date": "08/15",
      "route": "Prague → Český Krumlov → Prague",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 3 | 庫倫洛夫 CK 小鎮一日遊",
          "desc": "今日搭車前往 Český Krumlov，中午計畫於地窖餐廳用餐，傍晚搭車返回布拉格。",
          "reminders": "來回巴士時間固定，請務必提早抵達車站。"
        },
        {
          "type": "morning",
          "title": "出發前往 Český Krumlov",
          "time": "07:00",
          "hasReservation": false,
          "desc": "07:00 Prague, Na Knížecí → 09:40 Český Krumlov, AN",
          "mapQuery": "Prague+Na+Knizeci"
        },
        {
          "type": "restaurant",
          "title": "地窖餐廳午餐 (Krčma Šatlava)",
          "time": "11:00",
          "hasReservation": false,
          "desc": "11:00 Krčma Šatlava，考慮吃這家。",
          "mapQuery": "Krcma+Satlava"
        },
        {
          "type": "afternoon",
          "title": "回程布拉格",
          "time": "17:00",
          "hasReservation": false,
          "desc": "17:00 Český Krumlov, AN → 20:45 Prague, Na Knížecí",
          "mapQuery": "Cesky+Krumlov+AN"
        },
        {
          "type": "accommodation",
          "title": "住宿：Anenska by Charles Bridge 2",
          "desc": "續住第二晚。",
          "mapQuery": "Anenska+by+Charles+Bridge+2"
        }
      ]
    },
    "4": {
      "date": "08/16",
      "route": "Prague → 夜車前往 Krakow",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 4 | 布拉格城堡區 ＆ 跨國夜車移動",
          "desc": "白天探訪布拉格城堡區，傍晚可以買帶到火車上的食物。深夜搭乘跨國臥鋪火車前往波蘭克拉科夫。",
          "reminders": "夜車發車時間為 22:16，請準時至 Praha hl.n. 車站辦理登車。退房時間為 10:00。"
        },
        {
          "type": "morning",
          "title": "布拉格城堡區",
          "time": "09:00",
          "hasReservation": false,
          "desc": "白天主要探訪城堡區。",
          "mapQuery": "Prague+Castle"
        },
        {
          "type": "transportation",
          "title": "跨國夜車：České dráhy (Prague - Krakow)",
          "time": "22:16 - 07:22",
          "desc": `EN 50443 Slovakia 
                   carriage: 343, couchette: 61-66. 
                   22:16 Praha hl.n. → 07:22 Krakow Glowny`,
          "hasReservation": true,
          "reminders": "提前至少30分鐘到車站",
          "depStation": "Praha hl.n.",
          "depMapQuery": "Praha+hl.n.",
          "arrStation": "Krakow Glowny",
          "arrMapQuery": "Krakow+Glowny"
        },
        {
          "type": "accommodation",
          "title": "住宿：臥鋪火車",
          "checkIn": "22:16",
          "checkOut": "07:22",
          "desc": "搭乘臥鋪夜車移動與過夜。"
        }
      ]
    },
    "5": {
      "date": "08/17",
      "route": "Krakow → 維利奇卡鹽礦 → Krakow",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 5 | 抵達克拉科夫與地底鹽礦探秘",
          "desc": "早上抵達克拉科夫後先去青旅寄放行李。下午 14:00 安排維利奇卡鹽礦導覽行程，晚上回去煮晚餐。",
          "reminders": "鹽礦行程務必帶護照與學生證！！！開場前 15 分鐘要到。青旅 15:00 後可辦理 Check-in。"
        },
        {
          "type": "morning",
          "title": "抵達克拉科夫與寄放行李",
          "time": "07:22",
          "hasReservation": false,
          "desc": "抵達後先去青旅寄放行李。",
          "mapQuery": "MEININGER+Krakow+Centrum"
        },
        {
          "type": "afternoon",
          "title": "Sztolnia Wieliczka 鹽礦",
          "time": "14:00",
          "hasReservation": true,
          "desc": `Tourist Route - Individual tour (3h)。
                   Language: English。
                   開始前15分鐘要到。`,
          "mapQuery": "Sztolnia+Wieliczka",
          "reminders": "帶護照學生證！！！"
        },
        {
          "type": "accommodation",
          "title": "住宿：MEININGER Kraków Centrum",
          "checkIn": "15:00",
          "checkOut": "10:00",
          "desc": "",
          "mapQuery": "MEININGER+Krakow+Centrum"
        }
      ]
    },
    "6": {
      "date": "08/18",
      "route": "Krakow → 奧斯威辛集中營 → Krakow",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 6 | 奧斯威辛集中營導覽",
          "desc": "今日主要行程為造訪奧斯威辛集中營，導覽結束後返回市區休息並煮晚餐。",
          "reminders": "集中營行程務必攜帶護照與學生證！！！導覽時間： 3h45。"
        },
        {
          "type": "morning",
          "title": "門票行程：奧斯威辛集中營",
          "time": "09:45",
          "hasReservation": true,
          "desc": "導覽時長：3h45。",
          "mapQuery": "Auschwitz+Concentration+Camp",
          "reminders": "帶護照、學生證！！！"
        },
        {
          "type": "accommodation",
          "title": "住宿：MEININGER Kraków Centrum",
          "desc": "續住第二晚。",
          "mapQuery": "MEININGER+Krakow+Centrum"
        }
      ]
    },
    "7": {
      "date": "08/19",
      "route": "Krakow → 夜車前往 Budapest",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 7 | 克拉科夫老城探索與跨國夜車",
          "desc": "今日白天全天走訪克拉科夫市區景點。深夜搭乘跨國火車前往匈牙利布達佩斯。",
          "reminders": "夜車出發時間為 20:57，請注意退房期限為 11:00。"
        },
        {
          "type": "recommendation",
          "title": "推薦遊覽：逛市區與老城景點",
          "isOptional": true,
          "desc": "可彈性安排造訪：紡織會館、市政廳鐘樓 Town Hall Tower、瓦維爾城堡區、卡齊米日猶太區、辛德勒工廠 Oskar Schindler's Enamel Factory。",
          "mapQuery": "Krakow+Old+Town"
        },
        {
          "type": "transportation",
          "title": "跨國夜車：PKP Intercity (Krakow - Budapest)",
          "time": "20:57 - 08:29",
          "hasReservation": true,
          "desc": `417 Carpathia. 
                   1. Car351 Seat 22, 24, 26
                   2. Car351 Seat 42, 44, 46. 20:57 
                   Krakow Gł. → 08:29 Budapest Nyugati。`,
          "reminders": "提前至少30分鐘到車站",
          "depStation": "Krakow Gl.",
          "depMapQuery": "Krakow+Glowny",
          "arrStation": "Budapest Nyugati",
          "arrMapQuery": "Budapest+Nyugati"
        },
        {
          "type": "accommodation",
          "title": "住宿：臥鋪火車",
          "checkIn": "20:57",
          "checkOut": "08:29",
          "desc": "搭乘跨國夜車前往布達佩斯。"
        }
      ]
    },
    "8": {
      "date": "08/20",
      "route": "Budapest",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 8 | 抵達布達佩斯、佩斯區與國慶煙火",
          "desc": "早上抵達布達佩斯後前往青旅寄行李，下午遊覽佩斯區（Pest），逛多瑙河畔市集、品嚐人氣貝果與造訪知名咖啡館。晚上觀賞一年一度的國慶煙火。",
          "reminders": "下午 15:00 後可辦理公寓 Check-in。今日為匈牙利國慶日。"
        },
        {
          "type": "morning",
          "title": "抵達布達佩斯與寄行李",
          "time": "08:29",
          "hasReservation": false,
          "desc": "08:29 抵達 Budapest Nyugati 後先寄放行李。",
          "mapQuery": "Budapest+Nyugati"
        },
        {
          "type": "recommendation",
          "title": "推薦遊覽：佩斯區美食與市集",
          "isOptional": true,
          "desc": "走訪多瑙河畔市集，推薦品嚐 Best Bagel Basilica。下午可挑選中央咖啡館或紐約咖啡館享受悠閒時光。",
          "mapQuery": "Best+Bagel+Basilica"
        },
        {
          "type": "night",
          "title": "節慶限定：國慶煙火",
          "time": "20:00",
          "hasReservation": false,
          "desc": "晚上於多瑙河畔觀賞熱鬧的匈牙利國慶煙火。",
          "mapQuery": "Danube+River+Budapest"
        },
        {
          "type": "accommodation",
          "title": "住宿：WhiteAngel Apartments",
          "checkIn": "15:00",
          "checkOut": "10:00",
          "desc": "",
          "mapQuery": "WhiteAngel+Apartments"
        }
      ]
    },
    "9": {
      "date": "08/21",
      "route": "Budapest",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 9 | 布達區探索與多瑙河遊船",
          "desc": "今日重點為布達區（Buda）觀光，傍晚登上蓋勒特山欣賞絕美夜景，隨後安排多瑙河遊船行程，晚上回去煮晚餐。",
          "reminders": "布達區步行山路較多，建議準備好穿的鞋子。"
        },
        {
          "type": "recommendation",
          "title": "推薦遊覽：布達城堡區精華",
          "isOptional": true,
          "desc": "上午建議拜訪漁人堡 (Fisherman's Bastion) 與城堡山 (Castle Hill)；下午可至知名甜點店 Ruszwurm Cukrászda 休息，傍晚前往蓋勒特山 (Gellért Hill) 看夜景。",
          "mapQuery": "Fisherman's+Bastion"
        },
        {
          "type": "night",
          "title": "多瑙河遊船",
          "time": "20:30",
          "hasReservation": false,
          "desc": "晚上安排遊船行程，由河面欣賞布達雙城夜景。",
          "mapQuery": "Budapest+River+Cruise"
        },
        {
          "type": "accommodation",
          "title": "住宿：WhiteAngel Apartments",
          "desc": "續住第二晚。",
          "mapQuery": "WhiteAngel+Apartments"
        }
      ]
    },
    "10": {
      "date": "08/22",
      "route": "Budapest → Tapolca-tavasbarlang → Budapest",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 10 | Tapolca 地底湖洞穴一日遊",
          "desc": "今日計畫安排前往 Tapolca 進行地底湖洞穴一日遊，單程車程約需 3 小時。",
          "reminders": "此行程車程較長，請留意往返交通工具班次。"
        },
        {
          "type": "afternoon",
          "title": "景點行程：Tapolca-tavasbarlang 地底湖洞穴",
          "time": "13:00",
          "hasReservation": false,
          "desc": "前往中歐著名的地底溫泉洞穴，體驗獨特的地底划船。單程車程約 3 小時。",
          "mapQuery": "Tapolca+Lake+Cave"
        },
        {
          "type": "accommodation",
          "title": "住宿：WhiteAngel Apartments",
          "desc": "續住第三晚。",
          "mapQuery": "WhiteAngel+Apartments"
        }
      ]
    },
    "11": {
      "date": "08/23",
      "route": "Budapest",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 11 | 匈牙利國會大廈導覽與佩斯深度遊",
          "desc": "上午 10:00 安排已預訂的國會大廈導覽行程。下午可彈性走訪中央市場與周邊歷史建築，晚餐安排在 Retek Bistro 用餐。",
          "reminders": "國會大廈導覽務必攜帶護照與學生證！！！晚餐考慮吃 Retek Bistro。"
        },
        {
          "type": "morning",
          "title": "匈牙利國會大廈",
          "time": "10:00",
          "hasReservation": true,
          "desc": "已訂妥。含 Audioguide。每人價錢：14000 HUF / 36 EUR，學生(8-24) 7000 HUF / 18 EUR。",
          "mapQuery": "Hungarian+Parliament+Building",
          "reminders": "帶護照學生證！！！"
        },
        {
          "type": "recommendation",
          "title": "推薦遊覽：佩斯老城與經典美食",
          "isOptional": true,
          "desc": "參觀完國會大廈後，可順遊：中央市場、聖伊什特萬聖殿與歌劇院、煙草街會堂。午餐或晚餐推薦去匈牙利菜餐廳 Retek Bistro。",
          "mapQuery": "Central+Market+Hall+Budapest"
        },
        {
          "type": "accommodation",
          "title": "住宿：WhiteAngel Apartments",
          "desc": "續住第四晚。",
          "mapQuery": "WhiteAngel+Apartments"
        }
      ]
    },
    "12": {
      "date": "08/24",
      "route": "Budapest → 火車前往 Bratislava",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 12 | 移動至斯洛伐克首都布拉提斯拉瓦",
          "desc": "早上搭乘已訂妥的 MÁV 跨國火車前往斯洛伐克，下午抵達後辦理 Check-in，隨後安排舊城區漫步，晚上回去煮晚餐。",
          "reminders": "火車出發時間為 08:12，請提早至車站。斯洛伐克公寓 16:00 後可 Check-in，隔天 10:00 退房。"
        },
        {
          "type": "transportation",
          "title": "跨國鐵路：MÁV (Budapest - Bratislava)",
          "time": "08:12 - 10:44",
          "desc": "130 BÁTHORY EuroCity. 08:12 Budapest-Nyugati → 10:44 Bratislava hl. st.",
          "depStation": "Budapest-Nyugati",
          "depMapQuery": "Budapest-Nyugati",
          "arrStation": "Bratislava hl. st.",
          "arrMapQuery": "Bratislava+hl.+st."
        },
        {
          "type": "afternoon",
          "title": "布拉提斯拉瓦舊城區散步",
          "time": "14:00",
          "hasReservation": false,
          "desc": "悠閒漫步斯洛伐克舊城區，造訪著名街頭雕像與延市區逛街。",
          "mapQuery": "Bratislava+Old+Town"
        },
        {
          "type": "accommodation",
          "title": "住宿：LAM Schon - AC",
          "checkIn": "16:00",
          "checkOut": "10:00",
          "desc": "",
          "mapQuery": "LAM+Schon+Bratislava"
        }
      ]
    },
    "13": {
      "date": "08/25",
      "route": "Bratislava → Vienna",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 13 | 抵達音樂之都維也納與美泉宮",
          "desc": "今日上午從布拉提斯拉瓦搭車移動至維也納。下午 15:00 辦理青旅入住後，安排前往美泉宮觀光。",
          "reminders": "維也納青旅下午 15:00 後可辦理 Check-in。"
        },
        {
          "type": "transportation",
          "subtype": "train",
          "title": "移動至維也納",
          "time": "10:50 - 11:46",
          "hasReservation": false,
          "desc": `10:50 Bratislava hl.st. - 11:46 Wien Hbf
                  出發前幾天或當天訂票即可`,
          "mapQuery": "Wien+Hbf"
        },
        {
          "type": "afternoon",
          "title": "維也納美泉宮",
          "time": "14:30",
          "hasReservation": false,
          "desc": "造訪經典的哈布斯堡王朝夏宮美泉宮（Schönbrunn Palace）。",
          "mapQuery": "Schonbrunn+Palace"
        },
        {
          "type": "accommodation",
          "title": "住宿：MEININGER Vienna Downtown Franz",
          "checkIn": "15:00",
          "checkOut": "10:00",
          "desc": "",
          "mapQuery": "MEININGER+Vienna+Downtown+Franz"
        }
      ]
    },
    "14": {
      "date": "08/26",
      "route": "Vienna → Brno → Vienna",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 14 | 捷克布爾諾一日快閃與維也納舊城",
          "desc": "今日一早搭乘已預訂的 OBB 列車快閃捷克第二大城布爾諾，下午回程後安排維也納舊城區漫步。",
          "reminders": "去程火車 07:10 發車，車程約 1h31min，請勿遲到。"
        },
        {
          "type": "transportation",
          "title": "跨國快鐵：OBB (Vienna - Brno)",
          "time": "07:10 - 08:41",
          "desc": "RJX. 7:10 Vienna → 8:41 Brno。",
          "hasReservation": true,
          "depStation": "Wien Hbf",
          "depMapQuery": "Wien+Hbf",
          "arrStation": "Brno",
          "arrMapQuery": "Brno"
        },
        {
          "type": "morning",
          "title": "布爾諾快閃與舊城區遊覽",
          "time": "09:00",
          "hasReservation": false,
          "desc": "抵達布爾諾後，開展舊城區快閃觀光與散步。",
          "mapQuery": "Brno+Old+Town"
        },
        {
          "type": "transportation",
          "title": "跨國快鐵：OBB (Brno - Vienna)",
          "time": "17:18 - 18:49",
          "hasReservation": false,
          "desc": "RJX. 17:18 Brno → 18:49 Vienna。",
          "depStation": "Brno",
          "depMapQuery": "Brno",
          "arrStation": "Wien Hbf",
          "arrMapQuery": "Wien+Hbf"
        },
        {
          "type": "accommodation",
          "title": "住宿：MEININGER Vienna Downtown Franz",
          "desc": "續住第二晚。",
          "mapQuery": "MEININGER+Vienna+Downtown+Franz"
        }
      ]
    },
    "15": {
      "date": "08/27",
      "route": "Vienna",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 15 | 維也納美景宮與復古大摩天輪",
          "desc": "今日全天在維也納市區遊覽，計畫前往美景宮觀展，傍晚至普拉特遊樂園搭乘百年歷史的大摩天輪。",
          "reminders": "市區景點間移動可善用大眾運輸工具。"
        },
        {
          "type": "morning",
          "title": "維維安娜美景宮",
          "time": "10:00",
          "hasReservation": false,
          "desc": "計畫造訪美景宮（Belvedere Palace）朝聖藝術名作。",
          "mapQuery": "Belvedere+Palace"
        },
        {
          "type": "afternoon",
          "title": "普拉特大摩天輪",
          "time": "16:30",
          "hasReservation": false,
          "desc": "傍晚前往普拉特遊樂園搭乘百年大摩天輪看市區風景。",
          "mapQuery": "Wiener+Riesenrad"
        },
        {
          "type": "accommodation",
          "title": "住宿：MEININGER Vienna Downtown Franz",
          "desc": "續住第三晚。",
          "mapQuery": "MEININGER+Vienna+Downtown+Franz"
        }
      ]
    },
    "16": {
      "date": "08/28",
      "route": "Vienna → 桃園機場",
      "cards": [
        {
          "type": "introduction",
          "title": "Day 16 | 整理行囊與啟程返台",
          "desc": "今日上午辦理青旅退房，維也納漫步，傍晚前往維也納國際機場搭機返回台灣。",
          "reminders": "約17:30 - 18:30 到機場。22:40 飛機起飛。青年旅館退房時間為 11:00。"
        },
        {
          "type": "transportation",
          "subtype": "airplane",
          "title": "維也納機場返程",
          "time": "22:40",
          "hasReservation": true,
          "desc": "17:30 出發前往機場辦理登機與退稅，搭乘 22:40 航班返台。",
          "reminders": "",
          "mapQuery": "Vienna+International+Airport"
        }
      ]
    }
  }
}