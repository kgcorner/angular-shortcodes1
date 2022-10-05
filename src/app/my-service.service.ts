import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  jsonData : any[] = [
    {
      "title": "Up to 80% off on Vero Moda @ Myntra",
      "description": "",
      "thumbnails": "https://dealsdelta-images.s3.ap-south-1.amazonaws.com/1657848710466.webp",
      "url": "https://www.myntra.com/womens-western-wear?f=Categories%3ATops&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0",
      "surferPlaceholderUrl": "https://www.myntra.com/womens-western-wear?f=Categories%3ATops&rf=Discount%20Range%3A50.0_100.0_50.0%20TO%20100.0",
      "category": {
        "name": "Top",
        "description": "Best offers on Tops for women",
        "id": "6172229dd805ce0c1a110162"
      },
      "store": {
        "id": "61722319d805ce0c1a11019e",
        "name": "Myntra",
        "description": null,
        "maxCashback": null,
        "offersCount": 0
      },
      "lastDate": "2022-12-31T00:00:00.000+0000",
      "maxDiscount": "Upto 80%",
      "featured": true,
      "banner": false,
      "offerId": "1698640e-6b99-46f7-ae01-cfad37dbab7d",
      "createdOn": "2022-07-15T01:35:31.000+0000",
      "tag": "",
      "product": false,
      "brand": null,
      "links": [
        {
          "href": "/offers/1698640e-6b99-46f7-ae01-cfad37dbab7d"
        }
      ]
    },
    {
      "title": "Up to 70% off on kitchen Essentials",
      "description": "",
      "thumbnails": "https://dealsdelta-images.s3.ap-south-1.amazonaws.com/1657848710562.webp",
      "url": "https://www.snapdeal.com/products/home-kitchen-kitchen-storage?sort=plrty&q=Brand%3AAFAST%5Eanalog%20kichenware%5EAnalog%20Kitcehwnare%5Eanalog%20kitcheneware%5EAnalog%20kitchenware%5EAPEIRON%5EArni%5EBorosil%5EBOWLMAN%5EDream%20Home%5EDynore%5EG-Pet%5EHOMETALES%5EIncrizma%5EJaypee%5EJaypee%20Plus%5EJensons%5EKitchen%20pro%5EMilton%5ENayasa%5ENirlon%5ENouvetta%5EOFFYX%5ESopl-Oliveware%5EZMS%20MARKETING%7ChpsaScore_tf1%3A1%7CPrice%3A189%2C999%7C",
      "surferPlaceholderUrl": "https://www.snapdeal.com/products/home-kitchen-kitchen-storage?sort=plrty&q=Brand%3AAFAST%5Eanalog%20kichenware%5EAnalog%20Kitcehwnare%5Eanalog%20kitcheneware%5EAnalog%20kitchenware%5EAPEIRON%5EArni%5EBorosil%5EBOWLMAN%5EDream%20Home%5EDynore%5EG-Pet%5EHOMETALES%5EIncrizma%5EJaypee%5EJaypee%20Plus%5EJensons%5EKitchen%20pro%5EMilton%5ENayasa%5ENirlon%5ENouvetta%5EOFFYX%5ESopl-Oliveware%5EZMS%20MARKETING%7ChpsaScore_tf1%3A1%7CPrice%3A189%2C999%7C",
      "category": {
        "name": "Top",
        "description": "Best offers on Tops for women",
        "id": "6172229dd805ce0c1a110162"
      },
      "store": {
        "id": "61722319d805ce0c1a11019d",
        "name": "Snapdeal",
        "description": null,
        "maxCashback": null,
        "offersCount": 0
      },
      "lastDate": "2022-12-31T00:00:00.000+0000",
      "maxDiscount": "Upto 70%",
      "featured": true,
      "banner": false,
      "offerId": "76393b1c-810b-46f4-8af1-dcabac7f8b0c",
      "createdOn": "2022-07-15T01:34:40.000+0000",
      "tag": "",
      "product": false,
      "brand": null,
      "links": [
        {
          "href": "/offers/76393b1c-810b-46f4-8af1-dcabac7f8b0c"
        }
      ]
    },
    {
      "title": "Up to 60% off in Clearance Sale",
      "description": "",
      "thumbnails": "https://dealsdelta-images.s3.ap-south-1.amazonaws.com/1657848710378.webp",
      "url": "https://www.amazon.in/s?rh=n%3A20538600031&language=en_IN&brr=1&rd=1",
      "surferPlaceholderUrl": "https://www.amazon.in/s?rh=n%3A20538600031&language=en_IN&brr=1&rd=1",
      "category": {
        "name": "Top",
        "description": "Best offers on Tops for women",
        "id": "6172229dd805ce0c1a110162"
      },
      "store": {
        "id": "61722319d805ce0c1a11019c",
        "name": "Amazon",
        "description": null,
        "maxCashback": null,
        "offersCount": 0
      },
      "lastDate": "2022-12-31T00:00:00.000+0000",
      "maxDiscount": "Upto 60%",
      "featured": true,
      "banner": false,
      "offerId": "b40a1c82-b6e0-4d13-a090-7fdd5faa1a12",
      "createdOn": "2022-07-15T01:33:52.000+0000",
      "tag": "",
      "product": false,
      "brand": null,
      "links": [
        {
          "href": "/offers/b40a1c82-b6e0-4d13-a090-7fdd5faa1a12"
        }
      ]
    },
    {
      "title": "Up to 60% off on Essential tools",
      "description": "",
      "thumbnails": "https://dealsdelta-images.s3.ap-south-1.amazonaws.com/1657848710202.webp",
      "url": "https://www.amazon.in/b/ref=MOREPC?ie=UTF8&node=5866078031&pf_rd_r=9R6D4XF3YA1G879J5KHG&pf_rd_p=cc8a8bb9-550c-4326-8886-8926e38714b9&pd_rd_r=62c82896-abab-464a-9023-5040ba73da16&pd_rd_w=GBxe2&pd_rd_wg=lnydQ&ref_=pd_gw_unk",
      "surferPlaceholderUrl": "https://www.amazon.in/b/ref=MOREPC?ie=UTF8&node=5866078031&pf_rd_r=9R6D4XF3YA1G879J5KHG&pf_rd_p=cc8a8bb9-550c-4326-8886-8926e38714b9&pd_rd_r=62c82896-abab-464a-9023-5040ba73da16&pd_rd_w=GBxe2&pd_rd_wg=lnydQ&ref_=pd_gw_unk",
      "category": {
        "name": "Tools",
        "description": "Tools and measuring instruments",
        "id": "6188922ed805ce4380d2ec5c"
      },
      "store": {
        "id": "61722319d805ce0c1a11019c",
        "name": "Amazon",
        "description": null,
        "maxCashback": null,
        "offersCount": 0
      },
      "lastDate": "2022-12-31T00:00:00.000+0000",
      "maxDiscount": "Upto 60%",
      "featured": true,
      "banner": false,
      "offerId": "e154f120-a3e3-4159-96bb-a07bcffb3509",
      "createdOn": "2022-07-15T01:33:24.000+0000",
      "tag": "",
      "product": false,
      "brand": null,
      "links": [
        {
          "href": "/offers/e154f120-a3e3-4159-96bb-a07bcffb3509"
        }
      ]
    },
    {
      "title": "Flipkart Deals Of The Day",
      "description": "",
      "thumbnails": "https://dealsdelta-images.s3.ap-south-1.amazonaws.com/1657848710526.webp",
      "url": "https://www.flipkart.com/dotd-store?=Web&wid=4.dealCard.OMU_3&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3&otracker1=hp_omu_SECTIONED_manualRanking_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_wc_view-all_3",
      "surferPlaceholderUrl": "https://www.flipkart.com/dotd-store?=Web&wid=4.dealCard.OMU_3&otracker=hp_omu_Deals%2Bof%2Bthe%2BDay_3&otracker1=hp_omu_SECTIONED_manualRanking_neo%2Fmerchandising_Deals%2Bof%2Bthe%2BDay_NA_wc_view-all_3",
      "category": {
        "name": "Accessory Jewellery",
        "description": "Deals for Accessory Jewellery",
        "id": "61c56506d805ce05664bf499"
      },
      "store": {
        "id": "61722319d805ce0c1a11019b",
        "name": "Flipkart",
        "description": null,
        "maxCashback": null,
        "offersCount": 0
      },
      "lastDate": "2022-12-31T00:00:00.000+0000",
      "maxDiscount": "Upto 80%",
      "featured": true,
      "banner": false,
      "offerId": "e103c7dd-d919-4abd-9934-4f7b5fcb432d",
      "createdOn": "2022-07-15T01:32:25.000+0000",
      "tag": "",
      "product": false,
      "brand": null,
      "links": [
        {
          "href": "/offers/e103c7dd-d919-4abd-9934-4f7b5fcb432d"
        }
      ]
    }
  ]
  offerMap : any = {};

  movies: any[] = [
    {
       "budget":200000000,
       "genres":[
          "Action",
          "Science Fiction"
       ],
       "homepage":"https://www.godzillavskong.net",
       "id":399566,
       "original_language":"English",
       "overview":"In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
       "popularity":10755.513,
       "poster_path":"/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
       "release_date":"2021-03-24",
       "revenue":298573106,
       "runtime":113,
       "tagline":"One Will Fall",
       "title":"Godzilla vs. Kong",
       "vote_average":8.4,
       "vote_count":4108,
       "external_ids":{
          "imdb_id":"tt5034838",
          "facebook_id":"GodzillaVsKong",
          "instagram_id":"godzillavskong",
          "twitter_id":"GodzillavsKong"
       },
       "similar":[
          {
             "id":15767,
             "title":"Godzilla: Final Wars"
          },
          {
             "id":929,
             "title":"Godzilla"
          },
          {
             "id":12636,
             "title":"Godzilla Against MechaGodzilla"
          },
          {
             "id":18983,
             "title":"Godzilla, King of the Monsters!"
          },
          {
             "id":315011,
             "title":"Shin Godzilla"
          },
          {
             "id":36679,
             "title":"Godzilla vs. King Ghidorah"
          },
          {
             "id":18289,
             "title":"Godzilla vs. Biollante"
          },
          {
             "id":268896,
             "title":"Pacific Rim: Uprising"
          },
          {
             "id":536115,
             "title":"Godzilla: The Planet Eater"
          },
          {
             "id":1678,
             "title":"Godzilla"
          },
          {
             "id":254,
             "title":"King Kong"
          },
          {
             "id":7191,
             "title":"Cloverfield"
          },
          {
             "id":68726,
             "title":"Pacific Rim"
          },
          {
             "id":293167,
             "title":"Kong: Skull Island"
          },
          {
             "id":19333,
             "title":"Terror of Mechagodzilla"
          },
          {
             "id":26947,
             "title":"Gamera vs. Guiron"
          },
          {
             "id":803386,
             "title":"The Legend of King Kong"
          },
          {
             "id":19742,
             "title":"Rodan"
          },
          {
             "id":54433,
             "title":"Gamera: Guardian of the Universe"
          },
          {
             "id":39468,
             "title":"Godzilla vs. Megaguirus: The G Extermination Strategy"
          }
       ],
       "certification":"PG-13",
       "directors":[
          {
             "id":98631,
             "name":"Adam Wingard"
          }
       ],
       "writers":[
          {
             "id":1706,
             "name":"Terry Rossio"
          },
          {
             "id":11012,
             "name":"Michael Dougherty"
          },
          {
             "id":579281,
             "name":"Eric Pearson"
          },
          {
             "id":1080778,
             "name":"Max Borenstein"
          },
          {
             "id":1443683,
             "name":"Zach Shields"
          }
       ],
       "cast":[
          {
             "id":28846,
             "name":"Alexander Skarsgård"
          },
          {
             "id":1356210,
             "name":"Millie Bobby Brown"
          },
          {
             "id":15556,
             "name":"Rebecca Hall"
          }
       ],
       "trailer_yt":"odM92ap8_c0"
    },
    {
       "budget":70000000,
       "genres":[
          "Action",
          "Adventure",
          "Fantasy",
          "Science Fiction"
       ],
       "homepage":"https://www.hbomax.com/zacksnydersjusticeleague",
       "id":791373,
       "original_language":"English",
       "overview":"Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
       "popularity":4066.664,
       "poster_path":"/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
       "release_date":"2021-03-18",
       "runtime":242,
       "tagline":"",
       "title":"Zack Snyder's Justice League",
       "vote_average":8.6,
       "vote_count":4740,
       "external_ids":{
          "imdb_id":"tt12361974",
          "facebook_id":"thesnydercut",
          "instagram_id":"snydercut",
          "twitter_id":"snydercut"
       },
       "similar":[
          {
             "id":9738,
             "title":"Fantastic Four"
          },
          {
             "id":246655,
             "title":"X-Men: Apocalypse"
          },
          {
             "id":36586,
             "title":"Blade II"
          },
          {
             "id":408647,
             "title":"Teen Titans: The Judas Contract"
          },
          {
             "id":297556,
             "title":"Justice League: Throne of Atlantis"
          },
          {
             "id":1924,
             "title":"Superman"
          },
          {
             "id":9531,
             "title":"Superman III"
          },
          {
             "id":8536,
             "title":"Superman II"
          },
          {
             "id":251519,
             "title":"Son of Batman"
          },
          {
             "id":1979,
             "title":"Fantastic Four: Rise of the Silver Surfer"
          },
          {
             "id":183011,
             "title":"Justice League: The Flashpoint Paradox"
          },
          {
             "id":1452,
             "title":"Superman Returns"
          },
          {
             "id":166424,
             "title":"Fantastic Four"
          },
          {
             "id":299537,
             "title":"Captain Marvel"
          },
          {
             "id":13640,
             "title":"Superman: Doomsday"
          },
          {
             "id":68721,
             "title":"Iron Man 3"
          },
          {
             "id":141052,
             "title":"Justice League"
          },
          {
             "id":10195,
             "title":"Thor"
          },
          {
             "id":320288,
             "title":"Dark Phoenix"
          },
          {
             "id":21683,
             "title":"Batman: Mystery of the Batwoman"
          }
       ],
       "certification":"R",
       "directors":[
          {
             "id":15217,
             "name":"Zack Snyder"
          }
       ],
       "writers":[
          {
             "id":3794,
             "name":"Bob Kane"
          },
          {
             "id":15217,
             "name":"Zack Snyder"
          },
          {
             "id":18866,
             "name":"Jack Kirby"
          },
          {
             "id":20007,
             "name":"Jerry Siegel"
          },
          {
             "id":20008,
             "name":"Joe Shuster"
          },
          {
             "id":131680,
             "name":"Chris Terrio"
          },
          {
             "id":198034,
             "name":"Bill Finger"
          },
          {
             "id":466391,
             "name":"Will Beall"
          },
          {
             "id":1236448,
             "name":"William Moulton Marston"
          },
          {
             "id":1368162,
             "name":"Gardner Fox"
          }
       ],
       "cast":[
          {
             "id":880,
             "name":"Ben Affleck"
          },
          {
             "id":73968,
             "name":"Henry Cavill"
          },
          {
             "id":90633,
             "name":"Gal Gadot"
          }
       ],
       "trailer_yt":"vM-Bja2Gy04"
    },
    {
       "budget":125000000,
       "genres":[
          "Science Fiction",
          "Action",
          "Adventure",
          "Thriller"
       ],
       "homepage":"https://chaoswalking.movie",
       "id":412656,
       "original_language":"English",
       "overview":"Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
       "popularity":2919.395,
       "poster_path":"/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
       "release_date":"2021-02-24",
       "runtime":109,
       "tagline":"No one escapes the noise.",
       "title":"Chaos Walking",
       "vote_average":7.5,
       "vote_count":287,
       "external_ids":{
          "imdb_id":"tt2076822",
          "facebook_id":"ChaosWalkingMovie",
          "instagram_id":"chaoswalking",
          "twitter_id":"ChaosWalking"
       },
       "similar":[
          {
             "id":16437,
             "title":"Cyborg 2"
          },
          {
             "id":333339,
             "title":"Ready Player One"
          },
          {
             "id":14092,
             "title":"Ghost in the Shell 2.0"
          },
          {
             "id":157350,
             "title":"Divergent"
          },
          {
             "id":198663,
             "title":"The Maze Runner"
          },
          {
             "id":428078,
             "title":"Mortal Engines"
          },
          {
             "id":294254,
             "title":"Maze Runner: The Scorch Trials"
          },
          {
             "id":500664,
             "title":"Upgrade"
          },
          {
             "id":10134,
             "title":"Cyborg"
          },
          {
             "id":131631,
             "title":"The Hunger Games: Mockingjay - Part 1"
          },
          {
             "id":3509,
             "title":"A Scanner Darkly"
          },
          {
             "id":11309,
             "title":"Hardware"
          },
          {
             "id":11633,
             "title":"Appleseed"
          },
          {
             "id":9739,
             "title":"Demolition Man"
          },
          {
             "id":5550,
             "title":"RoboCop 3"
          },
          {
             "id":9381,
             "title":"Babylon A.D."
          },
          {
             "id":17189,
             "title":"Battle Angel"
          },
          {
             "id":78,
             "title":"Blade Runner"
          },
          {
             "id":5548,
             "title":"RoboCop"
          },
          {
             "id":72710,
             "title":"The Host"
          }
       ],
       "certification":"PG-13",
       "directors":[
          {
             "id":11694,
             "name":"Doug Liman"
          }
       ],
       "writers":[
          {
             "id":101814,
             "name":"Christopher D. Ford"
          },
          {
             "id":1299057,
             "name":"Patrick Ness"
          }
       ],
       "cast":[
          {
             "id":1315036,
             "name":"Daisy Ridley"
          },
          {
             "id":1136406,
             "name":"Tom Holland"
          },
          {
             "id":1019,
             "name":"Mads Mikkelsen"
          }
       ],
       "trailer_yt":"nRf4ZgzHoVw"
    },
    {
       "genres":[
          "Animation",
          "Adventure",
          "Fantasy",
          "Family",
          "Action"
       ],
       "homepage":"https://movies.disney.com/raya-and-the-last-dragon",
       "id":527774,
       "original_language":"English",
       "overview":"Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
       "popularity":2064.45,
       "poster_path":"/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
       "release_date":"2021-03-03",
       "revenue":56482606,
       "runtime":107,
       "tagline":"A quest to save her world.",
       "title":"Raya and the Last Dragon",
       "vote_average":8.3,
       "vote_count":2176,
       "external_ids":{
          "imdb_id":"tt5109280",
          "facebook_id":"rayaandthelastdragon",
          "instagram_id":"disneyraya",
          "twitter_id":"DisneyRaya"
       },
       "similar":[
          {
             "id":140300,
             "title":"Kung Fu Panda 3"
          },
          {
             "id":10674,
             "title":"Mulan"
          },
          {
             "id":11360,
             "title":"Dumbo"
          },
          {
             "id":13465,
             "title":"The Adventures of Ichabod and Mr. Toad"
          },
          {
             "id":408,
             "title":"Snow White and the Seven Dwarfs"
          },
          {
             "id":10895,
             "title":"Pinocchio"
          },
          {
             "id":3170,
             "title":"Bambi"
          },
          {
             "id":11886,
             "title":"Robin Hood"
          },
          {
             "id":12092,
             "title":"Alice in Wonderland"
          },
          {
             "id":146,
             "title":"Crouching Tiger, Hidden Dragon"
          },
          {
             "id":263341,
             "title":"Crouching Tiger, Hidden Dragon: Sword of Destiny"
          },
          {
             "id":756,
             "title":"Fantasia"
          },
          {
             "id":10882,
             "title":"Sleeping Beauty"
          },
          {
             "id":9502,
             "title":"Kung Fu Panda"
          },
          {
             "id":49444,
             "title":"Kung Fu Panda 2"
          },
          {
             "id":82702,
             "title":"How to Train Your Dragon 2"
          },
          {
             "id":10191,
             "title":"How to Train Your Dragon"
          },
          {
             "id":15854,
             "title":"Kung Fu Panda: Secrets of the Furious Five"
          },
          {
             "id":37933,
             "title":"Tales from Earthsea"
          },
          {
             "id":5470,
             "title":"Beowulf"
          }
       ],
       "certification":"PG",
       "directors":[
          {
             "id":227439,
             "name":"Don Hall"
          },
          {
             "id":1932178,
             "name":"Carlos López Estrada"
          }
       ],
       "writers":[
          {
             "id":227439,
             "name":"Don Hall"
          },
          {
             "id":1117779,
             "name":"Kiel Murray"
          },
          {
             "id":1215038,
             "name":"Adele Lim"
          },
          {
             "id":1340669,
             "name":"Paul Briggs"
          },
          {
             "id":1459476,
             "name":"Dean Wellins"
          },
          {
             "id":1822324,
             "name":"Qui Nguyen"
          },
          {
             "id":1932178,
             "name":"Carlos López Estrada"
          },
          {
             "id":1995178,
             "name":"John Ripa"
          },
          {
             "id":2375591,
             "name":"Fawn Veerasunthorn"
          }
       ],
       "cast":[
          {
             "id":1663195,
             "name":"Kelly Marie Tran"
          },
          {
             "id":1625558,
             "name":"Awkwafina"
          },
          {
             "id":2362044,
             "name":"Izaac Wang"
          }
       ],
       "trailer_yt":"9BPMTr-NS9s"
    },
    {
       "budget":50000000,
       "genres":[
          "Comedy",
          "Family",
          "Animation"
       ],
       "homepage":"https://www.tomandjerrymovie.com",
       "id":587807,
       "original_language":"English",
       "overview":"Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
       "popularity":1454.107,
       "poster_path":"/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
       "release_date":"2021-02-11",
       "revenue":66890000,
       "runtime":101,
       "tagline":"Best of enemies. Worst of friends.",
       "title":"Tom & Jerry",
       "vote_average":7.3,
       "vote_count":1157,
       "external_ids":{
          "imdb_id":"tt1361336",
          "facebook_id":"TomandJerry",
          "instagram_id":"tomandjerry",
          "twitter_id":"TomAndJerry"
       },
       "similar":[
          {
             "id":420817,
             "title":"Aladdin"
          },
          {
             "id":454626,
             "title":"Sonic the Hedgehog"
          },
          {
             "id":6477,
             "title":"Alvin and the Chipmunks"
          },
          {
             "id":329996,
             "title":"Dumbo"
          },
          {
             "id":512895,
             "title":"Lady and the Tramp"
          },
          {
             "id":55301,
             "title":"Alvin and the Chipmunks: Chipwrecked"
          },
          {
             "id":258509,
             "title":"Alvin and the Chipmunks: The Road Chip"
          },
          {
             "id":23398,
             "title":"Alvin and the Chipmunks: The Squeakquel"
          },
          {
             "id":122,
             "title":"The Lord of the Rings: The Return of the King"
          },
          {
             "id":121,
             "title":"The Lord of the Rings: The Two Towers"
          },
          {
             "id":120,
             "title":"The Lord of the Rings: The Fellowship of the Ring"
          },
          {
             "id":420814,
             "title":"Christopher Robin"
          },
          {
             "id":381719,
             "title":"Peter Rabbit"
          },
          {
             "id":420818,
             "title":"The Lion King"
          },
          {
             "id":433,
             "title":"Mary Poppins"
          },
          {
             "id":400650,
             "title":"Mary Poppins Returns"
          },
          {
             "id":278927,
             "title":"The Jungle Book"
          },
          {
             "id":150689,
             "title":"Cinderella"
          },
          {
             "id":321612,
             "title":"Beauty and the Beast"
          },
          {
             "id":15947,
             "title":"The Three Caballeros"
          }
       ],
       "certification":"PG",
       "directors":[
          {
             "id":20400,
             "name":"Tim Story"
          }
       ],
       "writers":[
          {
             "id":13594,
             "name":"Joseph Barbera"
          },
          {
             "id":13620,
             "name":"William Hanna"
          },
          {
             "id":1640647,
             "name":"Kevin Costello"
          }
       ],
       "cast":[
          {
             "id":56734,
             "name":"Chloë Grace Moretz"
          },
          {
             "id":454,
             "name":"Michael Peña"
          },
          {
             "id":1226277,
             "name":"Colin Jost"
          }
       ],
       "trailer_yt":"kP9TfCWaQT4"
    },
    {
       "budget":40000000,
       "genres":[
          "Crime",
          "Drama"
       ],
       "homepage":"https://tv.apple.com/movie/umc.cmc.40gvwq6hnbilmnxuutvmejx4r",
       "id":544401,
       "original_language":"English",
       "overview":"Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
       "popularity":1427.104,
       "poster_path":"/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
       "release_date":"2021-02-26",
       "runtime":140,
       "tagline":"Life leaves a mark.",
       "title":"Cherry",
       "vote_average":7.6,
       "vote_count":484,
       "external_ids":{
          "imdb_id":"tt9130508"
       },
       "similar":[
          {
             "id":293767,
             "title":"Billy Lynn's Long Halftime Walk"
          },
          {
             "id":627,
             "title":"Trainspotting"
          },
          {
             "id":180863,
             "title":"T2 Trainspotting"
          },
          {
             "id":592984,
             "title":"Hillbilly Elegy"
          },
          {
             "id":414425,
             "title":"Mudbound"
          },
          {
             "id":84892,
             "title":"The Perks of Being a Wallflower"
          },
          {
             "id":504599,
             "title":"Donnybrook"
          },
          {
             "id":96724,
             "title":"Anna Karenina"
          },
          {
             "id":397837,
             "title":"Before I Fall"
          },
          {
             "id":581,
             "title":"Dances with Wolves"
          },
          {
             "id":465136,
             "title":"Every Day"
          },
          {
             "id":32293,
             "title":"The Cheetah Girls"
          },
          {
             "id":157386,
             "title":"The Spectacular Now"
          },
          {
             "id":481848,
             "title":"The Call of the Wild"
          },
          {
             "id":222935,
             "title":"The Fault in Our Stars"
          },
          {
             "id":628,
             "title":"Interview with the Vampire"
          },
          {
             "id":470044,
             "title":"The Hate U Give"
          },
          {
             "id":424488,
             "title":"Megan Leavey"
          },
          {
             "id":443463,
             "title":"Leave No Trace"
          },
          {
             "id":10437,
             "title":"The Muppet Christmas Carol"
          }
       ],
       "certification":"R",
       "directors":[
          {
             "id":19271,
             "name":"Anthony Russo"
          },
          {
             "id":19272,
             "name":"Joe Russo"
          }
       ],
       "writers":[
          {
             "id":1110909,
             "name":"Jessica Goldberg"
          },
          {
             "id":1751775,
             "name":"Angela Russo-Otstot"
          },
          {
             "id":2114506,
             "name":"Nico Walker"
          }
       ],
       "cast":[
          {
             "id":1136406,
             "name":"Tom Holland"
          },
          {
             "id":144216,
             "name":"Ciara Bravo"
          },
          {
             "id":1007683,
             "name":"Jack Reynor"
          }
       ],
       "trailer_yt":"H5bH6O0bErk"
    }]

    movieMap : any = {}

  constructor() { 
    this.jsonData.forEach(o=>{
      if(!this.offerMap[o.store.name.toLowerCase()]) {
        this.offerMap[o.store.name.toLowerCase()] = []
      }
      this.offerMap[o.store.name.toLowerCase()].push(o);
    })

    this.movies.forEach(m=>{
      if(m.genres && m.genres.length > 0) {
        m.genres.forEach((g: string | number)=>{
          let gn = (g+"").toLowerCase();
          if(!this.movieMap[gn]) {
            this.movieMap[gn] = []
          }
          this.movieMap[gn].push(m)
        })
      }
            
    })
  }

  getBlog() {
    let data = "<h1 id=\"title\"> This is Blog entry</h1> <br /><p> We have many offers as listed below: </p> <br />[[sc class=\"all-offers\" id=\"e103c7dd-d919-4abd-9934-4f7b5fcb432d\"]][[/sc]] <br /> <p> among which below are from amazon</p><br /> [[sc class='custom-component' store='amazon']][[/sc]] <br /> <p>Below are few gratest action movies of all time. </p> [[sc class='filter-movies' genere='action']][[/sc]] <br /> <p>If you want to check all movies, find here </p> [[sc class='all-movies']][[/sc]]";
    return of(data)
  }

  getOffer(store : string) {
    return of(this.offerMap[store.toLowerCase()])
  }

  getOffers() {
    return of(this.jsonData)
  }

  getMovies() {
    return of(this.movies)
  }

  getMovie(genre : string) {
    return of(this.movieMap[genre.toLowerCase()]);
  }
}
