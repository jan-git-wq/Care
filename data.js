const DATA = {
  "check": {
    "date": "2026-10-09",
    "timezone": "Asia/Hong_Kong",
    "checked_at_hong_kong": "2026-10-09T10:52:00+08:00",
    "status": "partial_source_refresh",
    "collection_window_hong_kong": "2026-10-09 10:44-10:52",
    "platforms": {
      "Philips.de": {
        "rating": 4.7,
        "rating_count": 30,
        "written_count": 30,
        "last_verified": "2026-10-09",
        "net_count_change": 4,
        "rating_change": 0.1
      },
      "Amazon.de": {
        "rating": 4.9,
        "rating_count": 10,
        "written_count": 10,
        "last_verified": "2026-10-09",
        "net_count_change": 4,
        "rating_change": -0.1
      },
      "bol.com": {
        "rating": null,
        "rating_count": null,
        "written_count": 0,
        "last_verified": null,
        "net_count_change": null
      }
    },
    "overall": {
      "rating_count": null,
      "displayed_mean_estimate": null,
      "verified_pool_rating_count": 40,
      "verified_pool_mean": 4.725,
      "coded_review_count": 40,
      "cached_reviews": 0,
      "reason": "Full-scope combined rating unavailable: bol SCD871 could not be checked. Verified Philips + Amazon pool: 40 reviews, 29 five-star and 11 four-star; exact arithmetic mean 4.725."
    },
    "new_review_ids": [
      "philips-scd871-Mamma#2-2026-10-08",
      "philips-scd871-Svampbob97-2026-10-08",
      "philips-scd871-Lampnisse-2026-10-07",
      "philips-scd871-Sissi95200-2026-10-04",
      "RJ3NW8FSMAA6P",
      "R2QBHMUEUY8W3W",
      "RC1G8223KFVC2",
      "R1NAB29KIA69FK"
    ],
    "new_mentions": {
      "positive: Satisfactory picture quality": {
        "Philips": 4,
        "Amazon": 3,
        "corrections": 0
      },
      "positive: Easy setup/use": {
        "Philips": 3,
        "Amazon": 3,
        "corrections": 0
      },
      "positive: Works without Wi-Fi": {
        "Philips": 2,
        "Amazon": 3,
        "corrections": 0
      },
      "positive: Long parent-unit battery": {
        "Philips": 2,
        "Amazon": 1,
        "corrections": 0
      },
      "negative: Camera requires mains power": {
        "Philips": 2,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: High price": {
        "Philips": 0,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: No remote smartphone monitoring": {
        "Philips": 1,
        "Amazon": 0,
        "corrections": 1
      },
      "negative: Missing mounting clamp": {
        "Philips": 0,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: No remote camera pan/tilt": {
        "Philips": 0,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: Limited parent-unit battery life": {
        "Philips": 1,
        "Amazon": 0,
        "corrections": 1
      },
      "negative: Menu closes too quickly": {
        "Philips": 0,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: Recording expectation mismatch": {
        "Philips": 0,
        "Amazon": 0,
        "corrections": 0
      },
      "negative: Missing motion detection": {
        "Philips": 1,
        "Amazon": 0,
        "corrections": 0
      }
    },
    "review_access": {
      "Philips.de": {
        "readable_today": 30,
        "matched_existing": 26,
        "new_records_confirmed": 4,
        "last_text_check": "2026-10-09"
      },
      "Amazon.de": {
        "readable_today": 10,
        "matched_existing": 6,
        "new_records_confirmed": 4,
        "last_text_check": "2026-10-09",
        "comparison_date": "2026-10-07",
        "yesterday_additions": null
      },
      "bol.com": {
        "readable_today": 0,
        "new_records_confirmed": null,
        "last_text_check": "2026-10-08"
      }
    },
    "freshness": "Philips: 30 reviews verified across the shared pool (+4). Amazon: 10 ratings/reviews verified (+4 net); four newly observed IDs since 7 Oct, but daily additions unavailable because 8 Oct review details were inaccessible. bol SCD861: no reviews in today-crawled page; bol SCD871: access blocked, zero reported by the earlier 9 Oct 10:26 check (cached).",
    "coverage_gaps": [
      "bol SCD871 blocked during retry; earlier published 9 Oct 10:26 check reported zero",
      "Amazon SCD861/26 and SCD863/26 listings not verified",
      "bol SCD863/26 listing not verified",
      "Four newly observed Amazon reviews lack explicit reviewed-SKU wording; family-level/unknown although listed on SCD871 page"
    ],
    "new_content": "Newly observed reviews reinforce clear pictures, easy operation, Wi-Fi-free use and satisfactory battery life. New Philips criticisms mention camera mains power, parent-unit battery life, missing motion detection and requested phone access. These are feature requests or reviewer experiences, not verified product failures.",
    "corrections": [
      {
        "date": "2026-10-09",
        "theme": "No remote smartphone monitoring",
        "added_reviewers": [
          "Stef4n"
        ],
        "reason": "Previously uncounted explicit criticism; coding correction, not a new review or rating."
      },
      {
        "date": "2026-10-09",
        "theme": "Limited parent-unit battery life",
        "added_reviewers": [
          "Frassesmorsa"
        ],
        "reason": "Previously uncounted explicit criticism; coding correction, not a new review or rating."
      }
    ],
    "theme_note": "New Philips mentions compare with 8 October. Newly observed Amazon mentions compare with 7 October; daily additions remain unavailable. Two earlier criticisms were added as coding corrections. No deletions or star edits detected versus last complete platform identity snapshots; body edits cannot be established without equivalent prior raw captures.",
    "prior_same_day_run": {
      "checked_at": "2026-10-09T10:26:58+08:00",
      "philips_count": 28,
      "amazon_count_displayed": 2,
      "amazon_scope_unresolved": true,
      "additional_philips_ids_since_that_run": [
        "philips-scd871-Mamma#2-2026-10-08",
        "philips-scd871-Svampbob97-2026-10-08"
      ],
      "note": "Retained earlier published snapshot. Daily comparison remains 8 October. Four Amazon IDs are newly accessible since last complete 7 October snapshot, not eight additions inferred from the earlier inconsistent count."
    },
    "bol_scd871_cached": {
      "rating_count": 0,
      "last_successful_retrieval": "2026-10-09T10:26:58+08:00",
      "provenance": "Earlier published same-day check; unavailable during this retry"
    }
  },
  "date": "2026-10-09",
  "timezone": "Asia/Hong_Kong",
  "reviews": [
    {
      "key": "philips-scd871-hhome-2026-10-01",
      "platform": "Philips.de",
      "reviewer": "hhome",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [
        "Camera requires mains power",
        "High price"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1232210586"
    },
    {
      "key": "philips-scd871-Stef4n-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "Stef4n",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Long parent-unit battery"
      ],
      "negative": [
        "No remote smartphone monitoring"
      ],
      "original_excerpts": {
        "No remote smartphone monitoring": "Keine App-Anbindung"
      },
      "last_verified": "2026-10-09",
      "source_id": "1231945633"
    },
    {
      "key": "philips-scd871-Naninour88-2026-09-26",
      "platform": "Philips.de",
      "reviewer": "Naninour88",
      "date": "2026-09-26",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231328899"
    },
    {
      "key": "philips-scd871-Blitz279-2026-09-26",
      "platform": "Philips.de",
      "reviewer": "Blitz279",
      "date": "2026-09-26",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231304948"
    },
    {
      "key": "philips-scd871-bambaer-2026-09-25",
      "platform": "Philips.de",
      "reviewer": "bambaer",
      "date": "2026-09-25",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231134215"
    },
    {
      "key": "philips-scd871-Angix33-2026-09-25",
      "platform": "Philips.de",
      "reviewer": "Angix33",
      "date": "2026-09-25",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231024236"
    },
    {
      "key": "philips-scd871-Christoffel94-2026-10-03",
      "platform": "Philips.de",
      "reviewer": "Christoffel94",
      "date": "2026-10-03",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1232436816"
    },
    {
      "key": "philips-scd871-Anonymous (Babyfoon)-2026-10-01",
      "platform": "Philips.de",
      "reviewer": "Anonymous (Babyfoon)",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1232233092"
    },
    {
      "key": "philips-scd871-Bilge21-2026-10-01",
      "platform": "Philips.de",
      "reviewer": "Bilge21",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1232215198"
    },
    {
      "key": "philips-scd871-Anoniem-A-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "Anoniem-A",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231827578"
    },
    {
      "key": "philips-scd871-Maola-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "Maola",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231786651"
    },
    {
      "key": "philips-scd871-jacresp-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "jacresp",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231780872"
    },
    {
      "key": "philips-scd871-Serlis-2026-09-28",
      "platform": "Philips.de",
      "reviewer": "Serlis",
      "date": "2026-09-28",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [
        "Missing mounting clamp"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1231479666"
    },
    {
      "key": "philips-scd871-MG08-2026-09-25",
      "platform": "Philips.de",
      "reviewer": "MG08",
      "date": "2026-09-25",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1231031036"
    },
    {
      "key": "philips-scd871-Miirree1-2026-09-23",
      "platform": "Philips.de",
      "reviewer": "Miirree1",
      "date": "2026-09-23",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Long parent-unit battery"
      ],
      "negative": [
        "Camera requires mains power"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1230643429"
    },
    {
      "key": "philips-scd871-Sunesune-2026-09-21",
      "platform": "Philips.de",
      "reviewer": "Sunesune",
      "date": "2026-09-21",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1230337930"
    },
    {
      "key": "philips-scd871-Jack..E-2026-10-01",
      "platform": "Philips.de",
      "reviewer": "Jack..E",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Long parent-unit battery"
      ],
      "negative": [
        "Missing mounting clamp"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1232221411"
    },
    {
      "key": "philips-scd871-Sandri81-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "Sandri81",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [
        "No remote camera pan/tilt"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1231926688"
    },
    {
      "key": "philips-scd871-Animalischer Tester-2026-09-27",
      "platform": "Philips.de",
      "reviewer": "Animalischer Tester",
      "date": "2026-09-27",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [
        "Camera requires mains power"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1231382535"
    },
    {
      "key": "philips-scd871-Adde_97-2026-10-04",
      "platform": "Philips.de",
      "reviewer": "Adde_97",
      "date": "2026-10-04",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1232541973"
    },
    {
      "key": "philips-scd871-Oggie58-2026-10-03",
      "platform": "Philips.de",
      "reviewer": "Oggie58",
      "date": "2026-10-03",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "last_verified": "2026-10-09",
      "source_id": "1232477351"
    },
    {
      "key": "philips-scd871-Fölunge2026-2026-10-03",
      "platform": "Philips.de",
      "reviewer": "Fölunge2026",
      "date": "2026-10-03",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [
        "No remote camera pan/tilt"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1232455351"
    },
    {
      "key": "philips-scd871-Hopperiks-2026-10-01",
      "platform": "Philips.de",
      "reviewer": "Hopperiks",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Long parent-unit battery"
      ],
      "negative": [
        "High price"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1232186852"
    },
    {
      "key": "philips-scd871-Nicksje123-2026-09-29",
      "platform": "Philips.de",
      "reviewer": "Nicksje123",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [
        "Camera requires mains power",
        "No remote camera pan/tilt"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1231792224"
    },
    {
      "key": "philips-scd871-Frassesmorsa-2026-09-24",
      "platform": "Philips.de",
      "reviewer": "Frassesmorsa",
      "date": "2026-09-24",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Long parent-unit battery"
      ],
      "negative": [
        "High price",
        "Limited parent-unit battery life"
      ],
      "original_excerpts": {
        "Limited parent-unit battery life": "Batteritiden kan upplevas som begränsad vid längre användning."
      },
      "last_verified": "2026-10-09",
      "source_id": "1230848601"
    },
    {
      "key": "philips-scd871-Kattmjao-2026-09-21",
      "platform": "Philips.de",
      "reviewer": "Kattmjao",
      "date": "2026-09-21",
      "reviewed_sku": "SCD871/26",
      "stars": 4,
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality"
      ],
      "negative": [
        "Camera requires mains power",
        "Missing mounting clamp"
      ],
      "last_verified": "2026-10-09",
      "source_id": "1230319484"
    },
    {
      "key": "R22EVOPIT6VTMX",
      "platform": "Amazon.de",
      "reviewer": "Lenchen",
      "date": "2026-10-02",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "last_verified": "2026-10-09"
    },
    {
      "key": "R13GK2DBW70V2K",
      "platform": "Amazon.de",
      "reviewer": "Stefan Humpert",
      "date": "2026-09-29",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09"
    },
    {
      "key": "R2DNDDQCG4O2G7",
      "platform": "Amazon.de",
      "reviewer": "Nevarion",
      "date": "2026-10-03",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09"
    },
    {
      "key": "R16Y9LUAWSTVC5",
      "platform": "Amazon.de",
      "reviewer": "Freakhelm",
      "date": "2026-10-01",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [
        "Menu closes too quickly",
        "Recording expectation mismatch"
      ],
      "last_verified": "2026-10-09"
    },
    {
      "key": "R3SKEHRKNWLCHQ",
      "platform": "Amazon.de",
      "reviewer": "Thierry【ツ】",
      "date": "2026-10-04",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [
        "No remote smartphone monitoring"
      ],
      "last_verified": "2026-10-09"
    },
    {
      "key": "R22CARJK56LEDC",
      "platform": "Amazon.de",
      "reviewer": "🌺 LES PÉPITES D'AMY 🌺",
      "date": "2026-10-04",
      "reviewed_sku": "SCD871/26",
      "stars": 5,
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "last_verified": "2026-10-09"
    },
    {
      "key": "philips-scd871-Mamma#2-2026-10-08",
      "platform": "Philips.de",
      "reviewer": "Mamma#2",
      "date": "2026-10-08",
      "stars": 5,
      "reviewed_sku": "SCD871/26",
      "listing_sku": "SCD871/26",
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [
        "Camera requires mains power"
      ],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Grym bild!",
        "Works without Wi-Fi": "Ingen Wi-Fi behövs.",
        "Long parent-unit battery": "batteri som håller bra",
        "Camera requires mains power": "Kameradelen har sladd"
      },
      "last_verified": "2026-10-09"
    },
    {
      "key": "philips-scd871-Svampbob97-2026-10-08",
      "platform": "Philips.de",
      "reviewer": "Svampbob97",
      "date": "2026-10-08",
      "stars": 5,
      "reviewed_sku": "SCD871/26",
      "listing_sku": "SCD871/26",
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use"
      ],
      "negative": [],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Bilden är tydlig",
        "Easy setup/use": "enkel att använda"
      },
      "last_verified": "2026-10-09"
    },
    {
      "key": "philips-scd871-Lampnisse-2026-10-07",
      "platform": "Philips.de",
      "reviewer": "Lampnisse",
      "date": "2026-10-07",
      "stars": 5,
      "reviewed_sku": "SCD871/26",
      "listing_sku": "SCD871/26",
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Long parent-unit battery"
      ],
      "negative": [
        "No remote smartphone monitoring",
        "Missing motion detection"
      ],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Den skarpa och tydliga bilden",
        "Easy setup/use": "enkel att använda",
        "Long parent-unit battery": "Batteritiden på monitorn var förvånansvärt lång",
        "No remote smartphone monitoring": "gärna sett uppkoppling mot mobilen",
        "Missing motion detection": "Det jag främst saknar är rörelsedetektering"
      },
      "last_verified": "2026-10-09",
      "source_id": "1232847901"
    },
    {
      "key": "philips-scd871-Sissi95200-2026-10-04",
      "platform": "Philips.de",
      "reviewer": "Sissi95200",
      "date": "2026-10-04",
      "stars": 5,
      "reviewed_sku": "SCD871/26",
      "listing_sku": "SCD871/26",
      "incentive": "Teil der Aktion",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [
        "Camera requires mains power",
        "Limited parent-unit battery life"
      ],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Très bonne qualité de l'image",
        "Easy setup/use": "Très simple d’utilisation",
        "Works without Wi-Fi": "pas besoin de wifi",
        "Camera requires mains power": "prise proche du lit bébé",
        "Limited parent-unit battery life": "Autonomie de l’unité des parents"
      },
      "last_verified": "2026-10-09",
      "source_id": "1232508888"
    },
    {
      "key": "RJ3NW8FSMAA6P",
      "platform": "Amazon.de",
      "reviewer": "Uisge Beatha-Slàinte",
      "date": "2026-10-06",
      "stars": 5,
      "reviewed_sku": "Family-level / unknown",
      "listing_sku": "SCD871/26",
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "schön klar und ausreichend detailliert",
        "Easy setup/use": "Die Einrichtung war dadurch schnell erledigt",
        "Works without Wi-Fi": "dass das Babyphone ohne WLAN funktioniert"
      },
      "last_verified": "2026-10-09"
    },
    {
      "key": "R2QBHMUEUY8W3W",
      "platform": "Amazon.de",
      "reviewer": "Amazon Kunde",
      "date": "2026-10-06",
      "stars": 5,
      "reviewed_sku": "Family-level / unknown",
      "listing_sku": "SCD871/26",
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Easy setup/use"
      ],
      "negative": [],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Easy setup/use": "funktionierte bei uns auf Anhieb"
      },
      "last_verified": "2026-10-09"
    },
    {
      "key": "RC1G8223KFVC2",
      "platform": "Amazon.de",
      "reviewer": "Amazon Kunde",
      "date": "2026-10-07",
      "stars": 5,
      "reviewed_sku": "Family-level / unknown",
      "listing_sku": "SCD871/26",
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Works without Wi-Fi",
        "Long parent-unit battery"
      ],
      "negative": [],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Die Kamera liefert ein scharfes Bild",
        "Works without Wi-Fi": "Die Verbindung läuft ohne WLAN",
        "Long parent-unit battery": "Der Akku hält lange durch"
      },
      "last_verified": "2026-10-09"
    },
    {
      "key": "R1NAB29KIA69FK",
      "platform": "Amazon.de",
      "reviewer": "Roy",
      "date": "2026-10-06",
      "stars": 4,
      "reviewed_sku": "Family-level / unknown",
      "listing_sku": "SCD871/26",
      "incentive": "Vine Customer Review of Free Product",
      "positive": [
        "Satisfactory picture quality",
        "Easy setup/use",
        "Works without Wi-Fi"
      ],
      "negative": [],
      "first_seen": "2026-10-09",
      "original_excerpts": {
        "Satisfactory picture quality": "Une qualité d'image impressionnante",
        "Easy setup/use": "On branche, on allume, et ça fonctionne instantanément",
        "Works without Wi-Fi": "l'absence de Wi-Fi ou d'application à configurer"
      },
      "last_verified": "2026-10-09"
    }
  ],
  "themes": [
    {
      "sentiment": "positive",
      "key": "Satisfactory picture quality",
      "label": "Satisfactory picture quality",
      "quote": {
        "reviewer": "Christoffel94",
        "text": "Prachtig helder beeld.",
        "english": "Beautifully clear picture."
      }
    },
    {
      "sentiment": "positive",
      "key": "Easy setup/use",
      "label": "Easy setup and use",
      "quote": {
        "reviewer": "bambaer",
        "text": "Leichte Einrichtung",
        "english": "Easy setup."
      }
    },
    {
      "sentiment": "positive",
      "key": "Works without Wi-Fi",
      "label": "Works without Wi-Fi",
      "quote": {
        "reviewer": "Nevarion",
        "text": "kein WLAN erforderlich",
        "english": "No Wi-Fi required."
      }
    },
    {
      "sentiment": "positive",
      "key": "Long parent-unit battery",
      "label": "Satisfactory parent-unit battery life",
      "quote": {
        "reviewer": "Anoniem-A",
        "text": "Uitstekende batterijduur",
        "english": "Excellent battery life."
      }
    },
    {
      "sentiment": "negative",
      "key": "Camera requires mains power",
      "label": "Camera requires mains power",
      "quote": {
        "reviewer": "Animalischer Tester",
        "text": "Kamera hat keinen Akku",
        "english": "Camera has no battery."
      }
    },
    {
      "sentiment": "negative",
      "key": "High price",
      "label": "High purchase price",
      "quote": {
        "reviewer": "hhome",
        "text": "vergleichsweise relativ hoher Anschaffungspreis",
        "english": "Comparatively high purchase price."
      }
    },
    {
      "sentiment": "negative",
      "key": "Missing mounting clamp",
      "label": "Missing mounting attachment",
      "quote": {
        "reviewer": "Kattmjao",
        "text": "Saknar klämma",
        "english": "Missing a clamp."
      }
    },
    {
      "sentiment": "negative",
      "key": "No remote camera pan/tilt",
      "label": "No remote camera pan/tilt",
      "quote": {
        "reviewer": "Fölunge2026",
        "text": "Ej flyttbart kamerahuvud",
        "english": "Camera head cannot be moved."
      }
    },
    {
      "sentiment": "negative",
      "key": "Menu closes too quickly",
      "label": "Menu closes too quickly"
    },
    {
      "sentiment": "negative",
      "key": "Recording expectation mismatch",
      "label": "Recording expectation mismatch"
    },
    {
      "sentiment": "negative",
      "key": "No remote smartphone monitoring",
      "label": "No remote smartphone monitoring",
      "quote": {
        "reviewer": "Stef4n",
        "text": "Keine App-Anbindung",
        "english": "No app connection"
      }
    },
    {
      "sentiment": "negative",
      "key": "Limited parent-unit battery life",
      "label": "Limited parent-unit battery life"
    },
    {
      "sentiment": "negative",
      "key": "Missing motion detection",
      "label": "Missing motion detection"
    }
  ],
  "sources": {
    "amazon": "https://www.amazon.de/dp/B0HBRDDJWG",
    "bol861": "https://www.bol.com/nl/nl/p/philips-avent-videobabyfoon-4-5-inch-kleurenscherm-hd-camera-met-4x-zoom-nachtzicht-tot-48-uur-batterijduur-dekra-gecertificeerd-zonder-wifi-scd861-26/9300000318462240/",
    "bol871": "https://www.bol.com/nl/nl/p/philips-avent-videobabyfoon-4-5-inch-kleurenscherm-hd-camera-met-4x-zoom-400-m-berei-tot-60-uur-batterijduur-witte-ruis-zonder-wifi-scd871-26/9300000318462235/"
  },
  "excerpts": {
    "hhome": {
      "Satisfactory picture quality": "Good HD picture quality",
      "Easy setup/use": "Simple and intuitive operation",
      "Works without Wi-Fi": "Without Wi-Fi or an app",
      "Long parent-unit battery": "Good for daily use",
      "Camera requires mains power": "Camera requires power",
      "High price": "Comparatively high purchase price"
    },
    "Stef4n": {
      "Satisfactory picture quality": "A sharp night-vision image",
      "Long parent-unit battery": "An extremely long-lasting parent-unit battery",
      "No remote smartphone monitoring": "No app connection"
    },
    "Naninour88": {
      "Satisfactory picture quality": "A clear picture, even in night-vision mode",
      "Easy setup/use": "Operation is uncomplicated",
      "Works without Wi-Fi": "Works without internet",
      "Long parent-unit battery": "Lasts a long time in energy-saving mode"
    },
    "Blitz279": {
      "Satisfactory picture quality": "Very clear picture transmission",
      "Easy setup/use": "Simple operation"
    },
    "bambaer": {
      "Satisfactory picture quality": "Absolutely sufficient",
      "Easy setup/use": "Easy setup",
      "Long parent-unit battery": "Usually only charge every two days"
    },
    "Angix33": {
      "Satisfactory picture quality": "You can see everything excellently at night",
      "Easy setup/use": "Installed and ready to use in no time",
      "Works without Wi-Fi": "Completely without Wi-Fi"
    },
    "Christoffel94": {
      "Satisfactory picture quality": "Beautifully clear picture",
      "Easy setup/use": "Easy installation"
    },
    "Anonymous (Babyfoon)": {
      "Satisfactory picture quality": "Good picture and sound quality",
      "Easy setup/use": "Easy to use",
      "Long parent-unit battery": "Long battery life"
    },
    "Bilge21": {
      "Satisfactory picture quality": "The sharpness of the Full HD 1080p image",
      "Works without Wi-Fi": "Without needing Wi-Fi",
      "Long parent-unit battery": "Battery life is good thanks to energy-saving mode"
    },
    "Anoniem-A": {
      "Satisfactory picture quality": "Not very sharp, but sufficient",
      "Easy setup/use": "Handy, intuitive interface",
      "Works without Wi-Fi": "Not connected to the internet",
      "Long parent-unit battery": "Excellent battery life"
    },
    "jacresp": {
      "Satisfactory picture quality": "Video and audio quality is very good",
      "Easy setup/use": "Easy and effective"
    },
    "Serlis": {
      "Satisfactory picture quality": "Clear picture",
      "Easy setup/use": "Easy to use",
      "Works without Wi-Fi": "Requires neither Wi-Fi nor an internet connection",
      "Missing mounting clamp": "A stand that attaches to the bed"
    },
    "MG08": {
      "Satisfactory picture quality": "The clear picture",
      "Easy setup/use": "Easy to get started",
      "Works without Wi-Fi": "Without having to worry about Wi-Fi"
    },
    "Miirree1": {
      "Satisfactory picture quality": "The picture is clear",
      "Easy setup/use": "The screen is easy to use",
      "Long parent-unit battery": "The parent-unit battery lasts well",
      "Camera requires mains power": "The camera needs to be plugged in"
    },
    "Sunesune": {
      "Satisfactory picture quality": "Good, clear picture",
      "Easy setup/use": "Incredibly easy"
    },
    "Jack..E": {
      "Satisfactory picture quality": "Very good picture quality",
      "Long parent-unit battery": "The battery and range are fine",
      "Missing mounting clamp": "Attach the camera to the cot with a clamp"
    },
    "Sandri81": {
      "Satisfactory picture quality": "Razor-sharp",
      "Easy setup/use": "Setup was super quick and uncomplicated",
      "No remote camera pan/tilt": "Cannot pan the camera remotely via the parent unit"
    },
    "Animalischer Tester": {
      "Satisfactory picture quality": "Clear picture including night vision",
      "Easy setup/use": "Operation is uncomplicated",
      "Works without Wi-Fi": "No Wi-Fi needed",
      "Long parent-unit battery": "Easily lasts through the night",
      "Camera requires mains power": "Camera has no battery"
    },
    "Adde_97": {
      "Satisfactory picture quality": "Fantastic picture quality day and night",
      "Easy setup/use": "Easy to use"
    },
    "Oggie58": {
      "Satisfactory picture quality": "The picture quality looks clear",
      "Works without Wi-Fi": "Works without internet or an app"
    },
    "Fölunge2026": {
      "Satisfactory picture quality": "Good picture",
      "Easy setup/use": "Easy to install and understand",
      "No remote camera pan/tilt": "Would have liked a motor-controlled camera head"
    },
    "Hopperiks": {
      "Satisfactory picture quality": "A very sharp and wide picture",
      "Long parent-unit battery": "Long battery life",
      "High price": "Other baby monitors are much cheaper"
    },
    "Nicksje123": {
      "Satisfactory picture quality": "Sharp and clear",
      "Easy setup/use": "Very user-friendly",
      "Works without Wi-Fi": "No Wi-Fi connection needed",
      "Camera requires mains power": "The camera itself is wired",
      "No remote camera pan/tilt": "Cannot be tilted remotely"
    },
    "Frassesmorsa": {
      "Satisfactory picture quality": "Clear picture day and night",
      "Easy setup/use": "Easy to install and use",
      "Long parent-unit battery": "Battery life meets our needs",
      "High price": "Relatively high price",
      "Limited parent-unit battery life": "Battery life can feel limited during longer use"
    },
    "Kattmjao": {
      "Satisfactory picture quality": "Very good in light and darkness",
      "Camera requires mains power": "The camera needs a cord",
      "Missing mounting clamp": "Missing a clamp"
    },
    "Nevarion": {
      "Satisfactory picture quality": "Entirely sufficient for normal use",
      "Easy setup/use": "Easy to get started",
      "Works without Wi-Fi": "No Wi-Fi required",
      "Long parent-unit battery": "I also find the battery life good"
    },
    "Lenchen": {
      "Satisfactory picture quality": "Surprisingly clear",
      "Easy setup/use": "Pretty uncomplicated",
      "Works without Wi-Fi": "Works without Wi-Fi"
    },
    "Stefan Humpert": {
      "Satisfactory picture quality": "A clear and detailed picture",
      "Easy setup/use": "Setup is uncomplicated",
      "Works without Wi-Fi": "Works without Wi-Fi",
      "Long parent-unit battery": "Long battery life"
    },
    "Freakhelm": {
      "Satisfactory picture quality": "Truly outstanding quality",
      "Easy setup/use": "Smart and user-friendly",
      "Works without Wi-Fi": "Without Wi-Fi or internet",
      "Menu closes too quickly": "Disappears after a few seconds",
      "Recording expectation mismatch": "Without a recording function"
    },
    "Thierry【ツ】": {
      "Satisfactory picture quality": "A comfortable, sharp display",
      "Easy setup/use": "Easy to use",
      "Works without Wi-Fi": "Wi-Fi-free technology",
      "Long parent-unit battery": "A long-lasting battery",
      "No remote smartphone monitoring": "At the expense of monitoring outside via smartphone"
    },
    "🌺 LES PÉPITES D'AMY 🌺": {
      "Satisfactory picture quality": "A really sharp, detailed picture",
      "Easy setup/use": "No complicated installation",
      "Works without Wi-Fi": "No Wi-Fi connection or app needed",
      "Long parent-unit battery": "Battery life is a real plus"
    },
    "philips-scd871-Mamma#2-2026-10-08": {
      "Satisfactory picture quality": "Great picture!",
      "Works without Wi-Fi": "No Wi-Fi is needed.",
      "Long parent-unit battery": "Battery that lasts well",
      "Camera requires mains power": "The camera unit has a power cord"
    },
    "philips-scd871-Svampbob97-2026-10-08": {
      "Satisfactory picture quality": "The picture is clear",
      "Easy setup/use": "Easy to use"
    },
    "philips-scd871-Lampnisse-2026-10-07": {
      "Satisfactory picture quality": "The sharp, clear picture",
      "Easy setup/use": "Easy to use",
      "Long parent-unit battery": "The monitor battery life was surprisingly long",
      "No remote smartphone monitoring": "Would have liked connection to a mobile phone",
      "Missing motion detection": "What I mainly miss is motion detection"
    },
    "philips-scd871-Sissi95200-2026-10-04": {
      "Satisfactory picture quality": "Very good picture quality",
      "Easy setup/use": "Very easy to use",
      "Works without Wi-Fi": "No need for Wi-Fi",
      "Camera requires mains power": "A power socket near the baby's bed",
      "Limited parent-unit battery life": "Parent-unit battery life (listed as a drawback)"
    },
    "RJ3NW8FSMAA6P": {
      "Satisfactory picture quality": "Nice and clear, with enough detail",
      "Easy setup/use": "Setup was quickly completed",
      "Works without Wi-Fi": "The baby monitor works without Wi-Fi"
    },
    "R2QBHMUEUY8W3W": {
      "Easy setup/use": "Worked straight away for us"
    },
    "RC1G8223KFVC2": {
      "Satisfactory picture quality": "The camera delivers a sharp picture",
      "Works without Wi-Fi": "The connection works without Wi-Fi",
      "Long parent-unit battery": "The battery lasts a long time"
    },
    "R1NAB29KIA69FK": {
      "Satisfactory picture quality": "Impressive picture quality",
      "Easy setup/use": "Plug it in, switch it on, and it works immediately",
      "Works without Wi-Fi": "No Wi-Fi or app to configure"
    }
  },
  "ratingHistory": {
    "2026-10-07": {
      "Philips.de": {
        "complete": true,
        "scope": "shared-scd871-pool",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 10,
          "5": 16
        },
        "records": [
          {
            "id": "philips-scd871-hhome-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Stef4n-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Naninour88-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-Blitz279-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-bambaer-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Angix33-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Christoffel94-2026-10-03",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anonymous (Babyfoon)-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Bilge21-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anoniem-A-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Maola-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-jacresp-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Serlis-2026-09-28",
            "stars": 5
          },
          {
            "id": "philips-scd871-MG08-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Miirree1-2026-09-23",
            "stars": 5
          },
          {
            "id": "philips-scd871-Sunesune-2026-09-21",
            "stars": 5
          },
          {
            "id": "philips-scd871-Jack..E-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Sandri81-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Animalischer Tester-2026-09-27",
            "stars": 4
          },
          {
            "id": "philips-scd871-Adde_97-2026-10-04",
            "stars": 4
          },
          {
            "id": "philips-scd871-Oggie58-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Fölunge2026-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Hopperiks-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Nicksje123-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Frassesmorsa-2026-09-24",
            "stars": 4
          },
          {
            "id": "philips-scd871-Kattmjao-2026-09-21",
            "stars": 4
          }
        ]
      },
      "Amazon.de": {
        "complete": true,
        "scope": "B0HBRDDJWG",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 6
        },
        "records": [
          {
            "id": "R22EVOPIT6VTMX",
            "stars": 5
          },
          {
            "id": "R13GK2DBW70V2K",
            "stars": 5
          },
          {
            "id": "R2DNDDQCG4O2G7",
            "stars": 5
          },
          {
            "id": "R16Y9LUAWSTVC5",
            "stars": 5
          },
          {
            "id": "R3SKEHRKNWLCHQ",
            "stars": 5
          },
          {
            "id": "R22CARJK56LEDC",
            "stars": 5
          }
        ]
      },
      "bol.com": {
        "complete": true,
        "scope": "9300000318462240+9300000318462235",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "records": []
      }
    },
    "2026-10-08": {
      "Philips.de": {
        "complete": true,
        "scope": "shared-scd871-pool",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 10,
          "5": 16
        },
        "records": [
          {
            "id": "philips-scd871-hhome-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Stef4n-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Naninour88-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-Blitz279-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-bambaer-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Angix33-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Christoffel94-2026-10-03",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anonymous (Babyfoon)-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Bilge21-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anoniem-A-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Maola-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-jacresp-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Serlis-2026-09-28",
            "stars": 5
          },
          {
            "id": "philips-scd871-MG08-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Miirree1-2026-09-23",
            "stars": 5
          },
          {
            "id": "philips-scd871-Sunesune-2026-09-21",
            "stars": 5
          },
          {
            "id": "philips-scd871-Jack..E-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Sandri81-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Animalischer Tester-2026-09-27",
            "stars": 4
          },
          {
            "id": "philips-scd871-Adde_97-2026-10-04",
            "stars": 4
          },
          {
            "id": "philips-scd871-Oggie58-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Fölunge2026-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Hopperiks-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Nicksje123-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Frassesmorsa-2026-09-24",
            "stars": 4
          },
          {
            "id": "philips-scd871-Kattmjao-2026-09-21",
            "stars": 4
          }
        ],
        "checked_at": "2026-10-08T10:15:00+08:00",
        "match_method": "Same reviewer, date, reviewed SKU and stars as yesterday; all 26 visible records read",
        "source_discrepancy": "Web extraction reported 27 Philips SCD871 reviews; live browser showed 26 on all three SKU pages and all 26 reviews were loaded. No 27th review could be verified. Prefer the observed live pool; flag this unresolved source discrepancy."
      },
      "Amazon.de": {
        "complete": false,
        "scope": "B0HBRDDJWG",
        "histogram": null,
        "records": null,
        "rating_count": 6,
        "displayed_average": 5,
        "checked_at": "2026-10-08T10:15:00+08:00",
        "note": "Live count and mean verified; current individual stars/IDs not accessible. Do not count cached IDs as re-read."
      },
      "bol.com": {
        "complete": true,
        "scope": "9300000318462240+9300000318462235",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "records": [],
        "checked_at": "2026-10-08T10:15:00+08:00"
      }
    },
    "2026-10-09": {
      "Philips.de": {
        "complete": true,
        "scope": "shared-scd871-pool",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 10,
          "5": 20
        },
        "records": [
          {
            "id": "philips-scd871-hhome-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Stef4n-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Naninour88-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-Blitz279-2026-09-26",
            "stars": 5
          },
          {
            "id": "philips-scd871-bambaer-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Angix33-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Christoffel94-2026-10-03",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anonymous (Babyfoon)-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Bilge21-2026-10-01",
            "stars": 5
          },
          {
            "id": "philips-scd871-Anoniem-A-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Maola-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-jacresp-2026-09-29",
            "stars": 5
          },
          {
            "id": "philips-scd871-Serlis-2026-09-28",
            "stars": 5
          },
          {
            "id": "philips-scd871-MG08-2026-09-25",
            "stars": 5
          },
          {
            "id": "philips-scd871-Miirree1-2026-09-23",
            "stars": 5
          },
          {
            "id": "philips-scd871-Sunesune-2026-09-21",
            "stars": 5
          },
          {
            "id": "philips-scd871-Jack..E-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Sandri81-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Animalischer Tester-2026-09-27",
            "stars": 4
          },
          {
            "id": "philips-scd871-Adde_97-2026-10-04",
            "stars": 4
          },
          {
            "id": "philips-scd871-Oggie58-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Fölunge2026-2026-10-03",
            "stars": 4
          },
          {
            "id": "philips-scd871-Hopperiks-2026-10-01",
            "stars": 4
          },
          {
            "id": "philips-scd871-Nicksje123-2026-09-29",
            "stars": 4
          },
          {
            "id": "philips-scd871-Frassesmorsa-2026-09-24",
            "stars": 4
          },
          {
            "id": "philips-scd871-Kattmjao-2026-09-21",
            "stars": 4
          },
          {
            "id": "philips-scd871-Mamma#2-2026-10-08",
            "stars": 5
          },
          {
            "id": "philips-scd871-Svampbob97-2026-10-08",
            "stars": 5
          },
          {
            "id": "philips-scd871-Lampnisse-2026-10-07",
            "stars": 5
          },
          {
            "id": "philips-scd871-Sissi95200-2026-10-04",
            "stars": 5
          }
        ],
        "rating_count": 30,
        "displayed_average": 4.7,
        "checked_at_hong_kong": "2026-10-09T10:52:00+08:00",
        "note": "30 identities verified; four newly observed five-star reviews versus 8 October. First-seen date is not submission time."
      },
      "Amazon.de": {
        "complete": true,
        "scope": "B0HBRDDJWG",
        "histogram": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 1,
          "5": 9
        },
        "records": [
          {
            "id": "R22EVOPIT6VTMX",
            "stars": 5
          },
          {
            "id": "R13GK2DBW70V2K",
            "stars": 5
          },
          {
            "id": "R2DNDDQCG4O2G7",
            "stars": 5
          },
          {
            "id": "R16Y9LUAWSTVC5",
            "stars": 5
          },
          {
            "id": "R3SKEHRKNWLCHQ",
            "stars": 5
          },
          {
            "id": "R22CARJK56LEDC",
            "stars": 5
          },
          {
            "id": "RJ3NW8FSMAA6P",
            "stars": 5
          },
          {
            "id": "R2QBHMUEUY8W3W",
            "stars": 5
          },
          {
            "id": "RC1G8223KFVC2",
            "stars": 5
          },
          {
            "id": "R1NAB29KIA69FK",
            "stars": 4
          }
        ],
        "rating_count": 10,
        "displayed_average": 4.9,
        "checked_at_hong_kong": "2026-10-09T10:52:00+08:00",
        "note": "All 10 reviews readable; four IDs newly observed since 7 October. No complete 8 October identity snapshot, so daily additions unavailable. Displayed 91%/9% histogram is weighted; individual stars are nine 5-star and one 4-star."
      },
      "bol.com": {
        "complete": false,
        "scope": "9300000318462240+9300000318462235",
        "histogram": null,
        "records": null,
        "checked_at": "2026-10-08T10:15:00+08:00",
        "checked_at_hong_kong": "2026-10-09T10:52:00+08:00",
        "note": "SCD861: no reviews in today-crawled page. SCD871 blocked during retry; earlier published 9 Oct 10:26 check reported zero (cached, not current verification).",
        "listings": {
          "SCD861": {
            "complete": true,
            "histogram": {
              "1": 0,
              "2": 0,
              "3": 0,
              "4": 0,
              "5": 0
            }
          },
          "SCD871": {
            "complete": false,
            "last_successful_date": "2026-10-09",
            "last_successful_retrieval": "2026-10-09T10:26:58+08:00"
          }
        }
      }
    }
  }
};
