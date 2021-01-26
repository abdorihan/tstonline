const { Client } = require('pg');
const client = new Client({
  user: 'zfnsqxyxdyuinh',
  host: 'ec2-54-78-127-245.eu-west-1.compute.amazonaws.com',
  database: 'd8ccpl1b2tjrpn',
  password: 'ed8bd878cdf38e747b8eca3209095b0888ff0b7243806185fb8cc1f311cc97b2',
  port: 5432,
});

export async function getData () {
    const result = { ok: true, msg: "ADMA is awesome"};
    await client.connect();
    for (let i =0;i<data.length;i++){
        let d = data[i];
        const res = await client.query('INSERT into products (id, name, quantity, type, price, buyprice) VALUES (null,?,?,?,?,?)',
        [d.name, d.quantity, d.type, d.price, d.buyPrice]).catch(e=>{
            console.log(e);
        });
        // console.log(res);
    }
    // const res = await client.query('Create Table IF NOT EXISTS products (id integer PRIMARY KEY ,name text ,quantity integer,type text,buyPrice decimal ,price decimal )');
    await client.end();
    result.msg = res;
    return Promise.resolve(result);
}


let data  =[
    {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 95.75,
    "price": 120,
    "name": "Liqui Moly 10w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 6,
    "buyPrice": 26.75,
    "price": 34,
    "name": "Liqui Moly 10w40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 108.35,
    "price": 136,
    "name": "Liqui Moly 10w40 Super  4L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 83.85,
    "price": 106,
    "name": "Liqui Moly 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 6,
    "buyPrice": 23.15,
    "price": 30,
    "name": "Liqui Moly 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 114.55,
    "price": 144,
    "name": "Liqui Moly 5w30 4L"
  },
  {
    "type": "زيوت",
    "quantity": 6,
    "buyPrice": 33.15,
    "price": 42,
    "name": "Liqui Moly 5w30 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 92,
    "price": 105,
    "name": "Valvoline 10w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 23.25,
    "price": 27,
    "name": "Valvoline 10w40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 101,
    "price": 115,
    "name": "Valvoline 10w40 Extra 4L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 25.75,
    "price": 30,
    "name": "Valvoline 10w40 Extra 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 106,
    "price": 120,
    "name": "Valvoline 20w50 5L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 22.5,
    "price": 25,
    "name": "Valvoline 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 41.5,
    "price": 47,
    "name": "Valvoline 5w20 SynPower 1L"
  },
  {
    "type": "زيوت",
    "quantity": 24,
    "buyPrice": 32,
    "price": 35,
    "name": "Valvoline 5w30 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 130,
    "price": 145,
    "name": "Valvoline 5w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 33,
    "price": 37,
    "name": "Valvoline 5w40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 96,
    "price": 110,
    "name": "Revenol 10w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 10,
    "buyPrice": 27.5,
    "price": 30,
    "name": "Revenol 10w40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 8,
    "buyPrice": 90,
    "price": 100,
    "name": "Revenol 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 10,
    "buyPrice": 25.5,
    "price": 28,
    "name": "Revenol 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 105,
    "price": 125,
    "name": "Revenol 5w30 4L"
  },
  {
    "type": "زيوت",
    "quantity": 1,
    "buyPrice": 65,
    "price": 80,
    "name": "Aveno 10w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 2,
    "buyPrice": 65,
    "price": 80,
    "name": "Aveno 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 40,
    "price": 50,
    "name": "Fanfaro 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 20,
    "buyPrice": 11,
    "price": 15,
    "name": "Fanfaro 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 40,
    "price": 50,
    "name": "Manol 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 20,
    "buyPrice": 11,
    "price": 15,
    "name": "Manol 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 45,
    "price": 55,
    "name": "Manol 10w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 10,
    "buyPrice": 13,
    "price": 17,
    "name": "Manol 10w40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 61.25,
    "price": 5,
    "name": "Wolver 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 60,
    "price": 70,
    "name": "Wolver Disel 15w40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 73.75,
    "price": 85,
    "name": "Wolver Disel SAE 40 5L"
  },
  {
    "type": "زيوت",
    "quantity": 4,
    "buyPrice": 43.75,
    "price": 50,
    "name": "Lukoil روسي 20w50 4L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 11.66667,
    "price": 15,
    "name": "Lukoil روسي 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 2,
    "buyPrice": 63.75,
    "price": 70,
    "name": "نجمة مصري SAE 40 5L"
  },
  {
    "type": "زيوت",
    "quantity": 2,
    "buyPrice": 50,
    "price": 55,
    "name": "نجمة مصري SAE 40 4L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 13.33333,
    "price": 15,
    "name": "نجمة مصري SAE 40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 7.91667,
    "price": 10,
    "name": "Super GT  20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 7.08333,
    "price": 12,
    "name": "زيت عداد SAE40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 8.33333,
    "price": 12,
    "name": "زيت الزاوية نجمة 40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 7.91667,
    "price": 10,
    "name": "زيت الزاوية احمر 20w50 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 7.91667,
    "price": 10,
    "name": "زيت الزاوية ازرق SAE 40 1L"
  },
  {
    "type": "زيوت",
    "quantity": 12,
    "buyPrice": 7.08333,
    "price": 10,
    "name": "زيت الزاوية نجمة 20w50 1L"
  },
   {
     "name": "Manol Break oil 455ML",
     "price": 12,
     "quantity": 5,
     "buyPrice": 6.5,
     "type": "زيت فرين"
   },
   {
     "name": "Dot3 Break oil 450ML",
     "price": 8,
     "quantity": 20,
     "buyPrice": 5.25,
     "type": "زيت فرين"
   },
   {
     "name": "FanfaroIII 1L",
     "price": 20,
     "quantity": 10,
     "buyPrice": 14,
     "type": "زيت كمبيو"
   },
   {
     "name": "Red Auto lll D 1L",
     "price": 15,
     "quantity": 12,
     "buyPrice": 8.33333,
     "type": "زيت كمبيو"
   },
   {
     "name": "ATF Drawlek 1L",
     "price": 10,
     "quantity": 12,
     "buyPrice": 6.66667,
     "type": "زيت دراولك"
   },
   {
     "name": "عجينة اصلي",
     "price": 12,
     "quantity": 5,
     "buyPrice": 9.5,
     "type": "ملحقات"
   },
   {
     "name": "لصقة مجفف احمر",
     "price": 10,
     "quantity": 5,
     "buyPrice": 8,
     "type": "ملحقات"
   },
   {
     "name": "لصقة مجفف ازرق",
     "price": 9,
     "quantity": 4,
     "buyPrice": 6.5,
     "type": "ملحقات"
   },
   {
     "name": "لحام بارد",
     "price": 10,
     "quantity": 5,
     "buyPrice": 7.5,
     "type": "ملحقات"
   },
   {
     "name": "Revanol Engine",
     "price": 35,
     "quantity": 3,
     "buyPrice": 25,
     "type": "منظفات"
   },
   {
     "name": "Revanol Enjection",
     "price": 35,
     "quantity": 3,
     "buyPrice": 28,
     "type": "منظفات"
   },
   {
     "name": "Manol Engine",
     "price": 12,
     "quantity": 5,
     "buyPrice": 8,
     "type": "منظفات"
   },
   {
     "name": "SGT رصاص",
     "price": 10,
     "quantity": 6,
     "buyPrice": 6.5,
     "type": "منظفات"
   },
   {
     "name": "SGT Enjection",
     "price": 12,
     "quantity": 6,
     "buyPrice": 8,
     "type": "منظفات"
   },
   {
     "name": "SGT بوابة",
     "price": 12,
     "quantity": 6,
     "buyPrice": 8,
     "type": "منظفات"
   },
   {
     "name": "WDB مزيل صأ",
     "price": 6,
     "quantity": 12,
     "buyPrice": 3.33333,
     "type": "منظفات"
   },
   {
     "name": "Revenol water green 1.5L",
     "price": 45,
     "quantity": 3,
     "buyPrice": 35,
     "type": "مياه"
   },
   {
     "name": "Revenol water red 1.5L",
     "price": 45,
     "quantity": 3,
     "buyPrice": 35,
     "type": "مياه"
   },
   {
     "name": "Revenol water blue 1.5L",
     "price": 45,
     "quantity": 3,
     "buyPrice": 35,
     "type": "مياه"
   },
   {
     "name": "Hipton green 1.5L",
     "price": 35,
     "quantity": 3,
     "buyPrice": 23,
     "type": "مياه"
   },
   {
     "name": "Hipton red 1.5 L",
     "price": 35,
     "quantity": 2,
     "buyPrice": 23,
     "type": "مياه"
   },
   {
     "name": "Al3lamen green 3.7L",
     "price": 12,
     "quantity": 6,
     "buyPrice": 6.66667,
     "type": "مياه"
   },
   {
     "name": "Al3lamen red 3.7L",
     "price": 12,
     "quantity": 6,
     "buyPrice": 6.66667,
     "type": "مياه"
   },
   {
     "name": "Freezetone Water green 3.7L",
     "price": 25,
     "quantity": 6,
     "buyPrice": 17.5,
     "type": "مياه"
   },
   {
     "name": "T3 green 5L",
     "price": 10,
     "quantity": 4,
     "buyPrice": 6.5,
     "type": "مياه"
   },
   {
     "name": "T3 green 1L",
     "price": 2.5,
     "quantity": 16,
     "buyPrice": 1.625,
     "type": "مياه"
   },
   {
     "name": "Tajoura Water red 1L",
     "price": 2.5,
     "quantity": 12,
     "buyPrice": 1.25,
     "type": "مياه"
   },
   {
     "name": "Tajoura Water منشط 1L",
     "price": 2.5,
     "quantity": 12,
     "buyPrice": 1.25,
     "type": "مياه"
   },
   {
     "name": "Tajoura Water مقطر 1L",
     "price": 2.5,
     "quantity": 12,
     "buyPrice": 1.25,
     "type": "مياه"
   },
   {
     "name": "Mann filter هونداي ",
     "price": 17,
     "quantity": 10,
     "buyPrice": 13.95,
     "type": "فلاتر"
   },
   {
     "name": "Mann filter ميتشي",
     "price": 25,
     "quantity": 10,
     "buyPrice": 17.95,
     "type": "فلاتر"
   },
   {
     "name": "Filter D4 تيوتا",
     "price": 13,
     "quantity": 2,
     "buyPrice": 8.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter D2 تيوتا",
     "price": 13,
     "quantity": 2,
     "buyPrice": 8.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter 425 حشوة",
     "price": 16,
     "quantity": 2,
     "buyPrice": 11.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter 426 حشوة",
     "price": 16,
     "quantity": 2,
     "buyPrice": 11.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter Nissan",
     "price": 12,
     "quantity": 2,
     "buyPrice": 8,
     "type": "فلاتر"
   },
   {
     "name": "Filter Mitsubishi",
     "price": 12,
     "quantity": 2,
     "buyPrice": 8,
     "type": "فلاتر"
   },
   {
     "name": "Filter Toyota E1",
     "price": 16,
     "quantity": 2,
     "buyPrice": 11.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter Hyundai",
     "price": 10,
     "quantity": 10,
     "buyPrice": 7.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter DYF Hyundai",
     "price": 15,
     "quantity": 3,
     "buyPrice": 10,
     "type": "فلاتر"
   },
   {
     "name": "Filter Disel Thailand فلتر بنزين",
     "price": 25,
     "quantity": 2,
     "buyPrice": 20,
     "type": "فلاتر"
   },
   {
     "name": "Filter 5091 porter",
     "price": 22,
     "quantity": 2,
     "buyPrice": 17,
     "type": "فلاتر"
   },
   {
     "name": "Filter 111 Golf3",
     "price": 18,
     "quantity": 2,
     "buyPrice": 12,
     "type": "فلاتر"
   },
   {
     "name": "Filter 112 Jeep",
     "price": 16,
     "quantity": 2,
     "buyPrice": 11.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter SCT 105",
     "price": 13,
     "quantity": 5,
     "buyPrice": 8.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter SCT 104",
     "price": 13,
     "quantity": 5,
     "buyPrice": 8.5,
     "type": "فلاتر"
   },
   {
     "name": "Filter SCT 414",
     "price": 16,
     "quantity": 2,
     "buyPrice": 11.5,
     "type": "فلاتر"
   },
   {
     "name": "غلاف مع ستيرسو نوبار",
     "quantity": 3,
     "type": "غلافات",
     "buyPrice": 63,
     "price": 75
   },
   {
     "name": "غلاف تركي كامل Envar",
     "quantity": 1,
     "type": "غلافات",
     "buyPrice": 85,
     "price": 100
   },
   {
     "name": "غلاف تركي luxary",
     "quantity": 2,
     "type": "غلافات",
     "buyPrice": 80,
     "price": 100
   },
   {
     "name": "غلاف تركي مفصول",
     "quantity": 3,
     "type": "غلافات",
     "buyPrice": 95,
     "price": 130
   },
   {
     "name": "كانتيرة عادي",
     "quantity": 17,
     "type": "غلافات",
     "buyPrice": 11.5,
     "price": 20
   },
   {
     "name": "كانتيرا ليكرا",
     "quantity": 4,
     "type": "غلافات",
     "buyPrice": 30,
     "price": 40
   },
   {
     "name": "غلاف جلد FS",
     "quantity": 1,
     "type": "غلافات",
     "buyPrice": 135,
     "price": 150
   },
   {
     "name": "غلاف جلد + قماش X",
     "quantity": 1,
     "type": "غلافات",
     "buyPrice": 110,
     "price": 135
   },
   {
     "name": "غلاف جلد X",
     "quantity": 1,
     "type": "غلافات",
     "buyPrice": 100,
     "price": 120
   },
   {
     "name": "مسند امامي BO",
     "quantity": 2,
     "type": "غلافات",
     "buyPrice": 110,
     "price": 145
   },
   {
     "name": "مسند محبب",
     "quantity": 1,
     "type": "غلافات",
     "buyPrice": 20,
     "price": 30
   },
   {
     "name": "غلاف استيرسو محبب",
     "quantity": 6,
     "type": "غلاف ستيرسو",
     "buyPrice": 10.5,
     "price": 20
   },
   {
     "name": "غلاف استيرسو مضفور",
     "quantity": 4,
     "type": "غلاف ستيرسو",
     "buyPrice": 10.5,
     "price": 20
   },
   {
     "name": "غلاف استيرسو علامة",
     "quantity": 4,
     "type": "غلاف ستيرسو",
     "buyPrice": 20,
     "price": 25
   },
   {
     "name": "غلاف استيرسو وبر ",
     "quantity": 1,
     "type": "غلاف ستيرسو",
     "buyPrice": 8.5,
     "price": 15
   },
   {
     "name": "فرش ارضية علامة",
     "quantity": 2,
     "type": "فرش ارضية",
     "buyPrice": 53,
     "price": 65
   },
   {
     "name": "فرش ارضية بدون علامة",
     "quantity": 2,
     "type": "فرش ارضية",
     "buyPrice": 53,
     "price": 65
   },
   {
     "name": "فرش ارضية No.1",
     "quantity": 2,
     "type": "فرش ارضية",
     "buyPrice": 28.5,
     "price": 40
   },
   {
     "name": "فرش ارضية سوبر",
     "quantity": 2,
     "type": "فرش ارضية",
     "buyPrice": 34,
     "price": 45
   },
   {
     "name": "مساعد استيرسو",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 11,
     "price": 15
   },
   {
     "name": "مساحات22 & 24",
     "quantity": 4,
     "type": "ملحقات",
     "buyPrice": 5,
     "price": 15
   },
   {
     "name": "كلاكس فرنساوي 762",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 13.5,
     "price": 25
   },
   {
     "name": "كلاكس فيتنام AM80",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 18,
     "price": 25
   },
   {
     "name": "حامل طارقة",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 12.5,
     "price": 20
   },
   {
     "name": "فيوز كبير",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 1.5,
     "price": 3
   },
   {
     "name": "فيوز صغير",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 1.75,
     "price": 3
   },
   {
     "name": "فيوز بوكس",
     "quantity": 100,
     "type": "ملحقات",
     "buyPrice": 0.1,
     "price": 0.25
   },
   {
     "name": "لد فودرة",
     "quantity": 3,
     "type": "ملحقات",
     "buyPrice": 12,
     "price": 20
   },
   {
     "name": "غلاف مارشةH",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 12,
     "price": 17
   },
   {
     "name": "غلاف مارشة BT 08",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 12,
     "price": 20
   },
   {
     "name": "فرش فودرة",
     "quantity": 3,
     "type": "ملحقات",
     "buyPrice": 13,
     "price": 25
   },
   {
     "name": "رولة سلفر كبير",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 11,
     "price": 15
   },
   {
     "name": "رولة سلفر صغير",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 9,
     "price": 10
   },
   {
     "name": "تيسيلي تيوبلس F-015",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 10,
     "price": 15
   },
   {
     "name": "علامة تاكسي داخلية",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 10,
     "price": 15
   },
   {
     "name": "لصقة كهرباء",
     "quantity": 10,
     "type": "ملحقات",
     "buyPrice": 0.95,
     "price": 2
   },
   {
     "name": "ستار جانبي",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 8,
     "price": 15
   },
   {
     "name": "كاوات 500",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 24,
     "price": 45
   },
   {
     "name": "كاوات 1200",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 34,
     "price": 55
   },
   {
     "name": "طابة زيت ",
     "quantity": 8,
     "type": "ملحقات",
     "buyPrice": 3.5,
     "price": 7
   },
   {
     "name": "واقي باب علامة",
     "quantity": 4,
     "type": "ملحقات",
     "buyPrice": 7,
     "price": 10
   },
   {
     "name": "واقي باب عادي 222",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 3.5,
     "price": 6
   },
   {
     "name": "واقي باب D11",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 3.5,
     "price": 6
   },
   {
     "name": "واقي باب Z-217",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 3.5,
     "price": 6
   },
   {
     "name": "سلفر رقم 4",
     "quantity": 5,
     "type": "ملحقات",
     "buyPrice": 5,
     "price": 10
   },
   {
     "name": "سلفر رقم 7",
     "quantity": 5,
     "type": "ملحقات",
     "buyPrice": 6,
     "price": 10
   },
   {
     "name": "سلفر كروم",
     "quantity": 5,
     "type": "ملحقات",
     "buyPrice": 10,
     "price": 15
   },
   {
     "name": "مقيد حزام",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 5.5,
     "price": 10
   },
   {
     "name": "انتينة نوبار",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 7,
     "price": 10
   },
   {
     "name": "حاملة هاتف",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 13,
     "price": 18
   },
   {
     "name": "حاملة كوب زوجي",
     "quantity": 1,
     "type": "ملحقات",
     "buyPrice": 7,
     "price": 10
   },
   {
     "name": "حاملة كوب فردي",
     "quantity": 2,
     "type": "ملحقات",
     "buyPrice": 4,
     "price": 7
   },
   {
     "name": "لامبة S25 سطوب",
     "quantity": 20,
     "type": "لامبات",
     "buyPrice": 1.1,
     "price": 2
   },
   {
     "name": "لامبة H4 vvs",
     "quantity": 10,
     "type": "لامبات",
     "buyPrice": 2.75,
     "price": 8
   },
   {
     "name": "لامبة H7 vvs",
     "quantity": 10,
     "type": "لامبات",
     "buyPrice": 2.75,
     "price": 8
   },
   {
     "name": "لامبة H3 vvs",
     "quantity": 20,
     "type": "لامبات",
     "buyPrice": 2.75,
     "price": 8
   },
   {
     "name": "لامبة قومبري T10",
     "quantity": 100,
     "type": "لامبات",
     "buyPrice": 0.35,
     "price": 0.75
   },
   {
     "name": "منظومة ابيض C6",
     "quantity": 3,
     "type": "لامبات",
     "buyPrice": 15,
     "price": 30
   },
   {
     "name": "منظومة Q4",
     "quantity": 5,
     "type": "لامبات",
     "buyPrice": 45,
     "price": 75
   },
   {
     "name": "جلدة صغيرة",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 3.5,
     "price": 8
   },
   {
     "name": "جلدة كبيرة",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 6.5,
     "price": 10
   },
   {
     "name": "مزيل سلفر",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 10,
     "price": 20
   },
   {
     "name": "ملمع فودرة F-024",
     "quantity": 4,
     "type": "كماليات تنظيف",
     "buyPrice": 4,
     "price": 10
   },
   {
     "name": "فوطة",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 13,
     "price": 20
   },
   {
     "name": "ملمع فنارات F-097",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 11,
     "price": 20
   },
   {
     "name": "ملمع فنارات G-1113",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 13,
     "price": 25
   },
   {
     "name": "منظف راداتوري F-037",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 5.5,
     "price": 10
   },
   {
     "name": "باسطة حرشة",
     "quantity": 4,
     "type": "كماليات تنظيف",
     "buyPrice": 5,
     "price": 8
   },
   {
     "name": "نشافة تلميع",
     "quantity": 4,
     "type": "كماليات تنظيف",
     "buyPrice": 3.5,
     "price": 6
   },
   {
     "name": "قطن كبير ",
     "quantity": 1,
     "type": "كماليات تنظيف",
     "buyPrice": 6,
     "price": 5
   },
   {
     "name": "قطن صغير",
     "quantity": 2,
     "type": "كماليات تنظيف",
     "buyPrice": 3,
     "price": 10
   },
   {
     "name": "رائحة بخ DAS",
     "quantity": 12,
     "type": "روائح",
     "buyPrice": 5,
     "price": 8
   },
   {
     "name": "رائحة جرة",
     "quantity": 25,
     "type": "روائح",
     "buyPrice": 4,
     "price": 7
   },
   {
     "name": "رائحة كرت عادية",
     "quantity": 12,
     "type": "روائح",
     "buyPrice": 1.25,
     "price": 2
   },
   {
     "name": "رائحة كرت L.D",
     "quantity": 10,
     "type": "روائح",
     "buyPrice": 2.5,
     "price": 4
   }
 ];

export default { getData};


