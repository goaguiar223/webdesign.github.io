// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "1",

      macros: [
        { function: "__e" },
        { function: "__c", vtp_value: "google.com.br" },
        { function: "__c", vtp_value: 0 },
        { vtp_signal: 1, function: "__c", vtp_value: 1 },
      ],
      tags: [
        {
          function: "__gct",
          vtp_trackingId: "G-P7JSYB1CSP",
          vtp_sessionDuration: 0,
          tag_id: 1,
        },
        {
          function: "__ccd_conversion_marking",
          vtp_conversionRules: [
            "list",
            [
              "map",
              "matchingRules",
              '{"type":5,"args":[{"stringValue":"purchase"},{"contextValue":{"namespaceType":1,"keyParts":["eventName"]}}]}',
            ],
          ],
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 3,
        },
        {
          function: "__ccd_em_download",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 5,
        },
        {
          function: "__ccd_em_outbound_click",
          priority: 0,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 6,
        },
        {
          function: "__ccd_em_page_view",
          vtp_historyEvents: true,
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 7,
        },
        {
          function: "__ccd_em_scroll",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 8,
        },
        {
          function: "__ccd_em_site_search",
          vtp_searchQueryParams: "q,s,search,query,keyword",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 9,
        },
        {
          function: "__ccd_em_video",
          vtp_includeParams: true,
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 10,
        },
        {
          function: "__ccd_ga_regscope",
          vtp_settingsTable: [
            "list",
            [
              "map",
              "redactFieldGroup",
              "DEVICE_AND_GEO",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
            [
              "map",
              "redactFieldGroup",
              "GOOGLE_SIGNALS",
              "disallowAllRegions",
              false,
              "disallowedRegions",
              "",
            ],
          ],
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          tag_id: 11,
        },
        {
          function: "__set_product_settings",
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          vtp_foreignTldMacroResult: ["macro", 1],
          vtp_isChinaVipRegionMacroResult: ["macro", 2],
          tag_id: 12,
        },
        {
          function: "__ogt_google_signals",
          vtp_googleSignals: "ENABLED",
          vtp_instanceDestinationId: "G-P7JSYB1CSP",
          vtp_serverMacroResult: ["macro", 3],
          tag_id: 13,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__ccd_em_video",
        [46, "a"],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "g"], "ae_block_video"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "h",
          [
            "c",
            [
              8,
              "captureComplete",
              true,
              "captureStart",
              true,
              "progressThresholdsPercent",
              [7, 10, 25, 50, 75],
            ],
          ],
        ],
        [22, [28, [15, "h"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.video",
          [
            51,
            "",
            [7, "i", "j"],
            ["j"],
            [52, "k", [16, [15, "i"], "gtm.videoStatus"]],
            [41, "l"],
            [
              22,
              [20, [15, "k"], "start"],
              [46, [3, "l", "video_start"]],
              [
                46,
                [
                  22,
                  [20, [15, "k"], "progress"],
                  [46, [3, "l", "video_progress"]],
                  [
                    46,
                    [
                      22,
                      [20, [15, "k"], "complete"],
                      [46, [3, "l", "video_complete"]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "m",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "video_current_time",
                  [16, [15, "i"], "gtm.videoCurrentTime"],
                  "video_duration",
                  [16, [15, "i"], "gtm.videoDuration"],
                  "video_percent",
                  [16, [15, "i"], "gtm.videoPercent"],
                  "video_provider",
                  [16, [15, "i"], "gtm.videoProvider"],
                  "video_title",
                  [16, [15, "i"], "gtm.videoTitle"],
                  "video_url",
                  [16, [15, "i"], "gtm.videoUrl"],
                  "visible",
                  [16, [15, "i"], "gtm.videoVisible"],
                ],
                [8],
              ],
            ],
            [
              22,
              [21, [15, "l"], [44]],
              [46, ["f", [15, "g"], [15, "l"], [15, "m"]]],
            ],
          ],
          [15, "h"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__set_product_settings",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "d"],
          "google_tld",
          [17, [15, "a"], "foreignTldMacroResult"],
        ],
        [
          "b",
          [15, "d"],
          "ga_restrict_domain",
          [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_site_search",
        [46, "a"],
        [
          50,
          "e",
          [46, "i"],
          [52, "j", [2, [30, [15, "i"], ""], "split", [7, ","]]],
          [
            53,
            [41, "k"],
            [3, "k", 0],
            [
              63,
              [7, "k"],
              [23, [15, "k"], [17, [15, "j"], "length"]],
              [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "l",
                    ["b", [2, [16, [15, "j"], [15, "k"]], "trim", [7]]],
                  ],
                  [22, [21, [15, "l"], [44]], [46, [36, [15, "l"]]]],
                ],
              ],
            ],
          ],
        ],
        [
          50,
          "f",
          [46, "i", "j"],
          [52, "k", [8, "search_term", [15, "i"]]],
          [52, "l", [2, [30, [15, "j"], ""], "split", [7, ","]]],
          [
            53,
            [41, "m"],
            [3, "m", 0],
            [
              63,
              [7, "m"],
              [23, [15, "m"], [17, [15, "l"], "length"]],
              [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
              [
                46,
                [
                  53,
                  [52, "n", [2, [16, [15, "l"], [15, "m"]], "trim", [7]]],
                  [52, "o", ["b", [15, "n"]]],
                  [
                    22,
                    [21, [15, "o"], [44]],
                    [46, [43, [15, "k"], [0, "q_", [15, "n"]], [15, "o"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "k"]],
        ],
        [52, "b", ["require", "getQueryParameters"]],
        [52, "c", ["require", "internal.sendGtagEvent"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          [15, "g"],
          [
            46,
            [
              53,
              [
                52,
                "i",
                [
                  39,
                  [28, [28, [17, [15, "a"], "includeParams"]]],
                  ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]],
                  [8],
                ],
              ],
              [
                "c",
                [15, "h"],
                "view_search_results",
                [15, "i"],
                [8, "deferrable", true],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_scroll",
        [46, "a"],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "g",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "g"], "ae_block_scroll"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "h",
          [
            "c",
            [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90],
          ],
        ],
        [22, [28, [15, "h"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.scrollDepth",
          [
            51,
            "",
            [7, "i", "j"],
            ["j"],
            [
              52,
              "k",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [8, "percent_scrolled", [16, [15, "i"], "gtm.scrollThreshold"]],
                [8],
              ],
            ],
            ["f", [15, "g"], "scroll", [15, "k"]],
          ],
          [15, "h"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_page_view",
        [46, "a"],
        [
          22,
          [28, [17, [15, "a"], "historyEvents"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnHistoryChange"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.sendGtagEvent"]],
        [52, "g", ["require", "internal.setRemoteConfigParameter"]],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "h"], "ae_block_history"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "i", ["c", [8, "interval", 1000]]],
        [22, [28, [15, "i"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.historyChange-v2",
          [
            51,
            "",
            [7, "j", "k"],
            ["k"],
            [52, "l", [16, [15, "j"], "gtm.oldUrl"]],
            [22, [20, [16, [15, "j"], "gtm.newUrl"], [15, "l"]], [46, [36]]],
            [52, "m", [16, [15, "j"], "gtm.historyChangeSource"]],
            [
              22,
              [
                1,
                [1, [21, [15, "m"], "pushState"], [21, [15, "m"], "popstate"]],
                [21, [15, "m"], "replaceState"],
              ],
              [46, [36]],
            ],
            [
              52,
              "n",
              [
                39,
                [28, [28, [17, [15, "a"], "includeParams"]]],
                [
                  8,
                  "page_location",
                  [16, [15, "j"], "gtm.newUrl"],
                  "page_referrer",
                  [15, "l"],
                ],
                [8],
              ],
            ],
            ["f", [15, "h"], "page_view", [15, "n"]],
            ["g", [15, "h"], "page_referrer", [15, "l"]],
          ],
          [15, "i"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ogt_google_signals",
        [46, "a"],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "getContainerVersion"]],
        [
          52,
          "d",
          [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]],
        ],
        [
          52,
          "e",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["c"], "containerId"],
          ],
        ],
        [
          "b",
          [15, "e"],
          "google_signals",
          [20, [17, [15, "a"], "serverMacroResult"], 1],
        ],
        [
          22,
          [17, [15, "d"], "enableGa4OnoRemarketing"],
          [
            46,
            [
              "b",
              [15, "e"],
              "google_ono",
              [20, [17, [15, "a"], "serverMacroResult"], 2],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_download",
        [46, "a"],
        [
          50,
          "i",
          [46, "o"],
          [
            36,
            [
              1,
              [15, "o"],
              [
                21,
                [
                  2,
                  [2, [15, "o"], "toLowerCase", [7]],
                  "match",
                  [7, [15, "h"]],
                ],
                [45],
              ],
            ],
          ],
        ],
        [
          50,
          "j",
          [46, "o"],
          [52, "p", [2, [17, [15, "o"], "pathname"], "split", [7, "."]]],
          [
            52,
            "q",
            [
              39,
              [18, [17, [15, "p"], "length"], 1],
              [16, [15, "p"], [37, [17, [15, "p"], "length"], 1]],
              "",
            ],
          ],
          [36, [16, [2, [15, "q"], "split", [7, "/"]], 0]],
        ],
        [
          50,
          "k",
          [46, "o"],
          [
            36,
            [
              39,
              [
                12,
                [2, [17, [15, "o"], "pathname"], "substring", [7, 0, 1]],
                "/",
              ],
              [17, [15, "o"], "pathname"],
              [0, "/", [17, [15, "o"], "pathname"]],
            ],
          ],
        ],
        [
          50,
          "l",
          [46, "o"],
          [41, "p"],
          [3, "p", ""],
          [
            22,
            [1, [15, "o"], [17, [15, "o"], "href"]],
            [
              46,
              [
                53,
                [41, "q"],
                [3, "q", [2, [17, [15, "o"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "p",
                  [
                    39,
                    [23, [15, "q"], 0],
                    [17, [15, "o"], "href"],
                    [
                      2,
                      [17, [15, "o"], "href"],
                      "substring",
                      [7, 0, [15, "q"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "p"]],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "parseUrl"]],
        [52, "g", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "h",
          [
            0,
            "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|",
            "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
          ],
        ],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [
          22,
          ["e", [15, "m"], "ae_block_downloads"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [52, "n", ["c", [8, "checkValidation", true]]],
        [22, [28, [15, "n"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "o", "p"],
            ["p"],
            [52, "q", [16, [15, "o"], "gtm.elementUrl"]],
            [52, "r", ["f", [15, "q"]]],
            [22, [28, [15, "r"]], [46, [36]]],
            [52, "s", ["j", [15, "r"]]],
            [
              22,
              ["i", [15, "s"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "t",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "o"], "gtm.elementId"],
                        "link_url",
                        ["l", [15, "r"]],
                        "link_text",
                        [16, [15, "o"], "gtm.elementText"],
                        "file_name",
                        ["k", [15, "r"]],
                        "file_extension",
                        [15, "s"],
                      ],
                      [8],
                    ],
                  ],
                  ["g", [15, "m"], "file_download", [15, "t"]],
                ],
              ],
            ],
          ],
          [15, "n"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_em_outbound_click",
        [46, "a"],
        [
          50,
          "j",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, [44]]]],
          [41, "q"],
          [3, "q", ""],
          [
            22,
            [1, [15, "p"], [17, [15, "p"], "href"]],
            [
              46,
              [
                53,
                [41, "r"],
                [3, "r", [2, [17, [15, "p"], "href"], "indexOf", [7, "#"]]],
                [
                  3,
                  "q",
                  [
                    39,
                    [23, [15, "r"], 0],
                    [17, [15, "p"], "href"],
                    [
                      2,
                      [17, [15, "p"], "href"],
                      "substring",
                      [7, 0, [15, "r"]],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "q"]],
        ],
        [
          50,
          "k",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, [44]]]],
          [41, "q"],
          [3, "q", [17, [15, "p"], "hostname"]],
          [52, "r", [2, [15, "q"], "match", [7, "^www\\d*\\."]]],
          [
            22,
            [1, [15, "r"], [16, [15, "r"], 0]],
            [
              46,
              [
                3,
                "q",
                [
                  2,
                  [15, "q"],
                  "substring",
                  [7, [17, [16, [15, "r"], 0], "length"]],
                ],
              ],
            ],
          ],
          [36, [15, "q"]],
        ],
        [
          50,
          "l",
          [46, "p"],
          [22, [28, [15, "p"]], [46, [36, false]]],
          [52, "q", [2, [17, [15, "p"], "hostname"], "toLowerCase", [7]]],
          [41, "r"],
          [3, "r", [2, ["k", ["h", ["g"]]], "toLowerCase", [7]]],
          [41, "s"],
          [3, "s", [37, [17, [15, "q"], "length"], [17, [15, "r"], "length"]]],
          [
            22,
            [
              1,
              [18, [15, "s"], 0],
              [29, [2, [15, "r"], "charAt", [7, 0]], "."],
            ],
            [
              46,
              [32, [15, "s"], [3, "s", [37, [15, "s"], 1]]],
              [3, "r", [0, ".", [15, "r"]]],
            ],
          ],
          [
            22,
            [
              1,
              [19, [15, "s"], 0],
              [
                12,
                [2, [15, "q"], "indexOf", [7, [15, "r"], [15, "s"]]],
                [15, "s"],
              ],
            ],
            [46, [36, false]],
          ],
          [36, true],
        ],
        [52, "b", ["require", "internal.addDataLayerEventListener"]],
        [52, "c", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "internal.getProductSettingsParameter"]],
        [52, "f", ["require", "internal.getRemoteConfigParameter"]],
        [52, "g", ["require", "getUrl"]],
        [52, "h", ["require", "parseUrl"]],
        [52, "i", ["require", "internal.sendGtagEvent"]],
        [
          52,
          "m",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [52, "n", ["f", [15, "m"], "cross_domain_conditions"]],
        [
          22,
          ["e", [15, "m"], "ae_block_outbound_click"],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [
          52,
          "o",
          [
            "c",
            [
              8,
              "affiliateDomains",
              [15, "n"],
              "checkValidation",
              true,
              "waitForTags",
              false,
            ],
          ],
        ],
        [22, [28, [15, "o"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]],
        [
          "b",
          "gtm.linkClick",
          [
            51,
            "",
            [7, "p", "q"],
            [52, "r", ["h", [16, [15, "p"], "gtm.elementUrl"]]],
            [
              22,
              ["l", [15, "r"]],
              [
                46,
                [
                  53,
                  [
                    52,
                    "s",
                    [
                      39,
                      [28, [28, [17, [15, "a"], "includeParams"]]],
                      [
                        8,
                        "link_id",
                        [16, [15, "p"], "gtm.elementId"],
                        "link_classes",
                        [16, [15, "p"], "gtm.elementClasses"],
                        "link_url",
                        ["j", [15, "r"]],
                        "link_domain",
                        ["k", [15, "r"]],
                        "outbound",
                        true,
                      ],
                      [8],
                    ],
                  ],
                  [43, [15, "s"], "event_callback", [15, "q"]],
                  ["i", [15, "m"], "click", [15, "s"]],
                ],
              ],
              [46, ["q"]],
            ],
          ],
          [15, "o"],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_conversion_marking",
        [46, "a"],
        [
          50,
          "h",
          [46, "i"],
          [52, "j", [2, [15, "e"], "parse", [7, [15, "i"]]]],
          [
            22,
            [
              30,
              [30, [28, [15, "j"]], [28, [16, [15, "j"], "args"]]],
              [21, [17, [16, [15, "j"], "args"], "length"], 2],
            ],
            [46, [36]],
          ],
          [52, "k", [16, [16, [16, [15, "j"], "args"], 1], "contextValue"]],
          [
            22,
            [
              30,
              [
                30,
                [
                  30,
                  [28, [15, "k"]],
                  [21, [16, [15, "k"], "namespaceType"], 1],
                ],
                [21, [17, [16, [15, "k"], "keyParts"], "length"], 1],
              ],
              [21, [16, [16, [15, "k"], "keyParts"], 0], "eventName"],
            ],
            [46, [36, [44]]],
          ],
          [52, "l", [16, [16, [15, "j"], "args"], 0]],
          [36, [1, [15, "l"], [16, [15, "l"], "stringValue"]]],
        ],
        [
          22,
          [
            30,
            [28, [17, [15, "a"], "conversionRules"]],
            [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0],
          ],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]]],
        ],
        [52, "b", ["require", "internal.setProductSettingsParameter"]],
        [52, "c", ["require", "internal.getProductSettingsParameter"]],
        [52, "d", ["require", "getContainerVersion"]],
        [52, "e", ["require", "JSON"]],
        [
          52,
          "f",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["d"], "containerId"],
          ],
        ],
        [52, "g", [30, ["c", [15, "f"], "event_settings"], [8]]],
        [
          53,
          [41, "i"],
          [3, "i", 0],
          [
            63,
            [7, "i"],
            [23, [15, "i"], [17, [17, [15, "a"], "conversionRules"], "length"]],
            [33, [15, "i"], [3, "i", [0, [15, "i"], 1]]],
            [
              46,
              [
                53,
                [
                  52,
                  "j",
                  [
                    "h",
                    [
                      16,
                      [16, [17, [15, "a"], "conversionRules"], [15, "i"]],
                      "matchingRules",
                    ],
                  ],
                ],
                [22, [28, [15, "j"]], [46, [6]]],
                [41, "k"],
                [3, "k", [16, [15, "g"], [15, "j"]]],
                [
                  22,
                  [28, [15, "k"]],
                  [46, [3, "k", [8]], [43, [15, "g"], [15, "j"], [15, "k"]]],
                ],
                [43, [15, "k"], "conversion", true],
              ],
            ],
          ],
        ],
        ["b", [15, "f"], "event_settings", [15, "g"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__ccd_ga_regscope",
        [46, "a"],
        [
          50,
          "k",
          [46, "m"],
          [
            22,
            [30, [28, [15, "i"]], [21, [17, [15, "i"], "length"], 2]],
            [46, [36, false]],
          ],
          [52, "n", ["l", [15, "m"]]],
          [
            53,
            [41, "o"],
            [3, "o", 0],
            [
              63,
              [7, "o"],
              [23, [15, "o"], [17, [15, "n"], "length"]],
              [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]],
              [
                46,
                [
                  53,
                  [52, "p", [16, [15, "n"], [15, "o"]]],
                  [52, "q", [17, [15, "p"], "countryCode"]],
                  [52, "r", [17, [15, "p"], "regionCode"]],
                  [52, "s", [20, [15, "q"], [15, "i"]]],
                  [52, "t", [30, [28, [15, "r"]], [20, [15, "r"], [15, "j"]]]],
                  [22, [1, [15, "s"], [15, "t"]], [46, [36, true]]],
                ],
              ],
            ],
          ],
          [36, false],
        ],
        [
          50,
          "l",
          [46, "m"],
          [52, "n", [7]],
          [22, [28, [15, "m"]], [46, [36, [15, "n"]]]],
          [52, "o", [2, [15, "m"], "split", [7, ","]]],
          [
            53,
            [41, "p"],
            [3, "p", 0],
            [
              63,
              [7, "p"],
              [23, [15, "p"], [17, [15, "o"], "length"]],
              [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
              [
                46,
                [
                  53,
                  [52, "q", [2, [16, [15, "o"], [15, "p"]], "trim", [7]]],
                  [22, [28, [15, "q"]], [46, [6]]],
                  [52, "r", [2, [15, "q"], "split", [7, "-"]]],
                  [52, "s", [16, [15, "r"], 0]],
                  [
                    52,
                    "t",
                    [39, [20, [17, [15, "r"], "length"], 2], [15, "q"], [44]],
                  ],
                  [
                    22,
                    [30, [28, [15, "s"]], [21, [17, [15, "s"], "length"], 2]],
                    [46, [6]],
                  ],
                  [
                    22,
                    [
                      1,
                      [21, [15, "t"], [44]],
                      [
                        30,
                        [23, [17, [15, "t"], "length"], 4],
                        [18, [17, [15, "t"], "length"], 6],
                      ],
                    ],
                    [46, [6]],
                  ],
                  [
                    2,
                    [15, "n"],
                    "push",
                    [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "n"]],
        ],
        [52, "b", ["require", "getContainerVersion"]],
        [52, "c", ["require", "internal.setRemoteConfigParameter"]],
        [52, "d", ["require", "internal.getCountryCode"]],
        [52, "e", ["require", "internal.getRegionCode"]],
        [
          22,
          [28, [17, [15, "a"], "settingsTable"]],
          [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]],
        ],
        [41, "f"],
        [
          52,
          "g",
          [
            8,
            "GOOGLE_SIGNALS",
            [7, [8, "name", "allow_google_signals", "value", false]],
            "DEVICE_AND_GEO",
            [
              7,
              [8, "name", "geo_granularity", "value", true],
              [8, "name", "redact_device_info", "value", true],
            ],
          ],
        ],
        [
          52,
          "h",
          [
            30,
            [17, [15, "a"], "instanceDestinationId"],
            [17, ["b"], "containerId"],
          ],
        ],
        [52, "i", ["d"]],
        [52, "j", ["e"]],
        [
          53,
          [41, "m"],
          [3, "m", 0],
          [
            63,
            [7, "m"],
            [23, [15, "m"], [17, [17, [15, "a"], "settingsTable"], "length"]],
            [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]],
            [
              46,
              [
                53,
                [52, "n", [16, [17, [15, "a"], "settingsTable"], [15, "m"]]],
                [
                  22,
                  [
                    30,
                    [17, [15, "n"], "disallowAllRegions"],
                    ["k", [17, [15, "n"], "disallowedRegions"]],
                  ],
                  [
                    46,
                    [
                      53,
                      [
                        52,
                        "o",
                        [16, [15, "g"], [17, [15, "n"], "redactFieldGroup"]],
                      ],
                      [22, [28, [15, "o"]], [46, [6]]],
                      [
                        53,
                        [41, "p"],
                        [3, "p", 0],
                        [
                          63,
                          [7, "p"],
                          [23, [15, "p"], [17, [15, "o"], "length"]],
                          [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]],
                          [
                            46,
                            [
                              53,
                              [52, "q", [16, [15, "o"], [15, "p"]]],
                              [
                                "c",
                                [15, "h"],
                                [17, [15, "q"], "name"],
                                [17, [15, "q"], "value"],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
    ],
    permissions: {
      __ccd_em_video: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.video"],
        },
        process_dom_events: {
          targets: [
            { targetType: "element", eventName: "onStateChange" },
            { targetType: "element", eventName: "onPlaybackRateChange" },
          ],
        },
        read_container_data: {},
      },
      __set_product_settings: { read_container_data: {} },
      __ccd_em_site_search: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        read_container_data: {},
      },
      __ccd_em_scroll: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.scrollDepth"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "resize" },
            { targetType: "window", eventName: "scroll" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_page_view: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.historyChange-v2"],
        },
        process_dom_events: {
          targets: [
            { targetType: "window", eventName: "pushstate" },
            { targetType: "window", eventName: "popstate" },
          ],
        },
        read_container_data: {},
      },
      __ogt_google_signals: { read_container_data: {} },
      __ccd_em_download: {
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ccd_em_outbound_click: {
        get_url: { urlParts: "any", queriesAllowed: "any" },
        listen_data_layer: {
          accessType: "specific",
          allowedEvents: ["gtm.linkClick"],
        },
        process_dom_events: {
          targets: [
            { targetType: "document", eventName: "click" },
            { targetType: "document", eventName: "auxclick" },
          ],
        },
        read_container_data: {},
      },
      __ccd_conversion_marking: { read_container_data: {} },
      __ccd_ga_regscope: { read_container_data: {} },
    },

    security_groups: {
      google: [
        "__ccd_em_video",
        "__set_product_settings",
        "__ccd_em_site_search",
        "__ccd_em_scroll",
        "__ccd_em_page_view",
        "__ogt_google_signals",
        "__ccd_em_download",
        "__ccd_em_outbound_click",
        "__ccd_conversion_marking",
        "__ccd_ga_regscope",
      ],
    },
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { a: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.a;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ja = ea,
    ka = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ja) ja(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Uk = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function (a, b) {
    this.h = a;
    this.s = b;
  };
  var pa = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    qa = function () {
      this.D = {};
      this.C = !1;
      this.I = {};
    },
    ra = function (a, b) {
      var c = [],
        d;
      for (d in a.D)
        if (a.D.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  qa.prototype.get = function (a) {
    return this.D["dust." + a];
  };
  qa.prototype.set = function (a, b) {
    this.C || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.D[a] = b));
  };
  qa.prototype.has = function (a) {
    return this.D.hasOwnProperty("dust." + a);
  };
  var ta = function (a, b) {
    b = "dust." + b;
    a.C || a.I.hasOwnProperty(b) || delete a.D[b];
  };
  qa.prototype.Hb = function () {
    this.C = !0;
  };
  var va = function (a) {
    this.s = new qa();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (pa(b) ? (this.h[Number(b)] = a[Number(b)]) : this.s.set(b, a[b]));
  };
  l = va.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof va
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  l.set = function (a, b) {
    if (!this.C)
      if ("length" === a) {
        if (!pa(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else pa(a) ? (this.h[Number(a)] = b) : this.s.set(a, b);
  };
  l.get = function (a) {
    return "length" === a
      ? this.length()
      : pa(a)
      ? this.h[Number(a)]
      : this.s.get(a);
  };
  l.length = function () {
    return this.h.length;
  };
  l.Gb = function () {
    for (var a = ra(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new va(a);
  };
  var wa = function (a, b) {
    pa(b) ? delete a.h[Number(b)] : ta(a.s, b);
  };
  l = va.prototype;
  l.pop = function () {
    return this.h.pop();
  };
  l.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  l.shift = function () {
    return this.h.shift();
  };
  l.splice = function (a, b, c) {
    return new va(this.h.splice.apply(this.h, arguments));
  };
  l.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  l.has = function (a) {
    return (pa(a) && this.h.hasOwnProperty(a)) || this.s.has(a);
  };
  l.Hb = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.s.Hb();
  };
  var xa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].be + g > b[f].max) throw Error("Quota exceeded");
        b[f].be += g;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Dj: function (f) {
          c = f;
        },
        Yg: function () {
          c && a(c, 1);
        },
        Fj: function (f) {
          d = f;
        },
        Jb: function (f) {
          d && a(d, f);
        },
        dk: function (f, g) {
          b[f] = b[f] || { be: 0 };
          b[f].max = g;
        },
        cj: function (f) {
          return (b[f] && b[f].be) || 0;
        },
        reset: function () {
          b = {};
        },
        Qi: a,
      };
    e.onFnConsume = e.Dj;
    e.consumeFn = e.Yg;
    e.onStorageConsume = e.Fj;
    e.consumeStorage = e.Jb;
    e.setMax = e.dk;
    e.getConsumed = e.cj;
    e.reset = e.reset;
    e.consume = e.Qi;
    return e;
  };
  var ya = function (a, b) {
    this.C = a;
    this.T = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.s = new qa();
    this.h = this.I = void 0;
  };
  ya.prototype.add = function (a, b) {
    za(this, a, b, !1);
  };
  var za = function (a, b, c, d) {
    if (!a.s.C)
      if (
        (a.C.Jb(
          ("string" === typeof b ? b.length : 1) +
            ("string" === typeof c ? c.length : 1)
        ),
        d)
      ) {
        var e = a.s;
        e.set(b, c);
        e.I["dust." + b] = !0;
      } else a.s.set(b, c);
  };
  ya.prototype.set = function (a, b) {
    this.s.C ||
      (!this.s.has(a) && this.D && this.D.has(a)
        ? this.D.set(a, b)
        : (this.C.Jb(
            ("string" === typeof a ? a.length : 1) +
              ("string" === typeof b ? b.length : 1)
          ),
          this.s.set(a, b)));
  };
  ya.prototype.get = function (a) {
    return this.s.has(a) ? this.s.get(a) : this.D ? this.D.get(a) : void 0;
  };
  ya.prototype.has = function (a) {
    return !!this.s.has(a) || !(!this.D || !this.D.has(a));
  };
  var Aa = function (a) {
    var b = new ya(a.C, a);
    a.I && (b.I = a.I);
    b.T = a.T;
    b.h = a.h;
    return b;
  };
  var Ba = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    m = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Fa = function (a, b) {
      if (a && Ea(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ga = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ia = function (a, b) {
      for (var c = new Ha(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ka = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    La = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ma = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Na = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Oa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Pa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Qa = function () {
      return new Date(Date.now());
    },
    Ra = function () {
      return Qa().getTime();
    },
    Ha = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ha.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ha.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Sa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ta = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ua = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    Za = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    $a = /^\w{1,9}$/,
    ab = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ka(a, function (d, e) {
        $a.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    bb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var cb = function (a, b) {
    qa.call(this);
    this.T = a;
    this.oa = b;
  };
  ka(cb, qa);
  cb.prototype.toString = function () {
    return this.T;
  };
  cb.prototype.Gb = function () {
    return new va(ra(this, 1));
  };
  cb.prototype.h = function (a, b) {
    a.C.Yg();
    return this.oa.apply(
      new db(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  cb.prototype.s = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fb = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = eb(a, b[d])), c instanceof na);
        d++
      );
      return c;
    },
    eb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof cb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.I;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    db = function (a, b) {
      this.s = a;
      this.h = b;
    },
    G = function (a, b) {
      return Ea(b) ? eb(a.h, b) : b;
    },
    H = function (a) {
      return a.s.T;
    };
  var gb = function () {
    qa.call(this);
  };
  ka(gb, qa);
  gb.prototype.Gb = function () {
    return new va(ra(this, 1));
  };
  var hb = {
    control: function (a, b) {
      return new na(a, G(this, b));
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = G(this, b);
      if (!(e instanceof va))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.h.C.Jb(a.length + f.length);
      return new cb(
        a,
        (function () {
          return function (g) {
            var h = Aa(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var k = Array.prototype.slice.call(arguments, 0), n = 0;
              n < k.length;
              n++
            )
              if (((k[n] = G(this, k[n])), k[n] instanceof na)) return k[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new va(k));
            var r = fb(h, f);
            if (r instanceof na) return "return" === r.h ? r.s : r;
          };
        })()
      );
    },
    list: function (a) {
      var b = this.h.C;
      b.Jb(arguments.length);
      for (var c = new va(), d = 0; d < arguments.length; d++) {
        var e = G(this, arguments[d]);
        "string" === typeof e && b.Jb(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function (a) {
      for (
        var b = this.h.C, c = new gb(), d = 0;
        d < arguments.length - 1;
        d += 2
      ) {
        var e = G(this, arguments[d]) + "",
          f = G(this, arguments[d + 1]),
          g = e.length;
        g += "string" === typeof f ? f.length : 1;
        b.Jb(g);
        c.set(e, f);
      }
      return c;
    },
    undefined: function () {},
  };
  var ib = function () {
      this.C = xa();
      this.h = new ya(this.C);
    },
    jb = function (a, b, c) {
      var d = new cb(b, c);
      d.Hb();
      a.h.set(b, d);
    },
    kb = function (a, b, c) {
      hb.hasOwnProperty(b) && jb(a, c || b, hb[b]);
    };
  ib.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.s(c);
  };
  ib.prototype.s = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = eb(this.h, arguments[c]);
    return b;
  };
  ib.prototype.D = function (a, b) {
    var c = Aa(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = eb(c, arguments[e]);
    return d;
  };
  var lb,
    mb = function () {
      if (void 0 === lb) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          lb = a;
        } else lb = a;
      }
      return lb;
    };
  var ob = function (a, b) {
    this.h = b === nb ? a : "";
  };
  ob.prototype.toString = function () {
    return this.h + "";
  };
  var pb = function (a) {
      return a instanceof ob && a.constructor === ob
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    nb = {},
    qb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createScriptURL(b) : b;
      return new ob(d, nb);
    };
  var rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function sb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function tb(a) {
    return -1 != sb().indexOf(a);
  }
  var ub = {},
    vb = function (a, b) {
      this.h = b === ub ? a : "";
    };
  vb.prototype.toString = function () {
    return this.h.toString();
  };
  var wb = function (a) {
      return a instanceof vb && a.constructor === vb
        ? a.h
        : "type_error:SafeHtml";
    },
    xb = function (a) {
      var b = a,
        c = mb(),
        d = c ? c.createHTML(b) : b;
      return new vb(d, ub);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var yb = {};
  var zb = function () {},
    Ab = function (a) {
      this.h = a;
    };
  ka(Ab, zb);
  Ab.prototype.toString = function () {
    return this.h;
  };
  function Bb(a, b) {
    var c = [new Ab(Cb[0].toLowerCase(), yb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Ab) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Db(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var z = window,
    I = document,
    Eb = navigator,
    Fb = I.currentScript && I.currentScript.src,
    Gb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Hb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Ib = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Jb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Kb(a, b, c) {
    b &&
      Ka(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Lb = function (a, b, c, d) {
      var e = I.createElement("script");
      Kb(e, d, Ib);
      e.type = "text/javascript";
      e.async = !0;
      var f = qb(a);
      e.src = pb(f);
      var g,
        h,
        k,
        n =
          null ==
          (k = (h = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : k.call(h, "script[nonce]");
      (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", g);
      Hb(e, b);
      c && (e.onerror = c);
      var p = I.getElementsByTagName("script")[0] || I.body || I.head;
      p.parentNode.insertBefore(e, p);
      return e;
    },
    Nb = function () {
      if (Fb) {
        var a = Fb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ob = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = I.createElement("iframe")), (h = !0));
      Kb(g, c, Jb);
      d &&
        Ka(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var k = (I.body && I.body.lastChild) || I.body || I.head;
        k.parentNode.insertBefore(g, k);
      }
      Hb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Pb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Qb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Rb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      z.setTimeout(a, 0);
    },
    Sb = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Tb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Ub = function (a) {
      var b = I.createElement("div"),
        c = b,
        d = xb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Db(c);
      c.innerHTML = wb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Vb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Wb = function (a) {
      var b;
      try {
        b = Eb.sendBeacon && Eb.sendBeacon(a);
      } catch (c) {}
      b || Pb(a);
    },
    Xb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var Yb = function (a, b) {
      return G(this, a) && G(this, b);
    },
    Zb = function (a, b) {
      return G(this, a) === G(this, b);
    },
    $b = function (a, b) {
      return G(this, a) || G(this, b);
    },
    ac = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    cc = function (a, b) {
      a = String(G(this, a));
      b = String(G(this, b));
      return a.substring(0, b.length) === b;
    },
    dc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof gb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var fc = function () {
    this.h = new ib();
    ec(this);
  };
  fc.prototype.execute = function (a) {
    return this.h.s(a);
  };
  var ec = function (a) {
    kb(a.h, "map");
    var b = function (c, d) {
      jb(a.h, c, d);
    };
    b("and", Yb);
    b("contains", ac);
    b("equals", Zb);
    b("or", $b);
    b("startsWith", cc);
    b("variable", dc);
  };
  var gc = function (a) {
    if (a instanceof gc) return a;
    this.cb = a;
  };
  gc.prototype.toString = function () {
    return String(this.cb);
  };
  var ic = function (a) {
    qa.call(this);
    this.h = a;
    this.set("then", hc(this));
    this.set("catch", hc(this, !0));
    this.set("finally", hc(this, !1, !0));
  };
  ka(ic, gb);
  var hc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new cb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof cb || (d = void 0);
      e instanceof cb || (e = void 0);
      var f = Aa(this.h),
        g = function (k) {
          return function (n) {
            return c ? (k.h(f), a.h) : k.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new ic(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var jc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    kc = function (a) {
      if (null == a) return String(a);
      var b = jc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    lc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    mc = function (a) {
      if (!a || "object" != kc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !lc(a, "constructor") &&
          !lc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || lc(a, b);
    },
    nc = function (a, b) {
      var c = b || ("array" == kc(a) ? [] : {}),
        d;
      for (d in a)
        if (lc(a, d)) {
          var e = a[d];
          "array" == kc(e)
            ? ("array" != kc(c[d]) && (c[d] = []), (c[d] = nc(e, c[d])))
            : mc(e)
            ? (mc(c[d]) || (c[d] = {}), (c[d] = nc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var pc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n = ra(h, 1), p = 0; p < n.length; p++)
            k[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (h instanceof va) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Gb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof ic) return h.h;
          if (h instanceof gb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof cb) {
            var t = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), x = 0;
                x < v.length;
                x++
              )
                v[x] = oc(v[x], b, c);
              var y = b ? b.C : xa(),
                w = new ya(y);
              b && (w.h = b.h);
              return g(h.h.apply(h, [w].concat(v)));
            };
            d.push(h);
            e.push(t);
            f(h, t);
            return t;
          }
          var u = !1;
          switch (c) {
            case 1:
              u = !0;
              break;
            case 2:
              u = !1;
              break;
            case 3:
              u = !1;
              break;
            default:
          }
          if (h instanceof gc && u) return h.cb;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    oc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, k) {
          for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]));
        },
        g = function (h) {
          var k = d.indexOf(h);
          if (-1 < k) return e[k];
          if (Ea(h) || La(h)) {
            var n = new va([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (mc(h)) {
            var q = new gb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new cb("", function (w) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = pc(G(this, A[B]), b, c);
              return g((0, this.h.T)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var x = typeof h;
          if (null === h || "string" === x || "number" === x || "boolean" === x)
            return h;
          var y = !1;
          switch (c) {
            case 1:
              y = !0;
              break;
            case 2:
              y = !1;
              break;
            default:
          }
          if (void 0 !== h && y) return new gc(h);
        };
      return g(a);
    };
  var qc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    rc = function (a) {
      if (void 0 === a || Ea(a) || mc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var uc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof va)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new va(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new va(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new va(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = qc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new va(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = qc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var vc =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    wc = new na("break"),
    xc = new na("continue"),
    yc = function (a, b) {
      return G(this, a) + G(this, b);
    },
    zc = function (a, b) {
      return G(this, a) && G(this, b);
    },
    Ac = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (!(c instanceof va))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = pc(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= vc.indexOf(b)) {
          var f = pc(c);
          return oc(a[b].apply(a, f), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof va) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof cb) {
            var h = qc(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= uc.supportedMethods.indexOf(b)) {
          var k = qc(c);
          k.unshift(this.h);
          return uc[b].apply(a, k);
        }
      }
      if (a instanceof cb || a instanceof gb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof cb) {
            var p = qc(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof cb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, qc(c));
      }
      if (a instanceof gc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Bc = function (a, b) {
      a = G(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = G(this, b);
      c.set(a, d);
      return d;
    },
    Cc = function (a) {
      var b = Aa(this.h),
        c = fb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof na) return c;
    },
    Dc = function () {
      return wc;
    },
    Ec = function (a) {
      for (var b = G(this, a), c = 0; c < b.length; c++) {
        var d = G(this, b[c]);
        if (d instanceof na) return d;
      }
    },
    Fc = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = G(this, arguments[c + 1]);
          za(b, d, e, !0);
        }
      }
    },
    Gc = function () {
      return xc;
    },
    Hc = function (a, b, c) {
      var d = new va();
      b = G(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, G(this, f));
    },
    Ic = function (a, b) {
      return G(this, a) / G(this, b);
    },
    Kc = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      var c = a instanceof gc,
        d = b instanceof gc;
      return c || d ? (c && d ? a.cb == b.cb : !1) : a == b;
    },
    Lc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
      return b;
    };
  function Mc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = fb(f, d);
      if (g instanceof na) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Nc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof gb || b instanceof va || b instanceof cb) {
      var d = b.Gb(),
        e = d.length();
      return Mc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var Oc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Pc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Qc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Nc(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    Sc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    Tc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    Uc = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      var d = this.h;
      return Rc(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function Rc(a, b, c) {
    if ("string" === typeof b)
      return Mc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof va)
      return Mc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var Vc = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = G(this, a);
      if (!(f instanceof va))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = G(this, d);
      var h = Aa(g);
      for (e(g, h); eb(h, b); ) {
        var k = fb(h, d);
        if (k instanceof na) {
          if ("break" === k.h) break;
          if ("return" === k.h) return k;
        }
        var n = Aa(g);
        e(h, n);
        eb(n, c);
        h = n;
      }
    },
    Wc = function (a) {
      a = G(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Xc = function (a, b) {
      var c;
      a = G(this, a);
      b = G(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof gb || a instanceof va || a instanceof cb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : pa(b) && (c = a[b]);
      else if (a instanceof gc) return;
      return c;
    },
    Yc = function (a, b) {
      return G(this, a) > G(this, b);
    },
    Zc = function (a, b) {
      return G(this, a) >= G(this, b);
    },
    $c = function (a, b) {
      a = G(this, a);
      b = G(this, b);
      a instanceof gc && (a = a.cb);
      b instanceof gc && (b = b.cb);
      return a === b;
    },
    ad = function (a, b) {
      return !$c.call(this, a, b);
    },
    bd = function (a, b, c) {
      var d = [];
      G(this, a) ? (d = G(this, b)) : c && (d = G(this, c));
      var e = fb(this.h, d);
      if (e instanceof na) return e;
    },
    cd = function (a, b) {
      return G(this, a) < G(this, b);
    },
    dd = function (a, b) {
      return G(this, a) <= G(this, b);
    },
    ed = function (a, b) {
      return G(this, a) % G(this, b);
    },
    fd = function (a, b) {
      return G(this, a) * G(this, b);
    },
    gd = function (a) {
      return -G(this, a);
    },
    id = function (a) {
      return !G(this, a);
    },
    jd = function (a, b) {
      return !Kc.call(this, a, b);
    },
    kd = function () {
      return null;
    },
    ld = function (a, b) {
      return G(this, a) || G(this, b);
    },
    md = function (a, b) {
      var c = G(this, a);
      G(this, b);
      return c;
    },
    nd = function (a) {
      return G(this, a);
    },
    od = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pd = function (a) {
      return new na("return", G(this, a));
    },
    qd = function (a, b, c) {
      a = G(this, a);
      b = G(this, b);
      c = G(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof cb || a instanceof va || a instanceof gb) && a.set(b, c);
      return c;
    },
    rd = function (a, b) {
      return G(this, a) - G(this, b);
    },
    sd = function (a, b, c) {
      a = G(this, a);
      var d = G(this, b),
        e = G(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === G(this, d[h]))
          if (((f = G(this, e[h])), f instanceof na)) {
            var k = f.h;
            if ("break" === k) return;
            if ("return" === k || "continue" === k) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = G(this, e[e.length - 1])),
        f instanceof na && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    td = function (a, b, c) {
      return G(this, a) ? G(this, b) : G(this, c);
    },
    ud = function (a) {
      a = G(this, a);
      return a instanceof cb ? "function" : typeof a;
    },
    vd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    wd = function (a, b, c, d) {
      var e = G(this, d);
      if (G(this, c)) {
        var f = fb(this.h, e);
        if (f instanceof na) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; G(this, a); ) {
        var g = fb(this.h, e);
        if (g instanceof na) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        G(this, b);
      }
    },
    xd = function (a) {
      return ~Number(G(this, a));
    },
    yd = function (a, b) {
      return Number(G(this, a)) << Number(G(this, b));
    },
    zd = function (a, b) {
      return Number(G(this, a)) >> Number(G(this, b));
    },
    Ad = function (a, b) {
      return Number(G(this, a)) >>> Number(G(this, b));
    },
    Bd = function (a, b) {
      return Number(G(this, a)) & Number(G(this, b));
    },
    Cd = function (a, b) {
      return Number(G(this, a)) ^ Number(G(this, b));
    },
    Dd = function (a, b) {
      return Number(G(this, a)) | Number(G(this, b));
    };
  var Gd = function () {
    this.h = new ib();
    Fd(this);
  };
  Gd.prototype.execute = function (a) {
    return Hd(this.h.s(a));
  };
  var Id = function (a, b, c) {
      return Hd(a.h.D(b, c));
    },
    Fd = function (a) {
      var b = function (d, e) {
        kb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        jb(a.h, String(d), e);
      };
      c(0, yc);
      c(1, zc);
      c(2, Ac);
      c(3, Bc);
      c(53, Cc);
      c(4, Dc);
      c(5, Ec);
      c(52, Fc);
      c(6, Gc);
      c(9, Ec);
      c(50, Hc);
      c(10, Ic);
      c(12, Kc);
      c(13, Lc);
      c(47, Oc);
      c(54, Pc);
      c(55, Qc);
      c(63, Vc);
      c(64, Sc);
      c(65, Tc);
      c(66, Uc);
      c(15, Wc);
      c(16, Xc);
      c(17, Xc);
      c(18, Yc);
      c(19, Zc);
      c(20, $c);
      c(21, ad);
      c(22, bd);
      c(23, cd);
      c(24, dd);
      c(25, ed);
      c(26, fd);
      c(27, gd);
      c(28, id);
      c(29, jd);
      c(45, kd);
      c(30, ld);
      c(32, md);
      c(33, md);
      c(34, nd);
      c(35, nd);
      c(46, od);
      c(36, pd);
      c(43, qd);
      c(37, rd);
      c(38, sd);
      c(39, td);
      c(40, ud);
      c(41, vd);
      c(42, wd);
      c(58, xd);
      c(57, yd);
      c(60, zd);
      c(61, Ad);
      c(56, Bd);
      c(62, Cd);
      c(59, Dd);
    };
  function Hd(a) {
    if (
      a instanceof na ||
      a instanceof cb ||
      a instanceof va ||
      a instanceof gb ||
      a instanceof gc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Jd = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      Lh: a("consent"),
      we: a("consent_always_fire"),
      Yf: a("convert_case_to"),
      Zf: a("convert_false_to"),
      ag: a("convert_null_to"),
      bg: a("convert_true_to"),
      cg: a("convert_undefined_to"),
      mk: a("debug_mode_metadata"),
      Fb: a("function"),
      cf: a("instance_name"),
      zi: a("live_only"),
      Ai: a("malware_disabled"),
      Bi: a("metadata"),
      Ei: a("original_activity_id"),
      Ok: a("original_vendor_template_id"),
      Nk: a("once_on_load"),
      Di: a("once_per_event"),
      Fg: a("once_per_load"),
      Pk: a("priority_override"),
      Qk: a("respected_consent_types"),
      Lg: a("setup_tags"),
      Ng: a("tag_id"),
      Og: a("teardown_tags"),
    };
  })();
  var ee;
  var fe = [],
    ge = [],
    he = [],
    ie = [],
    je = [],
    ke = {},
    le,
    me,
    ne,
    oe = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    pe = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = ke[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.Xg && d.Xg(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Jd.we.toString() && a[g]) {
          }
      e && d && d.Wg && (f.vtp_gtmCachedValues = d.Wg);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var k = b.index;
            if (null == k) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = fe[k];
                  break;
                case 1:
                  n = ie[k];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Jd.cf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : ee(c, f, b);
    },
    re = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = qe(a[e], b, c));
      return d;
    },
    qe = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(qe(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = fe[f];
            if (!g || b.Ef(g)) return;
            c[f] = !0;
            var h = String(g[Jd.cf]);
            try {
              var k = re(g, b, c);
              k.vtp_gtmEventId = b.id;
              b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
              d = pe(k, { event: b, index: f, type: 2, name: h });
              ne && (d = ne.Ri(d, k));
            } catch (w) {
              b.nh && b.nh(w, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[qe(a[n], b, c)] = qe(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = qe(a[q], b, c);
              me && (p = p || r === me.Qd);
              d.push(r);
            }
            return me && p ? me.Ti(d) : d.join("");
          case "escape":
            d = qe(a[1], b, c);
            if (me && Ea(a[1]) && "macro" === a[1][0] && me.pj(a))
              return me.Lj(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Kd[a[t]] && (d = Kd[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!ie[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { eh: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var x = se(v, b, c),
              y = !!a[4];
            return y || 2 !== x ? y !== (1 === x) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    se = function (a, b, c) {
      try {
        return le(re(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var ue = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.s = a;
    this.h = c;
  };
  ka(ue, Error);
  function ve(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) ve(a[c], b[c]);
    }
  }
  var we = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Gj = a;
    this.s = b;
    this.h = [];
  };
  ka(we, Error);
  var ye = function () {
    return function (a, b) {
      a instanceof we || (a = new we(a, xe));
      b && a.h.push(b);
      throw a;
    };
  };
  function xe(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Be = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = ze(a), f = 0; f < ge.length; f++) {
        var g = ge[f],
          h = Ae(g, e);
        if (h) {
          for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < ie.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Ae = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    ze = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = se(he[c], a));
        return b[c];
      };
    };
  var Ce = {
    Ri: function (a, b) {
      b[Jd.Yf] &&
        "string" === typeof a &&
        (a = 1 == b[Jd.Yf] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Jd.ag) && null === a && (a = b[Jd.ag]);
      b.hasOwnProperty(Jd.cg) && void 0 === a && (a = b[Jd.cg]);
      b.hasOwnProperty(Jd.bg) && !0 === a && (a = b[Jd.bg]);
      b.hasOwnProperty(Jd.Zf) && !1 === a && (a = b[Jd.Zf]);
      return a;
    },
  };
  var De = function () {
    this.h = {};
  };
  function Ee(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new ue(c, d, g);
      }
  }
  function Fe(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ee(e, b, d, g);
          Ee(f, b, d, g);
        }
      }
    };
  }
  var Je = function () {
      var a = data.permissions || {},
        b = Ge.J,
        c = this;
      this.s = new De();
      this.h = {};
      var d = {},
        e = Fe(this.s, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      Ka(a, function (f, g) {
        var h = {};
        Ka(g, function (k, n) {
          var p = He(k, n);
          h[k] = p.assert;
          d[k] || (d[k] = p.Z);
        });
        c.h[f] = function (k, n) {
          var p = h[k];
          if (!p)
            throw Ie(
              k,
              {},
              "The requested permission " + k + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Le = function (a) {
      return Ke.h[a] || function () {};
    };
  function He(a, b) {
    var c = oe(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ie;
    try {
      return pe(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new ue(e, {}, "Permission " + e + " is unknown.");
        },
        Z: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Ie(a, b, c) {
    return new ue(a, b, c);
  }
  var Me = !1;
  var Ne = {};
  Ne.lk = Na("");
  Ne.Vi = Na("");
  var Oe = Me,
    Pe = Ne.Vi,
    Qe = Ne.lk;
  var Re = function (a, b) {
    var c = String(a);
    return c;
  };
  var We = function (a) {
      var b = {},
        c = 0;
      Ka(a, function (e, f) {
        if (void 0 !== f)
          if (((f = Re(f, 100)), Se.hasOwnProperty(e))) b[Se[e]] = Te(f);
          else if (Ue.hasOwnProperty(e)) {
            var g = Ue[e],
              h = Te(f);
            b.hasOwnProperty(g) || (b[g] = h);
          } else if ("category" === e)
            for (var k = Te(f).split("/", 5), n = 0; n < k.length; n++) {
              var p = Ve[n],
                q = k[n];
              b.hasOwnProperty(p) || (b[p] = q);
            }
          else
            10 > c && ((b["k" + c] = Te(Re(e, 40))), (b["v" + c] = Te(f)), c++);
      });
      var d = [];
      Ka(b, function (e, f) {
        d.push("" + e + f);
      });
      return d.join("~");
    },
    Te = function (a) {
      return ("" + a).replace(/~/g, function () {
        return "~~";
      });
    },
    Se = {
      item_id: "id",
      item_name: "nm",
      item_brand: "br",
      item_category: "ca",
      item_category2: "c2",
      item_category3: "c3",
      item_category4: "c4",
      item_category5: "c5",
      item_variant: "va",
      price: "pr",
      quantity: "qt",
      coupon: "cp",
      item_list_name: "ln",
      index: "lp",
      item_list_id: "li",
      discount: "ds",
      affiliation: "af",
      promotion_id: "pi",
      promotion_name: "pn",
      creative_name: "cn",
      creative_slot: "cs",
      location_id: "lo",
    },
    Ue = {
      id: "id",
      name: "nm",
      brand: "br",
      variant: "va",
      list_name: "ln",
      list_position: "lp",
      list: "ln",
      position: "lp",
      creative: "cn",
    },
    Ve = ["ca", "c2", "c3", "c4", "c5"];
  var Xe = function (a) {
      var b = [];
      Ka(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)));
      });
      return b.join("&");
    },
    Ye = function (a, b, c, d) {
      this.Ea = a.Ea;
      this.Pb = a.Pb;
      this.aa = a.aa;
      this.h = b;
      this.D = c;
      this.C = Xe(a.Ea);
      this.s = Xe(a.aa);
      this.I = this.s.length;
      if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE");
    };
  var Ze = function () {
    this.events = [];
    this.h = this.Ea = "";
    this.C = 0;
    this.s = !1;
  };
  Ze.prototype.add = function (a) {
    return this.D(a)
      ? (this.events.push(a),
        (this.Ea = a.C),
        (this.h = a.h),
        (this.C += a.I),
        (this.s = a.D),
        !0)
      : !1;
  };
  Ze.prototype.D = function (a) {
    var b = 20 > this.events.length && 16384 > a.I + this.C,
      c = this.Ea === a.C && this.h === a.h && this.s === a.D;
    return 0 == this.events.length || (b && c);
  };

  var $e = function (a, b) {
      Ka(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
      });
    },
    af = function (a, b) {
      var c = [];
      a.C && c.push(a.C);
      b && c.push("_s=" + b);
      $e(a.Pb, c);
      var d = !1;
      a.s && (c.push(a.s), (d = !0));
      var e = c.join("&"),
        f = "",
        g = e.length + a.h.length + 1;
      d && 2048 < g && ((f = c.pop()), (e = c.join("&")));
      return { Nf: e, body: f };
    },
    bf = function (a, b) {
      var c = a.events;
      if (1 == c.length) return af(c[0], b);
      var d = [];
      a.Ea && d.push(a.Ea);
      for (var e = {}, f = 0; f < c.length; f++)
        Ka(c[f].Pb, function (t, u) {
          null != u &&
            ((e[t] = e[t] || {}), (e[t][String(u)] = e[t][String(u)] + 1 || 1));
        });
      var g = {};
      Ka(e, function (t, u) {
        var v,
          x = -1,
          y = 0;
        Ka(u, function (w, A) {
          y += A;
          var B = (w.length + t.length + 2) * (A - 1);
          B > x && ((v = w), (x = B));
        });
        y == c.length && (g[t] = v);
      });
      $e(g, d);
      b && d.push("_s=" + b);
      for (
        var h = d.join("&"), k = [], n = {}, p = 0;
        p < c.length;
        n = { ud: n.ud }, p++
      ) {
        var q = [];
        n.ud = {};
        Ka(
          c[p].Pb,
          (function (t) {
            return function (u, v) {
              g[u] != "" + v && (t.ud[u] = v);
            };
          })(n)
        );
        c[p].s && q.push(c[p].s);
        $e(n.ud, q);
        k.push(q.join("&"));
      }
      var r = k.join("\r\n");
      return { Nf: h, body: r };
    };
  var mf =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    nf = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = mf.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          k = c[d];
        if (null == k) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof cb
            ? (n = "Fn")
            : k instanceof va
            ? (n = "List")
            : k instanceof gb
            ? (n = "DustMap")
            : k instanceof gc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (nf[n] || n) +
                ", which does not match required type " +
                (nf[h] || h) +
                "."
            );
        }
      }
    };
  function of(a) {
    return "" + a;
  }
  function pf(a, b) {
    var c = [];
    return c;
  }
  var qf = function (a, b) {
      var c = new cb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = G(this, d[e]);
        return b.apply(this, d);
      });
      c.Hb();
      return c;
    },
    rf = function (a, b) {
      var c = new gb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, qf(a + "_" + d, e))
            : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Hb();
      return c;
    };
  var sf = function (a, b) {
    L(H(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new gb();
    return (d = rf("AssertApiSubject", c));
  };
  var tf = function (a, b) {
    L(H(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof ic)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new gb();
    return (d = rf("AssertThatSubject", c));
  };
  function uf(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(pc(arguments[d], c));
      return oc(a.apply(null, b));
    };
  }
  var wf = function () {
    for (var a = Math, b = vf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = uf(a[e].bind(a)));
    }
    return c;
  };
  var xf = function (a) {
    var b;
    return b;
  };
  var yf = function (a) {
    var b;
    return b;
  };
  var zf = function (a) {
    return encodeURI(a);
  };
  var Af = function (a) {
    return encodeURIComponent(a);
  };
  var Bf = function (a) {
    L(H(this), ["message:?string"], arguments);
  };
  var Cf = function (a, b) {
    L(H(this), ["min:!number", "max:!number"], arguments);
    return Ga(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.Mi.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Df = function () {
    M(this, "read_container_data");
    var a = new gb();
    a.set("containerId", "G-P7JSYB1CSP");
    a.set("version", "1");
    a.set("environmentName", "");
    a.set("debugMode", Oe);
    a.set("previewMode", Qe);
    a.set("environmentMode", Pe);
    a.Hb();
    return a;
  };
  var If = {};
  If.enable1pScripts = !0;
  If.enableGlobalEventDeveloperIds = !1;
  If.enableGlobalEventDeveloperIds = !0;
  If.enableGa4OnoRemarketing = !1;
  If.omitAuidIfWbraidPresent = !1;
  If.reconcileCampaignFields = !1;
  If.reconcileCampaignFields = !0;
  If.enableEmFormCcd = !1;
  If.enableEmFormCcd = !0;
  If.enableEmFormCcdPart2 = !1;
  If.enableLandingPageDeduplication = !0;
  If.enableFloodlightPrerenderingBypass = !1;
  If.analyticsPrivateParamsExcluded = !1;
  If.ipOverrideExperiment = !1;
  If.ipOverrideExperiment = !0;
  If.enableAdsConsentedConversionsOnly = !1;
  If.enableAdsConsentedConversionsOnly = !0;
  If.enableFlConsentedConversionsOnly = !1;
  If.enableFlConsentedConversionsOnly = !0;
  If.enableAdsHistoryChangeEvents = !1;
  If.enableAdsHistoryChangeEvents = !0;
  If.enableEValue = !1;
  If.requireGtagUserDataTos = !0;
  If.sendBeaconEnableExperimentPercentage = Number("0") || 0;
  function Jf() {
    return oc(If);
  }
  var Kf = function () {
    return new Date().getTime();
  };
  var Lf = function (a) {
    if (null === a) return "null";
    if (a instanceof va) return "array";
    if (a instanceof cb) return "function";
    if (a instanceof gc) {
      a = a.cb;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var Mf = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Oe || Qe) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return oc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(pc(c));
      }),
    };
  };
  var Nf = function (a) {
    return Ma(pc(a, this.h));
  };
  var Of = function (a) {
    return Number(pc(a, this.h));
  };
  var Pf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var Qf = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var vf = "floor ceil round max min abs pow sqrt".split(" ");
  var Rf = function () {
      var a = {};
      return {
        ej: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        ek: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    Sf = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return cb.prototype.h.apply(a, c);
      };
    },
    Tf = function (a, b) {
      L(H(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var Uf = {};
  Uf.keys = function (a) {
    return new va();
  };
  Uf.values = function (a) {
    return new va();
  };
  Uf.entries = function (a) {
    return new va();
  };
  Uf.freeze = function (a) {
    return a;
  };
  Uf.delete = function (a, b) {
    return !1;
  };
  var Wf = function () {
    this.h = {};
    this.s = {};
  };
  Wf.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  Wf.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.s.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ca(b) ? qf(a, b) : rf(a, b);
  };
  var Yf = function (a, b, c) {
    if (a.s.hasOwnProperty(b))
      throw (
        "Attempting to add a private function which already exists: " + b + "."
      );
    if (a.h.hasOwnProperty(b))
      throw (
        "Attempting to add a private function with an existing API name: " +
        b +
        "."
      );
    a.s[b] = Ca(c) ? qf(b, c) : rf(b, c);
  };
  function Xf(a, b) {
    var c = void 0;
    return c;
  }
  function Zf() {
    var a = {};
    return a;
  }
  var ag = function (a) {
      return $f ? I.querySelectorAll(a) : null;
    },
    bg = function (a, b) {
      if (!$f) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!I.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    cg = !1;
  if (I.querySelectorAll)
    try {
      var dg = I.querySelectorAll(":root");
      dg && 1 == dg.length && dg[0] == I.documentElement && (cg = !0);
    } catch (a) {}
  var $f = cg;
  var eg = {},
    fg = function (a, b) {
      eg[a] = eg[a] || [];
      eg[a][b] = !0;
    },
    gg = function (a) {
      for (var b = [], c = eg[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    },
    hg = function () {
      for (var a = [], b = eg.GA4_EVENT || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var ig = function (a) {
    fg("GTM", a);
  };
  var jg = function (a) {
      return null == a ? "" : m(a) ? Pa(String(a)) : "e0";
    },
    lg = function (a) {
      return a.replace(kg, "");
    },
    ng = function (a) {
      return mg(a.replace(/\s/g, ""));
    },
    mg = function (a) {
      return Pa(a.replace(og, "").toLowerCase());
    },
    qg = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return pg.test(a) ? a : "e0";
    },
    sg = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (rg.test(c)) return c;
      }
      return "e0";
    },
    vg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== tg.indexOf(c.name)
            ? ug(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    ug = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle)
        try {
          var b = wg(a);
          return z.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return z
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      else return Promise.resolve("e1");
    },
    wg = function (a) {
      var b;
      if (z.TextEncoder) b = new z.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    og = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    rg = /^\S+@\S+\.\S+$/,
    pg = /^\+\d{10,15}$/,
    kg = /[.~]/g,
    xg = {},
    yg =
      ((xg.email = "em"),
      (xg.phone_number = "pn"),
      (xg.first_name = "fn"),
      (xg.last_name = "ln"),
      (xg.street = "sa"),
      (xg.city = "ct"),
      (xg.region = "rg"),
      (xg.country = "co"),
      (xg.postal_code = "pc"),
      (xg.error_code = "ec"),
      xg),
    zg = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Ea(r) || (r = [r]);
        for (var t = 0; t < r.length; ++t) {
          var u = jg(r[t]);
          "" !== u && f.push({ name: p, value: q(u), index: void 0 });
        }
      }
      function d(n, p, q, r) {
        var t = jg(n[p]);
        "" !== t && f.push({ name: p, value: q(t), index: r });
      }
      function e(n) {
        return function (p) {
          ig(64);
          return n(p);
        };
      }
      var f = [];
      if ("https:" === z.location.protocol) {
        c(a, "email", sg);
        c(a, "phone_number", qg);
        c(a, "first_name", e(ng));
        c(a, "last_name", e(ng));
        var g = a.home_address || {};
        c(g, "street", e(mg));
        c(g, "city", e(mg));
        c(g, "postal_code", e(lg));
        c(g, "region", e(mg));
        c(g, "country", e(lg));
        var h = a.address || {};
        Ea(h) || (h = [h]);
        for (var k = 0; k < h.length; k++)
          d(h[k], "first_name", ng, k),
            d(h[k], "last_name", ng, k),
            d(h[k], "street", mg, k),
            d(h[k], "city", mg, k),
            d(h[k], "postal_code", lg, k),
            d(h[k], "region", mg, k),
            d(h[k], "country", lg, k);
        vg(f, b);
      } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
    },
    Ag = function (a, b) {
      zg(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            k = c[f].index,
            n = yg[g];
          n &&
            h &&
            (-1 === tg.indexOf(g) ||
              /^e\d+$/.test(h) ||
              /^[0-9A-Za-z_-]{43}$/.test(h)) &&
            (void 0 !== k && (n += k), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Bg = function (a) {
      if (z.Promise)
        try {
          return new Promise(function (b) {
            Ag(a, function (c, d) {
              b({ ne: c, Tk: d });
            });
          });
        } catch (b) {}
    },
    tg = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var P = {
      g: {
        O: "ad_storage",
        U: "analytics_storage",
        xe: "region",
        Xf: "wait_for_update",
        Oh: "app_remove",
        Ph: "app_store_refund",
        Qh: "app_store_subscription_cancel",
        Rh: "app_store_subscription_convert",
        Sh: "app_store_subscription_renew",
        dg: "add_payment_info",
        Th: "add_shipping_info",
        Tb: "add_to_cart",
        Ub: "remove_from_cart",
        Uh: "view_cart",
        yb: "begin_checkout",
        ze: "select_item",
        zb: "view_item_list",
        Ae: "select_promotion",
        Vb: "view_promotion",
        Ga: "purchase",
        Wb: "refund",
        Ha: "view_item",
        eg: "add_to_wishlist",
        Vh: "first_open",
        Wh: "first_visit",
        Na: "gtag.config",
        Va: "gtag.get",
        Xh: "in_app_purchase",
        zc: "page_view",
        Yh: "session_start",
        Ac: "user_engagement",
        Be: "gclid",
        qa: "ads_data_redaction",
        ca: "allow_ad_personalization_signals",
        Ce: "allow_custom_scripts",
        Zh: "allow_display_features",
        wd: "allow_enhanced_conversions",
        Bc: "allow_google_signals",
        Ia: "allow_interest_groups",
        ai: "auid",
        bi: "auto_detection_enabled",
        Ab: "aw_remarketing",
        De: "aw_remarketing_only",
        Ee: "discount",
        Fe: "aw_feed_country",
        Ge: "aw_feed_language",
        fa: "items",
        He: "aw_merchant_id",
        xd: "campaign_content",
        yd: "campaign_id",
        zd: "campaign_medium",
        Ad: "campaign_name",
        Cc: "campaign",
        Bd: "campaign_source",
        Cd: "campaign_term",
        wa: "client_id",
        ci: "content_group",
        di: "content_type",
        Oa: "conversion_cookie_prefix",
        nk: "conversion_id",
        pk: "conversion_label",
        xa: "conversion_linker",
        qk: "conversion_api",
        ya: "cookie_domain",
        Ja: "cookie_expires",
        Wa: "cookie_flags",
        Xb: "cookie_name",
        kb: "cookie_path",
        Pa: "cookie_prefix",
        Yb: "cookie_update",
        Dd: "country",
        za: "currency",
        Ie: "customer_lifetime_value",
        Dc: "custom_map",
        rk: "debug_mode",
        da: "developer_id",
        fg: "disable_merchant_reported_purchases",
        ei: "dc_custom_params",
        fi: "dc_natural_search",
        Je: "dynamic_event_settings",
        gi: "affiliation",
        gg: "checkout_option",
        hg: "checkout_step",
        hi: "coupon",
        Ke: "list_name",
        ii: "promotions",
        Le: "shipping",
        ig: "tax",
        Ed: "engagement_time_msec",
        lb: "enhanced_client_id",
        Me: "enhanced_conversions",
        jg: "enhanced_conversions_automatic_settings",
        sk: "enhanced_conversions_mode",
        Ne: "estimated_delivery_date",
        Ec: "euid_logged_in_state",
        Zb: "event_callback",
        Oe: "event_developer_id_string",
        tk: "event",
        Fd: "event_settings",
        Gd: "event_timeout",
        ji: "experiments",
        Pe: "firebase_id",
        Fc: "first_party_collection",
        Hd: "_x_20",
        Bb: "_x_19",
        uk: "fledge",
        vk: "gac_gclid",
        wk: "gac_wbraid",
        xk: "gac_wbraid_multiple_conversions",
        Gc: "ga_restrict_domain",
        Qe: "ga_temp_client_id",
        yk: "gdpr_applies",
        kg: "geo_granularity",
        nb: "value_callback",
        ab: "value_key",
        Re: "global_developer_id_string",
        zk: "google_ono",
        ob: "google_signals",
        Id: "google_tld",
        Jd: "groups",
        Ak: "gsa_experiment_id",
        Bk: "iframe_state",
        Kd: "ignore_referrer",
        Se: "internal_traffic_results",
        Ck: "is_passthrough",
        Cb: "language",
        Dk: "legacy_developer_id_string",
        Aa: "linker",
        ac: "accept_incoming",
        bc: "decorate_forms",
        V: "domains",
        Hc: "url_position",
        lg: "method",
        Te: "new_customer",
        mg: "non_interaction",
        ki: "optimize_id",
        pb: "page_location",
        Ue: "page_path",
        qb: "page_referrer",
        Ld: "page_title",
        ng: "passengers",
        og: "phone_conversion_callback",
        li: "phone_conversion_country_code",
        pg: "phone_conversion_css_class",
        mi: "phone_conversion_ids",
        qg: "phone_conversion_number",
        rg: "phone_conversion_options",
        sg: "quantity",
        Ve: "redact_device_info",
        ug: "redact_enhanced_user_id",
        ni: "redact_ga_client_id",
        oi: "redact_user_id",
        Md: "referral_exclusion_definition",
        Ic: "restricted_data_processing",
        ri: "retoken",
        vg: "screen_name",
        We: "screen_resolution",
        si: "search_term",
        Ka: "send_page_view",
        Db: "send_to",
        Jc: "session_duration",
        Kc: "session_engaged",
        Nd: "session_engaged_time",
        Eb: "session_id",
        Lc: "session_number",
        Od: "delivery_postal_code",
        Ek: "tc_privacy_string",
        wg: "temporary_client_id",
        ui: "tracking_id",
        Xe: "traffic_type",
        rb: "transaction_id",
        ba: "transport_url",
        xg: "trip_type",
        Pd: "update",
        sb: "url_passthrough",
        Ba: "user_data",
        Fk: "user_data_auto_latency",
        Gk: "user_data_auto_meta",
        Hk: "user_data_auto_multi",
        Ik: "user_data_auto_selectors",
        Jk: "user_data_auto_status",
        cc: "user_data_settings",
        Qa: "user_id",
        Ra: "user_properties",
        Kk: "us_privacy_string",
        sa: "value",
        Lk: "wbraid",
        Mk: "wbraid_multiple_conversions",
        zg: "_is_linker_valid",
        Ag: "_is_passthrough_cid",
      },
    },
    Cg = {},
    Dg = Object.freeze(
      ((Cg[P.g.ca] = 1),
      (Cg[P.g.wd] = 1),
      (Cg[P.g.Bc] = 1),
      (Cg[P.g.fa] = 1),
      (Cg[P.g.ya] = 1),
      (Cg[P.g.Ja] = 1),
      (Cg[P.g.Wa] = 1),
      (Cg[P.g.Xb] = 1),
      (Cg[P.g.kb] = 1),
      (Cg[P.g.Pa] = 1),
      (Cg[P.g.Yb] = 1),
      (Cg[P.g.Dc] = 1),
      (Cg[P.g.da] = 1),
      (Cg[P.g.Je] = 1),
      (Cg[P.g.Zb] = 1),
      (Cg[P.g.Fd] = 1),
      (Cg[P.g.Gd] = 1),
      (Cg[P.g.Fc] = 1),
      (Cg[P.g.Gc] = 1),
      (Cg[P.g.ob] = 1),
      (Cg[P.g.Id] = 1),
      (Cg[P.g.Jd] = 1),
      (Cg[P.g.Se] = 1),
      (Cg[P.g.Aa] = 1),
      (Cg[P.g.Md] = 1),
      (Cg[P.g.Ic] = 1),
      (Cg[P.g.Ka] = 1),
      (Cg[P.g.Db] = 1),
      (Cg[P.g.Jc] = 1),
      (Cg[P.g.Nd] = 1),
      (Cg[P.g.Od] = 1),
      (Cg[P.g.ba] = 1),
      (Cg[P.g.Pd] = 1),
      (Cg[P.g.cc] = 1),
      (Cg[P.g.Ra] = 1),
      Cg)
    ),
    Eg = Object.freeze([
      P.g.pb,
      P.g.qb,
      P.g.Ld,
      P.g.Cb,
      P.g.vg,
      P.g.Qa,
      P.g.Pe,
      P.g.ci,
    ]),
    Fg = {},
    Gg = Object.freeze(
      ((Fg[P.g.Oh] = 1),
      (Fg[P.g.Ph] = 1),
      (Fg[P.g.Qh] = 1),
      (Fg[P.g.Rh] = 1),
      (Fg[P.g.Sh] = 1),
      (Fg[P.g.Vh] = 1),
      (Fg[P.g.Wh] = 1),
      (Fg[P.g.Xh] = 1),
      (Fg[P.g.Yh] = 1),
      (Fg[P.g.Ac] = 1),
      Fg)
    ),
    Hg = {},
    Ig = Object.freeze(
      ((Hg[P.g.dg] = 1),
      (Hg[P.g.Th] = 1),
      (Hg[P.g.Tb] = 1),
      (Hg[P.g.Ub] = 1),
      (Hg[P.g.Uh] = 1),
      (Hg[P.g.yb] = 1),
      (Hg[P.g.ze] = 1),
      (Hg[P.g.zb] = 1),
      (Hg[P.g.Ae] = 1),
      (Hg[P.g.Vb] = 1),
      (Hg[P.g.Ga] = 1),
      (Hg[P.g.Wb] = 1),
      (Hg[P.g.Ha] = 1),
      (Hg[P.g.eg] = 1),
      Hg)
    ),
    Jg = Object.freeze([P.g.ca, P.g.Bc, P.g.Yb]),
    Kg = Object.freeze([].concat(Jg)),
    Lg = Object.freeze([P.g.Ja, P.g.Gd, P.g.Jc, P.g.Nd, P.g.Ed]),
    Mg = Object.freeze([].concat(Lg)),
    Ng = {},
    Og = ((Ng[P.g.O] = "1"), (Ng[P.g.U] = "2"), Ng),
    Pg = {},
    Qg = Object.freeze(
      ((Pg[P.g.ca] = 1),
      (Pg[P.g.wd] = 1),
      (Pg[P.g.Ia] = 1),
      (Pg[P.g.Ab] = 1),
      (Pg[P.g.De] = 1),
      (Pg[P.g.Ee] = 1),
      (Pg[P.g.Fe] = 1),
      (Pg[P.g.Ge] = 1),
      (Pg[P.g.fa] = 1),
      (Pg[P.g.He] = 1),
      (Pg[P.g.Oa] = 1),
      (Pg[P.g.xa] = 1),
      (Pg[P.g.ya] = 1),
      (Pg[P.g.Ja] = 1),
      (Pg[P.g.Wa] = 1),
      (Pg[P.g.Pa] = 1),
      (Pg[P.g.za] = 1),
      (Pg[P.g.Ie] = 1),
      (Pg[P.g.da] = 1),
      (Pg[P.g.fg] = 1),
      (Pg[P.g.Me] = 1),
      (Pg[P.g.Ne] = 1),
      (Pg[P.g.Pe] = 1),
      (Pg[P.g.Fc] = 1),
      (Pg[P.g.Cb] = 1),
      (Pg[P.g.Te] = 1),
      (Pg[P.g.pb] = 1),
      (Pg[P.g.qb] = 1),
      (Pg[P.g.og] = 1),
      (Pg[P.g.pg] = 1),
      (Pg[P.g.qg] = 1),
      (Pg[P.g.rg] = 1),
      (Pg[P.g.Ic] = 1),
      (Pg[P.g.Ka] = 1),
      (Pg[P.g.Db] = 1),
      (Pg[P.g.Od] = 1),
      (Pg[P.g.rb] = 1),
      (Pg[P.g.ba] = 1),
      (Pg[P.g.Pd] = 1),
      (Pg[P.g.sb] = 1),
      (Pg[P.g.Ba] = 1),
      (Pg[P.g.Qa] = 1),
      (Pg[P.g.sa] = 1),
      Pg)
    );
  Object.freeze(P.g);
  var Rg = {},
    S = (z.google_tag_manager = z.google_tag_manager || {}),
    Sg = Math.random();
  Rg.Ud = "6t0";
  Rg.ia = "dataLayer";
  Rg.Nh =
    "ChEI8OWUlgYQl5D/7ertwvPbARIlAAqhiT032kzV5e6JycUaDyhV8fcMKKtD8vPlgzLfX1Z3HMN7sxoCZsw\x3d";
  var Tg = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Ug = { __paused: !0, __tg: !0 },
    Vg;
  for (Vg in Tg) Tg.hasOwnProperty(Vg) && (Ug[Vg] = !0);
  Rg.yc = "www.googletagmanager.com";
  var Wg,
    Xg = Rg.yc + "/gtm.js";
  Xg = Rg.yc + "/gtag/js";
  Wg = Xg;
  var Yg = Na(""),
    Zg = Na(""),
    $g = null,
    ah = null,
    bh = {},
    ch = {},
    dh = function () {
      var a = S.sequence || 1;
      S.sequence = a + 1;
      return a;
    };
  Rg.Mh = "true";
  var eh = "";
  Rg.Vd = eh;
  var fh = new Ha(),
    gh = {},
    hh = {},
    kh = {
      name: Rg.ia,
      set: function (a, b) {
        nc(Za(a, b), gh);
        ih();
      },
      get: function (a) {
        return jh(a, 2);
      },
      reset: function () {
        fh = new Ha();
        gh = {};
        ih();
      },
    },
    jh = function (a, b) {
      return 2 != b ? fh.get(a) : lh(a);
    },
    lh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = gh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    mh = function (a, b) {
      hh.hasOwnProperty(a) || (fh.set(a, b), nc(Za(a, b), gh), ih());
    },
    nh = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = jh(c, 1);
        if (Ea(d) || mc(d)) d = nc(d);
        hh[c] = d;
      }
    },
    ih = function (a) {
      Ka(hh, function (b, c) {
        fh.set(b, c);
        nc(Za(b), gh);
        nc(Za(b, c), gh);
        a && delete hh[b];
      });
    },
    oh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? lh(a) : fh.get(a);
      "array" === kc(d) || "object" === kc(d) ? (c = nc(d)) : (c = d);
      return c;
    };
  var ph,
    qh = !1;
  function rh() {
    qh = !0;
    ph = ph || {};
  }
  var sh = function (a) {
    qh || rh();
    return ph[a];
  };
  var th = function (a) {
    if (I.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
      return !0;
    var c = z.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h &&
          ((g = g.substring(h + 8, g.indexOf(")", h))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d, null));
    }
    return !1;
  };
  var uh = function () {
      var a = I.body,
        b = I.documentElement || (a && a.parentElement),
        c,
        d;
      if (I.compatMode && "BackCompat" !== I.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        ig(7);
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    },
    vh = function (a) {
      var b = uh(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    };
  var wh = [],
    xh = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
    yh = function (a, b, c) {
      for (
        var d = new z.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < wh.length; f++) if (!wh[f]) return (wh[f] = d), f;
      return wh.push(d) - 1;
    },
    zh = function (a, b, c) {
      function d(h, k) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: h.getBoundingClientRect(),
            intersectionRatio: k,
            intersectionRect: n,
            isIntersecting: 0 < k,
            rootBounds: n,
            target: h,
            time: Ra(),
          };
        J(function () {
          return a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (h, k) {
        return h - k;
      });
      return function () {
        for (var h = 0; h < b.length; h++) {
          var k = vh(b[h]);
          if (k > e[h])
            for (; f[h] < c.length - 1 && k >= c[f[h] + 1]; )
              d(b[h], k), f[h]++;
          else if (k < e[h])
            for (; 0 <= f[h] && k <= c[f[h]]; ) d(b[h], k), f[h]--;
          e[h] = k;
        }
      };
    },
    Ah = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        1 < c[d] ? (c[d] = 1) : 0 > c[d] && (c[d] = 0);
      if (xh) {
        var e = !1;
        J(function () {
          e || zh(a, b, c)();
        });
        return yh(
          function (f) {
            e = !0;
            for (var g = { qc: 0 }; g.qc < f.length; g = { qc: g.qc }, g.qc++)
              J(
                (function (h) {
                  return function () {
                    return a(f[h.qc]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return z.setInterval(zh(a, b, c), 1e3);
    },
    Bh = function (a) {
      xh
        ? 0 <= a &&
          a < wh.length &&
          wh[a] &&
          (wh[a].disconnect(), (wh[a] = void 0))
        : z.clearInterval(a);
    };
  var Ch = /:[0-9]+$/,
    Oh = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var k = h.slice(1).join("=");
          if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
          e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    Rh = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Ph(a.protocol) || Ph(z.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : z.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || z.location.hostname)
            .replace(Ch, "")
            .toLowerCase());
      return Qh(a, b, c, d, e);
    },
    Qh = function (a, b, c, d, e) {
      var f,
        g = Ph(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Sh(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(Ch, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || fg("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var k = f.split("/");
          0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
          f = k.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Oh(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ph = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Sh = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Th = function (a) {
      var b = I.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || fg("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Ch, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    Uh = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Th(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var k = "" + f + g + h;
      "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
      return k;
    };
  var Vh = {};
  var Xh = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { Za: a.Za, tagName: d.tagName, type: 1 };
        b && (e.querySelector = Wh(d));
        c && (e.isVisible = !th(d));
        return e;
      }
    },
    $h = function (a) {
      if (0 != a.length) {
        var b;
        b = Yh(a, function (c) {
          return !Zh.test(c.Za);
        });
        b = Yh(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Yh(b, function (c) {
          return !th(c.element);
        });
        return b[0];
      }
    },
    Yh = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Wh = function (a) {
      var b;
      if (a === I.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = Wh(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    ai = !0,
    bi = !1;
  Vh.Jh = "false";
  var ci = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    di = new RegExp(/@(gmail|googlemail)\./i),
    Zh = new RegExp(/support|noreply/i),
    ei = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
    fi = ["BR"],
    gi = {},
    hi = function (a) {
      a = a || { kc: !0, mc: !0 };
      a.vb = a.vb || { email: !0, phone: !0, Ug: !0 };
      var b,
        c = a,
        d = !!c.kc + "." + !!c.mc;
      c && c.Uc && c.Uc.length && (d += "." + c.Uc.join("."));
      c && c.vb && (d += "." + c.vb.email + "." + c.vb.phone + "." + c.vb.Ug);
      b = d;
      var e = gi[b];
      if (e && 200 > Ra() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = I.body;
      if (h) {
        for (
          var k = h.querySelectorAll("*"), n = 0;
          n < k.length && 1e4 > n;
          n++
        ) {
          var p = k[n];
          if (
            !(0 <= ei.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= fi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < k.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var t = f,
        u = t.status,
        v = [],
        x;
      if (a.vb && a.vb.email) {
        for (var y = t.elements, w = [], A = 0; A < y.length; A++) {
          var B = y[A],
            C = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var E = C.match(ci);
            if (E) {
              var F = E[0],
                D;
              if (z.location) {
                var O = Qh(z.location, "host", !0);
                D = 0 <= F.toLowerCase().indexOf(O);
              } else D = !1;
              D || w.push({ element: B, Za: F });
            }
          }
        }
        var N = a && a.Uc;
        if (N && 0 !== N.length) {
          for (var R = [], Z = 0; Z < w.length; Z++) {
            for (var Q = !0, K = 0; K < N.length; K++) {
              var Y = N[K];
              if (Y && bg(w[Z].element, Y)) {
                Q = !1;
                break;
              }
            }
            Q && R.push(w[Z]);
          }
          v = R;
        } else v = w;
        x = $h(v);
        10 < w.length && (u = "3");
      }
      var ba = [];
      !a.Xj && x && (v = [x]);
      for (var T = 0; T < v.length; T++) ba.push(Xh(v[T], a.kc, a.mc));
      var oa = { elements: ba.slice(0, 10), Kj: Xh(x, a.kc, a.mc), status: u };
      gi[b] = { timestamp: Ra(), result: oa };
      return oa;
    },
    ii = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Za.length + ":" + di.test(a.Za)
      );
    };
  var ji = function (a, b, c) {
      if (c) {
        var d = c.selector_type,
          e = String(c.value),
          f;
        if ("js_variable" === d) {
          e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
          for (var g = e.split(","), h = 0; h < g.length; h++) {
            var k = g[h].trim();
            if (k) {
              if (0 === k.indexOf("dataLayer.")) f = jh(k.substring(10));
              else {
                var n = k.split(".");
                f = z[n.shift()];
                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
              }
              if (void 0 !== f) break;
            }
          }
        } else if ("css_selector" === d && $f) {
          var q = ag(e);
          if (q && 0 < q.length) {
            f = [];
            for (
              var r = 0;
              r < q.length &&
              r < ("email" === b || "phone_number" === b ? 5 : 1);
              r++
            )
              f.push(Tb(q[r]) || Pa(q[r].value));
            f = 1 === f.length ? f[0] : f;
          }
        }
        f && (a[b] = f);
      }
    },
    ki = function (a) {
      if (a) {
        var b = {};
        ji(b, "email", a.email);
        ji(b, "phone_number", a.phone);
        b.address = [];
        for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
          var e = {};
          ji(e, "first_name", c[d].first_name);
          ji(e, "last_name", c[d].last_name);
          ji(e, "street", c[d].street);
          ji(e, "city", c[d].city);
          ji(e, "region", c[d].region);
          ji(e, "country", c[d].country);
          ji(e, "postal_code", c[d].postal_code);
          b.address.push(e);
        }
        return b;
      }
    },
    li = function (a) {
      if (a)
        switch (a.mode) {
          case "selectors":
            return ki(a.selectors);
          case "auto_detect":
            var b;
            var c = a.auto_detect;
            if (c) {
              var d = hi({
                  kc: !1,
                  mc: !1,
                  Uc: c.exclude_element_selectors,
                  vb: { email: !!c.email, phone: !!c.phone, Ug: !!c.address },
                }).elements,
                e = {};
              if (0 < d.length)
                for (var f = 0; f < d.length; f++) {
                  var g = d[f];
                  if (1 === g.type) {
                    e.email = g.Za;
                    break;
                  }
                }
              b = e;
            } else b = void 0;
            return b;
        }
    };
  var si = {},
    ti = function (a, b) {
      if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a))
        return z._gtmexpgrp[a];
      void 0 === si[a] && (si[a] = Math.floor(Math.random() * b));
      return si[a];
    };
  var vi = { rf: "BR", uh: "BR-RJ" };
  var wi = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var yi = function () {
    var a = xi,
      b = "Cf";
    if (a.Cf && a.hasOwnProperty(b)) return a.Cf;
    var c = new a();
    a.Cf = c;
    a.hasOwnProperty(b);
    return c;
  };
  var xi = function () {
    var a = {};
    this.h = function () {
      var b = wi.h,
        c = wi.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[wi.h] = !0;
    };
  };
  var zi = [];
  function Ai() {
    var a = Gb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Bi,
        update: Ci,
        addListener: Di,
        notifyListeners: Ei,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Bi(a, b, c, d, e, f) {
    var g = Ai();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        k = h[a] || {},
        n = k.region,
        p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: k.update,
            quiet: q,
          };
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q &&
          z.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), Fi(a), Ei(), fg("TAGGING", 2));
          }, f);
      }
    }
  }
  function Ci(a, b) {
    var c = Ai();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Gi(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Gi(c, a);
      f.quiet ? ((f.quiet = !1), Fi(a)) : g !== d && Fi(a);
    }
  }
  function Di(a, b) {
    zi.push({ qf: a, Zi: b });
  }
  function Fi(a) {
    for (var b = 0; b < zi.length; ++b) {
      var c = zi[b];
      Ea(c.qf) && -1 !== c.qf.indexOf(a) && (c.rh = !0);
    }
  }
  function Ei(a, b) {
    for (var c = 0; c < zi.length; ++c) {
      var d = zi[c];
      if (d.rh) {
        d.rh = !1;
        try {
          d.Zi({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function Gi(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var Hi = function (a) {
      var b = Ai();
      b.accessedAny = !0;
      return Gi(b, a);
    },
    Ii = function (a) {
      var b = Ai();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Ji = function (a) {
      var b = Ai();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Ki = function () {
      if (!yi().h()) return !1;
      var a = Ai();
      a.accessedAny = !0;
      return a.active;
    },
    Li = function () {
      var a = Ai();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Mi = function (a, b) {
      Ai().addListener(a, b);
    },
    Ni = function (a, b) {
      Ai().notifyListeners(a, b);
    },
    Oi = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ji(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Mi(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Pi = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === Hi(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = m(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Mi(d, function (f) {
          var g = c();
          0 < g.length && ((f.qf = g), a(f));
        });
    };
  function Qi() {}
  function Ri() {}
  function Si(a) {
    for (var b = [], c = 0; c < Ti.length; c++) {
      var d = a(Ti[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Ti = [P.g.O, P.g.U],
    Ui = function (a) {
      var b = a[P.g.xe];
      b && ig(40);
      var c = a[P.g.Xf];
      c && ig(41);
      for (
        var d = Ea(b) ? b : [b], e = { sc: 0 };
        e.sc < d.length;
        e = { sc: e.sc }, ++e.sc
      )
        Ka(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== P.g.xe && g !== P.g.Xf) {
                var k = d[f.sc],
                  n = vi.rf,
                  p = vi.uh;
                Ai().set(g, h, k, n, p, c);
              }
            };
          })(e)
        );
    },
    Vi = 0,
    Wi = function (a, b) {
      Ka(a, function (e, f) {
        Ai().update(e, f);
      });
      Ni(b.eventId, b.priorityId);
      var c = Ra(),
        d = c - Vi;
      Vi && 0 <= d && 1e3 > d && ig(66);
      Vi = c;
    },
    Xi = function (a) {
      var b = Hi(a);
      return void 0 != b ? b : !0;
    },
    Yi = function () {
      return "G1" + Si(Hi);
    },
    Zi = function (a, b) {
      Mi(a, b);
    },
    $i = function (a, b) {
      Pi(a, b);
    },
    aj = function (a, b) {
      Oi(a, b);
    };
  var bj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var cj = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k);
      }
    }
    return d;
  };
  var dj = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ej = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function fj(a) {
    return "null" !== a.origin;
  }
  var ij = function (a, b, c, d) {
      return gj(d) ? cj(a, String(b || hj()), c) : [];
    },
    lj = function (a, b, c, d, e) {
      if (gj(e)) {
        var f = jj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = kj(
            f,
            function (g) {
              return g.de;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = kj(
            f,
            function (g) {
              return g.dd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function mj(a, b, c, d) {
    var e = hj(),
      f = window;
    fj(f) && (f.document.cookie = a);
    var g = hj();
    return e != g || (void 0 != c && 0 <= ij(b, g, !1, d).indexOf(c));
  }
  var qj = function (a, b, c, d) {
      function e(x, y, w) {
        if (null == w) return delete h[y], x;
        h[y] = w;
        return x + "; " + y + "=" + w;
      }
      function f(x, y) {
        if (null == y) return delete h[y], x;
        h[y] = !0;
        return x + "; " + y;
      }
      if (!gj(c.fb)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = nj(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var k;
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = "" + c.expires);
      g = e(g, "expires", k);
      g = e(g, "max-age", c.Aj);
      g = e(g, "samesite", c.Uj);
      c.Wj && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = oj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (x) {
            q = x;
            continue;
          }
          r = !0;
          if (!pj(u, c.path) && mj(v, a, b, c.fb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return pj(n, c.path) ? 1 : mj(g, a, b, c.fb) ? 0 : 1;
    },
    rj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return qj(a, b, c);
    };
  function kj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        k = b(h);
      k === c
        ? d.push(h)
        : void 0 === f || k < f
        ? ((e = [h]), (f = k))
        : k === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function jj(a, b, c) {
    for (var d = [], e = ij(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")),
          d.push({ id: g.join("."), de: 1 * k[0] || 1, dd: 1 * k[1] || 1 }));
      }
    }
    return d;
  }
  var nj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    sj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    tj = /(^|\.)doubleclick\.net$/i,
    pj = function (a, b) {
      return (
        tj.test(window.document.location.hostname) || ("/" === b && sj.test(a))
      );
    },
    hj = function () {
      return fj(window) ? window.document.cookie : "";
    },
    oj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      tj.test(e) || sj.test(e) || a.push("none");
      return a;
    },
    gj = function (a) {
      if (!yi().h() || !a || !Ki()) return !0;
      if (!Ji(a)) return !1;
      var b = Hi(a);
      return null == b ? !0 : !!b;
    };
  var uj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (bj(a) & 2147483647)) : String(b);
    },
    vj = function (a) {
      return [uj(a), Math.round(Ra() / 1e3)].join(".");
    },
    yj = function (a, b, c, d, e) {
      var f = wj(b);
      return lj(a, f, xj(c), d, e);
    },
    zj = function (a, b, c, d) {
      var e = "" + wj(c),
        f = xj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    wj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    xj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Aj = function () {
    S.dedupe_gclid || (S.dedupe_gclid = "" + vj());
    return S.dedupe_gclid;
  };
  var Bj = function () {
    var a = !1;
    return a;
  };
  var Ge = { J: "G-P7JSYB1CSP", xc: "84376309" },
    Cj = { ph: "G-P7JSYB1CSP", qh: "G-P7JSYB1CSP" },
    Dj = function () {
      var a = [Ge.J];
      Cj.ph && (a = Cj.ph.split("|"));
      return a;
    },
    Ej = function () {
      var a = [Ge.J];
      return a;
    },
    Fj = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    Hj = function (a) {
      return Gj().container.hasOwnProperty(a);
    };
  function Gj() {
    var a = S.tidr;
    a || ((a = new Fj()), (S.tidr = a));
    return a;
  }
  var Ij;
  if (3 === Rg.Ud.length) Ij = "g";
  else {
    var Jj = "G";
    Jj = "g";
    Ij = Jj;
  }
  var Kj = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Ij,
      OPT: "o",
    },
    Lj = function (a) {
      var b = Ge.J.split("-"),
        c = b[0].toUpperCase(),
        d = Kj[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === Rg.Ud.length) {
        var g = "w";
        g = Bj() ? "s" : "o";
        f = "2" + g;
      } else f = "";
      return f + d + Rg.Ud + e;
    };
  function Mj(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Nj = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };
  function Oj() {
    return tb("iPhone") && !tb("iPod") && !tb("iPad");
  }
  tb("Opera");
  tb("Trident") || tb("MSIE");
  tb("Edge");
  !tb("Gecko") ||
    (-1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge")) ||
    tb("Trident") ||
    tb("MSIE") ||
    tb("Edge");
  -1 != sb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
  tb("Macintosh");
  tb("Windows");
  tb("Linux") || tb("CrOS");
  var Pj = la.navigator || null;
  Pj && (Pj.appVersion || "").indexOf("X11");
  tb("Android");
  Oj();
  tb("iPad");
  tb("iPod");
  Oj() || tb("iPad") || tb("iPod");
  sb().toLowerCase().indexOf("kaios");
  var Qj = function (a) {
    if (!a || !I.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    I.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Rj = function () {};
  var Sj = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Tj = function (a, b, c) {
      this.s = a;
      this.h = null;
      this.I = {};
      this.oa = 0;
      this.T = void 0 === b ? 500 : b;
      this.D = void 0 === c ? !1 : c;
      this.C = null;
    };
  ka(Tj, Rj);
  Tj.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.D },
      d = ej(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Sj(c)),
          (c.internalBlockOnErrors = b.D),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Uj(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Tj.prototype.removeEventListener = function (a) {
    a && a.listenerId && Uj(this, "removeEventListener", null, a.listenerId);
  };
  var Wj = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var k;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Vj(a.vendor.consents, void 0 === d ? "755" : d);
          k =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Vj(a.purpose.consents, b);
        } else k = !0;
      else
        k =
          1 === h
            ? a.purpose && a.vendor
              ? Vj(a.purpose.legitimateInterests, b) &&
                Vj(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return k;
    },
    Vj = function (a, b) {
      return !(!a || !a[b]);
    },
    Uj = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Xj(a)) {
        Yj(a);
        var f = ++a.oa;
        a.I[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Xj = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Yj = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.I[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Nj(a.s, a.C));
    };
  var Zj = !0;
  Zj = !1;
  var ak = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    bk = Mj("", 550),
    ck = Mj("", 500);
  function dk() {
    var a = S.tcf || {};
    return (S.tcf = a);
  }
  var ik = function () {
    var a = dk(),
      b = new Tj(z, Zj ? 3e3 : -1);
    if (
      !0 === z.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof z.__tcfapi ||
        "function" === typeof b.s.__tcfapi ||
        null != Xj(b))
    ) {
      a.active = !0;
      a.gd = {};
      ek();
      var c = null;
      Zj
        ? (c = z.setTimeout(function () {
            fk(a);
            gk(a);
            c = null;
          }, ck))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) fk(a), gk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = hk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in ak)
                if (ak.hasOwnProperty(g))
                  if ("1" === g) {
                    var h = d,
                      k = !0;
                    k = void 0 === k ? !1 : k;
                    var n;
                    var p = h;
                    !1 === p.gdprApplies
                      ? (n = !0)
                      : (void 0 === p.internalErrorState &&
                          (p.internalErrorState = Sj(p)),
                        (n =
                          "error" === p.cmpStatus || 0 !== p.internalErrorState
                            ? !p.internalBlockOnErrors
                            : "loaded" !== p.cmpStatus ||
                              ("tcloaded" !== p.eventStatus &&
                                "useractioncomplete" !== p.eventStatus)
                            ? !1
                            : !0));
                    f["1"] = n
                      ? !1 === h.gdprApplies ||
                        "tcunavailable" === h.tcString ||
                        (void 0 === h.gdprApplies && !k) ||
                        "string" !== typeof h.tcString ||
                        !h.tcString.length
                        ? !0
                        : Wj(h, "1", 0)
                      : !1;
                  } else f[g] = Wj(d, g, ak[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.gd = e), gk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), fk(a), gk(a);
      }
    }
  };
  function fk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Zj && (a.gd = hk());
  }
  function ek() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = bk), a);
    Ui(b);
  }
  function hk() {
    var a = {},
      b;
    for (b in ak) ak.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function gk(a) {
    var b = {},
      c = ((b.ad_storage = a.gd["1"] ? "granted" : "denied"), b);
    Wi(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: jk() }
    );
  }
  var jk = function () {
      var a = dk();
      return a.active ? a.tcString || "" : "";
    },
    kk = function () {
      var a = dk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    lk = function (a) {
      if (!ak.hasOwnProperty(String(a))) return !0;
      var b = dk();
      return b.active && b.gd ? !!b.gd[String(a)] : !0;
    };
  function mk(a, b, c) {
    var d,
      e = Number(null != a.nc ? a.nc : void 0);
    0 !== e && (d = new Date((b || Ra()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var nk = ["1"],
    ok = {},
    pk = {},
    tk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = qk(a.prefix);
      if (!ok[c] && !rk(c, a.path, a.domain) && b) {
        var d = qk(a.prefix),
          e = vj();
        if (0 === sk(d, e, a)) {
          var f = Gb("google_tag_data", {});
          f._gcl_au ? fg("GTM", 57) : (f._gcl_au = e);
        }
        rk(c, a.path, a.domain);
      }
    };
  function sk(a, b, c, d) {
    var e = zj(b, "1", c.domain, c.path),
      f = mk(c, d);
    f.fb = "ad_storage";
    return rj(a, e, f);
  }
  function rk(a, b, c) {
    var d = yj(a, b, c, nk, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((ok[a] = e.slice(0, 2).join(".")),
        (pk[a] = { id: e.slice(2, 4).join("."), lh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (pk[a] = { id: e.slice(0, 2).join("."), lh: Number(e[2]) || 0 })
      : (ok[a] = d);
    return !0;
  }
  function qk(a) {
    return (a || "_gcl") + "_au";
  }
  function uk() {
    for (var a = vk, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function wk() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var vk, xk;
  function yk(a) {
    function b(k) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = xk[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return k;
    }
    vk = vk || wk();
    xk = xk || uk();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var zk;
  var Dk = function () {
      var a = Ak,
        b = Bk,
        c = Ck(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Qb(I, "mousedown", d);
        Qb(I, "keyup", d);
        Qb(I, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Ek = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      Ck().decorators.push(f);
    },
    Fk = function (a, b, c) {
      for (var d = Ck().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var k = g.domains,
              n = a,
              p = !!g.sameHost;
            if (k && (p || n !== I.location.hostname))
              for (var q = 0; q < k.length; q++)
                if (k[q] instanceof RegExp) {
                  if (k[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(k[q]) ||
                  (p && 0 <= k[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Ua(e, g.callback());
        }
      }
      return e;
    };
  function Ck() {
    var a = Gb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var Gk = /(.*?)\*(.*?)\*(.*)/,
    Hk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Ik = /^(?:www\.|m\.|amp\.)+/,
    Jk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Kk(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Mk = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (
          void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString()
        ) {
          b.push(c);
          var e = b,
            f = e.push,
            g,
            h = String(d);
          vk = vk || wk();
          xk = xk || uk();
          for (var k = [], n = 0; n < h.length; n += 3) {
            var p = n + 1 < h.length,
              q = n + 2 < h.length,
              r = h.charCodeAt(n),
              t = p ? h.charCodeAt(n + 1) : 0,
              u = q ? h.charCodeAt(n + 2) : 0,
              v = r >> 2,
              x = ((r & 3) << 4) | (t >> 4),
              y = ((t & 15) << 2) | (u >> 6),
              w = u & 63;
            q || ((w = 64), p || (y = 64));
            k.push(vk[v], vk[x], vk[y], vk[w]);
          }
          g = k.join("");
          f.call(e, g);
        }
      }
    var A = b.join("*");
    return ["1", Lk(A), A].join("*");
  };
  function Lk(a, b) {
    var c = [
        z.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Eb.userLanguage || Eb.language,
        Math.floor(Ra() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = zk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    zk = d;
    for (var k = 4294967295, n = 0; n < c.length; n++)
      k = (k >>> 8) ^ zk[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36);
  }
  function Nk() {
    return function (a) {
      var b = Th(z.location.href),
        c = b.search.replace("?", ""),
        d = Oh(c, "_gl", !1, !0) || "";
      a.query = Ok(d) || {};
      var e = Rh(b, "fragment").match(Kk("_gl"));
      a.fragment = Ok((e && e[3]) || "") || {};
    };
  }
  function Pk(a, b) {
    var c = Kk(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Qk = function (a, b) {
      b || (b = "_gl");
      var c = Jk.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Pk(b, (c[2] || "").slice(1)),
        f = Pk(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Rk = function (a) {
      var b = Nk(),
        c = Ck();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Ua(d, e.query), a && Ua(d, e.fragment));
      return d;
    },
    Ok = function (a) {
      try {
        var b = Sk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = yk(d[e + 1]);
            c[f] = g;
          }
          fg("TAGGING", 6);
          return c;
        }
      } catch (h) {
        fg("TAGGING", 8);
      }
    };
  function Sk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Gk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          k;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Lk(h, p)) {
              k = !0;
              break a;
            }
          k = !1;
        }
        if (k) return h;
        fg("TAGGING", 7);
      }
    }
  }
  function Tk(a, b, c, d) {
    function e(p) {
      p = Pk(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Jk.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      k = f[3] || "",
      n = a + "=" + b;
    d ? (k = "#" + e(k.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + k;
  }
  function Uk(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Fk(b, 1, c),
      e = Fk(b, 2, c),
      f = Fk(b, 3, c);
    if (Wa(d)) {
      var g = Mk(d);
      c ? Vk("_gl", g, a) : Wk("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var h = Mk(e);
      Wk("_gl", h, a, !0);
    }
    for (var k in f)
      if (f.hasOwnProperty(k))
        a: {
          var n = k,
            p = f[k],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Wk(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Vk(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Tk(n, p, q);
        }
  }
  function Wk(a, b, c, d) {
    if (c.href) {
      var e = Tk(a, b, c.href, void 0 === d ? !1 : d);
      rb.test(e) && (c.href = e);
    }
  }
  function Vk(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var k = I.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k);
        }
      } else if ("post" === d) {
        var n = Tk(a, b, c.action);
        rb.test(n) && (c.action = n);
      }
    }
  }
  function Ak(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Uk(e, e.hostname);
      }
    } catch (g) {}
  }
  function Bk(a) {
    try {
      if (a.action) {
        var b = Rh(Th(a.action), "host");
        Uk(a, b);
      }
    } catch (c) {}
  }
  var Xk = function (a, b, c, d) {
      Dk();
      Ek(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Yk = function (a, b) {
      Dk();
      Ek(a, [Qh(z.location, "host", !0)], b, !0, !0);
    },
    Zk = function () {
      var a = I.location.hostname,
        b = Hk.exec(I.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Ik, ""),
        k = e.replace(Ik, ""),
        n;
      if (!(n = h === k)) {
        var p = "." + k;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    $k = function (a, b) {
      return !1 === a ? !1 : a || b || Zk();
    };
  var al = {};
  var bl = function (a) {
    for (
      var b = [],
        c = I.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Wf: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function cl(a, b) {
    var c = bl(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Wf] || (d[c[e].Wf] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), La: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Wf].push(g);
      }
    }
    return d;
  }
  var dl = /^\w+$/,
    el = /^[\w-]+$/,
    fl = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    gl = function () {
      if (!yi().h() || !Ki()) return !0;
      var a = Hi("ad_storage");
      return null == a ? !0 : !!a;
    },
    hl = function (a, b) {
      Ji("ad_storage")
        ? gl()
          ? a()
          : Pi(a, "ad_storage")
        : b
        ? fg("TAGGING", 3)
        : Oi(
            function () {
              hl(a, !0);
            },
            ["ad_storage"]
          );
    },
    jl = function (a) {
      return il(a).map(function (b) {
        return b.La;
      });
    },
    il = function (a) {
      var b = [];
      if (!fj(z) || !I.cookie) return b;
      var c = ij(a, I.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { rd: d.rd }, e++) {
        var f = kl(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.rd = g.La;
          var k = g.timestamp,
            n = g.labels,
            p = Fa(
              b,
              (function (q) {
                return function (r) {
                  return r.La === q.rd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, k)),
              (p.labels = ll(p.labels, n || [])))
            : b.push({ version: h, La: d.rd, timestamp: k, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return ml(b);
    };
  function ll(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function nl(a) {
    return a && "string" == typeof a && a.match(dl) ? a : "_gcl";
  }
  var pl = function () {
      var a = Th(z.location.href),
        b = Rh(a, "query", !1, void 0, "gclid"),
        c = Rh(a, "query", !1, void 0, "gclsrc"),
        d = Rh(a, "query", !1, void 0, "wbraid"),
        e = Rh(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Oh(f, "gclid", !1);
        c = c || Oh(f, "gclsrc", !1);
        d = d || Oh(f, "wbraid", !1);
      }
      return ol(b, c, e, d);
    },
    ol = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && el.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(el))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    rl = function (a) {
      var b = pl();
      hl(function () {
        ql(b, !1, a);
      });
    };
  function ql(a, b, c, d, e) {
    function f(x, y) {
      var w = sl(x, g);
      w && (rj(w, y, h), (k = !0));
    }
    c = c || {};
    e = e || [];
    var g = nl(c.prefix);
    d = d || Ra();
    var h = mk(c, d, !0);
    h.fb = "ad_storage";
    var k = !1,
      n = Math.round(d / 1e3),
      p = function (x) {
        var y = ["GCL", n, x];
        0 < e.length && y.push(e.join("."));
        return y.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == al.enable_gbraid_cookie_write
        ? 0
        : al.enable_gbraid_cookie_write) &&
      !k &&
      a.gb
    ) {
      var q = a.gb[0],
        r = sl("gb", g),
        t = !1;
      if (!b)
        for (var u = il(r), v = 0; v < u.length; v++)
          u[v].La === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var ul = function (a, b) {
      var c = Rk(!0);
      hl(function () {
        for (var d = nl(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== fl[f]) {
            var g = sl(f, d),
              h = c[g];
            if (h) {
              var k = Math.min(tl(h), Ra()),
                n;
              b: {
                var p = k;
                if (fj(z))
                  for (
                    var q = ij(g, I.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (tl(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = mk(b, k, !0);
                t.fb = "ad_storage";
                rj(g, h, t);
              }
            }
          }
        }
        ql(ol(c.gclid, c.gclsrc), !1, b);
      });
    },
    sl = function (a, b) {
      var c = fl[a];
      if (void 0 !== c) return b + c;
    },
    tl = function (a) {
      return 0 !== vl(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function kl(a) {
    var b = vl(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          La: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function vl(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !el.test(a[2])
      ? []
      : a;
  }
  var wl = function (a, b, c, d, e) {
      if (Ea(b) && fj(z)) {
        var f = nl(e),
          g = function () {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var n = sl(a[k], f);
              if (n) {
                var p = ij(n, I.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        hl(function () {
          Xk(g, b, c, d);
        });
      }
    },
    ml = function (a) {
      return a.filter(function (b) {
        return el.test(b.La);
      });
    },
    xl = function (a, b) {
      if (fj(z)) {
        for (var c = nl(b.prefix), d = {}, e = 0; e < a.length; e++)
          fl[a[e]] && (d[a[e]] = fl[a[e]]);
        hl(function () {
          Ka(d, function (f, g) {
            var h = ij(c + g, I.cookie, void 0, "ad_storage");
            h.sort(function (t, u) {
              return tl(u) - tl(t);
            });
            if (h.length) {
              var k = h[0],
                n = tl(k),
                p = 0 !== vl(k.split(".")).length ? k.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== vl(k.split(".")).length ? k.split(".")[2] : void 0;
              q[f] = [r];
              ql(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function yl(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var zl = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (Ki()) {
      var c = pl();
      if (yl(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Yk(function () {
          return d;
        }, 3);
        Yk(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };
  function Al(a, b) {
    var c = nl(b),
      d = sl(a, c);
    if (!d) return 0;
    for (var e = il(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Bl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Zl = /[A-Z]+/,
    $l = /\s/,
    am = function (a) {
      if (m(a)) {
        a = Pa(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Zl.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || ($l.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], R: d };
          }
        }
      }
    },
    cm = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = am(a[c]);
        d && (b[d.id] = d);
      }
      bm(b);
      var e = [];
      Ka(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function bm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.R[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var em = function (a, b, c, d) {
      return (2 === dm() || d || "http:" != z.location.protocol ? a : b) + c;
    },
    dm = function () {
      var a = Nb(),
        b;
      if (1 === a)
        a: {
          var c = Wg;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = I.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var k = g[h].src;
            if (k) {
              k = k.toLowerCase();
              if (0 === k.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === k.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var qm = function (a, b, c) {
      this.ja = a;
      this.eventName = b;
      this.B = c;
      this.H = {};
      this.metadata = nc(c.eventMetadata || {});
      this.ma = !1;
    },
    rm = function (a, b, c) {
      var d = a.B.getWithConfig(b);
      void 0 !== d ? (a.H[b] = d) : void 0 !== c && (a.H[b] = c);
    },
    sm = function (a, b, c) {
      var d = sh(a.ja);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function tm(a) {
    return {
      getDestinationId: function () {
        return a.ja;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.H[b];
      },
      setHitData: function (b, c) {
        return void (a.H[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.H[b] && (a.H[b] = c);
      },
      copyToHitData: function (b, c) {
        rm(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.ma = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
    };
  }
  var vm = function (a) {
      var b = um[a.ja];
      if (!a.ma && b)
        for (var c = tm(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.ma = !0;
          }
          if (a.ma) break;
        }
    },
    wm = function (a, b) {
      var c = um[a];
      c || (c = um[a] = []);
      c.push(b);
    },
    um = {};
  var zm = [];
  zm[10] = !0;
  zm[12] = !0;
  zm[20] = !0;
  zm[21] = !0;
  zm[22] = !0;
  zm[16] = !0;
  function Qm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var Rm = !1;
  function Sm() {
    if (Qm("join-ad-interest-group") && Ca(Eb.joinAdInterestGroup)) return !0;
    Rm ||
      (Qj(
        "A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (Rm = !0));
    return Qm("join-ad-interest-group") && Ca(Eb.joinAdInterestGroup);
  }
  function Tm(a, b) {
    var c = void 0;
    try {
      c = I.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ra() - d) {
        fg("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          I.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          fg("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Ob(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ra() },
      c
    );
  }
  var Um = function () {
    if (Ca(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  function Vm(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Th("" + c + b).href;
    }
  }
  function Wm(a, b) {
    return Xm() ? Vm(a, b) : void 0;
  }
  function Xm() {
    var a = !1;
    return a;
  }
  function Ym() {
    return !!Rg.Vd && "SGTM_TOKEN" !== Rg.Vd.split("@@").join("");
  }
  var $m = !1;
  var an = function () {
      this.h = {};
    },
    bn = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    cn = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    en = function (a, b, c, d, e) {};
  var gn = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    hn = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    jn = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    kn =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var ln = function () {
      var a = !1;
      a = !0;
      return a;
    },
    nn = function (a) {
      var b = jh("gtm.allowlist") || jh("gtm.whitelist");
      b && ig(9);
      ln() && (b = ["google", "gtagfl", "lcl", "zone"]);
      var c = b && Xa(Oa(b), hn),
        d = jh("gtm.blocklist") || jh("gtm.blacklist");
      d || ((d = jh("tagTypeBlacklist")) && ig(3));
      d ? ig(8) : (d = []);
      mn() &&
        ((d = Oa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Oa(d).indexOf("google") && ig(2);
      var e = d && Xa(Oa(d), jn),
        f = {};
      return function (g) {
        var h = g && g[Jd.Fb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var k = ch[h] || [],
          n = a(h, k);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (k && 0 < k.length)
                  for (var q = 0; q < k.length; q++) {
                    if (0 > c.indexOf(k[q])) {
                      ig(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var t = 0 <= e.indexOf(h);
          if (t) r = t;
          else {
            var u = Ia(e, k || []);
            u && ig(10);
            r = u;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= k.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Ia(e, kn));
        return (f[h] = v);
      };
    },
    mn = function () {
      return gn.test(z.location && z.location.hostname);
    };
  var qn = function (a) {
      var b = !1;
      return b;
    },
    tn = function (a, b) {
      var c;
      return c;
    },
    wn = function (a) {},
    An = function (a) {},
    Bn = function () {
      return (
        "&tc=" +
        ie.filter(function (a) {
          return a;
        }).length
      );
    },
    En = function () {
      2022 <= Cn().length && Dn();
    },
    Fn = function (a) {
      return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
    },
    Hn = function () {
      Gn || (Gn = z.setTimeout(Dn, 500));
    },
    Dn = function (a) {
      Gn && (z.clearTimeout(Gn), (Gn = void 0));
      if (void 0 !== on && (!In[on] || Jn || Kn || qn(a)))
        if (void 0 === sn[on] && (Ln[on] || Mn.rj() || 0 >= Nn--))
          ig(1), (Ln[on] = !0);
        else {
          void 0 === sn[on] && Mn.Pj();
          var b = Cn(!0, a);
          Wb(b);
          if (On || (Pn && 0 < Qn.length)) {
            var c = b.replace("/a?", "/td?");
            Wb(c);
          }
          In[on] = !0;
          Pn = On = Rn = Sn = Tn = Kn = Jn = "";
          Qn = [];
        }
    },
    Cn = function (a, b) {
      var c = on;
      if (void 0 === c) return "";
      var d = gg("GTM"),
        e = gg("TAGGING");
      return [
        Un,
        In[c] ? "" : "&es=1",
        Vn[c],
        wn(c),
        d ? "&u=" + d : "",
        e ? "&ut=" + e : "",
        Bn(),
        Jn,
        Kn,
        Tn,
        Sn,
        An(a),
        Rn,
        On,
        tn(a, b),
        Pn ? "&dl=" + encodeURIComponent(Pn) : "",
        0 < Qn.length ? "&tdp=" + Qn.join(".") : "",
        "&z=0",
      ].join("");
    },
    Xn = function () {
      Un = Wn();
    },
    Wn = function () {
      return [Yn, "&v=3&t=t", "&pid=" + Ga(), "&rv=" + Rg.Ud].join("");
    },
    zn = ["L", "S", "Y"],
    vn = ["S", "E"],
    Zn = { sampleRate: "0.005000", Gh: "", Fh: Number("5") },
    $n =
      0 <= I.location.search.indexOf("?gtm_latency=") ||
      0 <= I.location.search.indexOf("&gtm_latency="),
    ao;
  if (!(ao = $n)) {
    var bo = Math.random(),
      co = Zn.sampleRate;
    ao = bo < co;
  }
  var eo = ao,
    Yn = "https://www.googletagmanager.com/a?id=" + Ge.J + "&cv=1",
    fo = {
      label: Ge.J + " Container",
      children: [{ label: "Initialization", children: [] }],
    },
    Un = Wn(),
    In = {},
    Jn = "",
    Kn = "",
    Rn = "",
    Sn = "",
    On = "",
    Qn = [],
    Pn = "",
    yn = {},
    xn = !1,
    un = {},
    go = {},
    Tn = "",
    on = void 0,
    Vn = {},
    Ln = {},
    Gn = void 0,
    ho = 5;
  0 < Zn.Fh && (ho = Zn.Fh);
  var Mn = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        rj: function () {
          return c < a ? !1 : Ra() - d[c % a] < b;
        },
        Pj: function () {
          var f = c++ % a;
          d[f] = Ra();
        },
      };
    })(ho, 1e3),
    Nn = 1e3,
    jo = function (a, b) {
      if (eo && void 0 !== a && !Ln[a] && on !== a) {
        Dn();
        on = a;
        Rn = Jn = "";
        Vn[a] = "&e=" + Fn(b) + "&eid=" + a;
        Hn();
      }
    },
    ko = function (a, b, c, d) {
      if (eo && b) {
        var e,
          f = String(b[Jd.Fb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Ln[a]) {
          a !== on && (Dn(), (on = a));
          Jn = Jn ? Jn + "." + g : "&tr=" + g;
          var h = b["function"];
          if (!h)
            throw Error("Error: No function name given for function call.");
          var k = (ke[h] ? "1" : "2") + e;
          Rn = Rn ? Rn + "." + k : "&ti=" + k;
          Hn();
          En();
        }
      }
    };
  var ro = function (a, b, c) {
      if (eo && void 0 !== a && !Ln[a]) {
        a !== on && (Dn(), (on = a));
        var d = c + b;
        Kn = Kn ? Kn + "." + d : "&epr=" + d;
        Hn();
        En();
      }
    },
    so = function (a, b, c) {},
    rn = ["S", "P", "C", "Z"],
    to = {},
    uo = ((to[1] = 5), (to[2] = 5), (to[3] = 5), to),
    pn = {},
    sn = {},
    vo = function (a, b, c) {},
    wo = function () {
      if (eo) {
        z.setInterval(Xn, 864e5);
      }
    };
  var xo = { initialized: 11, complete: 12, interactive: 13 },
    yo = {},
    zo = Object.freeze(((yo[P.g.Ka] = !0), yo)),
    Ao =
      0 <= I.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= I.location.search.indexOf("&gtm_diagnostics="),
    Co = function (a, b, c) {
      if ("config" !== a || 1 < am(b).R.length) return;
      var d,
        e = Gb("google_tag_data", {});
      e.td || (e.td = {});
      d = e.td;
      var f = nc(c.globalConfig);
      nc(c.eventModel, f);
      var g = [],
        h;
      for (h in d) {
        var k = Bo(d[h], f);
        k.length && (Ao && console.log(k), g.push(h));
      }
      if (g.length) {
        if (g.length) {
          var n = b + "*" + g.join(".");
          On = On ? On + "!" + n : "&tdc=" + n;
        }
        fg("TAGGING", xo[I.readyState] || 14);
      }
      d[b] = f;
    };
  function Do(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Bo(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? zo[q] : t;
      },
      f;
    for (f in Do(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        k = e(f, b),
        n = "object" === kc(h) || "array" === kc(h),
        p = "object" === kc(k) || "array" === kc(k);
      if (n && p) Bo(h, k, c, g);
      else if (n || p || h !== k) c[g] = !0;
    }
    return Object.keys(c);
  }
  var Eo = !1,
    Fo = 0,
    Go = [];
  function Ho(a) {
    if (!Eo) {
      var b = I.createEventObject,
        c = "complete" == I.readyState,
        d = "interactive" == I.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Eo = !0;
        for (var e = 0; e < Go.length; e++) J(Go[e]);
      }
      Go.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function Io() {
    if (!Eo && 140 > Fo) {
      Fo++;
      try {
        I.documentElement.doScroll("left"), Ho();
      } catch (a) {
        z.setTimeout(Io, 50);
      }
    }
  }
  var Jo = function (a) {
    Eo ? a() : Go.push(a);
  };
  var Ko = function () {
    this.I = 0;
    this.h = {};
  };
  Ko.prototype.s = function (a, b, c) {
    var d = ++this.I;
    this.h[a] = this.h[a] || {};
    this.h[a][String(d)] = { listener: b, Ya: c };
    return d;
  };
  Ko.prototype.C = function (a, b) {
    var c = this.h[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  Ko.prototype.D = function (a, b) {
    var c = [];
    Ka(this.h[a], function (d, e) {
      0 > c.indexOf(e.listener) &&
        (void 0 === e.Ya || 0 <= b.indexOf(e.Ya)) &&
        c.push(e.listener);
    });
    return c;
  };
  var Lo = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ge.J,
    };
  };
  var No = function (a, b) {
      this.h = !1;
      this.D = [];
      this.I = { tags: [] };
      this.T = !1;
      this.s = this.C = 0;
      Mo(this, a, b);
    },
    Oo = function (a, b, c, d) {
      if (Ug.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      mc(d) && (e = nc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    Po = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Qo = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    Mo = function (a, b, c) {
      void 0 !== b && a.Xd(b);
      c &&
        z.setTimeout(function () {
          return Qo(a);
        }, Number(c));
    };
  No.prototype.Xd = function (a) {
    var b = this,
      c = Ta(function () {
        return J(function () {
          a(Ge.J, b.I);
        });
      });
    this.h ? c() : this.D.push(c);
  };
  var Ro = function (a) {
      a.C++;
      return Ta(function () {
        a.s++;
        a.T && a.s >= a.C && Qo(a);
      });
    },
    So = function (a) {
      a.T = !0;
      a.s >= a.C && Qo(a);
    };
  var To = function () {
      function a(d) {
        return !Da(d) || 0 > d ? 0 : d;
      }
      if (!S._li && z.performance && z.performance.timing) {
        var b = z.performance.timing.navigationStart,
          c = Da(kh.get("gtm.start")) ? kh.get("gtm.start") : 0;
        S._li = { cst: a(c - b), cbt: a(ah - b) };
      }
    },
    Uo = function (a) {
      z.performance && z.performance.mark(Ge.J + "_" + a + "_start");
    },
    Vo = function (a) {
      if (z.performance) {
        var b = Ge.J + "_" + a + "_start",
          c = Ge.J + "_" + a + "_duration";
        z.performance.measure(c, b);
        var d = z.performance.getEntriesByName(c)[0];
        z.performance.clearMarks(b);
        z.performance.clearMeasures(c);
        var e = S._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (S._p = e));
        return d.duration;
      }
    },
    Wo = function () {
      if (z.performance && z.performance.now) {
        var a = S._p || {};
        a.PAGEVIEW = z.performance.now();
        S._p = a;
      }
    };
  var Xo = {},
    Yo = function () {
      return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject];
    },
    Zo = !1;
  function bp() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var cp = function (a) {},
    dp = function (a, b) {
      return function () {
        var c = Yo(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              k = 0 > g.indexOf("&tid=" + b);
            k &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            k &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function ip(a, b, c, d) {
    var e = ie[a],
      f = jp(a, b, c, d);
    if (!f) return null;
    var g = qe(e[Jd.Lg], c, []);
    if (g && g.length) {
      var h = g[0];
      f = ip(
        h.index,
        {
          onSuccess: f,
          onFailure: 1 === h.eh ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function jp(a, b, c, d) {
    function e() {
      if (f[Jd.Ai]) h();
      else {
        var x = re(f, c, []);
        var y = x[Jd.Lh];
        if (null != y)
          for (var w = 0; w < y.length; w++)
            if (!Xi(y[w])) {
              h();
              return;
            }
        var A = Oo(c.ub, String(f[Jd.Fb]), Number(f[Jd.Ng]), x[Jd.Bi]),
          B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ra() - E;
            ko(c.id, ie[a], "5", F);
            Po(c.ub, A, "success", F);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ra() - E;
            ko(c.id, ie[a], "6", F);
            Po(c.ub, A, "failure", F);
            h();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        ko(c.id, f, "1");
        var C = function () {
          var F = Ra() - E;
          ko(c.id, f, "7", F);
          Po(c.ub, A, "exception", F);
          B || ((B = !0), h());
        };
        var E = Ra();
        try {
          pe(x, { event: c, index: a, type: 1 });
        } catch (F) {
          C(F);
        }
      }
    }
    var f = ie[a],
      g = b.onSuccess,
      h = b.onFailure,
      k = b.terminate;
    if (c.Ef(f)) return null;
    var n = qe(f[Jd.Og], c, []);
    if (n && n.length) {
      var p = n[0],
        q = ip(p.index, { onSuccess: g, onFailure: h, terminate: k }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.eh ? k : q;
    }
    if (f[Jd.Fg] || f[Jd.Di]) {
      var r = f[Jd.Fg] ? je : c.fk,
        t = g,
        u = h;
      if (!r[a]) {
        e = Ta(e);
        var v = kp(a, r, e);
        g = v.onSuccess;
        h = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function kp(a, b, c) {
    var d = [],
      e = [];
    b[a] = lp(d, e, c);
    return {
      onSuccess: function () {
        b[a] = mp;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = np;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function lp(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function mp(a) {
    a();
  }
  function np(a, b) {
    b();
  }
  var op = !1;
  op = !0;
  var qp = function (a, b, c) {
      if (!pp() && !Hj(a)) {
        var d = c ? "/gtag/js" : "/gtm.js",
          e = "?id=" + encodeURIComponent(a) + "&l=" + Rg.ia,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        var g = Ym();
        g && (e += "&sign=" + Rg.Vd);
        var h = Wm(b, d + e);
        if (!h) {
          var k = Rg.yc + d;
          g &&
            Fb &&
            f &&
            (k = Fb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          h = em("https://", "http://", k + e);
        }
        Gj().container[a] = !0;
        Lb(h);
      }
    },
    rp = function (a, b) {
      if (op) {
        var c;
        if ((c = !pp())) c = !Gj().destination.hasOwnProperty(a);
        if (c) {
          var d =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            Rg.ia +
            "&cx=c";
          Ym() && (d += "&sign=" + Rg.Vd);
          var e = Wm(b, d);
          e || (e = em("https://", "http://", Rg.yc + d));
          Gj().destination[a] = !0;
          Lb(e);
        }
      } else qp(a, b, !0);
    };
  function pp() {
    if (Bj()) {
      return !0;
    }
    return !1;
  }
  var tp = function (a, b) {
      return 1 === arguments.length ? sp("set", a) : sp("set", a, b);
    },
    up = function (a, b) {
      return 1 === arguments.length ? sp("config", a) : sp("config", a, b);
    },
    vp = function (a, b, c) {
      c = c || {};
      c[P.g.Db] = a;
      return sp("event", b, c);
    };
  function sp(a) {
    return arguments;
  }
  var wp = function () {
    this.h = [];
    this.s = [];
  };
  wp.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (g) {}
  };
  wp.prototype.listen = function (a) {
    this.s.push(a);
  };
  wp.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  wp.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var yp = function (a, b, c) {
      xp().enqueue(a, b, c);
    },
    Ap = function () {
      var a = zp;
      xp().listen(a);
    };
  function xp() {
    var a = S.mb;
    a || ((a = new wp()), (S.mb = a));
    return a;
  }
  var Ip = function (a) {
      var b = S.zones;
      return b
        ? b.getIsAllowedFn(Dj(), a)
        : function () {
            return !0;
          };
    },
    Jp = function (a) {
      var b = S.zones;
      return b ? b.isActive(Dj(), a) : !0;
    };
  var Mp = function (a, b) {
    for (var c = [], d = 0; d < ie.length; d++)
      if (a[d]) {
        var e = ie[d];
        var f = Ro(b.ub);
        try {
          var g = ip(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              k = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = ke[p];
            k.call(h, {
              Ah: n,
              sh: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else Kp(d, b), f();
        } catch (t) {
          f();
        }
      }
    c.sort(Lp);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  var Op = function (a, b) {
    if (!Np) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Np.D(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = Ro(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  };
  function Lp(a, b) {
    var c,
      d = b.sh,
      e = a.sh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Ah,
        h = b.Ah;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function Kp(a, b) {
    if (!eo) return;
    var c = function (d) {
      var e = b.Ef(ie[d]) ? "3" : "4",
        f = qe(ie[d][Jd.Lg], b, []);
      f && f.length && c(f[0].index);
      ko(b.id, ie[d], e);
      var g = qe(ie[d][Jd.Og], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Pp = !1,
    Np;
  var Qp = function () {
    Np || (Np = new Ko());
    return Np;
  };
  var Vp = function (a) {
    var b = Ra(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (Pp) return !1;
      Pp = !0;
    }
    var h,
      k = !1;
    if (Jp(c)) h = Ip(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      k = !0;
      h = Ip(Number.MAX_SAFE_INTEGER);
    }
    jo(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Ef: nn(h),
        fk: [],
        nh: function () {
          ig(6);
        },
        Wg: Rp(),
        Xg: Sp(c),
        ub: new No(q, p),
      },
      t = Be(r);
    k && (t = Tp(t));
    var u = Mp(t, r),
      v = !1;
    v = Op(a, r.ub);
    So(r.ub);
    ("gtm.js" !== e && "gtm.sync" !== e) || cp(Ge.J);
    return Up(t, u) || v;
  };
  function Sp(a) {
    return function (b) {
      eo && (rc(b) || so(a, "input", b));
    };
  }
  function Rp() {
    var a = {};
    a.event = oh("event", 1);
    a.ecommerce = oh("ecommerce", 1);
    a.gtm = oh("gtm");
    a.eventModel = oh("eventModel");
    return a;
  }
  function Tp(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] &&
        (Tg[String(ie[c][Jd.Fb])] && (b[c] = !0),
        void 0 !== ie[c][Jd.Ei] && (b[c] = !0));
    return b;
  }
  function Up(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ie[c] && !Ug[String(ie[c][Jd.Fb])]) return !0;
    return !1;
  }
  var Wp = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.eventMetadata = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.isGtmEvent = !1;
    },
    Xp = function (a, b) {
      a.eventModel = b;
      return a;
    },
    Yp = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Zp = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    $p = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    aq = function (a, b) {
      a.dataLayerConfig = b;
      return a;
    },
    bq = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    cq = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    dq = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    eq = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    fq = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    gq = function (a, b) {
      a.onFailure = b;
      return a;
    };
  Wp.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    hq(this, this.globalConfig[a], this.dataLayerConfig[a]) && (ig(71), ig(79));
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  Wp.prototype.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1;
    }
    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if (
        "event" !== e &&
        "gtm" !== e &&
        "tagTypeBlacklist" !== e &&
        !b.hasOwnProperty(e)
      ) {
        ig(71);
        ig(80);
        break;
      }
    }
    return Object.keys(b);
  };
  Wp.prototype.getMergedValues = function (a, b) {
    function c(h) {
      mc(h) &&
        Ka(h, function (k, n) {
          e = !0;
          d[k] = n;
        });
    }
    var d = {},
      e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.globalConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    var f = e,
      g = d;
    d = {};
    e = !1;
    (b && 1 !== b) ||
      (c(this.remoteConfig[a]),
      c(this.dataLayerConfig[a]),
      c(this.containerConfig[a]),
      c(this.targetConfig[a]));
    (b && 2 !== b) || c(this.eventModel[a]);
    if (e !== f || hq(this, d, g)) ig(71), ig(81);
    e = f;
    d = g;
    return e ? d : void 0;
  };
  Wp.prototype.getKeysFromFirstOfAnyScope = function (a) {
    var b = {},
      c = !1,
      d = function (g) {
        for (var h = 0; h < a.length; h++)
          void 0 !== g[a[h]] && ((b[a[h]] = g[a[h]]), (c = !0));
        return c;
      };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig))
      return b;
    d(this.globalConfig);
    var e = b,
      f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    hq(this, b, e) && (ig(71), ig(82));
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b;
  };
  var hq = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = kc(b);
      if (d !== kc(c) || !((mc(b) && mc(c)) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (hq(a, b[e], c[e])) return !0;
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b)
          if (!c.hasOwnProperty(g) || hq(a, b[g], c[g])) return !0;
      }
    } catch (h) {
      ig(72);
    }
    return !1;
  };
  var ir = function () {
      var a = !0;
      (lk(7) && lk(9) && lk(10)) || (a = !1);
      return a;
    },
    jr = function () {
      var a = !0;
      (lk(3) && lk(4)) || (a = !1);
      return a;
    };
  var cs = null,
    ds = !1;
  ds = !0;
  function es(a) {
    return ds && !a ? (cs = cs || new fs()) : (S.gcq = S.gcq || new fs());
  }
  var gs = function (a, b, c) {
      es().register(a, b, c);
    },
    hs = function (a, b, c, d) {
      es().push("event", [b, a], c, d);
    },
    is = function (a, b, c, d) {
      es().insert("event", [b, a], c, d);
    },
    js = function (a, b, c) {
      es().push("config", [a], b, c);
    },
    ks = function (a, b, c, d) {
      es().push("get", [a, b], c, d);
    },
    ls = function (a) {
      return es().getRemoteConfig(a);
    },
    ms = function () {
      var a = P.g.ba;
      return es().getGlobalConfigValue && es().getGlobalConfigValue(a);
    },
    ns = {},
    os = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.s = {};
      this.C = null;
      this.claimed = this.h = !1;
    },
    ps = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.W = c || "";
      this.h = d;
      this.messageContext = e;
    },
    fs = function () {
      this.s = {};
      this.C = {};
      this.h = [];
      this.D = { AW: !1, UA: !1 };
    },
    qs = function (a, b) {
      var c = am(b);
      return (a.s[c.containerId] = a.s[c.containerId] || new os());
    },
    rs = function (a, b, c, d) {
      if (b) {
        var e = am(b);
        if (e && 1 === qs(a, b).status) {
          qs(a, b).status = 2;
          var f = {};
          eo &&
            (f.timeoutId = z.setTimeout(function () {
              ig(38);
              Hn();
            }, 3e3));
          a.push("require", [f], e.containerId, {});
          ns[e.containerId] = Ra();
          if (Bj()) {
          } else 2 === d ? rp(e.containerId, c) : qp(e.containerId, c, !0);
        }
      }
    },
    ss = function (a, b, c, d) {
      if (d.W) {
        var e = qs(a, d.W),
          f = e.C;
        if (f) {
          var g = nc(c),
            h = nc(e.targetConfig[d.W]),
            k = nc(e.containerConfig),
            n = nc(e.remoteConfig),
            p = nc(a.C),
            q = {};
          try {
            q = nc(gh);
          } catch (v) {
            ig(72);
          }
          var r = am(d.W).prefix,
            t = function (v) {
              ro(d.messageContext.eventId, r, v);
              var x = g[P.g.Zb];
              x && J(x);
            },
            u = fq(
              eq(
                gq(
                  dq(
                    cq(
                      aq(
                        $p(
                          bq(
                            Zp(
                              Yp(
                                Xp(
                                  new Wp(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                h
                              ),
                              k
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (t) {
                        var v = t;
                        t = void 0;
                        v("2");
                      }
                    }
                  ),
                  function () {
                    if (t) {
                      var v = t;
                      t = void 0;
                      v("3");
                    }
                  }
                ),
                function (v, x) {
                  a.D[v] = x;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            ro(d.messageContext.eventId, r, "1"), Co(d.type, d.W, u);
            f(d.W, b, d.s, u);
          } catch (v) {
            ro(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  l = fs.prototype;
  l.register = function (a, b, c) {
    var d = qs(this, a);
    if (3 !== d.status) {
      d.C = b;
      d.status = 3;
      c && (nc(d.remoteConfig, c), (d.remoteConfig = c));
      var e = am(a),
        f = ns[e.containerId];
      if (void 0 !== f) {
        var g = S[e.containerId].bootstrap,
          h = e.prefix.toUpperCase();
        S[e.containerId]._spx && (h = h.toLowerCase());
        var k = jh("gtm.uniqueEventId"),
          n = h,
          p = Ra() - g;
        if (eo && !Ln[k]) {
          k !== on && (Dn(), (on = k));
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Sn = Sn ? Sn + "," + q : "&cl=" + q;
        }
        delete ns[e.containerId];
      }
      this.flush();
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this,
      d = function (f) {
        if (am(f)) {
          var g = qs(c, f);
          g.status = 3;
          g.claimed = !0;
        }
      };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush();
  };
  l.push = function (a, b, c, d) {
    null == d ? (d = {}) : "boolean" === typeof d && (d = { deferrable: d });
    if (void 0 !== c) {
      if (!am(c)) return;
      rs(this, c, b[0][P.g.ba] || this.C[P.g.ba], "event" === a ? 2 : 1);
      qs(this, c).h && (d.deferrable = !1);
    }
    this.h.push(new ps(a, Math.floor(Ra() / 1e3), c, b, d));
    d.deferrable || this.flush();
  };
  l.insert = function (a, b, c, d) {
    null == d && (d = {});
    var e = Math.floor(Ra() / 1e3);
    0 < this.h.length
      ? this.h.splice(1, 0, new ps(a, e, c, b, d))
      : this.h.push(new ps(a, e, c, b, d));
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.W || qs(this, f.W).h
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = qs(this, f.W);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            eo && z.clearTimeout(f.h[0].timeoutId);
            break;
          case "set":
            Ka(f.h[0], function (r, t) {
              nc(Za(r, t), b.C);
            });
            break;
          case "config":
            g = qs(this, f.W);
            if (g.claimed) break;
            e.hb = {};
            Ka(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  nc(Za(t, u), r.hb);
                };
              })(e)
            );
            var h = !!e.hb[P.g.Pd];
            delete e.hb[P.g.Pd];
            var k = am(f.W),
              n = k.containerId === k.id;
            h || (n ? (g.containerConfig = {}) : (g.targetConfig[f.W] = {}));
            (g.h && h) || ss(this, P.g.Na, e.hb, f);
            g.h = !0;
            n
              ? nc(e.hb, g.containerConfig)
              : (nc(e.hb, g.targetConfig[f.W]), ig(70));
            d = !0;
            break;
          case "event":
            g = qs(this, f.W);
            if (g.claimed) break;
            e.pd = {};
            Ka(
              f.h[0],
              (function (r) {
                return function (t, u) {
                  nc(Za(t, u), r.pd);
                };
              })(e)
            );
            ss(this, f.h[1], e.pd, f);
            break;
          case "get":
            if (((g = qs(this, f.W)), !g.claimed)) {
              var p = {},
                q = ((p[P.g.ab] = f.h[0]), (p[P.g.nb] = f.h[1]), p);
              ss(this, P.g.Va, q, f);
            }
        }
        this.h.shift();
        ts(this, f);
      }
      e = { hb: e.hb, pd: e.pd };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var ts = function (a, b) {
    if ("require" !== b.type)
      if (b.W)
        for (
          var c = a.getCommandListeners(b.W)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.s)
          if (a.s.hasOwnProperty(e)) {
            var f = a.s[e];
            if (f && f.s)
              for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]();
          }
  };
  fs.prototype.getRemoteConfig = function (a) {
    return qs(this, a).remoteConfig;
  };
  fs.prototype.getCommandListeners = function (a) {
    return qs(this, a).s;
  };
  fs.prototype.getGlobalConfigValue = function (a) {
    return this.C[a];
  };
  var Ke;
  var us = !1;
  var vs = !1;
  vs = !0;
  var ws = {},
    xs = {},
    ys = {},
    zs = function (a, b) {
      var c = xs[b] || [];
      c.push(a);
      xs[b] = c;
    },
    Bs = function () {
      S.addTargetToGroup = function (e) {
        As(e, "default");
      };
      S.addDestinationToContainer = function (e, f) {
        zs(e, f);
      };
      var a = S.pendingDefaultTargets;
      delete S.pendingDefaultTargets;
      if (Array.isArray(a))
        for (var b = 0; b < a.length; ++b) As(a[b], "default");
      var c = S.pendingDestinationIds;
      delete S.pendingDestinationIds;
      if (Array.isArray(c))
        for (var d = 0; d < c.length; ++d) zs(c[d][0], c[d][1]);
    },
    As = function (a, b) {
      b = b.toString().split(",");
      for (var c = 0; c < b.length; c++) {
        var d = ws[b[c]] || [];
        ws[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Cs = function (a, b) {
      b = String(b).split(",");
      for (var c = 0; c < b.length; c++) {
        var d = ys[b[c]] || [];
        ys[b[c]] = d;
        0 > d.indexOf(a) && d.push(a);
      }
    },
    Ds = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { wc: d.wc, sd: d.sd }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-"))
          if (vs) {
            if (((d.wc = am(f)), d.wc))
              if (us) {
                var g = Ej();
                Fa(
                  g,
                  (function (u) {
                    return function (v) {
                      return u.wc.containerId === v;
                    };
                  })(d)
                )
                  ? b.push(f)
                  : c.push(f);
              } else d.wc.containerId === Ge.J || Bj() ? b.push(f) : c.push(f);
          } else b.push(f);
        else {
          var h = ws[f] || [];
          if (vs)
            if (us) {
              d.sd = {};
              h.forEach(
                (function (u) {
                  return function (v) {
                    return (u.sd[v] = !0);
                  };
                })(d)
              );
              for (var k = Dj(), n = 0; n < k.length; n++)
                if (d.sd[k[n]]) {
                  var p = Ej();
                  p && p.length && (b = b.concat(p));
                  break;
                }
              var q = ys[f] || [];
              q.length && (b = b.concat(q));
            } else
              for (var r = 0; r < h.length; r++) {
                var t = am(h[r]);
                ((t && t.containerId === Ge.J) || Bj()) && b.push(t.id);
              }
          else h && h.length && (b = b.concat(h));
        }
      }
      return { zj: b, Cj: c };
    },
    Es = function (a) {
      Ka(ws, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Fs = function (a) {
      Ka(ys, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Gs = !1;
  var Hs = "HA GF G UA AW DC".split(" "),
    Is = !1,
    Js = !1,
    Ks = !1;
  function Ls(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: dh() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  function Ms() {
    if (ds) return !1;
    Is || S.gtagRegistered || ((Is = S.gtagRegistered = !0), Bs());
    return Is;
  }
  var Ns = {
      config: function (a, b) {
        var c = Ls(a, b);
        if (2 > a.length || !m(a[1])) return;
        var d = {};
        if (2 < a.length) {
          if ((void 0 != a[2] && !mc(a[2])) || 3 < a.length) return;
          d = a[2];
        }
        var e = am(a[1]);
        if (!e) return;
        jo(c.eventId, "gtag.config");
        var f = e.id !== e.containerId,
          g = !1,
          h = -1 !== Dj().indexOf(e.containerId);
        h && ((g = Ks), (Ks = !0));
        if (zm[12] && Zg && !f && g) return;
        if (ds) {
          var k = d[P.g.ba] || ms();
          if (Gs && f) {
            if (
              !Fa(Ej(), function (x) {
                return x === e.containerId;
              })
            ) {
              rp(e.containerId, k);
              return;
            }
          } else if (!h && !Bj()) {
            qp(e.containerId, k, !0);
            return;
          }
        }
        var n = Ms() || ds;
        b.noTargetGroup ||
          (Gs && f
            ? (Fs(e.id), Cs(e.id, d[P.g.Jd] || "default"))
            : (Es(e.id), As(e.id, d[P.g.Jd] || "default")));
        delete d[P.g.Jd];
        Js || ig(43);
        if (n) {
          var p = [e.id];
          Gs && !f && (p = Ej());
          for (var q = !1, r = 0; r < p.length; r++) {
            var t = am(p[r]),
              u = nc(b);
            if (t && -1 !== Hs.indexOf(t.prefix)) {
              var v = u.eventMetadata || {};
              v.hasOwnProperty("is_external_event") ||
                (v.is_external_event = !u.fromContainerExecution);
              u.eventMetadata = v;
              delete d[P.g.Zb];
              js(d, t.id, u);
              q = !0;
            }
          }
          if (q) return;
        }
        mh("gtag.targets." + e.id);
        mh("gtag.targets." + e.id, nc(d));
      },
      consent: function (a, b) {
        if (3 === a.length) {
          ig(39);
          var c = Ls(a, b),
            d = a[1];
          "default" === d ? Ui(a[2]) : "update" === d && Wi(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && m(c)) {
          var d;
          if (2 < a.length) {
            if ((!mc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = nc(e)),
            e[P.g.Zb] && (g.eventCallback = e[P.g.Zb]),
            e[P.g.Gd] && (g.eventTimeout = e[P.g.Gd]));
          var h = Ls(a, b),
            k = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = k;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.Db];
          void 0 === r &&
            ((r = jh(P.g.Db, 2)), void 0 === r && (r = "default"));
          if (m(r) || Ea(r)) {
            var t = r.toString().replace(/\s+/g, "").split(","),
              u = Ds(t),
              v = u.zj,
              x = u.Cj;
            if (x.length)
              for (var y = (q && q[P.g.ba]) || ms(), w = 0; w < x.length; w++) {
                var A = am(x[w]);
                A && (Gs ? rp(A.containerId, y) : qp(A.containerId, y, !0));
              }
            p = cm(v);
          } else p = void 0;
          var B = p;
          if (!B) return;
          jo(k, c);
          for (var C = Ms() || ds, E = [], F = 0; C && F < B.length; F++) {
            var D = B[F],
              O = nc(b);
            if (-1 !== Hs.indexOf(D.prefix)) {
              var N = nc(d),
                R = O.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !O.fromContainerExecution);
              O.eventMetadata = R;
              delete N[P.g.Zb];
              hs(c, N, D.id, O);
            }
            E.push(D.id);
          }
          g.eventModel = g.eventModel || {};
          0 < B.length
            ? (g.eventModel[P.g.Db] = E.join())
            : delete g.eventModel[P.g.Db];
          Js || ig(43);
          return b.noGtmEvent ? void 0 : g;
        }
      },
      get: function (a, b) {
        ig(53);
        if (4 !== a.length || !m(a[1]) || !m(a[2]) || !Ca(a[3])) return;
        var c = am(a[1]),
          d = String(a[2]),
          e = a[3];
        if (!c) return;
        Js || ig(43);
        if (ds) {
          var f = ms();
          if (Gs) {
            if (
              !Fa(Ej(), function (h) {
                return c.containerId === h;
              })
            ) {
              rp(c.containerId, f);
              return;
            }
          } else if (c.containerId !== Ge.J && !Bj()) {
            qp(c.containerId, f, !0);
            return;
          }
        } else if (!Ms()) return;
        if (-1 === Hs.indexOf(c.prefix)) return;
        Ls(a, b);
        var g = {};
        Qi(nc(((g[P.g.ab] = d), (g[P.g.nb] = e), g)));
        ks(
          d,
          function (h) {
            J(function () {
              return e(h);
            });
          },
          c.id,
          b
        );
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Js = !0;
          Ms();
          var c = Ls(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && m(a[1]) && Ca(a[2])) {
          var b = a[1],
            c = a[2],
            d = Ke.s;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((ig(74), "all" === a[1])) {
            ig(75);
            var e = !1;
            try {
              e = a[2](Ge.J, "unknown", {});
            } catch (f) {}
            e || ig(76);
          }
        } else {
          ig(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && mc(a[1])
          ? (c = nc(a[1]))
          : 3 == a.length &&
            m(a[1]) &&
            ((c = {}),
            mc(a[2]) || Ea(a[2]) ? (c[a[1]] = nc(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Ls(a, b),
            e = d.eventId,
            f = d.priorityId;
          nc(c);
          if (Ms() || ds) {
            var g = nc(c);
            es().push("set", [g], void 0, b);
          }
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Os = { policy: !0 };
  var Ps = function (a) {
      var b = z[Rg.ia].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Qs = function (a) {
      var b = z[Rg.ia],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Rs = !1,
    Ss = [];
  function Ts() {
    if (!Rs) {
      Rs = !0;
      for (var a = 0; a < Ss.length; a++) J(Ss[a]);
    }
  }
  var Us = function (a) {
    Rs ? J(a) : Ss.push(a);
  };
  var kt = function (a) {
    if (jt(a)) return a;
    this.h = a;
  };
  kt.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var jt = function (a) {
    return !a || "object" !== kc(a) || mc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  kt.prototype.getUntrustedMessageValue = kt.prototype.getUntrustedMessageValue;
  var lt = 0,
    mt = {},
    nt = [],
    ot = [],
    pt = !1,
    qt = !1;
  function rt(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var st = function (a) {
      return z[Rg.ia].push(a);
    },
    tt = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return st(a);
    },
    ut = function (a, b) {
      var c = S[Rg.ia],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = z.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (z.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function vt(a, b) {
    var c = (!!zm[10] && a._clear) || b.overwriteModelFields;
    Ka(a, function (e, f) {
      "_clear" !== e && (c && mh(e), mh(e, f));
    });
    $g || ($g = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = dh()), (a["gtm.uniqueEventId"] = d), mh("gtm.uniqueEventId", d));
    return Vp(a);
  }
  function wt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (La(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function xt() {
    var a;
    if (ot.length) a = ot.shift();
    else if (nt.length) a = nt.shift();
    else return;
    var b;
    var c = a;
    if (pt || !wt(c.message)) b = c;
    else {
      pt = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = dh());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      nt.unshift(h, c);
      b = f;
    }
    return b;
  }
  function yt() {
    for (var a = !1, b; !qt && (b = xt()); ) {
      qt = !0;
      delete gh.eventModel;
      ih();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) qt = !1;
      else {
        e.fromContainerExecution && nh();
        try {
          if (Ca(d))
            try {
              d.call(kh);
            } catch (v) {}
          else if (Ea(d)) {
            var f = d;
            if (m(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                k = f.slice(1),
                n = jh(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, k);
                } catch (v) {}
            }
          } else {
            var p = void 0;
            if (La(d))
              a: {
                if (d.length && m(d[0])) {
                  var q = Ns[d[0]];
                  if (q && (!e.fromContainerExecution || !Os[d[0]])) {
                    p = q(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
            else p = d;
            p && (a = vt(p, e) || a);
          }
        } finally {
          e.fromContainerExecution && ih(!0);
          var r = d["gtm.uniqueEventId"];
          if ("number" === typeof r) {
            for (var t = mt[String(r)] || [], u = 0; u < t.length; u++)
              ot.push(zt(t[u]));
            t.length && ot.sort(rt);
            delete mt[String(r)];
            lt = r;
          }
          qt = !1;
        }
      }
    }
    return !a;
  }
  function At() {
    var b = yt();
    try {
      Ps(Ge.J);
    } catch (c) {}
    return b;
  }
  function zp(a) {
    if (lt < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      mt[b] = mt[b] || [];
      mt[b].push(a);
    } else
      ot.push(zt(a)),
        ot.sort(rt),
        J(function () {
          qt || yt();
        });
  }
  function zt(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Ct = function () {
      function a(f) {
        var g = {};
        if (jt(f)) {
          var h = f;
          f = jt(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Gb(Rg.ia, []),
        c = (S[Rg.ia] = S[Rg.ia] || {});
      !0 === c.pruned && ig(83);
      mt = xp().get();
      Ap();
      Jo(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Us(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        function f(r) {
          if (zm[18]) {
            var t = r["gtm.uniqueEventId"],
              u = [r];
            "number" === typeof t &&
              u.push.apply(
                u,
                ((xp().prune && xp().prune(t)) || []).map(function (A) {
                  return A.message;
                })
              );
            for (var v = 0; v < u.length; v++) {
              var x = u[v];
              if (La(x) && "set" === x[0]) {
                var y = void 0;
                if (2 == x.length && mc(x[1])) y = x[1];
                else if (3 == x.length && m(x[1])) {
                  var w = {};
                  y = ((w[x[1]] = x[2]), w);
                } else continue;
                c.pageConfig = c.pageConfig || {};
                Ka(y, function (A, B) {
                  nc(Za(A, B), c.pageConfig);
                });
              }
            }
          }
        }
        var g;
        if (0 < S.SANDBOXED_JS_SEMAPHORE) {
          g = [];
          for (var h = 0; h < arguments.length; h++)
            g[h] = new kt(arguments[h]);
        } else g = [].slice.call(arguments, 0);
        var k = g.map(function (r) {
          return a(r);
        });
        nt.push.apply(nt, k);
        var n = d.apply(b, g),
          p = 300;
        zm[16] && (p = Math.max(100, Number("1000") || p));
        if (this.length > p)
          for (ig(4), c.pruned = !0; this.length > p; ) f(this.shift());
        var q = "boolean" !== typeof n || n;
        return yt() && q;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      zm[18] &&
        c.pageConfig &&
        e.unshift({ message: tp(nc(c.pageConfig)), messageContext: {} });
      nt.push.apply(nt, e);
      if (Bt()) {
        J(At);
      }
    },
    Bt = function () {
      var a = !0;
      return a;
    };
  function bu(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ra();
    return b < c + 3e5 && b > c - 9e5;
  }
  var cu = {};
  cu.Qd = new String("undefined");
  var fu = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Xb(a, "className"),
        "gtm.elementId": a["for"] || Sb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Xb(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Xb(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    gu = function (a) {
      S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
      var b = S.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    hu = function (a, b, c) {
      gu(a)[b] = c;
    },
    iu = function (a, b, c, d) {
      var e = gu(a),
        f = Sa(e, b, d);
      e[b] = c(f);
    },
    ju = function (a, b, c) {
      var d = gu(a);
      return Sa(d, b, c);
    },
    ku = function (a) {
      return "string" === typeof a ? a : String(dh());
    };
  var qu = !!z.MutationObserver,
    ru = void 0,
    su = function (a) {
      if (!ru) {
        var b = function () {
          var c = I.body;
          if (c)
            if (qu)
              new MutationObserver(function () {
                for (var e = 0; e < ru.length; e++) J(ru[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              Qb(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  J(function () {
                    d = !1;
                    for (var e = 0; e < ru.length; e++) J(ru[e]);
                  }));
              });
            }
        };
        ru = [];
        I.body ? b() : J(b);
      }
      ru.push(a);
    };
  var Du = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((Ra() - e) * g.playbackRate) / 1e3 : 0;
      e = Ra();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, h, k) {
        var n = a(),
          p = n.vf,
          q =
            void 0 !== k
              ? Math.round(k)
              : void 0 !== h
              ? Math.round(n.vf * h)
              : Math.round(n.bh),
          r =
            void 0 !== h
              ? Math.round(100 * h)
              : 0 >= p
              ? 0
              : Math.round((q / p) * 100),
          t = I.hidden ? !1 : 0.5 <= vh(c);
        d();
        var u = void 0;
        void 0 !== b && (u = [b]);
        var v = fu(c, "gtm.video", u);
        v["gtm.videoProvider"] = "youtube";
        v["gtm.videoStatus"] = g;
        v["gtm.videoUrl"] = n.url;
        v["gtm.videoTitle"] = n.title;
        v["gtm.videoDuration"] = Math.round(p);
        v["gtm.videoCurrentTime"] = Math.round(q);
        v["gtm.videoElapsedTime"] = Math.round(f);
        v["gtm.videoPercent"] = r;
        v["gtm.videoVisible"] = t;
        return v;
      },
      xh: function () {
        e = Ra();
      },
      ic: function () {
        d();
      },
    };
  };
  var Eu = z.clearTimeout,
    Fu = z.setTimeout,
    U = function (a, b, c, d) {
      if (Bj()) {
        b && J(b);
      } else return Lb(a, b, c, d);
    },
    Gu = function () {
      return new Date();
    },
    Hu = function () {
      return z.location.href;
    },
    Iu = function (a) {
      return Rh(Th(a), "fragment");
    },
    Ju = function (a) {
      return Sh(Th(a));
    },
    Ku = function (a, b) {
      return jh(a, b || 2);
    },
    Lu = function (a, b, c) {
      return b ? tt(a, b, c) : st(a);
    },
    Mu = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || (c && !z[a])) && (z[a] = b);
      return z[a];
    },
    Nu = function (a, b, c) {
      return ij(a, b, void 0 === c ? !0 : !!c);
    },
    Ou = function (a, b, c) {
      return 0 === rj(a, b, c);
    },
    Pu = function (a, b) {
      if (Bj()) {
        b && J(b);
      } else Ob(a, b);
    },
    Qu = function (a) {
      return !!ju(a, "init", !1);
    },
    Ru = function (a) {
      hu(a, "init", !0);
    },
    Su = function (a, b, c) {
      eo && (rc(a) || so(c, b, a));
    };
  var pv = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function qv(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var rv = new Ha();
  function sv(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = rv.get(e);
      f || ((f = new RegExp(b, d)), rv.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tv(a, b) {
    function c(g) {
      var h = Th(g),
        k = Rh(h, "protocol"),
        n = Rh(h, "host", !0),
        p = Rh(h, "port"),
        q = Rh(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === k ||
        ("http" === k && "80" === p) ||
        ("https" === k && "443" === p)
      )
        (k = "web"), (p = "default");
      return [k, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function uv(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function vv(a, b) {
    return String(a) === String(b);
  }
  function wv(a, b) {
    return Number(a) >= Number(b);
  }
  function xv(a, b) {
    return Number(a) <= Number(b);
  }
  function yv(a, b) {
    return Number(a) > Number(b);
  }
  function zv(a, b) {
    return Number(a) < Number(b);
  }
  function Av(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  function Bv(a) {
    return Cv(a) ? 1 : 0;
  }
  function Cv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = nc(a, {});
        nc({ arg1: c[d], any_of: void 0 }, e);
        if (Bv(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return uv(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < pv.length; g++) {
                var h = pv[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (k) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qv(b, c);
      case "_eq":
        return vv(b, c);
      case "_ge":
        return wv(b, c);
      case "_gt":
        return yv(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return xv(b, c);
      case "_lt":
        return zv(b, c);
      case "_re":
        return sv(b, c, a.ignore_case);
      case "_sw":
        return Av(b, c);
      case "_um":
        return tv(b, c);
    }
    return !1;
  }
  function Dv(a, b) {
    var c = this;
  }
  Dv.N = "addConsentListener";
  var Ev;
  var Fv = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Ev)
        try {
          a[b]();
        } catch (c) {
          ig(77);
        }
      else a[b]();
  };
  function Gv(a, b, c) {
    var d = this,
      e;
    L(
      H(this),
      ["eventName:!string", "callback:!Fn", "triggerId:?string"],
      arguments
    ),
      Fv([
        function () {
          return M(d, "listen_data_layer", a);
        },
      ]),
      (e = Qp().s(a, pc(b), c));
    return e;
  }
  Gv.M = "internal.addDataLayerEventListener";
  function Hv(a, b, c) {}
  Hv.N = "addDocumentEventListener";
  function Iv(a, b, c, d) {}
  Iv.N = "addElementEventListener";
  function Jv(a) {}
  Jv.N = "addEventCallback";
  function Nv(a) {}
  Nv.M = "internal.addFormAbandonmentListener";
  var Ov = {},
    Pv = [],
    Qv = {},
    Rv = 0,
    Sv = 0;
  function Zv(a, b) {}
  Zv.M = "internal.addFormInteractionListener";
  function fw(a, b) {}
  fw.M = "internal.addFormSubmitListener";
  function kw(a) {}
  kw.M = "internal.addGaSendListener";
  var lw = {},
    mw = [];
  var tw = function (a, b) {};
  tw.M = "internal.addHistoryChangeListener";
  function uw(a, b, c) {}
  uw.N = "addWindowEventListener";
  function vw(a, b) {
    return !0;
  }
  vw.N = "aliasInWindow";
  function ww(a, b, c) {}
  ww.M = "internal.appendRemoteConfigParameter";
  function xw() {
    var a = 2;
    return a;
  }
  function yw(a, b) {
    var c;
    return c;
  }
  yw.N = "callInWindow";
  function zw(a) {}
  zw.N = "callLater";
  function Aw(a) {}
  Aw.M = "callOnDomReady";
  function Bw(a) {}
  Bw.M = "callOnWindowLoad";
  function Cw(a) {
    var b;
    return b;
  }
  Cw.M = "internal.computeGtmParameter";
  function Dw(a, b) {
    var c;
    var d = oc(c, this.h, xw());
    void 0 === d && void 0 !== c && ig(45);
    return d;
  }
  Dw.N = "copyFromDataLayer";
  function Ew(a) {
    var b;
    return b;
  }
  Ew.N = "copyFromWindow";
  function Fw(a, b) {
    var c;
    return c;
  }
  Fw.M = "internal.copyPreHit";
  function Gw(a, b) {
    var c = null,
      d = xw();
    return oc(c, this.h, d);
  }
  Gw.N = "createArgumentsQueue";
  function Hw(a) {
    var b;
    return oc(b, this.h, xw());
  }
  Hw.N = "createQueue";
  var Iw = {},
    Jw = [],
    Kw = {},
    Lw = 0,
    Mw = 0;
  function Sw(a, b) {
    var c = this;
    return b;
  }
  Sw.M = "internal.enableAutoEventOnFormInteraction";
  function Xw(a, b) {
    var c = this;
    return b;
  }
  Xw.M = "internal.enableAutoEventOnFormSubmit";
  function bx() {
    var a = this;
  }
  bx.M = "internal.enableAutoEventOnGaSend";
  var cx = {},
    dx = [];
  var fx = function (a, b) {
      var c = "" + b;
      if (cx[c]) cx[c].push(a);
      else {
        var d = [a];
        cx[c] = d;
        var e = ex(),
          f = -1;
        dx.push(function (g) {
          0 <= f && z.clearTimeout(f);
          b
            ? (f = z.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    ex = function () {
      var a = z.location.href,
        b = {
          source: null,
          state: z.history.state || null,
          url: Sh(Th(a)),
          P: Rh(Th(a), "fragment"),
        };
      return function (c, d) {
        var e = b,
          f = {};
        f[e.source] = !0;
        f[c.source] = !0;
        if (!f.popstate || !f.hashchange || e.P != c.P) {
          var g = {},
            h =
              ((g.event = "gtm.historyChange-v2"),
              (g["gtm.historyChangeSource"] = c.source),
              (g["gtm.oldUrlFragment"] = b.P),
              (g["gtm.newUrlFragment"] = c.P),
              (g["gtm.oldHistoryState"] = b.state),
              (g["gtm.newHistoryState"] = c.state),
              (g["gtm.oldUrl"] = b.url),
              (g["gtm.newUrl"] = c.url),
              (g["gtm.triggers"] = d.join(",")),
              g);
          b = c;
          st(h);
        }
      };
    },
    gx = function (a, b) {
      var c = z.history,
        d = c[a];
      if (Ca(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var h = z.location.href;
            b({
              source: a,
              state: e,
              url: Sh(Th(h)),
              P: Rh(Th(h), "fragment"),
            });
          };
        } catch (e) {}
    },
    ix = function (a) {
      z.addEventListener("popstate", function (b) {
        var c = hx(b);
        a({
          source: "popstate",
          state: b.state,
          url: Sh(Th(c)),
          P: Rh(Th(c), "fragment"),
        });
      });
    },
    jx = function (a) {
      z.addEventListener("hashchange", function (b) {
        var c = hx(b);
        a({
          source: "hashchange",
          state: null,
          url: Sh(Th(c)),
          P: Rh(Th(c), "fragment"),
        });
      });
    },
    hx = function (a) {
      return a.target && a.target.location && a.target.location.href
        ? a.target.location.href
        : z.location.href;
    };
  function kx(a, b) {
    var c = this;
    L(H(this), ["options:?DustMap", "triggerId:?*"], arguments);
    Fv([
      function () {
        return M(c, "process_dom_events", "window", "popstate");
      },
      function () {
        return M(c, "process_dom_events", "window", "pushstate");
      },
    ]);
    b = ku(b);
    var d = Number(a && a.get("interval"));
    (0 < d && isFinite(d)) || (d = 0);
    if (ju("ehl", "init", !1)) {
      var e = ju("ehl", "reg");
      e && e(b, d);
    } else {
      var f = function (g) {
        for (var h = 0; h < dx.length; h++) dx[h](g);
      };
      jx(f);
      ix(f);
      gx("pushState", f);
      gx("replaceState", f);
      fx(b, d);
      hu("ehl", "reg", fx);
      hu("ehl", "init", !0);
    }
    return b;
  }
  kx.M = "internal.enableAutoEventOnHistoryChange";
  var lx = function (a, b) {
      if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Xb(b, "href"),
        d = c.indexOf("#"),
        e = Xb(b, "target");
      if ((e && "_self" !== e && "_parent" !== e && "_top" !== e) || 0 === d)
        return !1;
      if (0 < d) {
        var f = Sh(Th(c)),
          g = Sh(Th(z.location.href));
        return f !== g;
      }
      return !0;
    },
    mx = function (a, b) {
      for (
        var c = Rh(
            Th(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Xb(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    nx = function () {
      var a = 0,
        b = function (c) {
          var d = c.target;
          if (
            d &&
            3 !== c.which &&
            !(c.Ff || (c.timeStamp && c.timeStamp === a))
          ) {
            a = c.timeStamp;
            d = Vb(d, ["a", "area"], 100);
            if (!d) return c.returnValue;
            var e = c.defaultPrevented || !1 === c.returnValue,
              f = ju("aelc", e ? "nv.mwt" : "mwt", 0),
              g;
            g = e ? ju("aelc", "nv.ids", []) : ju("aelc", "ids", []);
            for (var h = [], k = 0; k < g.length; k++) {
              var n = g[k],
                p = ju("aelc", "aff.map", {})[n];
              (p && !mx(p, d)) || h.push(n);
            }
            if (h.length) {
              var q = lx(c, d),
                r = fu(d, "gtm.linkClick", h);
              r["gtm.elementText"] = Tb(d);
              r["gtm.willOpenInNewWindow"] = !q;
              if (q && !e && f && d.href) {
                var t = !!Fa(
                  String(Xb(d, "rel") || "").split(" "),
                  function (y) {
                    return "noreferrer" === y.toLowerCase();
                  }
                );
                t && ig(36);
                var u = z[(Xb(d, "target") || "_self").substring(1)],
                  v = !0,
                  x = ut(function () {
                    var y;
                    if ((y = v && u)) {
                      var w;
                      a: if (t) {
                        var A;
                        try {
                          A = new MouseEvent(c.type, { bubbles: !0 });
                        } catch (B) {
                          if (!I.createEvent) {
                            w = !1;
                            break a;
                          }
                          A = I.createEvent("MouseEvents");
                          A.initEvent(c.type, !0, !0);
                        }
                        A.Ff = !0;
                        c.target.dispatchEvent(A);
                        w = !0;
                      } else w = !1;
                      y = !w;
                    }
                    y && (u.location.href = Xb(d, "href"));
                  }, f);
                if (tt(r, x, f)) v = !1;
                else
                  return (
                    c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                  );
              } else tt(r, function () {}, f || 2e3);
              return !0;
            }
          }
        };
      Qb(I, "click", b, !1);
      Qb(I, "auxclick", b, !1);
    };
  function ox(a, b) {
    var c = this;
    L(H(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
    Fv([
      function () {
        return M(c, "process_dom_events", "document", "click");
      },
      function () {
        return M(c, "process_dom_events", "document", "auxclick");
      },
    ]);
    var d = pc(a),
      e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = ku(b);
    if (e) {
      var h = Number(d.waitForTagsTimeout);
      (0 < h && isFinite(h)) || (h = 2e3);
      var k = function (p) {
        return Math.max(h, p);
      };
      iu("aelc", "mwt", k, 0);
      f || iu("aelc", "nv.mwt", k, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    iu("aelc", "ids", n, []);
    f || iu("aelc", "nv.ids", n, []);
    g &&
      iu(
        "aelc",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    ju("aelc", "init", !1) || (nx(), hu("aelc", "init", !0));
    return b;
  }
  ox.M = "internal.enableAutoEventOnLinkClick";
  var px, qx;
  var rx = function (a) {
      return ju("sdl", a, {});
    },
    sx = function (a, b, c) {
      b &&
        (Array.isArray(a) || (a = [a]),
        iu(
          "sdl",
          c,
          function (d) {
            for (var e = 0; e < a.length; e++) {
              var f = String(a[e]);
              d.hasOwnProperty(f) || (d[f] = []);
              d[f].push(b);
            }
            return d;
          },
          {}
        ));
    },
    vx = function () {
      var a = 250,
        b = !1;
      I.scrollingElement &&
        I.documentElement &&
        z.addEventListener &&
        ((a = 50), (b = !0));
      var c = 0,
        d = !1,
        e = function () {
          d
            ? (c = z.setTimeout(e, a))
            : ((c = 0),
              tx(),
              ju("sdl", "init", !1) &&
                !ux() &&
                (Rb(z, "scroll", f),
                Rb(z, "resize", f),
                hu("sdl", "init", !1)));
          d = !1;
        },
        f = function () {
          b && px();
          c ? (d = !0) : ((c = z.setTimeout(e, a)), hu("sdl", "pending", !0));
        };
      return f;
    },
    tx = function () {
      var a = px(),
        b = a.tf,
        c = a.uf,
        d = (b / qx.scrollWidth) * 100,
        e = (c / qx.scrollHeight) * 100;
      wx(b, "horiz.pix", "PIXELS", "horizontal");
      wx(d, "horiz.pct", "PERCENT", "horizontal");
      wx(c, "vert.pix", "PIXELS", "vertical");
      wx(e, "vert.pct", "PERCENT", "vertical");
      hu("sdl", "pending", !1);
    },
    wx = function (a, b, c, d) {
      var e = rx(b),
        f = {},
        g;
      for (g in e) {
        f.Rb = g;
        if (e.hasOwnProperty(f.Rb)) {
          var h = Number(f.Rb);
          if (!(a < h)) {
            var k = {};
            st(
              ((k.event = "gtm.scrollDepth"),
              (k["gtm.scrollThreshold"] = h),
              (k["gtm.scrollUnits"] = c.toLowerCase()),
              (k["gtm.scrollDirection"] = d),
              (k["gtm.triggers"] = e[f.Rb].join(",")),
              k)
            );
            iu(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.Rb];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
        f = { Rb: f.Rb };
      }
    },
    yx = function () {
      iu(
        "sdl",
        "scr",
        function (a) {
          a || (a = I.scrollingElement || (I.body && I.body.parentNode));
          return (qx = a);
        },
        !1
      );
      iu(
        "sdl",
        "depth",
        function (a) {
          a || (a = xx());
          return (px = a);
        },
        !1
      );
    },
    xx = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = uh(),
          d = c.height;
        a = Math.max(qx.scrollLeft + c.width, a);
        b = Math.max(qx.scrollTop + d, b);
        return { tf: a, uf: b };
      };
    },
    ux = function () {
      return !!(
        Object.keys(rx("horiz.pix")).length ||
        Object.keys(rx("horiz.pct")).length ||
        Object.keys(rx("vert.pix")).length ||
        Object.keys(rx("vert.pct")).length
      );
    };
  function zx(a, b) {
    var c = this;
    L(H(this), ["options:!DustMap", "triggerId:?*"], arguments);
    Fv([
      function () {
        return M(c, "process_dom_events", "window", "resize");
      },
      function () {
        return M(c, "process_dom_events", "window", "scroll");
      },
    ]);
    yx();
    if (!qx) return;
    b = ku(b);
    var d = pc(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        sx(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        sx(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        sx(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        sx(d.verticalThresholds, b, "vert.pct");
    }
    ju("sdl", "init", !1)
      ? ju("sdl", "pending", !1) ||
        J(function () {
          return tx();
        })
      : (hu("sdl", "init", !0),
        hu("sdl", "pending", !0),
        J(function () {
          tx();
          if (ux()) {
            var e = vx();
            Qb(z, "scroll", e);
            Qb(z, "resize", e);
          } else hu("sdl", "init", !1);
        }));
    return b;
  }
  zx.M = "internal.enableAutoEventOnScroll";
  var Cb = ca(["data-gtm-yt-inspected-"]),
    Ax = ["www.youtube.com", "www.youtube-nocookie.com"],
    Bx,
    Cx = !1;
  var Dx = function (a, b, c) {
      var d = a.map(function (g) {
        return { ra: g, jd: g, ed: void 0 };
      });
      if (!b.length) return d;
      var e = b.map(function (g) {
        return { ra: g * c, jd: void 0, ed: g };
      });
      if (!d.length) return e;
      var f = d.concat(e);
      f.sort(function (g, h) {
        return g.ra - h.ra;
      });
      return f;
    },
    Ex = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    Fx = function (a) {
      a = void 0 === a ? [] : a;
      for (var b = [], c = 0; c < a.length; c++)
        100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
      b.sort(function (d, e) {
        return d - e;
      });
      return b;
    },
    Gx = function (a, b) {
      var c, d;
      function e() {
        t = Du(
          function () {
            return {
              url: x,
              title: y,
              vf: v,
              bh: a.getCurrentTime(),
              playbackRate: w,
            };
          },
          b.Ya,
          a.getIframe()
        );
        v = 0;
        y = x = "";
        w = 1;
        return f;
      }
      function f(E) {
        switch (E) {
          case 1:
            v = Math.round(a.getDuration());
            x = a.getVideoUrl();
            if (a.getVideoData) {
              var F = a.getVideoData();
              y = F ? F.title : "";
            }
            w = a.getPlaybackRate();
            b.nf ? st(t.createEvent("start")) : t.ic();
            u = Dx(b.Qf, b.Pf, a.getDuration());
            return g(E);
          default:
            return f;
        }
      }
      function g() {
        A = a.getCurrentTime();
        B = Qa().getTime();
        t.xh();
        r();
        return h;
      }
      function h(E) {
        var F;
        switch (E) {
          case 0:
            return n(E);
          case 2:
            F = "pause";
          case 3:
            var D = a.getCurrentTime() - A;
            F =
              1 < Math.abs(((Qa().getTime() - B) / 1e3) * w - D)
                ? "seek"
                : F || "buffering";
            a.getCurrentTime() && (b.lf ? st(t.createEvent(F)) : t.ic());
            q();
            return k;
          case -1:
            return e(E);
          default:
            return h;
        }
      }
      function k(E) {
        switch (E) {
          case 0:
            return n(E);
          case 1:
            return g(E);
          case -1:
            return e(E);
          default:
            return k;
        }
      }
      function n() {
        for (; d; ) {
          var E = c;
          z.clearTimeout(d);
          E();
        }
        b.kf && st(t.createEvent("complete", 1));
        return e(-1);
      }
      function p() {}
      function q() {
        d && (z.clearTimeout(d), (d = 0), (c = p));
      }
      function r() {
        if (u.length && 0 !== w) {
          var E = -1,
            F;
          do {
            F = u[0];
            if (F.ra > a.getDuration()) return;
            E = (F.ra - a.getCurrentTime()) / w;
            if (0 > E && (u.shift(), 0 === u.length)) return;
          } while (0 > E);
          c = function () {
            d = 0;
            c = p;
            0 < u.length &&
              u[0].ra === F.ra &&
              (u.shift(), st(t.createEvent("progress", F.ed, F.jd)));
            r();
          };
          d = z.setTimeout(c, 1e3 * E);
        }
      }
      var t,
        u = [],
        v,
        x,
        y,
        w,
        A,
        B,
        C = e(-1);
      d = 0;
      c = p;
      return {
        onStateChange: function (E) {
          C = C(E);
        },
        onPlaybackRateChange: function (E) {
          A = a.getCurrentTime();
          B = Qa().getTime();
          t.ic();
          w = E;
          q();
          r();
        },
      };
    },
    Ix = function (a) {
      J(function () {
        function b() {
          for (
            var d = c.getElementsByTagName("iframe"), e = d.length, f = 0;
            f < e;
            f++
          )
            Hx(d[f], a);
        }
        var c = I;
        b();
        su(b);
      });
    },
    Hx = function (a, b) {
      if (
        !a.getAttribute("data-gtm-yt-inspected-" + b.Ya) &&
        (Bb(a, "data-gtm-yt-inspected-" + b.Ya), Jx(a, b.Xc))
      ) {
        a.id || (a.id = Kx());
        var c = z.YT,
          d = c.get(a.id);
        d || (d = new c.Player(a.id));
        var e = Gx(d, b),
          f = {},
          g;
        for (g in e)
          (f.uc = g),
            e.hasOwnProperty(f.uc) &&
              d.addEventListener(
                f.uc,
                (function (h) {
                  return function (k) {
                    return e[h.uc](k.data);
                  };
                })(f)
              ),
            (f = { uc: f.uc });
      }
    },
    Jx = function (a, b) {
      var c = a.getAttribute("src");
      if (Lx(c, "embed/")) {
        if (0 < c.indexOf("enablejsapi=1")) return !0;
        if (b) {
          var d;
          var e = -1 !== c.indexOf("?") ? "&" : "?";
          -1 < c.indexOf("origin=")
            ? (d = c + e + "enablejsapi=1")
            : (Bx ||
                ((Bx = I.location.protocol + "//" + I.location.hostname),
                I.location.port && (Bx += ":" + I.location.port)),
              (d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(Bx)));
          var f;
          f = qb(d);
          a.src = pb(f).toString();
          return !0;
        }
      }
      return !1;
    },
    Lx = function (a, b) {
      if (!a) return !1;
      for (var c = 0; c < Ax.length; c++)
        if (0 <= a.indexOf("//" + Ax[c] + "/" + b)) return !0;
      return !1;
    },
    Kx = function () {
      var a = Math.round(1e9 * Math.random()) + "";
      return I.getElementById(a) ? Kx() : a;
    };
  function Mx(a, b) {
    var c = this;
    L(H(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
    Fv([
      function () {
        return M(c, "process_dom_events", "element", "onStateChange");
      },
      function () {
        return M(c, "process_dom_events", "element", "onPlaybackRateChange");
      },
    ]);
    b = ku(b);
    var d = !!a.get("captureStart"),
      e = !!a.get("captureComplete"),
      f = !!a.get("capturePause"),
      g = Fx(pc(a.get("progressThresholdsPercent"))),
      h = Ex(pc(a.get("progressThresholdsTimeInSeconds"))),
      k = !!a.get("fixMissingApi");
    if (!(d || e || f || g.length || h.length)) return;
    var n = { nf: d, kf: e, lf: f, Pf: g, Qf: h, Xc: k, Ya: b },
      p = z.YT,
      q = function () {
        Ix(n);
      };
    if (p) return p.ready && p.ready(q), b;
    var r = z.onYouTubeIframeAPIReady;
    z.onYouTubeIframeAPIReady = function () {
      r && r();
      q();
    };
    J(function () {
      for (
        var t = I.getElementsByTagName("script"), u = t.length, v = 0;
        v < u;
        v++
      ) {
        var x = t[v].getAttribute("src");
        if (Lx(x, "iframe_api") || Lx(x, "player_api")) return b;
      }
      for (
        var y = I.getElementsByTagName("iframe"), w = y.length, A = 0;
        A < w;
        A++
      )
        if (!Cx && Jx(y[A], n.Xc))
          return Lb("https://www.youtube.com/iframe_api"), (Cx = !0), b;
    });
    return b;
  }
  Mx.M = "internal.enableAutoEventOnYouTubeActivity";
  function Nx(a, b) {
    var c = !1;
    return c;
  }
  Nx.M = "internal.evaluateBooleanExpression";
  function Sx(a) {
    return !1;
  }
  Sx.M = "internal.evaluateFilteringRules";
  var Tx;
  function Ux(a) {
    var b = !1;
    return b;
  }
  Ux.M = "internal.evaluateMatchingRules";
  var Wx = function (a, b, c) {
      if (c)
        switch (c.type) {
          case "event_name":
            return a;
          case "const":
            return c.const_value;
          case "event_param":
            var d = c.event_param.param_name;
            return b[d];
        }
    },
    Zx = function (a, b, c, d) {
      if (c && !Xx(a, b, c)) return !1;
      if (!d || 0 === d.length) return !0;
      for (var e = 0; e < d.length; e++)
        if (Yx(a, b, d[e].predicates || [])) return !0;
      return !1;
    },
    Yx = function (a, b, c) {
      for (var d = 0; d < c.length; d++) if (!Xx(a, b, c[d])) return !1;
      return !0;
    },
    Xx = function (a, b, c) {
      var d = c.values || [],
        e = Wx(a, b, d[0]),
        f = Wx(a, b, d[1]),
        g = c.type;
      if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
        m(e) && (e = e.toLowerCase()), m(f) && (f = f.toLowerCase());
      var h = !1;
      switch (g) {
        case "eq":
        case "eqi":
          h = vv(e, f);
          break;
        case "sw":
        case "swi":
          h = Av(e, f);
          break;
        case "ew":
        case "ewi":
          h = qv(e, f);
          break;
        case "cn":
        case "cni":
          h = uv(e, f);
          break;
        case "lt":
          h = zv(e, f);
          break;
        case "le":
          h = xv(e, f);
          break;
        case "gt":
          h = yv(e, f);
          break;
        case "ge":
          h = wv(e, f);
          break;
        case "re":
        case "rei":
          h = sv(e, f, "rei" === g);
      }
      return !!c.negate !== h;
    };
  function $x(a, b) {
    var c = !1;
    return c;
  }
  $x.M = "internal.evaluatePredicates";
  var ay = function (a) {
    var b;
    return b;
  };
  function by(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  by.N = "getCookieValues";
  function cy() {
    return vi.rf;
  }
  cy.M = "internal.getCountryCode";
  function dy() {
    var a = [];
    return oc(a);
  }
  dy.M = "internal.getDestinationIds";
  function ey(a) {
    var b = null;
    return b;
  }
  ey.N = "getElementById";
  function fy(a, b) {
    var c;
    L(H(this), ["targetId:!string", "name:!string"], arguments);
    var d = sh(a) || {};
    c = oc(d[b], this.h);
    return c;
  }
  fy.M = "internal.getProductSettingsParameter";
  function gy(a, b) {
    var c;
    L(H(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
    M(this, "get_url", "query", a);
    var d = Rh(Th(z.location.href), "query"),
      e = Oh(d, a, b);
    c = oc(e, this.h);
    return c;
  }
  gy.N = "getQueryParameters";
  function hy(a, b) {
    var c;
    return c;
  }
  hy.N = "getReferrerQueryParameters";
  function iy(a) {
    var b = "";
    return b;
  }
  iy.N = "getReferrerUrl";
  function jy() {
    return vi.uh;
  }
  jy.M = "internal.getRegionCode";
  function ky(a, b) {
    var c;
    L(H(this), ["targetId:!string", "name:!string"], arguments);
    var d = ls(a);
    c = oc(d[b], this.h);
    return c;
  }
  ky.M = "internal.getRemoteConfigParameter";
  function ly(a) {
    var b = "";
    L(H(this), ["component:?string"], arguments),
      M(this, "get_url", a),
      (b = Rh(Th(z.location.href), a));
    return b;
  }
  ly.N = "getUrl";
  function my() {
    M(this, "get_user_agent");
    return z.navigator.userAgent;
  }
  my.N = "getUserAgent";
  function ny(a) {
    if (!a) return {};
    var b = a.Yi;
    return Lo(b.type, b.index, b.name);
  }
  function oy(a) {
    return a ? { originatingEntity: ny(a) } : {};
  }
  function qy(a, b) {}
  qy.N = "gtagSet";
  function ry(a, b) {}
  ry.N = "injectHiddenIframe";
  var sy = {};
  function uy(a, b, c, d) {}
  var vy = Object.freeze({ dl: 1, id: 1 }),
    wy = {};
  function xy(a, b, c, d) {}
  uy.N = "injectScript";
  xy.M = "internal.injectScript";
  function yy(a) {
    var b = !0;
    return b;
  }
  yy.N = "isConsentGranted";
  var zy = function () {
    var a = Mf(function (b) {
      this.h.h.log("error", b);
    });
    a.N = "JSON";
    return a;
  };
  var Ay = function () {
      return !1;
    },
    By = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var Cy = ["textContent", "value", "tagName", "children", "childElementCount"];
  function Dy(a) {
    var b;
    return b;
  }
  Dy.M = "internal.locateUserData";
  function Ey() {}
  Ey.N = "logToConsole";
  function Fy(a) {
    var b = void 0;
    if ("function" === typeof URL) {
      var c;
      a: {
        var d;
        try {
          d = new URL(a);
        } catch (x) {
          c = void 0;
          break a;
        }
        for (
          var e = {}, f = Array.from(d.searchParams), g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g][0],
            k = f[g][1];
          e.hasOwnProperty(h)
            ? "string" === typeof e[h]
              ? (e[h] = [e[h], k])
              : e[h].push(k)
            : (e[h] = k);
        }
        c = oc({
          href: d.href,
          origin: d.origin,
          protocol: d.protocol,
          username: d.username,
          password: d.password,
          host: d.host,
          hostname: d.hostname,
          port: d.port,
          pathname: d.pathname,
          search: d.search,
          searchParams: e,
          hash: d.hash,
        });
      }
      return c;
    }
    var n;
    try {
      n = Th(a);
    } catch (x) {
      return;
    }
    if (!n.protocol || !n.host) return;
    var p = {};
    if (n.search)
      for (
        var q = n.search.replace("?", "").split("&"), r = 0;
        r < q.length;
        r++
      ) {
        var t = q[r].split("="),
          u = t[0],
          v = decodeURIComponent(t.splice(1).join("="));
        p.hasOwnProperty(u)
          ? "string" === typeof p[u]
            ? (p[u] = [p[u], v])
            : p[u].push(v)
          : (p[u] = v);
      }
    n.searchParams = p;
    n.origin = n.protocol + "//" + n.host;
    n.username = "";
    n.password = "";
    b = oc(n);
    return b;
  }
  Fy.N = "parseUrl";
  function Gy(a) {}
  Gy.M = "internal.processAsNewEvent";
  function Hy(a, b) {
    var c = !1;
    return c;
  }
  Hy.N = "queryPermission";
  function Iy() {
    var a = "";
    return a;
  }
  Iy.N = "readCharacterSet";
  function Jy() {
    var a = "";
    return a;
  }
  Jy.N = "readTitle";
  function Ky(a, b) {
    var c = this;
  }
  Ky.M = "internal.registerCcdCallback";
  var Ly = Object.freeze(["config", "event", "get", "set"]);
  function My(a, b, c) {}
  My.M = "internal.registerGtagCommandListener";
  function Ny(a, b) {
    var c = !1;
    return c;
  }
  Ny.M = "internal.removeDataLayerEventListener";
  function Oy() {}
  Oy.N = "resetDataLayer";
  function Qy(a, b, c, d) {
    L(
      H(this),
      [
        "target:!*",
        "eventName:!*",
        "eventParameters:?DustMap",
        "messageContext:?DustMap",
      ],
      arguments
    );
    var e = c ? pc(c) : {},
      f = pc(a);
    Array.isArray(f) || (f = [f]);
    b = String(b);
    var g = d ? pc(d) : {},
      h = this.h.h;
    for (var k = 0; k < f.length; k++) {
      var n = f[k];
      if ("string" === typeof n) {
        var p = am(n);
        if (p) {
          rp(p.containerId, ms());
          var q = nc(e),
            r = nc(g);
          r.originatingEntity = ny(h);
          var t = vp(n, b, q);
          yp(t, h.eventId, r);
        }
      }
    }
  }
  Qy.M = "internal.sendGtagEvent";
  function Ry(a, b, c) {}
  Ry.N = "sendPixel";
  function Sy(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  Sy.N = "setCookie";
  var Ty = !1;
  Ty = !0;
  function Uy(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Gb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== P.g.xe && M(this, "access_consent", e, "write");
    }
    var f = this.h.h,
      g = f.eventId,
      h = oy(f);
    if (Ty) {
      var k = sp("consent", "default", pc(a));
      yp(k, g, h);
    } else Ui(pc(a));
  }
  Uy.N = "setDefaultConsentState";
  function Vy(a, b, c) {
    return !1;
  }
  Vy.N = "setInWindow";
  function Wy(a, b, c) {
    L(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    var d = sh(a) || {};
    d[b] = pc(c, this.h);
    var e = a;
    qh || rh();
    ph[e] = d;
  }
  Wy.M = "internal.setProductSettingsParameter";
  function Xy(a, b, c) {
    L(H(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = ls(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};
      else if (!mc(e[d[f]]))
        throw Error(
          "setRemoteConfigParameter failed, path contains a non-object type: " +
            d[f]
        );
      e = e[d[f]];
    }
    e[d[f]] = pc(c, this.h);
  }
  Xy.M = "internal.setRemoteConfigParameter";
  var Yy = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  function Zy(a, b, c, d) {
    var e = this;
  }
  Zy.N = "sha256";
  function $y(a, b, c) {}
  $y.M = "internal.sortRemoteConfigParameters";
  var az = {},
    bz = {};
  az.N = "templateStorage";
  az.getItem = function (a) {
    var b = null;
    return b;
  };
  az.setItem = function (a, b) {};
  az.removeItem = function (a) {};
  az.clear = function () {};
  var cz = function (a) {
    var b;
    return b;
  };
  var dz = !1;
  dz = !0;
  function ez(a) {
    L(H(this), ["consentSettings:!DustMap"], arguments);
    var b = pc(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
    var d = this.h.h,
      e = d.eventId,
      f = oy(d);
    dz ? yp(sp("consent", "update", b), e, f) : Wi(b, { eventId: e });
  }
  ez.N = "updateConsentState";
  var fz = function () {
    var a = new Wf(),
      b = function (d) {
        return Yf(a, d.M, d);
      },
      c = function (d) {
        return a.add(d.N, d);
      };
    c(Dv);
    c(Jv);
    c(vw);
    c(yw);
    c(zw);
    c(Dw);
    c(Ew);
    c(Gw);
    c(zy());
    c(Hw);
    c(by);
    c(gy);
    c(hy);
    c(iy);
    c(ly);
    c(ry);
    c(uy);
    c(yy);
    c(Ey);
    c(Fy);
    c(Hy);
    c(Iy);
    c(Jy);
    c(Ry);
    c(Sy);
    c(Uy);
    c(Vy);
    c(Zy);
    c(az);
    c(ez);
    a.add("Math", wf());
    a.add("Object", Uf);
    a.add("TestHelper", Zf());
    a.add("assertApi", sf);
    a.add("assertThat", tf);
    a.add("decodeUri", xf);
    a.add("decodeUriComponent", yf);
    a.add("encodeUri", zf);
    a.add("encodeUriComponent", Af);
    a.add("fail", Bf);
    a.add("generateRandom", Cf);
    a.add("getContainerVersion", Df);
    a.add("getTimestamp", Kf);
    a.add("getTimestampMillis", Kf);
    a.add("getType", Lf);
    a.add("makeInteger", Nf);
    a.add("makeNumber", Of);
    a.add("makeString", Pf);
    a.add("makeTableMap", Qf);
    a.add("mock", Tf);
    a.add("fromBase64", ay, !("atob" in z));
    a.add("localStorage", By, !Ay());
    a.add("toBase64", cz, !("btoa" in z));
    b(Zv);
    b(fw);
    b(kw);
    b(tw);
    b(Bw);
    b(Sx);
    b(Ux);
    b(dy);
    b(xy);
    b(Dy);
    b(My);
    b(Qy);
    Yf(a, "internal.getFlags", Jf);
    c(qy);
    b(ww), b(ky), b(Xy), b($y), b(fy), b(Wy);
    b(Gv);
    b(Sw);
    b(Xw);
    b(bx);
    b(kx);
    b(ox);
    b(zx);
    b(Mx);
    b(Ny);
    b(cy);
    b(jy);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.s.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var k = h.Yc();
            if (k) {
              0 !== k.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.s.hasOwnProperty(d) ? a.s[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var gz = function () {
      return !1;
    },
    hz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var iz;
  function jz() {
    var a = iz;
    return function (b, c, d) {
      var e = d && d.event;
      kz(c);
      var f = new gb();
      Ka(c, function (q, r) {
        var t = oc(r);
        void 0 === t && void 0 !== r && ig(44);
        f.set(q, t);
      });
      a.h.h.I = ye();
      var g = {
        Mi: Le(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Xd:
          void 0 !== e
            ? function (q) {
                return e.ub.Xd(q);
              }
            : void 0,
        Yc: function () {
          return b;
        },
        log: function () {},
        Yi: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (gz()) {
        var h = hz(),
          k = void 0,
          n = void 0;
        g.Ua = {
          Vf: [],
          Oc: {},
          Xa: function (q, r, t) {
            1 === r && (k = q);
            7 === r && (n = t);
            h(q, r, t);
          },
          Jf: Rf(),
        };
        g.log = function (q, r) {
          if (k) {
            var t = Array.prototype.slice.call(arguments, 1);
            h(k, 4, { level: q, source: n, message: t });
          }
        };
      }
      var p = Id(a, g, [b, f]);
      a.h.h.I = void 0;
      p instanceof na && "return" === p.h && (p = p.s);
      return pc(p);
    };
  }
  function kz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        J(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        J(c);
      });
  }
  function lz() {
    iz.h.h.T = function (a, b, c) {
      S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
      S.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        S.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function mz(a) {
    void 0 !== a &&
      Ka(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          ch[e] = ch[e] || [];
          ch[e].push(b);
        }
      });
  }
  var nz = encodeURI,
    W = encodeURIComponent,
    oz = Pb;
  var pz = function (a, b) {
      if (!a) return !1;
      var c = Rh(Th(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    qz = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };

  var AA = !1;
  AA = !0;
  var BA = !1;
  BA = !0;
  var CA = !1;
  CA = !0;
  var DA = {};
  DA[P.g.Xb] = "";
  DA[P.g.Pa] = "";
  DA[P.g.Wa] = "";
  DA[P.g.ya] = "auto";
  DA[P.g.kb] = "/";
  DA[P.g.Ja] = 63072e3;
  DA[P.g.Jc] = 30;
  DA[P.g.Nd] = 1e4;
  DA[P.g.Ka] = !0;
  var EA = function (a, b, c, d, e) {
    qm.call(this, a, b, d);
    this.s = c;
    this.aa = d.eventModel;
    this.Bg = d.containerConfig;
    AA ||
      ((this.I = d.getWithConfig(P.g.wa) ? 1 : 8), (this.Eg = this.fc = !1));
    AA || (this.af = d.getWithConfig(P.g.lb) ? 1 : 8);
    this.D = e;
    this.T = this.Ze = this.Pg = this.C = this.Gg = !1;
    this.Mb = 0;
    this.xb = !1;
    this.oa = 0;
    this.Mg = this.h = this.df = void 0;
    CA || (this.Ig = !1);
    BA || (this.Cg = this.Dg = void 0);
  };
  ka(EA, qm);
  l = EA.prototype;
  l.Yd = function (a, b) {
    void 0 === this.F(a) && (this.aa[a] = b);
  };
  l.F = function (a) {
    return void 0 !== this.aa[a]
      ? this.aa[a]
      : void 0 !== this.B.getWithConfig(a)
      ? this.B.getWithConfig(a)
      : void 0 !== this.D[a]
      ? this.D[a]
      : DA[a];
  };
  l.getRemoteConfig = function (a) {
    return void 0 !== this.B.remoteConfig[a]
      ? this.B.remoteConfig[a]
      : this.D[a];
  };
  l.Lb = function (a) {
    var b = sm(this, P.g.Fd, this.D[P.g.Fd]);
    if (b && void 0 !== b[a || this.eventName]) return b[a || this.eventName];
  };
  l.hh = function () {
    var a;
    a = AA ? this.metadata.user_data : this.F(P.g.Ba);
    if ("object" === typeof a) return a;
  };
  l.ih = function () {
    return !!this.hh();
  };
  l.abort = function () {
    throw "ABORT";
  };
  l.Da = function () {
    return !(
      (!0 !== this.F(P.g.Fc) && "true" !== this.F(P.g.Fc)) ||
      !this.F(P.g.ba)
    );
  };
  var FA = !1,
    GA = function (a) {
      var b = a.eventName === P.g.zc && Ki() && a.Da(),
        c = a.metadata.is_conversion || a.xb,
        d = a.metadata.is_session_start || a.C,
        e = a.metadata.create_dc_join || a.Ze,
        f = a.metadata.create_google_join || a.T,
        g = (a.h || a.metadata.euid_mode_enabled) && a.ih();
      return !(!Eb.sendBeacon || c || g || d || e || f || b || FA);
    };
  var HA = function (a) {
    fg("GA4_EVENT", a);
  };
  var JA = function (a) {
      return !a || IA.test(a) || Gg.hasOwnProperty(a);
    },
    KA = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e];
        if (f.edit_param) {
          var g = f.edit_param.param_name,
            h = Wx(a, b, f.edit_param.param_value),
            k;
          if (h) {
            var n = Number(h);
            k = isNaN(n) ? h : n;
          } else k = h;
          b[g] = k;
        } else f.delete_param && delete b[f.delete_param.param_name];
      }
    },
    IA = /^(_|ga_|google_|gtag\.|firebase_).*$/;
  var LA = function (a) {
      var b = 0,
        c = 0;
      return {
        start: function () {
          b = Ra();
        },
        stop: function () {
          c = this.get();
        },
        get: function () {
          var d = 0;
          a.Gf() && (d = Ra() - b);
          return d + c;
        },
      };
    },
    MA = !1;
  MA = !0;
  var NA = function () {
    this.h = void 0;
    this.s = 0;
    this.isActive = this.isVisible = this.C = !1;
    this.I = this.D = void 0;
  };
  l = NA.prototype;
  l.xi = function (a) {
    var b = this;
    if (!this.h) {
      this.C = I.hasFocus();
      this.isVisible = !I.hidden;
      this.isActive = !0;
      var c = function (d, e, f) {
        Qb(d, e, function (g) {
          b.h.stop();
          f(g);
          b.Gf() && b.h.start();
        });
      };
      c(z, "focus", function () {
        b.C = !0;
      });
      c(z, "blur", function () {
        b.C = !1;
      });
      c(z, "pageshow", function (d) {
        b.isActive = !0;
        d.persisted && ig(56);
        b.I && b.I();
      });
      c(z, "pagehide", function () {
        b.isActive = !1;
        b.D && b.D();
      });
      c(I, "visibilitychange", function () {
        b.isVisible = !I.hidden;
      });
      a.Da() &&
        -1 === (Eb.userAgent || "").indexOf("Firefox") &&
        -1 === (Eb.userAgent || "").indexOf("FxiOS") &&
        c(z, "beforeunload", function () {
          FA = !0;
        });
      this.Sf();
      this.s = 0;
    }
  };
  l.Sf = function () {
    this.s += this.je();
    this.h = LA(this);
    this.Gf() && this.h.start();
  };
  l.ik = function (a) {
    var b = this.je();
    if (MA && 0 < b) {
      a.H[P.g.Ed] = b;
      return;
    }
    a.oa = b;
  };
  l.lj = function (a) {
    MA ? (a.H[P.g.Ed] = void 0) : (a.oa = 0);
    this.Sf();
    this.s = 0;
  };
  l.Gf = function () {
    return this.C && this.isVisible && this.isActive;
  };
  l.ij = function () {
    return this.s + this.je();
  };
  l.je = function () {
    return (this.h && this.h.get()) || 0;
  };
  l.Rj = function (a) {
    this.D = a;
  };
  l.vh = function (a) {
    this.I = a;
  };
  function OA() {
    var a = z;
    return (a.gaGlobal = a.gaGlobal || {});
  }
  var PA = function () {
      var a = OA();
      a.hid = a.hid || Ga();
      return a.hid;
    },
    QA = function (a, b) {
      var c = OA();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var SA = function (a, b, c) {
      if (RA) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
          (a.H[P.g.wa] = b),
            (a.aa[P.g.wa] = void 0),
            (a.metadata.client_id_source = c);
      } else c <= a.I && ((a.aa[P.g.wa] = b), (a.I = c));
    },
    WA = function (a, b) {
      var c;
      var d = TA(b),
        e = String(b.F(P.g.ya)),
        f = String(b.F(P.g.kb)),
        g = Number(b.F(P.g.Ja)),
        h = b.F(P.g.Yb),
        k = {
          fb: P.g.U,
          domain: e,
          path: f,
          expires: g ? new Date(Ra() + 1e3 * g) : void 0,
          flags: "" + b.F(P.g.Wa),
        };
      if (!1 === h && UA(b) === a) c = !0;
      else {
        var n = zj(a, VA[0], e, f);
        c = 1 !== rj(d, n, k);
      }
      return c;
    },
    UA = function (a) {
      var b = TA(a),
        c = "" + a.F(P.g.ya),
        d = "" + a.F(P.g.kb),
        e = yj(b, c, d, VA, P.g.U);
      if (!e) {
        var f = String(a.F(P.g.Xb));
        f && f != b && (e = yj(f, c, d, VA, P.g.U));
      }
      return e;
    },
    TA = function (a) {
      return String(a.F(P.g.Pa)) + "_ga";
    },
    RA = !1;
  RA = !0;
  var VA = ["GA1"];
  var ZA = function (a, b) {
      var c = XA(b),
        d = String(b.F(P.g.ya)),
        e = String(b.F(P.g.kb)),
        f = Number(b.F(P.g.Ja)),
        g = zj(a, YA[0], d, e),
        h = {
          fb: P.g.U,
          domain: d,
          path: e,
          expires: f ? new Date(Ra() + 1e3 * f) : void 0,
          flags: String(b.F(P.g.Wa)),
        };
      return 1 !== rj(c, g, h);
    },
    $A = function (a) {
      var b = XA(a),
        c = String(a.F(P.g.ya)),
        d = String(a.F(P.g.kb));
      return yj(b, c, d, YA, P.g.U);
    },
    aB = function (a, b, c, d, e, f, g) {
      if (a && b) {
        var h = [a, b, Ma(c), d, e];
        return h.join(".");
      }
    },
    bB = !1;
  bB = !0;
  var YA = ["GS1"],
    XA = function (a) {
      return String(a.F(P.g.Pa)) + "_ga_" + a.ja.substr(2);
    },
    cB = function (a) {
      return bB
        ? aB(
            a.H[P.g.Eb],
            a.H[P.g.Lc],
            a.H[P.g.Kc],
            a.s,
            a.metadata.join_timer_sec || 0,
            !!a.metadata[P.g.Ec],
            a.H[P.g.lb]
          )
        : aB(
            a.aa[P.g.Eb],
            a.aa[P.g.Lc],
            a.aa[P.g.Kc],
            a.s,
            a.Mb,
            !!a.aa[P.g.Ec],
            a.aa[P.g.lb]
          );
    };

  var dB = function (a) {
      var b = a.F(P.g.Aa),
        c = a.getRemoteConfig(P.g.Aa);
      if (c === b) return c;
      var d = nc(b);
      c && c[P.g.V] && (d[P.g.V] = (d[P.g.V] || []).concat(c[P.g.V]));
      return d;
    },
    eB = function (a, b) {
      var c = Rk(!0);
      return "1" !== c._up ? {} : { clientId: c[a], yh: c[b] };
    },
    fB = function (a, b, c) {
      var d = Rk(!0),
        e = d[b];
      e && (SA(a, e, 2), WA(e, a));
      var f = d[c];
      f && ZA(f, a);
      return !(!e || !f);
    },
    gB = !1;
  gB = !0;
  var hB = !1;
  hB = !0;
  var iB = !1,
    jB = function (a) {
      var b = dB(a) || {},
        c = TA(a),
        d = XA(a);
      $k(b[P.g.ac], !!b[P.g.V]) && fB(a, c, d) && (iB = !0);
      b[P.g.V] &&
        Xk(
          function () {
            var e = {},
              f = UA(a);
            f && (e[c] = f);
            var g = $A(a);
            g && (e[d] = g);
            var h = ij("FPLC", void 0, void 0, P.g.U);
            h.length && (e._fplc = h[0]);
            return e;
          },
          b[P.g.V],
          b[P.g.Hc],
          !!b[P.g.bc]
        );
    },
    lB = function (a) {
      if (!a.F(P.g.sb)) return {};
      var b = TA(a),
        c = XA(a);
      Yk(function () {
        var d;
        if (Xi("analytics_storage")) d = {};
        else {
          var e = {};
          d =
            ((e._up = "1"),
            (e[b] = gB ? a.H[P.g.wa] : a.aa[P.g.wa]),
            (e[c] = cB(a)),
            e);
        }
        return d;
      }, 1);
      return !Xi("analytics_storage") && kB() ? eB(b, c) : {};
    },
    kB = function () {
      var a = Qh(z.location, "host"),
        b = Qh(Th(I.referrer), "host");
      return a && b
        ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a)
          ? !0
          : !1
        : !1;
    },
    mB = function (a) {
      if (!a) return a;
      var b = String(a);
      b = Qk(b);
      return (b = Qk(b, "_ga"));
    };
  var nB = function (a) {
    var b = !1;
    return b;
  };
  var oB = function () {
    var a = Ra(),
      b = a + 864e5,
      c = 20,
      d = 5e3;
    return function () {
      var e = Ra();
      e >= b && ((b = e + 864e5), (d = 5e3));
      if (1 > d) return !1;
      c = Math.min(c + ((e - a) / 1e3) * 5, 20);
      a = e;
      if (1 > c) return !1;
      d--;
      c--;
      return !0;
    };
  };
  var pB = function (a) {
      return Rh(Th(a.H[P.g.qb]), "host", !0);
    },
    qB = !1;
  qB = !0;
  var rB = "" + Ga(),
    sB = !1,
    tB = void 0;
  var uB = function (a, b) {
      if (b.Da()) {
        var c = Um();
        c && (a.us_privacy = c);
        var d = kk();
        d && (a.gdpr = d);
        var e = jk();
        e && (a.gdpr_consent = e);
      }
    },
    wB = function (a, b) {
      if (Ki()) {
        a.gcs = Yi();
        var c = vB ? b.metadata.is_consent_update : b.Dg;
        c && (a.gcu = "1");
        if (b.Da()) {
          Li() && (a.gcd = "G1" + Si(Ii));
          var d = b.F(P.g.qa);
          a.adr = void 0 !== d && !1 !== d ? "1" : "0";
          if (c) {
            var e;
            vB ? (e = b.metadata.consent_update_type) : (e = b.Cg);
            a.gcut = Og[e || ""];
          }
        }
      }
    },
    xB = function (a, b, c) {
      void 0 === c && (c = {});
      if ("object" === typeof b) for (var d in b) xB(a + "." + d, b[d], c);
      else c[a] = b;
      return c;
    },
    AB = function (a) {
      var b = Vm(a.F(P.g.ba), "/g/collect");
      if (b) return b;
      var c = sm(a, P.g.ob, a.F(P.g.ob));
      return c &&
        !sm(a, P.g.Gc, !1) &&
        !1 !== a.F(P.g.Bc) &&
        ir() &&
        Xi(P.g.O) &&
        Xi(P.g.U)
        ? yB()
        : zB();
    },
    BB = !1;
  BB = !0;
  var vB = !1;
  vB = !0;
  var CB = !1;
  CB = !0;
  var DB = "",
    EB = !1;
  EB = !0;
  var FB = {};
  FB[P.g.ui] = "tid";
  FB[P.g.wa] = "cid";
  FB[P.g.Cb] = "ul";
  FB[P.g.Pe] = "_fid";
  FB[P.g.Xe] = "tt";
  FB[P.g.Kd] = "ir";
  FB[P.g.We] = "sr";
  FB[P.g.Re] = "gdid";
  (FB[P.g.Ve] = "_rdi"), (FB[P.g.kg] = "_geo");
  FB[P.g.Ag] = "gtm_up";
  FB[P.g.zg] = "_glv";
  var GB = {};
  GB[P.g.Eb] = "sid";
  GB[P.g.Lc] = "sct";
  GB[P.g.Kc] = "seg";
  GB[P.g.pb] = "dl";
  GB[P.g.qb] = "dr";
  GB[P.g.Ld] = "dt";
  GB[P.g.za] = "cu";
  GB[P.g.Qa] = "uid";
  GB[P.g.xd] = "cc";
  GB[P.g.yd] = "ci";
  GB[P.g.zd] = "cm";
  GB[P.g.Ad] = "cn";
  GB[P.g.Bd] = "cs";
  GB[P.g.Cd] = "ck";
  var HB = {};
  HB[P.g.Ed] = "_et";
  HB[P.g.Oe] = "edid";
  var IB = {};
  IB[P.g.xd] = "cc";
  IB[P.g.yd] = "ci";
  IB[P.g.zd] = "cm";
  IB[P.g.Ad] = "cn";
  IB[P.g.Bd] = "cs";
  IB[P.g.Cd] = "ck";
  var zB = function () {
      var a = "www";
      EB && DB && (a = DB);
      return "https://" + a + ".google-analytics.com/g/collect";
    },
    yB = function () {
      var a;
      EB && DB && (a = DB);
      return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect";
    },
    JB = function (a, b, c) {
      function d(A, B) {
        if (void 0 !== B && !Dg.hasOwnProperty(A)) {
          null === B && (B = "");
          var E = B;
          !0 === B && (E = "1");
          !1 === B && (E = "0");
          var F;
          if (FB[A]) (F = FB[A]), (e[F] = Re(E, 420));
          else if (GB[A]) (F = GB[A]), (g[F] = Re(E, 420));
          else if (HB[A]) (F = HB[A]), (f[F] = Re(E, 420));
          else if ("_" === A.charAt(0)) e[A] = Re(E, 420);
          else {
            var D;
            (D = u(A, B)) ||
              (IB[A]
                ? (D = !0)
                : A !== P.g.Cc
                ? (D = !1)
                : ("object" !== typeof B && t(A, B), (D = !0)));
            D || t(A, B);
          }
        }
      }
      var e = {},
        f = {},
        g = {};
      e.v = "2";
      e.tid = a.ja;
      e.gtm = Lj();
      e._p = PA();
      a.df && (e._z = a.df);
      c && (e.em = c);
      if (BB ? a.metadata.create_google_join : a.T) e._gaz = 1;
      wB(e, a);
      uB(e, a);
      a.Mg && !BB && (e.gtm_up = "1");
      a.Da() && a.Ig && !CB && (e._glv = "1");
      var h = a.H[P.g.Re];
      h && (e.gdid = h);
      f.en = Re(a.eventName, 40);
      var k = BB ? a.metadata.is_first_visit_conversion : a.Gg;
      BB
        ? a.metadata.is_first_visit && (f._fv = k ? 2 : 1)
        : a.fc && (f._fv = k ? 2 : 1);
      BB ? a.metadata.is_new_to_site && (f._nsi = 1) : a.Eg && (f._nsi = 1);
      var n = BB ? a.metadata.is_session_start_conversion : a.Pg;
      BB
        ? a.metadata.is_session_start && (f._ss = n ? 2 : 1)
        : a.C && (f._ss = n ? 2 : 1);
      BB ? a.metadata.is_conversion && (f._c = 1) : a.xb && (f._c = 1);
      a.metadata.is_external_event && (f._ee = 1);
      0 < a.oa && !BB && (f._et = a.oa);
      if (a.metadata.is_ecommerce) {
        var p = a.H[P.g.fa] || a.F(P.g.fa);
        if (Ea(p))
          for (var q = 0; q < p.length && 200 > q; q++)
            f["pr" + (q + 1)] = We(p[q]);
      }
      var r = a.H[P.g.Oe];
      r && (f.edid = r);
      for (
        var t = function (A, B) {
            A = Re(A, 40);
            var C = "ep." + A,
              E = "epn." + A;
            A = Da(B) ? E : C;
            var F = Da(B) ? C : E;
            f.hasOwnProperty(F) && delete f[F];
            f[A] = Re(B, 100);
          },
          u = function (A, B) {
            var C = A.split(".");
            if (A === P.g.Ba && "object" !== typeof B) return t(A, B), !0;
            if (C[0] === P.g.Ba) {
              if ((1 < C.length || "object" === typeof B) && a.Da()) {
                var E = xB(A, B);
                Ka(E, function (F, D) {
                  return void t(F, D);
                });
              }
              return !0;
            }
            return !1;
          },
          v = 0;
        v < Eg.length;
        ++v
      ) {
        var x = Eg[v];
        d(x, a.F(x));
      }
      Ka(a.Bg, d);
      Ka(a.aa, d);
      Ka(a.H, d);
      a.metadata.user_data && u("user_data", a.metadata.user_data);
      var y = a.H[P.g.Ra] || a.F(P.g.Ra) || {};
      (!1 !== a.F(P.g.ca) && jr()) || (y._npa = "1");
      Ka(y, function (A, B) {
        if (void 0 !== B)
          if ((null === B && (B = ""), A === P.g.Qa && !g.uid))
            g.uid = Re(B, 36);
          else if (b[A] !== B) {
            var C = (Da(B) ? "upn." : "up.") + Re(A, 24);
            f[C] = Re(B, 36);
            b[A] = B;
          }
      });
      zm[17] && a.Da() && d("_uc", vi.rf);
      var w = !1;
      return Ye.call(this, { Ea: e, Pb: g, aa: f }, AB(a), a.Da(), w) || this;
    };
  ka(JB, Ye);
  var KB = function (a, b) {
      return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
        return b[d] || c;
      });
    },
    LB = function (a) {
      var b = a.search;
      return (
        a.protocol +
        "//" +
        a.hostname +
        a.pathname +
        (b ? b + "&richsstsse" : "?richsstsse")
      );
    },
    MB = function (a) {
      var b = {},
        c = "",
        d = a.pathname.indexOf("/g/collect");
      0 <= d && (c = a.pathname.substring(0, d));
      b.transport_url = a.protocol + "//" + a.hostname + c;
      return b;
    },
    NB = function (a, b) {
      var c = new z.XMLHttpRequest();
      c.withCredentials = !0;
      var d = b ? "POST" : "GET",
        e = "",
        f = 0,
        g = Th(a),
        h = MB(g),
        k = LB(g);
      c.onprogress = function (n) {
        if (200 === c.status) {
          e += c.responseText.substring(f);
          f = n.loaded;
          for (var p = KB(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
            var r;
            a: {
              var t,
                u = p.substring(0, q).split("\n"),
                v =
                  "undefined" != typeof Symbol &&
                  Symbol.iterator &&
                  u[Symbol.iterator];
              t = v ? v.call(u) : { next: aa(u) };
              var x = t.next().value,
                y = t.next().value;
              if (x.startsWith("event: message") && y.startsWith("data: "))
                try {
                  r = JSON.parse(y.substring(y.indexOf(":") + 1));
                  break a;
                } catch (K) {}
              r = void 0;
            }
            var w = r;
            if (w) {
              var A = w.send_pixel || [];
              if (Array.isArray(A))
                for (var B = 0; B < A.length; B++) {
                  var C = A[B],
                    E = Mj("", 0);
                  if (1 === E) {
                    var F = Math.floor(2 * Math.random()) + 1,
                      D,
                      O = C,
                      N = F,
                      R = 0 < O.indexOf("?") ? "&" : "?";
                    D = "" + O + R + "gtmexpsb=" + N;
                    2 === F ? Wb(D) : Pb(D);
                  } else 2 === E ? Wb(C) : Pb(C);
                }
              var Z = w.send_beacon || [];
              if (Array.isArray(Z)) for (var Q = 0; Q < Z.length; Q++) Wb(Z[Q]);
            }
            p = p.substring(q + 2);
            q = p.indexOf("\n\n");
          }
          e = p;
        }
      };
      c.open(d, k);
      c.send(b);
    };
  var QB = function (a, b, c, d) {
      var e = a + "?" + b;
      OB && (d = !(0 === e.indexOf(zB()) || 0 === e.indexOf(yB())));
      d && !FA ? NB(e, c) : PB(a, b, c);
    },
    RB = function (a) {},
    OB = !1;
  var SB = !1;
  SB = !0;
  var TB = function () {
    this.D = 1;
    this.I = {};
    this.h = new Ze();
    this.s = -1;
  };
  TB.prototype.C = function (a, b) {
    var c = this,
      d;
    try {
      d = new JB(a, this.I, b);
    } catch (v) {
      a.abort();
    }
    var e = GA(a);
    (e && this.h.D(d)) || this.flush();
    if (e && this.h.add(d)) {
      if (0 > this.s) {
        var f = z,
          g = f.setTimeout,
          h;
        a.Da() ? (UB ? ((UB = !1), (h = VB)) : (h = WB)) : (h = 5e3);
        this.s = g.call(
          f,
          function () {
            return c.flush();
          },
          h
        );
      }
    } else {
      var k = af(d, this.D++);
      QB(d.h, k.Nf, k.body, d.D);
      var n = a.metadata.create_dc_join || a.Ze,
        p = a.metadata.create_google_join || a.T,
        q = !1 !== a.F(P.g.Ia),
        r = !1 !== a.F(P.g.ca),
        t = { eventId: a.B.eventId, priorityId: a.B.priorityId },
        u = {
          Yj: n,
          Zj: p,
          kj: String(sm(a, P.g.Id, a.F(P.g.Id))),
          Ji: q,
          Ii: r,
          oj: sm(a, P.g.Gc, !1),
          Sk: t,
        };
      XB(d, u);
    }
  };
  TB.prototype.add = function (a) {
    (SB ? a.metadata.euid_mode_enabled : a.h) && !FA ? this.T(a) : this.C(a);
  };
  TB.prototype.flush = function () {
    if (this.h.events.length) {
      var a = bf(this.h, this.D++);
      QB(this.h.h, a.Nf, a.body, this.h.s);
      this.h = new Ze();
      0 <= this.s && (z.clearTimeout(this.s), (this.s = -1));
    }
  };
  TB.prototype.T = function (a) {
    var b = this,
      c = a.hh();
    c
      ? Ag(c, function (d) {
          b.C(a, 1 === d.split("~").length ? void 0 : d);
        })
      : this.C(a);
  };
  var XB = function (a, b) {
      function c(r) {
        p.push(r + "=" + encodeURIComponent("" + a.Ea[r]));
      }
      var d = b.Yj,
        e = b.Zj,
        f = b.kj,
        g = b.Ji,
        h = b.Ii,
        k = b.oj,
        n = b.bk;
      if (d || e || n) {
        var p = [];
        c("tid");
        c("cid");
        c("gtm");
        p.push("aip=1");
        a.Pb.uid && p.push("uid=" + encodeURIComponent("" + a.Pb.uid));
        d &&
          (PB(
            "https://stats.g.doubleclick.net/g/collect",
            "v=2&" + p.join("&")
          ),
          Ri("https://stats.g.doubleclick.net/g/collect?v=2&" + p.join("&")));
        if (e) {
          p.push("z=" + Ga());
          if (!k) {
            var q =
              f && 0 === f.indexOf("google.") && "google.com" != f
                ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace(
                    "%",
                    f
                  )
                : void 0;
            q && Pb(q + p.join("&"));
          }
        }
        n && RB(a);
      }
    },
    PB = function (a, b, c) {
      var d = a + "?" + b;
      c ? Eb.sendBeacon && Eb.sendBeacon(d, c) : Wb(d);
    },
    VB = Mj("", 500),
    WB = Mj("", 5e3),
    UB = !0;
  var YB = window,
    ZB = document,
    $B = function (a) {
      var b = YB._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === YB["ga-disable-" + a]))
        return !0;
      try {
        var c = YB.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = cj("AMP_TOKEN", String(ZB.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return ZB.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var aC = {};
  var bC = function (a, b, c) {
      c || (c = function () {});
      var d = function (e) {
        void 0 !== e[b] && (e[b] = c(e[b]));
      };
      d(a.H);
      d(a.aa);
      d(a.Bg);
      d(a.B.globalConfig);
    },
    dC = function (a, b) {
      var c = P.g.O;
      Xi(c) ||
        $i(function () {
          cC[11]
            ? ((b.metadata.is_consent_update = !0),
              (b.metadata.consent_update_type = c))
            : ((b.Dg = !0), (b.Cg = c));
          a.Tg(b);
        }, c);
    },
    cC = { 0: !0, 9: !0, 6: !0, 5: !0, 10: !0, 3: !0, 2: !0 };
  cC[1] = !0;
  cC[8] = !0;
  cC[11] = !0;
  cC[12] = !0;
  var eC = !1;
  aC.vi = "";
  var fC = {},
    gC =
      ((fC[P.g.xd] = !0),
      (fC[P.g.yd] = !0),
      (fC[P.g.zd] = !0),
      (fC[P.g.Ad] = !0),
      (fC[P.g.Bd] = !0),
      (fC[P.g.Cd] = !0),
      fC),
    hC = function (a, b) {
      this.I = a;
      this.fc = b;
      this.oa = new TB();
      this.h = void 0;
      this.D = new NA();
      this.s = this.C = void 0;
      this.T = !1;
      this.xb = void 0;
    };
  l = hC.prototype;
  l.Mj = function (a, b, c) {
    var d = this;
    if (!c.eventMetadata.is_external_event || "_" !== a.charAt(0)) {
      a !== P.g.Na && a !== P.g.Va && JA(a) && ig(58);
      iC(c.eventModel);
      var e = new EA(this.I, a, b, c, this.fc),
        f = [P.g.U],
        g = !1;
      g = e.Da();
      (sm(e, P.g.ob, e.F(P.g.ob)) || g) && f.push(P.g.O);
      aj(function () {
        d.Nj(e);
      }, f);
    }
  };
  l.Nj = function (a) {
    var b, c;
    this.s = a;
    try {
      $B(a.ja) && (ig(28), a.abort());
      0 <= aC.vi.replace(/\s+/g, "").split(",").indexOf(a.eventName) &&
        (ig(33), a.abort());
      var d = a.Lb();
      d && d.blacklisted && (ig(34), a.abort());
      var e = I.location.protocol;
      "http:" != e && "https:" != e && (ig(29), a.abort());
      Eb && "preview" == Eb.loadPurpose && (ig(30), a.abort());
      var f = S.grl;
      f || ((f = oB()), (S.grl = f));
      f() || (ig(35), a.abort());
      jC(a);
      this.yi(a);
      this.D.ik(a);
      var k = this.th,
        n;
      !a.F(P.g.sb) ||
        Xi(P.g.U) ||
        (gB ? a.B.getWithConfig(P.g.wa) : 1 === a.I) ||
        (gB ? (a.H[P.g.Ag] = !0) : (a.Mg = !0));
      var p;
      var q;
      q = void 0 === q ? 3 : q;
      var r = z.location.href;
      if (r) {
        var t = Th(r).search.replace("?", ""),
          u = Oh(t, "_gl", !1, !0) || "";
        p = u ? void 0 !== Sk(u, q) : !1;
      } else p = !1;
      var v = p;
      hB ? v && a.Da() && (a.H[P.g.zg] = !0) : (a.Ig = v);
      a.eventName === P.g.Na
        ? (a.F(P.g.sb) && zl(["aw", "dc"]), jB(a), (n = lB(a)))
        : (n = {});
      k.call(this, n);
      a.eventName == P.g.Na &&
        (a.F(P.g.Ka) || a.abort(),
        a.B.eventModel[P.g.da] &&
          ((a.B.containerConfig[P.g.da] = a.B.eventModel[P.g.da]),
          (a.B.eventModel[P.g.da] = void 0),
          cC[8] && (a.H[P.g.da] = void 0)),
        (a.eventName = P.g.zc));
      var x = ab(a.B.getMergedValues(P.g.da, 1), ".");
      x && (a.H[P.g.Re] = x);
      var y = ab(a.B.getMergedValues(P.g.da, 2), ".");
      y && (a.H[P.g.Oe] = y);
      var w = this.h,
        A = this.C,
        B = this.D,
        C = $A(a);
      C || (C = A);
      var E = Ma(a.F(P.g.Jc)),
        F;
      F = Ma(a.F(P.g.Nd));
      var D;
      a: {
        if (C) {
          var O = C.split(".");
          if (!(5 > O.length || 7 < O.length)) {
            D = {
              sessionId: O[0],
              qe: Number(O[1]),
              kd: !!Number(O[2]),
              Hf: Number(O[3]),
              Mb: Number(O[4] || 0),
              Nb: "1" === O[5],
              fe: "0" !== O[6] ? O[6] : void 0,
            };
            break a;
          }
        }
        D = void 0;
      }
      bB &&
        ((a.metadata.is_first_visit = !1),
        (a.metadata.is_session_start = !1),
        (a.metadata.join_timer_sec = 0));
      if (D && D.Mb) {
        var N = Math.max(0, D.Mb - Math.max(0, a.s - D.Hf));
        bB ? (a.metadata.join_timer_sec = N) : (a.Mb = N);
      }
      var R = !1;
      D ||
        (bB ? (a.metadata.is_first_visit = !0) : (a.fc = !0),
        (R = !0),
        (D = {
          sessionId: String(a.s),
          qe: 1,
          kd: !1,
          Hf: a.s,
          Nb: !1,
          fe: void 0,
        }));
      a.s > D.Hf + 60 * E &&
        ((R = !0),
        (D.sessionId = String(a.s)),
        D.qe++,
        (D.kd = !1),
        (D.fe = void 0));
      if (R) bB ? (a.metadata.is_session_start = !0) : (a.C = !0), B.lj(a);
      else if (B.ij() > F || a.eventName == P.g.zc) D.kd = !0;
      if (bB) {
        rm(a, P.g.Eb, D.sessionId);
        rm(a, P.g.Lc, D.qe);
        rm(a, P.g.Kc, D.kd ? 1 : 0);
      } else {
        a.Yd(P.g.Eb, D.sessionId);
        a.Yd(P.g.Lc, D.qe);
        a.Yd(P.g.Kc, D.kd ? 1 : 0);
      }
      var ua = a.F(P.g.wa),
        sa;
      RA ? ((a.metadata.is_new_to_site = !1), (sa = ua ? 1 : 8)) : (sa = a.I);
      ua || ((ua = UA(a)), (sa = 3));
      ua || ((ua = w), (sa = 5));
      if (!ua) {
        var Ja = Xi(P.g.U),
          Va = OA();
        ua = !Va.from_cookie || Ja ? Va.vid : void 0;
        sa = 6;
      }
      ua
        ? (ua = "" + ua)
        : ((ua = vj()),
          (sa = 7),
          RA
            ? (a.metadata.is_first_visit = a.metadata.is_new_to_site = !0)
            : (a.fc = a.Eg = !0));
      SA(a, ua, sa);
      lC(a);
      var sc = "",
        Mb = I.location;
      if (Mb) {
        var hd = Mb.pathname || "";
        "/" != hd.charAt(0) && (hd = "/" + hd);
        sc = Mb.protocol + "//" + Mb.hostname + hd + Mb.search;
      }
      rm(a, P.g.pb, sc);
      var pC = P.g.qb,
        Dh;
      a: {
        var Dt = ij("_opt_expid", void 0, void 0, P.g.U)[0];
        if (Dt) {
          var Et = decodeURIComponent(Dt).split("$");
          if (3 === Et.length) {
            Dh = Et[2];
            break a;
          }
        }
        if (void 0 !== S.ga4_referrer_override) Dh = S.ga4_referrer_override;
        else {
          var Ft = jh("gtm.gtagReferrer." + a.ja);
          Dh = Ft ? "" + Ft : I.referrer;
        }
      }
      rm(a, pC, Dh || void 0);
      rm(a, P.g.Ld, I.title);
      rm(a, P.g.Cb, (Eb.language || "").toLowerCase());
      var Eh = z.screen;
      b = Eh ? Eh.width : 0;
      c = Eh ? Eh.height : 0;
      rm(a, P.g.We, b + "x" + c);
      cC[1] &&
        ((a.metadata.create_dc_join = !1),
        (a.metadata.create_google_join = !1));
      if (!1 !== a.F(P.g.Bc) && ir() && Xi(P.g.O)) {
        var Ef = sm(a, P.g.ob, a.F(P.g.ob));
        if ((cC[1] ? a.metadata.is_session_start : a.C) || a.F(P.g.Qe)) {
          cC[1] ? (a.metadata.create_dc_join = !!Ef) : (a.Ze = !!Ef);
        }
        var Gl;
        cC[1] ? (Gl = a.metadata.join_timer_sec) : (Gl = a.Mb);
        var qC = Gl;
        Ef &&
          0 === (qC || 0) &&
          (cC[1]
            ? ((a.metadata.join_timer_sec = 60),
              (a.metadata.create_google_join = !0))
            : ((a.Mb = 60), (a.T = !0)));
      }
      mC(a);
      Ig.hasOwnProperty(a.eventName) &&
        ((a.metadata.is_ecommerce = !0), rm(a, P.g.fa), rm(a, P.g.za));
      rm(a, P.g.Xe);
      for (var Gt = a.F(P.g.Se) || [], Hl = 0; Hl < Gt.length; Hl++) {
        var Ht = Gt[Hl];
        if (Ht.rule_result) {
          rm(a, P.g.Xe, Ht.traffic_type);
          HA(3);
          break;
        }
      }
      if (a.F(P.g.ba)) {
        var It = dB(a) || {},
          sC =
            ($k(It[P.g.ac], !!It[P.g.V]) ? Rk(!0)._fplc : void 0) ||
            (0 < ij("FPLC", void 0, void 0, P.g.U).length ? void 0 : "0");
        a.H._fplc = sC;
      }
      if (void 0 !== a.F(P.g.Kd)) rm(a, P.g.Kd);
      else {
        var Jt = a.F(P.g.Md),
          Il,
          Fh;
        a: {
          if (iB) {
            var Jl = dB(a) || {};
            if (Jl && Jl[P.g.V])
              for (var Kt = pB(a), Gh = Jl[P.g.V], Ff = 0; Ff < Gh.length; Ff++)
                if (Gh[Ff] instanceof RegExp) {
                  if (Gh[Ff].test(Kt)) {
                    Fh = !0;
                    break a;
                  }
                } else if (0 <= Kt.indexOf(Gh[Ff])) {
                  Fh = !0;
                  break a;
                }
          }
          Fh = !1;
        }
        var Hh;
        if (!(Hh = Fh))
          if (qB) Hh = !1;
          else {
            var tC = pB(a),
              Ih;
            var Kl = String(a.F(P.g.ya));
            if ("none" !== Kl)
              if ("auto" !== Kl) Ih = Kl;
              else {
                if (!sB) {
                  for (
                    var Lt = String(a.F(P.g.kb)), Gf = oj(), te = 0;
                    te < Gf.length;
                    te++
                  )
                    if ("none" !== Gf[te]) {
                      var Mt = String(a.F(P.g.Pa)) + "_ga_autodomain";
                      if (
                        0 ===
                        rj(Mt, rB, { fb: P.g.U, domain: Gf[te], path: Lt })
                      ) {
                        rj(Mt, void 0, { fb: P.g.U, domain: Gf[te], path: Lt });
                        tB = Gf[te];
                        break;
                      }
                    }
                  sB = !0;
                }
                Ih = tB;
              }
            else Ih = void 0;
            var Nt = Ih;
            Hh = Nt ? 0 <= tC.indexOf(Nt) : !1;
          }
        if (!(Il = Hh)) {
          var Jh;
          if ((Jh = Jt))
            a: {
              for (
                var Ot = Jt.include_conditions || [], uC = pB(a), Ll = 0;
                Ll < Ot.length;
                Ll++
              )
                if (Ot[Ll].test(uC)) {
                  Jh = !0;
                  break a;
                }
              Jh = !1;
            }
          Il = Jh;
        }
        Il && ((a.H[P.g.Kd] = "1"), HA(4));
      }
      if (a.Da() && Ki()) {
        a.H._rnd = Aj();
      }
      if (a.eventName == P.g.Va) {
        var Pt = a.F(P.g.ab),
          vC = a.F(P.g.nb),
          Qt = void 0;
        Qt = a.H[Pt];
        vC(Qt || a.F(Pt));
        a.abort();
      }
      if (!a.B.eventMetadata.syn_or_mod) {
        var Ml = a.F(P.g.Je);
        if (Ml) {
          var tc = nc(a.aa);
          nc(a.H, tc);
          for (
            var Rt = Ml.edit_rules || [], St = !1, Nl = 0;
            Nl < Rt.length;
            Nl++
          ) {
            var Kh;
            a: {
              var bc = a,
                Ed = Rt[Nl];
              if (
                Zx(
                  bc.eventName,
                  tc,
                  Ed.event_name_predicate,
                  Ed.conditions || []
                )
              ) {
                if (Ed.new_event_name) {
                  var Tt = m(Ed.new_event_name)
                    ? String(Ed.new_event_name)
                    : Wx(bc.eventName, tc, Ed.new_event_name);
                  if (JA(Tt)) {
                    Kh = !1;
                    break a;
                  }
                  bc.eventName = String(Tt);
                }
                KA(bc.eventName, tc, Ed);
                var Ut = !0;
                Ut = !1;
                HA(2);
                if (Ut) {
                  var Ol = {},
                    Pl = {
                      eventMetadata:
                        ((Ol.syn_or_mod = !0),
                        (Ol.is_external_event =
                          !!bc.B.eventMetadata.is_external_event),
                        Ol),
                    },
                    Vt = hg();
                  Vt && (Pl.eventMetadata.event_usage = Vt);
                  if (zm[13]) {
                    var wC = vp(bc.ja, bc.eventName, tc);
                    yp(wC, bc.B.eventId, Pl);
                  } else is(bc.eventName, tc, bc.ja, Pl);
                  bc.abort();
                }
                Kh = !0;
              } else Kh = !1;
            }
            Kh && (St = !0);
          }
          for (
            var Wt = Ml.synthesis_rules || [], Ql = 0;
            Ql < Wt.length;
            Ql++
          ) {
            var Lh = a,
              Hf = Wt[Ql];
            if (
              Zx(Lh.eventName, tc, Hf.event_name_predicate, Hf.conditions || [])
            ) {
              var Mh = Hf.new_event_name;
              if (!JA(Mh)) {
                var Rl = Hf.merge_source_event_params ? nc(tc) : {};
                KA(Mh, Rl, Hf);
                var Xt = {},
                  Yt = { eventMetadata: ((Xt.syn_or_mod = !0), Xt) };
                if (zm[13]) {
                  var xC = vp(Lh.ja, Mh, Rl);
                  yp(xC, Lh.B.eventId, Yt);
                } else is(Mh, Rl, Lh.ja, Yt);
                HA(1);
              }
            }
          }
          if (St) {
            var Sl = {},
              Tl = {
                eventMetadata:
                  ((Sl.syn_or_mod = !0),
                  (Sl.is_external_event =
                    !!a.B.eventMetadata.is_external_event),
                  Sl),
              },
              Zt = hg();
            Zt && (Tl.eventMetadata.event_usage = Zt);
            if (zm[13]) {
              var yC = vp(a.ja, a.eventName, tc);
              yp(yC, a.B.eventId, Tl);
            } else is(a.eventName, tc, a.ja, Tl);
            a.abort();
          }
        }
      }
      vm(a);
      var Ul = a.metadata.event_usage;
      if (Ea(Ul)) for (var Vl = 0; Vl < Ul.length; Vl++) HA(Ul[Vl]);
      var $t = gg("GA4_EVENT");
      $t && (a.H._eu = $t);
      nC(a);
      var AC = this.th,
        au = this.h,
        Wl;
      var Xl = cB(a);
      Xl ? (ZA(Xl, a) || (ig(25), a.abort()), (Wl = Xl)) : (Wl = void 0);
      var BC = Wl,
        Nh;
      var Jc;
      Jc = RA ? a.H[P.g.wa] : a.aa[P.g.wa];
      au && Jc === au
        ? (Nh = Jc)
        : Jc
        ? ((Jc = "" + Jc),
          WA(Jc, a) || (ig(31), a.abort()),
          QA(Jc, Xi(P.g.U)),
          (Nh = Jc))
        : (ig(32), a.abort(), (Nh = ""));
      AC.call(this, { clientId: Nh, yh: BC });
      this.gk(a);
      if (a.Da()) {
        var CC = cC[1] ? a.metadata.is_conversion : a.xb;
        ("page_view" === a.eventName || CC) && dC(this, a);
      }
      this.D.Sf();
      this.xb = oC(a, this.xb);
      a.F(P.g.Ve) && ((a.H[P.g.Ve] = !0), bC(a, P.g.We)), rm(a, P.g.kg);
      this.Tg(a);
      a.B.onSuccess();
    } catch (IC) {
      a.B.onFailure();
    }
    delete eg.GA4_EVENT;
  };
  l.Tg = function (a) {
    this.oa.add(a);
  };
  l.th = function (a) {
    var b = a.clientId,
      c = a.yh;
    b && c && ((this.h = b), (this.C = c));
  };
  l.flush = function () {
    this.oa.flush();
  };
  l.gk = function (a) {
    var b = this;
    if (!this.T) {
      var c = Xi(P.g.U);
      Zi([P.g.U], function () {
        var d = Xi(P.g.U);
        if (c ^ d && b.s && b.C && b.h) {
          var e = b.h;
          if (d) {
            var f = !0;
            f = !1;
            var g = UA(b.s);
            if (g) {
              b.h = g;
              var h = $A(b.s);
              f || h ? (b.C = h) : ZA(b.C, b.s);
            } else WA(b.h, b.s), QA(b.h, !0), ZA(b.C, b.s);
            var k = {};
            k[P.g.Qe] = e;
            if (zm[13]) {
              var n = vp(b.I, P.g.Ac, k);
              yp(n, a.B.eventId, {});
            } else hs(P.g.Ac, k, b.I, { fromContainerExecution: !0 });
          } else {
            b.C = void 0;
            b.h = void 0;
            z.gaGlobal = {};
          }
          c = d;
        }
      });
      this.T = !0;
    }
  };
  l.yi = function (a) {
    a.eventName !== P.g.Va && this.D.xi(a);
  };
  var kC = function (a) {
      if (a.F(P.g.ug)) (a.h = !1), (a.metadata.euid_mode_enabled = !1);
      else {
        var b = function (c) {
          return (
            !!c &&
            ("auto_detect" === c.mode ||
              "selectors" === c.mode ||
              "code" === c.mode)
          );
        };
        cC[1]
          ? (a.metadata.euid_mode_enabled = b(a.getRemoteConfig(P.g.cc)))
          : (a.h = b(a.getRemoteConfig(P.g.cc)));
      }
    },
    jC = function (a) {
      if (cC[8]) {
        var b = function (c, d) {
          Dg[c] || (a.H[c] = d);
        };
        Ka(a.B.containerConfig, b);
        Ka(a.B.eventModel, b);
      }
    },
    lC = function (a) {
      var b = a.B.getKeysFromFirstOfAnyScope([
          P.g.Cc,
          P.g.xd,
          P.g.yd,
          P.g.zd,
          P.g.Ad,
          P.g.Bd,
          P.g.Cd,
        ]),
        c = function (d, e) {
          gC[d] && (a.H[d] = e);
        };
      mc(b[P.g.Cc])
        ? Ka(b[P.g.Cc], function (d, e) {
            c((P.g.Cc + "_" + d).toLowerCase(), e);
          })
        : Ka(b, c);
    },
    mC = function (a) {
      var b = function (c) {
        return !!c && c.conversion;
      };
      cC[1] ? (a.metadata.is_conversion = b(a.Lb())) : (a.xb = b(a.Lb()));
      if (cC[1] ? a.metadata.is_first_visit : a.fc)
        cC[1]
          ? (a.metadata.is_first_visit_conversion = b(a.Lb("first_visit")))
          : (a.Gg = b(a.Lb("first_visit")));
      if (cC[1] ? a.metadata.is_session_start : a.C)
        cC[1]
          ? (a.metadata.is_session_start_conversion = b(a.Lb("session_start")))
          : (a.Pg = b(a.Lb("session_start")));
    },
    nC = function (a) {
      var b = Object.keys(cC);
      if (b.length) {
        b.forEach(function (d) {
          cC[d] && fg("CCD", Number(d));
        });
        var c = gg("CCD");
        c && (a.df = "ccd." + c);
      }
    },
    oC = function (a, b) {
      var c = void 0;
      return c;
    };
  function iC(a) {
    Ka(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[P.g.Ra] || {};
    Ka(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var rC = function (a) {
      if ("prerender" == I.visibilityState) return !1;
      a();
      return !0;
    },
    zC = function (a) {
      if (!rC(a)) {
        var b = !1,
          c = function () {
            !b && rC(a) && ((b = !0), Rb(I, "visibilitychange", c), ig(55));
          };
        Qb(I, "visibilitychange", c);
        ig(54);
      }
    };
  var DC = function (a, b, c, d, e) {
      if (zm[13]) {
        var f = vp(a, b, d);
        e = e || {};
        yp(f, c, e);
      } else (e = e || {}), (e.fromContainerExecution = !0), hs(b, d, a, e);
    },
    EC = function (a, b, c, d, e) {
      if (zm[13]) {
        var f = vp(a, b, d);
        e = e || {};
        e.deferrable = !0;
        yp(f, c, e);
      } else
        (e = e || {}),
          (e.deferrable = !0),
          (e.fromContainerExecution = !0),
          hs(b, d, a, e);
    },
    GC = function (a, b, c) {
      var d = new hC(a, b);
      zC(function () {
        FC(a, d, c);
      });
    };
  function FC(a, b, c) {
    var d = b.D,
      e = { eventId: c };
    gs(a, function (f, g, h, k) {
      b.Mj(g, h, k);
    });
    d.Rj(function () {
      es().flush();
      1e3 <= d.je() &&
        Eb.sendBeacon &&
        (zm[13] ? hs(P.g.Ac, {}, a, e) : DC(a, P.g.Ac, c, {}));
      FA = !0;
      b.flush();
      d.vh(function () {
        FA = !1;
        d.vh();
      });
    });
  }
  var X = { m: {} };

  (X.m.read_container_data = ["google"]),
    (function () {
      (function (a) {
        X.__read_container_data = a;
        X.__read_container_data.o = "read_container_data";
        X.__read_container_data.isVendorTemplate = !0;
        X.__read_container_data.priorityOverride = 0;
      })(function () {
        return {
          assert: function () {},
          Z: function () {
            return {};
          },
        };
      });
    })();
  (X.m.c = ["google"]),
    (function () {
      (function (a) {
        X.__c = a;
        X.__c.o = "c";
        X.__c.isVendorTemplate = !0;
        X.__c.priorityOverride = 0;
      })(function (a) {
        Su(a.vtp_value, "c", a.vtp_gtmEventId);
        return a.vtp_value;
      });
    })();
  (X.m.e = ["google"]),
    (function () {
      (function (a) {
        X.__e = a;
        X.__e.o = "e";
        X.__e.isVendorTemplate = !0;
        X.__e.priorityOverride = 0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (X.m.listen_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { eventName: c };
      }
      (function (b) {
        X.__listen_data_layer = b;
        X.__listen_data_layer.o = "listen_data_layer";
        X.__listen_data_layer.isVendorTemplate = !0;
        X.__listen_data_layer.priorityOverride = 0;
      })(function (b) {
        var c = b.vtp_accessType,
          d = b.vtp_allowedEvents || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!m(g))
              throw e(f, { eventName: g }, "Event name must be a string.");
            if (!("any" === c || ("specific" === c && 0 <= d.indexOf(g))))
              throw e(
                f,
                { eventName: g },
                "Prohibited listen on data layer event."
              );
          },
          Z: a,
        };
      });
    })();

  (X.m.v = ["google"]),
    (function () {
      (function (a) {
        X.__v = a;
        X.__v.o = "v";
        X.__v.isVendorTemplate = !0;
        X.__v.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Ku(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Su(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();
  (X.m.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        X.__get_url = b;
        X.__get_url.o = "get_url";
        X.__get_url.isVendorTemplate = !0;
        X.__get_url.priorityOverride = 0;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!m(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!m(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          Z: a,
        };
      });
    })();

  (X.m.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        X.__process_dom_events = b;
        X.__process_dom_events.o = "process_dom_events";
        X.__process_dom_events.isVendorTemplate = !0;
        X.__process_dom_events.priorityOverride = 0;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (h, k, n) {
            if (!e[k]) throw d(h, {}, "Prohibited event target " + k + ".");
            if (-1 === e[k].indexOf(n))
              throw d(
                h,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          Z: a,
        };
      });
    })();

  (X.m.gct = ["google"]),
    (function () {
      function a(e) {
        for (var f = [], g = 0; g < e.length; g++)
          try {
            f.push(new RegExp(e[g]));
          } catch (h) {}
        return f;
      }
      function b(e) {
        return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
      }
      function c(e) {
        for (var f = [], g = 0; g < e.length; g++) {
          var h = e[g].matchValue,
            k;
          switch (e[g].matchType) {
            case "BEGINS_WITH":
              k = "^" + b(h);
              break;
            case "ENDS_WITH":
              k = b(h) + "$";
              break;
            case "EQUALS":
              k = "^" + b(h) + "$";
              break;
            case "REGEX":
              k = h;
              break;
            default:
              k = b(h);
          }
          f.push(k);
        }
        return f;
      }
      var d = !1;
      d = !0;
      (function (e) {
        X.__gct = e;
        X.__gct.o = "gct";
        X.__gct.isVendorTemplate = !0;
        X.__gct.priorityOverride = 0;
      })(function (e) {
        var f = {},
          g = e.vtp_sessionDuration;
        0 < g && (f[P.g.Jc] = g);
        f[P.g.Fd] = e.vtp_eventSettings;
        f[P.g.Je] = e.vtp_dynamicEventSettings;
        f[P.g.ob] = 1 === e.vtp_googleSignals;
        f[P.g.Id] = e.vtp_foreignTld;
        f[P.g.Gc] = 1 === e.vtp_restrictDomain;
        f[P.g.Se] = e.vtp_internalTrafficResults;
        var h = P.g.Aa,
          k = e.vtp_linker;
        k && k[P.g.V] && (k[P.g.V] = a(k[P.g.V]));
        f[h] = k;
        var n = P.g.Md,
          p = e.vtp_referralExclusionDefinition;
        p &&
          p.include_conditions &&
          (p.include_conditions = a(p.include_conditions));
        f[n] = p;
        var q = e.vtp_trackingId,
          r = ls(q),
          t = r.referral_exclusion_conditions;
        t &&
          (t.length && "object" === typeof t[0] && (t = c(t)),
          (f[P.g.Md] = { include_conditions: a(t) }));
        var u = r.cross_domain_conditions;
        if (u) {
          u.length && "object" === typeof u[0] && (u = c(u));
          var v = {};
          f[P.g.Aa] =
            ((v[P.g.V] = a(u)),
            (v[P.g.bc] = !0),
            (v[P.g.ac] = !0),
            (v[P.g.Hc] = "query"),
            v);
        }
        GC(q, f, e.vtp_gtmEventId);
        if (d) {
          var x = Ej();
          es(!0).notifyContainerLoaded(q, x);
        }
        J(e.vtp_gtmOnSuccess);
      });
    })();

  (X.m.get = ["google"]),
    (function () {
      (function (a) {
        X.__get = a;
        X.__get.o = "get";
        X.__get.isVendorTemplate = !0;
        X.__get.priorityOverride = 0;
      })(function (a) {
        var b = a.vtp_settings,
          c = b.eventParameters || {},
          d = String(a.vtp_eventName),
          e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        (a.vtp_deferrable ? EC : DC)(String(b.streamId), d, e.eventId, c, e);
        a.vtp_gtmOnSuccess();
      });
    })();

  var HC = {};
  HC.dataLayer = kh;
  HC.callback = function (a) {
    bh.hasOwnProperty(a) && Ca(bh[a]) && bh[a]();
    delete bh[a];
  };
  HC.bootstrap = 0;
  HC._spx = !1;
  (function (a) {
    if (!z["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (I.referrer) {
        var c = Th(I.referrer);
        b = "cct.google" === Qh(c, "host");
      }
      if (!b) {
        var d = ij("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((z["__TAGGY_INSTALLED"] = !0),
        Lb("https://cct.google/taggy/agent.js"));
    }
    var f = function (q) {
        var r = "GTM",
          t = "GTM";
        (r = "OGT"), (t = "GTAG");
        var u = z["google.tagmanager.debugui2.queue"];
        u ||
          ((u = []),
          (z["google.tagmanager.debugui2.queue"] = u),
          Lb(
            "https://" +
              Rg.yc +
              "/debug/bootstrap?id=" +
              Ge.J +
              "&src=" +
              t +
              "&cond=" +
              q +
              "&gtm=" +
              Lj()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: { scriptSource: Fb, containerProduct: r, debug: !1, id: Ge.J },
        };
        v.data.resume = function () {
          a();
        };
        Rg.Mh && (v.data.initialPublish = !0);
        u.push(v);
      },
      g = void 0,
      h = Rh(z.location, "query", !1, void 0, "gtm_debug");
    bu(h) && (g = 2);
    if (!g && I.referrer) {
      var k = Th(I.referrer);
      "tagassistant.google.com" === Qh(k, "host") && (g = 3);
    }
    if (!g) {
      var n = ij("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var p = I.documentElement.getAttribute("data-tag-assistant-present");
      bu(p) && (g = 5);
    }
    g && Fb ? f(g) : a();
  })(function () {
    var a = !1;
    a && Uo("INIT");
    yi().s();
    ik();
    al.enable_gbraid_cookie_write = !0;
    var b = !!S[Ge.J];
    !b && Ge.xc && (b = !!S["ctid_" + Ge.xc]);
    if (b) {
      var c = S.zones;
      c && c.unregisterChild(Dj());
    } else {
      for (var d = Ej(), e = 0; e < d.length; e++) {
        var f = d[e],
          g = Ge.J;
        S.addDestinationToContainer
          ? S.addDestinationToContainer(f, g)
          : ((S.pendingDestinationIds = S.pendingDestinationIds || []),
            S.pendingDestinationIds.push([f, g]));
      }
      for (
        var h = data.resource || {}, k = h.macros || [], n = 0;
        n < k.length;
        n++
      )
        fe.push(k[n]);
      for (var p = h.tags || [], q = 0; q < p.length; q++) ie.push(p[q]);
      for (var r = h.predicates || [], t = 0; t < r.length; t++) he.push(r[t]);
      for (var u = h.rules || [], v = 0; v < u.length; v++) {
        for (var x = u[v], y = {}, w = 0; w < x.length; w++)
          y[x[w][0]] = Array.prototype.slice.call(x[w], 1);
        ge.push(y);
      }
      ke = X;
      le = Bv;
      Ke = new Je();
      var A = data.sandboxed_scripts,
        B = data.security_groups,
        C = data.runtime || [],
        E = data.runtime_lines;
      iz = new Gd();
      lz();
      ee = jz();
      var F = iz,
        D = fz();
      jb(F.h, "require", D);
      for (var O = 0; O < C.length; O++) {
        var N = C[O];
        if (!Ea(N) || 3 > N.length) {
          if (0 === N.length) continue;
          break;
        }
        E && E[O] && E[O].length && ve(N, E[O]);
        iz.execute(N);
      }
      if (void 0 !== A)
        for (var R = ["sandboxedScripts"], Z = 0; Z < A.length; Z++) {
          var Q = A[Z].replace(/^_*/, "");
          ch[Q] = R;
        }
      mz(B);
      S[Ge.J] = HC;
      Ge.xc && (S["ctid_" + Ge.xc] = HC);
      for (var K = Gj(), Y = Dj(), ba = 0; ba < Y.length; ba++)
        K.container[Y[ba]] = !0;
      for (var T = Ej(), oa = 0; oa < T.length; oa++) K.destination[T[oa]] = !0;
      K.canonical[Ge.xc] = !0;
      Ua(ch, X.m);
      ne = Ce;
      Ct();
      Eo = !1;
      Fo = 0;
      if (
        ("interactive" == I.readyState && !I.createEventObject) ||
        "complete" == I.readyState
      )
        Ho();
      else {
        Qb(I, "DOMContentLoaded", Ho);
        Qb(I, "readystatechange", Ho);
        if (I.createEventObject && I.documentElement.doScroll) {
          var ua = !0;
          try {
            ua = !z.frameElement;
          } catch (Mb) {}
          ua && Io();
        }
        Qb(z, "load", Ho);
      }
      Rs = !1;
      "complete" === I.readyState ? Ts() : Qb(z, "load", Ts);
      wo();
      ah = Ra();
      HC.bootstrap = ah;
      if (a) {
        var sc = Vo("INIT");
      }
    }
  });
})();
