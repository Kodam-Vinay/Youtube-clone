export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const DUMMY_IMG_URL =
  "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png";
export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=vinay&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEO_PLAYER_URL =
  "crossproxy.io?/https://www.youtube.com/embed/";
export const YOUTUBE_VIDEO_DETAILS_WITH_ONE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CLOUDINARY_IMAGE_URL =
  "https://res.cloudinary.com/dwgpba5n2/image/upload/v1694021773/videoStreaming/";
export const videos = [
  {
    kind: "youtube#video",
    etag: "oeR879FKiow3l1XGohGlFFMPN_U",
    id: "WQdqgrWvy6g",
    snippet: {
      publishedAt: "2023-09-11T18:33:27Z",
      channelId: "UC7ITT3ooYWDYY_ehIUbt6eg",
      title:
        "Super11 Asia Cup 2023 | Super 4 | Pakistan vs India | Full Match Highlights",
      description:
        "Super11 Asia Cup 2023 | Super 4 | Pakistan vs India | Full Match Highlights",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WQdqgrWvy6g/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/WQdqgrWvy6g/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/WQdqgrWvy6g/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/WQdqgrWvy6g/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/WQdqgrWvy6g/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Asian Cricket Council",
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Super11 Asia Cup 2023 | Super 4 | Pakistan vs India | Full Match Highlights",
        description:
          "Super11 Asia Cup 2023 | Super 4 | Pakistan vs India | Full Match Highlights",
      },
    },
    contentDetails: {
      duration: "PT11M47S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "14621202",
      likeCount: "268731",
      favoriteCount: "0",
      commentCount: "11140",
    },
  },
  {
    kind: "youtube#video",
    etag: "oB_mxrq3C37hPapZGKRTLhRk1xc",
    id: "ASxxe18JU8c",
    snippet: {
      publishedAt: "2023-09-11T10:39:35Z",
      channelId: "UC2DDhRE75LKKPjAxC-zsGRg",
      title:
        "BiggBossTelugu-7 Day-8 Promo 2 | Nomination sparks more controversies | DisneyPlus Hotstar Telugu",
      description:
        "Tempers flared and emotions ran high as contestants became furious while giving reasons for nominating their fellow housemates. 😡🔥📋 Stay tuned for more updates #BiggBossNominations #DisneyPlusHotstar #starmaa \nOfficial Social Media - \nFB - https://www.facebook.com/disneyplushotstartelugu\nIG - https://www.instagram.com/disneyplushstel/\nTW - https://twitter.com/DisneyPlusHSTel",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ASxxe18JU8c/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ASxxe18JU8c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ASxxe18JU8c/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ASxxe18JU8c/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ASxxe18JU8c/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Disney+ HotstarTelugu",
      tags: [
        "disney+ hotstar",
        "disney plus hotstar",
        "disney plus hotstar telugu",
        "Disneyplus hotstar",
        "DisneyPlus",
        "hotstar",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "BiggBossTelugu-7 Day-8 Promo 2 | Nomination sparks more controversies | DisneyPlus Hotstar Telugu",
        description:
          "Tempers flared and emotions ran high as contestants became furious while giving reasons for nominating their fellow housemates. 😡🔥📋 Stay tuned for more updates #BiggBossNominations #DisneyPlusHotstar #starmaa \nOfficial Social Media - \nFB - https://www.facebook.com/disneyplushotstartelugu\nIG - https://www.instagram.com/disneyplushstel/\nTW - https://twitter.com/DisneyPlusHSTel",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT2M29S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: false,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1297049",
      likeCount: "30678",
      favoriteCount: "0",
      commentCount: "5401",
    },
  },
  {
    kind: "youtube#video",
    etag: "GQ30dFcJJQ78IhGiZYpaG4pWHqk",
    id: "6GYJFWKIu_s",
    snippet: {
      publishedAt: "2023-09-11T06:42:03Z",
      channelId: "UCLbdVvreihwZRL6kwuEUYsA",
      title:
        "Jigarthanda DoubleX - Teaser | Raghava Lawrence, SJ Suryah | Karthik Subbaraj | Santhosh Narayanan",
      description:
        '#JigarthandaDoubleX #RaghavaLawrence #SJsuryah #KarthikSubbaraj #StoneBenchFilms #JigarthandaDoubleXTeaser \n\nGet ready for an adrenaline-pumping experience with the much-awaited teaser of "Jigarthanda DoubleX", Starring Raghava Lawrence, SJ Suryah, Directed by Karthik Subbaraj, Music composed by Santhosh Narayanan. Produced by Kaarthekeyen Santhanam & Kathiresan. Presented by Stone Bench Films. Don\'t miss out on this thrilling journey - Watch the Jigarthanda DoubleX teaser now!\n\nMovie Credits:\n\nA  Karthik Subbaraj Padam\nA Santhosh Narayanan Musical\nDOP : S Thirunavukkarasu\nEditor : Shafique Mohamed Ali\nProduction Designer : T Santanam\nStunts : Dhilip Subbbarayan\nArt Directors : Balasubramanian, Kumar Gangappan\nChoreography : Sherif M, Baba Baskar\nSound Designer : Kunal Rajan\nCostume Designer : Praveen Raja \nMakeup : Vinoth S\nCostumer : Subier\nLyrics : Vivek, Muthamil R M S\nStills : M Dinesh\nVFX Supervisor : H Monesh\nColorist : Ranga\nPublicity Designs : Tuney John (24AM)\nTeaser Cut : Ashish\nSound Mix : Suren G\nProduction Controller : Ganesh PS\nProduction Executive : G. Duraimurugan\nProduction Coordinator : Rajkumar\nProduction Managers : N Shanmuga Sundharam, Rangaraj Perumal\nExecutive Producer : Ashok Narayanan M\nAssociate Producer : Pavan Narendra\nCo Produced by Kal Raman, S Somasegar, Kalyan Subramaniam\nCo Produced by Alankar Pandian\nDirection Team : Srinivasan, Anand Purushoth,  Karthik VP, Vigneswaran, Jagadish, Arvind Raju R, Mahes Balu, Sooraj Das, Sai, Muruganantham, Raghul M, Avinash R, Mohan Kumar R\nPRO : Nikil Murukan, Vamsi Kaka, Ebrahim Contractor\nProduced by  Kaarthekeyan Santhanam, S Kathiresan  \n\nAudio Label : Think Music\n\n© 2023 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6GYJFWKIu_s/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6GYJFWKIu_s/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6GYJFWKIu_s/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/6GYJFWKIu_s/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/6GYJFWKIu_s/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Think Music India",
      tags: [
        "jigarthanda double x",
        "raghava lawrence",
        "s j suryah",
        "jigarthanda double x teaser",
        "jigarthanda double x movie",
        "santhosh narayanan",
        "karthik subbaraj jigarthanda double x",
        "raghava lawrence jigarthanda double x",
        "jigarthanda double x tamil movie",
        "sj suryah jigarthanda double x",
        "jigarthdanda 2",
        "jigarthanda double x movie tamil",
        "karthik subburaj",
        "karthik subburaj jigarthanda 2",
        "sj suryah jigarthanda 2",
        "raghava lawrence jigarthanda 2",
        "jigarthanda 2 tamil movie teaser",
        "tamil movies 2023",
      ],
      categoryId: "1",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "Jigarthanda DoubleX - Teaser | Raghava Lawrence, SJ Suryah | Karthik Subbaraj | Santhosh Narayanan",
        description:
          '#JigarthandaDoubleX #RaghavaLawrence #SJsuryah #KarthikSubbaraj #StoneBenchFilms #JigarthandaDoubleXTeaser \n\nGet ready for an adrenaline-pumping experience with the much-awaited teaser of "Jigarthanda DoubleX", Starring Raghava Lawrence, SJ Suryah, Directed by Karthik Subbaraj, Music composed by Santhosh Narayanan. Produced by Kaarthekeyen Santhanam & Kathiresan. Presented by Stone Bench Films. Don\'t miss out on this thrilling journey - Watch the Jigarthanda DoubleX teaser now!\n\nMovie Credits:\n\nA  Karthik Subbaraj Padam\nA Santhosh Narayanan Musical\nDOP : S Thirunavukkarasu\nEditor : Shafique Mohamed Ali\nProduction Designer : T Santanam\nStunts : Dhilip Subbbarayan\nArt Directors : Balasubramanian, Kumar Gangappan\nChoreography : Sherif M, Baba Baskar\nSound Designer : Kunal Rajan\nCostume Designer : Praveen Raja \nMakeup : Vinoth S\nCostumer : Subier\nLyrics : Vivek, Muthamil R M S\nStills : M Dinesh\nVFX Supervisor : H Monesh\nColorist : Ranga\nPublicity Designs : Tuney John (24AM)\nTeaser Cut : Ashish\nSound Mix : Suren G\nProduction Controller : Ganesh PS\nProduction Executive : G. Duraimurugan\nProduction Coordinator : Rajkumar\nProduction Managers : N Shanmuga Sundharam, Rangaraj Perumal\nExecutive Producer : Ashok Narayanan M\nAssociate Producer : Pavan Narendra\nCo Produced by Kal Raman, S Somasegar, Kalyan Subramaniam\nCo Produced by Alankar Pandian\nDirection Team : Srinivasan, Anand Purushoth,  Karthik VP, Vigneswaran, Jagadish, Arvind Raju R, Mahes Balu, Sooraj Das, Sai, Muruganantham, Raghul M, Avinash R, Mohan Kumar R\nPRO : Nikil Murukan, Vamsi Kaka, Ebrahim Contractor\nProduced by  Kaarthekeyan Santhanam, S Kathiresan  \n\nAudio Label : Think Music\n\n© 2023 SPI Music Pvt. Ltd.\n\nFor All Latest Updates:\nWebsite: https://thinkmusic.in/\nSubscribe to us on: http://www.youtube.com/thinkmusicindia\nFollow us on: https://twitter.com/thinkmusicindia\nLike us on: https://www.facebook.com/Thinkmusicofficial\nFollow us on: https://www.instagram.com/thinkmusicofficial',
      },
      defaultAudioLanguage: "ta",
    },
    contentDetails: {
      duration: "PT2M36S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "23370760",
      likeCount: "171663",
      favoriteCount: "0",
      commentCount: "2642",
    },
  },
  {
    kind: "youtube#video",
    etag: "-hthbjzOZreu2yvMoorvsFQ1IoE",
    id: "-teThZdwfVo",
    snippet: {
      publishedAt: "2023-09-11T15:00:25Z",
      channelId: "UC4JCksJF76g_MdzPVBJoC3Q",
      title:
        "Mayi Ri | Episode 41 (English Subtitles) 11 September 2023 | ARY Digital Drama",
      description:
        "New! Mayi Ri Episode 41 | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 11th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-teThZdwfVo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/-teThZdwfVo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/-teThZdwfVo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/-teThZdwfVo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/-teThZdwfVo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "ARY Digital HD",
      tags: [
        "Mayi Ri drama",
        "Mayi Ri episode 41",
        "Mayi Ri episode 41 11 Sep 2023",
        "pakistani drama Mayi ri",
        "Aina Asif New Drama Mayi Ri",
        "Mayi Ri ARY Digital drama 2023",
        "Mayi Ri New Drama 2023",
        "Aina Asif",
        "Naumaan Ijaz",
        "Maya Khan",
        "Mayi Ri New Drama ep 41 ARY Digital",
        "Mayi Ri Pakistani Drama 2023",
        "Mayi Ri Episode 41 watch",
        "Mayi Ri Drama Aina Asif",
        "new drama mayi ri",
        "Aina Asif Mayi Ri",
        "ARY Digital",
        "ARY",
        "Watch Mayi Ri Drama",
        "Watch Mayi Ri Daily",
        "Mayi Ri New episode 11th September 2023",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "Mayi Ri | Episode 41 (English Subtitles) 11 September 2023 | ARY Digital Drama",
        description:
          "New! Mayi Ri Episode 41 | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 11th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT40M47S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "6201301",
      likeCount: "143802",
      favoriteCount: "0",
      commentCount: "8072",
    },
  },
  {
    kind: "youtube#video",
    etag: "-GX0lcnBaCySl96xr1VQwSse-KA",
    id: "0Glrg3ctz1Q",
    snippet: {
      publishedAt: "2023-09-11T18:01:20Z",
      channelId: "UCeWqACGRU5gT0BXeFhrixWA",
      title:
        "Well Done Team India!! | One Match Can’t Decide Everything | #PAKvIND | Shoaib Akhtar | SP1T",
      description:
        "Well Done Team India!! | One Match Can’t Decide Everything | #PAKvIND | Shoaib Akhtar | SP1T\n\n#AsiaCup2023 | #ShoaibAkhtar\n\nWelcome to the Official Channel of Shoaib Akhtar aka the Rawalpindi Express - the world’s faster bowler and now at the centre of one of the fastest growing YouTube channels. \n\nThe channel offers a rare insight into the life of Shoaib Akhtar as he shares his expert opinion, interacts with his fans and talks to some of the current and past sports celebrities.\n\nShoaib Akhtar’s YouTube channel is managed by Dot Republic Media. All Copyrights Reserved.\n\nSubscribe to get all the latest updates from the Rawalpindi Express:\nhttps://bit.ly/SubscribeNowShoaibAkhtar",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0Glrg3ctz1Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0Glrg3ctz1Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0Glrg3ctz1Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/0Glrg3ctz1Q/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/0Glrg3ctz1Q/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Shoaib Akhtar",
      tags: [
        "shoaib akhtar",
        "cricket",
        "PSL",
        "pakistan super league",
        "sports",
        "pakistan",
        "lifestyle",
        "world cup 2023",
        "Pakistan vs India Asia Cup",
        "Pakistan vs India Asia Cup 2023",
        "Pakistan vs India 2023",
        "Pakistan vs India Shoaib Akhtar",
        "Shoaib Akhtar Review Asia Cup 2023",
        "Shoaib Akhtar Review Pakistan vs India",
        "Pakistan vs India Live",
        "Pakistan vs India Match",
        "Pakistan vs India Live Match",
        "Pakistan vs India",
        "Asia Cup 2023",
        "Well Done Team India",
        "Pakistan Pace Attack",
        "One Match Can't Decide Everything",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Well Done Team India!! | One Match Can’t Decide Everything | #PAKvIND | Shoaib Akhtar | SP1T",
        description:
          "Well Done Team India!! | One Match Can’t Decide Everything | #PAKvIND | Shoaib Akhtar | SP1T\n\n#AsiaCup2023 | #ShoaibAkhtar\n\nWelcome to the Official Channel of Shoaib Akhtar aka the Rawalpindi Express - the world’s faster bowler and now at the centre of one of the fastest growing YouTube channels. \n\nThe channel offers a rare insight into the life of Shoaib Akhtar as he shares his expert opinion, interacts with his fans and talks to some of the current and past sports celebrities.\n\nShoaib Akhtar’s YouTube channel is managed by Dot Republic Media. All Copyrights Reserved.\n\nSubscribe to get all the latest updates from the Rawalpindi Express:\nhttps://bit.ly/SubscribeNowShoaibAkhtar",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT6M8S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1320159",
      likeCount: "63833",
      favoriteCount: "0",
      commentCount: "10494",
    },
  },
  {
    kind: "youtube#video",
    etag: "1UK8_bJ6U0XS8nKIdN85hKoT7d4",
    id: "L0L3GGgRMn0",
    snippet: {
      publishedAt: "2023-09-09T08:37:08Z",
      channelId: "UCcXQd6kHKm0b41x8zMVMmMg",
      title:
        "Welcome To The Jungle (Welcome 3) - Official Announcement | Releasing Christmas - 20th December 2024",
      description:
        "Jio Studios Presents \nIn association with A.A. Nadiadwala \nFiroz A. Nadiadwallah's  \nWELCOME TO THE JUNGLE\nProduced by: Jyoti Deshpande \nProduced by : Firoz A. Nadiadwallah\nDirected by: Ahmed Khan\nWritten by: Farhad Samji \nCast: Akshay Kumar, Sanjay Dutt, Suniel Shetty, Arshad Warsi, Paresh Rawal, Johnny Lever, Rajpal Yadav, Tusshar Kapoor, Shreyas Talpade, Krushna Abhishek, Kiku Sharda, Daler Mehndi, Mika Singh, Rahul Dev, Mukesh Tiwari, Sharib Hashmi, Inaamulhaq, Zakir Hussain, Yashpal Sharma, Raveena Tandon, Lara Dutta, Jacqueline Fernandez, Disha Patani & Vrihi Kodvara\nDOP: Kabir Lal \nPublicity Design: Rahul Nanda \nMusic: Meet Bros \nA Capella Editor: Nitin FCP\n\nStay Connected With Us:\n👉Like us on Facebook : https://www.facebook.com/officialjiostudios/\n👉Follow us on Twitter : https://twitter.com/jiostudios\n👉Follow us on Instagram : https://www.instagram.com/officialjiostudios/\n\n#AkshayKumar #Welcome3 #WelcomeToTheJungle #SanjayDutt #SunielShetty #ArshadWarsi #PareshRawal #JohnyLever #RajpalYadav #TussharKapoor #ShreyasTalpade  #KrushnaAbhishek #KikuSharda #DalerMehndi #MikaSingh #RahulDev #MukeshTiwari #SharibHashmi #Inaamulhaq #ZakirHussain, #YashpalSharma #RaveenaTandon #LaraDutta #JacquelineFernandez #DishaPatani & #VrihiKodvara",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/L0L3GGgRMn0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/L0L3GGgRMn0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/L0L3GGgRMn0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/L0L3GGgRMn0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/L0L3GGgRMn0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "JioStudios",
      tags: [
        "Jio Studios",
        "Jio Cinema",
        "Jio Saavn",
        "Jio TV",
        "Welcome Back 3",
        "Welcome Back",
        "Welcome",
        "Welcome To The Jungle",
        "Akshay Kumar",
        "Sanjay Dutt",
        "Suniel Shetty",
        "Disha Patani",
        "Jacqueline Fernandez",
        "Raveen Tandon",
        "Firoz A. Nadiadwallah",
        "Ahmed Khan",
        "Jyoti Deshpande",
        "Welcome Back 3 Teaser",
        "Welcome To The Jungel",
        "Meet Bros",
        "Lara Dutta",
        "Arshad Warsi",
        "Welcome To The Jungle Teaser",
        "Welcome Back 3 2023",
        "Johnny Lever",
        "Welcome 3",
        "Welcome To The Jungle Hindi Movie",
        "Welcome 3 Teaser",
      ],
      categoryId: "1",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "Welcome To The Jungle (Welcome 3) - Official Announcement | Releasing Christmas - 20th December 2024",
        description:
          "Jio Studios Presents \nIn association with A.A. Nadiadwala \nFiroz A. Nadiadwallah's  \nWELCOME TO THE JUNGLE\nProduced by: Jyoti Deshpande \nProduced by : Firoz A. Nadiadwallah\nDirected by: Ahmed Khan\nWritten by: Farhad Samji \nCast: Akshay Kumar, Sanjay Dutt, Suniel Shetty, Arshad Warsi, Paresh Rawal, Johnny Lever, Rajpal Yadav, Tusshar Kapoor, Shreyas Talpade, Krushna Abhishek, Kiku Sharda, Daler Mehndi, Mika Singh, Rahul Dev, Mukesh Tiwari, Sharib Hashmi, Inaamulhaq, Zakir Hussain, Yashpal Sharma, Raveena Tandon, Lara Dutta, Jacqueline Fernandez, Disha Patani & Vrihi Kodvara\nDOP: Kabir Lal \nPublicity Design: Rahul Nanda \nMusic: Meet Bros \nA Capella Editor: Nitin FCP\n\nStay Connected With Us:\n👉Like us on Facebook : https://www.facebook.com/officialjiostudios/\n👉Follow us on Twitter : https://twitter.com/jiostudios\n👉Follow us on Instagram : https://www.instagram.com/officialjiostudios/\n\n#AkshayKumar #Welcome3 #WelcomeToTheJungle #SanjayDutt #SunielShetty #ArshadWarsi #PareshRawal #JohnyLever #RajpalYadav #TussharKapoor #ShreyasTalpade  #KrushnaAbhishek #KikuSharda #DalerMehndi #MikaSingh #RahulDev #MukeshTiwari #SharibHashmi #Inaamulhaq #ZakirHussain, #YashpalSharma #RaveenaTandon #LaraDutta #JacquelineFernandez #DishaPatani & #VrihiKodvara",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT3M22S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "27279369",
      likeCount: "283920",
      favoriteCount: "0",
      commentCount: "68320",
    },
  },
  {
    kind: "youtube#video",
    etag: "Ts0gdzUgShh_wbkxh68iosYeg3Q",
    id: "K4mrkQv8Tb8",
    snippet: {
      publishedAt: "2023-09-09T12:30:17Z",
      channelId: "UCfLuT3JwLx8rvHjHfTymekw",
      title: "Fukra Insaan Became My Personal Assistant for 24 Hours",
      description:
        "Abhishek Became my Assistant for 24 Hours as promised.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K4mrkQv8Tb8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/K4mrkQv8Tb8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/K4mrkQv8Tb8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/K4mrkQv8Tb8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/K4mrkQv8Tb8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Triggered Insaan",
      tags: [
        "triggered insaan",
        "live insaan",
        "vlog",
        "fukra insaan",
        "24 hour",
        "challenge",
        "brother sister",
        "personal assistant",
        "funny",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      defaultLanguage: "en-IN",
      localized: {
        title: "Fukra Insaan Became My Personal Assistant for 24 Hours",
        description:
          "Abhishek Became my Assistant for 24 Hours as promised.\n\nInstagram ► https://www.instagram.com/triggeredinsaan\n\nFacebook ► https://www.facebook.com/realtriggeredinsaan\n\nGaming Channel ► https://www.youtube.com/liveinsaan\n\nDiscord ► https://discord.gg/liveinsaan\n\nTwitter ► https://twitter.com/triggeredinsaan\n\nAbout Me ► My name is Nischay Malhan. I'm from Delhi and I'm an engineering student. Now I am pursuing youtube Full Time. I make family friendly clean comedy videos on this channel for everyone to enjoy with their family. You don't need earphones to watch my videos😂\n\nThanks For Reading😘",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT14M26S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "7741816",
      likeCount: "762273",
      favoriteCount: "0",
      commentCount: "25733",
    },
  },
  {
    kind: "youtube#video",
    etag: "2-uTP_VTNYuf3EeZ8udjnvLbT_I",
    id: "EBY2fqQEoEM",
    snippet: {
      publishedAt: "2023-09-11T10:45:10Z",
      channelId: "UCNoiWmvkDUL0q-6ECxNFH0Q",
      title: "BGIS 11 SOLO KILL | JONATHAN IS BACK | BGMI!",
      description:
        "If you liked the Video don’t forget to Like, Share and Subscribe.\n\nHey Guys, \nWelcome to my Youtube Channel,\nI'm Jonathan Amaral, you might know me as Jonathan Gaming.\nI started my professional Esports Career competing in Pubg Mobile Championships (Now BGMI),\nSince the start of my career, I have been consistent with my gameplay and always been working hard to achieve my goals via winning Domestic/Global Championships. \n\"The only player you should try to be better than is the player you were yesterday.\"\nI Stream BGMI regularly, I also enjoy playing Valorant and other fun games once in a while!\nI upload videos regarding Tutorials for BGMI, Funny Highlights, Intense Fights, Crate Openings, Vlogs, etc.\n\n------------------------------------------------------------\n• About •\n→ Name – Jonathan  Amaral\n→ Age - 21\n→ Profession – Content Creator, Streamer and eSports Athlete\n\n------------------------------------------------------------\n• Social Media Handles •\n→ Instagram - https://www.instagram.com/ig_jonathangaming\n→ Discord - https://discord.gg/jonathan\n→ Youtube - https://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q\n→ Twitter - https://twitter.com/tsment_jonathan​\n\n------------------------------------------------------------\n• Don't forget to follow me on my Social Media Handles and join my Discord server to interact with me. •\n------------------------------------------------------------\nThank you for watching the video!\nLike the video. \nSubscribe the channel for more content.\nTake Care :heart:\nJONATHAN GAMING\n\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved.\nNote :  If you use a copyrighted work without the appropriate permission, you may be violating—or “infringing”—the owner’s rights to that work. Infringing someone else’s copyright may subject you to legal action.\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved. •\n\n#JONATHANLIVE​ #JONATHANBGMI​ #JONATHANGAMING​",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EBY2fqQEoEM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/EBY2fqQEoEM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/EBY2fqQEoEM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/EBY2fqQEoEM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/EBY2fqQEoEM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "JONATHAN GAMING",
      tags: [
        "jonathan",
        "jonathan gaming",
        "esports",
        "BGMI",
        "BattleGroundsMobileIndia",
        "classics",
        "randoms",
        "customs",
        "jonathan vs ghatak",
        "jonathan vs neyo",
        "jonathan vs zgod",
        "contolcode",
        "jonathan gaming sensitivity",
        "TAPATAP",
        "HACKERORWHAT",
        "jonathanhandcam",
        "jonathantdm",
        "TDMGAMEPLAY",
        "best crate opening",
        "huge crate opening",
        "biggest crate opening ever",
        "crate opening",
        "jonathan doodhwala",
      ],
      categoryId: "20",
      liveBroadcastContent: "none",
      localized: {
        title: "BGIS 11 SOLO KILL | JONATHAN IS BACK | BGMI!",
        description:
          "If you liked the Video don’t forget to Like, Share and Subscribe.\n\nHey Guys, \nWelcome to my Youtube Channel,\nI'm Jonathan Amaral, you might know me as Jonathan Gaming.\nI started my professional Esports Career competing in Pubg Mobile Championships (Now BGMI),\nSince the start of my career, I have been consistent with my gameplay and always been working hard to achieve my goals via winning Domestic/Global Championships. \n\"The only player you should try to be better than is the player you were yesterday.\"\nI Stream BGMI regularly, I also enjoy playing Valorant and other fun games once in a while!\nI upload videos regarding Tutorials for BGMI, Funny Highlights, Intense Fights, Crate Openings, Vlogs, etc.\n\n------------------------------------------------------------\n• About •\n→ Name – Jonathan  Amaral\n→ Age - 21\n→ Profession – Content Creator, Streamer and eSports Athlete\n\n------------------------------------------------------------\n• Social Media Handles •\n→ Instagram - https://www.instagram.com/ig_jonathangaming\n→ Discord - https://discord.gg/jonathan\n→ Youtube - https://www.youtube.com/channel/UCNoiWmvkDUL0q-6ECxNFH0Q\n→ Twitter - https://twitter.com/tsment_jonathan​\n\n------------------------------------------------------------\n• Don't forget to follow me on my Social Media Handles and join my Discord server to interact with me. •\n------------------------------------------------------------\nThank you for watching the video!\nLike the video. \nSubscribe the channel for more content.\nTake Care :heart:\nJONATHAN GAMING\n\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved.\nNote :  If you use a copyrighted work without the appropriate permission, you may be violating—or “infringing”—the owner’s rights to that work. Infringing someone else’s copyright may subject you to legal action.\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved. •\n\n#JONATHANLIVE​ #JONATHANBGMI​ #JONATHANGAMING​",
      },
    },
    contentDetails: {
      duration: "PT10M40S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "745204",
      likeCount: "134939",
      favoriteCount: "0",
      commentCount: "2664",
    },
  },
  {
    kind: "youtube#video",
    etag: "xKiecSyLJFpu9zTNwuCXdB6Xkwc",
    id: "tiGQBKT5dpU",
    snippet: {
      publishedAt: "2023-09-10T13:04:03Z",
      channelId: "UCfIpZ2GsJc8nf94udbaSOpg",
      title:
        "Super Car Se Apne New Tractor Ki Delivery Leli🔥 | First Time in India !",
      description:
        "Hello guys, welcome to our new vlog. Humne apne new Mahindra Tractor ki delivery leli. Thanks for watching.\n\nOur Main Channel- https://www.youtube.com/c/CrazyXYZ\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcK...\nOur Shorts Channel- https://www.youtube.com/channel/UC7bZ...\nFollow Me on Instagram- https://www.instagram.com/amit.yt/\nFollow Us On Facebook- https://www.facebook.com/CrazyXYZfb/",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tiGQBKT5dpU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/tiGQBKT5dpU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/tiGQBKT5dpU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/tiGQBKT5dpU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/tiGQBKT5dpU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Amit XYZ",
      tags: [
        "crazy xyz vlogs",
        "daily vlogs",
        "hindi vlogs",
        "amit xyz",
        "amit xyz vlog",
        "crazy xyz vlog channel",
        "crazy xyz second channel",
        "amit sharma vlog channel",
        "daily",
        "vlogs",
        "in hindi",
        "best vlog channel in india",
        "crazy xyz",
        "the indian unboxer tiu",
        "new tractor",
        "crazy xyz new tractor",
        "tractor delivery",
        "tractor delivery in supercar",
        "super car takes delivery of tractor",
        "tractor ki delivery leli",
        "mahindra 475",
        "new mahindra 475 tractor",
        "tractor",
        "delivery",
        "in super car",
        "boster",
        "crazy xyz boxster",
      ],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Super Car Se Apne New Tractor Ki Delivery Leli🔥 | First Time in India !",
        description:
          "Hello guys, welcome to our new vlog. Humne apne new Mahindra Tractor ki delivery leli. Thanks for watching.\n\nOur Main Channel- https://www.youtube.com/c/CrazyXYZ\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcK...\nOur Shorts Channel- https://www.youtube.com/channel/UC7bZ...\nFollow Me on Instagram- https://www.instagram.com/amit.yt/\nFollow Us On Facebook- https://www.facebook.com/CrazyXYZfb/",
      },
    },
    contentDetails: {
      duration: "PT10M29S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1297713",
      likeCount: "94443",
      favoriteCount: "0",
      commentCount: "3610",
    },
  },
  {
    kind: "youtube#video",
    etag: "CpzcIS9lgDCIcQd_vN1xdMkdCOw",
    id: "gLGcgEImtGo",
    snippet: {
      publishedAt: "2023-09-09T14:08:56Z",
      channelId: "UCtgGOdTlM-NdJ9rPKIYN8UQ",
      title: "How Foreigners Show India",
      description:
        "What Foreign vloggers show when they come to India. Instead of Taj Mahal they go to thekas and panwadis to have REAL INDIAN FOOD.\n\nWhat foreigners think of India\n\nFollow us on Instagram -\nGautami - https://www.instagram.com/gautamikawale/\nAbhyudaya - https://www.instagram.com/abhyudaya_mohan/\n\nInstagram - https://www.instagram.com/slayypoint/\nFacebook - https://www.facebook.com/SlayyPoint\nTwitter - https://twitter.com/slayypoint\n\nSubtitles by Nitika (available within 1-2 days of upload)\n\nE-mail for BUSINESS ENQUIRES ONLY- slayypointofficial@gmail.com\n\nPlease don’t visit the pages/videos of any of these people to spread negativity nor to spam comments on their work, we all are just having some light-hearted fun that stays & ends here, no hate intended, ever!\nEnjoy :)\n\nWatch our videos - \n\nWild Instagram Reelers In Metro\nhttps://www.youtube.com/watch?v=7FbO_hBQ7Y8&t=3s&pp=ygULc2xheXkgcG9pbnQ%3D\n\nThey SLAP Anyone They See | Worst Shorts\nhttps://www.youtube.com/watch?v=5ctvDMRse9g&t=215s&pp=ygULc2xheXkgcG9pbnQ%3D\n\nLegends of Social Media You Didn't Know About | Indian Joker\nhttps://www.youtube.com/watch?v=2DUcDmk257Q&pp=ygULc2xheXkgcG9pbnQ%3D",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/gLGcgEImtGo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/gLGcgEImtGo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/gLGcgEImtGo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/gLGcgEImtGo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/gLGcgEImtGo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Slayy Point",
      tags: [
        "slayy point",
        "slayypop",
        "abhyudaya",
        "gautami",
        "foreigners in india",
        "foreigners try indian food",
      ],
      categoryId: "23",
      liveBroadcastContent: "none",
      localized: {
        title: "How Foreigners Show India",
        description:
          "What Foreign vloggers show when they come to India. Instead of Taj Mahal they go to thekas and panwadis to have REAL INDIAN FOOD.\n\nWhat foreigners think of India\n\nFollow us on Instagram -\nGautami - https://www.instagram.com/gautamikawale/\nAbhyudaya - https://www.instagram.com/abhyudaya_mohan/\n\nInstagram - https://www.instagram.com/slayypoint/\nFacebook - https://www.facebook.com/SlayyPoint\nTwitter - https://twitter.com/slayypoint\n\nSubtitles by Nitika (available within 1-2 days of upload)\n\nE-mail for BUSINESS ENQUIRES ONLY- slayypointofficial@gmail.com\n\nPlease don’t visit the pages/videos of any of these people to spread negativity nor to spam comments on their work, we all are just having some light-hearted fun that stays & ends here, no hate intended, ever!\nEnjoy :)\n\nWatch our videos - \n\nWild Instagram Reelers In Metro\nhttps://www.youtube.com/watch?v=7FbO_hBQ7Y8&t=3s&pp=ygULc2xheXkgcG9pbnQ%3D\n\nThey SLAP Anyone They See | Worst Shorts\nhttps://www.youtube.com/watch?v=5ctvDMRse9g&t=215s&pp=ygULc2xheXkgcG9pbnQ%3D\n\nLegends of Social Media You Didn't Know About | Indian Joker\nhttps://www.youtube.com/watch?v=2DUcDmk257Q&pp=ygULc2xheXkgcG9pbnQ%3D",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT13M36S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "3521988",
      likeCount: "292630",
      favoriteCount: "0",
      commentCount: "8115",
    },
  },
  {
    kind: "youtube#video",
    etag: "R41gg91LN65VffXbWrJMYiKMTXg",
    id: "BIwbMSTWVZk",
    snippet: {
      publishedAt: "2023-09-11T13:51:01Z",
      channelId: "UC96MCpGZsAyv1lmJI4BM5Vg",
      title:
        "Dhyan Sreenivasan and Aswanth Kok Exclusive Interview | Face To Face | Silly Monks Mollywood",
      description:
        "Dhyan Sreenivasan and Aswanth Kok Exclusive Interview | Face To Face | Silly Monks Mollywood\n\n#dhyansreenivasan #aswanthkok #SillymonksMollywood #NadikalilSundariYamuna #Sreenivasan #Interview #facetoface  #vineethsreenivasan #jailermovie  #mammookka #lalettan #akhilmarar  #trolls  #malayalamtrolls#malayalamactor #ffc #malayalamtroll #trollmalayalam  #ffc \n\n\n🔔 Get alerts when we release any new video. TURN ON THE BELL ICON on the channel! 🔔\n\nVisit our website: https://sillymonks.com/\n\nSubscribe -  http://bit.ly/SillymonksMalayalamSubscribe ! & Press The Bell Icon to Get Notification !! Thank you for your Love & support.\n\nHere are the Links to Our Other Social Media Platforms\n\n♦ Facebook      : http://bit.ly/SillymonksMalayalam\n♦ Instagram     : http://bit.ly/sillymonksMalayalam\n\nFor Kerala Related Contents Follow Our Sillymonks Malayalam Channel\n\nhttp://bit.ly/SillyMonksMalayalamChannel\n\nFor Our Craft Videos Subscribe\n\nhttp://bit.ly/SillyCreations\n\nFor Movie Updates , Exclusive Interviews and Entertainment Subscribe\n\nhttp://bit.ly/PopperStopMalayalam\n\nFor Our Originals..Subscribe\n\nhttp://bit.ly/CircusGunMalayalam\n\n\n© 2020 SillyMonks Malayalam\n\n* ANTI-PIRACY WARNING *\nThis content is Copyrighted to SillyMonks Malayalam. Any unauthorized reproduction, redistribution or re-upload is strictly prohibited of this material. Legal action will be taken against those who violate the copyright of the following material presented.\n\nInstall SillyMonks Android App - https://play.google.com/store/apps/details?id=com.ongo.silly_monks\n\nSubscribe for more Latest Malayalam Trailers,Events,Gossips\nhttp://www.youtube.com/user/Sillymonksmalayalam?sub_confirmation=1\n\nPowered by https://sillymonks.com/",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/BIwbMSTWVZk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/BIwbMSTWVZk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/BIwbMSTWVZk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/BIwbMSTWVZk/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/BIwbMSTWVZk/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Silly Monks Mollywood",
      tags: [
        "aswanth kok",
        "aswanth kok interview",
        "aswanth kok review",
        "aswanth kok issue",
        "aswanth kok troll",
        "aswanth kok ffc",
        "aswanth kok funny",
        "aswanth kok fans",
        "aswanth kok troll malayalam",
        "aswanth kok interview latest",
        "aswanth kok exclusive interview",
        "aswanth kok b unnikrishnan",
        "dhyan sreenivasan interview",
        "Dhyan Sreenivasan vs Aswanth Kok",
        "Dhyan vs Kok",
        "Kok vs Dhyan",
        "dhyan sreenivasan latest interview",
        "dhyan sreenivasan thug life",
        "Dhyan Sreenivasan Aswanth Kok Interview",
        "Sm Mollywood",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Dhyan Sreenivasan and Aswanth Kok Exclusive Interview | Face To Face | Silly Monks Mollywood",
        description:
          "Dhyan Sreenivasan and Aswanth Kok Exclusive Interview | Face To Face | Silly Monks Mollywood\n\n#dhyansreenivasan #aswanthkok #SillymonksMollywood #NadikalilSundariYamuna #Sreenivasan #Interview #facetoface  #vineethsreenivasan #jailermovie  #mammookka #lalettan #akhilmarar  #trolls  #malayalamtrolls#malayalamactor #ffc #malayalamtroll #trollmalayalam  #ffc \n\n\n🔔 Get alerts when we release any new video. TURN ON THE BELL ICON on the channel! 🔔\n\nVisit our website: https://sillymonks.com/\n\nSubscribe -  http://bit.ly/SillymonksMalayalamSubscribe ! & Press The Bell Icon to Get Notification !! Thank you for your Love & support.\n\nHere are the Links to Our Other Social Media Platforms\n\n♦ Facebook      : http://bit.ly/SillymonksMalayalam\n♦ Instagram     : http://bit.ly/sillymonksMalayalam\n\nFor Kerala Related Contents Follow Our Sillymonks Malayalam Channel\n\nhttp://bit.ly/SillyMonksMalayalamChannel\n\nFor Our Craft Videos Subscribe\n\nhttp://bit.ly/SillyCreations\n\nFor Movie Updates , Exclusive Interviews and Entertainment Subscribe\n\nhttp://bit.ly/PopperStopMalayalam\n\nFor Our Originals..Subscribe\n\nhttp://bit.ly/CircusGunMalayalam\n\n\n© 2020 SillyMonks Malayalam\n\n* ANTI-PIRACY WARNING *\nThis content is Copyrighted to SillyMonks Malayalam. Any unauthorized reproduction, redistribution or re-upload is strictly prohibited of this material. Legal action will be taken against those who violate the copyright of the following material presented.\n\nInstall SillyMonks Android App - https://play.google.com/store/apps/details?id=com.ongo.silly_monks\n\nSubscribe for more Latest Malayalam Trailers,Events,Gossips\nhttp://www.youtube.com/user/Sillymonksmalayalam?sub_confirmation=1\n\nPowered by https://sillymonks.com/",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT39M32S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "344669",
      likeCount: "13423",
      favoriteCount: "0",
      commentCount: "1208",
    },
  },
  {
    kind: "youtube#video",
    etag: "BSio7ouOZFqIdomocYvOHn_zbUc",
    id: "ijArL4doAoU",
    snippet: {
      publishedAt: "2023-09-10T17:01:00Z",
      channelId: "UC3pFVvw_HwykroUwLRdfRkg",
      title:
        "Bigg Boss Buzzz- Kiran Rathore Opens Up About Her Elimination Reason | Daily 10 AM and 6 PM",
      description:
        'Kiran Rathore Opens Up About Her Drawbacks and Elimination from the Bigg Boss House. Kiran Rathore Gets Candid: "Facing a Lack of Support in the Bigg Boss House!\n#BiggBossBuzzz! 📺🤐  #BiggBosstelugu7 #StarMaaMusic',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ijArL4doAoU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/ijArL4doAoU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/ijArL4doAoU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/ijArL4doAoU/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/ijArL4doAoU/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Star Maa Music",
      tags: [
        "twitter",
        "twitter ceo",
        "tesla ceo",
        "elon musk",
        "bitcoin",
        "ethereum",
        "tesla",
        "btc",
        "eth",
        "bitcoin news",
        "ethereum news",
        "twitter elon musk",
        "cryptocurrency",
        "elon musk bitcoin",
        "tesla bitcoin",
        "ethereum price prediction 2022",
        "bitcoin price prediction 2022",
        "investing",
        "business",
        "business news",
        "bitcoin ta",
        "bitcoin news today",
        "ethereum news today",
        "ethereum today",
        "bitcoin today",
        "btc news",
        "btc price",
        "investment",
        "ethereum 2.0",
        "crash crypto",
        "crypto crash",
        "ftx crash",
        "ftx",
        "ftt",
      ],
      categoryId: "2",
      liveBroadcastContent: "none",
      defaultLanguage: "en-US",
      localized: {
        title:
          "Bigg Boss Buzzz- Kiran Rathore Opens Up About Her Elimination Reason | Daily 10 AM and 6 PM",
        description:
          'Kiran Rathore Opens Up About Her Drawbacks and Elimination from the Bigg Boss House. Kiran Rathore Gets Candid: "Facing a Lack of Support in the Bigg Boss House!\n#BiggBossBuzzz! 📺🤐  #BiggBosstelugu7 #StarMaaMusic',
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT1M31S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1193615",
      likeCount: "16895",
      favoriteCount: "0",
      commentCount: "625",
    },
  },
  {
    kind: "youtube#video",
    etag: "WB4pptGpWIwhMgFTwdaGwzQBDKE",
    id: "B5aEaY_BNbY",
    snippet: {
      publishedAt: "2023-09-08T05:30:16Z",
      channelId: "UCSM54qcBP60U61HOMm_SUqA",
      title:
        "Judaiyaan - Abhishek Malhan | Jiya Shankar | Tanveer Evan | Rajat Nagpal  Gurinder Bawa| Anshul Garg",
      description:
        "Anshul Garg presents Judaiyaan featuring Abhishek Malhan & Jiya Shankar\n\nStreaming on all platforms \n\nSpotify : https://bit.ly/462hcKB\nJiosaavn : https://bit.ly/3r9yqH6\nWynk : https://wynk.in/u/UkhzXBWVS\nApple Music : https://bit.ly/480yauV\n\nAudio credits\nSong : Judaiyaan\nSinger and Lyricist : Tanveer Evan\nMusic : Rajat Nagpal \nMusic programmed, composed and Produced By Rajat Nagpal \nGuitars : Rhythm Shaw\nDrums : Gino Banks \nRecorded @ Studio 504 by Rahul Sharma assist by Sameer & Rohit \nMixed by Rajat Nagpal \nMastered by Gethin John @ Hafood Mastering , Wales UK\n\nVideo credits\nFeaturing Abhishek Malhan & Jiya Shankar\nVideo Director - Gurinder Bawa\nDop - Shinda Singh\nEditor - Sahil Mehra \nDI - Onkar Singh\nChief AD - Narinder Singh\nAssistant Director - Sachin Thakur, Sachin Kanojia, Jatin Arora\nCostumes - Akshita & Anulika\nProduction - Rs films\nChoregrapher- John\nProduction Asist - Jadu,Rohit,Honey,Gogi,Aamir\nArt - Karma\nMakeup - Rajan Passi\nHair - Salman\nPhotography - Akki\n\n@FukraInsaan @fukrainsaanlive4744 @Jiyashankar417 \n\nPlayDMF Team\nFounder & CEO : Anshul Garg\nPlayDMF Project Head - Raghav Sharma \nLabel Manager : Gaurav Bharti\nPlayDMF Team - Gaurav Arora, Asheema Chauhan & Sankalp Garg\n\nSpecial Thanks : Ingrooves Team \n\nhttps://www.ingrooves.com/\n\nIngrooves Team \nHead : Amit Sharma \nTeam : Nagesh Jadhav, Kajal Israni, Amol Suryavanshi, Lavanya Das, Nishtha Sikroria\n\nTravel and hospitality partner : PRM Hospitality\n\nLyrics\nJaise hum, milte the, pehle kabhi\nTere baajo, guzri hai, raatein kabhi\nTere sang sang hum chal pade kitne dafa\nKyun ho gaya humse  hi, yu bewafa\nTere peeche bhi kabhi the hum mere jaane ja\nKyu iss tarah tu ho gaya humse juda\n\njudaiyaan , judaiyan seh nahi jaiyaan\nOh soneya, tere bin, jeena bhi kaise jeena\nMann baawra haye toota mera,\nBin tere kaise jeena\n\nOh sohneya\n\nHumne bhi ki hai galti, maafi tu de de jaldi\nThoda sa hass ke sahi, pyaar se\nAb na tu duur hai mujhse, paas hai duuri itni si\nAaja tu bahoon mein, sawaaru tujhe\nTere sang sang hum chal pade, kitne dafa\nKyun ho gaya humse  hi, yu bewafa\nTere peeche bhi kabhi the hum mere jaane ja\nKyu iss tarah tu ho gaya humse juda\n\njudaiyaan , judaiyan seh nahi jaiyaan",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/B5aEaY_BNbY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/B5aEaY_BNbY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/B5aEaY_BNbY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/B5aEaY_BNbY/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/B5aEaY_BNbY/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Play DMF",
      tags: [
        "Desi Music Factory",
        "Yo Yo Honey Singh",
        "Rito Riba",
        "Shenaaz Gill",
        "alfaaz",
        "bollywood",
        "rap",
        "Latest Hindi Songs'",
        "New Songs",
        "Viral Song",
        "Trending",
        "latest punjabi songs",
        "latest haryanvi song",
        "official video",
        "most watched",
        "New Hindi Song",
        "fukra insaan",
        "jiya shankar",
        "love song",
        "viral couple",
        "big boss ott",
        "influencer",
        "youtuber",
        "abhishek malhan",
        "Judaiyan song",
        "Manisha rani new song",
        "Tony Kakkar manish raani",
        "Tony Kakkar new song",
        "Elvish Yadav new song",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Judaiyaan - Abhishek Malhan | Jiya Shankar | Tanveer Evan | Rajat Nagpal  Gurinder Bawa| Anshul Garg",
        description:
          "Anshul Garg presents Judaiyaan featuring Abhishek Malhan & Jiya Shankar\n\nStreaming on all platforms \n\nSpotify : https://bit.ly/462hcKB\nJiosaavn : https://bit.ly/3r9yqH6\nWynk : https://wynk.in/u/UkhzXBWVS\nApple Music : https://bit.ly/480yauV\n\nAudio credits\nSong : Judaiyaan\nSinger and Lyricist : Tanveer Evan\nMusic : Rajat Nagpal \nMusic programmed, composed and Produced By Rajat Nagpal \nGuitars : Rhythm Shaw\nDrums : Gino Banks \nRecorded @ Studio 504 by Rahul Sharma assist by Sameer & Rohit \nMixed by Rajat Nagpal \nMastered by Gethin John @ Hafood Mastering , Wales UK\n\nVideo credits\nFeaturing Abhishek Malhan & Jiya Shankar\nVideo Director - Gurinder Bawa\nDop - Shinda Singh\nEditor - Sahil Mehra \nDI - Onkar Singh\nChief AD - Narinder Singh\nAssistant Director - Sachin Thakur, Sachin Kanojia, Jatin Arora\nCostumes - Akshita & Anulika\nProduction - Rs films\nChoregrapher- John\nProduction Asist - Jadu,Rohit,Honey,Gogi,Aamir\nArt - Karma\nMakeup - Rajan Passi\nHair - Salman\nPhotography - Akki\n\n@FukraInsaan @fukrainsaanlive4744 @Jiyashankar417 \n\nPlayDMF Team\nFounder & CEO : Anshul Garg\nPlayDMF Project Head - Raghav Sharma \nLabel Manager : Gaurav Bharti\nPlayDMF Team - Gaurav Arora, Asheema Chauhan & Sankalp Garg\n\nSpecial Thanks : Ingrooves Team \n\nhttps://www.ingrooves.com/\n\nIngrooves Team \nHead : Amit Sharma \nTeam : Nagesh Jadhav, Kajal Israni, Amol Suryavanshi, Lavanya Das, Nishtha Sikroria\n\nTravel and hospitality partner : PRM Hospitality\n\nLyrics\nJaise hum, milte the, pehle kabhi\nTere baajo, guzri hai, raatein kabhi\nTere sang sang hum chal pade kitne dafa\nKyun ho gaya humse  hi, yu bewafa\nTere peeche bhi kabhi the hum mere jaane ja\nKyu iss tarah tu ho gaya humse juda\n\njudaiyaan , judaiyan seh nahi jaiyaan\nOh soneya, tere bin, jeena bhi kaise jeena\nMann baawra haye toota mera,\nBin tere kaise jeena\n\nOh sohneya\n\nHumne bhi ki hai galti, maafi tu de de jaldi\nThoda sa hass ke sahi, pyaar se\nAb na tu duur hai mujhse, paas hai duuri itni si\nAaja tu bahoon mein, sawaaru tujhe\nTere sang sang hum chal pade, kitne dafa\nKyun ho gaya humse  hi, yu bewafa\nTere peeche bhi kabhi the hum mere jaane ja\nKyu iss tarah tu ho gaya humse juda\n\njudaiyaan , judaiyan seh nahi jaiyaan",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT3M45S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "15452131",
      likeCount: "1144997",
      favoriteCount: "0",
      commentCount: "144753",
    },
  },
  {
    kind: "youtube#video",
    etag: "_7blu9C_wcjD0MnUNspEo0ixZVE",
    id: "weB0JcjebEQ",
    snippet: {
      publishedAt: "2023-09-09T03:34:07Z",
      channelId: "UCtFQDgA8J8_iiwc5-KoAQlg",
      title:
        "G20 Summit | Top Highlights | Gala Dinner at Bharat Mandapam | Delhi Declaration | PM Modi",
      description:
        "G20 Summit | Top Highlights | Gala Dinner at Bharat Mandapam | Delhi Declaration | PM Modi\n\n#G20Summit #pmmodi #rishisunak #biden \n\nSubscribe now and press the bell icon 🔔 to get new video updates: https://bit.ly/2UV4ygi\n\n--------------------------------------\nANI is South Asia's leading Multimedia News Agency providing content for every information platform, including TV, Internet, broadband, newspapers, and mobiles. \nSubscribe now! Enjoy and stay connected with us!!\n☛ Subscribe to ANI News YouTube channel: https://bit.ly/2UV4ygi\n☛ Visit our Official website: https://www.aninews.in/\n☛ Follow ANI: https://twitter.com/ANI \n☛ Like us: https://www.facebook.com/ANINEWS.IN\n☛ Email to: anicontent@aniin.com, internetani@aniin.com\n☛ Copyrights © All Rights Reserved ANI Media Pvt Ltd.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/weB0JcjebEQ/default_live.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/weB0JcjebEQ/mqdefault_live.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/weB0JcjebEQ/hqdefault_live.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/weB0JcjebEQ/sddefault_live.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/weB0JcjebEQ/maxresdefault_live.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "ANI News",
      tags: [
        "delhi g20 summit",
        "g20 summit",
        "g20 summit in delhi",
        "g20 summit delhi",
        "g20 delhi",
        "g20 in delhi",
        "g20 summit 2023",
        "g20 summit new delhi",
        "g20",
        "g20 summit 2023 india",
        "delhi g20",
        "g20 delhi 2023",
        "g20 summit india",
        "india g20 summit",
        "delhi",
        "g20 meeting in delhi",
        "modi g20 summit",
        "g20 india",
        "g20 summit 2023 in india",
        "g20 summit in india",
        "pm modi in g20 summit",
        "g20 preparation in delhi",
        "g20 delhi meet",
        "g20 news",
        "pm modi g20 summit",
        "delhi holiday g20 summit",
      ],
      categoryId: "25",
      liveBroadcastContent: "none",
      defaultLanguage: "en-IN",
      localized: {
        title:
          "G20 Summit | Top Highlights | Gala Dinner at Bharat Mandapam | Delhi Declaration | PM Modi",
        description:
          "G20 Summit | Top Highlights | Gala Dinner at Bharat Mandapam | Delhi Declaration | PM Modi\n\n#G20Summit #pmmodi #rishisunak #biden \n\nSubscribe now and press the bell icon 🔔 to get new video updates: https://bit.ly/2UV4ygi\n\n--------------------------------------\nANI is South Asia's leading Multimedia News Agency providing content for every information platform, including TV, Internet, broadband, newspapers, and mobiles. \nSubscribe now! Enjoy and stay connected with us!!\n☛ Subscribe to ANI News YouTube channel: https://bit.ly/2UV4ygi\n☛ Visit our Official website: https://www.aninews.in/\n☛ Follow ANI: https://twitter.com/ANI \n☛ Like us: https://www.facebook.com/ANINEWS.IN\n☛ Email to: anicontent@aniin.com, internetani@aniin.com\n☛ Copyrights © All Rights Reserved ANI Media Pvt Ltd.",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT22H52M35S",
      dimension: "2d",
      definition: "sd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "3844183",
      likeCount: "48353",
      favoriteCount: "0",
      commentCount: "72",
    },
  },
  {
    kind: "youtube#video",
    etag: "za9gxxZSDT3RaTC0Y_WYE5BpP-g",
    id: "Hlmv3tob_Eg",
    snippet: {
      publishedAt: "2023-09-11T06:15:00Z",
      channelId: "UCp3WhZOVIJ9oUDT3rjXmINw",
      title:
        "Peddha Kapu 1 Theatrical Trailer | Virat Karrna | Pragati | Srikanth Addala | Mickey J Meyer",
      description:
        "Peddha Kapu 1 Theatrical Trailer On Dwaraka Creations.\n\nHere's the theatrical trailer of #PeddhaKapu Part-1 starring Virat Karrna under the Prestigious Dwaraka Creations after the Blockbuster #Akhanda \n\nWorldwide Grand Release On September 29th, 2023.\n\n#PeddhaKapu1Trailer #PeddhaKapu1 #ViratKarrna #SrikanthAddala #MickeyJMeyer #ChotaKNaidu #MiryalaRavinderReddy #PeterHeins #DwarakaCreations \n\nCast and crew :\n\nVirat karrna\nPragati srivasthava\nRao Ramesh\nNaga Babu\nTanikella Bharani\nBrigada saga\nRajeev kanakala\nAnusuya\nEeshwari Rao\nNaren\n\nProducer : Miryala ravinder reddy\nDirector: Srikanth Addala\nDop : Chota K Naidu\nMusic : Mickey J meyer\nFights : Peter Hein\nEditor : Marthand K Venkatesh\nArt : GM Sekhar\nDance Master : Raju sundaram \nPRO : Vamsi - Shekar \nMarketing : Max Media \nDigital : Housefull Digital\n\nClick Here To Watch :\n\nPeddha Kapu - 1 Teaser: https://youtu.be/z8OHEOlmUg0\n\nPeddha Kapu - Part 1 Motion Poster : https://youtu.be/opwS_A7EDNU\n\nAkhanda Trailer Roar  : https://youtu.be/CWnu8pQRCkQ\n\nAkhanda Title Song Lyrical : https://youtu.be/9n1refHexDY \n\nAkhanda | BB3 Title Roar : https://youtu.be/gJZQ_YFkUdY\n\nFor more updates about #NBK106 & Dwaraka Creations : \nLike - https://www.facebook.com/DwarakaCreationmovies\nFollow - https://twitter.com/Dwarakacreation\nFollow - https://www.instagram.com/dwarakacreation/\nSubscribe - http://bit.ly/2iEvZ6s",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Hlmv3tob_Eg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Hlmv3tob_Eg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Hlmv3tob_Eg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/Hlmv3tob_Eg/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/Hlmv3tob_Eg/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Dwaraka Creations",
      tags: [
        "Peddha Kapu 1 Theatrical Trailer",
        "Virat Karrna",
        "Pragati",
        "Srikanth Addala",
        "Mickey J Meyer",
        "Pragati Srivasthava",
        "Dwaraka Creations",
        "Peddha Kapu Trailer",
        "Miryala Ravinder Reddy",
        "Peddha Kapu",
        "PK 1 Trailer",
        "PK 1 Movie Trailer",
        "PK1 Movie",
        "Mickey J Meyer movie songs",
        "srikanth addala new movie",
        "Srikanth addala PK1",
        "Miryala Ravinder Reddy Movies",
        "PK 1 Motion Poster",
        "Peddha Kapu Movie",
        "Latest telugu movies",
        "Virat Karrna movies",
        "Latest telugu movie updates 2023",
        "Best Telugu Movies",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Peddha Kapu 1 Theatrical Trailer | Virat Karrna | Pragati | Srikanth Addala | Mickey J Meyer",
        description:
          "Peddha Kapu 1 Theatrical Trailer On Dwaraka Creations.\n\nHere's the theatrical trailer of #PeddhaKapu Part-1 starring Virat Karrna under the Prestigious Dwaraka Creations after the Blockbuster #Akhanda \n\nWorldwide Grand Release On September 29th, 2023.\n\n#PeddhaKapu1Trailer #PeddhaKapu1 #ViratKarrna #SrikanthAddala #MickeyJMeyer #ChotaKNaidu #MiryalaRavinderReddy #PeterHeins #DwarakaCreations \n\nCast and crew :\n\nVirat karrna\nPragati srivasthava\nRao Ramesh\nNaga Babu\nTanikella Bharani\nBrigada saga\nRajeev kanakala\nAnusuya\nEeshwari Rao\nNaren\n\nProducer : Miryala ravinder reddy\nDirector: Srikanth Addala\nDop : Chota K Naidu\nMusic : Mickey J meyer\nFights : Peter Hein\nEditor : Marthand K Venkatesh\nArt : GM Sekhar\nDance Master : Raju sundaram \nPRO : Vamsi - Shekar \nMarketing : Max Media \nDigital : Housefull Digital\n\nClick Here To Watch :\n\nPeddha Kapu - 1 Teaser: https://youtu.be/z8OHEOlmUg0\n\nPeddha Kapu - Part 1 Motion Poster : https://youtu.be/opwS_A7EDNU\n\nAkhanda Trailer Roar  : https://youtu.be/CWnu8pQRCkQ\n\nAkhanda Title Song Lyrical : https://youtu.be/9n1refHexDY \n\nAkhanda | BB3 Title Roar : https://youtu.be/gJZQ_YFkUdY\n\nFor more updates about #NBK106 & Dwaraka Creations : \nLike - https://www.facebook.com/DwarakaCreationmovies\nFollow - https://twitter.com/Dwarakacreation\nFollow - https://www.instagram.com/dwarakacreation/\nSubscribe - http://bit.ly/2iEvZ6s",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT2M25S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2320252",
      likeCount: "27087",
      favoriteCount: "0",
      commentCount: "927",
    },
  },
  {
    kind: "youtube#video",
    etag: "szWIFaCtuHw5hNCwufvffcznMlc",
    id: "6ttRLsvQBqQ",
    snippet: {
      publishedAt: "2023-09-10T05:16:32Z",
      channelId: "UCTw9sSG-fK0QJJXNnB-K-Iw",
      title: "MY HOME TOUR || Cherry Sathakshi",
      description:
        "If you like the video please do like share and subscribe to my channel and press the bell icon thank you🥰\n\nYouTube: \n\nCherry sathakshi\nhttps://youtube.com/@CherrySathakshi\n\nCherry sathakshi 2:\nhttps://youtube.com/@cherrysathakshi2124?si=E8wTyBq-1r2USZir\n\nCherry sathakshi 3:\nhttps://youtube.com/@cherrysathakshi379?si=IlMNRFKqql_W6sYM\n\n\n\nInstagram: \n\nCherry_sathakshi1\nhttps://instagram.com/cherry_sathakshi1?igshid=ZmZhODViOGI=\n\n\n\n\n\n\n\nInstagram: \n\nCherry_sirisha_1482\nhttps://instagram.com/cherry_sirisha_1482?igshid=MzRlODBiNWFlZA==\n\nSathakshi_4811\n\nhttps://instagram.com/sathakshi_4811?igshid=MzRlODBiNWFlZA==\n\n\n___________________________________________\n\nFor weight loss:\n\n110.1kgs to 79kgs total 30kgs weight loss ayanu nenu &\n66.5kgs to 55.5kgs total  11kgs weight loss ayindhi ma sirisha\n\nSPARKEL CLINIC\n📞9393255516\n📞9393255515\n\n\nInstagram👇\n@dr.vineelakondapalli\n\nhttps://instagram.com/dr.vineelakondapalli?igshid=YmMyMTA2M2Y=",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6ttRLsvQBqQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/6ttRLsvQBqQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/6ttRLsvQBqQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/6ttRLsvQBqQ/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/6ttRLsvQBqQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Cherry Sathakshi",
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title: "MY HOME TOUR || Cherry Sathakshi",
        description:
          "If you like the video please do like share and subscribe to my channel and press the bell icon thank you🥰\n\nYouTube: \n\nCherry sathakshi\nhttps://youtube.com/@CherrySathakshi\n\nCherry sathakshi 2:\nhttps://youtube.com/@cherrysathakshi2124?si=E8wTyBq-1r2USZir\n\nCherry sathakshi 3:\nhttps://youtube.com/@cherrysathakshi379?si=IlMNRFKqql_W6sYM\n\n\n\nInstagram: \n\nCherry_sathakshi1\nhttps://instagram.com/cherry_sathakshi1?igshid=ZmZhODViOGI=\n\n\n\n\n\n\n\nInstagram: \n\nCherry_sirisha_1482\nhttps://instagram.com/cherry_sirisha_1482?igshid=MzRlODBiNWFlZA==\n\nSathakshi_4811\n\nhttps://instagram.com/sathakshi_4811?igshid=MzRlODBiNWFlZA==\n\n\n___________________________________________\n\nFor weight loss:\n\n110.1kgs to 79kgs total 30kgs weight loss ayanu nenu &\n66.5kgs to 55.5kgs total  11kgs weight loss ayindhi ma sirisha\n\nSPARKEL CLINIC\n📞9393255516\n📞9393255515\n\n\nInstagram👇\n@dr.vineelakondapalli\n\nhttps://instagram.com/dr.vineelakondapalli?igshid=YmMyMTA2M2Y=",
      },
      defaultAudioLanguage: "te",
    },
    contentDetails: {
      duration: "PT37M3S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "423173",
      likeCount: "17362",
      favoriteCount: "0",
    },
  },
  {
    kind: "youtube#video",
    etag: "Fp_q3UjgXH7xX76mk6EfLQSR980",
    id: "M6wpkLCiHoI",
    snippet: {
      publishedAt: "2023-09-11T13:00:11Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "[슈취타] EP.18 SUGA with V",
      description:
        "#슈가와취하는타임 #슈취타 #SUGA #슈가 #V #뷔\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://btsblog.ibighit.com",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M6wpkLCiHoI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/M6wpkLCiHoI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/M6wpkLCiHoI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/M6wpkLCiHoI/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/M6wpkLCiHoI/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "BANGTANTV",
      tags: [
        "방탄소년단",
        "BTS",
        "BANGTAN",
        "알엠",
        "RM",
        "슈가",
        "SUGA",
        "제이홉",
        "jhope",
        "지민",
        "정국",
        "k-pop",
        "방탄",
        "j-hope",
        "Jung Kook",
        "Jimin",
        "BTS V",
        "Jin",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      defaultLanguage: "ko",
      localized: {
        title: "[슈취타] EP.18 SUGA with V",
        description:
          "#슈가와취하는타임 #슈취타 #SUGA #슈가 #V #뷔\n\nConnect with BTS: \nhttps://ibighit.com/bts \nhttp://twitter.com/BTS_bighit\nhttp://twitter.com/BTS_twt \nhttp://www.facebook.com/bangtan.official \nhttps://www.youtube.com/user/BANGTANTV \nhttp://instagram.com/BTS.bighitofficial \nhttps://www.tiktok.com/@bts_official_bighit\nhttps://weverse.onelink.me/qt3S/94808190\nhttps://www.weibo.com/BTSbighit\nhttps://www.weibo.com/BTSmembers \nhttp://btsblog.ibighit.com",
      },
      defaultAudioLanguage: "ko",
    },
    contentDetails: {
      duration: "PT38M6S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2486108",
      likeCount: "359662",
      favoriteCount: "0",
      commentCount: "15477",
    },
  },
  {
    kind: "youtube#video",
    etag: "5dfdc32kispPtvF3xOIKrg_3vyU",
    id: "IlI90NxALpQ",
    snippet: {
      publishedAt: "2023-09-11T15:08:29Z",
      channelId: "UC7A2r9_k7hBfAmUz7F5flag",
      title: "Education Redefined | Discover the Difference | Dreamz Unlimited",
      description:
        "Rajeshwari Karuna School (RKS) is situated at 8th Mile, Tuli Wameken Valley in Mokokchung District.  The School was established in the year 2015 and is affiliated to CBSE curriculum and with the XSEED teach force Curriculum and offer both residential and non residential facilities. It's has till grade 10.\nFor any queries you can contact (0) 9615051173",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/IlI90NxALpQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/IlI90NxALpQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/IlI90NxALpQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/IlI90NxALpQ/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/IlI90NxALpQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Dreamz Unlimited",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Education Redefined | Discover the Difference | Dreamz Unlimited",
        description:
          "Rajeshwari Karuna School (RKS) is situated at 8th Mile, Tuli Wameken Valley in Mokokchung District.  The School was established in the year 2015 and is affiliated to CBSE curriculum and with the XSEED teach force Curriculum and offer both residential and non residential facilities. It's has till grade 10.\nFor any queries you can contact (0) 9615051173",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT14M4S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "198455",
      likeCount: "23071",
      favoriteCount: "0",
      commentCount: "651",
    },
  },
  {
    kind: "youtube#video",
    etag: "IwfCnRfeqfdGaUnnwwzRYnqphn0",
    id: "qS16tIph_Og",
    snippet: {
      publishedAt: "2023-09-09T09:47:06Z",
      channelId: "UCYHU3nB-21PeM1FmmLbergA",
      title:
        "Abhishek Ne Diya Bahut Bada Surprised 😮 | @FukraInsaan @ManishaRaniComedy",
      description:
        'Abhishek Ne Diya Bahut Bada Surprised 😮 |  @FukraInsaan   @ManishaRaniComedy  #fukrainsaan #manisharani \n\nMy11Circle App Link :\n https://bit.ly/3Z7Px8M Use my exclusive coupon: RANI20 to get additional 20% extra cash on first deposit"\n\nSubscribe Now:  https://bit.ly/34MWDHM\n\nDigital Manage: Panthalassa Digital Media\nEmail: info@rangmediagroup.com\n\n\nFollow me  😛 !\nIG: hhttps://bit.ly/3oOP1LX\nFB: https://www.facebook.com/\n\n\n#manisharani #abhishekmalhan #fukrainsaan #manisharanicomedy #abhishareunion',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qS16tIph_Og/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/qS16tIph_Og/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/qS16tIph_Og/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/qS16tIph_Og/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/qS16tIph_Og/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Manisha Rani",
      tags: [
        "Abhishek Ne Diya Bahut Bada Surprised",
        "abhisha",
        "abhisha video",
        "Manisha rani Abhishek video",
        "fuara insan video",
        "Manisha rani video",
        "Manisha rani vlog",
        "Manisha rani comedy",
        "Manisha rani fuara insan",
        "Manisha rani Abhishek malhan video",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Abhishek Ne Diya Bahut Bada Surprised 😮 | @FukraInsaan @ManishaRaniComedy",
        description:
          'Abhishek Ne Diya Bahut Bada Surprised 😮 |  @FukraInsaan   @ManishaRaniComedy  #fukrainsaan #manisharani \n\nMy11Circle App Link :\n https://bit.ly/3Z7Px8M Use my exclusive coupon: RANI20 to get additional 20% extra cash on first deposit"\n\nSubscribe Now:  https://bit.ly/34MWDHM\n\nDigital Manage: Panthalassa Digital Media\nEmail: info@rangmediagroup.com\n\n\nFollow me  😛 !\nIG: hhttps://bit.ly/3oOP1LX\nFB: https://www.facebook.com/\n\n\n#manisharani #abhishekmalhan #fukrainsaan #manisharanicomedy #abhishareunion',
      },
    },
    contentDetails: {
      duration: "PT26M",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2829379",
      likeCount: "303841",
      favoriteCount: "0",
      commentCount: "28889",
    },
  },
  {
    kind: "youtube#video",
    etag: "Uz9MpvksFRheJ4zA446XYJbFnbQ",
    id: "4EoPbjx1Kfg",
    snippet: {
      publishedAt: "2023-09-10T04:30:01Z",
      channelId: "UCum5kIr4aqgn9Dc21JdYCWA",
      title: "KRITIKA IS PREGNANT AGAIN | Armaan Malik",
      description:
        "#ad #armaanmalik #payalmalik #kritikamalik #chirayumalik #vlog \n\nOur new song: https://youtu.be/3T911t-GEbA?si=pZdiGxrc0oUnbbtY\n\nFollow us on Instagram:\n\nKritika Malik - https://instagram.com/kritika_malik_9\n\nPayal Malik - https://instagram.com/payal_malik_53\n\nArmaan Malik - https://instagram.com/armaan__malik\n\nMy Facebook Page - \nhttps://www.facebook.com/Kritika-Malik-101562412208961/\n\n___________\n\nDisclaimer : DISCLAIMER : Please don’t go out of your way to or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing not the individual themselves, please don’t go spreading hate it’s all for laughs.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4EoPbjx1Kfg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/4EoPbjx1Kfg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/4EoPbjx1Kfg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/4EoPbjx1Kfg/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/4EoPbjx1Kfg/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Armaan Malik",
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title: "KRITIKA IS PREGNANT AGAIN | Armaan Malik",
        description:
          "#ad #armaanmalik #payalmalik #kritikamalik #chirayumalik #vlog \n\nOur new song: https://youtu.be/3T911t-GEbA?si=pZdiGxrc0oUnbbtY\n\nFollow us on Instagram:\n\nKritika Malik - https://instagram.com/kritika_malik_9\n\nPayal Malik - https://instagram.com/payal_malik_53\n\nArmaan Malik - https://instagram.com/armaan__malik\n\nMy Facebook Page - \nhttps://www.facebook.com/Kritika-Malik-101562412208961/\n\n___________\n\nDisclaimer : DISCLAIMER : Please don’t go out of your way to or hate on anyone I talk about in my videos, this channel is to entertain people and I usually focus on joking about what the people are doing not the individual themselves, please don’t go spreading hate it’s all for laughs.",
      },
    },
    contentDetails: {
      duration: "PT17M40S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2194959",
      likeCount: "72894",
      favoriteCount: "0",
      commentCount: "6842",
    },
  },
  {
    kind: "youtube#video",
    etag: "JuB6IRaipxa-8LgMVR2kbOleX1Q",
    id: "VLh9y0dcAtY",
    snippet: {
      publishedAt: "2023-09-11T06:04:24Z",
      channelId: "UCJF4y2nyCCrDKTgA7dxz1Qw",
      title:
        "Bigg Boss Telugu 7 - Day 8 - Promo 1 | Intense Nomination Game | Nagarjuna | Star Maa",
      description:
        "Sparks Fly in the Bigg Boss House! 🥊\nTensions are running high as the Bigg Boss contestants engage in an intense showdown during the nomination game! 😨\n#BiggBossTelugu7 #Nagarjuna #Starmaa\nFollow us on \nInstagram:https://instagram.com/starmaa?igshid=Yzg5MTU1MDY=\nTwitter: https://twitter.com/StarMaa?t=L_Dotp4sFWmuinHWfbr4bw&s=09\nFacebook: https://www.facebook.com/maatv/",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VLh9y0dcAtY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VLh9y0dcAtY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VLh9y0dcAtY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/VLh9y0dcAtY/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/VLh9y0dcAtY/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Star Maa",
      tags: [
        "star maa",
        "maa tv serials",
        "maa tv serials promo",
        "star maa serials promo",
        "guppedantha manasu serial today episode",
        "ennenno janmala bandham today episode",
        "nuvvu nenu prema serial today episode",
        "krishna mukunda murari serial today episode",
        "malli serial telugu today episode",
        "guppedantha manasu serial today episode full video",
        "naga panchami serial today episode",
        "telugu serial",
        "new serial promo",
        "new episode",
        "maatv",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      defaultLanguage: "en-US",
      localized: {
        title:
          "Bigg Boss Telugu 7 - Day 8 - Promo 1 | Intense Nomination Game | Nagarjuna | Star Maa",
        description:
          "Sparks Fly in the Bigg Boss House! 🥊\nTensions are running high as the Bigg Boss contestants engage in an intense showdown during the nomination game! 😨\n#BiggBossTelugu7 #Nagarjuna #Starmaa\nFollow us on \nInstagram:https://instagram.com/starmaa?igshid=Yzg5MTU1MDY=\nTwitter: https://twitter.com/StarMaa?t=L_Dotp4sFWmuinHWfbr4bw&s=09\nFacebook: https://www.facebook.com/maatv/",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT1M49S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1650169",
      likeCount: "34800",
      favoriteCount: "0",
      commentCount: "2974",
    },
  },
  {
    kind: "youtube#video",
    etag: "bWRYM7J3dNR11gGz9T1OIZbmN9w",
    id: "3HzZjYQuktc",
    snippet: {
      publishedAt: "2023-09-11T04:03:30Z",
      channelId: "UCVGiG3GcphUyMzNXg2iMN3A",
      title:
        "Ghum Hai KisiKey Pyaar Mein NEW PROMO: Ishaan Ne Sabke Samne Ki Apni Maa Isha Ki INSULT",
      description:
        "Star Plus Serial Gum / Ghum Hai Kisi Ke Pyaar Mein Today Episode New Promo 11th September 2023:  Ishaan Ne Sabke Samne Ki Apni Maa Isha Ki INSULT |  #ghkkpm  #ghumhaikisikeypyaarmeiin  #shaktiarora  #bhavikasharma  \n➤Subscribe Telly Reporter @ http://bit.do/TellyReporter\n⦿SOCIAL MEDIA Links⦿\n➤https://www.facebook.com/TellyReporter\n➤https://twitter.com/TellyReporter\n➤https://www.instagram.com/TellyReporter\n⦿ Follow TellyReporter With #TellyReporter #TellyExclusive",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3HzZjYQuktc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3HzZjYQuktc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3HzZjYQuktc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/3HzZjYQuktc/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/3HzZjYQuktc/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Telly Reporter",
      tags: [
        "today episode of gum hai kisi ke pyar mein",
        "ghum hai kisi ke pyar mein today episode",
        "ghum hai kisi ke pyar mein today episode full",
        "ghum hai kisi ke pyar mein full episode today",
        "Gum hai kisi ke pyaar me today full episode",
        "Gum Hai Kisi Ke Pyar Mein 11 september 2023 today full episode",
        "Ghum Hai Kise Ka Pyar Mein 11 september 2023 Full Episode Today",
        "ghum hai kisi ke pyar mein new promo",
        "ghum hai kisi ke pyar mein serial",
        "ghkkpm new promo",
        "bhavika sharma",
        "shakti arora",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Ghum Hai KisiKey Pyaar Mein NEW PROMO: Ishaan Ne Sabke Samne Ki Apni Maa Isha Ki INSULT",
        description:
          "Star Plus Serial Gum / Ghum Hai Kisi Ke Pyaar Mein Today Episode New Promo 11th September 2023:  Ishaan Ne Sabke Samne Ki Apni Maa Isha Ki INSULT |  #ghkkpm  #ghumhaikisikeypyaarmeiin  #shaktiarora  #bhavikasharma  \n➤Subscribe Telly Reporter @ http://bit.do/TellyReporter\n⦿SOCIAL MEDIA Links⦿\n➤https://www.facebook.com/TellyReporter\n➤https://twitter.com/TellyReporter\n➤https://www.instagram.com/TellyReporter\n⦿ Follow TellyReporter With #TellyReporter #TellyExclusive",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT1M",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1044627",
      likeCount: "7864",
      favoriteCount: "0",
      commentCount: "213",
    },
  },
  {
    kind: "youtube#video",
    etag: "mUmiEziPdUWDCsONLCElZtYrhXk",
    id: "W-AV3fWVsqM",
    snippet: {
      publishedAt: "2023-09-10T04:00:17Z",
      channelId: "UCrcpw88HvKJ0skdsHniCJtQ",
      title:
        "Maratha Reservation : पंकजा मुंडेंनी दिला सरकारला घरचा आहेर | N18V |",
      description:
        "#marathamorcha | #marathareservation | #pankajamunde |\nमराठा आरक्षणाच्या मुद्द्यावरून सध्या सरकारची कसोटी लागलेली असताना आणि आंतरवाली सराटी ते मंत्रालय अशा चर्चेच्या फेऱ्या झडत असताना, पंकजा मुंडेंनी सरकारला घरचा आहेर दिलाय...\n\nN18V | #pankajamunde #news18lokmat #marathamorcha #marathareservation #manojjarange #marathareservation #manojjarangepatil #vijayvadettiwar #girishmahajan #chandrashekharbavankule #chhaganbhujbal #congress #bjp #Shivsena #uddhavthackeray #NCP #NCP #MaharashtraPolitics#news18lokmatlive #marathinews18 #maharashtranews18 #marathibatmyanews18\n\nNews18 India’s leading News Network, and the Lokmat Group, Maharashtra’s leading Newspaper group, present News18Lokmat (formerly- IBN-Lokmat ) - a 24-hour Marathi News and Current Affairs Channel. The legacy of these two renowned media powerhouses will give News18Lokmat a sense of immense credibility as well as access to a vast audience base. Going on air from April 6, News18Lokmat will be a world-class credible News channel for the highly aware and conscious ‘Progressive Marathi’.\n\nFollow us\nWebsite: https://bit.ly/321zn3A\nTwitter : https://twitter.com/news18lokmat?lang=en\nFacebook: https://www.facebook.com/News18Lokmat\n\nSubscribe our channel to get latest news & updates https://tinyurl.com/y4sdfw6n",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/W-AV3fWVsqM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/W-AV3fWVsqM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/W-AV3fWVsqM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/W-AV3fWVsqM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/W-AV3fWVsqM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "News18 Lokmat",
      tags: [
        "marathi news live",
        "maharashtra news live",
        "news18 lokmat",
        "maratha reservation",
        "maratha aarakshan latest",
        "maratha reservation news",
        "maratha reservation update",
        "maratha aarakshan latest news",
        "maratha aarakshan latest update",
        "maratha reservation latest news",
        "maratha aarakshan latest news today",
        "maratha aarakshan pavsali adhiveshan",
        "maratha aarakshan latest news uposhan",
        "maratha reservation latest news today",
        "maratha aarakshan latest news live today",
      ],
      categoryId: "25",
      liveBroadcastContent: "none",
      defaultLanguage: "mr",
      localized: {
        title:
          "Maratha Reservation : पंकजा मुंडेंनी दिला सरकारला घरचा आहेर | N18V |",
        description:
          "#marathamorcha | #marathareservation | #pankajamunde |\nमराठा आरक्षणाच्या मुद्द्यावरून सध्या सरकारची कसोटी लागलेली असताना आणि आंतरवाली सराटी ते मंत्रालय अशा चर्चेच्या फेऱ्या झडत असताना, पंकजा मुंडेंनी सरकारला घरचा आहेर दिलाय...\n\nN18V | #pankajamunde #news18lokmat #marathamorcha #marathareservation #manojjarange #marathareservation #manojjarangepatil #vijayvadettiwar #girishmahajan #chandrashekharbavankule #chhaganbhujbal #congress #bjp #Shivsena #uddhavthackeray #NCP #NCP #MaharashtraPolitics#news18lokmatlive #marathinews18 #maharashtranews18 #marathibatmyanews18\n\nNews18 India’s leading News Network, and the Lokmat Group, Maharashtra’s leading Newspaper group, present News18Lokmat (formerly- IBN-Lokmat ) - a 24-hour Marathi News and Current Affairs Channel. The legacy of these two renowned media powerhouses will give News18Lokmat a sense of immense credibility as well as access to a vast audience base. Going on air from April 6, News18Lokmat will be a world-class credible News channel for the highly aware and conscious ‘Progressive Marathi’.\n\nFollow us\nWebsite: https://bit.ly/321zn3A\nTwitter : https://twitter.com/news18lokmat?lang=en\nFacebook: https://www.facebook.com/News18Lokmat\n\nSubscribe our channel to get latest news & updates https://tinyurl.com/y4sdfw6n",
      },
      defaultAudioLanguage: "mr",
    },
    contentDetails: {
      duration: "PT3M",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "329129",
      likeCount: "1398",
      favoriteCount: "0",
      commentCount: "96",
    },
  },
  {
    kind: "youtube#video",
    etag: "vs_k3BWKXPp9ExH2-X42-85csYc",
    id: "Fbb4e_Q6wR8",
    snippet: {
      publishedAt: "2023-09-11T00:00:09Z",
      channelId: "UCiifkYAs_bq1pt_zbNAzYGg",
      title: "Aquaman and the Lost Kingdom | Teaser",
      description:
        "Don’t miss the full trailer this Thursday. #Aquaman and the Lost Kingdom - Only in theaters December 20.\n\nDirector James Wan and Aquaman himself, Jason Momoa—along with Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II and Nicole Kidman—return in the sequel to the highest-grossing DC film of all time: “Aquaman and the Lost Kingdom.”\n\nHaving failed to defeat Aquaman the first time, Black Manta, still driven by the need to avenge his father’s death, will stop at nothing to take Aquaman down once and for all. This time Black Manta is more formidable than ever before, wielding the power of the mythic Black Trident, which unleashes an ancient and malevolent force. To defeat him, Aquaman will turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance. Together, they must set aside their differences in order to protect their kingdom and save Aquaman’s family, and the world, from irreversible destruction.\n\nAll returning to the roles they originated, Jason Momoa plays Arthur Curry/Aquaman, now balancing his duties as both the King of Atlantis and a new father; Patrick Wilson is Orm, Aquaman’s half-brother and his nemesis, who must now step into a new role as his brother’s reluctant ally; Amber Heard is Mera, Atlantis’ Queen and mother of the heir to the throne; Yahya Abdul-Mateen II is Black Manta, committed more than ever to avenge his father’s death by destroying Aquaman, his family and Atlantis; and Nicole Kidman as Atlanna, a fierce leader and mother with the heart of a warrior. Also reprising their roles are Dolph Lundgren as King Nereus and Randall Park as Dr. Stephen Shin.\n\nDirected by Wan, “Aquaman and the Lost Kingdom” is produced by Peter Safran, Wan and Rob Cowan. The executive producers are Galen Vaisman and Walter Hamada.\n\nThe screenplay is by David Leslie Johnson-McGoldrick, from a story by James Wan & David Leslie Johnson-McGoldrick and Jason Momoa & Thomas Pa’a Sibbett, based on characters from DC, Aquaman created by Paul Norris and Mort Weisinger. \n\nJoining Wan behind-the-camera is his sterling team of “Aquaman” artisans: director of photography Don Burgess (“The Conjuring 2”), production designer Bill Brzeski (“Jumanji: The Next Level”), editor Kirk Morri (“Furious 7”), composer Rupert Gregson-Williams (“Wonder Woman”) and music supervisor is Michelle Silverman (“Malignant”). Visual effects supervisor Nick Davis (“The Clash of the Titans” films, “The Dark Knight”) and costume designer Richard Sale (“Doctor Strange in the Multiverse of Madness,” “Ready Player One”) also join.\n\nWarner Bros. Pictures Presents An Atomic Monster / A Peter Safran Production of A James Wan Film, “Aquaman and the Lost Kingdom,” set to open in theaters internationally beginning 20 December 2023 and in North America on December 20, 2023; it will be distributed worldwide by Warner Bros. Pictures.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Fbb4e_Q6wR8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Fbb4e_Q6wR8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Fbb4e_Q6wR8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/Fbb4e_Q6wR8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/Fbb4e_Q6wR8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "DC",
      tags: [
        "AquaManAndTheLostKingdom",
        "Aquaman",
        "ArthurCurry",
        "Batman",
        "BenAffleck",
        "ComingSoon",
        "DC",
        "DCComics",
        "Film",
        "JamesWan",
        "JasonMomoa",
        "NicoleKidman",
        "PatrickWilson",
        "Trailer",
        "WB",
        "WarnerBros",
      ],
      categoryId: "1",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "Aquaman and the Lost Kingdom | Teaser",
        description:
          "Don’t miss the full trailer this Thursday. #Aquaman and the Lost Kingdom - Only in theaters December 20.\n\nDirector James Wan and Aquaman himself, Jason Momoa—along with Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II and Nicole Kidman—return in the sequel to the highest-grossing DC film of all time: “Aquaman and the Lost Kingdom.”\n\nHaving failed to defeat Aquaman the first time, Black Manta, still driven by the need to avenge his father’s death, will stop at nothing to take Aquaman down once and for all. This time Black Manta is more formidable than ever before, wielding the power of the mythic Black Trident, which unleashes an ancient and malevolent force. To defeat him, Aquaman will turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance. Together, they must set aside their differences in order to protect their kingdom and save Aquaman’s family, and the world, from irreversible destruction.\n\nAll returning to the roles they originated, Jason Momoa plays Arthur Curry/Aquaman, now balancing his duties as both the King of Atlantis and a new father; Patrick Wilson is Orm, Aquaman’s half-brother and his nemesis, who must now step into a new role as his brother’s reluctant ally; Amber Heard is Mera, Atlantis’ Queen and mother of the heir to the throne; Yahya Abdul-Mateen II is Black Manta, committed more than ever to avenge his father’s death by destroying Aquaman, his family and Atlantis; and Nicole Kidman as Atlanna, a fierce leader and mother with the heart of a warrior. Also reprising their roles are Dolph Lundgren as King Nereus and Randall Park as Dr. Stephen Shin.\n\nDirected by Wan, “Aquaman and the Lost Kingdom” is produced by Peter Safran, Wan and Rob Cowan. The executive producers are Galen Vaisman and Walter Hamada.\n\nThe screenplay is by David Leslie Johnson-McGoldrick, from a story by James Wan & David Leslie Johnson-McGoldrick and Jason Momoa & Thomas Pa’a Sibbett, based on characters from DC, Aquaman created by Paul Norris and Mort Weisinger. \n\nJoining Wan behind-the-camera is his sterling team of “Aquaman” artisans: director of photography Don Burgess (“The Conjuring 2”), production designer Bill Brzeski (“Jumanji: The Next Level”), editor Kirk Morri (“Furious 7”), composer Rupert Gregson-Williams (“Wonder Woman”) and music supervisor is Michelle Silverman (“Malignant”). Visual effects supervisor Nick Davis (“The Clash of the Titans” films, “The Dark Knight”) and costume designer Richard Sale (“Doctor Strange in the Multiverse of Madness,” “Ready Player One”) also join.\n\nWarner Bros. Pictures Presents An Atomic Monster / A Peter Safran Production of A James Wan Film, “Aquaman and the Lost Kingdom,” set to open in theaters internationally beginning 20 December 2023 and in North America on December 20, 2023; it will be distributed worldwide by Warner Bros. Pictures.",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT31S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: false,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1326227",
      likeCount: "45419",
      favoriteCount: "0",
      commentCount: "3646",
    },
  },
  {
    kind: "youtube#video",
    etag: "fO0abCcMAE6308UKpfrFwgyp30o",
    id: "3T911t-GEbA",
    snippet: {
      publishedAt: "2023-09-10T03:30:37Z",
      channelId: "UCRLmEkBUd79YjTZTWLPBrYQ",
      title:
        "Jaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023",
      description:
        "Jaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023\n\nJaav Pani Ne (Official Video ) a New Latest Most Popular Haryanvi Songs Haryanavi 2023. Jaav Pani Ne Haryanvi Song Starring with Armaan Malik & Payal Malik .This superhit Haryanvi Song Sung by Vishvajeet Choudhary. Music given by Gulshan Music. Penned by Anil Prem Nagriya. Copyright & Music label by Vats Records.\n\n#JaavPaniNe #ArmaanMalik #PayalMalik #Kritikamalik #VatsRecords #NewHaryanviSongsHaryanavi2023 #NewHaryanviSongs2023 #HaryanviDjSongs2023\n\n💫Click to create Instagram Reels : https://www.instagram.com/reels/audio/1282791292349438/\n\n🎶Also Available On:\n1. Gaana : https://gaana.com/song/jaav-paani-ne-feat-armaan-malikpayal-malik\n2. Wynk : https://wynk.in/u/ODz5VOFqq\n3. Jio Saavn : https://www.jiosaavn.com/song/jaav-paani-ne-feat.-armaan-malikpayal-malik/MgAEfiJEWn4\n4. Spotify : https://open.spotify.com/track/1Ub1cp2LoCpJDI26KvobRy?si=ca7b7a10549242ca\n5. Resso : https://h5.resso.app/track/_/7275631188977502209?share_platform=pc&channel=copy&shared_by=7088553889218708481\n6. Apple Music : https://music.apple.com/us/album/jaav-paani-ne/1706071089?i=1706071090\n7. Amazon Music : https://music.amazon.in/albums/B0CHJQZD3Z?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_fCVje4HbDyrQL0igOHhEB3cBo&trackAsin=B0CHJRTHKY\n\nStarring :- Armaan Malik & Payal Malik\nSinger :- Vishvajeet Choudhary\nLyrics :- Anil Prem Nagriya\nMusic :- Gulshan Music 8168614500\nDirector :- The Ayub Khan\nDop\\Edit :- Punit Chalana \nDi :- Sahil Pantter\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n\nJaav Pani Ne Lyrics : \nMaar ke Dhunge krde fail ,R choti halle se teri geal -2\nEsha luta katkhani ne\nChama cham baaje  se ghungru ,quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\n                              (1)\nKade tu sisa dekhe se kde tu chede baali ne kade julfa ne thik kare R maara chambho chali ne -2\nR karke ne solaa singaar r gori hoke ne tayar fail tu kare se rani ne\nChama Cham baaje  se ghungru quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\n                             (2)\nSurme te teri aakh bhare or bindi pyari laag se\nPrem Nagariye Anil ne tu sab te nayari laage se -2\nR tera bol se bhartar r itani laave se kyu vaar r jab tu jaave paani ne\nChama cham baaje  se ghungru quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2023. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Songs Haryanavi 2023. We Will Provide Best Haryanvi Songs Of All Time.\n\nJaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023\nJaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3T911t-GEbA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3T911t-GEbA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3T911t-GEbA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/3T911t-GEbA/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/3T911t-GEbA/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "VATS RECORDS",
      tags: [
        "jaav pani ne",
        "jaav pani ne song",
        "jaav pani ne haryanvi",
        "jaav pani ne armaan malik",
        "jaav pani ne payal malik",
        "armaan malik",
        "payal malik",
        "kritika malik",
        "armaan malik new song",
        "armaan malik song",
        "vishvajeet choudhary",
        "payal malik songs",
        "haryanvi dj song",
        "haryanvi new song",
        "haryanvi",
        "songs",
        "haryanavi",
        "2023",
        "new haryanvi songs haryanavi 2023",
        "haryanvi songs",
        "haryanvi songs 2023",
        "new haryanvi songs 2023",
        "latest haryanvi songs 2023",
        "haryanvi dj songs",
        "vats records",
        "ghungroo",
        "pani ne",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Jaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023",
        description:
          "Jaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023\n\nJaav Pani Ne (Official Video ) a New Latest Most Popular Haryanvi Songs Haryanavi 2023. Jaav Pani Ne Haryanvi Song Starring with Armaan Malik & Payal Malik .This superhit Haryanvi Song Sung by Vishvajeet Choudhary. Music given by Gulshan Music. Penned by Anil Prem Nagriya. Copyright & Music label by Vats Records.\n\n#JaavPaniNe #ArmaanMalik #PayalMalik #Kritikamalik #VatsRecords #NewHaryanviSongsHaryanavi2023 #NewHaryanviSongs2023 #HaryanviDjSongs2023\n\n💫Click to create Instagram Reels : https://www.instagram.com/reels/audio/1282791292349438/\n\n🎶Also Available On:\n1. Gaana : https://gaana.com/song/jaav-paani-ne-feat-armaan-malikpayal-malik\n2. Wynk : https://wynk.in/u/ODz5VOFqq\n3. Jio Saavn : https://www.jiosaavn.com/song/jaav-paani-ne-feat.-armaan-malikpayal-malik/MgAEfiJEWn4\n4. Spotify : https://open.spotify.com/track/1Ub1cp2LoCpJDI26KvobRy?si=ca7b7a10549242ca\n5. Resso : https://h5.resso.app/track/_/7275631188977502209?share_platform=pc&channel=copy&shared_by=7088553889218708481\n6. Apple Music : https://music.apple.com/us/album/jaav-paani-ne/1706071089?i=1706071090\n7. Amazon Music : https://music.amazon.in/albums/B0CHJQZD3Z?marketplaceId=A21TJRUUN4KGV&musicTerritory=IN&ref=dm_sh_fCVje4HbDyrQL0igOHhEB3cBo&trackAsin=B0CHJRTHKY\n\nStarring :- Armaan Malik & Payal Malik\nSinger :- Vishvajeet Choudhary\nLyrics :- Anil Prem Nagriya\nMusic :- Gulshan Music 8168614500\nDirector :- The Ayub Khan\nDop\\Edit :- Punit Chalana \nDi :- Sahil Pantter\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n\nJaav Pani Ne Lyrics : \nMaar ke Dhunge krde fail ,R choti halle se teri geal -2\nEsha luta katkhani ne\nChama cham baaje  se ghungru ,quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\n                              (1)\nKade tu sisa dekhe se kde tu chede baali ne kade julfa ne thik kare R maara chambho chali ne -2\nR karke ne solaa singaar r gori hoke ne tayar fail tu kare se rani ne\nChama Cham baaje  se ghungru quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\n                             (2)\nSurme te teri aakh bhare or bindi pyari laag se\nPrem Nagariye Anil ne tu sab te nayari laage se -2\nR tera bol se bhartar r itani laave se kyu vaar r jab tu jaave paani ne\nChama cham baaje  se ghungru quit tere laag se ghungru \nR jab tu jaave pani ne -2\n\nThanks Everyone for Watching Our New Latest Haryanvi Songs Haryanavi 2023. If you like This Latest Haryanvi Song than SUBSCRIBE Our Channel With Press Bell Icon to get notification of our New Latest Most Popular Superhit Haryanvi Songs Haryanavi 2023. We Will Provide Best Haryanvi Songs Of All Time.\n\nJaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023\nJaav Pani Ne (Official Video) Armaan Malik | Payal Malik | New Haryanvi Songs Haryanavi 2023",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT2M39S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "965853",
      likeCount: "58695",
      favoriteCount: "0",
      commentCount: "2397",
    },
  },
  {
    kind: "youtube#video",
    etag: "Z7BhM-7meQzbdBgOdGOc-hFcbtg",
    id: "8ivN3vFxhSo",
    snippet: {
      publishedAt: "2023-09-10T05:26:42Z",
      channelId: "UChpUSSTjbH8Ou8wz7wpkCTg",
      title:
        "బజ్జీల బేబీ🫕😂//village comedy 😂//5star channel ❤️//Laxmi srikanth videos#comedy #entertainment",
      description:
        "Hii Friends this is my new short film|| || 🤣comedy Video || plz watch like share and Subscribe for more updates.....\n \n8639938599 : Advertisement Only Whatusp \n\nOur Village Location\nVillage : Kondapur & Ambaripet\nMandal : Velgatoor\nDistrict : Jagityal\nState : Telangana\n.........................................................................................................................\n#5Strachannel\n#LaxmiVideos\n#rakhipandaga\n#rakhi \n#emotional \n#sisterbrother \n#sentimental \n#rakhispecial \n#Maguva\n#5StarAtoZ\n#01trendingvideos \n#entertainmentvideos \n#02trendingvideos \n#5Starchannelvideos\n#01trendingvideos\n#Newlovestorys\n#Telugulovestroys\n#Entertainmentvideos\n#Comedyvideos\n#NewTrendingVideos\n#SrikanthVideos\n#5StarNewVideos\n#FullEmotionalvideo\n#viral",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8ivN3vFxhSo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/8ivN3vFxhSo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/8ivN3vFxhSo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/8ivN3vFxhSo/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/8ivN3vFxhSo/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "5 STAR",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "బజ్జీల బేబీ🫕😂//village comedy 😂//5star channel ❤️//Laxmi srikanth videos#comedy #entertainment",
        description:
          "Hii Friends this is my new short film|| || 🤣comedy Video || plz watch like share and Subscribe for more updates.....\n \n8639938599 : Advertisement Only Whatusp \n\nOur Village Location\nVillage : Kondapur & Ambaripet\nMandal : Velgatoor\nDistrict : Jagityal\nState : Telangana\n.........................................................................................................................\n#5Strachannel\n#LaxmiVideos\n#rakhipandaga\n#rakhi \n#emotional \n#sisterbrother \n#sentimental \n#rakhispecial \n#Maguva\n#5StarAtoZ\n#01trendingvideos \n#entertainmentvideos \n#02trendingvideos \n#5Starchannelvideos\n#01trendingvideos\n#Newlovestorys\n#Telugulovestroys\n#Entertainmentvideos\n#Comedyvideos\n#NewTrendingVideos\n#SrikanthVideos\n#5StarNewVideos\n#FullEmotionalvideo\n#viral",
      },
    },
    contentDetails: {
      duration: "PT21M13S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "242269",
      likeCount: "10095",
      favoriteCount: "0",
      commentCount: "333",
    },
  },
  {
    kind: "youtube#video",
    etag: "r-tj-bVU2cAs_pbhmJFtt_QsvHY",
    id: "XCVOdzJBNEs",
    snippet: {
      publishedAt: "2023-09-11T02:30:27Z",
      channelId: "UCjvgGbPPn-FgYeguc5nxG4A",
      title: "My Birthday Surprise 😍 In London",
      description:
        "Follow me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XCVOdzJBNEs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/XCVOdzJBNEs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/XCVOdzJBNEs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/XCVOdzJBNEs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/XCVOdzJBNEs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sourav Joshi Vlogs",
      tags: [
        "sourav joshi",
        "sourav joshi vlogs",
        "travel vlogs",
        "family vlogs",
        "toys",
        "piyush joshi",
        "piyush joshi vlogs",
        "ICE BATH CHALLENGE",
        "ICE BATH",
        "SOURAV JOSHI ARTS",
        "VLOG",
        "VLOGS",
        "DAILY VLOGS",
        "DAILY VLOGGER",
        "funny vlogs",
        "piyush joshi gaming",
        "vlogger of the year",
        "ind vs pak",
        "india vs pakistan match",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title: "My Birthday Surprise 😍 In London",
        description:
          "Follow me on Instagram- https://www.instagram.com/souravjoshivlogs/?hl=en\n \nI hope you enjoyed this video\n\nhit likes.\nAnd do subscribe to my channel\n\nThank you so much for watching\n\ngod bless you all.\nlots of  ❤️\n\n( For Collaboration - officialsouravjoshivlogs@gmail.com",
      },
    },
    contentDetails: {
      duration: "PT10M32S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "4467952",
      likeCount: "373826",
      favoriteCount: "0",
      commentCount: "6227",
    },
  },
  {
    kind: "youtube#video",
    etag: "Oib3nnpQcp3dRUeQPwcslA3gaqY",
    id: "_lsjK7vp26M",
    snippet: {
      publishedAt: "2023-09-10T16:08:28Z",
      channelId: "UCVXCo0W9pk2dDkEBNLhTt7A",
      title:
        "🔴INDvsPAK BREAKING: DAY'S PLAY CALLED OFF, MATCH WILL RESUME ON RESERVE DAY, WILL INDIA BE HAPPY?",
      description:
        "India Vs Pakistan Game called off for the day. Will resume tomorrow with India 147-2 in 24.1\n\nDownload Probo & Earn Money:- https://probo-in.onelink.me/1kre/SportsTakIndvsPakSept\nVisit TVS Eurogrip website for more details  - https://rb.gy/g0blh\nwww.okinawascooters.com \nTravel with Poorva Holidays and avail exciting offers on Domestic and International Bookings - https://poorvaholidays.com/home\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights and specific statistics of players and teams. You can also catch pre and post-match interviews of players, coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, मोहम्मद अजहरूद्दीन, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_lsjK7vp26M/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_lsjK7vp26M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_lsjK7vp26M/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/_lsjK7vp26M/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/_lsjK7vp26M/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sports Tak",
      tags: [
        "Sports Tak",
        "Sports Tak News",
        "Sports Tak Breaking",
        "ROHIT SHARMA 56 VS PAKISTAN",
        "SHUBMAN GILL 58 VS PAKISTAN",
        "VIRAT KOHLI BATTING",
        "VIRAT KOHLI VS PAKISTAN",
        "KL RAHUL COMEBACK",
        "KL RAHUL VS PAKISTAN",
        "KL RAHUL IN PLACE OF SHREYAS IYER",
        "SHAHEEN AFRIDI",
        "NASEEM SHAH",
        "RAIN STOPS PLAY",
        "RAIN IN INDIA VS PAKISTAN",
        "SPORTS TAK LIVE",
        "SPORTS TAK LIVE ON INDIA VS PAKISTAN",
        "INDIA VS PAKISTAN SUPER 4",
        "INDIA VS PAKISTAN",
        "IND VS PAK",
        "ASIA CUP",
        "ASIA CUP 2023",
        "IND VS PAK ASIA CUP",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title:
          "🔴INDvsPAK BREAKING: DAY'S PLAY CALLED OFF, MATCH WILL RESUME ON RESERVE DAY, WILL INDIA BE HAPPY?",
        description:
          "India Vs Pakistan Game called off for the day. Will resume tomorrow with India 147-2 in 24.1\n\nDownload Probo & Earn Money:- https://probo-in.onelink.me/1kre/SportsTakIndvsPakSept\nVisit TVS Eurogrip website for more details  - https://rb.gy/g0blh\nwww.okinawascooters.com \nTravel with Poorva Holidays and avail exciting offers on Domestic and International Bookings - https://poorvaholidays.com/home\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights and specific statistics of players and teams. You can also catch pre and post-match interviews of players, coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, मोहम्मद अजहरूद्दीन, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT48M5S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "617201",
      likeCount: "14117",
      favoriteCount: "0",
      commentCount: "772",
    },
  },
  {
    kind: "youtube#video",
    etag: "ckefAnjGWtRbEexjiaPrkFQpywM",
    id: "RUyEDF0whD8",
    snippet: {
      publishedAt: "2023-09-11T13:06:36Z",
      channelId: "UCyEnhHynhlQX-ReSHe7j3ow",
      title:
        "Kohli Humne tumhara kya bigara 😭😭 Ek or 100 Rahul & Kohli 100 PAKISTAN REACTION on IND vs PAK",
      description:
        "Hello This is Waleed Rauf \nIn this Video you’ll see my analysis \nIndia vs Pakistan \nVirat Kohli & Rahul 100\nMy Second Channel link\nhttps://youtube.com/channel/UCbCHvlm2kUhGfr211KXFjBw\n\nFollow me Instagram: https://instagram.com/chwaleedrauf\n\nFollow me on Facebook: https://www.facebook.com/chwaleedrauf/\n\nFollow me on Twitter: https://twitter.com/WaleedRauf20\n\nFollow me on TikTok: https://www.tiktok.com/@chwaleedrauf\n\nOther Channels ⬇️ \n•Nouman Rauf: https://youtube.com/@miannoumanrauf2851\n•Shameer: https://youtube.com/@ranashahmeerkhan\n•Rubina: https://youtube.com/@cookingwithrubinasheraz8283\n\nFor Urgent Contact:\nEmail me on\nbusinesswithwaleed28@gmail.com\n\nDisclaimer:\nThe video is made on fan base we are not intentionally targeting anyone if someone has any issue related to this video kindly dm us on Insta and email us your we’ll try to resolve the issue Asap! \n\n#indiavspakistan #pakistanireactions #asiacup2023 #viratkohli",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RUyEDF0whD8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/RUyEDF0whD8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/RUyEDF0whD8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/RUyEDF0whD8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/RUyEDF0whD8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "CH WALEED RAUF",
      tags: [
        "India vs Pakistan",
        "Virat kohli 100 vs Pakistan",
        "Kl rahul 100 vs Pakistan",
        "Pakistan reaction on India vs Pakistan",
        "Pak media on India vs Pakistan",
        "Cricket",
        "Ch waleed rauf",
        "Ind vs pak",
        "Virat kohli and kl rahul batting vs Pakistan",
        "Kohli 100 vs Pakistan",
        "Pakistan reaction on virat kohli",
        "Pak media on kl rahul",
      ],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Kohli Humne tumhara kya bigara 😭😭 Ek or 100 Rahul & Kohli 100 PAKISTAN REACTION on IND vs PAK",
        description:
          "Hello This is Waleed Rauf \nIn this Video you’ll see my analysis \nIndia vs Pakistan \nVirat Kohli & Rahul 100\nMy Second Channel link\nhttps://youtube.com/channel/UCbCHvlm2kUhGfr211KXFjBw\n\nFollow me Instagram: https://instagram.com/chwaleedrauf\n\nFollow me on Facebook: https://www.facebook.com/chwaleedrauf/\n\nFollow me on Twitter: https://twitter.com/WaleedRauf20\n\nFollow me on TikTok: https://www.tiktok.com/@chwaleedrauf\n\nOther Channels ⬇️ \n•Nouman Rauf: https://youtube.com/@miannoumanrauf2851\n•Shameer: https://youtube.com/@ranashahmeerkhan\n•Rubina: https://youtube.com/@cookingwithrubinasheraz8283\n\nFor Urgent Contact:\nEmail me on\nbusinesswithwaleed28@gmail.com\n\nDisclaimer:\nThe video is made on fan base we are not intentionally targeting anyone if someone has any issue related to this video kindly dm us on Insta and email us your we’ll try to resolve the issue Asap! \n\n#indiavspakistan #pakistanireactions #asiacup2023 #viratkohli",
      },
      defaultAudioLanguage: "ur",
    },
    contentDetails: {
      duration: "PT2M31S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "300992",
      likeCount: "11340",
      favoriteCount: "0",
      commentCount: "1883",
    },
  },
  {
    kind: "youtube#video",
    etag: "O3sjvqaRw99BAYmKPVQv0FY6Cr8",
    id: "_JZ15pcsGm0",
    snippet: {
      publishedAt: "2023-09-11T13:43:24Z",
      channelId: "UCBLE3niXkzxWQIGzQojvOkw",
      title: "Virat & Rahul Manifest Brilliance | Caught Behind",
      description:
        "All about cricket analysis, expert opinions and match reviews by Rashid Latif and other cricketers\n\nAll content on this channel is subject to copyrights and use of this content on any media platform is an infringement. Content cannot be reproduced without prior written permission on the below email address.\n\nThis Channel is managed, marketed by HASHTAG (biz@hashtag.com.pk)\n\n#sports #crickethighlights #cricketanalyst #cricketnews #caughtbehind #babarazam #live",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_JZ15pcsGm0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_JZ15pcsGm0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_JZ15pcsGm0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/_JZ15pcsGm0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/_JZ15pcsGm0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Caught Behind",
      tags: [
        "PAK vs IND",
        "Aisa Cup 2023",
        "Asia Cup 2023 Live",
        "IND vs PAK Live match",
        "Shaheen Afridi",
        "Rashid Latif",
        "nauman niaz",
        "Pakistan Cricket",
        "Indian Cricket",
        "cricket",
        "cricket highlights",
        "cricket analysis",
        "caught behind IND vs PAK",
        "Caught behind cricket show",
        "rohit sharma",
        "virat kohli",
        "shubman gill",
        "naseem shah",
        "haris rauf",
        "Kl Rahul",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "Virat & Rahul Manifest Brilliance | Caught Behind",
        description:
          "All about cricket analysis, expert opinions and match reviews by Rashid Latif and other cricketers\n\nAll content on this channel is subject to copyrights and use of this content on any media platform is an infringement. Content cannot be reproduced without prior written permission on the below email address.\n\nThis Channel is managed, marketed by HASHTAG (biz@hashtag.com.pk)\n\n#sports #crickethighlights #cricketanalyst #cricketnews #caughtbehind #babarazam #live",
      },
      defaultAudioLanguage: "ur",
    },
    contentDetails: {
      duration: "PT23M33S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "167879",
      likeCount: "3597",
      favoriteCount: "0",
      commentCount: "448",
    },
  },
  {
    kind: "youtube#video",
    etag: "IP4-YYojpoxsMGsU0xoWU2bNlN0",
    id: "VSxOPw6wKMs",
    snippet: {
      publishedAt: "2023-09-11T07:29:16Z",
      channelId: "UCebC4x5l2-PQxg46Ucv9CsA",
      title:
        "Big Surprise- 25 Gifts For Amit on 25th Birthday🔥 | अमित भाई के होश उड़ गए",
      description:
        "Hello guys, is video me Crazy XYZ Team ne Amit bhai ko unke 25th birthday pe 25 gifts diye hain.\n\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcKN-VXhkZNpf5DRdHp9JA\nOur Shorts Channel- https://www.youtube.com/channel/UC7bZ8U3-WqDzHiyz6Hc6TmA\nFollow Me on Instagram- https://www.instagram.com/amit.yt/\nFollow Us On Facebook- https://www.facebook.com/CrazyXYZfb/",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VSxOPw6wKMs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VSxOPw6wKMs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VSxOPw6wKMs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/VSxOPw6wKMs/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/VSxOPw6wKMs/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Crazy XYZ",
      tags: [
        "crazy xyz 25 gifts",
        "amit bhai 25 gifts",
        "crazy xyz birthday",
        "amit sharma crazy xyz birthday",
        "birthday gift for amit bhai",
        "birthday surprise for crazy xyz",
        "birthday gift crazy xyz",
        "crazy xyz bmw bike",
        "bmw k 1600 b gift",
        "crazy xyz bike gift",
        "crazy xyz gets gifts",
        "crazy xyz",
        "birthday",
        "25th",
        "25 gifts",
        "25 gifts for crazy xyz",
        "crazy xyz birthday video",
        "the indian unboxer",
        "tiu",
        "best birthday surprise",
        "crazy",
        "xyz",
        "birthday bike",
        "giving bmw bike as a gift",
        "expensive gift",
      ],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Big Surprise- 25 Gifts For Amit on 25th Birthday🔥 | अमित भाई के होश उड़ गए",
        description:
          "Hello guys, is video me Crazy XYZ Team ne Amit bhai ko unke 25th birthday pe 25 gifts diye hain.\n\nOur Unboxing Channel- https://www.youtube.com/channel/UCIcKN-VXhkZNpf5DRdHp9JA\nOur Shorts Channel- https://www.youtube.com/channel/UC7bZ8U3-WqDzHiyz6Hc6TmA\nFollow Me on Instagram- https://www.instagram.com/amit.yt/\nFollow Us On Facebook- https://www.facebook.com/CrazyXYZfb/",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT19M10S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2225996",
      likeCount: "218826",
      favoriteCount: "0",
      commentCount: "31678",
    },
  },
  {
    kind: "youtube#video",
    etag: "UWARqnPVmHQzis9dLj3UyW-wXzY",
    id: "pd4bkqW-5XI",
    snippet: {
      publishedAt: "2023-09-09T09:05:59Z",
      channelId: "UC1hWVEOkra5LkP37qI6PVVg",
      title:
        "||ഭാര്യ രണ്ട്  ഭർത്താവ് ഒന്ന് ||Bharya Randu Bhartha Onnu||Malayalam Comedy||Sanju&Lakshmy||",
      description:
        "ഒരു ഭാര്യയെ തന്നെ കൊണ്ടുനടക്കുന്നത് വലിയ പാടാണ് അപ്പോ രണ്ടെണ്ണം ആയാലോ😂😂\nDownload Duolingo for Free - https://app.adjust.net.in/149c1d2f\n\nStory&Direction:Ashik&vishnu mr\nCamera&Editing:Akhil v devan\nCasting:Sanju, Lakshmy, Parvathy, Ashik, Vishnu\n\nMail id:sanju1madhu@gmail.com",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pd4bkqW-5XI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/pd4bkqW-5XI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/pd4bkqW-5XI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/pd4bkqW-5XI/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/pd4bkqW-5XI/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sanju and Lakshmy",
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "||ഭാര്യ രണ്ട്  ഭർത്താവ് ഒന്ന് ||Bharya Randu Bhartha Onnu||Malayalam Comedy||Sanju&Lakshmy||",
        description:
          "ഒരു ഭാര്യയെ തന്നെ കൊണ്ടുനടക്കുന്നത് വലിയ പാടാണ് അപ്പോ രണ്ടെണ്ണം ആയാലോ😂😂\nDownload Duolingo for Free - https://app.adjust.net.in/149c1d2f\n\nStory&Direction:Ashik&vishnu mr\nCamera&Editing:Akhil v devan\nCasting:Sanju, Lakshmy, Parvathy, Ashik, Vishnu\n\nMail id:sanju1madhu@gmail.com",
      },
    },
    contentDetails: {
      duration: "PT13M3S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "631951",
      likeCount: "18110",
      favoriteCount: "0",
      commentCount: "1214",
    },
  },
  {
    kind: "youtube#video",
    etag: "OSGToTUZymsahLCHCx_oJflFAsY",
    id: "SqUN3k1dMV4",
    snippet: {
      publishedAt: "2023-09-11T15:39:49Z",
      channelId: "UCqrJfqXKFIBs4llVPipWppg",
      title:
        "President hosts banquet in honour of Mohammed bin Salman Al Saud, Crown Prince & PM of Saudi Arabia",
      description:
        "Subscribe Now: https://goo.gl/XUQgqi Stay Updated! 🔔 \n\nPresident Droupadi Murmu hosts a banquet in honour of HRH Prince Mohammed bin Salman bin Abdulaziz Al Saud, Crown Prince & PM of Saudi Arabia at Rashtrapati Bhavan\n\nFollow The President of India: \n►Twitter: https://twitter.com/rashtrapatibhvn\n►Facebook: https://www.facebook.com/PresidentOfIndia/\n►Instagram: https://www.instagram.com/presidentofindia/\n►Subscribe to channel: https://www.youtube.com/presidentofindia\n►Website: http://presidentofindia.nic.in/",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SqUN3k1dMV4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/SqUN3k1dMV4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/SqUN3k1dMV4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/SqUN3k1dMV4/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/SqUN3k1dMV4/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "President of India",
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title:
          "President hosts banquet in honour of Mohammed bin Salman Al Saud, Crown Prince & PM of Saudi Arabia",
        description:
          "Subscribe Now: https://goo.gl/XUQgqi Stay Updated! 🔔 \n\nPresident Droupadi Murmu hosts a banquet in honour of HRH Prince Mohammed bin Salman bin Abdulaziz Al Saud, Crown Prince & PM of Saudi Arabia at Rashtrapati Bhavan\n\nFollow The President of India: \n►Twitter: https://twitter.com/rashtrapatibhvn\n►Facebook: https://www.facebook.com/PresidentOfIndia/\n►Instagram: https://www.instagram.com/presidentofindia/\n►Subscribe to channel: https://www.youtube.com/presidentofindia\n►Website: http://presidentofindia.nic.in/",
      },
    },
    contentDetails: {
      duration: "PT4M59S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: false,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "684050",
      likeCount: "15058",
      favoriteCount: "0",
      commentCount: "908",
    },
  },
  {
    kind: "youtube#video",
    etag: "Xc32CwaxEffNhZADkvaXxr3Wzg8",
    id: "suMuku2Bdy4",
    snippet: {
      publishedAt: "2023-09-11T08:17:16Z",
      channelId: "UCVXCo0W9pk2dDkEBNLhTt7A",
      title: "VIKRANT GUPTA LIVE FROM GROUND: Raining Heavily in Colombo",
      description:
        "IND VS PAK: Raining Heavily in Colombo right before the start of IND vs PAK big game.\n\nDownload Probo & Earn Money:- https://probo-in.onelink.me/1kre/SportsTakIndvsPakSept\nVisit TVS Eurogrip website for more details  - https://rb.gy/g0blh\nwww.okinawascooters.com \nTravel with Poorva Holidays and avail exciting offers on Domestic and International Bookings - https://poorvaholidays.com/home\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights and specific statistics of players and teams. You can also catch pre and post-match interviews of players, coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, मोहम्मद अजहरूद्दीन, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/suMuku2Bdy4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/suMuku2Bdy4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/suMuku2Bdy4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/suMuku2Bdy4/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/suMuku2Bdy4/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Sports Tak",
      tags: [
        "Sports Tak",
        "Sports Tak News",
        "Sports Tak Breaking",
        "ROHIT SHARMA 56 VS PAKISTAN",
        "SHUBMAN GILL 58 VS PAKISTAN",
        "VIRAT KOHLI BATTING",
        "VIRAT KOHLI VS PAKISTAN",
        "KL RAHUL COMEBACK",
        "KL RAHUL VS PAKISTAN",
        "KL RAHUL IN PLACE OF SHREYAS IYER",
        "SHAHEEN AFRIDI",
        "NASEEM SHAH",
        "RAIN STOPS PLAY",
        "RAIN IN INDIA VS PAKISTAN",
        "SPORTS TAK LIVE",
        "SPORTS TAK LIVE ON INDIA VS PAKISTAN",
        "INDIA VS PAKISTAN SUPER 4",
        "INDIA VS PAKISTAN",
        "IND VS PAK",
        "ASIA CUP",
        "ASIA CUP 2023",
        "IND VS PAK ASIA CUP",
      ],
      categoryId: "17",
      liveBroadcastContent: "none",
      localized: {
        title: "VIKRANT GUPTA LIVE FROM GROUND: Raining Heavily in Colombo",
        description:
          "IND VS PAK: Raining Heavily in Colombo right before the start of IND vs PAK big game.\n\nDownload Probo & Earn Money:- https://probo-in.onelink.me/1kre/SportsTakIndvsPakSept\nVisit TVS Eurogrip website for more details  - https://rb.gy/g0blh\nwww.okinawascooters.com \nTravel with Poorva Holidays and avail exciting offers on Domestic and International Bookings - https://poorvaholidays.com/home\nVisit https://thesportstak.com for lightning-fast live scores, special updates, highlights and specific statistics of players and teams. You can also catch pre and post-match interviews of players, coaches across sports on the website and the app. \n\nSports Tak on the Play Store: https://play.google.com/store/apps/details?id=com.sportstoday\nSports Tak on the App Store: https://apps.apple.com/in/app/sports-tak/id1562101475\n\nJoin this channel to get access to the perks:\nhttps://www.youtube.com/channel/UCVXCo0W9pk2dDkEBNLhTt7A/join\n\nAbout Sports Tak:\nस्पोर्ट्स तक (Sports Tak) खेल की दुनिया की हर छोटी-बड़ी खबर आपके लिए लाता है। स्पोर्ट्स तक (Sports Tak) के यू ट्यूब प्लेटफॉर्म पर आपको मिलेगी हर ब्रेकिंग न्यूज, विश्लेशण और बड़े-बड़े खिलाड़ियों के EXCLUSIVE इंटरव्यू। साथ ही सौरव गांगुली, हरभजन सिंह, मोहम्मद अजहरूद्दीन, मदनलाल जैसे क्रिकेट दिग्गज आपके लिए खेल पर चर्चा करेंगे और आपके सवालों के जवाब भी देंगे। खेल जगत की हर खबर से रूबरू होने के लिए सब्सक्राइब/Subscribe कीजिए स्पोर्ट्स तक (Sports Tak)। \n \nYou can follow स्पोर्ट्स तक (Sports Tak) on:\n \nSports Tak Youtube: https://www.youtube.com/sportstak\nSports Tak Facebook: https://www.facebook.com/sportstak/\nSports Tak Twitter: https://twitter.com/sports_tak\nSports Tak Instagram: https://www.instagram.com/sportstakofficial",
      },
      defaultAudioLanguage: "en-IN",
    },
    contentDetails: {
      duration: "PT15M54S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "528010",
      likeCount: "14047",
      favoriteCount: "0",
      commentCount: "996",
    },
  },
  {
    kind: "youtube#video",
    etag: "AvNF4sFSjjQbKeRHRUFtx6fll5E",
    id: "vvvfensGkl4",
    snippet: {
      publishedAt: "2023-09-10T12:10:00Z",
      channelId: "UC-LPIU24bQXVljUXivKEeRQ",
      title:
        "Ek Hazaaron Mein Meri Behna Hai | एक हज़ारों में मेरी बहना है | Viren ke saamne aaya Maanvi ka sach!",
      description:
        "Click here to Subscribe *Star Plus* : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ\n\n*Free Subscription* : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ?sub_confirmation=1\n\nWatch More Like This : https://www.youtube.com/starplus/videos\n\n\n#ekhazaaronmeinmeribehnahai \n#drama #family\n#krystledsouza \n#karantacker\n#jeevika\n#viren\n#tvshow #tvserial \n#indianserial #youtube \n#youtubevideo \n#viren #samne #maanvi \n#sach \n#starplus \n\n\n\nConnect with Star Plus on Social Media\n\n*Hotstar* : http://www.hotstar.com/#!/star-plus-821\n*Facebook* : http://www.facebook.com/starplus.in\n*Instagram* : https://www.instagram.com/starplus/\n*Twitter* : https://twitter.com/StarPlus\n\nEk Hazaaron Mein Meri Behna Hai | एक हज़ारों में मेरी बहना है | Viren ke saamne aaya Maanvi ka sach!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vvvfensGkl4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vvvfensGkl4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vvvfensGkl4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/vvvfensGkl4/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/vvvfensGkl4/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "StarPlus",
      tags: [
        "Romantic",
        "Magic",
        "Dance",
        "Emotional",
        "Drama",
        "Dialogue",
        "Dhara",
        "Nazar",
        "episode",
        "highlights",
        "full episodes",
        "special",
        "funny",
        "Plus",
        "Rishta Wahi Baat Nayi",
        "hotstar",
        "shorts",
        "family",
        "family comedy",
        "comedy drama",
        "best drama",
        "best comedy",
        "best emotional",
        "horror",
        "horror show",
        "thriller",
        "ekhazaaronmeinmeribehnahai",
        "krystledsouza",
        "karantacker",
        "jeevika",
        "viren",
        "ekhazaaronmeinmeribehnahai off air",
        "Viren ke saamne aaya Maanvi ka sach!",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Ek Hazaaron Mein Meri Behna Hai | एक हज़ारों में मेरी बहना है | Viren ke saamne aaya Maanvi ka sach!",
        description:
          "Click here to Subscribe *Star Plus* : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ\n\n*Free Subscription* : https://www.youtube.com/channel/UC-LPIU24bQXVljUXivKEeRQ?sub_confirmation=1\n\nWatch More Like This : https://www.youtube.com/starplus/videos\n\n\n#ekhazaaronmeinmeribehnahai \n#drama #family\n#krystledsouza \n#karantacker\n#jeevika\n#viren\n#tvshow #tvserial \n#indianserial #youtube \n#youtubevideo \n#viren #samne #maanvi \n#sach \n#starplus \n\n\n\nConnect with Star Plus on Social Media\n\n*Hotstar* : http://www.hotstar.com/#!/star-plus-821\n*Facebook* : http://www.facebook.com/starplus.in\n*Instagram* : https://www.instagram.com/starplus/\n*Twitter* : https://twitter.com/StarPlus\n\nEk Hazaaron Mein Meri Behna Hai | एक हज़ारों में मेरी बहना है | Viren ke saamne aaya Maanvi ka sach!",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT19M42S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      regionRestriction: {
        blocked: ["GB", "GG", "ID", "IE", "IM", "JE", "ZA"],
      },
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "887256",
      likeCount: "11556",
      favoriteCount: "0",
      commentCount: "138",
    },
  },
  {
    kind: "youtube#video",
    etag: "FDuUK2A04plewxrSgdrqP0v4ryM",
    id: "4Kb4mBhJZuE",
    snippet: {
      publishedAt: "2023-09-11T15:45:00Z",
      channelId: "UC4JCksJF76g_MdzPVBJoC3Q",
      title: "New! Mayi Ri | Episode 42 | Promo | ARY Digital Drama",
      description:
        "New! Mayi Ri Episode 42 | Promo | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 11th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4Kb4mBhJZuE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/4Kb4mBhJZuE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/4Kb4mBhJZuE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/4Kb4mBhJZuE/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/4Kb4mBhJZuE/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "ARY Digital HD",
      tags: [
        "Mayi Ri drama",
        "Mayi Ri episode 42 promo",
        "Mayi Ri episode 42 promo 11 Sep 2023",
        "pakistani drama Mayi ri",
        "Mayi Ri ARY Digital drama 2023",
        "Mayi Ri New Drama 2023",
        "Aina Asif",
        "Naumaan Ijaz",
        "Maya Khan",
        "Mayi Ri New Drama ep 42 promo ARY Digital",
        "Mayi Ri Pakistani Drama 2023",
        "Mayi Ri Episode 42 promo watch",
        "Mayi Ri Drama Aina Asif",
        "new drama mayi ri",
        "Aina Asif Mayi Ri",
        "ARY Digital",
        "ARY",
        "Watch Mayi Ri Drama",
        "Watch Mayi Ri Daily",
        "Mayi Ri New episode 11th September 2023",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "New! Mayi Ri | Episode 42 | Promo | ARY Digital Drama",
        description:
          "New! Mayi Ri Episode 42 | Promo | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 11th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT34S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1935391",
      likeCount: "30530",
      favoriteCount: "0",
      commentCount: "1171",
    },
  },
  {
    kind: "youtube#video",
    etag: "sV45cc4847-83Nn67vvZc21uuP0",
    id: "bX7GseB5jv4",
    snippet: {
      publishedAt: "2023-09-10T16:09:04Z",
      channelId: "UCruMs8kL2fHjxNIymX53VSw",
      title:
        "Chitra Saradhi || Episode - 3 || Soniya Singh || Pavan Sidhu || Infinitum Media",
      description:
        '#Ad #khiladiapp #Paidpartnership\n\n"Chitra Saradhi" is a Telugu Romcom Web Series featuring Soniya Singh & Pavan Sidhu as leads.\n\nDisclaimer: We do not intend to promote investment/gambling of any kind.  Viewer discretion is advised. If your current residence is from Andhra, Assam, Odisha, Telangana, Nagaland, and Sikkim, you are advised to not participate.\n\nTo Know About Khiladi: https://bit.ly/45RfJXr\n\nThis activity promotes a game and doesn’t intend to promote any kind of betting/gambling.\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nCast: Soniya Singh, Pavan Sidhu, Harshini Balla, Bhanu Prakash.M\n\nProduced by Vandana Bandaru\n\nWritten and directed by GVK\n\nDialogues: Pushpa Praveen\n\nAssociate Director: Sreekanth\n\nBrands Manager: Bhargav.T\n\nCinematography: Bhanu\n\nEditing:  Venkatesh Chunduru\n\nPainting Artist: Prapul Nishanth\n\nPoster Designer: Nikhil Chotu\n\nSound Engineer: Venkat, Bhaskar.\n\nExecutive Producer: Chandu JC\n\n#ChitraSaradhiWebSeries #SoniyaSingh #PavanSidhu #InfinitumMedia \n\nPresented by Infinitum Network Solutions.\n\nKhiladi is an online gaming app. We do not promote online  betting/gambling. Viewer discretion is advised. Please play at your own risk.',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/bX7GseB5jv4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/bX7GseB5jv4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/bX7GseB5jv4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/bX7GseB5jv4/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/bX7GseB5jv4/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vayyari Bhama",
      tags: [
        "Chitra Saradhi Web series",
        "soniya singh",
        "pavan sidhu",
        "soniya singh pavan sidhu short films",
        "soniya singh pavan sidhu",
        "telugu web series",
        "sonia singh short films telugu latest",
        "soniya singh short films",
        "pavan sidhu short films telugu",
        "telugu short films",
        "telugu short films 2023 latest",
        "soniya singh latest",
        "short films telugu 2023 latest",
        "telugu love short films latest",
        "telugu new short films latest",
        "infinitum media",
        "chitra saradhi episode 3",
        "chitra saradhi web series ep 3",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "te",
      localized: {
        title:
          "Chitra Saradhi || Episode - 3 || Soniya Singh || Pavan Sidhu || Infinitum Media",
        description:
          '#Ad #khiladiapp #Paidpartnership\n\n"Chitra Saradhi" is a Telugu Romcom Web Series featuring Soniya Singh & Pavan Sidhu as leads.\n\nDisclaimer: We do not intend to promote investment/gambling of any kind.  Viewer discretion is advised. If your current residence is from Andhra, Assam, Odisha, Telangana, Nagaland, and Sikkim, you are advised to not participate.\n\nTo Know About Khiladi: https://bit.ly/45RfJXr\n\nThis activity promotes a game and doesn’t intend to promote any kind of betting/gambling.\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nCast: Soniya Singh, Pavan Sidhu, Harshini Balla, Bhanu Prakash.M\n\nProduced by Vandana Bandaru\n\nWritten and directed by GVK\n\nDialogues: Pushpa Praveen\n\nAssociate Director: Sreekanth\n\nBrands Manager: Bhargav.T\n\nCinematography: Bhanu\n\nEditing:  Venkatesh Chunduru\n\nPainting Artist: Prapul Nishanth\n\nPoster Designer: Nikhil Chotu\n\nSound Engineer: Venkat, Bhaskar.\n\nExecutive Producer: Chandu JC\n\n#ChitraSaradhiWebSeries #SoniyaSingh #PavanSidhu #InfinitumMedia \n\nPresented by Infinitum Network Solutions.\n\nKhiladi is an online gaming app. We do not promote online  betting/gambling. Viewer discretion is advised. Please play at your own risk.',
      },
      defaultAudioLanguage: "te",
    },
    contentDetails: {
      duration: "PT21M32S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "161323",
      likeCount: "8795",
      favoriteCount: "0",
      commentCount: "181",
    },
  },
  {
    kind: "youtube#video",
    etag: "8DKqjOFOs5VnfY2rR6n_ogr_Das",
    id: "Cw3Wg410_V0",
    snippet: {
      publishedAt: "2023-09-09T15:30:05Z",
      channelId: "UCzXpAx4v6rFLYXkJZ5nmSvQ",
      title:
        "Team CID को एक Plot की खुदाई में मिले 2 Skeleton |CID | A Tale of Couples |9 Sep 2023 | Full Episode",
      description:
        "Click here to Subscribe to LIV Crime: \nhttps://www.youtube.com/channel/UCzXpAx4v6rFLYXkJZ5nmSvQ?sub_confirmation=1\n\nA decomposed body is found inside a well by an unsuspecting couple. After identifying the body CID is shocked to find that the victim had received a death sentence and had been hanged three years ago. How can a man who is already dead, come alive and die again three years later? Is this a big conspiracy? The cops must solve this mystery and solve the murder of this mysterious man.\n\nShow Name: CID \nShow Cast & Characters: \n• Shivaji Satam as ACP Pradyuman\n• Dinesh Phadnis as Inspector Fredricks aka Freddy\n• Ashutosh Gowariker as Sr. Inspector Virendra\n• Dayanand Shetty as Sr. Inspector Daya\n• Narendra Gupta as Dr. R. P. Salunkhe\n• Aditya Srivastava as Sr. Inspector Abhijeet\n• Shraddha Musale as Dr. Tarika\n• Ansha Sayed as Sub-Inspector Purvi\nEpisode No:  969\nProducer: Brijendra Pal Singh\n \n#CID #सीआईडी #CID2023 #CrimeThrillers #CrimeMysteries #Mysteries #CIDSeries #LIVCrime #NewCID #LatestCID #Crime #taleofcouples\n\nAbout CID:\n-----------------\nThe first thrilling investigative series on Indian Television is today one of the most popular shows on Sony Entertainment Television. Dramatic and absolutely unpredictable, C.I.D. has captivated viewers over the last eleven years and continues to keep audiences glued to their television sets with its thrilling plots and excitement. Also interwoven in its fast-paced plots are the personal challenges that the C.I.D. team faces with non-stop adventure, tremendous pressure, and risk, all in the name of duty. The series consists of police procedural stories dealing with investigation, detection, and suspense. The protagonists of the serial are an elite group of police officers belonging to the Crime Investigation Department of the police force, led by ACP Pradyuman [played by the dynamic Shivaji Satam]. While the stories are plausible, there is an emphasis on dramatic plotting and technical complexities faced by the police. At every stage, the plot throws up intriguing twists and turns to keep the officers on the move as they track criminals, led by the smallest of clues.\n\nClick here to keep watching CID- A tale of Couples:\nhttps://www.youtube.com/playlist?list=PL0y08jtgaKIWPK_8w3hajD-E_TI-gSoeq\n\nTeam CID को एक Plot की खुदाई में मिले 2 Skeleton |CID | A Tale of Couples |9 Sep 2023 | Full Episode",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Cw3Wg410_V0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Cw3Wg410_V0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Cw3Wg410_V0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/Cw3Wg410_V0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/Cw3Wg410_V0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "LIV Crime",
      tags: [
        "cid 2022",
        "cid new episode 2022",
        "cid abhijeet",
        "cid all episode",
        "best of cid",
        "sony tv cid",
        "crime show",
        "detective series",
        "cid daya",
        "CID latest episode",
        "sony cid episode",
        "cid full episode",
        "best of CID",
        "cid crime cases",
        "best cid episodes online",
        "सीआईडी",
        "cid best cases",
        "hindi crime show cid",
        "liv crime new channel",
        "cid special episode",
        "cid cases",
        "daya cid",
        "abhijeet cid",
        "cid daya and abhijeet",
        "New CID",
        "Latest CID",
        "tale of couples",
        "crime",
        "cid ep 969",
        "cid tale of couples",
      ],
      categoryId: "28",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Team CID को एक Plot की खुदाई में मिले 2 Skeleton |CID | A Tale of Couples |9 Sep 2023 | Full Episode",
        description:
          "Click here to Subscribe to LIV Crime: \nhttps://www.youtube.com/channel/UCzXpAx4v6rFLYXkJZ5nmSvQ?sub_confirmation=1\n\nA decomposed body is found inside a well by an unsuspecting couple. After identifying the body CID is shocked to find that the victim had received a death sentence and had been hanged three years ago. How can a man who is already dead, come alive and die again three years later? Is this a big conspiracy? The cops must solve this mystery and solve the murder of this mysterious man.\n\nShow Name: CID \nShow Cast & Characters: \n• Shivaji Satam as ACP Pradyuman\n• Dinesh Phadnis as Inspector Fredricks aka Freddy\n• Ashutosh Gowariker as Sr. Inspector Virendra\n• Dayanand Shetty as Sr. Inspector Daya\n• Narendra Gupta as Dr. R. P. Salunkhe\n• Aditya Srivastava as Sr. Inspector Abhijeet\n• Shraddha Musale as Dr. Tarika\n• Ansha Sayed as Sub-Inspector Purvi\nEpisode No:  969\nProducer: Brijendra Pal Singh\n \n#CID #सीआईडी #CID2023 #CrimeThrillers #CrimeMysteries #Mysteries #CIDSeries #LIVCrime #NewCID #LatestCID #Crime #taleofcouples\n\nAbout CID:\n-----------------\nThe first thrilling investigative series on Indian Television is today one of the most popular shows on Sony Entertainment Television. Dramatic and absolutely unpredictable, C.I.D. has captivated viewers over the last eleven years and continues to keep audiences glued to their television sets with its thrilling plots and excitement. Also interwoven in its fast-paced plots are the personal challenges that the C.I.D. team faces with non-stop adventure, tremendous pressure, and risk, all in the name of duty. The series consists of police procedural stories dealing with investigation, detection, and suspense. The protagonists of the serial are an elite group of police officers belonging to the Crime Investigation Department of the police force, led by ACP Pradyuman [played by the dynamic Shivaji Satam]. While the stories are plausible, there is an emphasis on dramatic plotting and technical complexities faced by the police. At every stage, the plot throws up intriguing twists and turns to keep the officers on the move as they track criminals, led by the smallest of clues.\n\nClick here to keep watching CID- A tale of Couples:\nhttps://www.youtube.com/playlist?list=PL0y08jtgaKIWPK_8w3hajD-E_TI-gSoeq\n\nTeam CID को एक Plot की खुदाई में मिले 2 Skeleton |CID | A Tale of Couples |9 Sep 2023 | Full Episode",
      },
      defaultAudioLanguage: "zxx",
    },
    contentDetails: {
      duration: "PT42M59S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      regionRestriction: {
        blocked: ["BY", "CU", "IR", "KP", "SD", "SY", "UA"],
      },
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "2042341",
      likeCount: "21912",
      favoriteCount: "0",
      commentCount: "529",
    },
  },
  {
    kind: "youtube#video",
    etag: "Pp-53WODgn8bquTrsKYlzDKxbpM",
    id: "Tn6lU5Of-3A",
    snippet: {
      publishedAt: "2023-09-11T13:17:01Z",
      channelId: "UCuSD-BXA1p8S3HfE8LsEkHA",
      title:
        "MUTTON OMELETTE | Huge Egg With Mutton Meet Omelette Recipe Village Food",
      description: "Protein Rich Omeltte Recipe",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Tn6lU5Of-3A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Tn6lU5Of-3A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Tn6lU5Of-3A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/Tn6lU5Of-3A/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/Tn6lU5Of-3A/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Village Food Channel",
      tags: [
        "omelette",
        "egg omelette",
        "omelette recipe",
        "chicken omelette",
        "chicken recipe",
        "egg recipes",
        "village food",
      ],
      categoryId: "26",
      liveBroadcastContent: "none",
      localized: {
        title:
          "MUTTON OMELETTE | Huge Egg With Mutton Meet Omelette Recipe Village Food",
        description: "Protein Rich Omeltte Recipe",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT11M38S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "542047",
      likeCount: "32330",
      favoriteCount: "0",
      commentCount: "1769",
    },
  },
  {
    kind: "youtube#video",
    etag: "Z6Ji3PjD3YofvG0DXkxL0zFX0Hc",
    id: "0NDKQWztFmY",
    snippet: {
      publishedAt: "2023-09-08T15:00:16Z",
      channelId: "UC4JCksJF76g_MdzPVBJoC3Q",
      title:
        "Mayi Ri | Episode 38 | 8 September 2023 (English Subtitles) ARY Digital Drama",
      description:
        "New! Mayi Ri Episode 38 | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 8th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0NDKQWztFmY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0NDKQWztFmY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0NDKQWztFmY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/0NDKQWztFmY/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/0NDKQWztFmY/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "ARY Digital HD",
      tags: [
        "Mayi Ri drama",
        "Mayi Ri episode 38",
        "Mayi Ri episode 38 8 Sep 2023",
        "pakistani drama Mayi ri",
        "Aina Asif New Drama Mayi Ri",
        "Mayi Ri ARY Digital drama 2023",
        "Mayi Ri New Drama 2023",
        "Aina Asif",
        "Naumaan Ijaz",
        "Maya Khan",
        "Mayi Ri New Drama ep 38 ARY Digital",
        "Mayi Ri Pakistani Drama 2023",
        "Mayi Ri Episode 38 watch",
        "Mayi Ri Drama Aina Asif",
        "new drama mayi ri",
        "Aina Asif Mayi Ri",
        "ARY Digital",
        "ARY",
        "Watch Mayi Ri Drama",
        "Watch Mayi Ri Daily",
        "Mayi Ri New episode 7th September 2023",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "Mayi Ri | Episode 38 | 8 September 2023 (English Subtitles) ARY Digital Drama",
        description:
          "New! Mayi Ri Episode 38 | Aina Asif | Samar Abbas | Naumaan Ijaz | Maya Khan | Maria Wasti | 8th Sep 2023 | ARY Digital Drama \n\nWatch all Episodes of Mayi Ri Here 👉 https://bit.ly/3DEsbhc\n\nSubscribe 👉 https://bit.ly/2PiWK68\n\nMayi Ri is an exceptionally written drama whose story highlights the rotten fabric of society. Child marriage is an issue that is prevalent in our society and Mayi Ri depicts it beautifully.\n\nCast:\nAina Asif\nSamar Abbas\nNaumaan Ijaz\nMaria Wasti\nMaya Khan\nSajida Syed\nSaad Faridi\nAmna Malik\nParas Masroor\nUsman Mazhar\nDiya Mughal.\n\nDirected By: Meesam Naqvi\nConcept & Story: Sana Fahad\n\nWatch Mayi Ri daily at 7:00 PM, on ARY Digital!\n\n#MayiRi #AinaAsif #NaumaanIjaz #SamarAbbas #MariaWasti #MayaKhan #ParasMasroor #diyamughal \n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT40M12S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "8875945",
      likeCount: "184990",
      favoriteCount: "0",
      commentCount: "5418",
    },
  },
  {
    kind: "youtube#video",
    etag: "pyH3K5_eFwihZxchVc9B7qbHjq4",
    id: "yFoFZS_J-h0",
    snippet: {
      publishedAt: "2023-09-10T13:54:35Z",
      channelId: "UCGLiE4bZSUnly-R-Ij1MiYQ",
      title: "మా ఇంటి వరలక్ష్మి వ్రతం || Haritha Jackie || Strikers",
      description:
        "#HarithaJackie #VaralakshmiVratham #VaralakshmiPooja #HarithaJackieVlogs #Strikers\n\nమా ఇంటి వరలక్ష్మి వ్రతం || Haritha Jackie || Strikers\n\nEvents by sruthi\nInstagram link - https://www.instagram.com/eventsbysruthi\n\nThis video is Produced by #Strikers​​​​​\n\nFollow Me Here :\nInstagram : https://www.instagram.com/harithajackie/\n------------------------------\nFor Branding and Collaborations:\n\nMail us @ sandeep@strikersdigital.com\n\nLinkedIn - https://www.linkedin.com/in/sandeep-miryala-0a348686\n\nCall us @ 9553191194",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yFoFZS_J-h0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yFoFZS_J-h0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yFoFZS_J-h0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/yFoFZS_J-h0/sddefault.jpg",
          width: 640,
          height: 480,
        },
      },
      channelTitle: "Haritha Jackie",
      tags: [
        "Haritha Jackie",
        "haritha jackie Channel",
        "haritha jackie YouTube Channel",
        "haritha jackie family",
        "haritha jackie Vlogs",
        "haritha jackie Videos",
        "haritha jackie latest videos",
        "haritha latest video",
        "haritha jackie mother",
        "Haritha Jackie daughter",
        "actress Haritha Jackie",
        "Mother birthday celebrations",
        "haritha jackie varalkshami vratham",
        "haritha jackie varalkshami vratham video",
        "haritha jackie varalkshami vratham vlog",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "మా ఇంటి వరలక్ష్మి వ్రతం || Haritha Jackie || Strikers",
        description:
          "#HarithaJackie #VaralakshmiVratham #VaralakshmiPooja #HarithaJackieVlogs #Strikers\n\nమా ఇంటి వరలక్ష్మి వ్రతం || Haritha Jackie || Strikers\n\nEvents by sruthi\nInstagram link - https://www.instagram.com/eventsbysruthi\n\nThis video is Produced by #Strikers​​​​​\n\nFollow Me Here :\nInstagram : https://www.instagram.com/harithajackie/\n------------------------------\nFor Branding and Collaborations:\n\nMail us @ sandeep@strikersdigital.com\n\nLinkedIn - https://www.linkedin.com/in/sandeep-miryala-0a348686\n\nCall us @ 9553191194",
      },
      defaultAudioLanguage: "te",
    },
    contentDetails: {
      duration: "PT49M1S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "540011",
      likeCount: "10591",
      favoriteCount: "0",
      commentCount: "702",
    },
  },
  {
    kind: "youtube#video",
    etag: "46BVq-E99U7OVELVXLk_wTpFlms",
    id: "P5IxgySD_2E",
    snippet: {
      publishedAt: "2023-09-10T11:30:07Z",
      channelId: "UCOJlrO9zmDYSlIKrwbUg1hQ",
      title:
        "Pellivaramandi Web Series | Ep - 7 | Prasad Behara | Viraajitha | Kanchan Bamne | Infinitum Media",
      description:
        '"Pellivaramandi" is a Telugu Romcom Web Series Featuring Prasad Behara, Kanchan Bamne & Viraajitha as leads.\n\nDisclaimer: We do not intend to promote investment/gambling of any kind.  Viewer discretion is advised. If your current residence is from Andhra, Assam, Odisha, Telangana, Nagaland, and Sikkim, you are advised to not participate.\n\nTo Know About Khiladi: https://bit.ly/45RfJXr\n\nThis activity promotes a game and doesn’t intend to promote any kind of betting/gambling.\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nCast: Prasad Behara, Kanchan Bamne, Viraajitha, JDV Prasad, Chandu JC, Torani Makana, Pragnya Prathyusha, Akshay Sriniwas, Phani Prakash.\n\nProduced by Vandana Bandaru\n                       \nWritten and Directed by Prasad Behara\n\nDOP: Charles Raj\n\nEditing: Chinna\n\nTitle Animation: Katam Reddy\n\nPublicity Designer: Nikhil Chotu, Shiva Krishna.\n\nSound Engineer: Venkat & Bhaskar.\n\nLine producer: Sharif Nani\n\nExecutive Producer: Chandu JC\n\n#Pellivaramandi #PrasadBehara #Viraajitha #KanchanBamne #InfinitumMedia #TeluguWebSeries \n\nPresented by #Infinitum Network Solutions.\n\nKhiladi is an online gaming app. We do not promote online betting/gambling. Viewer discretion is advised. Please play at your own risk.',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/P5IxgySD_2E/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/P5IxgySD_2E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/P5IxgySD_2E/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/P5IxgySD_2E/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/P5IxgySD_2E/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Infinitum RomCom",
      tags: [
        "pellivaramandi web series",
        "pellivaramandi web series episode 7",
        "pellivaramandi episode 7",
        "prasad behara",
        "prasad behara latest video",
        "prasad behera videos",
        "prasad behara pellivaramandi",
        "kanchan bamne short films",
        "prasad behara kanchan bamne",
        "prasad behara short films",
        "telugu web series",
        "telugu web series latest 2023",
        "telugu short films",
        "telugu short films 2023 latest",
        "telugu new short films latest",
        "infinitum media",
        "pellivaramandi",
        "prasad behara comedy",
        "viraajita short film",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "Pellivaramandi Web Series | Ep - 7 | Prasad Behara | Viraajitha | Kanchan Bamne | Infinitum Media",
        description:
          '"Pellivaramandi" is a Telugu Romcom Web Series Featuring Prasad Behara, Kanchan Bamne & Viraajitha as leads.\n\nDisclaimer: We do not intend to promote investment/gambling of any kind.  Viewer discretion is advised. If your current residence is from Andhra, Assam, Odisha, Telangana, Nagaland, and Sikkim, you are advised to not participate.\n\nTo Know About Khiladi: https://bit.ly/45RfJXr\n\nThis activity promotes a game and doesn’t intend to promote any kind of betting/gambling.\n\nFor Brand Inquiries & Collaborations \nEmail us at brands@infinitumnetwork.in\n\nCast: Prasad Behara, Kanchan Bamne, Viraajitha, JDV Prasad, Chandu JC, Torani Makana, Pragnya Prathyusha, Akshay Sriniwas, Phani Prakash.\n\nProduced by Vandana Bandaru\n                       \nWritten and Directed by Prasad Behara\n\nDOP: Charles Raj\n\nEditing: Chinna\n\nTitle Animation: Katam Reddy\n\nPublicity Designer: Nikhil Chotu, Shiva Krishna.\n\nSound Engineer: Venkat & Bhaskar.\n\nLine producer: Sharif Nani\n\nExecutive Producer: Chandu JC\n\n#Pellivaramandi #PrasadBehara #Viraajitha #KanchanBamne #InfinitumMedia #TeluguWebSeries \n\nPresented by #Infinitum Network Solutions.\n\nKhiladi is an online gaming app. We do not promote online betting/gambling. Viewer discretion is advised. Please play at your own risk.',
      },
      defaultAudioLanguage: "te",
    },
    contentDetails: {
      duration: "PT16M31S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "881607",
      likeCount: "48185",
      favoriteCount: "0",
      commentCount: "3206",
    },
  },
  {
    kind: "youtube#video",
    etag: "s4-N60OsBAm1LZKXPbKi8WEorkg",
    id: "SfBdO6NSYRQ",
    snippet: {
      publishedAt: "2023-09-09T08:32:14Z",
      channelId: "UCOArNMtCQ8c_mUmTOJBf7_Q",
      title: "OMEGLE || Found my Bride on OMEGLE 😍",
      description:
        "https://probo-in.onelink.me/1kre/AdarshUCSept\n\nSubscribe new Channel -  https://www.youtube.com/channel/UCei_ZshW51oSzXmUdGTyg3Q\n\n\n\nJoin this channel to get access to perks:\nhttps://www.youtube.com/channel/UCOArNMtCQ8c_mUmTOJBf7_Q/join",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SfBdO6NSYRQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/SfBdO6NSYRQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/SfBdO6NSYRQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/SfBdO6NSYRQ/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/SfBdO6NSYRQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "adarshuc",
      tags: [
        "omegle india",
        "omegle funny",
        "adarsh singh omegle",
        "adarsh singh",
        "adarshuc",
        "OMEGLE || Found my Bride on OMEGLE",
        "found my true love on",
        "found my true love on omegle",
        "adarsh omegle video",
        "adarsh uc",
        "omegle",
        "Indian Boy Finds Love on Omegle",
        "omegle roasting",
        "omegle adarsh singh",
        "adarshuc omegle",
        "omegle adarsh",
        "cute indian girl on omegle",
        "omegle indian",
        "indian girl on omegle",
        "indian girl omegle",
        "roasting on omegle",
        "cute indian girl omegle",
        "funniest omegle ever",
        "indian on omegle",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "OMEGLE || Found my Bride on OMEGLE 😍",
        description:
          "https://probo-in.onelink.me/1kre/AdarshUCSept\n\nSubscribe new Channel -  https://www.youtube.com/channel/UCei_ZshW51oSzXmUdGTyg3Q\n\n\n\nJoin this channel to get access to perks:\nhttps://www.youtube.com/channel/UCOArNMtCQ8c_mUmTOJBf7_Q/join",
      },
    },
    contentDetails: {
      duration: "PT8M54S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "659853",
      likeCount: "106480",
      favoriteCount: "0",
      commentCount: "2392",
    },
  },
  {
    kind: "youtube#video",
    etag: "M9iCqpW5rHydzS0zov_-mQvjrDw",
    id: "FxP0kU6BjE0",
    snippet: {
      publishedAt: "2023-09-10T04:30:10Z",
      channelId: "UCiPmhfdCL06cSVTXKabF0Zg",
      title: "Single Mother Alaparaigal | Nakkalites",
      description:
        "#ad\n\nLink: http://bit.ly/Nakkalites777\nPromo Code: Nakka\nFast registration: https://bit.ly/MBWHATSAPP777\n\nThis Video revolves around a single mother who come across stereotypical chaos which is broken by their children later on.  \n\n #nakkalites #singlemother #singlemotheralaparaigal \n\n-----------------------------------------------------------------\n\nFor Business \nContact us - business@nakkalites.in\n\n-----------------------------------------------------------------\n\nDirection\nMithun\n\nScript\nPrasanna Balachandran\nDilip\n\nCinematography & DI\nArun Kumar\n\nEditing & Designs\nElankavin\n\nSound Design\nHari\n\nAsst. Direction\nMahi Priyanga\n\nAsst. Cinematography\nYoga Sakthivel\nKarthik\n\nProduction Manager\nSiva\nGowtham\n\nChannel Head\nSarath \n\nCreative Head\nKrishnakanth N\n\nExecutive Head\nMithun\n\nCast\nHarshini\nMeena\nParimala\nNeela \nThilagavathi\nSavitri\nRamkumar\nSivanmoorthi\nSundharaj\nGopinath\nAadhan Kumar\nManickam\nVigneshwar \n\n#nakkalites #singlemother #alaparaigal \n___________________________________________\n\nFollow Us On\nhttps://www.instagram.com/nakkalites/\nhttps://twitter.com/Nakkalites\nhttps://www.facebook.com/Nakkalites\nhttps://www.linkedin.com/company/nakkalites/\n___________________________________________\n\nIn Association with DIVO - Digital Partner\nWebsite   - http://web.divo.in/\nInstagram - https://www.instagram.com/divomovies/\nFacebook  - http://www.facebook.com/divomovies\nTwitter   - https://twitter.com/divomovies",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FxP0kU6BjE0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/FxP0kU6BjE0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/FxP0kU6BjE0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/FxP0kU6BjE0/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/FxP0kU6BjE0/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Nakkalites",
      tags: [
        "nakkalites",
        "alumbunaties nakkalites",
        "nakkalites alumbunaties",
        "nakkalites in tamil",
        "nakkalites alaparaigal",
        "nakalites",
        "nakkalites new episode",
        "nakkalites channel",
        "alaparaigal",
        "appa alaparaigal",
        "akka thambi alaparaigal",
        "latest",
        "yt",
        "trending",
        "comedy",
        "funny",
        "nakkalites latest",
        "nakkalites tamil",
        "nakkalites new video",
        "nakkalities",
        "nakkalites nakkalites",
        "f zone nakkalites",
        "nakkalites fzone",
        "nakkalites f zone",
        "nakkallites",
        "nakkalites fzone in tamil",
        "single mother",
        "single",
        "mother",
        "alaiparaigal",
      ],
      categoryId: "23",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title: "Single Mother Alaparaigal | Nakkalites",
        description:
          "#ad\n\nLink: http://bit.ly/Nakkalites777\nPromo Code: Nakka\nFast registration: https://bit.ly/MBWHATSAPP777\n\nThis Video revolves around a single mother who come across stereotypical chaos which is broken by their children later on.  \n\n #nakkalites #singlemother #singlemotheralaparaigal \n\n-----------------------------------------------------------------\n\nFor Business \nContact us - business@nakkalites.in\n\n-----------------------------------------------------------------\n\nDirection\nMithun\n\nScript\nPrasanna Balachandran\nDilip\n\nCinematography & DI\nArun Kumar\n\nEditing & Designs\nElankavin\n\nSound Design\nHari\n\nAsst. Direction\nMahi Priyanga\n\nAsst. Cinematography\nYoga Sakthivel\nKarthik\n\nProduction Manager\nSiva\nGowtham\n\nChannel Head\nSarath \n\nCreative Head\nKrishnakanth N\n\nExecutive Head\nMithun\n\nCast\nHarshini\nMeena\nParimala\nNeela \nThilagavathi\nSavitri\nRamkumar\nSivanmoorthi\nSundharaj\nGopinath\nAadhan Kumar\nManickam\nVigneshwar \n\n#nakkalites #singlemother #alaparaigal \n___________________________________________\n\nFollow Us On\nhttps://www.instagram.com/nakkalites/\nhttps://twitter.com/Nakkalites\nhttps://www.facebook.com/Nakkalites\nhttps://www.linkedin.com/company/nakkalites/\n___________________________________________\n\nIn Association with DIVO - Digital Partner\nWebsite   - http://web.divo.in/\nInstagram - https://www.instagram.com/divomovies/\nFacebook  - http://www.facebook.com/divomovies\nTwitter   - https://twitter.com/divomovies",
      },
      defaultAudioLanguage: "ta",
    },
    contentDetails: {
      duration: "PT13M49S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "224532",
      likeCount: "9094",
      favoriteCount: "0",
      commentCount: "151",
    },
  },
  {
    kind: "youtube#video",
    etag: "JPZLl5BMCL97WvccOAZ-tdGvSzg",
    id: "67FHHDeDpGY",
    snippet: {
      publishedAt: "2023-09-06T05:31:03Z",
      channelId: "UCIPPRrfwXFRvunJm6phnQZw",
      title:
        "JAMNA PAAR - Tony Kakkar ft. Manisha Rani | Neha Kakkar | Tony Jr.| Adil Shaikh",
      description:
        "Poetic Rabbit presents 'JAMNA PAAR' music video Starring Tony Kakkar & Manisha Rani . Subscribe for more 🐰\n\nAll Streaming Links 👉 https://INgrooves.lnk.to/JamnaPaar\n\nSingers - Tony Kakkar, Neha Kakkar, Tony Jr. \nMusic - - Tony Kakkar\nLyrics - Tony Kakkar\nSong Produced by Tony Kakkar\n\nDirector & choreographer- Adil Shaikh \nDop - Ujwal gupta\nVFX - @prathmeshchaukekar , Prathmesh Parab\nProject manager - Roman Sarkar \nExecutive production- Featherfeet Entertainment (Aliza shaikh)\nAssistance- Ranvijay ,Rutuja\nCostume stylist- jimmyzdesigner\nDancer costume - Reshma belose\nPost production- shake and cut studio\nOffline - Oswin Reveredo \nAsst - Ulleses Correia\nColourist- Onkar Singh\n\nPoetic Rabbit Label Manager - Alok Thakur \nDistribution - InGrooves \n\nIngrooves Team \nHead : Amit Sharma \nTeam : Nagesh Jadhav , Kajal Israni , Amol Suryavanshi , Lavanya Das , Nishtha Sikroria",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/67FHHDeDpGY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/67FHHDeDpGY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/67FHHDeDpGY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/67FHHDeDpGY/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/67FHHDeDpGY/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Poetic Rabbit",
      tags: [
        "tony kakkar",
        "tony kakkar new song",
        "neha kakkar new song",
        "neha kakkar",
        "jamnapaar",
        "manisha rani",
        "manisha rani song",
        "manisha rani song with tony kakkar",
        "saiyan rehte jamna paar",
        "jamna paar full video",
        "official video",
        "new song 2023",
        "new dance song 2023",
        "party hits hindi",
        "manisha",
        "neha kakkar latest song",
        "new hindi song",
        "neha kakkar viral song",
        "Jamuna Paar",
        "new bollywood song",
        "latest hindi songs",
        "trending songs",
        "romantic songs",
        "tony kakkar viral song",
        "best of neha kakkar",
      ],
      categoryId: "10",
      liveBroadcastContent: "none",
      localized: {
        title:
          "JAMNA PAAR - Tony Kakkar ft. Manisha Rani | Neha Kakkar | Tony Jr.| Adil Shaikh",
        description:
          "Poetic Rabbit presents 'JAMNA PAAR' music video Starring Tony Kakkar & Manisha Rani . Subscribe for more 🐰\n\nAll Streaming Links 👉 https://INgrooves.lnk.to/JamnaPaar\n\nSingers - Tony Kakkar, Neha Kakkar, Tony Jr. \nMusic - - Tony Kakkar\nLyrics - Tony Kakkar\nSong Produced by Tony Kakkar\n\nDirector & choreographer- Adil Shaikh \nDop - Ujwal gupta\nVFX - @prathmeshchaukekar , Prathmesh Parab\nProject manager - Roman Sarkar \nExecutive production- Featherfeet Entertainment (Aliza shaikh)\nAssistance- Ranvijay ,Rutuja\nCostume stylist- jimmyzdesigner\nDancer costume - Reshma belose\nPost production- shake and cut studio\nOffline - Oswin Reveredo \nAsst - Ulleses Correia\nColourist- Onkar Singh\n\nPoetic Rabbit Label Manager - Alok Thakur \nDistribution - InGrooves \n\nIngrooves Team \nHead : Amit Sharma \nTeam : Nagesh Jadhav , Kajal Israni , Amol Suryavanshi , Lavanya Das , Nishtha Sikroria",
      },
    },
    contentDetails: {
      duration: "PT2M27S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "12739402",
      likeCount: "1028047",
      favoriteCount: "0",
      commentCount: "131552",
    },
  },
  {
    kind: "youtube#video",
    etag: "KnYZujNc3BK-eBoCcu09-Lnu5CE",
    id: "IVH8Al3-x9o",
    snippet: {
      publishedAt: "2023-09-11T08:24:03Z",
      channelId: "UCnHRqXZV5dED26DQbVXl9dQ",
      title:
        "അങ്ങനെ സിനൂന്റെ അനിയത്തിയുടെ കല്യാണം കഴിഞ്ഞു /engagement /happy moments/noufaltkd",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/IVH8Al3-x9o/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/IVH8Al3-x9o/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/IVH8Al3-x9o/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/IVH8Al3-x9o/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/IVH8Al3-x9o/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Noufal f tkd",
      tags: ["noufaltkd", "trending", "malayalamblog", "engege"],
      categoryId: "22",
      liveBroadcastContent: "none",
      localized: {
        title:
          "അങ്ങനെ സിനൂന്റെ അനിയത്തിയുടെ കല്യാണം കഴിഞ്ഞു /engagement /happy moments/noufaltkd",
        description: "",
      },
    },
    contentDetails: {
      duration: "PT9M58S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "199283",
      likeCount: "4840",
      favoriteCount: "0",
      commentCount: "384",
    },
  },
  {
    kind: "youtube#video",
    etag: "TPhbDftvFjJjOhW_RWrZxYPBS_s",
    id: "vjZI5EIg9nM",
    snippet: {
      publishedAt: "2023-09-11T06:43:03Z",
      channelId: "UCvrhwpnp2DHYQ1CbXby9ypQ",
      title: "Muthazhagu | 11th to 16th September 2023 - Promo",
      description:
        "முத்தழகு - திங்கள் முதல் சனி மதியம் 3:30 மணிக்கு நம்ம விஜய் டிவில.. Click here -  https://www.hotstar.com/in/tv/muthazhagu/1260073430 to watch the show on Disney+ Hotstar.          #Muthazhagu #VijayTelevision #VijayTV #StarVijayTV #NewFiction  #StarVijay #TamilTV",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vjZI5EIg9nM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vjZI5EIg9nM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vjZI5EIg9nM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/vjZI5EIg9nM/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/vjZI5EIg9nM/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Vijay Television",
      tags: [
        "Muthazhagu",
        "Star",
        "Star Vijay TV",
        "Vijay TV",
        "Vijay",
        "Redefining Entertainment",
        "தமிழ்",
        "விஜய்",
        "டிவி",
        "தொலைக்காட்சி",
        "Tamil TV",
        "Tamil Shows",
        "முத்தழகு",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title: "Muthazhagu | 11th to 16th September 2023 - Promo",
        description:
          "முத்தழகு - திங்கள் முதல் சனி மதியம் 3:30 மணிக்கு நம்ம விஜய் டிவில.. Click here -  https://www.hotstar.com/in/tv/muthazhagu/1260073430 to watch the show on Disney+ Hotstar.          #Muthazhagu #VijayTelevision #VijayTV #StarVijayTV #NewFiction  #StarVijay #TamilTV",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT19S",
      dimension: "2d",
      definition: "hd",
      caption: "false",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "1192923",
      likeCount: "18850",
      favoriteCount: "0",
      commentCount: "184",
    },
  },
  {
    kind: "youtube#video",
    etag: "ptybGmDPpCuIHIOvPCO4nVAr1Vo",
    id: "u9TuVsNz_jQ",
    snippet: {
      publishedAt: "2023-09-11T08:40:01Z",
      channelId: "UC55IWqFLDH1Xp7iu1_xknRA",
      title:
        "Iccha ने अपनी बेटी से मुँह छुपाया! | Uttaran | उतरन | Full Episode | Ep. 839",
      description:
        "Ichha Is Welcomed Home And Is Shown The Picture Of Meethi. Meethi Reaches Home At The Same Time, But Since She's Been Told That Her Mother Is Dead, Ichha Tries To Hide Her Face.\n\nIccha ने अपनी बेटी से मुँह छुपाया! | Uttaran | उतरन | Full Episode | Ep. 839\n\n\n--------\n📺 Welcome to the captivating world of 'Uttaran' on Colors TV! 🎬\n\n🤝 Join us on this roller-coaster journey of friendship, love, and betrayal as we delve into the lives of two extraordinary friends from starkly contrasting backgrounds.\n\n👸 Meet Tapasya, the pampered and privileged daughter of a wealthy man, and her best friend, Ichcha, who comes from a humble background as the daughter of a maid. Despite society's barriers, their unbreakable bond challenges conventions and stands the test of time.\n\n💔 Love takes center stage when Veer, whose marriage proposal was rejected by Tapasya, finds solace in the companionship of Ichcha. But what ensues is a whirlwind of emotions as jealousy and heartbreak threaten to tear apart the inseparable duo.\n\n💍 Witness a gripping twist when Tapasya, fueled by spite, takes a drastic step and marries Veer, setting off a chain of events that creates a complex love triangle. Veer finds himself torn between the two friends, entangled in a web of emotions.\n\n🔄 Spanning over thousands of episodes, 'Uttaran' takes you on an emotional roller-coaster, exploring the lives of these characters, their triumphs, their struggles, and the undeniable fate that intertwines their destinies.\n\n👨‍👩‍👧‍👦 As the story unfolds, follow the lives of their children and witness how the choices made by their parents continue to shape their future, testing their bonds and unraveling new mysteries.\n\n🔥 Brace yourself for a gripping tale of love, loyalty, and sacrifice that will keep you on the edge of your seats, episode after episode.\n\n🔔 Subscribe to our channel and hit the notification bell to stay updated on the episodes of 'Uttaran' and join the discussions with fans from all around the world.\n\n📣 Share this description with your friends and family who love engaging drama and unforgettable storytelling. Let's embark on this unforgettable journey together with 'Uttaran'! 🌟\nWatch more videos: https://www.youtube.com/watch?v=MaTfyCTi4jA&list=PLcC6hSpO26KvgqGFHSeAGTgW6NQVyBgv_\n\nTo subscribe to this channel go to: http://www.youtube.com/subscription_center?add_user=colorstv\n\nFollow us on: \nFacebook: https://www.facebook.com/ColorsTV\nInstagram: https://www.instagram.com/colorstv/\n\n#Uttaran #ColorsTV #FriendshipAndLove #LoveTriangle #EmotionalDrama #FamilySaga\n\nThe accuracy, completeness, currency and/or suitability of the above video description is not endorsed by its licensor or broadcaster or the Channel. They shall not be liable for loss and/or damage arising from the video description.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/u9TuVsNz_jQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/u9TuVsNz_jQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/u9TuVsNz_jQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/u9TuVsNz_jQ/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/u9TuVsNz_jQ/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Colors TV",
      tags: [
        "iccha hides from meethi",
        "Uttaran Episode 839",
        "Uttaran TV show",
        "Uttaran full episodes",
        "Uttaran highlights",
        "Uttaran best moments",
        "Uttaran characters",
        "Uttaran story summary",
        "Uttaran iconic scenes",
        "Uttaran emotional moments",
        "Uttaran old TV serial",
        "Uttaran classic drama",
        "Uttaran famous dialogues",
        "Uttaran title song",
        "Uttaran 2008-2015",
        "Uttaran Veer and Ichcha",
        "Uttaran Tapasya and Ichcha",
        "Uttaran twists and turns",
        "Uttaran Rashami Desai tapasya",
        "Uttaran Tina Dutta iccha",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      localized: {
        title:
          "Iccha ने अपनी बेटी से मुँह छुपाया! | Uttaran | उतरन | Full Episode | Ep. 839",
        description:
          "Ichha Is Welcomed Home And Is Shown The Picture Of Meethi. Meethi Reaches Home At The Same Time, But Since She's Been Told That Her Mother Is Dead, Ichha Tries To Hide Her Face.\n\nIccha ने अपनी बेटी से मुँह छुपाया! | Uttaran | उतरन | Full Episode | Ep. 839\n\n\n--------\n📺 Welcome to the captivating world of 'Uttaran' on Colors TV! 🎬\n\n🤝 Join us on this roller-coaster journey of friendship, love, and betrayal as we delve into the lives of two extraordinary friends from starkly contrasting backgrounds.\n\n👸 Meet Tapasya, the pampered and privileged daughter of a wealthy man, and her best friend, Ichcha, who comes from a humble background as the daughter of a maid. Despite society's barriers, their unbreakable bond challenges conventions and stands the test of time.\n\n💔 Love takes center stage when Veer, whose marriage proposal was rejected by Tapasya, finds solace in the companionship of Ichcha. But what ensues is a whirlwind of emotions as jealousy and heartbreak threaten to tear apart the inseparable duo.\n\n💍 Witness a gripping twist when Tapasya, fueled by spite, takes a drastic step and marries Veer, setting off a chain of events that creates a complex love triangle. Veer finds himself torn between the two friends, entangled in a web of emotions.\n\n🔄 Spanning over thousands of episodes, 'Uttaran' takes you on an emotional roller-coaster, exploring the lives of these characters, their triumphs, their struggles, and the undeniable fate that intertwines their destinies.\n\n👨‍👩‍👧‍👦 As the story unfolds, follow the lives of their children and witness how the choices made by their parents continue to shape their future, testing their bonds and unraveling new mysteries.\n\n🔥 Brace yourself for a gripping tale of love, loyalty, and sacrifice that will keep you on the edge of your seats, episode after episode.\n\n🔔 Subscribe to our channel and hit the notification bell to stay updated on the episodes of 'Uttaran' and join the discussions with fans from all around the world.\n\n📣 Share this description with your friends and family who love engaging drama and unforgettable storytelling. Let's embark on this unforgettable journey together with 'Uttaran'! 🌟\nWatch more videos: https://www.youtube.com/watch?v=MaTfyCTi4jA&list=PLcC6hSpO26KvgqGFHSeAGTgW6NQVyBgv_\n\nTo subscribe to this channel go to: http://www.youtube.com/subscription_center?add_user=colorstv\n\nFollow us on: \nFacebook: https://www.facebook.com/ColorsTV\nInstagram: https://www.instagram.com/colorstv/\n\n#Uttaran #ColorsTV #FriendshipAndLove #LoveTriangle #EmotionalDrama #FamilySaga\n\nThe accuracy, completeness, currency and/or suitability of the above video description is not endorsed by its licensor or broadcaster or the Channel. They shall not be liable for loss and/or damage arising from the video description.",
      },
      defaultAudioLanguage: "en",
    },
    contentDetails: {
      duration: "PT20M10S",
      dimension: "2d",
      definition: "sd",
      caption: "false",
      licensedContent: true,
      regionRestriction: {
        blocked: ["GB", "MY", "US"],
      },
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "347179",
      likeCount: "3955",
      favoriteCount: "0",
      commentCount: "62",
    },
  },
  {
    kind: "youtube#video",
    etag: "oDTxTXZXKmzCZvWzOcQ0l_B0bF0",
    id: "yHpBEQoQQPI",
    snippet: {
      publishedAt: "2023-09-09T08:30:13Z",
      channelId: "UC0H6I4rKiHmtceSdTCM-DKQ",
      title:
        "RUCHI KI MUSIC CLASS | Family Comedy Movie in Hindi | Ruchi and Piyush",
      description:
        "Ruchi ko music competition mein participate karna hai 🎵\nTo hamare ghar mein start ho gayi Music Class 😂\nVideo end tak dekhna ki Ruchi ke music competition ka kya hua 😍\n\nWe make family-friendly content, that the whole family can watch and enjoy together Hope you will support us and share the videos with your loved and dear ones.\n\nOur Family channel - https://goo.gl/EHTnu3\nPihoozz - https://www.youtube.com/@pihoozz\nRuchi and Piyush - https://bit.ly/2K3cd5O\n\nYou can follow us here :\nWebsite - https://bit.ly/3EgX4rr\nIG - https://www.instagram.com/ruchiandpiyush/\n\nWe are always open to suggestions...\n\nCopyright @ Ruchi and Piyush \nAny unauthorized reproduction of this content (videos/small clips/pictures) in any form will result in immediate action against the concerned video/channel.\n#ruchiandpiyush #ruchipiyush #ruchiandpiyushshow",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yHpBEQoQQPI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yHpBEQoQQPI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yHpBEQoQQPI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/yHpBEQoQQPI/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/yHpBEQoQQPI/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "Ruchi and Piyush",
      tags: [
        "ruchi and piyush show",
        "comedy family",
        "hindi family short movie",
        "Ruchi and Piyush new video",
        "Ruchi and Piyush 2022",
        "Hindi sitcom",
        "Ruchi and Pihu show",
        "Indian family drama",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "en",
      localized: {
        title:
          "RUCHI KI MUSIC CLASS | Family Comedy Movie in Hindi | Ruchi and Piyush",
        description:
          "Ruchi ko music competition mein participate karna hai 🎵\nTo hamare ghar mein start ho gayi Music Class 😂\nVideo end tak dekhna ki Ruchi ke music competition ka kya hua 😍\n\nWe make family-friendly content, that the whole family can watch and enjoy together Hope you will support us and share the videos with your loved and dear ones.\n\nOur Family channel - https://goo.gl/EHTnu3\nPihoozz - https://www.youtube.com/@pihoozz\nRuchi and Piyush - https://bit.ly/2K3cd5O\n\nYou can follow us here :\nWebsite - https://bit.ly/3EgX4rr\nIG - https://www.instagram.com/ruchiandpiyush/\n\nWe are always open to suggestions...\n\nCopyright @ Ruchi and Piyush \nAny unauthorized reproduction of this content (videos/small clips/pictures) in any form will result in immediate action against the concerned video/channel.\n#ruchiandpiyush #ruchipiyush #ruchiandpiyushshow",
      },
      defaultAudioLanguage: "hi",
    },
    contentDetails: {
      duration: "PT30M35S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "925320",
      likeCount: "17586",
      favoriteCount: "0",
      commentCount: "1442",
    },
  },
  {
    kind: "youtube#video",
    etag: "k253iK1L2JhfBQbw5rchAHDXs-c",
    id: "I4ENraeyAS8",
    snippet: {
      publishedAt: "2023-09-08T16:00:15Z",
      channelId: "UCEeEQxm6qc_qaTE7qTV5aLQ",
      title:
        "Muhabbat Gumshuda Meri Ep 19 [𝐄𝐍𝐆 𝐒𝐔𝐁] Digitally Presented by Sunsilk, Powered by LUX, 8th September",
      description:
        "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nThe best Pakistani Dramas right at your finger tips. Subscribe to HUM TV's YouTube channel and never miss an update!\n\nMuhabbat Gumshuda Meri Ep 19 [𝐄𝐍𝐆 𝐒𝐔𝐁] Digitally Presented by Sunsilk, Powered by LUX, 8th September\n\nDigitally Presented by Sunsilk\nPowered by LUX\n\nhttps://www.youtube.com/playlist?list=PLbVdwtmx18svm9hCyqFrO-DRKz49Jjo2w Khushhal Khan & Dananeer Mobeen \nhttps://www.youtube.com/playlist?list=PLbVdwtmx18svLwGeRuOqc5lTKSnhzGOV9 Khushhal Khan & Komal Meer\n\nCAST:\n \nKhushhal Khan, \nDananeer Mobeen, \nOmair Rana, \nFarah Sadia, \nAyesha Toor, \nAli Tahir, \nLeyla Zuberi, \nAli Raza, \nNaureen Gulwani, \nAgha Ali, \nMunawwar Afridi. \n\nWritten By Rahat Jabeen, \nDirected By Shahid Shafaat \nA Momina Duraid Productions Presentation! \n\n#MohabbatGumshudaMeriEp19\n#humtv  \n#dananeer \n#khushalkhan\n#sunsilk \n#lux",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/I4ENraeyAS8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/I4ENraeyAS8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/I4ENraeyAS8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        standard: {
          url: "https://i.ytimg.com/vi/I4ENraeyAS8/sddefault.jpg",
          width: 640,
          height: 480,
        },
        maxres: {
          url: "https://i.ytimg.com/vi/I4ENraeyAS8/maxresdefault.jpg",
          width: 1280,
          height: 720,
        },
      },
      channelTitle: "HUM TV",
      tags: [
        "latest pakistani drama",
        "top pakistani drama",
        "best pakistani drama",
        "pakistani serial 2023",
        "pakistani drama new",
        "Muhabbat gumshuda meri ep 19",
        "mohabbat gumshuda meri",
        "pakistani drama",
        "Mohabbat Gumshuda Meri Episode 19",
        "Muhabbat Gumshuda Meri Ep 19",
        "Mohabbat Meri gumshuda",
        "Tere Bin",
        "hum tv",
        "Khushhal Khan drama",
        "Khushhal Khan new drama",
        "hum",
        "drama",
        "Muhabbat",
        "muhabbat gumshuda meri",
        "mohabbat gumshuda meri episode 19",
        "muhabbat gumshuda meri episode 19",
        "gumshuda mohabbat meri",
        "mohabbat",
      ],
      categoryId: "24",
      liveBroadcastContent: "none",
      defaultLanguage: "hi-Latn",
      localized: {
        title:
          "Muhabbat Gumshuda Meri Ep 19 [𝐄𝐍𝐆 𝐒𝐔𝐁] Digitally Presented by Sunsilk, Powered by LUX, 8th September",
        description:
          "👉 Subscribe To HUM TV - https://bit.ly/Humtvpk\n\nThe best Pakistani Dramas right at your finger tips. Subscribe to HUM TV's YouTube channel and never miss an update!\n\nMuhabbat Gumshuda Meri Ep 19 [𝐄𝐍𝐆 𝐒𝐔𝐁] Digitally Presented by Sunsilk, Powered by LUX, 8th September\n\nDigitally Presented by Sunsilk\nPowered by LUX\n\nhttps://www.youtube.com/playlist?list=PLbVdwtmx18svm9hCyqFrO-DRKz49Jjo2w Khushhal Khan & Dananeer Mobeen \nhttps://www.youtube.com/playlist?list=PLbVdwtmx18svLwGeRuOqc5lTKSnhzGOV9 Khushhal Khan & Komal Meer\n\nCAST:\n \nKhushhal Khan, \nDananeer Mobeen, \nOmair Rana, \nFarah Sadia, \nAyesha Toor, \nAli Tahir, \nLeyla Zuberi, \nAli Raza, \nNaureen Gulwani, \nAgha Ali, \nMunawwar Afridi. \n\nWritten By Rahat Jabeen, \nDirected By Shahid Shafaat \nA Momina Duraid Productions Presentation! \n\n#MohabbatGumshudaMeriEp19\n#humtv  \n#dananeer \n#khushalkhan\n#sunsilk \n#lux",
      },
      defaultAudioLanguage: "en-US",
    },
    contentDetails: {
      duration: "PT36M2S",
      dimension: "2d",
      definition: "hd",
      caption: "true",
      licensedContent: true,
      contentRating: {},
      projection: "rectangular",
    },
    statistics: {
      viewCount: "6087759",
      likeCount: "158383",
      favoriteCount: "0",
      commentCount: "3005",
    },
  },
];
export const channelDetails = [
  {
    kind: "youtube#channel",
    etag: "FtXAcOsc4Gwn54JNuo9natICNjc",
    id: "UCqrJfqXKFIBs4llVPipWppg",
    snippet: {
      title: "President of India",
      description:
        "Official YouTube channel of Rashtrapati Bhavan | Smt Droupadi Murmu, President of India.\n",
      customUrl: "@presidentofindia",
      publishedAt: "2012-07-27T05:16:38Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ZFp9bnScRd9hfzuRx-WCiCmtq5cq_iQxwxiJ0OjfGE3sMg-1Psu9G1HQfZIXgL9Rd0Wz0-UF=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ZFp9bnScRd9hfzuRx-WCiCmtq5cq_iQxwxiJ0OjfGE3sMg-1Psu9G1HQfZIXgL9Rd0Wz0-UF=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ZFp9bnScRd9hfzuRx-WCiCmtq5cq_iQxwxiJ0OjfGE3sMg-1Psu9G1HQfZIXgL9Rd0Wz0-UF=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "President of India",
        description:
          "Official YouTube channel of Rashtrapati Bhavan | Smt Droupadi Murmu, President of India.\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUqrJfqXKFIBs4llVPipWppg",
      },
    },
    statistics: {
      viewCount: "564342187",
      subscriberCount: "2610000",
      hiddenSubscriberCount: false,
      videoCount: "3874",
    },
  },
  {
    kind: "youtube#channel",
    etag: "9iGst5rZGYvO4AJH22Hv3-qdXkw",
    id: "UCEeEQxm6qc_qaTE7qTV5aLQ",
    snippet: {
      title: "HUM TV",
      description:
        "HUM TV is Pakistan’s Premier Entertainment channel, providing quality entertainment and exceptional dramas, for viewers across the globe. Home of numerous epic dramas, opulent fashion shows and astounding Award spectacles, HUM TV has become one the most esteemed network of Pakistan for more than a decade. \n\nSubscribe to our YouTube channel and join our community of millions from around the world, to stay tuned for endless entertainment, feature films, shows, and much more.\n",
      customUrl: "@humtv",
      publishedAt: "2011-05-25T15:15:07Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/7HrvIorDF5PNdYn0OA96S6NLbxfLt60YZ5-KXamMxqvTC2fTmn1wSJmBRcVzExvm7oCcfk4QhwQ=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/7HrvIorDF5PNdYn0OA96S6NLbxfLt60YZ5-KXamMxqvTC2fTmn1wSJmBRcVzExvm7oCcfk4QhwQ=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/7HrvIorDF5PNdYn0OA96S6NLbxfLt60YZ5-KXamMxqvTC2fTmn1wSJmBRcVzExvm7oCcfk4QhwQ=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "HUM TV",
        description:
          "HUM TV is Pakistan’s Premier Entertainment channel, providing quality entertainment and exceptional dramas, for viewers across the globe. Home of numerous epic dramas, opulent fashion shows and astounding Award spectacles, HUM TV has become one the most esteemed network of Pakistan for more than a decade. \n\nSubscribe to our YouTube channel and join our community of millions from around the world, to stay tuned for endless entertainment, feature films, shows, and much more.\n",
      },
      country: "PK",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUEeEQxm6qc_qaTE7qTV5aLQ",
      },
    },
    statistics: {
      viewCount: "25404299510",
      subscriberCount: "30000000",
      hiddenSubscriberCount: false,
      videoCount: "110761",
    },
  },
  {
    kind: "youtube#channel",
    etag: "R5wuqO4sfdSMLYsvFZ5X86oxoCE",
    id: "UCrcpw88HvKJ0skdsHniCJtQ",
    snippet: {
      title: "News18 Lokmat",
      description:
        "News18 India’s leading News Network, and the Lokmat Group, Maharashtra’s leading Newspaper group, present News18Lokmat (formerly- IBN-Lokmat ) - a 24-hour Marathi News and Current Affairs Channel. The legacy of these two renowned media powerhouses will give News18Lokmat a sense of immense credibility as well as access to a vast audience base. Going on air from April 6, News18Lokmat will be a world-class credible News channel for the highly aware and conscious ‘Progressive Marathi’.\n\n\nन्यूज 18 इंडियाचे अग्रगण्य न्यूज नेटवर्क आणि लोकमत ग्रुप, महाराष्ट्राचे अग्रगण्य वृत्तपत्र समूह, सध्याचे न्यूज 18 लोकमत (पूर्वीचे आयबीएन लोकमत) - 24 तासांचे मराठी न्यूज आणि करंट अफेयर्स चॅनल. या दोन प्रसिद्ध मीडिया पॉवरहाउसची वारसा न्यूज 18 लोकमतेला प्रचंड विश्वासार्हतेचा तसेच मोठ्या प्रेक्षकांच्या आधारावर प्रवेश देईल. 6 एप्रिलपासून हवाला जाणे, न्यूज 18 लोकमत जागृत आणि जागृत 'प्रोग्रेसिव्ह मराठी' साठी जागतिक दर्जाचे विश्वासार्ह न्यूज चॅनेल असेल.",
      customUrl: "@news18lokmattv",
      publishedAt: "2011-04-23T13:53:52Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSrCQGiXmgYAa8aG8ONZAEkpYVFQ1NGEkNXMVSIEA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSrCQGiXmgYAa8aG8ONZAEkpYVFQ1NGEkNXMVSIEA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSrCQGiXmgYAa8aG8ONZAEkpYVFQ1NGEkNXMVSIEA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "News18 Lokmat",
        description:
          "News18 India’s leading News Network, and the Lokmat Group, Maharashtra’s leading Newspaper group, present News18Lokmat (formerly- IBN-Lokmat ) - a 24-hour Marathi News and Current Affairs Channel. The legacy of these two renowned media powerhouses will give News18Lokmat a sense of immense credibility as well as access to a vast audience base. Going on air from April 6, News18Lokmat will be a world-class credible News channel for the highly aware and conscious ‘Progressive Marathi’.\n\n\nन्यूज 18 इंडियाचे अग्रगण्य न्यूज नेटवर्क आणि लोकमत ग्रुप, महाराष्ट्राचे अग्रगण्य वृत्तपत्र समूह, सध्याचे न्यूज 18 लोकमत (पूर्वीचे आयबीएन लोकमत) - 24 तासांचे मराठी न्यूज आणि करंट अफेयर्स चॅनल. या दोन प्रसिद्ध मीडिया पॉवरहाउसची वारसा न्यूज 18 लोकमतेला प्रचंड विश्वासार्हतेचा तसेच मोठ्या प्रेक्षकांच्या आधारावर प्रवेश देईल. 6 एप्रिलपासून हवाला जाणे, न्यूज 18 लोकमत जागृत आणि जागृत 'प्रोग्रेसिव्ह मराठी' साठी जागतिक दर्जाचे विश्वासार्ह न्यूज चॅनेल असेल.",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUrcpw88HvKJ0skdsHniCJtQ",
      },
    },
    statistics: {
      viewCount: "1190302362",
      subscriberCount: "2540000",
      hiddenSubscriberCount: false,
      videoCount: "136142",
    },
  },
  {
    kind: "youtube#channel",
    etag: "8vKDx5PavDb4zcaOLqnzWAc4W1g",
    id: "UCIPPRrfwXFRvunJm6phnQZw",
    snippet: {
      title: "Poetic Rabbit",
      description: "",
      customUrl: "@poeticrabbit",
      publishedAt: "2023-07-24T07:11:33.485731Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/niJincTf34F5m_PvD5eT3VZWbIz2OX1GM5tVD2uPhhActQ8xX4W5rdRDc0829argHmW4FUNiGA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/niJincTf34F5m_PvD5eT3VZWbIz2OX1GM5tVD2uPhhActQ8xX4W5rdRDc0829argHmW4FUNiGA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/niJincTf34F5m_PvD5eT3VZWbIz2OX1GM5tVD2uPhhActQ8xX4W5rdRDc0829argHmW4FUNiGA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Poetic Rabbit",
        description: "",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUIPPRrfwXFRvunJm6phnQZw",
      },
    },
    statistics: {
      viewCount: "26493241",
      subscriberCount: "180000",
      hiddenSubscriberCount: false,
      videoCount: "17",
    },
  },
  {
    kind: "youtube#channel",
    etag: "FYIFRe0l__0HTaEq0QNVDqNNbuw",
    id: "UCnHRqXZV5dED26DQbVXl9dQ",
    snippet: {
      title: "Noufal f tkd",
      description:
        "Hi🥰  friends welcome to my channel 🙏🥰 , ഉമ്മയും മോനും👩‍👦\n\nNoufal f\nKonikkel house trikkedeeri po pin. 679502\n\n",
      customUrl: "@noufalftkd2822",
      publishedAt: "2020-05-07T09:48:27.816522Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/qvEctEVXRPOcIPYWXuD4MQxgpAtZOd0UbCiKjw67oQDY_R8Sqyzh6170dsnYMasTmKLKmLKM=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/qvEctEVXRPOcIPYWXuD4MQxgpAtZOd0UbCiKjw67oQDY_R8Sqyzh6170dsnYMasTmKLKmLKM=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/qvEctEVXRPOcIPYWXuD4MQxgpAtZOd0UbCiKjw67oQDY_R8Sqyzh6170dsnYMasTmKLKmLKM=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Noufal f tkd",
        description:
          "Hi🥰  friends welcome to my channel 🙏🥰 , ഉമ്മയും മോനും👩‍👦\n\nNoufal f\nKonikkel house trikkedeeri po pin. 679502\n\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUnHRqXZV5dED26DQbVXl9dQ",
      },
    },
    statistics: {
      viewCount: "225400188",
      subscriberCount: "533000",
      hiddenSubscriberCount: false,
      videoCount: "1111",
    },
  },
  {
    kind: "youtube#channel",
    etag: "u-NbBorOMSi5SS63IzNeGEpo_XI",
    id: "UCNoiWmvkDUL0q-6ECxNFH0Q",
    snippet: {
      title: "JONATHAN GAMING",
      description:
        "Welcome to my Youtube Channel,\nI'm Jonathan Amaral, you know me as Jonathan Gaming.\nI started my professional Esports Career competing in Pubg Mobile Championships (Now BGMI),\nSince the start of my career, I have been consistent with my gameplay and always been working hard to achieve my goals via winning Domestic/Global Championships. \nI Stream BGMI regularly, I also enjoy playing Valorant and other fun games once in a while!\nI upload videos regarding Tutorials for BGMI, Funny Highlights, Intense Fights, Crate Openings, Vlogs, etc.\n\n------------------------------------------------\n• About •\n→ Name – Jonathan  Amaral\n→ Age - 20\n→ Profession – Content Creator, Streamer and eSports Athlete\n------------------------------------------------------------\nDon't forget to hit the SUBSCRIBE button and turn on the bell icon !!\n------------------------------------------------------------\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved.\n",
      customUrl: "@jonathangamingyt",
      publishedAt: "2018-02-25T14:00:11Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/vV6NWWS0wQ88Gl8EW6S9MZiK0jc_UAJLjL5-xGXkAQHDq9R-BZAMBeYU6wSaD24jNrmpgOIRpA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/vV6NWWS0wQ88Gl8EW6S9MZiK0jc_UAJLjL5-xGXkAQHDq9R-BZAMBeYU6wSaD24jNrmpgOIRpA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/vV6NWWS0wQ88Gl8EW6S9MZiK0jc_UAJLjL5-xGXkAQHDq9R-BZAMBeYU6wSaD24jNrmpgOIRpA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "JONATHAN GAMING",
        description:
          "Welcome to my Youtube Channel,\nI'm Jonathan Amaral, you know me as Jonathan Gaming.\nI started my professional Esports Career competing in Pubg Mobile Championships (Now BGMI),\nSince the start of my career, I have been consistent with my gameplay and always been working hard to achieve my goals via winning Domestic/Global Championships. \nI Stream BGMI regularly, I also enjoy playing Valorant and other fun games once in a while!\nI upload videos regarding Tutorials for BGMI, Funny Highlights, Intense Fights, Crate Openings, Vlogs, etc.\n\n------------------------------------------------\n• About •\n→ Name – Jonathan  Amaral\n→ Age - 20\n→ Profession – Content Creator, Streamer and eSports Athlete\n------------------------------------------------------------\nDon't forget to hit the SUBSCRIBE button and turn on the bell icon !!\n------------------------------------------------------------\n\n• Copyright © 2021 JONATHAN GAMING - All Rights Reserved.\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUNoiWmvkDUL0q-6ECxNFH0Q",
      },
    },
    statistics: {
      viewCount: "510617937",
      subscriberCount: "5440000",
      hiddenSubscriberCount: false,
      videoCount: "418",
    },
  },
  {
    kind: "youtube#channel",
    etag: "VKS2JiVFv08_BpD6y8n7pxYt8AQ",
    id: "UChpUSSTjbH8Ou8wz7wpkCTg",
    snippet: {
      title: "5 STAR",
      description:
        "Gmail: 5starteam12345@gmail.com\n\nHello friends welcome To 5star YouTube channel\nWe are all time entertaining you with 100% efforts and Best content\nSo you guys are only doing is pls do subscribe to 5star youtube channel pls support\n\nThank you 🙏🏻\n5star channel",
      customUrl: "@5star430",
      publishedAt: "2013-04-11T13:56:09Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRz1_6ePiX7lG4dIjeXmCZnUJzpBszCX-AgMBFq=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRz1_6ePiX7lG4dIjeXmCZnUJzpBszCX-AgMBFq=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRz1_6ePiX7lG4dIjeXmCZnUJzpBszCX-AgMBFq=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "5 STAR",
        description:
          "Gmail: 5starteam12345@gmail.com\n\nHello friends welcome To 5star YouTube channel\nWe are all time entertaining you with 100% efforts and Best content\nSo you guys are only doing is pls do subscribe to 5star youtube channel pls support\n\nThank you 🙏🏻\n5star channel",
      },
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUhpUSSTjbH8Ou8wz7wpkCTg",
      },
    },
    statistics: {
      viewCount: "220960234",
      subscriberCount: "677000",
      hiddenSubscriberCount: false,
      videoCount: "149",
    },
  },
  {
    kind: "youtube#channel",
    etag: "xKt7CQpWpHNWkxlqd5KsJ-ANo6s",
    id: "UCVXCo0W9pk2dDkEBNLhTt7A",
    snippet: {
      title: "Sports Tak",
      description:
        "Sports Tak is your 360 degree view on Sports news, opinion and behind the scenes in Indian sporting scenario. Sports Tak is one of the biggest sports news platform in the world and connects Indian sports with fans around the world. Sports Tak brings you all the Indian and world cricket action with interviews of the most famous cricketers. It also brings you prominent experts debating around cricket and other sports. There is also an opportunity to watch the old archival footage of famous cricket events. \nSports Tak is your one stop destination for\nSports. ",
      customUrl: "@sportstak",
      publishedAt: "2017-08-03T11:30:14Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/aqKoeR-beuMH87wXO45kA5V6BpS-StEYDPZTEpUcAV8CTrxCw7SJ4ptyQ8YZc8YhozPiOtoD=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/aqKoeR-beuMH87wXO45kA5V6BpS-StEYDPZTEpUcAV8CTrxCw7SJ4ptyQ8YZc8YhozPiOtoD=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/aqKoeR-beuMH87wXO45kA5V6BpS-StEYDPZTEpUcAV8CTrxCw7SJ4ptyQ8YZc8YhozPiOtoD=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Sports Tak",
        description:
          "Sports Tak is your 360 degree view on Sports news, opinion and behind the scenes in Indian sporting scenario. Sports Tak is one of the biggest sports news platform in the world and connects Indian sports with fans around the world. Sports Tak brings you all the Indian and world cricket action with interviews of the most famous cricketers. It also brings you prominent experts debating around cricket and other sports. There is also an opportunity to watch the old archival footage of famous cricket events. \nSports Tak is your one stop destination for\nSports. ",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUVXCo0W9pk2dDkEBNLhTt7A",
      },
    },
    statistics: {
      viewCount: "3028035187",
      subscriberCount: "6790000",
      hiddenSubscriberCount: false,
      videoCount: "32748",
    },
  },
  {
    kind: "youtube#channel",
    etag: "KREJldc4xG4GKKNEhkqlCqavRt8",
    id: "UC96MCpGZsAyv1lmJI4BM5Vg",
    snippet: {
      title: "Silly Monks Mollywood",
      description:
        'Silly monks Malayalam is one stop shop for Malayalam cinema.get all the latest trailers,songs,full movies & many more " - an official destination for complete "Malayalam cinema updates". subscribe For more update !\n\nFor Brand Collabs: rajesh.es@sillymonks.com\n',
      customUrl: "@sillymonksmalayalam",
      publishedAt: "2013-08-08T11:59:31Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTWw7HskA7j6oJWhPiIdKO4UU0qBF_mxmujNcClZg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTWw7HskA7j6oJWhPiIdKO4UU0qBF_mxmujNcClZg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTWw7HskA7j6oJWhPiIdKO4UU0qBF_mxmujNcClZg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Silly Monks Mollywood",
        description:
          'Silly monks Malayalam is one stop shop for Malayalam cinema.get all the latest trailers,songs,full movies & many more " - an official destination for complete "Malayalam cinema updates". subscribe For more update !\n\nFor Brand Collabs: rajesh.es@sillymonks.com\n',
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU96MCpGZsAyv1lmJI4BM5Vg",
      },
    },
    statistics: {
      viewCount: "77518319",
      subscriberCount: "204000",
      hiddenSubscriberCount: false,
      videoCount: "2480",
    },
  },
  {
    kind: "youtube#channel",
    etag: "UuCI3tfhdN6MZlRQWxCsEjW5B-E",
    id: "UC1hWVEOkra5LkP37qI6PVVg",
    snippet: {
      title: "Sanju and Lakshmy",
      description: "",
      customUrl: "@sanjuandlakshmy3952",
      publishedAt: "2017-08-26T20:19:24Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSLyxdjO9p7Z2Si0AhjwZRUBdeUifYiO8h73eBZUw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSLyxdjO9p7Z2Si0AhjwZRUBdeUifYiO8h73eBZUw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSLyxdjO9p7Z2Si0AhjwZRUBdeUifYiO8h73eBZUw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Sanju and Lakshmy",
        description: "",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU1hWVEOkra5LkP37qI6PVVg",
      },
    },
    statistics: {
      viewCount: "316740041",
      subscriberCount: "1290000",
      hiddenSubscriberCount: false,
      videoCount: "210",
    },
  },
  {
    kind: "youtube#channel",
    etag: "Wqi2RtXQctszx1tpmti75C8Dwi8",
    id: "UCruMs8kL2fHjxNIymX53VSw",
    snippet: {
      title: "Vayyari Bhama",
      description: "",
      customUrl: "@vayyaribhama",
      publishedAt: "2021-04-12T06:30:19.047801Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/3CGv2mJtl57tcNW3ADuIXGe6MsLnKPU6mUoxVzy_dcRMUw-D1bqIst3P_yx-_48jqA3CMT3BvA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/3CGv2mJtl57tcNW3ADuIXGe6MsLnKPU6mUoxVzy_dcRMUw-D1bqIst3P_yx-_48jqA3CMT3BvA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/3CGv2mJtl57tcNW3ADuIXGe6MsLnKPU6mUoxVzy_dcRMUw-D1bqIst3P_yx-_48jqA3CMT3BvA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Vayyari Bhama",
        description: "",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUruMs8kL2fHjxNIymX53VSw",
      },
    },
    statistics: {
      viewCount: "100248251",
      subscriberCount: "474000",
      hiddenSubscriberCount: false,
      videoCount: "163",
    },
  },
  {
    kind: "youtube#channel",
    etag: "_7ZCiED4yU-O7fozQUWiGjjsd9E",
    id: "UCum5kIr4aqgn9Dc21JdYCWA",
    snippet: {
      title: "Armaan Malik",
      description:
        "Digital Content Creator and Family Entertainer 🤘\nFor Promotions & Collaborations: Email or Dm on Instagram.\nEmail: armaanmalikteam1@gmail.com\nInstagram: https://www.instagram.com/armaan__malik9\nSubscribe to our Channel's and to see latest update don't forget to Follow on Instagram 🙏\n",
      customUrl: "@armaanmalik2154",
      publishedAt: "2020-03-08T03:30:56.568898Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/BRV3NZ7vY8jJlrcE4OTHt6Hr5qFiNp18DANB4fO_Fzz8s4R9xPYxG2Bqld9fzb61ciksLsmH=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/BRV3NZ7vY8jJlrcE4OTHt6Hr5qFiNp18DANB4fO_Fzz8s4R9xPYxG2Bqld9fzb61ciksLsmH=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/BRV3NZ7vY8jJlrcE4OTHt6Hr5qFiNp18DANB4fO_Fzz8s4R9xPYxG2Bqld9fzb61ciksLsmH=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Armaan Malik",
        description:
          "Digital Content Creator and Family Entertainer 🤘\nFor Promotions & Collaborations: Email or Dm on Instagram.\nEmail: armaanmalikteam1@gmail.com\nInstagram: https://www.instagram.com/armaan__malik9\nSubscribe to our Channel's and to see latest update don't forget to Follow on Instagram 🙏\n",
      },
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUum5kIr4aqgn9Dc21JdYCWA",
      },
    },
    statistics: {
      viewCount: "1519776752",
      subscriberCount: "3560000",
      hiddenSubscriberCount: false,
      videoCount: "1048",
    },
  },
  {
    kind: "youtube#channel",
    etag: "jVLT7i57NuFmDj5gy3tyYYxtGF8",
    id: "UCGLiE4bZSUnly-R-Ij1MiYQ",
    snippet: {
      title: "Haritha Jackie",
      description:
        "Hai, This is Haritha Jackie. Stay tuned to my channel for new videos\nPowered By Strikers.\nFor Brand Collaborations and Inquires, email us : strikersdigitalmedia@gmail.com\n",
      customUrl: "@harithajackieofficial",
      publishedAt: "2020-10-25T06:07:31.484119Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQjED7xgvDN7j40QYKeEX57KCUs69sKMrXJJKF-=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQjED7xgvDN7j40QYKeEX57KCUs69sKMrXJJKF-=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQjED7xgvDN7j40QYKeEX57KCUs69sKMrXJJKF-=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Haritha Jackie",
        description:
          "Hai, This is Haritha Jackie. Stay tuned to my channel for new videos\nPowered By Strikers.\nFor Brand Collaborations and Inquires, email us : strikersdigitalmedia@gmail.com\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUGLiE4bZSUnly-R-Ij1MiYQ",
      },
    },
    statistics: {
      viewCount: "95195309",
      subscriberCount: "288000",
      hiddenSubscriberCount: false,
      videoCount: "218",
    },
  },
  {
    kind: "youtube#channel",
    etag: "b3tQ-ROra71JB0qsGS4rZZ6s5t0",
    id: "UCiifkYAs_bq1pt_zbNAzYGg",
    snippet: {
      title: "DC",
      description:
        "Welcome to the official YouTube channel for DC Entertainment, home to DC Comics (Superman, Batman, Green Lantern, Wonder Woman, The Flash and more), Vertigo Comics (Sandman, Fables, American Vampire and more) and MAD.",
      customUrl: "@dcofficial",
      publishedAt: "2011-08-19T16:13:51Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaR1c2r1NrPb3IaamFN4Vul10y_DpADSIfMFB5xz0xw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaR1c2r1NrPb3IaamFN4Vul10y_DpADSIfMFB5xz0xw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaR1c2r1NrPb3IaamFN4Vul10y_DpADSIfMFB5xz0xw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "DC",
        description:
          "Welcome to the official YouTube channel for DC Entertainment, home to DC Comics (Superman, Batman, Green Lantern, Wonder Woman, The Flash and more), Vertigo Comics (Sandman, Fables, American Vampire and more) and MAD.",
      },
      country: "US",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUiifkYAs_bq1pt_zbNAzYGg",
      },
    },
    statistics: {
      viewCount: "1874644451",
      subscriberCount: "4390000",
      hiddenSubscriberCount: false,
      videoCount: "3810",
    },
  },
  {
    kind: "youtube#channel",
    etag: "2sbZ7yNu2GV4wy0Iz818P12Ou0g",
    id: "UC0H6I4rKiHmtceSdTCM-DKQ",
    snippet: {
      title: "Ruchi and Piyush",
      description:
        "Welcome to the world of Ruchi and Piyush. \nThis Hindi sitcom is a mix of family comedy and moral learning. \nWe are a real life family and we share funny instances, that happen in our daily lives. \nHope you will enjoy our videos.\nOnly for business inquiries - ruchiandpiyush@gmail.com\n\nCopyright @ Ruchi and Piyush.\nAny unauthorized reproduction of this content (videos / small clips / pictures) in any form will result in immediate action against the concerned video / channel.",
      customUrl: "@ruchiandpiyush",
      publishedAt: "2019-04-12T17:13:24Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRIARypLQIH9s9b3wDuSjyh4M2u51zVhnviVuRV_Q=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRIARypLQIH9s9b3wDuSjyh4M2u51zVhnviVuRV_Q=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRIARypLQIH9s9b3wDuSjyh4M2u51zVhnviVuRV_Q=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Ruchi and Piyush",
        description:
          "Welcome to the world of Ruchi and Piyush. \nThis Hindi sitcom is a mix of family comedy and moral learning. \nWe are a real life family and we share funny instances, that happen in our daily lives. \nHope you will enjoy our videos.\nOnly for business inquiries - ruchiandpiyush@gmail.com\n\nCopyright @ Ruchi and Piyush.\nAny unauthorized reproduction of this content (videos / small clips / pictures) in any form will result in immediate action against the concerned video / channel.",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU0H6I4rKiHmtceSdTCM-DKQ",
      },
    },
    statistics: {
      viewCount: "818709170",
      subscriberCount: "3470000",
      hiddenSubscriberCount: false,
      videoCount: "81",
    },
  },
  {
    kind: "youtube#channel",
    etag: "VVF2N42vaekqRzwnzzP4G5uriZM",
    id: "UCeWqACGRU5gT0BXeFhrixWA",
    snippet: {
      title: "Shoaib Akhtar",
      description:
        "Welcome to the Official Channel of Shoaib Akhtar aka the Rawalpindi Express - the world’s faster bowler and now at the centre of one of the fastest growing YouTube channels. \n\n\nThe channel offers a rare insight into the life of Shoaib Akhtar as he shares his expert opinion, interacts with his fans and talks \nto some of the current and past sports celebrities.\n\n\nShoaib Akhtar’s YouTube channel is managed by Dot Republic Media. All Copyrights Reserved.\n\n\nSubscribe to get all the latest updates from the Rawalpindi Express:\nhttps://bit.ly/SubscribeNowShoaibAkhtar",
      customUrl: "@shoaibakhtar100mph",
      publishedAt: "2019-01-29T16:02:37Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTpG3A3-TUisJ20vBS8LD--JWfrenMwk9qS1DzP=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTpG3A3-TUisJ20vBS8LD--JWfrenMwk9qS1DzP=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTpG3A3-TUisJ20vBS8LD--JWfrenMwk9qS1DzP=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Shoaib Akhtar",
        description:
          "Welcome to the Official Channel of Shoaib Akhtar aka the Rawalpindi Express - the world’s faster bowler and now at the centre of one of the fastest growing YouTube channels. \n\n\nThe channel offers a rare insight into the life of Shoaib Akhtar as he shares his expert opinion, interacts with his fans and talks \nto some of the current and past sports celebrities.\n\n\nShoaib Akhtar’s YouTube channel is managed by Dot Republic Media. All Copyrights Reserved.\n\n\nSubscribe to get all the latest updates from the Rawalpindi Express:\nhttps://bit.ly/SubscribeNowShoaibAkhtar",
      },
      country: "US",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUeWqACGRU5gT0BXeFhrixWA",
      },
    },
    statistics: {
      viewCount: "352118465",
      subscriberCount: "3520000",
      hiddenSubscriberCount: false,
      videoCount: "420",
    },
  },
  {
    kind: "youtube#channel",
    etag: "pLj7YSUG_dODgqYhNFIG0jjaH4E",
    id: "UCOArNMtCQ8c_mUmTOJBf7_Q",
    snippet: {
      title: "adarshuc",
      description:
        "Hello everyone welcome to my channel Adarshuc\nHere i post kya kara hu bhul gya\n\nfollow me on insta : @adarshuc\nfollow me on twitter : @adarshuc\n\nFor business enquiry :- adarshucwork@gmail.com",
      customUrl: "@adarshuc",
      publishedAt: "2016-03-01T14:14:51Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSHxS377t9wdXlq3JhozPRxb1baUI55_CbbcgFZDA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSHxS377t9wdXlq3JhozPRxb1baUI55_CbbcgFZDA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSHxS377t9wdXlq3JhozPRxb1baUI55_CbbcgFZDA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "adarshuc",
        description:
          "Hello everyone welcome to my channel Adarshuc\nHere i post kya kara hu bhul gya\n\nfollow me on insta : @adarshuc\nfollow me on twitter : @adarshuc\n\nFor business enquiry :- adarshucwork@gmail.com",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUOArNMtCQ8c_mUmTOJBf7_Q",
      },
    },
    statistics: {
      viewCount: "231899002",
      subscriberCount: "3160000",
      hiddenSubscriberCount: false,
      videoCount: "73",
    },
  },
  {
    kind: "youtube#channel",
    etag: "D7neZOoMYiVeo3CS4PrxCundj18",
    id: "UCOJlrO9zmDYSlIKrwbUg1hQ",
    snippet: {
      title: "Infinitum RomCom",
      description:
        "Subscribe to Infinitum RomCom to witness some cute and nostalgic romance with a pinch of comedy\n",
      customUrl: "@infinitumromcom",
      publishedAt: "2020-08-22T14:12:57.834723Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/c-L4_45E1wUxY6coHVxr4AGc53iqtGMfqKzIaTjvUF4d0AGpOI2IhO_JPqsmrB4b5qjSpKi8=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/c-L4_45E1wUxY6coHVxr4AGc53iqtGMfqKzIaTjvUF4d0AGpOI2IhO_JPqsmrB4b5qjSpKi8=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/c-L4_45E1wUxY6coHVxr4AGc53iqtGMfqKzIaTjvUF4d0AGpOI2IhO_JPqsmrB4b5qjSpKi8=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Infinitum RomCom",
        description:
          "Subscribe to Infinitum RomCom to witness some cute and nostalgic romance with a pinch of comedy\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUOJlrO9zmDYSlIKrwbUg1hQ",
      },
    },
    statistics: {
      viewCount: "37171555",
      subscriberCount: "198000",
      hiddenSubscriberCount: false,
      videoCount: "151",
    },
  },
  {
    kind: "youtube#channel",
    etag: "Av3S_YWpygW_rADQMmxgLwzUjas",
    id: "UCSM54qcBP60U61HOMm_SUqA",
    snippet: {
      title: "Play DMF",
      description: "Welcome to Play DMF Youtube channel.",
      customUrl: "@playdmf",
      publishedAt: "2018-10-05T15:12:40Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/wdSodpC19ie4jVTnwnYJRm1PevU1PsfwWs_JkD6IJeNcdUxyiP8dxYa5FvTYDzHKLH1JEIWXuw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/wdSodpC19ie4jVTnwnYJRm1PevU1PsfwWs_JkD6IJeNcdUxyiP8dxYa5FvTYDzHKLH1JEIWXuw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/wdSodpC19ie4jVTnwnYJRm1PevU1PsfwWs_JkD6IJeNcdUxyiP8dxYa5FvTYDzHKLH1JEIWXuw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Play DMF",
        description: "Welcome to Play DMF Youtube channel.",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUSM54qcBP60U61HOMm_SUqA",
      },
    },
    statistics: {
      viewCount: "963992336",
      subscriberCount: "3340000",
      hiddenSubscriberCount: false,
      videoCount: "145",
    },
  },
  {
    kind: "youtube#channel",
    etag: "CELkAQdUg5wyuFuGotVKwJAgZ40",
    id: "UC7A2r9_k7hBfAmUz7F5flag",
    snippet: {
      title: "Dreamz Unlimited",
      description: "Comedy acts, Short Films, Gags and many more",
      customUrl: "@dreamzunlimited7714",
      publishedAt: "2016-12-22T17:19:24Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTj7W9iZQ9Rmqvx01foPcln74Z_p_-oUs3FZyzg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTj7W9iZQ9Rmqvx01foPcln74Z_p_-oUs3FZyzg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTj7W9iZQ9Rmqvx01foPcln74Z_p_-oUs3FZyzg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Dreamz Unlimited",
        description: "Comedy acts, Short Films, Gags and many more",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU7A2r9_k7hBfAmUz7F5flag",
      },
    },
    statistics: {
      viewCount: "224772236",
      subscriberCount: "916000",
      hiddenSubscriberCount: false,
      videoCount: "297",
    },
  },
  {
    kind: "youtube#channel",
    etag: "v6vSMYlnRHNpG0q7-7pWA3NZ5aE",
    id: "UC2DDhRE75LKKPjAxC-zsGRg",
    snippet: {
      title: "Disney+ HotstarTelugu",
      description:
        "Welcome to Disney+ Hotstar Telugu, your ultimate destination for wholesome entertainment. This is your space to have fun with series of Romance, Action, Drama and something really unpredictive. \nExplore our Telugu library and dive down to Movies, Series, events and More",
      customUrl: "@disneyhotstartelugu",
      publishedAt: "2021-12-27T13:15:27.19263Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/VMyz5-mdL5_sqji_59i9zoIeBh_LhbHhznCdgplJUCRJPyZ2_ZvsrbDCtOOFwnot21tTj_Y=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/VMyz5-mdL5_sqji_59i9zoIeBh_LhbHhznCdgplJUCRJPyZ2_ZvsrbDCtOOFwnot21tTj_Y=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/VMyz5-mdL5_sqji_59i9zoIeBh_LhbHhznCdgplJUCRJPyZ2_ZvsrbDCtOOFwnot21tTj_Y=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      defaultLanguage: "en-IN",
      localized: {
        title: "Disney+ HotstarTelugu",
        description:
          "Welcome to Disney+ Hotstar Telugu, your ultimate destination for wholesome entertainment. This is your space to have fun with series of Romance, Action, Drama and something really unpredictive. \nExplore our Telugu library and dive down to Movies, Series, events and More",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU2DDhRE75LKKPjAxC-zsGRg",
      },
    },
    statistics: {
      viewCount: "437916761",
      subscriberCount: "565000",
      hiddenSubscriberCount: false,
      videoCount: "1196",
    },
  },
  {
    kind: "youtube#channel",
    etag: "LIj9VfB-niIynSYEmsywILefDtA",
    id: "UCcXQd6kHKm0b41x8zMVMmMg",
    snippet: {
      title: "JioStudios",
      description:
        "Official Account of JioStudios\n\nwebsite : https://www.ril.com | https://www.jio.com/\nEmail Id: pitch2.jiostudios@ril.com\n",
      customUrl: "@jiostudios",
      publishedAt: "2018-11-05T06:07:05Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/m9WvArAk8ycx159cbze1Y9WV6B_dvEC1PMoxy_fZvdFivJWiB-dcA5u0i7Y2V9x7LAPDGkMn0g=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/m9WvArAk8ycx159cbze1Y9WV6B_dvEC1PMoxy_fZvdFivJWiB-dcA5u0i7Y2V9x7LAPDGkMn0g=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/m9WvArAk8ycx159cbze1Y9WV6B_dvEC1PMoxy_fZvdFivJWiB-dcA5u0i7Y2V9x7LAPDGkMn0g=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "JioStudios",
        description:
          "Official Account of JioStudios\n\nwebsite : https://www.ril.com | https://www.jio.com/\nEmail Id: pitch2.jiostudios@ril.com\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUcXQd6kHKm0b41x8zMVMmMg",
      },
    },
    statistics: {
      viewCount: "219352711",
      subscriberCount: "442000",
      hiddenSubscriberCount: false,
      videoCount: "317",
    },
  },
  {
    kind: "youtube#channel",
    etag: "6wf1xmLlpOr6z4e3U7z-UXF9bM4",
    id: "UCebC4x5l2-PQxg46Ucv9CsA",
    snippet: {
      title: "Crazy XYZ",
      description:
        "Hello Guys, We create and upload videos related to Science Experiments, Life Hacks, Amazing Modification, Diwali Crackers and much more. \n\nPlease make sure to SUBSCRIBE our channel to make your world little bit more Curious and Joyful.\n\nFollow our Facebook Page- https://m.facebook.com/CrazyXYZfb/\nInstagram- @amit.yt\n\nFor Business :-  crazyxyz@creatorscompany.com\nManaged by Creators Company (FKA Brandzup)\n\n\n",
      customUrl: "@crazyxyz",
      publishedAt: "2017-09-10T18:22:11Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRAnP99NzAZvqEqfCTWU7k9Y7J3RSNqqKC7I7tq0A=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRAnP99NzAZvqEqfCTWU7k9Y7J3RSNqqKC7I7tq0A=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRAnP99NzAZvqEqfCTWU7k9Y7J3RSNqqKC7I7tq0A=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Crazy XYZ",
        description:
          "Hello Guys, We create and upload videos related to Science Experiments, Life Hacks, Amazing Modification, Diwali Crackers and much more. \n\nPlease make sure to SUBSCRIBE our channel to make your world little bit more Curious and Joyful.\n\nFollow our Facebook Page- https://m.facebook.com/CrazyXYZfb/\nInstagram- @amit.yt\n\nFor Business :-  crazyxyz@creatorscompany.com\nManaged by Creators Company (FKA Brandzup)\n\n\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUebC4x5l2-PQxg46Ucv9CsA",
      },
    },
    statistics: {
      viewCount: "7901487111",
      subscriberCount: "27600000",
      hiddenSubscriberCount: false,
      videoCount: "1278",
    },
  },
  {
    kind: "youtube#channel",
    etag: "F8rMXALiJcW7-OfEc0tMWlKBZzs",
    id: "UCzXpAx4v6rFLYXkJZ5nmSvQ",
    snippet: {
      title: "LIV Crime",
      description:
        "Love crime shows? This is just the destination for you. Catch back to back CID, Crime Patrol, Adaalat and many more shows here.",
      customUrl: "@livcrime",
      publishedAt: "2020-08-18T11:32:26.607969Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/KUIS6mJgrYkNTaUuCdda7ewat5IFHzGK0hULzV0c0b5BsIeThimuIULKg2IcQemtmPwbDDnOPg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/KUIS6mJgrYkNTaUuCdda7ewat5IFHzGK0hULzV0c0b5BsIeThimuIULKg2IcQemtmPwbDDnOPg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/KUIS6mJgrYkNTaUuCdda7ewat5IFHzGK0hULzV0c0b5BsIeThimuIULKg2IcQemtmPwbDDnOPg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "LIV Crime",
        description:
          "Love crime shows? This is just the destination for you. Catch back to back CID, Crime Patrol, Adaalat and many more shows here.",
      },
      country: "US",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUzXpAx4v6rFLYXkJZ5nmSvQ",
      },
    },
    statistics: {
      viewCount: "11786852628",
      subscriberCount: "22200000",
      hiddenSubscriberCount: false,
      videoCount: "10678",
    },
  },
  {
    kind: "youtube#channel",
    etag: "_cl2djaliZdUBI3SSDUeh-_8oRU",
    id: "UCuSD-BXA1p8S3HfE8LsEkHA",
    snippet: {
      title: "Village Food Channel",
      description:
        "Welcome to Village Food Channel. This will entertain you with most interesting Food Recipes, Village Style Foods, Traditional Food Recipes and More... Please WATCH ALL VIDEO completely then LIKE, SHARE and SUBSCRIBE this channel to get very useful Food recipe . And also your subscription help the POOR ON OLD AGE  HOME, DISABLED TRUST and ORPHANAGES, Because a one part of this channel's payments will be given to them as a charity. So please SUBSCRIBE, WATCH VIDEO and SHARE.IT. VALUES AS A GOOD DEED",
      customUrl: "@villagefoodchannelofficial",
      publishedAt: "2018-01-17T09:34:07Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/SAOzCuxtQ2wfgDrYeZm_Mqc6tnJEDPEEmUPqPVpHY-7k5p0PAsSteRxpfiM_i2bNSxXyBlAKZQ=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/SAOzCuxtQ2wfgDrYeZm_Mqc6tnJEDPEEmUPqPVpHY-7k5p0PAsSteRxpfiM_i2bNSxXyBlAKZQ=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/SAOzCuxtQ2wfgDrYeZm_Mqc6tnJEDPEEmUPqPVpHY-7k5p0PAsSteRxpfiM_i2bNSxXyBlAKZQ=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Village Food Channel",
        description:
          "Welcome to Village Food Channel. This will entertain you with most interesting Food Recipes, Village Style Foods, Traditional Food Recipes and More... Please WATCH ALL VIDEO completely then LIKE, SHARE and SUBSCRIBE this channel to get very useful Food recipe . And also your subscription help the POOR ON OLD AGE  HOME, DISABLED TRUST and ORPHANAGES, Because a one part of this channel's payments will be given to them as a charity. So please SUBSCRIBE, WATCH VIDEO and SHARE.IT. VALUES AS A GOOD DEED",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUuSD-BXA1p8S3HfE8LsEkHA",
      },
    },
    statistics: {
      viewCount: "1218181886",
      subscriberCount: "7380000",
      hiddenSubscriberCount: false,
      videoCount: "401",
    },
  },
  {
    kind: "youtube#channel",
    etag: "tZJkLNx_G57kVP7WroUU3zLMKx4",
    id: "UCfLuT3JwLx8rvHjHfTymekw",
    snippet: {
      title: "Triggered Insaan",
      description:
        "A meme who laughs at memes :)\n\nBusiness inquiries: nischay@collabx.in\n\nThanks For Reading :)",
      customUrl: "@triggeredinsaan",
      publishedAt: "2014-07-17T13:31:54Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQQNJixDV-rGhNh-oMZd7pOnSwlxtsWQXbep0TzFA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQQNJixDV-rGhNh-oMZd7pOnSwlxtsWQXbep0TzFA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQQNJixDV-rGhNh-oMZd7pOnSwlxtsWQXbep0TzFA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Triggered Insaan",
        description:
          "A meme who laughs at memes :)\n\nBusiness inquiries: nischay@collabx.in\n\nThanks For Reading :)",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUfLuT3JwLx8rvHjHfTymekw",
      },
    },
    statistics: {
      viewCount: "3454596744",
      subscriberCount: "20300000",
      hiddenSubscriberCount: false,
      videoCount: "306",
    },
  },
  {
    kind: "youtube#channel",
    etag: "536TGNs5GCYjqxvq_LcthCgr7KM",
    id: "UCJF4y2nyCCrDKTgA7dxz1Qw",
    snippet: {
      title: "Star Maa",
      description: "",
      customUrl: "@starmaaofficial",
      publishedAt: "2006-08-12T08:34:11Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/YGmCb8GilIy2oDdvP8IMnE6kCEOmptqSmtLT-9CRASWFdC4ZBJxM7X23IkTBjKvF0jhXZyHYHw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/YGmCb8GilIy2oDdvP8IMnE6kCEOmptqSmtLT-9CRASWFdC4ZBJxM7X23IkTBjKvF0jhXZyHYHw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/YGmCb8GilIy2oDdvP8IMnE6kCEOmptqSmtLT-9CRASWFdC4ZBJxM7X23IkTBjKvF0jhXZyHYHw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Star Maa",
        description: "",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUJF4y2nyCCrDKTgA7dxz1Qw",
      },
    },
    statistics: {
      viewCount: "12053075713",
      subscriberCount: "9060000",
      hiddenSubscriberCount: false,
      videoCount: "48426",
    },
  },
  {
    kind: "youtube#channel",
    etag: "NbDXqgX-_Wpd0Cvt5Szl7ru--To",
    id: "UCRLmEkBUd79YjTZTWLPBrYQ",
    snippet: {
      title: "VATS RECORDS",
      description:
        "Stay Connected with us For All New/Latest Haryanvi Songs.\nContact us - \nVats Records Company Contact For Any Quries Audio & Video Releasing. \nEse hi Pyar Bnaye Rakhna Aap Sabhi ❤\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n",
      customUrl: "@vatsrecords",
      publishedAt: "2019-07-27T08:51:12Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSe6Sm5yFyAT_qI6DGmXlxkOmfqlQ9uT-9Ma9p4Qg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSe6Sm5yFyAT_qI6DGmXlxkOmfqlQ9uT-9Ma9p4Qg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSe6Sm5yFyAT_qI6DGmXlxkOmfqlQ9uT-9Ma9p4Qg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "VATS RECORDS",
        description:
          "Stay Connected with us For All New/Latest Haryanvi Songs.\nContact us - \nVats Records Company Contact For Any Quries Audio & Video Releasing. \nEse hi Pyar Bnaye Rakhna Aap Sabhi ❤\n\nLabel & Copyright - Vats Records\nCompany Owner : Pawan Sharma\nProducer : Gulshan Sharma\nFor Any Enquiry Company Contacts\n8168614500 , 7404210848\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UURLmEkBUd79YjTZTWLPBrYQ",
      },
    },
    statistics: {
      viewCount: "1703546636",
      subscriberCount: "4180000",
      hiddenSubscriberCount: false,
      videoCount: "133",
    },
  },
  {
    kind: "youtube#channel",
    etag: "I7V3ZrjXKBjktj6TTQS4T99qodo",
    id: "UC7ITT3ooYWDYY_ehIUbt6eg",
    snippet: {
      title: "Asian Cricket Council",
      description:
        "This is the Official YouTube Channel of the Asian Cricket Council.\n\nFor more updates, follow us on:\n\nFacebook: \nwww.facebook.com/AsianCricketCouncil/\n\nInstagram: \nwww.instagram.com/asiancricketcouncil\n\nTwitter: \nwww.twitter.com/accmedia1\n\nLinkedIn: \nwww.linkedin.com/company/asian-cricket-council-media\n",
      customUrl: "@asiancricketcounciltv",
      publishedAt: "2022-10-02T04:24:01.375806Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/6aLGUKNgK97FyqShBOoJwUd1kUtIJfDbx8Pvt31ceLmboNWMADnDSX7KsDxWrGWkLuPUO5vYpA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/6aLGUKNgK97FyqShBOoJwUd1kUtIJfDbx8Pvt31ceLmboNWMADnDSX7KsDxWrGWkLuPUO5vYpA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/6aLGUKNgK97FyqShBOoJwUd1kUtIJfDbx8Pvt31ceLmboNWMADnDSX7KsDxWrGWkLuPUO5vYpA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Asian Cricket Council",
        description:
          "This is the Official YouTube Channel of the Asian Cricket Council.\n\nFor more updates, follow us on:\n\nFacebook: \nwww.facebook.com/AsianCricketCouncil/\n\nInstagram: \nwww.instagram.com/asiancricketcouncil\n\nTwitter: \nwww.twitter.com/accmedia1\n\nLinkedIn: \nwww.linkedin.com/company/asian-cricket-council-media\n",
      },
      country: "AE",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU7ITT3ooYWDYY_ehIUbt6eg",
      },
    },
    statistics: {
      viewCount: "223884213",
      subscriberCount: "1230000",
      hiddenSubscriberCount: false,
      videoCount: "402",
    },
  },
  {
    kind: "youtube#channel",
    etag: "POlSTBwLv14NCoTzfOBEYX8jtp8",
    id: "UCLbdVvreihwZRL6kwuEUYsA",
    snippet: {
      title: "Think Music India",
      description:
        "About Think Music - Official Channel\n\nThe official YouTube channel of Think Music. \n\n",
      customUrl: "@thinkmusicofficial",
      publishedAt: "2009-08-15T08:30:56Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQqNvslPpkOOREUNBZeZn9LJNY1TL1hxnFH9GphVw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQqNvslPpkOOREUNBZeZn9LJNY1TL1hxnFH9GphVw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQqNvslPpkOOREUNBZeZn9LJNY1TL1hxnFH9GphVw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Think Music India",
        description:
          "About Think Music - Official Channel\n\nThe official YouTube channel of Think Music. \n\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UULbdVvreihwZRL6kwuEUYsA",
      },
    },
    statistics: {
      viewCount: "11499795649",
      subscriberCount: "14100000",
      hiddenSubscriberCount: false,
      videoCount: "5094",
    },
  },
  {
    kind: "youtube#channel",
    etag: "FJZ8QEd00M6JtXHDr1pBgBKmqbM",
    id: "UCtFQDgA8J8_iiwc5-KoAQlg",
    snippet: {
      title: "ANI News",
      description:
        "Welcome to official channel of ANI.\nPowered by South Asia's leading news agency, ANI News on YouTube brings you the latest news round the clock. \nANI is providing content for every information platform, including TV, Internet, broadband, newspapers and mobiles. \nWe provide unmatched news coverage from South Asia including breaking news and features with regional perspectives, along with politics, business, health, technology, travel and entertainment content. The New Delhi head office is staffed by professionals round the clock 365 days a year.. where news content is collected, packaged and delivered in various formats.  \nEnjoy and stay connected with us!!\n☛ Subscribe to our YouTube channel: https://bit.ly/2UV4ygi\n☛ Follow us: https://twitter.com/ani \n☛ Visit our Official website: https://www.aninews.in/ \n☛ Email to: anicontent@aniin.com, internetani@aniin.com\nCopyrights © All Rights Reserved ANI Media Pvt Ltd.\n#ANI #ANINews #AsianNewsInternational #BreakingNews \n",
      customUrl: "@aninewsindia",
      publishedAt: "2015-02-03T06:40:56Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRW1p0lhznh3iobOPQ0h7ST3HKr0S8cwfLghXaP-A=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRW1p0lhznh3iobOPQ0h7ST3HKr0S8cwfLghXaP-A=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRW1p0lhznh3iobOPQ0h7ST3HKr0S8cwfLghXaP-A=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "ANI News",
        description:
          "Welcome to official channel of ANI.\nPowered by South Asia's leading news agency, ANI News on YouTube brings you the latest news round the clock. \nANI is providing content for every information platform, including TV, Internet, broadband, newspapers and mobiles. \nWe provide unmatched news coverage from South Asia including breaking news and features with regional perspectives, along with politics, business, health, technology, travel and entertainment content. The New Delhi head office is staffed by professionals round the clock 365 days a year.. where news content is collected, packaged and delivered in various formats.  \nEnjoy and stay connected with us!!\n☛ Subscribe to our YouTube channel: https://bit.ly/2UV4ygi\n☛ Follow us: https://twitter.com/ani \n☛ Visit our Official website: https://www.aninews.in/ \n☛ Email to: anicontent@aniin.com, internetani@aniin.com\nCopyrights © All Rights Reserved ANI Media Pvt Ltd.\n#ANI #ANINews #AsianNewsInternational #BreakingNews \n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUtFQDgA8J8_iiwc5-KoAQlg",
      },
    },
    statistics: {
      viewCount: "1235575876",
      subscriberCount: "3180000",
      hiddenSubscriberCount: false,
      videoCount: "129179",
    },
  },
  {
    kind: "youtube#channel",
    etag: "Ce4SriqIT9YqlFLeddwYjkYc2Y4",
    id: "UCYHU3nB-21PeM1FmmLbergA",
    snippet: {
      title: "Manisha Rani",
      description:
        "Hey My Name is Manisha Rani  I'm Dancer, Actor, Social Media Influencer .\nThis channel is Basically for Entertainment\n============================================================\nDigital Manage- Panthalassa Digital Media\nEmail: info@rangmediagroup.com\n\nFollow me on सोशल मीडिया 😛 !\nIG: https://bit.ly/3oOP1LX\nFB: \n\n\n",
      customUrl: "@manisharanicomedy",
      publishedAt: "2017-07-18T10:46:57Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQbnhOesqbIlibA6wbE1VOrb4NNnXvztndrXtYXPA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQbnhOesqbIlibA6wbE1VOrb4NNnXvztndrXtYXPA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQbnhOesqbIlibA6wbE1VOrb4NNnXvztndrXtYXPA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Manisha Rani",
        description:
          "Hey My Name is Manisha Rani  I'm Dancer, Actor, Social Media Influencer .\nThis channel is Basically for Entertainment\n============================================================\nDigital Manage- Panthalassa Digital Media\nEmail: info@rangmediagroup.com\n\nFollow me on सोशल मीडिया 😛 !\nIG: https://bit.ly/3oOP1LX\nFB: \n\n\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUYHU3nB-21PeM1FmmLbergA",
      },
    },
    statistics: {
      viewCount: "1253342580",
      subscriberCount: "2700000",
      hiddenSubscriberCount: false,
      videoCount: "612",
    },
  },
  {
    kind: "youtube#channel",
    etag: "zx73LLx9nRuarxngimSUhd_83Wk",
    id: "UC3pFVvw_HwykroUwLRdfRkg",
    snippet: {
      title: "Star Maa Music",
      description: "",
      customUrl: "@starmaamusic",
      publishedAt: "2008-09-12T14:39:09Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/FK5qeVk4c8WmcsoGP20vzGQqYGu1Sdhx7uqlCjwSTKL7ZmbtnE4GYTcs5fKNL691UhwOyJJZDw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/FK5qeVk4c8WmcsoGP20vzGQqYGu1Sdhx7uqlCjwSTKL7ZmbtnE4GYTcs5fKNL691UhwOyJJZDw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/FK5qeVk4c8WmcsoGP20vzGQqYGu1Sdhx7uqlCjwSTKL7ZmbtnE4GYTcs5fKNL691UhwOyJJZDw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Star Maa Music",
        description: "",
      },
      country: "US",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU3pFVvw_HwykroUwLRdfRkg",
      },
    },
    statistics: {
      viewCount: "1455202554",
      subscriberCount: "2340000",
      hiddenSubscriberCount: false,
      videoCount: "5564",
    },
  },
  {
    kind: "youtube#channel",
    etag: "It2cLWF8iRriJ0epVShZPuHmFNQ",
    id: "UC-LPIU24bQXVljUXivKEeRQ",
    snippet: {
      title: "StarPlus",
      description: "Rishta Wahi, Baat Nayi",
      customUrl: "@starplus",
      publishedAt: "2006-05-19T21:46:13Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/dTXsoAPnQ3rEkf7Mw8CTbH3wvnnhCzdahQU_HLgYNbH_dV5Sn_ql-gK_Sv1gpIqcMZmxEmkFmQ=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/dTXsoAPnQ3rEkf7Mw8CTbH3wvnnhCzdahQU_HLgYNbH_dV5Sn_ql-gK_Sv1gpIqcMZmxEmkFmQ=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/dTXsoAPnQ3rEkf7Mw8CTbH3wvnnhCzdahQU_HLgYNbH_dV5Sn_ql-gK_Sv1gpIqcMZmxEmkFmQ=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "StarPlus",
        description: "Rishta Wahi, Baat Nayi",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU-LPIU24bQXVljUXivKEeRQ",
      },
    },
    statistics: {
      viewCount: "30441153210",
      subscriberCount: "34000000",
      hiddenSubscriberCount: false,
      videoCount: "55270",
    },
  },
  {
    kind: "youtube#channel",
    etag: "idHoOSWaDRBHQv17LiiCZVCjB-w",
    id: "UCTw9sSG-fK0QJJXNnB-K-Iw",
    snippet: {
      title: "Cherry Sathakshi",
      description:
        "This is the Official Youtube channel for Cherry Sathakshi\n\n\n",
      customUrl: "@cherrysathakshi",
      publishedAt: "2019-04-25T14:35:19Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQsY6qj8wa05YdCRfvez5lDB3C4Nbz_2FkncnAnTg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQsY6qj8wa05YdCRfvez5lDB3C4Nbz_2FkncnAnTg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQsY6qj8wa05YdCRfvez5lDB3C4Nbz_2FkncnAnTg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Cherry Sathakshi",
        description:
          "This is the Official Youtube channel for Cherry Sathakshi\n\n\n",
      },
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUTw9sSG-fK0QJJXNnB-K-Iw",
      },
    },
    statistics: {
      viewCount: "245667014",
      subscriberCount: "609000",
      hiddenSubscriberCount: false,
      videoCount: "942",
    },
  },
  {
    kind: "youtube#channel",
    etag: "gLJUPhQvS8c1IFQvwYmjVSVPikA",
    id: "UCiPmhfdCL06cSVTXKabF0Zg",
    snippet: {
      title: "Nakkalites",
      description:
        "Welcome to the Nakkalites channel! We are a family in love with stories that take you down memory lane, school life, endless society drama, politics, family, and more.\n\nWatch our best Tamil troll videos, political satire videos, and comedy dialogues to keep you entertained.\n\nSubscribe to our channel and download our app to enjoy exclusive video streaming.\n\n**********************\n\nOur Digital Partner - Divo\nDivo is one of the leading digital media companies in South India working with brands and content creators across genres.\n\n**********************\n",
      customUrl: "@nakkalitestamil",
      publishedAt: "2017-05-26T14:17:29Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/Wi5qmfrl24aasHi_6DCfqBKwoeo03qMn_zwrr8KCB3QxAPZ016ApBWQ1DJ8uyhfajq272JgM7Gg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/Wi5qmfrl24aasHi_6DCfqBKwoeo03qMn_zwrr8KCB3QxAPZ016ApBWQ1DJ8uyhfajq272JgM7Gg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/Wi5qmfrl24aasHi_6DCfqBKwoeo03qMn_zwrr8KCB3QxAPZ016ApBWQ1DJ8uyhfajq272JgM7Gg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Nakkalites",
        description:
          "Welcome to the Nakkalites channel! We are a family in love with stories that take you down memory lane, school life, endless society drama, politics, family, and more.\n\nWatch our best Tamil troll videos, political satire videos, and comedy dialogues to keep you entertained.\n\nSubscribe to our channel and download our app to enjoy exclusive video streaming.\n\n**********************\n\nOur Digital Partner - Divo\nDivo is one of the leading digital media companies in South India working with brands and content creators across genres.\n\n**********************\n",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUiPmhfdCL06cSVTXKabF0Zg",
      },
    },
    statistics: {
      viewCount: "1343907879",
      subscriberCount: "5150000",
      hiddenSubscriberCount: false,
      videoCount: "715",
    },
  },
  {
    kind: "youtube#channel",
    etag: "N0f8xGy9JW5Fevw2YwpQqidH65w",
    id: "UC55IWqFLDH1Xp7iu1_xknRA",
    snippet: {
      title: "Colors TV",
      description:
        "Welcome to the official main channel of Colors TV!\n\nShow some love people by subscribing to our channel: http://www.youtube.com/user/colorstv?sub_confirmation=1\nFollow us on Google+: https://plus.google.com/108336806150063826507\nFollow us on Facebook: https://www.facebook.com/ColorsTV\nFollow us on Twitter: https://twitter.com/ColorsTV",
      customUrl: "@colorstv",
      publishedAt: "2008-06-13T11:09:32Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQ6lXWnrLfuGjAEhmSIiGNiFJvl0OvXzdFdYGDj=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQ6lXWnrLfuGjAEhmSIiGNiFJvl0OvXzdFdYGDj=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaQ6lXWnrLfuGjAEhmSIiGNiFJvl0OvXzdFdYGDj=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Colors TV",
        description:
          "Welcome to the official main channel of Colors TV!\n\nShow some love people by subscribing to our channel: http://www.youtube.com/user/colorstv?sub_confirmation=1\nFollow us on Google+: https://plus.google.com/108336806150063826507\nFollow us on Facebook: https://www.facebook.com/ColorsTV\nFollow us on Twitter: https://twitter.com/ColorsTV",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU55IWqFLDH1Xp7iu1_xknRA",
      },
    },
    statistics: {
      viewCount: "63669430696",
      subscriberCount: "66500000",
      hiddenSubscriberCount: false,
      videoCount: "116208",
    },
  },
  {
    kind: "youtube#channel",
    etag: "e0Dnt_6ka4vC027wFEb6CKfXQdU",
    id: "UCVGiG3GcphUyMzNXg2iMN3A",
    snippet: {
      title: "Telly Reporter",
      description:
        "Telly Reporter: Your Trusted Source of Latest Telly Updates, Hindi TV Serial News, Interviews, Gossips, Preview, On Sets,  BTS Reality & Exclusive Segments With Your Favorite Celebrities! Subscribe to Stay Updated. \nContact (Only For Business Inquiries & Copyright Issues): +91-7506324292 / pr@tellyreporter.com",
      customUrl: "@tellyreporter",
      publishedAt: "2016-06-01T09:07:41Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/CNKuIZ-EqRmHMEua0RH_ogb5Nu0s6KwlJxHApBTzLlqo5wNGLI-fkuNtR3n44tFcm-dYXRoljrc=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/CNKuIZ-EqRmHMEua0RH_ogb5Nu0s6KwlJxHApBTzLlqo5wNGLI-fkuNtR3n44tFcm-dYXRoljrc=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/CNKuIZ-EqRmHMEua0RH_ogb5Nu0s6KwlJxHApBTzLlqo5wNGLI-fkuNtR3n44tFcm-dYXRoljrc=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Telly Reporter",
        description:
          "Telly Reporter: Your Trusted Source of Latest Telly Updates, Hindi TV Serial News, Interviews, Gossips, Preview, On Sets,  BTS Reality & Exclusive Segments With Your Favorite Celebrities! Subscribe to Stay Updated. \nContact (Only For Business Inquiries & Copyright Issues): +91-7506324292 / pr@tellyreporter.com",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUVGiG3GcphUyMzNXg2iMN3A",
      },
    },
    statistics: {
      viewCount: "2539685734",
      subscriberCount: "4240000",
      hiddenSubscriberCount: false,
      videoCount: "42418",
    },
  },
  {
    kind: "youtube#channel",
    etag: "EWvt262pYw4k5NsP1fCSVs_cdnI",
    id: "UCp3WhZOVIJ9oUDT3rjXmINw",
    snippet: {
      title: "Dwaraka Creations",
      description:
        "Dwaraka Creations was established by Mr. Miriyala Ravinder Reddy, a production house well known for super hit movies like Jaya Janaki Nayaka, Saahasam Swaasaga Saagipo, Yaman, and Karthi's Tamil dubbed version Chinnababu. Recently, the banner delivered a Massive blockbuster Akhanda, starring Nandamuri Balakrishna, which is Directed by Boyapati Sreenu, and Music Composed by Thaman S. \n\nSubscribe - http://bit.ly/2iEvZ6s\nLike - https://www.facebook.com/DwarakaCreationsOffl\nFollow - https://twitter.com/Dwarakacreation\nFollow - https://www.instagram.com/dwarakacreationsoffl\nFor any copyright queries, Please reach out to claims@whackedout.in.",
      customUrl: "@dwarakacreationsofficial",
      publishedAt: "2016-07-19T09:12:08Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRQEhKFUf3La5OJyonmE4uxQTrKXRBPlmFOcNo0=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRQEhKFUf3La5OJyonmE4uxQTrKXRBPlmFOcNo0=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRQEhKFUf3La5OJyonmE4uxQTrKXRBPlmFOcNo0=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Dwaraka Creations",
        description:
          "Dwaraka Creations was established by Mr. Miriyala Ravinder Reddy, a production house well known for super hit movies like Jaya Janaki Nayaka, Saahasam Swaasaga Saagipo, Yaman, and Karthi's Tamil dubbed version Chinnababu. Recently, the banner delivered a Massive blockbuster Akhanda, starring Nandamuri Balakrishna, which is Directed by Boyapati Sreenu, and Music Composed by Thaman S. \n\nSubscribe - http://bit.ly/2iEvZ6s\nLike - https://www.facebook.com/DwarakaCreationsOffl\nFollow - https://twitter.com/Dwarakacreation\nFollow - https://www.instagram.com/dwarakacreationsoffl\nFor any copyright queries, Please reach out to claims@whackedout.in.",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUp3WhZOVIJ9oUDT3rjXmINw",
      },
    },
    statistics: {
      viewCount: "188283995",
      subscriberCount: "557000",
      hiddenSubscriberCount: false,
      videoCount: "153",
    },
  },
  {
    kind: "youtube#channel",
    etag: "m0MbBwPwNIvu1atps0CDnuvNqTc",
    id: "UCvrhwpnp2DHYQ1CbXby9ypQ",
    snippet: {
      title: "Vijay Television",
      description:
        'Vijay Television ("Vijay") is a leading Tamil Language Entertainment Channel broadcasting innovative shows & programs from India.  Vijay TV is part of the STAR network and is commonly referred to as STAR VIJAY.',
      customUrl: "@vijaytelevision",
      publishedAt: "2007-02-01T11:57:18Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/O1B3gQKkFQlhsr0w6R5fhbNMGhlVHcIS6q6wsIX35C4xW9akkOxj1tATDLQYPKBO8oxgq7Dj=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/O1B3gQKkFQlhsr0w6R5fhbNMGhlVHcIS6q6wsIX35C4xW9akkOxj1tATDLQYPKBO8oxgq7Dj=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/O1B3gQKkFQlhsr0w6R5fhbNMGhlVHcIS6q6wsIX35C4xW9akkOxj1tATDLQYPKBO8oxgq7Dj=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Vijay Television",
        description:
          'Vijay Television ("Vijay") is a leading Tamil Language Entertainment Channel broadcasting innovative shows & programs from India.  Vijay TV is part of the STAR network and is commonly referred to as STAR VIJAY.',
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUvrhwpnp2DHYQ1CbXby9ypQ",
      },
    },
    statistics: {
      viewCount: "31337960170",
      subscriberCount: "21100000",
      hiddenSubscriberCount: false,
      videoCount: "54513",
    },
  },
  {
    kind: "youtube#channel",
    etag: "mDHOwEYUipPeD_Y0GCIL1GTSZyA",
    id: "UCjvgGbPPn-FgYeguc5nxG4A",
    snippet: {
      title: "Sourav Joshi Vlogs",
      description:
        "This is sourav Joshi \n\nThis is my vlog channel.\n\nOn this channel I share my life with you guys. \n\nI am an artist and Vlogger .\n\nMy art channel - Sourav Joshi arts (4 million  + subscribers)\n\n\n\n\n",
      customUrl: "@souravjoshivlogs7028",
      publishedAt: "2019-02-19T07:06:46Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/f6BWKFJa-1DcnqCIqiGCqNl2daN4rSo21UogJbKcmPC6h_VkvlF3TQ1rF-I6hN66hZ6Dfjb-bA=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/f6BWKFJa-1DcnqCIqiGCqNl2daN4rSo21UogJbKcmPC6h_VkvlF3TQ1rF-I6hN66hZ6Dfjb-bA=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/f6BWKFJa-1DcnqCIqiGCqNl2daN4rSo21UogJbKcmPC6h_VkvlF3TQ1rF-I6hN66hZ6Dfjb-bA=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Sourav Joshi Vlogs",
        description:
          "This is sourav Joshi \n\nThis is my vlog channel.\n\nOn this channel I share my life with you guys. \n\nI am an artist and Vlogger .\n\nMy art channel - Sourav Joshi arts (4 million  + subscribers)\n\n\n\n\n",
      },
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUjvgGbPPn-FgYeguc5nxG4A",
      },
    },
    statistics: {
      viewCount: "9969718982",
      subscriberCount: "22500000",
      hiddenSubscriberCount: false,
      videoCount: "1441",
    },
  },
  {
    kind: "youtube#channel",
    etag: "HMFaTfBR1a1rXQLEwWzT-vIO6ss",
    id: "UC4JCksJF76g_MdzPVBJoC3Q",
    snippet: {
      title: "ARY Digital HD",
      description:
        "ARY Digital is the most watched Entertainment channel in Pakistan. ARY Digital is the flagship channel of ARY Network.\n\n©️ Copyright: All rights reserved by ARY Digital Network.\n",
      customUrl: "@arydigitalasia",
      publishedAt: "2016-07-11T09:30:11Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/QhOVHhLgg5wFu4H4gA9qOVoavng-T2xoA62cXVV-dk-j8phnED3P8whca8CETo0GuAVhQgtO=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/QhOVHhLgg5wFu4H4gA9qOVoavng-T2xoA62cXVV-dk-j8phnED3P8whca8CETo0GuAVhQgtO=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/QhOVHhLgg5wFu4H4gA9qOVoavng-T2xoA62cXVV-dk-j8phnED3P8whca8CETo0GuAVhQgtO=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "ARY Digital HD",
        description:
          "ARY Digital is the most watched Entertainment channel in Pakistan. ARY Digital is the flagship channel of ARY Network.\n\n©️ Copyright: All rights reserved by ARY Digital Network.\n",
      },
      country: "PK",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UU4JCksJF76g_MdzPVBJoC3Q",
      },
    },
    statistics: {
      viewCount: "41002080666",
      subscriberCount: "45600000",
      hiddenSubscriberCount: false,
      videoCount: "115345",
    },
  },
  {
    kind: "youtube#channel",
    etag: "kvdZRPWEgI43iWSlkA_mA54iXPI",
    id: "UCLkAepWjdylmXSltofFvsYQ",
    snippet: {
      title: "BANGTANTV",
      description:
        "This is the official YouTube channel of BTS. 방탄소년단 공식 유튜브 채널 입니다.",
      customUrl: "@bts",
      publishedAt: "2012-12-17T03:20:38Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/zL7KDS7WEHVbgpo6dM91hL5e91etHiuq2umW32iSePrhE5411SPsEdpAEcf5m5mYS-a_vpl7Ww=s88-c-k-c0x00ffffff-no-nd-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/zL7KDS7WEHVbgpo6dM91hL5e91etHiuq2umW32iSePrhE5411SPsEdpAEcf5m5mYS-a_vpl7Ww=s240-c-k-c0x00ffffff-no-nd-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/zL7KDS7WEHVbgpo6dM91hL5e91etHiuq2umW32iSePrhE5411SPsEdpAEcf5m5mYS-a_vpl7Ww=s800-c-k-c0x00ffffff-no-nd-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "BANGTANTV",
        description:
          "This is the official YouTube channel of BTS. 방탄소년단 공식 유튜브 채널 입니다.",
      },
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UULkAepWjdylmXSltofFvsYQ",
      },
    },
    statistics: {
      viewCount: "21293223644",
      subscriberCount: "76300000",
      hiddenSubscriberCount: false,
      videoCount: "2328",
    },
  },
  {
    kind: "youtube#channel",
    etag: "5NkO0jqVn66WfUsg7ZmV5Xvy8MQ",
    id: "UCBLE3niXkzxWQIGzQojvOkw",
    snippet: {
      title: "Caught Behind",
      description:
        "All about international #cricket from #Pakistan, #India & all over the globe. \nThis channel is being managed and operated by HASHTAG (biz@hashtag.com.pk)\n\n#sports #cricket #cricketanalysis #cricketnews #caughtbehind #pakistan #pakistancricket #internationalcricket #live #talkshow #exclusive  \n",
      customUrl: "@caughtbehindshow",
      publishedAt: "2018-07-03T11:52:06Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaS7favSbZ5S_Vgoy0X5pCkSPSmRaszEXyr8PcXs8g=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaS7favSbZ5S_Vgoy0X5pCkSPSmRaszEXyr8PcXs8g=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaS7favSbZ5S_Vgoy0X5pCkSPSmRaszEXyr8PcXs8g=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Caught Behind",
        description:
          "All about international #cricket from #Pakistan, #India & all over the globe. \nThis channel is being managed and operated by HASHTAG (biz@hashtag.com.pk)\n\n#sports #cricket #cricketanalysis #cricketnews #caughtbehind #pakistan #pakistancricket #internationalcricket #live #talkshow #exclusive  \n",
      },
      country: "AE",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUBLE3niXkzxWQIGzQojvOkw",
      },
    },
    statistics: {
      viewCount: "116786675",
      subscriberCount: "371000",
      hiddenSubscriberCount: false,
      videoCount: "1606",
    },
  },
  {
    kind: "youtube#channel",
    etag: "L1AptK6Fy9LzwShDgjqnOfEFv1Q",
    id: "UCfIpZ2GsJc8nf94udbaSOpg",
    snippet: {
      title: "Amit XYZ",
      description:
        "Hi, this is Vlog Channel of Crazy XYZ. Here I upload regular vlogs.\nPlease subscribe to this channel to stay updated. Thanks.",
      customUrl: "@amitxyz",
      publishedAt: "2019-07-05T07:51:09Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTBf43SMMb5XRi_Xg0XhpxysWRGgPYZxdC7gMHfrw=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTBf43SMMb5XRi_Xg0XhpxysWRGgPYZxdC7gMHfrw=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaTBf43SMMb5XRi_Xg0XhpxysWRGgPYZxdC7gMHfrw=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Amit XYZ",
        description:
          "Hi, this is Vlog Channel of Crazy XYZ. Here I upload regular vlogs.\nPlease subscribe to this channel to stay updated. Thanks.",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUfIpZ2GsJc8nf94udbaSOpg",
      },
    },
    statistics: {
      viewCount: "49525481",
      subscriberCount: "1070000",
      hiddenSubscriberCount: false,
      videoCount: "59",
    },
  },
  {
    kind: "youtube#channel",
    etag: "nmqESSiJCEGR59tBYB37yRic3fM",
    id: "UCtgGOdTlM-NdJ9rPKIYN8UQ",
    snippet: {
      title: "Slayy Point",
      description:
        "This is Abhyudaya and Gautami, two school friends, who together make fun videos on millennial friendly topics 😁\nSUBSCRIBE and hit the bell icon! FOLLOW US ON SOCIAL MEDIA \n\nBusiness enquiries :- slayypointofficial@gmail.com",
      customUrl: "@slayypointofficial",
      publishedAt: "2016-03-07T14:34:01Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSgXhenTQ8UR9Mig8tcp6Y94RS_Bf2OWgkTuuA_ig=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSgXhenTQ8UR9Mig8tcp6Y94RS_Bf2OWgkTuuA_ig=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaSgXhenTQ8UR9Mig8tcp6Y94RS_Bf2OWgkTuuA_ig=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "Slayy Point",
        description:
          "This is Abhyudaya and Gautami, two school friends, who together make fun videos on millennial friendly topics 😁\nSUBSCRIBE and hit the bell icon! FOLLOW US ON SOCIAL MEDIA \n\nBusiness enquiries :- slayypointofficial@gmail.com",
      },
      country: "IN",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUtgGOdTlM-NdJ9rPKIYN8UQ",
      },
    },
    statistics: {
      viewCount: "2026304275",
      subscriberCount: "8060000",
      hiddenSubscriberCount: false,
      videoCount: "163",
    },
  },
  {
    kind: "youtube#channel",
    etag: "z6ulyBfzBjoyZLI1BnMWak7zBrM",
    id: "UCyEnhHynhlQX-ReSHe7j3ow",
    snippet: {
      title: "CH WALEED RAUF",
      description:
        'This is Waleed Rauf ( 23 year old young Cricket Expert 😀 bss naam ka ) But reality is i am "A DIE HARD EMOTIONAL CRICKET FAN"\nIn this channel you are watching my Pre & Post Cricket Match Reactions and Analysis all based on my Emotions & Passion Towards Cricket.\nFrom This Platform i am spreading positivity and I hope you guys are loving my Content.\nand Oneday i hope after 10 to 15 years i\'ll become a proper Cricket Expert INSHAALLAH.\nDo Subscribe my channel and Share your thoughts in my videos Comments.\nFor any information:\nYou can Contact me through\nbusinesswithwaleed28@gmail.com\n',
      customUrl: "@chwaleedrauf",
      publishedAt: "2020-08-10T02:49:28.248995Z",
      thumbnails: {
        default: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRkOkBTAXhWsGOPZf40k9dYNGqpQjXEDMOVaSIebg=s88-c-k-c0x00ffffff-no-rj",
          width: 88,
          height: 88,
        },
        medium: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRkOkBTAXhWsGOPZf40k9dYNGqpQjXEDMOVaSIebg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        high: {
          url: "https://yt3.ggpht.com/ytc/AOPolaRkOkBTAXhWsGOPZf40k9dYNGqpQjXEDMOVaSIebg=s800-c-k-c0x00ffffff-no-rj",
          width: 800,
          height: 800,
        },
      },
      localized: {
        title: "CH WALEED RAUF",
        description:
          'This is Waleed Rauf ( 23 year old young Cricket Expert 😀 bss naam ka ) But reality is i am "A DIE HARD EMOTIONAL CRICKET FAN"\nIn this channel you are watching my Pre & Post Cricket Match Reactions and Analysis all based on my Emotions & Passion Towards Cricket.\nFrom This Platform i am spreading positivity and I hope you guys are loving my Content.\nand Oneday i hope after 10 to 15 years i\'ll become a proper Cricket Expert INSHAALLAH.\nDo Subscribe my channel and Share your thoughts in my videos Comments.\nFor any information:\nYou can Contact me through\nbusinesswithwaleed28@gmail.com\n',
      },
      country: "PK",
    },
    contentDetails: {
      relatedPlaylists: {
        likes: "",
        uploads: "UUyEnhHynhlQX-ReSHe7j3ow",
      },
    },
    statistics: {
      viewCount: "63820942",
      subscriberCount: "149000",
      hiddenSubscriberCount: false,
      videoCount: "1463",
    },
  },
];
