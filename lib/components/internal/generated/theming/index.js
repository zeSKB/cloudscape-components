export var preset = {
  "theme": {
    "id": "classic",
    "selector": ":root",
    "modes": {
      "color": {
        "id": "color",
        "states": {
          "light": {
            "default": true
          },
          "dark": {
            "selector": ".awsui-dark-mode",
            "media": "not print"
          }
        }
      },
      "density": {
        "id": "density",
        "states": {
          "comfortable": {
            "default": true
          },
          "compact": {
            "selector": ".awsui-compact-mode"
          }
        }
      },
      "motion": {
        "id": "motion",
        "states": {
          "default": {
            "default": true
          },
          "disabled": {
            "selector": ".awsui-motion-disabled"
          }
        }
      }
    },
    "tokens": {
      "colorAmazonOrange": "#ff9900",
      "colorAwsSquidInk": "#232f3e",
      "colorBlack": "#000000",
      "colorBlue100": "#f1faff",
      "colorBlue200": "#d3e7f9",
      "colorBlue300": "#99cbe4",
      "colorBlue400": "#44b9d6",
      "colorBlue500": "#00a1c9",
      "colorBlue600": "#0073bb",
      "colorBlue700": "#0a4a74",
      "colorBlue800": "#033160",
      "colorBlue900": "#12293b",
      "colorBlueOpaque": "rgba(51, 136, 221, 0.5)",
      "colorGreen100": "#f2f8f0",
      "colorGreen500": "#6aaf35",
      "colorGreen600": "#1d8102",
      "colorGreen700": "#1a520f",
      "colorGreen900": "#172211",
      "colorGrey100": "#fafafa",
      "colorGrey125": "#f8f8f8",
      "colorGrey150": "#f2f3f3",
      "colorGrey200": "#eaeded",
      "colorGrey300": "#d5dbdb",
      "colorGrey400": "#aab7b8",
      "colorGrey450": "#95a5a6",
      "colorGrey500": "#879596",
      "colorGrey550": "#687078",
      "colorGrey600": "#545b64",
      "colorGrey650": "#414750",
      "colorGrey700": "#2a2e33",
      "colorGrey750": "#21252c",
      "colorGrey800": "#1a2029",
      "colorGrey900": "#16191f",
      "colorGrey950": "#222222",
      "colorOrange100": "#fef6f0",
      "colorOrange500": "#ec7211",
      "colorOrange600": "#eb5f07",
      "colorOrange700": "#dd6b10",
      "colorRed100": "#fdf3f1",
      "colorRed500": "#ff5d64",
      "colorRed600": "#d13212",
      "colorRed700": "#7c2718",
      "colorRed900": "#270a11",
      "colorTransparent": "transparent",
      "colorWhite": "#ffffff",
      "colorChartsRed300": {
        "light": "#ea7158",
        "dark": "#d63f38"
      },
      "colorChartsRed400": {
        "light": "#dc5032",
        "dark": "#ed5958"
      },
      "colorChartsRed500": {
        "light": "#d13313",
        "dark": "#fe6e73"
      },
      "colorChartsRed600": {
        "light": "#ba2e0f",
        "dark": "#ff8a8a"
      },
      "colorChartsRed700": {
        "light": "#a82a0c",
        "dark": "#ffa09e"
      },
      "colorChartsRed800": {
        "light": "#972709",
        "dark": "#ffb3b0"
      },
      "colorChartsRed900": {
        "light": "#892407",
        "dark": "#ffc4c0"
      },
      "colorChartsRed1000": {
        "light": "#7d2105",
        "dark": "#ffd2cf"
      },
      "colorChartsRed1100": {
        "light": "#721e03",
        "dark": "#ffe0dd"
      },
      "colorChartsRed1200": {
        "light": "#671c00",
        "dark": "#ffecea"
      },
      "colorChartsOrange300": {
        "light": "#e07941",
        "dark": "#c55305"
      },
      "colorChartsOrange400": {
        "light": "#cc5f21",
        "dark": "#de6923"
      },
      "colorChartsOrange500": {
        "light": "#bc4d01",
        "dark": "#f27c36"
      },
      "colorChartsOrange600": {
        "light": "#a84401",
        "dark": "#f89256"
      },
      "colorChartsOrange700": {
        "light": "#983c02",
        "dark": "#fca572"
      },
      "colorChartsOrange800": {
        "light": "#8a3603",
        "dark": "#ffb68b"
      },
      "colorChartsOrange900": {
        "light": "#7e3103",
        "dark": "#ffc6a4"
      },
      "colorChartsOrange1000": {
        "light": "#732c02",
        "dark": "#ffd4bb"
      },
      "colorChartsOrange1100": {
        "light": "#692801",
        "dark": "#ffe1cf"
      },
      "colorChartsOrange1200": {
        "light": "#602400",
        "dark": "#ffede2"
      },
      "colorChartsYellow300": {
        "light": "#b2911c",
        "dark": "#977001"
      },
      "colorChartsYellow400": {
        "light": "#9c7b0b",
        "dark": "#b08400"
      },
      "colorChartsYellow500": {
        "light": "#8a6b05",
        "dark": "#c59600"
      },
      "colorChartsYellow600": {
        "light": "#7b5f04",
        "dark": "#d3a61c"
      },
      "colorChartsYellow700": {
        "light": "#6f5504",
        "dark": "#dfb52c"
      },
      "colorChartsYellow800": {
        "light": "#654d03",
        "dark": "#eac33a"
      },
      "colorChartsYellow900": {
        "light": "#5d4503",
        "dark": "#f1cf65"
      },
      "colorChartsYellow1000": {
        "light": "#553f03",
        "dark": "#f7db8a"
      },
      "colorChartsYellow1100": {
        "light": "#4d3901",
        "dark": "#fce5a8"
      },
      "colorChartsYellow1200": {
        "light": "#483300",
        "dark": "#ffefc9"
      },
      "colorChartsGreen300": {
        "light": "#67a353",
        "dark": "#48851a"
      },
      "colorChartsGreen400": {
        "light": "#41902c",
        "dark": "#5a9b29"
      },
      "colorChartsGreen500": {
        "light": "#1f8104",
        "dark": "#69ae34"
      },
      "colorChartsGreen600": {
        "light": "#1a7302",
        "dark": "#7dbd4c"
      },
      "colorChartsGreen700": {
        "light": "#176702",
        "dark": "#8fca61"
      },
      "colorChartsGreen800": {
        "light": "#145d02",
        "dark": "#9fd673"
      },
      "colorChartsGreen900": {
        "light": "#125502",
        "dark": "#b2df8d"
      },
      "colorChartsGreen1000": {
        "light": "#104d01",
        "dark": "#c5e7a8"
      },
      "colorChartsGreen1100": {
        "light": "#0f4601",
        "dark": "#d5efbe"
      },
      "colorChartsGreen1200": {
        "light": "#0d4000",
        "dark": "#e4f7d5"
      },
      "colorChartsTeal300": {
        "light": "#2ea597",
        "dark": "#018977"
      },
      "colorChartsTeal400": {
        "light": "#1c8e81",
        "dark": "#009d89"
      },
      "colorChartsTeal500": {
        "light": "#0d7d70",
        "dark": "#00b09b"
      },
      "colorChartsTeal600": {
        "light": "#096f64",
        "dark": "#40bfa9"
      },
      "colorChartsTeal700": {
        "light": "#06645a",
        "dark": "#5fccb7"
      },
      "colorChartsTeal800": {
        "light": "#045b52",
        "dark": "#77d7c3"
      },
      "colorChartsTeal900": {
        "light": "#03524a",
        "dark": "#94e0d0"
      },
      "colorChartsTeal1000": {
        "light": "#014b44",
        "dark": "#ace9db"
      },
      "colorChartsTeal1100": {
        "light": "#01443e",
        "dark": "#c2f0e6"
      },
      "colorChartsTeal1200": {
        "light": "#003e38",
        "dark": "#d7f7f0"
      },
      "colorChartsBlue1300": {
        "light": "#529ccb",
        "dark": "#00819c"
      },
      "colorChartsBlue1400": {
        "light": "#3184c2",
        "dark": "#0497ba"
      },
      "colorChartsBlue1500": {
        "light": "#0273bb",
        "dark": "#08aad2"
      },
      "colorChartsBlue1600": {
        "light": "#0166ab",
        "dark": "#44b9dd"
      },
      "colorChartsBlue1700": {
        "light": "#015b9d",
        "dark": "#63c6e7"
      },
      "colorChartsBlue1800": {
        "light": "#015292",
        "dark": "#79d2f0"
      },
      "colorChartsBlue1900": {
        "light": "#014a87",
        "dark": "#98dcf5"
      },
      "colorChartsBlue11000": {
        "light": "#01437d",
        "dark": "#b3e4f8"
      },
      "colorChartsBlue11100": {
        "light": "#003c75",
        "dark": "#caedfc"
      },
      "colorChartsBlue11200": {
        "light": "#00366d",
        "dark": "#ddf4ff"
      },
      "colorChartsBlue2300": {
        "light": "#688ae8",
        "dark": "#486de8"
      },
      "colorChartsBlue2400": {
        "light": "#5978e3",
        "dark": "#6384f5"
      },
      "colorChartsBlue2500": {
        "light": "#4066df",
        "dark": "#7698fe"
      },
      "colorChartsBlue2600": {
        "light": "#3759ce",
        "dark": "#8ea9ff"
      },
      "colorChartsBlue2700": {
        "light": "#314fbf",
        "dark": "#a2b8ff"
      },
      "colorChartsBlue2800": {
        "light": "#2c46b1",
        "dark": "#b1c5ff"
      },
      "colorChartsBlue2900": {
        "light": "#273ea5",
        "dark": "#c3d1ff"
      },
      "colorChartsBlue21000": {
        "light": "#23379b",
        "dark": "#d2dcff"
      },
      "colorChartsBlue21100": {
        "light": "#1f3191",
        "dark": "#dfe6ff"
      },
      "colorChartsBlue21200": {
        "light": "#1b2b88",
        "dark": "#ecf0ff"
      },
      "colorChartsPurple300": {
        "light": "#a783e1",
        "dark": "#8d59de"
      },
      "colorChartsPurple400": {
        "light": "#9469d6",
        "dark": "#a173ea"
      },
      "colorChartsPurple500": {
        "light": "#8456ce",
        "dark": "#b088f5"
      },
      "colorChartsPurple600": {
        "light": "#7749bf",
        "dark": "#bf9bf9"
      },
      "colorChartsPurple700": {
        "light": "#6b40b2",
        "dark": "#cbabfc"
      },
      "colorChartsPurple800": {
        "light": "#6237a7",
        "dark": "#d6baff"
      },
      "colorChartsPurple900": {
        "light": "#59309d",
        "dark": "#dfc8ff"
      },
      "colorChartsPurple1000": {
        "light": "#512994",
        "dark": "#e8d5ff"
      },
      "colorChartsPurple1100": {
        "light": "#4a238b",
        "dark": "#efe2ff"
      },
      "colorChartsPurple1200": {
        "light": "#431d84",
        "dark": "#f5edff"
      },
      "colorChartsPink300": {
        "light": "#da7596",
        "dark": "#c64a70"
      },
      "colorChartsPink400": {
        "light": "#ce567c",
        "dark": "#d56889"
      },
      "colorChartsPink500": {
        "light": "#c33d69",
        "dark": "#e07f9d"
      },
      "colorChartsPink600": {
        "light": "#b1325c",
        "dark": "#eb92ad"
      },
      "colorChartsPink700": {
        "light": "#a32952",
        "dark": "#f5a2bb"
      },
      "colorChartsPink800": {
        "light": "#962249",
        "dark": "#ffb0c8"
      },
      "colorChartsPink900": {
        "light": "#8b1b42",
        "dark": "#ffc1d4"
      },
      "colorChartsPink1000": {
        "light": "#81143b",
        "dark": "#ffd1de"
      },
      "colorChartsPink1100": {
        "light": "#780d35",
        "dark": "#ffdfe8"
      },
      "colorChartsPink1200": {
        "light": "#6f062f",
        "dark": "#ffecf1"
      },
      "colorChartsStatusCritical": {
        "light": "{colorChartsRed1000}",
        "dark": "{colorChartsRed300}"
      },
      "colorChartsStatusHigh": {
        "light": "{colorChartsRed600}",
        "dark": "{colorChartsRed500}"
      },
      "colorChartsStatusMedium": {
        "light": "{colorChartsOrange400}",
        "dark": "{colorChartsOrange600}"
      },
      "colorChartsStatusLow": {
        "light": "{colorChartsYellow300}",
        "dark": "{colorChartsYellow700}"
      },
      "colorChartsStatusPositive": {
        "light": "{colorChartsGreen300}",
        "dark": "{colorChartsGreen500}"
      },
      "colorChartsStatusInfo": {
        "light": "{colorChartsBlue1400}",
        "dark": "{colorChartsBlue1500}"
      },
      "colorChartsStatusNeutral": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorChartsThresholdNegative": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorChartsThresholdPositive": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen500}"
      },
      "colorChartsThresholdInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorChartsThresholdNeutral": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorChartsLineGrid": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorChartsLineTick": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorChartsLineAxis": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorChartsPaletteCategorical1": {
        "light": "{colorChartsBlue2300}",
        "dark": "{colorChartsBlue2300}"
      },
      "colorChartsPaletteCategorical2": {
        "light": "{colorChartsPink500}",
        "dark": "{colorChartsPink500}"
      },
      "colorChartsPaletteCategorical3": {
        "light": "{colorChartsTeal300}",
        "dark": "{colorChartsTeal300}"
      },
      "colorChartsPaletteCategorical4": {
        "light": "{colorChartsPurple500}",
        "dark": "{colorChartsPurple500}"
      },
      "colorChartsPaletteCategorical5": {
        "light": "{colorChartsOrange300}",
        "dark": "{colorChartsOrange300}"
      },
      "colorChartsPaletteCategorical6": {
        "light": "{colorChartsBlue2600}",
        "dark": "{colorChartsBlue2600}"
      },
      "colorChartsPaletteCategorical7": {
        "light": "{colorChartsPink800}",
        "dark": "{colorChartsPink800}"
      },
      "colorChartsPaletteCategorical8": {
        "light": "{colorChartsTeal600}",
        "dark": "{colorChartsTeal600}"
      },
      "colorChartsPaletteCategorical9": {
        "light": "{colorChartsPurple800}",
        "dark": "{colorChartsPurple800}"
      },
      "colorChartsPaletteCategorical10": {
        "light": "{colorChartsOrange600}",
        "dark": "{colorChartsOrange600}"
      },
      "colorChartsPaletteCategorical11": {
        "light": "{colorChartsBlue2900}",
        "dark": "{colorChartsBlue2900}"
      },
      "colorChartsPaletteCategorical12": {
        "light": "{colorChartsPink1100}",
        "dark": "{colorChartsPink1100}"
      },
      "colorChartsPaletteCategorical13": {
        "light": "{colorChartsTeal900}",
        "dark": "{colorChartsTeal900}"
      },
      "colorChartsPaletteCategorical14": {
        "light": "{colorChartsPurple1100}",
        "dark": "{colorChartsPurple1100}"
      },
      "colorChartsPaletteCategorical15": {
        "light": "{colorChartsOrange900}",
        "dark": "{colorChartsOrange900}"
      },
      "colorChartsPaletteCategorical16": {
        "light": "{colorChartsBlue21200}",
        "dark": "{colorChartsBlue21200}"
      },
      "colorChartsPaletteCategorical17": {
        "light": "{colorChartsPink400}",
        "dark": "{colorChartsPink400}"
      },
      "colorChartsPaletteCategorical18": {
        "light": "{colorChartsTeal1200}",
        "dark": "{colorChartsTeal1200}"
      },
      "colorChartsPaletteCategorical19": {
        "light": "{colorChartsPurple400}",
        "dark": "{colorChartsPurple400}"
      },
      "colorChartsPaletteCategorical20": {
        "light": "{colorChartsOrange1200}",
        "dark": "{colorChartsOrange1200}"
      },
      "colorChartsPaletteCategorical21": {
        "light": "{colorChartsBlue2500}",
        "dark": "{colorChartsBlue2500}"
      },
      "colorChartsPaletteCategorical22": {
        "light": "{colorChartsPink700}",
        "dark": "{colorChartsPink700}"
      },
      "colorChartsPaletteCategorical23": {
        "light": "{colorChartsTeal500}",
        "dark": "{colorChartsTeal500}"
      },
      "colorChartsPaletteCategorical24": {
        "light": "{colorChartsPurple700}",
        "dark": "{colorChartsPurple700}"
      },
      "colorChartsPaletteCategorical25": {
        "light": "{colorChartsOrange500}",
        "dark": "{colorChartsOrange500}"
      },
      "colorChartsPaletteCategorical26": {
        "light": "{colorChartsBlue2800}",
        "dark": "{colorChartsBlue2800}"
      },
      "colorChartsPaletteCategorical27": {
        "light": "{colorChartsPink1000}",
        "dark": "{colorChartsPink1000}"
      },
      "colorChartsPaletteCategorical28": {
        "light": "{colorChartsTeal800}",
        "dark": "{colorChartsTeal800}"
      },
      "colorChartsPaletteCategorical29": {
        "light": "{colorChartsPurple1000}",
        "dark": "{colorChartsPurple1000}"
      },
      "colorChartsPaletteCategorical30": {
        "light": "{colorChartsOrange800}",
        "dark": "{colorChartsOrange800}"
      },
      "colorChartsPaletteCategorical31": {
        "light": "{colorChartsBlue21100}",
        "dark": "{colorChartsBlue21100}"
      },
      "colorChartsPaletteCategorical32": {
        "light": "{colorChartsPink300}",
        "dark": "{colorChartsPink300}"
      },
      "colorChartsPaletteCategorical33": {
        "light": "{colorChartsTeal1100}",
        "dark": "{colorChartsTeal1100}"
      },
      "colorChartsPaletteCategorical34": {
        "light": "{colorChartsPurple300}",
        "dark": "{colorChartsPurple300}"
      },
      "colorChartsPaletteCategorical35": {
        "light": "{colorChartsOrange1100}",
        "dark": "{colorChartsOrange1100}"
      },
      "colorChartsPaletteCategorical36": {
        "light": "{colorChartsBlue2400}",
        "dark": "{colorChartsBlue2400}"
      },
      "colorChartsPaletteCategorical37": {
        "light": "{colorChartsPink600}",
        "dark": "{colorChartsPink600}"
      },
      "colorChartsPaletteCategorical38": {
        "light": "{colorChartsTeal400}",
        "dark": "{colorChartsTeal400}"
      },
      "colorChartsPaletteCategorical39": {
        "light": "{colorChartsPurple600}",
        "dark": "{colorChartsPurple600}"
      },
      "colorChartsPaletteCategorical40": {
        "light": "{colorChartsOrange400}",
        "dark": "{colorChartsOrange400}"
      },
      "colorChartsPaletteCategorical41": {
        "light": "{colorChartsBlue2700}",
        "dark": "{colorChartsBlue2700}"
      },
      "colorChartsPaletteCategorical42": {
        "light": "{colorChartsPink900}",
        "dark": "{colorChartsPink900}"
      },
      "colorChartsPaletteCategorical43": {
        "light": "{colorChartsTeal700}",
        "dark": "{colorChartsTeal700}"
      },
      "colorChartsPaletteCategorical44": {
        "light": "{colorChartsPurple900}",
        "dark": "{colorChartsPurple900}"
      },
      "colorChartsPaletteCategorical45": {
        "light": "{colorChartsOrange700}",
        "dark": "{colorChartsOrange700}"
      },
      "colorChartsPaletteCategorical46": {
        "light": "{colorChartsBlue21000}",
        "dark": "{colorChartsBlue21000}"
      },
      "colorChartsPaletteCategorical47": {
        "light": "{colorChartsPink1200}",
        "dark": "{colorChartsPink1200}"
      },
      "colorChartsPaletteCategorical48": {
        "light": "{colorChartsTeal1000}",
        "dark": "{colorChartsTeal1000}"
      },
      "colorChartsPaletteCategorical49": {
        "light": "{colorChartsPurple1200}",
        "dark": "{colorChartsPurple1200}"
      },
      "colorChartsPaletteCategorical50": {
        "light": "{colorChartsOrange1000}",
        "dark": "{colorChartsOrange1000}"
      },
      "colorGreyOpaque25": {
        "light": "rgba(255, 255, 255, 0.25)",
        "dark": "rgba(255, 255, 255, 0.25)"
      },
      "colorGreyOpaque40": {
        "light": "rgba(0, 0, 0, 0.4)",
        "dark": "rgba(0, 0, 0, 0.4)"
      },
      "colorGreyOpaque50": {
        "light": "rgba(0, 0, 0, 0.5)",
        "dark": "rgba(0, 0, 0, 0.5)"
      },
      "colorGreyOpaque70": {
        "light": "rgba(255, 255, 255, 0.7)",
        "dark": "rgba(255, 255, 255, 0.7)"
      },
      "colorGreyOpaque80": {
        "light": "rgba(22, 25, 31, 0.8)",
        "dark": "rgba(22, 25, 31, 0.8)"
      },
      "colorGreyOpaque90": {
        "light": "rgba(242, 243, 243, 0.9)",
        "dark": "rgba(242, 243, 243, 0.9)"
      },
      "colorGreyTransparent": {
        "light": "rgba(0, 28, 36, 0.3)",
        "dark": "rgba(0, 0, 0, 0.3)"
      },
      "colorGreyTransparentHeavy": {
        "light": "rgba(0, 28, 36, 0.5)",
        "dark": "rgba(0, 0, 0, 0.5)"
      },
      "colorGreyTransparentLight": {
        "light": "rgba(0, 28, 36, 0.15)",
        "dark": "rgba(0, 0, 0, 0.3)"
      },
      "colorBackgroundButtonLinkActive": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundButtonLinkHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundButtonNormalActive": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundButtonNormalDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundButtonNormalDisabled": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundButtonNormalHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundButtonPrimaryActive": {
        "light": "{colorBlue900}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundButtonPrimaryDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundButtonPrimaryDisabled": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundButtonPrimaryHover": {
        "light": "{colorBlue700}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundCalendarToday": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundCellShaded": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundCodeEditorGutterActiveLineDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBackgroundCodeEditorGutterActiveLineError": {
        "light": "{colorTextStatusError}",
        "dark": "{colorTextStatusError}"
      },
      "colorBackgroundCodeEditorGutterDefault": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundCodeEditorLoading": {
        "light": "{colorBackgroundCodeEditorStatusBar}",
        "dark": "{colorBackgroundCodeEditorStatusBar}"
      },
      "colorBackgroundCodeEditorPaneItemHover": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundCodeEditorStatusBar": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundContainerContent": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundContainerHeader": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundControlChecked": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundControlDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundControlDisabled": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundDropdownItemDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundDropdownItemDimmed": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBackgroundDropdownItemFilterMatch": {
        "light": "{colorBlue100}",
        "dark": "{colorBlue900}"
      },
      "colorBackgroundDropdownItemHover": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundDropdownItemSelected": {
        "light": "{colorBackgroundItemSelected}",
        "dark": "{colorBackgroundItemSelected}"
      },
      "colorBackgroundHomeHeader": {
        "light": "{colorBlack}",
        "dark": "{colorBlack}"
      },
      "colorBackgroundInputDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundInputDisabled": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundItemSelected": {
        "light": "{colorBlue100}",
        "dark": "{colorBlue900}"
      },
      "colorBackgroundLayoutMain": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundLayoutMobilePanel": {
        "light": "{colorBackgroundLayoutPanelContent}",
        "dark": "{colorBackgroundLayoutPanelContent}"
      },
      "colorBackgroundLayoutPanelContent": {
        "light": "{colorBackgroundContainerContent}",
        "dark": "{colorBackgroundContainerContent}"
      },
      "colorBackgroundLayoutPanelHover": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundLayoutToggleActive": {
        "light": "{colorGrey700}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundLayoutToggleDefault": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBackgroundLayoutToggleHover": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey600}"
      },
      "colorBackgroundLayoutToggleSelectedActive": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundLayoutToggleSelectedDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundLayoutToggleSelectedHover": {
        "light": "{colorBlue700}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundModalOverlay": {
        "light": "{colorGreyOpaque90}",
        "dark": "{colorGreyOpaque80}"
      },
      "colorBackgroundNotificationBlue": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue600}"
      },
      "colorBackgroundNotificationGreen": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen600}"
      },
      "colorBackgroundNotificationGrey": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey550}"
      },
      "colorBackgroundNotificationRed": {
        "light": "{colorRed600}",
        "dark": "{colorRed600}"
      },
      "colorBackgroundNotificationStackBar": {
        "light": "{colorGrey700}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundNotificationStackBarActive": {
        "light": "{colorGrey700}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundNotificationStackBarHover": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey600}"
      },
      "colorBackgroundPopover": {
        "light": "{colorWhite}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundProgressBarContentDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundProgressBarContentInFlash": {
        "light": "{colorGreyOpaque70}",
        "dark": "{colorGrey100}"
      },
      "colorBackgroundProgressBarLayoutDefault": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundProgressBarLayoutInFlash": {
        "light": "{colorGreyOpaque25}",
        "dark": "{colorGreyOpaque25}"
      },
      "colorBackgroundSegmentActive": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundSegmentDefault": {
        "light": "{colorBackgroundButtonNormalDefault}",
        "dark": "{colorBackgroundButtonNormalDefault}"
      },
      "colorBackgroundSegmentDisabled": {
        "light": "{colorBackgroundButtonNormalDisabled}",
        "dark": "{colorBackgroundButtonNormalDisabled}"
      },
      "colorBackgroundSegmentHover": {
        "light": "{colorBackgroundButtonNormalDefault}",
        "dark": "{colorBackgroundButtonNormalDefault}"
      },
      "colorBackgroundStatusError": {
        "light": "{colorRed100}",
        "dark": "{colorRed900}"
      },
      "colorBackgroundStatusInfo": {
        "light": "{colorBlue100}",
        "dark": "{colorBlue900}"
      },
      "colorBackgroundStatusSuccess": {
        "light": "{colorGreen100}",
        "dark": "{colorGreen900}"
      },
      "colorBackgroundStatusWarning": {
        "light": "{colorWhite}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundTableHeader": {
        "light": "{colorBackgroundContainerHeader}",
        "dark": "{colorBackgroundContainerHeader}"
      },
      "colorBackgroundTilesDisabled": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundToggleCheckedDisabled": {
        "light": "{colorBlue300}",
        "dark": "{colorBlue700}"
      },
      "colorBackgroundToggleDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey500}"
      },
      "colorBorderButtonNormalActive": {
        "light": "{colorBorderButtonNormalDefault}",
        "dark": "{colorBorderButtonNormalDefault}"
      },
      "colorBorderButtonNormalDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey500}"
      },
      "colorBorderButtonNormalDisabled": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorBorderButtonNormalHover": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey400}"
      },
      "colorBorderButtonPrimaryDisabled": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorBorderCalendarGrid": {
        "light": "{colorBorderDropdownItemDefault}",
        "dark": "{colorBorderDividerDefault}"
      },
      "colorBorderCalendarGridSelectedFocusRing": {
        "light": "{colorBorderItemFocused}",
        "dark": "{colorBorderItemFocused}"
      },
      "colorBorderCodeEditorAceActiveLineLightTheme": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey300}"
      },
      "colorBorderCodeEditorAceActiveLineDarkTheme": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey550}"
      },
      "colorBorderCodeEditorDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey550}"
      },
      "colorBorderCodeEditorPaneItemHover": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBorderContainerDivider": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorBorderDividerDefault}"
      },
      "colorBorderContainerTop": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey700}"
      },
      "colorBorderControlChecked": {
        "light": "{colorBackgroundControlChecked}",
        "dark": "{colorBackgroundControlChecked}"
      },
      "colorBorderControlDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBorderControlDisabled": {
        "light": "{colorBackgroundControlDisabled}",
        "dark": "{colorBackgroundControlDisabled}"
      },
      "colorBorderDividerActive": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey550}"
      },
      "colorBorderDividerDefault": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBorderDividerPanelBottom": {
        "light": "{colorShadowSide}",
        "dark": "{colorShadowSide}"
      },
      "colorBorderDividerPanelSide": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderDropdownContainer": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderDropdownGroup": {
        "light": "{colorBorderDropdownItemDefault}",
        "dark": "{colorBorderDropdownItemDefault}"
      },
      "colorBorderDropdownItemDefault": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorBorderDividerDefault}"
      },
      "colorBorderDropdownItemHover": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorBorderDropdownItemDimmedHover": {
        "light": "{colorBorderDropdownItemHover}",
        "dark": "{colorBorderDropdownItemHover}"
      },
      "colorBorderDropdownItemSelected": {
        "light": "{colorBorderItemSelected}",
        "dark": "{colorBorderItemSelected}"
      },
      "colorBorderDropdownItemTop": {
        "light": "{colorBorderDropdownItemDefault}",
        "dark": "{colorBorderDropdownItemDefault}"
      },
      "colorBorderEditableCellHover": {
        "light": "{colorBorderDropdownItemHover}",
        "dark": "{colorBorderDropdownItemHover}"
      },
      "colorBorderInputDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBorderInputDisabled": {
        "light": "{colorBackgroundInputDisabled}",
        "dark": "{colorBackgroundInputDisabled}"
      },
      "colorBorderItemFocused": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBorderItemPlaceholder": {
        "light": "{colorTransparent}",
        "dark": "{colorTransparent}"
      },
      "colorBorderItemSelected": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBorderLayout": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorBorderNotificationStackBar": {
        "light": "{colorGrey700}",
        "dark": "{colorGrey700}"
      },
      "colorBorderPopover": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey600}"
      },
      "colorBorderSegmentActive": {
        "light": "{colorBorderSegmentHover}",
        "dark": "{colorBorderSegmentHover}"
      },
      "colorBorderSegmentDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBorderSegmentDisabled": {
        "light": "{colorBorderButtonNormalDisabled}",
        "dark": "{colorBorderButtonNormalDisabled}"
      },
      "colorBorderSegmentHover": {
        "light": "{colorGrey900}",
        "dark": "{colorWhite}"
      },
      "colorBorderStatusError": {
        "light": "{colorRed600}",
        "dark": "{colorRed600}"
      },
      "colorBorderStatusInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBorderStatusSuccess": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen600}"
      },
      "colorBorderStatusWarning": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey500}"
      },
      "colorBorderDividerInteractiveDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey550}"
      },
      "colorBorderTabsDivider": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey650}"
      },
      "colorBorderTabsShadow": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorGreyTransparent}"
      },
      "colorBorderTabsUnderline": {
        "light": "{colorTextInteractiveHover}",
        "dark": "{colorTextInteractiveHover}"
      },
      "colorBorderTilesDisabled": {
        "light": "{colorTransparent}",
        "dark": "{colorGrey650}"
      },
      "colorBorderTutorial": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey500}"
      },
      "colorForegroundControlDefault": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorForegroundControlDisabled": {
        "light": "{colorWhite}",
        "dark": "{colorGrey550}"
      },
      "colorShadowDefault": {
        "light": "{colorGreyTransparentHeavy}",
        "dark": "{colorGreyTransparentHeavy}"
      },
      "colorShadowLayoutToggle": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorShadowMedium": {
        "light": "{colorGreyTransparent}",
        "dark": "{colorGreyTransparent}"
      },
      "colorShadowSide": {
        "light": "{colorGreyTransparentLight}",
        "dark": "{colorGreyTransparentLight}"
      },
      "colorStrokeChartLine": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorStrokeCodeEditorResizeHandler": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey550}"
      },
      "colorStrokeCodeEditorGutterActiveLineDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorStrokeCodeEditorGutterActiveLineHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey900}"
      },
      "colorTextAccent": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorTextBodyDefault": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey300}"
      },
      "colorTextBodySecondary": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextBreadcrumbCurrent": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey300}"
      },
      "colorTextBreadcrumbIcon": {
        "light": "{colorGrey550}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextButtonInlineIconDefault": {
        "light": "{colorTextInteractiveDefault}",
        "dark": "{colorTextInteractiveDefault}"
      },
      "colorTextButtonInlineIconDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextButtonInlineIconHover": {
        "light": "{colorTextInteractiveHover}",
        "dark": "{colorTextInteractiveHover}"
      },
      "colorTextButtonNormalActive": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextButtonNormalDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextButtonNormalHover": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextLinkButtonNormalDefault": {
        "light": "{colorTextButtonNormalDefault}",
        "dark": "{colorTextButtonNormalDefault}"
      },
      "colorTextLinkButtonNormalHover": {
        "light": "{colorTextButtonNormalHover}",
        "dark": "{colorTextButtonNormalHover}"
      },
      "colorTextLinkButtonNormalActive": {
        "light": "{colorTextButtonNormalActive}",
        "dark": "{colorTextButtonNormalActive}"
      },
      "colorTextButtonPrimaryActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextButtonPrimaryDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextButtonPrimaryHover": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextCalendarDayHover": {
        "light": "{colorTextDropdownItemHighlighted}",
        "dark": "{colorTextDropdownItemHighlighted}"
      },
      "colorTextCalendarDaySelected": {
        "light": "{colorTextDropdownItemHighlighted}",
        "dark": "{colorTextDropdownItemHighlighted}"
      },
      "colorTextCalendarMonth": {
        "light": "{colorTextBodySecondary}",
        "dark": "{colorTextBodySecondary}"
      },
      "colorTextCodeEditorGutterActiveLine": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextCodeEditorGutterDefault": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey300}"
      },
      "colorTextCodeEditorStatusBarDisabled": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey550}"
      },
      "colorTextCodeEditorTabButtonError": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextColumnHeader": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey450}"
      },
      "colorTextColumnSortingIcon": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextControlDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextCounter": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextDisabled": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorTextDropdownFooter": {
        "light": "{colorTextFormSecondary}",
        "dark": "{colorTextFormSecondary}"
      },
      "colorTextDropdownGroupLabel": {
        "light": "{colorTextGroupLabel}",
        "dark": "{colorTextGroupLabel}"
      },
      "colorTextDropdownHeader": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextDropdownItemDefault": {
        "light": "{colorTextFormDefault}",
        "dark": "{colorTextFormDefault}"
      },
      "colorTextDropdownItemDimmed": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextDropdownItemDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextDropdownItemFilterMatch": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorTextDropdownItemHighlighted": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey200}"
      },
      "colorTextDropdownItemSecondary": {
        "light": "{colorTextFormSecondary}",
        "dark": "{colorTextFormSecondary}"
      },
      "colorTextDropdownItemSecondaryHover": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey300}"
      },
      "colorTextEmpty": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey300}"
      },
      "colorTextExpandableSectionDefault": {
        "light": "{colorTextInteractiveDefault}",
        "dark": "{colorTextInteractiveDefault}"
      },
      "colorTextExpandableSectionHover": {
        "light": "{colorTextInteractiveHover}",
        "dark": "{colorTextInteractiveHover}"
      },
      "colorTextExpandableSectionNavigationIconDefault": {
        "light": "{colorTextIconCaret}",
        "dark": "{colorTextIconCaret}"
      },
      "colorTextFormDefault": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey300}"
      },
      "colorTextFormLabel": {
        "light": "{colorTextFormDefault}",
        "dark": "{colorTextFormDefault}"
      },
      "colorTextFormSecondary": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextGroupLabel": {
        "light": "{colorTextLabel}",
        "dark": "{colorTextLabel}"
      },
      "colorTextHeadingDefault": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey200}"
      },
      "colorTextHeadingSecondary": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextHomeHeaderDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey200}"
      },
      "colorTextHomeHeaderSecondary": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey300}"
      },
      "colorTextIconCaret": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey450}"
      },
      "colorTextIconSubtle": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey400}"
      },
      "colorTextInputDisabled": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey550}"
      },
      "colorTextInputPlaceholder": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorTextInputPlaceholderDisabled": {
        "light": "{colorTextInputPlaceholder}",
        "dark": "{colorTextInputPlaceholder}"
      },
      "colorTextInteractiveActive": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextInteractiveDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextInteractiveDisabled": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorTextInteractiveHover": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextInteractiveInvertedDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey300}"
      },
      "colorTextInteractiveInvertedHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey100}"
      },
      "colorTextInverted": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextLabel": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey450}"
      },
      "colorTextLayoutToggle": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextLayoutToggleActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorTextLayoutToggleHover": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorTextLayoutToggleSelected": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextLinkDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorTextLinkHover": {
        "light": "{colorTextLinkDefault}",
        "dark": "{colorTextLinkDefault}"
      },
      "colorTextLinkInvertedHover": {
        "light": "{colorTextNotificationDefault}",
        "dark": "{colorTextNotificationDefault}"
      },
      "colorTextLinkButtonUnderline": {
        "light": "currentColor",
        "dark": "currentColor"
      },
      "colorTextLinkButtonUnderlineHover": {
        "light": "currentColor",
        "dark": "currentColor"
      },
      "colorTextLinkPrimaryUnderline": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorTextNotificationDefault": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey100}"
      },
      "colorTextNotificationStackBar": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorTextPaginationPageNumberActiveDisabled": {
        "light": "{colorTextBodySecondary}",
        "dark": "{colorTextBodySecondary}"
      },
      "colorTextPaginationPageNumberDefault": {
        "light": "{colorTextInteractiveDefault}",
        "dark": "{colorTextInteractiveDefault}"
      },
      "colorTextSegmentActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorTextSegmentDefault": {
        "light": "{colorTextButtonNormalDefault}",
        "dark": "{colorTextButtonNormalDefault}"
      },
      "colorTextSegmentHover": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorTextSmall": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextStatusError": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorTextStatusInactive": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextStatusInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorTextStatusSuccess": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen500}"
      },
      "colorTextStatusWarning": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorTextTopNavigationTitle": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorBoardPlaceholderActive": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey550}"
      },
      "colorBoardPlaceholderHover": {
        "light": "{colorBlue300}",
        "dark": "{colorBlue600}"
      },
      "colorDragPlaceholderActive": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey550}"
      },
      "colorDragPlaceholderHover": {
        "light": "{colorBlue300}",
        "dark": "{colorBlue600}"
      },
      "colorDropzoneBackgroundActive": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey550}"
      },
      "colorDropzoneBackgroundHover": {
        "light": "{colorBlue300}",
        "dark": "{colorBlue600}"
      },
      "colorDropzoneTextActive": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey900}"
      },
      "colorDropzoneTextHover": {
        "light": "{colorBlue900}",
        "dark": "{colorWhite}"
      },
      "fontBodyMLineHeight": "22px",
      "fontBodyMSize": "14px",
      "fontBodySLetterSpacing": "normal",
      "fontBodySLineHeight": "16px",
      "fontBodySSize": "12px",
      "fontButtonLetterSpacing": "0.25px",
      "fontButtonWeight": "{fontWeightHeavy}",
      "fontChartDetailSize": "{fontBodyMSize}",
      "fontDisplayLLetterSpacing": "normal",
      "fontDisplayLLineHeight": "56px",
      "fontDisplayLSize": "44px",
      "fontDisplayLabelWeight": "400",
      "fontExpandableHeadingSize": "{fontBodyMSize}",
      "fontFamilyBase": "'Noto Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
      "fontFamilyMonospace": "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
      "fontHeaderH2DescriptionLineHeight": "{fontBodySLineHeight}",
      "fontHeaderH2DescriptionSize": "{fontBodySSize}",
      "fontHeadingLLetterSpacing": "normal",
      "fontHeadingLLineHeight": "22px",
      "fontHeadingLSize": "18px",
      "fontHeadingLWeight": "{fontWeightHeavy}",
      "fontHeadingMLetterSpacing": "normal",
      "fontHeadingMLineHeight": "22px",
      "fontHeadingMSize": "18px",
      "fontHeadingMWeight": "400",
      "fontHeadingSLetterSpacing": "normal",
      "fontHeadingSLineHeight": "20px",
      "fontHeadingSSize": "16px",
      "fontHeadingSWeight": "{fontWeightHeavy}",
      "fontHeadingXlLetterSpacing": "normal",
      "fontHeadingXlLineHeight": "36px",
      "fontHeadingXlSize": "28px",
      "fontHeadingXlWeight": "400",
      "fontHeadingXsLineHeight": "20px",
      "fontHeadingXsSize": "16px",
      "fontHeadingXsWeight": "400",
      "fontBoxValueLargeWeight": "300",
      "fontLinkButtonLetterSpacing": "normal",
      "fontLinkButtonWeight": "400",
      "fontLinkPrimaryDecoration": "none",
      "fontLinkPrimaryLetterSpacing": "0.005em",
      "fontLinkPrimaryWeight": "700",
      "fontPanelHeaderLineHeight": "{fontHeadingLLineHeight}",
      "fontPanelHeaderSize": "{fontHeadingLSize}",
      "fontSmoothingWebkit": "auto",
      "fontSmoothingMozOsx": "auto",
      "fontTabsDisabledWeight": "400",
      "fontTabsLineHeight": "{fontBodyMLineHeight}",
      "fontTabsSize": "{fontBodyMSize}",
      "fontWayfindingLinkActiveWeight": "{fontWeightHeavy}",
      "fontWeightHeavy": "700",
      "borderActiveWidth": "2px",
      "borderCodeEditorStatusDividerWidth": "0px",
      "borderContainerStickyWidth": "1px",
      "borderContainerTopWidth": "1px",
      "borderControlFocusRingShadowSpread": "1px",
      "borderControlInvalidFocusRingShadowSpread": "{borderControlFocusRingShadowSpread}",
      "borderDividerListWidth": "1px",
      "borderDividerSectionWidth": "1px",
      "borderDropdownVirtualOffsetWidth": "0px",
      "borderFieldWidth": "1px",
      "borderInvalidWidth": "4px",
      "borderItemWidth": "1px",
      "borderLineChartDashArray": "3 5",
      "borderLineChartLineJoin": "miter",
      "borderLineChartWidth": "2px",
      "borderPanelHeaderWidth": "0px",
      "borderPanelTopWidth": "0px",
      "borderRadiusAlert": "{borderRadiusInput}",
      "borderRadiusBadge": "16px",
      "borderRadiusButton": "2px",
      "borderRadiusCalendarDayFocusRing": "2px",
      "borderRadiusCodeEditor": "{borderRadiusItem}",
      "borderRadiusContainer": "0px",
      "borderRadiusControlCircularFocusRing": "50%",
      "borderRadiusControlDefaultFocusRing": "{borderRadiusInput}",
      "borderRadiusDropdown": "{borderRadiusItem}",
      "borderRadiusDropzone": "0px",
      "borderRadiusFlashbar": "0px",
      "borderRadiusItem": "0px",
      "borderRadiusInput": "2px",
      "borderRadiusPopover": "{borderRadiusInput}",
      "borderRadiusTabsFocusRing": "0px",
      "borderRadiusTiles": "{borderRadiusInput}",
      "borderRadiusToken": "{borderRadiusInput}",
      "borderRadiusTutorialPanelItem": "{borderRadiusInput}",
      "borderTableStickyWidth": "0px",
      "borderLinkFocusRingOutline": "5px auto Highlight",
      "borderLinkFocusRingShadowSpread": "0px",
      "motionDurationExtraFast": {
        "default": "45ms",
        "disabled": "0ms"
      },
      "motionDurationExtraSlow": {
        "default": "270ms",
        "disabled": "0ms"
      },
      "motionDurationFast": {
        "default": "90ms",
        "disabled": "0ms"
      },
      "motionDurationModerate": {
        "default": "135ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyAmbient": {
        "default": "2000ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyFast": {
        "default": "115ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyMedium": {
        "default": "165ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlySlow": {
        "default": "250ms",
        "disabled": "0ms"
      },
      "motionDurationRotate180": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationRotate90": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationShowPaced": {
        "default": "{motionDurationSlow}",
        "disabled": "{motionDurationSlow}"
      },
      "motionDurationShowQuick": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationSlow": {
        "default": "180ms",
        "disabled": "0ms"
      },
      "motionDurationTransitionQuick": {
        "default": "{motionDurationFast}",
        "disabled": "{motionDurationFast}"
      },
      "motionDurationTransitionShowPaced": {
        "default": "{motionDurationSlow}",
        "disabled": "{motionDurationSlow}"
      },
      "motionDurationTransitionShowQuick": {
        "default": "{motionDurationFast}",
        "disabled": "{motionDurationFast}"
      },
      "motionEasingEaseOutQuart": {
        "default": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "disabled": "cubic-bezier(0.165, 0.84, 0.44, 1)"
      },
      "motionEasingRefreshOnlyA": {
        "default": "cubic-bezier(0, 0, 0, 1)",
        "disabled": "cubic-bezier(0, 0, 0, 1)"
      },
      "motionEasingRefreshOnlyB": {
        "default": "cubic-bezier(1, 0, 0.83, 1)",
        "disabled": "cubic-bezier(1, 0, 0.83, 1)"
      },
      "motionEasingRefreshOnlyC": {
        "default": "cubic-bezier(0.84, 0, 0.16, 1)",
        "disabled": "cubic-bezier(0.84, 0, 0.16, 1)"
      },
      "motionEasingRefreshOnlyD": {
        "default": "cubic-bezier(0.33, 0, 0.67, 1)",
        "disabled": "cubic-bezier(0.33, 0, 0.67, 1)"
      },
      "motionEasingRotate180": {
        "default": "{motionEasingEaseOutQuart}",
        "disabled": "{motionEasingEaseOutQuart}"
      },
      "motionEasingRotate90": {
        "default": "{motionEasingEaseOutQuart}",
        "disabled": "{motionEasingEaseOutQuart}"
      },
      "motionEasingShowPaced": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingShowQuick": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingTransitionQuick": {
        "default": "linear",
        "disabled": "linear"
      },
      "motionEasingTransitionShowPaced": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingTransitionShowQuick": {
        "default": "linear",
        "disabled": "linear"
      },
      "motionEasingResponsive": "ease-out",
      "motionEasingSticky": "ease-out",
      "motionEasingExpressive": "ease-out",
      "motionDurationResponsive": "{motionDurationModerate}",
      "motionDurationExpressive": "{motionDurationSlow}",
      "motionDurationComplex": "{motionDurationExtraSlow}",
      "motionKeyframesFadeIn": {
        "default": "awsui-fade-in-35003c",
        "disabled": "awsui-fade-in-35003c"
      },
      "motionKeyframesFadeOut": {
        "default": "awsui-fade-out-35003c",
        "disabled": "awsui-fade-out-35003c"
      },
      "motionKeyframesStatusIconError": "awsui-none-35003c",
      "motionKeyframesScalePopup": "awsui-none-35003c",
      "sizeCalendarGridWidth": {
        "comfortable": "234px",
        "compact": "234px"
      },
      "sizeControl": {
        "comfortable": "14px",
        "compact": "14px"
      },
      "sizeIconBig": {
        "comfortable": "32px",
        "compact": "32px"
      },
      "sizeIconLarge": {
        "comfortable": "48px",
        "compact": "48px"
      },
      "sizeIconMedium": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "sizeIconNormal": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "sizeTableSelectionHorizontal": {
        "comfortable": "54px",
        "compact": "54px"
      },
      "sizeVerticalInput": {
        "comfortable": "32px",
        "compact": "28px"
      },
      "sizeVerticalPanelIconOffset": {
        "comfortable": "15px",
        "compact": "13px"
      },
      "spaceAlertActionLeft": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceAlertHorizontal": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceAlertMessageRight": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceAlertVertical": {
        "comfortable": "{spaceScaledS}",
        "compact": "{spaceScaledS}"
      },
      "spaceButtonFocusOutlineGutter": {
        "comfortable": "3px",
        "compact": "3px"
      },
      "spaceButtonIconFocusOutlineGutterVertical": {
        "comfortable": "{spaceButtonFocusOutlineGutter}",
        "compact": "{spaceButtonFocusOutlineGutter}"
      },
      "spaceButtonIconOnlyHorizontal": {
        "comfortable": "{spaceM}",
        "compact": "{spaceM}"
      },
      "spaceButtonInlineIconFocusOutlineGutter": {
        "comfortable": "{spaceButtonFocusOutlineGutter}",
        "compact": "{spaceButtonFocusOutlineGutter}"
      },
      "spaceButtonModalDismissVertical": {
        "comfortable": "{spaceScaledXxs}",
        "compact": "{spaceScaledXxs}"
      },
      "spaceCalendarGridFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceCalendarGridSelectedFocusOutlineGutter": {
        "comfortable": "2px",
        "compact": "2px"
      },
      "spaceCardHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spaceCodeEditorStatusFocusOutlineGutter": {
        "comfortable": "3px",
        "compact": "3px"
      },
      "spaceContainerContentTop": {
        "comfortable": "{spaceScaledM}",
        "compact": "{spaceScaledM}"
      },
      "spaceContainerHeaderVertical": {
        "comfortable": "{spaceScaledS}",
        "compact": "{spaceScaledS}"
      },
      "spaceContainerHorizontal": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceContentHeaderPaddingBottom": {
        "comfortable": "{spaceScaledM}",
        "compact": "{spaceScaledM}"
      },
      "spaceDarkHeaderOverlapDistance": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceExpandableSectionIconOffsetTop": {
        "comfortable": "{spaceScaledXs}",
        "compact": "{spaceScaledXs}"
      },
      "spaceFieldHorizontal": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceXs}"
      },
      "spaceFieldIconOffset": {
        "comfortable": "32px",
        "compact": "32px"
      },
      "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceFlashbarActionLeft": {
        "comfortable": "{spaceM}",
        "compact": "{spaceM}"
      },
      "spaceFlashbarDismissRight": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxs}"
      },
      "spaceFlashbarHorizontal": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceGridGutter": {
        "comfortable": "{spaceL}",
        "compact": "{spaceM}"
      },
      "spaceLayoutContentBottom": {
        "comfortable": "{spaceScaledL}",
        "compact": "{spaceScaledL}"
      },
      "spaceLayoutToggleDiameter": {
        "comfortable": "40px",
        "compact": "40px"
      },
      "spaceLayoutTogglePadding": {
        "comfortable": "{spaceScaledL}",
        "compact": "{spaceScaledL}"
      },
      "spaceModalContentBottom": {
        "comfortable": "{spaceScaledL}",
        "compact": "{spaceScaledL}"
      },
      "spaceModalHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spacePanelNavLeft": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceXxl}"
      },
      "spacePanelSideLeft": {
        "comfortable": "{spaceScaledXxl}",
        "compact": "{spaceScaledXxl}"
      },
      "spacePanelSideRight": {
        "comfortable": "{spaceScaledXxl}",
        "compact": "{spaceScaledXxl}"
      },
      "spacePanelSplitTop": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceSegmentedControlFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableHeaderFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTabsContentTop": {
        "comfortable": "{spaceScaledM}",
        "compact": "{spaceScaledM}"
      },
      "spaceTableHorizontal": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableHeaderHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spaceTableContentBottom": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableContentTop": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableEmbeddedContentBottom": {
        "comfortable": "{spaceTableContentBottom}",
        "compact": "{spaceTableContentBottom}"
      },
      "spaceTableEmbeddedHeaderTop": {
        "comfortable": "{spaceContainerHeaderVertical}",
        "compact": "{spaceContainerHeaderVertical}"
      },
      "spaceTableFooterHorizontal": {
        "comfortable": "{spaceTableHeaderHorizontal}",
        "compact": "{spaceTableHeaderHorizontal}"
      },
      "spaceTabsFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceScaled2xNone": {
        "comfortable": "{spaceNone}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceXxs}"
      },
      "spaceScaled2xM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceXs}"
      },
      "spaceScaled2xL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceS}"
      },
      "spaceScaled2xXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceM}"
      },
      "spaceScaled2xXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceL}"
      },
      "spaceScaled2xXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXl}"
      },
      "spaceScaledNone": {
        "comfortable": "{spaceNone}",
        "compact": "{spaceNone}"
      },
      "spaceScaledXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaledXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxxs}"
      },
      "spaceScaledXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceXxs}"
      },
      "spaceScaledS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceXs}"
      },
      "spaceScaledM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceS}"
      },
      "spaceScaledL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceM}"
      },
      "spaceScaledXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceL}"
      },
      "spaceScaledXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceXl}"
      },
      "spaceScaledXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXxl}"
      },
      "spaceStaticXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceXxxs}"
      },
      "spaceStaticXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxs}"
      },
      "spaceStaticXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceXs}"
      },
      "spaceStaticS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceStaticM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceM}"
      },
      "spaceStaticL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceStaticXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceXl}"
      },
      "spaceStaticXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceXxl}"
      },
      "spaceStaticXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXxxl}"
      },
      "spaceNone": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceXxxs": {
        "comfortable": "2px",
        "compact": "2px"
      },
      "spaceXxs": {
        "comfortable": "4px",
        "compact": "4px"
      },
      "spaceXs": {
        "comfortable": "8px",
        "compact": "8px"
      },
      "spaceS": {
        "comfortable": "12px",
        "compact": "12px"
      },
      "spaceM": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "spaceL": {
        "comfortable": "20px",
        "compact": "20px"
      },
      "spaceXl": {
        "comfortable": "24px",
        "compact": "24px"
      },
      "spaceXxl": {
        "comfortable": "32px",
        "compact": "32px"
      },
      "spaceXxxl": {
        "comfortable": "40px",
        "compact": "40px"
      },
      "shadowContainer": {
        "light": "0 1px 1px 0 rgba(0, 28, 36, 0.3), 1px 1px 1px 0 rgba(0, 28, 36, 0.15), -1px 1px 1px 0 rgba(0, 28, 36, 0.15)",
        "dark": "0 1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 1px 0 rgba(0, 0, 0, 0.3), -1px 1px 1px 0 rgba(0, 0, 0, 0.3)"
      },
      "shadowContainerStacked": {
        "light": "{shadowContainer}",
        "dark": "{shadowContainer}"
      },
      "shadowContainerActive": {
        "light": "0px 4px 8px rgba(0, 28, 36, 0.45)",
        "dark": "0px 4px 8px rgba(0, 28, 36, 0.45)"
      },
      "shadowDropdown": {
        "light": "{shadowContainer}",
        "dark": "{shadowContainer}"
      },
      "shadowDropup": {
        "light": "0 -1px 1px 0 rgba(0, 28, 36, 0.3), 1px -1px 1px 0 rgba(0, 28, 36, 0.15), -1px -1px 1px 0 rgba(0, 28, 36, 0.15)",
        "dark": "0 -1px 1px 0 rgba(0, 0, 0, 0.3), 1px -1px 1px 0 rgba(0, 0, 0, 0.3), -1px -1px 1px 0 rgba(0, 0, 0, 0.3)"
      },
      "shadowFlashCollapsed": {
        "light": "0px 2px 2px rgba(0, 0, 0, 0.15)",
        "dark": "0px 2px 2px rgba(0, 0, 0, 0.15)"
      },
      "shadowFlashSticky": {
        "light": "{shadowPanel}",
        "dark": "{shadowPanel}"
      },
      "shadowModal": {
        "light": "{shadowContainer}",
        "dark": "{shadowContainer}"
      },
      "shadowPanel": {
        "light": "{shadowContainer}",
        "dark": "{shadowContainer}"
      },
      "shadowPanelToggle": {
        "light": "{shadowPanel}",
        "dark": "{shadowPanel}"
      },
      "shadowPopover": {
        "light": "{shadowSticky}",
        "dark": "{shadowSticky}"
      },
      "shadowSplitBottom": {
        "light": "0 -2px 1px -1px rgba(0, 28, 36, 0.15), 0 -1px 1px -1px rgba(0, 28, 36, 0.3)",
        "dark": "0 -2px 1px -1px rgba(0, 0, 0, 0.3), 0 -1px 1px -1px rgba(0, 0, 0, 0.3)"
      },
      "shadowSplitSide": {
        "light": "{shadowContainer}",
        "dark": "{shadowContainer}"
      },
      "shadowSticky": {
        "light": "0px 1px 4px -2px rgba(0, 28, 36, 0.5)",
        "dark": "0px 1px 4px -2px rgba(0, 0, 0, 0.5)"
      },
      "shadowStickyEmbedded": {
        "light": "{shadowSticky}",
        "dark": "{shadowSticky}"
      },
      "shadowStickyColumnFirst": {
        "light": "4px 0 8px 0 rgba(0, 28, 36, 0.1)",
        "dark": "4px 0 8px 0 rgba(0, 0, 0, 0.5)"
      },
      "shadowStickyColumnLast": {
        "light": "-4px 0 8px 0 rgba(0, 28, 36, 0.1)",
        "dark": "-4px 0 8px 0 rgba(0, 0, 0, 0.5)"
      }
    },
    "contexts": {
      "compact-table": {
        "id": "compact-table",
        "selector": ".awsui-context-compact-table",
        "tokens": {
          "spaceAlertActionLeft": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceAlertHorizontal": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceAlertMessageRight": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceAlertVertical": {
            "comfortable": "{spaceScaledS}",
            "compact": "{spaceScaledS}"
          },
          "spaceButtonFocusOutlineGutter": {
            "comfortable": "3px",
            "compact": "3px"
          },
          "spaceButtonIconFocusOutlineGutterVertical": {
            "comfortable": "{spaceButtonFocusOutlineGutter}",
            "compact": "{spaceButtonFocusOutlineGutter}"
          },
          "spaceButtonIconOnlyHorizontal": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceButtonInlineIconFocusOutlineGutter": {
            "comfortable": "{spaceButtonFocusOutlineGutter}",
            "compact": "{spaceButtonFocusOutlineGutter}"
          },
          "spaceButtonModalDismissVertical": {
            "comfortable": "{spaceScaledXxs}",
            "compact": "{spaceScaledXxs}"
          },
          "spaceCalendarGridFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceCalendarGridSelectedFocusOutlineGutter": {
            "comfortable": "2px",
            "compact": "2px"
          },
          "spaceCardHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spaceCodeEditorStatusFocusOutlineGutter": {
            "comfortable": "3px",
            "compact": "3px"
          },
          "spaceContainerContentTop": {
            "comfortable": "{spaceScaledM}",
            "compact": "{spaceScaledM}"
          },
          "spaceContainerHeaderVertical": {
            "comfortable": "{spaceScaledS}",
            "compact": "{spaceScaledS}"
          },
          "spaceContainerHorizontal": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceContentHeaderPaddingBottom": {
            "comfortable": "{spaceScaledM}",
            "compact": "{spaceScaledM}"
          },
          "spaceDarkHeaderOverlapDistance": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceExpandableSectionIconOffsetTop": {
            "comfortable": "{spaceScaledXs}",
            "compact": "{spaceScaledXs}"
          },
          "spaceFieldHorizontal": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceXs}"
          },
          "spaceFieldIconOffset": {
            "comfortable": "32px",
            "compact": "32px"
          },
          "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceFlashbarActionLeft": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceFlashbarDismissRight": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceFlashbarHorizontal": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceGridGutter": {
            "comfortable": "{spaceL}",
            "compact": "{spaceM}"
          },
          "spaceLayoutContentBottom": {
            "comfortable": "{spaceScaledL}",
            "compact": "{spaceScaledL}"
          },
          "spaceLayoutToggleDiameter": {
            "comfortable": "40px",
            "compact": "40px"
          },
          "spaceLayoutTogglePadding": {
            "comfortable": "{spaceScaledL}",
            "compact": "{spaceScaledL}"
          },
          "spaceModalContentBottom": {
            "comfortable": "{spaceScaledL}",
            "compact": "{spaceScaledL}"
          },
          "spaceModalHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spacePanelNavLeft": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceXxl}"
          },
          "spacePanelSideLeft": {
            "comfortable": "{spaceScaledXxl}",
            "compact": "{spaceScaledXxl}"
          },
          "spacePanelSideRight": {
            "comfortable": "{spaceScaledXxl}",
            "compact": "{spaceScaledXxl}"
          },
          "spacePanelSplitTop": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceSegmentedControlFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableHeaderFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTabsContentTop": {
            "comfortable": "{spaceScaledM}",
            "compact": "{spaceScaledM}"
          },
          "spaceTableHorizontal": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableHeaderHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spaceTableContentBottom": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableContentTop": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableEmbeddedContentBottom": {
            "comfortable": "{spaceTableContentBottom}",
            "compact": "{spaceTableContentBottom}"
          },
          "spaceTableEmbeddedHeaderTop": {
            "comfortable": "{spaceContainerHeaderVertical}",
            "compact": "{spaceContainerHeaderVertical}"
          },
          "spaceTableFooterHorizontal": {
            "comfortable": "{spaceTableHeaderHorizontal}",
            "compact": "{spaceTableHeaderHorizontal}"
          },
          "spaceTabsFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceScaled2xNone": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXxxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXxs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXs": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xS": {
            "comfortable": "{spaceS}",
            "compact": "{spaceXxs}"
          },
          "spaceScaled2xM": {
            "comfortable": "{spaceM}",
            "compact": "{spaceXs}"
          },
          "spaceScaled2xL": {
            "comfortable": "{spaceL}",
            "compact": "{spaceS}"
          },
          "spaceScaled2xXl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceM}"
          },
          "spaceScaled2xXxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceL}"
          },
          "spaceScaled2xXxxl": {
            "comfortable": "{spaceXxxl}",
            "compact": "{spaceXl}"
          },
          "spaceScaledNone": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaledXxxs": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaledXxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceXxxs}"
          },
          "spaceScaledXs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceScaledS": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceXs}"
          },
          "spaceScaledM": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceScaledL": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceScaledXl": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceScaledXxl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceXl}"
          },
          "spaceScaledXxxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceXxl}"
          },
          "spaceStaticXxxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceXxxs}"
          },
          "spaceStaticXxs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceStaticXs": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceXs}"
          },
          "spaceStaticS": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceStaticM": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceStaticL": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceStaticXl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceXl}"
          },
          "spaceStaticXxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceXxl}"
          },
          "spaceStaticXxxl": {
            "comfortable": "{spaceXxxl}",
            "compact": "{spaceXxxl}"
          },
          "spaceNone": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceXxxs": {
            "comfortable": "2px",
            "compact": "2px"
          },
          "spaceXxs": {
            "comfortable": "4px",
            "compact": "4px"
          },
          "spaceXs": {
            "comfortable": "8px",
            "compact": "8px"
          },
          "spaceS": {
            "comfortable": "12px",
            "compact": "12px"
          },
          "spaceM": {
            "comfortable": "16px",
            "compact": "16px"
          },
          "spaceL": {
            "comfortable": "20px",
            "compact": "20px"
          },
          "spaceXl": {
            "comfortable": "24px",
            "compact": "24px"
          },
          "spaceXxl": {
            "comfortable": "32px",
            "compact": "32px"
          },
          "spaceXxxl": {
            "comfortable": "40px",
            "compact": "40px"
          },
          "sizeVerticalInput": {
            "comfortable": "28px",
            "compact": "28px"
          }
        }
      },
      "top-navigation": {
        "id": "top-navigation",
        "selector": ".awsui-context-top-navigation",
        "tokens": {
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(255, 255, 255, 0.7)",
            "dark": "rgba(255, 255, 255, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 0, 0, 0.3)",
            "dark": "rgba(0, 0, 0, 0.3)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 0, 0, 0.3)",
            "dark": "rgba(0, 0, 0, 0.3)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorBackgroundCodeEditorStatusBar}",
            "dark": "{colorBackgroundCodeEditorStatusBar}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorAwsSquidInk}",
            "dark": "{colorAwsSquidInk}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorAwsSquidInk}",
            "dark": "{colorAwsSquidInk}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorBlack}",
            "dark": "{colorBlack}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorBackgroundLayoutPanelContent}",
            "dark": "{colorBackgroundLayoutPanelContent}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque80}",
            "dark": "{colorGreyOpaque80}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundNotificationStackBar": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundNotificationStackBarActive": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundNotificationStackBarHover": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorBackgroundButtonNormalDisabled}",
            "dark": "{colorBackgroundButtonNormalDisabled}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed900}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen900}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorBackgroundContainerHeader}",
            "dark": "{colorBackgroundContainerHeader}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue700}",
            "dark": "{colorBlue700}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderCalendarGrid": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorBorderItemFocused}",
            "dark": "{colorBorderItemFocused}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderContainerDivider": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderContainerTop": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorShadowSide}",
            "dark": "{colorShadowSide}"
          },
          "colorBorderDividerPanelSide": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderDropdownContainer": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderEditableCellHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorTransparent}",
            "dark": "{colorTransparent}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderNotificationStackBar": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentHover}",
            "dark": "{colorBorderSegmentHover}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderButtonNormalDisabled}",
            "dark": "{colorBorderButtonNormalDisabled}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutToggle": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeChartLine": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemHighlighted}",
            "dark": "{colorTextDropdownItemHighlighted}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextDropdownItemHighlighted}",
            "dark": "{colorTextDropdownItemHighlighted}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorTextBodySecondary}",
            "dark": "{colorTextBodySecondary}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextEmpty": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextIconCaret}",
            "dark": "{colorTextIconCaret}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorTextLabel}",
            "dark": "{colorTextLabel}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputPlaceholder}",
            "dark": "{colorTextInputPlaceholder}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextLayoutToggleActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorTextLayoutToggleHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkHover": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorTextNotificationDefault}",
            "dark": "{colorTextNotificationDefault}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "currentColor",
            "dark": "currentColor"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "currentColor",
            "dark": "currentColor"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextNotificationStackBar": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextBodySecondary}",
            "dark": "{colorTextBodySecondary}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextSegmentActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextSmall": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen500}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          }
        }
      },
      "flashbar": {
        "id": "flashbar",
        "selector": ".awsui-context-flashbar",
        "tokens": {
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(255, 255, 255, 0.7)",
            "dark": "rgba(255, 255, 255, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 28, 36, 0.3)",
            "dark": "rgba(0, 0, 0, 0.3)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 28, 36, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 28, 36, 0.15)",
            "dark": "rgba(0, 0, 0, 0.3)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBlue700}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorBackgroundCodeEditorStatusBar}",
            "dark": "{colorBackgroundCodeEditorStatusBar}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorBlue100}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorBlack}",
            "dark": "{colorBlack}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorBlue100}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorBackgroundLayoutPanelContent}",
            "dark": "{colorBackgroundLayoutPanelContent}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue700}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque90}",
            "dark": "{colorGreyOpaque80}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundNotificationStackBar": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundNotificationStackBarActive": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundNotificationStackBarHover": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorGreyOpaque70}",
            "dark": "{colorGrey100}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorBackgroundButtonNormalDisabled}",
            "dark": "{colorBackgroundButtonNormalDisabled}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed100}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue100}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen100}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorWhite}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorBackgroundContainerHeader}",
            "dark": "{colorBackgroundContainerHeader}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue700}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey400}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBorderCalendarGrid": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorBorderItemFocused}",
            "dark": "{colorBorderItemFocused}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBorderContainerDivider": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderContainerTop": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey700}"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorShadowSide}",
            "dark": "{colorShadowSide}"
          },
          "colorBorderDividerPanelSide": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderDropdownContainer": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderEditableCellHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorTransparent}",
            "dark": "{colorTransparent}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBorderNotificationStackBar": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey600}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentHover}",
            "dark": "{colorBorderSegmentHover}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderButtonNormalDisabled}",
            "dark": "{colorBorderButtonNormalDisabled}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorGrey900}",
            "dark": "{colorWhite}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey650}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorTransparent}",
            "dark": "{colorGrey650}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey500}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey550}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutToggle": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeChartLine": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorGrey550}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemHighlighted}",
            "dark": "{colorTextDropdownItemHighlighted}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextDropdownItemHighlighted}",
            "dark": "{colorTextDropdownItemHighlighted}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorTextBodySecondary}",
            "dark": "{colorTextBodySecondary}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey300}"
          },
          "colorTextEmpty": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextInteractiveHover}",
            "dark": "{colorTextInteractiveHover}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextIconCaret}",
            "dark": "{colorTextIconCaret}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorTextLabel}",
            "dark": "{colorTextLabel}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey200}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputPlaceholder}",
            "dark": "{colorTextInputPlaceholder}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextLayoutToggleActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorTextLayoutToggleHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkHover": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorTextNotificationDefault}",
            "dark": "{colorTextNotificationDefault}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "currentColor",
            "dark": "currentColor"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "currentColor",
            "dark": "currentColor"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextNotificationStackBar": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextBodySecondary}",
            "dark": "{colorTextBodySecondary}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextSegmentActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextSmall": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey900}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorBlue900}",
            "dark": "{colorWhite}"
          }
        }
      }
    },
    "tokenModeMap": {
      "colorChartsRed300": "color",
      "colorChartsRed400": "color",
      "colorChartsRed500": "color",
      "colorChartsRed600": "color",
      "colorChartsRed700": "color",
      "colorChartsRed800": "color",
      "colorChartsRed900": "color",
      "colorChartsRed1000": "color",
      "colorChartsRed1100": "color",
      "colorChartsRed1200": "color",
      "colorChartsOrange300": "color",
      "colorChartsOrange400": "color",
      "colorChartsOrange500": "color",
      "colorChartsOrange600": "color",
      "colorChartsOrange700": "color",
      "colorChartsOrange800": "color",
      "colorChartsOrange900": "color",
      "colorChartsOrange1000": "color",
      "colorChartsOrange1100": "color",
      "colorChartsOrange1200": "color",
      "colorChartsYellow300": "color",
      "colorChartsYellow400": "color",
      "colorChartsYellow500": "color",
      "colorChartsYellow600": "color",
      "colorChartsYellow700": "color",
      "colorChartsYellow800": "color",
      "colorChartsYellow900": "color",
      "colorChartsYellow1000": "color",
      "colorChartsYellow1100": "color",
      "colorChartsYellow1200": "color",
      "colorChartsGreen300": "color",
      "colorChartsGreen400": "color",
      "colorChartsGreen500": "color",
      "colorChartsGreen600": "color",
      "colorChartsGreen700": "color",
      "colorChartsGreen800": "color",
      "colorChartsGreen900": "color",
      "colorChartsGreen1000": "color",
      "colorChartsGreen1100": "color",
      "colorChartsGreen1200": "color",
      "colorChartsTeal300": "color",
      "colorChartsTeal400": "color",
      "colorChartsTeal500": "color",
      "colorChartsTeal600": "color",
      "colorChartsTeal700": "color",
      "colorChartsTeal800": "color",
      "colorChartsTeal900": "color",
      "colorChartsTeal1000": "color",
      "colorChartsTeal1100": "color",
      "colorChartsTeal1200": "color",
      "colorChartsBlue1300": "color",
      "colorChartsBlue1400": "color",
      "colorChartsBlue1500": "color",
      "colorChartsBlue1600": "color",
      "colorChartsBlue1700": "color",
      "colorChartsBlue1800": "color",
      "colorChartsBlue1900": "color",
      "colorChartsBlue11000": "color",
      "colorChartsBlue11100": "color",
      "colorChartsBlue11200": "color",
      "colorChartsBlue2300": "color",
      "colorChartsBlue2400": "color",
      "colorChartsBlue2500": "color",
      "colorChartsBlue2600": "color",
      "colorChartsBlue2700": "color",
      "colorChartsBlue2800": "color",
      "colorChartsBlue2900": "color",
      "colorChartsBlue21000": "color",
      "colorChartsBlue21100": "color",
      "colorChartsBlue21200": "color",
      "colorChartsPurple300": "color",
      "colorChartsPurple400": "color",
      "colorChartsPurple500": "color",
      "colorChartsPurple600": "color",
      "colorChartsPurple700": "color",
      "colorChartsPurple800": "color",
      "colorChartsPurple900": "color",
      "colorChartsPurple1000": "color",
      "colorChartsPurple1100": "color",
      "colorChartsPurple1200": "color",
      "colorChartsPink300": "color",
      "colorChartsPink400": "color",
      "colorChartsPink500": "color",
      "colorChartsPink600": "color",
      "colorChartsPink700": "color",
      "colorChartsPink800": "color",
      "colorChartsPink900": "color",
      "colorChartsPink1000": "color",
      "colorChartsPink1100": "color",
      "colorChartsPink1200": "color",
      "colorChartsStatusCritical": "color",
      "colorChartsStatusHigh": "color",
      "colorChartsStatusMedium": "color",
      "colorChartsStatusLow": "color",
      "colorChartsStatusPositive": "color",
      "colorChartsStatusInfo": "color",
      "colorChartsStatusNeutral": "color",
      "colorChartsThresholdNegative": "color",
      "colorChartsThresholdPositive": "color",
      "colorChartsThresholdInfo": "color",
      "colorChartsThresholdNeutral": "color",
      "colorChartsLineGrid": "color",
      "colorChartsLineTick": "color",
      "colorChartsLineAxis": "color",
      "colorChartsPaletteCategorical1": "color",
      "colorChartsPaletteCategorical2": "color",
      "colorChartsPaletteCategorical3": "color",
      "colorChartsPaletteCategorical4": "color",
      "colorChartsPaletteCategorical5": "color",
      "colorChartsPaletteCategorical6": "color",
      "colorChartsPaletteCategorical7": "color",
      "colorChartsPaletteCategorical8": "color",
      "colorChartsPaletteCategorical9": "color",
      "colorChartsPaletteCategorical10": "color",
      "colorChartsPaletteCategorical11": "color",
      "colorChartsPaletteCategorical12": "color",
      "colorChartsPaletteCategorical13": "color",
      "colorChartsPaletteCategorical14": "color",
      "colorChartsPaletteCategorical15": "color",
      "colorChartsPaletteCategorical16": "color",
      "colorChartsPaletteCategorical17": "color",
      "colorChartsPaletteCategorical18": "color",
      "colorChartsPaletteCategorical19": "color",
      "colorChartsPaletteCategorical20": "color",
      "colorChartsPaletteCategorical21": "color",
      "colorChartsPaletteCategorical22": "color",
      "colorChartsPaletteCategorical23": "color",
      "colorChartsPaletteCategorical24": "color",
      "colorChartsPaletteCategorical25": "color",
      "colorChartsPaletteCategorical26": "color",
      "colorChartsPaletteCategorical27": "color",
      "colorChartsPaletteCategorical28": "color",
      "colorChartsPaletteCategorical29": "color",
      "colorChartsPaletteCategorical30": "color",
      "colorChartsPaletteCategorical31": "color",
      "colorChartsPaletteCategorical32": "color",
      "colorChartsPaletteCategorical33": "color",
      "colorChartsPaletteCategorical34": "color",
      "colorChartsPaletteCategorical35": "color",
      "colorChartsPaletteCategorical36": "color",
      "colorChartsPaletteCategorical37": "color",
      "colorChartsPaletteCategorical38": "color",
      "colorChartsPaletteCategorical39": "color",
      "colorChartsPaletteCategorical40": "color",
      "colorChartsPaletteCategorical41": "color",
      "colorChartsPaletteCategorical42": "color",
      "colorChartsPaletteCategorical43": "color",
      "colorChartsPaletteCategorical44": "color",
      "colorChartsPaletteCategorical45": "color",
      "colorChartsPaletteCategorical46": "color",
      "colorChartsPaletteCategorical47": "color",
      "colorChartsPaletteCategorical48": "color",
      "colorChartsPaletteCategorical49": "color",
      "colorChartsPaletteCategorical50": "color",
      "colorGreyOpaque25": "color",
      "colorGreyOpaque40": "color",
      "colorGreyOpaque50": "color",
      "colorGreyOpaque70": "color",
      "colorGreyOpaque80": "color",
      "colorGreyOpaque90": "color",
      "colorGreyTransparent": "color",
      "colorGreyTransparentHeavy": "color",
      "colorGreyTransparentLight": "color",
      "colorBackgroundButtonLinkActive": "color",
      "colorBackgroundButtonLinkHover": "color",
      "colorBackgroundButtonNormalActive": "color",
      "colorBackgroundButtonNormalDefault": "color",
      "colorBackgroundButtonNormalDisabled": "color",
      "colorBackgroundButtonNormalHover": "color",
      "colorBackgroundButtonPrimaryActive": "color",
      "colorBackgroundButtonPrimaryDefault": "color",
      "colorBackgroundButtonPrimaryDisabled": "color",
      "colorBackgroundButtonPrimaryHover": "color",
      "colorBackgroundCalendarToday": "color",
      "colorBackgroundCellShaded": "color",
      "colorBackgroundCodeEditorGutterActiveLineDefault": "color",
      "colorBackgroundCodeEditorGutterActiveLineError": "color",
      "colorBackgroundCodeEditorGutterDefault": "color",
      "colorBackgroundCodeEditorLoading": "color",
      "colorBackgroundCodeEditorPaneItemHover": "color",
      "colorBackgroundCodeEditorStatusBar": "color",
      "colorBackgroundContainerContent": "color",
      "colorBackgroundContainerHeader": "color",
      "colorBackgroundControlChecked": "color",
      "colorBackgroundControlDefault": "color",
      "colorBackgroundControlDisabled": "color",
      "colorBackgroundDropdownItemDefault": "color",
      "colorBackgroundDropdownItemDimmed": "color",
      "colorBackgroundDropdownItemFilterMatch": "color",
      "colorBackgroundDropdownItemHover": "color",
      "colorBackgroundDropdownItemSelected": "color",
      "colorBackgroundHomeHeader": "color",
      "colorBackgroundInputDefault": "color",
      "colorBackgroundInputDisabled": "color",
      "colorBackgroundItemSelected": "color",
      "colorBackgroundLayoutMain": "color",
      "colorBackgroundLayoutMobilePanel": "color",
      "colorBackgroundLayoutPanelContent": "color",
      "colorBackgroundLayoutPanelHover": "color",
      "colorBackgroundLayoutToggleActive": "color",
      "colorBackgroundLayoutToggleDefault": "color",
      "colorBackgroundLayoutToggleHover": "color",
      "colorBackgroundLayoutToggleSelectedActive": "color",
      "colorBackgroundLayoutToggleSelectedDefault": "color",
      "colorBackgroundLayoutToggleSelectedHover": "color",
      "colorBackgroundModalOverlay": "color",
      "colorBackgroundNotificationBlue": "color",
      "colorBackgroundNotificationGreen": "color",
      "colorBackgroundNotificationGrey": "color",
      "colorBackgroundNotificationRed": "color",
      "colorBackgroundNotificationStackBar": "color",
      "colorBackgroundNotificationStackBarActive": "color",
      "colorBackgroundNotificationStackBarHover": "color",
      "colorBackgroundPopover": "color",
      "colorBackgroundProgressBarContentDefault": "color",
      "colorBackgroundProgressBarContentInFlash": "color",
      "colorBackgroundProgressBarLayoutDefault": "color",
      "colorBackgroundProgressBarLayoutInFlash": "color",
      "colorBackgroundSegmentActive": "color",
      "colorBackgroundSegmentDefault": "color",
      "colorBackgroundSegmentDisabled": "color",
      "colorBackgroundSegmentHover": "color",
      "colorBackgroundStatusError": "color",
      "colorBackgroundStatusInfo": "color",
      "colorBackgroundStatusSuccess": "color",
      "colorBackgroundStatusWarning": "color",
      "colorBackgroundTableHeader": "color",
      "colorBackgroundTilesDisabled": "color",
      "colorBackgroundToggleCheckedDisabled": "color",
      "colorBackgroundToggleDefault": "color",
      "colorBorderButtonNormalActive": "color",
      "colorBorderButtonNormalDefault": "color",
      "colorBorderButtonNormalDisabled": "color",
      "colorBorderButtonNormalHover": "color",
      "colorBorderButtonPrimaryDisabled": "color",
      "colorBorderCalendarGrid": "color",
      "colorBorderCalendarGridSelectedFocusRing": "color",
      "colorBorderCodeEditorAceActiveLineLightTheme": "color",
      "colorBorderCodeEditorAceActiveLineDarkTheme": "color",
      "colorBorderCodeEditorDefault": "color",
      "colorBorderCodeEditorPaneItemHover": "color",
      "colorBorderContainerDivider": "color",
      "colorBorderContainerTop": "color",
      "colorBorderControlChecked": "color",
      "colorBorderControlDefault": "color",
      "colorBorderControlDisabled": "color",
      "colorBorderDividerActive": "color",
      "colorBorderDividerDefault": "color",
      "colorBorderDividerPanelBottom": "color",
      "colorBorderDividerPanelSide": "color",
      "colorBorderDropdownContainer": "color",
      "colorBorderDropdownGroup": "color",
      "colorBorderDropdownItemDefault": "color",
      "colorBorderDropdownItemHover": "color",
      "colorBorderDropdownItemDimmedHover": "color",
      "colorBorderDropdownItemSelected": "color",
      "colorBorderDropdownItemTop": "color",
      "colorBorderEditableCellHover": "color",
      "colorBorderInputDefault": "color",
      "colorBorderInputDisabled": "color",
      "colorBorderItemFocused": "color",
      "colorBorderItemPlaceholder": "color",
      "colorBorderItemSelected": "color",
      "colorBorderLayout": "color",
      "colorBorderNotificationStackBar": "color",
      "colorBorderPopover": "color",
      "colorBorderSegmentActive": "color",
      "colorBorderSegmentDefault": "color",
      "colorBorderSegmentDisabled": "color",
      "colorBorderSegmentHover": "color",
      "colorBorderStatusError": "color",
      "colorBorderStatusInfo": "color",
      "colorBorderStatusSuccess": "color",
      "colorBorderStatusWarning": "color",
      "colorBorderDividerInteractiveDefault": "color",
      "colorBorderTabsDivider": "color",
      "colorBorderTabsShadow": "color",
      "colorBorderTabsUnderline": "color",
      "colorBorderTilesDisabled": "color",
      "colorBorderTutorial": "color",
      "colorForegroundControlDefault": "color",
      "colorForegroundControlDisabled": "color",
      "colorShadowDefault": "color",
      "colorShadowLayoutToggle": "color",
      "colorShadowMedium": "color",
      "colorShadowSide": "color",
      "colorStrokeChartLine": "color",
      "colorStrokeCodeEditorResizeHandler": "color",
      "colorStrokeCodeEditorGutterActiveLineDefault": "color",
      "colorStrokeCodeEditorGutterActiveLineHover": "color",
      "colorTextAccent": "color",
      "colorTextBodyDefault": "color",
      "colorTextBodySecondary": "color",
      "colorTextBreadcrumbCurrent": "color",
      "colorTextBreadcrumbIcon": "color",
      "colorTextButtonInlineIconDefault": "color",
      "colorTextButtonInlineIconDisabled": "color",
      "colorTextButtonInlineIconHover": "color",
      "colorTextButtonNormalActive": "color",
      "colorTextButtonNormalDefault": "color",
      "colorTextButtonNormalHover": "color",
      "colorTextLinkButtonNormalDefault": "color",
      "colorTextLinkButtonNormalHover": "color",
      "colorTextLinkButtonNormalActive": "color",
      "colorTextButtonPrimaryActive": "color",
      "colorTextButtonPrimaryDefault": "color",
      "colorTextButtonPrimaryHover": "color",
      "colorTextCalendarDayHover": "color",
      "colorTextCalendarDaySelected": "color",
      "colorTextCalendarMonth": "color",
      "colorTextCodeEditorGutterActiveLine": "color",
      "colorTextCodeEditorGutterDefault": "color",
      "colorTextCodeEditorStatusBarDisabled": "color",
      "colorTextCodeEditorTabButtonError": "color",
      "colorTextColumnHeader": "color",
      "colorTextColumnSortingIcon": "color",
      "colorTextControlDisabled": "color",
      "colorTextCounter": "color",
      "colorTextDisabled": "color",
      "colorTextDropdownFooter": "color",
      "colorTextDropdownGroupLabel": "color",
      "colorTextDropdownHeader": "color",
      "colorTextDropdownItemDefault": "color",
      "colorTextDropdownItemDimmed": "color",
      "colorTextDropdownItemDisabled": "color",
      "colorTextDropdownItemFilterMatch": "color",
      "colorTextDropdownItemHighlighted": "color",
      "colorTextDropdownItemSecondary": "color",
      "colorTextDropdownItemSecondaryHover": "color",
      "colorTextEmpty": "color",
      "colorTextExpandableSectionDefault": "color",
      "colorTextExpandableSectionHover": "color",
      "colorTextExpandableSectionNavigationIconDefault": "color",
      "colorTextFormDefault": "color",
      "colorTextFormLabel": "color",
      "colorTextFormSecondary": "color",
      "colorTextGroupLabel": "color",
      "colorTextHeadingDefault": "color",
      "colorTextHeadingSecondary": "color",
      "colorTextHomeHeaderDefault": "color",
      "colorTextHomeHeaderSecondary": "color",
      "colorTextIconCaret": "color",
      "colorTextIconSubtle": "color",
      "colorTextInputDisabled": "color",
      "colorTextInputPlaceholder": "color",
      "colorTextInputPlaceholderDisabled": "color",
      "colorTextInteractiveActive": "color",
      "colorTextInteractiveDefault": "color",
      "colorTextInteractiveDisabled": "color",
      "colorTextInteractiveHover": "color",
      "colorTextInteractiveInvertedDefault": "color",
      "colorTextInteractiveInvertedHover": "color",
      "colorTextInverted": "color",
      "colorTextLabel": "color",
      "colorTextLayoutToggle": "color",
      "colorTextLayoutToggleActive": "color",
      "colorTextLayoutToggleHover": "color",
      "colorTextLayoutToggleSelected": "color",
      "colorTextLinkDefault": "color",
      "colorTextLinkHover": "color",
      "colorTextLinkInvertedHover": "color",
      "colorTextLinkButtonUnderline": "color",
      "colorTextLinkButtonUnderlineHover": "color",
      "colorTextLinkPrimaryUnderline": "color",
      "colorTextNotificationDefault": "color",
      "colorTextNotificationStackBar": "color",
      "colorTextPaginationPageNumberActiveDisabled": "color",
      "colorTextPaginationPageNumberDefault": "color",
      "colorTextSegmentActive": "color",
      "colorTextSegmentDefault": "color",
      "colorTextSegmentHover": "color",
      "colorTextSmall": "color",
      "colorTextStatusError": "color",
      "colorTextStatusInactive": "color",
      "colorTextStatusInfo": "color",
      "colorTextStatusSuccess": "color",
      "colorTextStatusWarning": "color",
      "colorTextTopNavigationTitle": "color",
      "colorBoardPlaceholderActive": "color",
      "colorBoardPlaceholderHover": "color",
      "colorDragPlaceholderActive": "color",
      "colorDragPlaceholderHover": "color",
      "colorDropzoneBackgroundActive": "color",
      "colorDropzoneBackgroundHover": "color",
      "colorDropzoneTextActive": "color",
      "colorDropzoneTextHover": "color",
      "motionDurationExtraFast": "motion",
      "motionDurationExtraSlow": "motion",
      "motionDurationFast": "motion",
      "motionDurationModerate": "motion",
      "motionDurationRefreshOnlyAmbient": "motion",
      "motionDurationRefreshOnlyFast": "motion",
      "motionDurationRefreshOnlyMedium": "motion",
      "motionDurationRefreshOnlySlow": "motion",
      "motionDurationRotate180": "motion",
      "motionDurationRotate90": "motion",
      "motionDurationShowPaced": "motion",
      "motionDurationShowQuick": "motion",
      "motionDurationSlow": "motion",
      "motionDurationTransitionQuick": "motion",
      "motionDurationTransitionShowPaced": "motion",
      "motionDurationTransitionShowQuick": "motion",
      "motionEasingEaseOutQuart": "motion",
      "motionEasingRefreshOnlyA": "motion",
      "motionEasingRefreshOnlyB": "motion",
      "motionEasingRefreshOnlyC": "motion",
      "motionEasingRefreshOnlyD": "motion",
      "motionEasingRotate180": "motion",
      "motionEasingRotate90": "motion",
      "motionEasingShowPaced": "motion",
      "motionEasingShowQuick": "motion",
      "motionEasingTransitionQuick": "motion",
      "motionEasingTransitionShowPaced": "motion",
      "motionEasingTransitionShowQuick": "motion",
      "motionEasingResponsive": "motion",
      "motionEasingSticky": "motion",
      "motionEasingExpressive": "motion",
      "motionDurationResponsive": "motion",
      "motionDurationExpressive": "motion",
      "motionDurationComplex": "motion",
      "motionKeyframesFadeIn": "motion",
      "motionKeyframesFadeOut": "motion",
      "motionKeyframesStatusIconError": "motion",
      "motionKeyframesScalePopup": "motion",
      "sizeCalendarGridWidth": "density",
      "sizeControl": "density",
      "sizeIconBig": "density",
      "sizeIconLarge": "density",
      "sizeIconMedium": "density",
      "sizeIconNormal": "density",
      "sizeTableSelectionHorizontal": "density",
      "sizeVerticalInput": "density",
      "sizeVerticalPanelIconOffset": "density",
      "spaceAlertActionLeft": "density",
      "spaceAlertHorizontal": "density",
      "spaceAlertMessageRight": "density",
      "spaceAlertVertical": "density",
      "spaceButtonFocusOutlineGutter": "density",
      "spaceButtonIconFocusOutlineGutterVertical": "density",
      "spaceButtonIconOnlyHorizontal": "density",
      "spaceButtonInlineIconFocusOutlineGutter": "density",
      "spaceButtonModalDismissVertical": "density",
      "spaceCalendarGridFocusOutlineGutter": "density",
      "spaceCalendarGridSelectedFocusOutlineGutter": "density",
      "spaceCardHorizontal": "density",
      "spaceCodeEditorStatusFocusOutlineGutter": "density",
      "spaceContainerContentTop": "density",
      "spaceContainerHeaderVertical": "density",
      "spaceContainerHorizontal": "density",
      "spaceContentHeaderPaddingBottom": "density",
      "spaceDarkHeaderOverlapDistance": "density",
      "spaceExpandableSectionIconOffsetTop": "density",
      "spaceFieldHorizontal": "density",
      "spaceFieldIconOffset": "density",
      "spaceFilteringTokenDismissButtonFocusOutlineGutter": "density",
      "spaceFilteringTokenOperationSelectFocusOutlineGutter": "density",
      "spaceFlashbarActionLeft": "density",
      "spaceFlashbarDismissRight": "density",
      "spaceFlashbarHorizontal": "density",
      "spaceGridGutter": "density",
      "spaceLayoutContentBottom": "density",
      "spaceLayoutToggleDiameter": "density",
      "spaceLayoutTogglePadding": "density",
      "spaceModalContentBottom": "density",
      "spaceModalHorizontal": "density",
      "spacePanelNavLeft": "density",
      "spacePanelSideLeft": "density",
      "spacePanelSideRight": "density",
      "spacePanelSplitTop": "density",
      "spaceSegmentedControlFocusOutlineGutter": "density",
      "spaceTableHeaderFocusOutlineGutter": "density",
      "spaceTabsContentTop": "density",
      "spaceTableHorizontal": "density",
      "spaceTableHeaderHorizontal": "density",
      "spaceTableContentBottom": "density",
      "spaceTableContentTop": "density",
      "spaceTableEmbeddedContentBottom": "density",
      "spaceTableEmbeddedHeaderTop": "density",
      "spaceTableFooterHorizontal": "density",
      "spaceTabsFocusOutlineGutter": "density",
      "spaceScaled2xNone": "density",
      "spaceScaled2xXxxs": "density",
      "spaceScaled2xXxs": "density",
      "spaceScaled2xXs": "density",
      "spaceScaled2xS": "density",
      "spaceScaled2xM": "density",
      "spaceScaled2xL": "density",
      "spaceScaled2xXl": "density",
      "spaceScaled2xXxl": "density",
      "spaceScaled2xXxxl": "density",
      "spaceScaledNone": "density",
      "spaceScaledXxxs": "density",
      "spaceScaledXxs": "density",
      "spaceScaledXs": "density",
      "spaceScaledS": "density",
      "spaceScaledM": "density",
      "spaceScaledL": "density",
      "spaceScaledXl": "density",
      "spaceScaledXxl": "density",
      "spaceScaledXxxl": "density",
      "spaceStaticXxxs": "density",
      "spaceStaticXxs": "density",
      "spaceStaticXs": "density",
      "spaceStaticS": "density",
      "spaceStaticM": "density",
      "spaceStaticL": "density",
      "spaceStaticXl": "density",
      "spaceStaticXxl": "density",
      "spaceStaticXxxl": "density",
      "spaceNone": "density",
      "spaceXxxs": "density",
      "spaceXxs": "density",
      "spaceXs": "density",
      "spaceS": "density",
      "spaceM": "density",
      "spaceL": "density",
      "spaceXl": "density",
      "spaceXxl": "density",
      "spaceXxxl": "density",
      "shadowContainer": "color",
      "shadowContainerStacked": "color",
      "shadowContainerActive": "color",
      "shadowDropdown": "color",
      "shadowDropup": "color",
      "shadowFlashCollapsed": "color",
      "shadowFlashSticky": "color",
      "shadowModal": "color",
      "shadowPanel": "color",
      "shadowPanelToggle": "color",
      "shadowPopover": "color",
      "shadowSplitBottom": "color",
      "shadowSplitSide": "color",
      "shadowSticky": "color",
      "shadowStickyEmbedded": "color",
      "shadowStickyColumnFirst": "color",
      "shadowStickyColumnLast": "color"
    }
  },
  "secondary": [
    {
      "id": "visual-refresh",
      "selector": ".awsui-visual-refresh",
      "modes": {
        "color": {
          "id": "color",
          "states": {
            "light": {
              "default": true
            },
            "dark": {
              "selector": ".awsui-dark-mode",
              "media": "not print"
            }
          }
        },
        "density": {
          "id": "density",
          "states": {
            "comfortable": {
              "default": true
            },
            "compact": {
              "selector": ".awsui-compact-mode"
            }
          }
        },
        "motion": {
          "id": "motion",
          "states": {
            "default": {
              "default": true
            },
            "disabled": {
              "selector": ".awsui-motion-disabled"
            }
          }
        }
      },
      "tokens": {
        "colorAmazonOrange": "#ff9900",
        "colorAwsSquidInk": "#232f3e",
        "colorBlack": "#000000",
        "colorBlue100": "#f2f8fd",
        "colorBlue200": "#d3e7f9",
        "colorBlue300": "#b5d6f4",
        "colorBlue400": "#89bdee",
        "colorBlue500": "#539fe5",
        "colorBlue600": "#0972d3",
        "colorBlue700": "#065299",
        "colorBlue800": "#033160",
        "colorBlue900": "#00142b",
        "colorBlueOpaque": "rgba(51, 136, 221, 0.5)",
        "colorGreen100": "#f2fcf3",
        "colorGreen500": "#29ad32",
        "colorGreen600": "#037f0c",
        "colorGreen700": "#1a520f",
        "colorGreen900": "#001a02",
        "colorGrey100": "#fbfbfb",
        "colorGrey125": "#f8f8f8",
        "colorGrey150": "#f4f4f4",
        "colorGrey200": "#e9ebed",
        "colorGrey300": "#d1d5db",
        "colorGrey400": "#9ba7b6",
        "colorGrey450": "#8d99a8",
        "colorGrey500": "#7d8998",
        "colorGrey550": "#5f6b7a",
        "colorGrey600": "#414d5c",
        "colorGrey650": "#354150",
        "colorGrey700": "#232f3e",
        "colorGrey750": "#192534",
        "colorGrey800": "#0f1b2a",
        "colorGrey900": "#000716",
        "colorGrey950": "#222222",
        "colorOrange100": "#fef6f0",
        "colorOrange500": "#ec7211",
        "colorOrange600": "#eb5f07",
        "colorOrange700": "#dd6b10",
        "colorRed100": "#fff7f7",
        "colorRed500": "#eb6f6f",
        "colorRed600": "#d91515",
        "colorRed700": "#7c2718",
        "colorRed900": "#1a0000",
        "colorTransparent": "transparent",
        "colorWhite": "#ffffff",
        "colorChartsRed300": {
          "light": "#ea7158",
          "dark": "#d63f38"
        },
        "colorChartsRed400": {
          "light": "#dc5032",
          "dark": "#ed5958"
        },
        "colorChartsRed500": {
          "light": "#d13313",
          "dark": "#fe6e73"
        },
        "colorChartsRed600": {
          "light": "#ba2e0f",
          "dark": "#ff8a8a"
        },
        "colorChartsRed700": {
          "light": "#a82a0c",
          "dark": "#ffa09e"
        },
        "colorChartsRed800": {
          "light": "#972709",
          "dark": "#ffb3b0"
        },
        "colorChartsRed900": {
          "light": "#892407",
          "dark": "#ffc4c0"
        },
        "colorChartsRed1000": {
          "light": "#7d2105",
          "dark": "#ffd2cf"
        },
        "colorChartsRed1100": {
          "light": "#721e03",
          "dark": "#ffe0dd"
        },
        "colorChartsRed1200": {
          "light": "#671c00",
          "dark": "#ffecea"
        },
        "colorChartsOrange300": {
          "light": "#e07941",
          "dark": "#c55305"
        },
        "colorChartsOrange400": {
          "light": "#cc5f21",
          "dark": "#de6923"
        },
        "colorChartsOrange500": {
          "light": "#bc4d01",
          "dark": "#f27c36"
        },
        "colorChartsOrange600": {
          "light": "#a84401",
          "dark": "#f89256"
        },
        "colorChartsOrange700": {
          "light": "#983c02",
          "dark": "#fca572"
        },
        "colorChartsOrange800": {
          "light": "#8a3603",
          "dark": "#ffb68b"
        },
        "colorChartsOrange900": {
          "light": "#7e3103",
          "dark": "#ffc6a4"
        },
        "colorChartsOrange1000": {
          "light": "#732c02",
          "dark": "#ffd4bb"
        },
        "colorChartsOrange1100": {
          "light": "#692801",
          "dark": "#ffe1cf"
        },
        "colorChartsOrange1200": {
          "light": "#602400",
          "dark": "#ffede2"
        },
        "colorChartsYellow300": {
          "light": "#b2911c",
          "dark": "#977001"
        },
        "colorChartsYellow400": {
          "light": "#9c7b0b",
          "dark": "#b08400"
        },
        "colorChartsYellow500": {
          "light": "#8a6b05",
          "dark": "#c59600"
        },
        "colorChartsYellow600": {
          "light": "#7b5f04",
          "dark": "#d3a61c"
        },
        "colorChartsYellow700": {
          "light": "#6f5504",
          "dark": "#dfb52c"
        },
        "colorChartsYellow800": {
          "light": "#654d03",
          "dark": "#eac33a"
        },
        "colorChartsYellow900": {
          "light": "#5d4503",
          "dark": "#f1cf65"
        },
        "colorChartsYellow1000": {
          "light": "#553f03",
          "dark": "#f7db8a"
        },
        "colorChartsYellow1100": {
          "light": "#4d3901",
          "dark": "#fce5a8"
        },
        "colorChartsYellow1200": {
          "light": "#483300",
          "dark": "#ffefc9"
        },
        "colorChartsGreen300": {
          "light": "#67a353",
          "dark": "#48851a"
        },
        "colorChartsGreen400": {
          "light": "#41902c",
          "dark": "#5a9b29"
        },
        "colorChartsGreen500": {
          "light": "#1f8104",
          "dark": "#69ae34"
        },
        "colorChartsGreen600": {
          "light": "#1a7302",
          "dark": "#7dbd4c"
        },
        "colorChartsGreen700": {
          "light": "#176702",
          "dark": "#8fca61"
        },
        "colorChartsGreen800": {
          "light": "#145d02",
          "dark": "#9fd673"
        },
        "colorChartsGreen900": {
          "light": "#125502",
          "dark": "#b2df8d"
        },
        "colorChartsGreen1000": {
          "light": "#104d01",
          "dark": "#c5e7a8"
        },
        "colorChartsGreen1100": {
          "light": "#0f4601",
          "dark": "#d5efbe"
        },
        "colorChartsGreen1200": {
          "light": "#0d4000",
          "dark": "#e4f7d5"
        },
        "colorChartsTeal300": {
          "light": "#2ea597",
          "dark": "#018977"
        },
        "colorChartsTeal400": {
          "light": "#1c8e81",
          "dark": "#009d89"
        },
        "colorChartsTeal500": {
          "light": "#0d7d70",
          "dark": "#00b09b"
        },
        "colorChartsTeal600": {
          "light": "#096f64",
          "dark": "#40bfa9"
        },
        "colorChartsTeal700": {
          "light": "#06645a",
          "dark": "#5fccb7"
        },
        "colorChartsTeal800": {
          "light": "#045b52",
          "dark": "#77d7c3"
        },
        "colorChartsTeal900": {
          "light": "#03524a",
          "dark": "#94e0d0"
        },
        "colorChartsTeal1000": {
          "light": "#014b44",
          "dark": "#ace9db"
        },
        "colorChartsTeal1100": {
          "light": "#01443e",
          "dark": "#c2f0e6"
        },
        "colorChartsTeal1200": {
          "light": "#003e38",
          "dark": "#d7f7f0"
        },
        "colorChartsBlue1300": {
          "light": "#529ccb",
          "dark": "#00819c"
        },
        "colorChartsBlue1400": {
          "light": "#3184c2",
          "dark": "#0497ba"
        },
        "colorChartsBlue1500": {
          "light": "#0273bb",
          "dark": "#08aad2"
        },
        "colorChartsBlue1600": {
          "light": "#0166ab",
          "dark": "#44b9dd"
        },
        "colorChartsBlue1700": {
          "light": "#015b9d",
          "dark": "#63c6e7"
        },
        "colorChartsBlue1800": {
          "light": "#015292",
          "dark": "#79d2f0"
        },
        "colorChartsBlue1900": {
          "light": "#014a87",
          "dark": "#98dcf5"
        },
        "colorChartsBlue11000": {
          "light": "#01437d",
          "dark": "#b3e4f8"
        },
        "colorChartsBlue11100": {
          "light": "#003c75",
          "dark": "#caedfc"
        },
        "colorChartsBlue11200": {
          "light": "#00366d",
          "dark": "#ddf4ff"
        },
        "colorChartsBlue2300": {
          "light": "#688ae8",
          "dark": "#486de8"
        },
        "colorChartsBlue2400": {
          "light": "#5978e3",
          "dark": "#6384f5"
        },
        "colorChartsBlue2500": {
          "light": "#4066df",
          "dark": "#7698fe"
        },
        "colorChartsBlue2600": {
          "light": "#3759ce",
          "dark": "#8ea9ff"
        },
        "colorChartsBlue2700": {
          "light": "#314fbf",
          "dark": "#a2b8ff"
        },
        "colorChartsBlue2800": {
          "light": "#2c46b1",
          "dark": "#b1c5ff"
        },
        "colorChartsBlue2900": {
          "light": "#273ea5",
          "dark": "#c3d1ff"
        },
        "colorChartsBlue21000": {
          "light": "#23379b",
          "dark": "#d2dcff"
        },
        "colorChartsBlue21100": {
          "light": "#1f3191",
          "dark": "#dfe6ff"
        },
        "colorChartsBlue21200": {
          "light": "#1b2b88",
          "dark": "#ecf0ff"
        },
        "colorChartsPurple300": {
          "light": "#a783e1",
          "dark": "#8d59de"
        },
        "colorChartsPurple400": {
          "light": "#9469d6",
          "dark": "#a173ea"
        },
        "colorChartsPurple500": {
          "light": "#8456ce",
          "dark": "#b088f5"
        },
        "colorChartsPurple600": {
          "light": "#7749bf",
          "dark": "#bf9bf9"
        },
        "colorChartsPurple700": {
          "light": "#6b40b2",
          "dark": "#cbabfc"
        },
        "colorChartsPurple800": {
          "light": "#6237a7",
          "dark": "#d6baff"
        },
        "colorChartsPurple900": {
          "light": "#59309d",
          "dark": "#dfc8ff"
        },
        "colorChartsPurple1000": {
          "light": "#512994",
          "dark": "#e8d5ff"
        },
        "colorChartsPurple1100": {
          "light": "#4a238b",
          "dark": "#efe2ff"
        },
        "colorChartsPurple1200": {
          "light": "#431d84",
          "dark": "#f5edff"
        },
        "colorChartsPink300": {
          "light": "#da7596",
          "dark": "#c64a70"
        },
        "colorChartsPink400": {
          "light": "#ce567c",
          "dark": "#d56889"
        },
        "colorChartsPink500": {
          "light": "#c33d69",
          "dark": "#e07f9d"
        },
        "colorChartsPink600": {
          "light": "#b1325c",
          "dark": "#eb92ad"
        },
        "colorChartsPink700": {
          "light": "#a32952",
          "dark": "#f5a2bb"
        },
        "colorChartsPink800": {
          "light": "#962249",
          "dark": "#ffb0c8"
        },
        "colorChartsPink900": {
          "light": "#8b1b42",
          "dark": "#ffc1d4"
        },
        "colorChartsPink1000": {
          "light": "#81143b",
          "dark": "#ffd1de"
        },
        "colorChartsPink1100": {
          "light": "#780d35",
          "dark": "#ffdfe8"
        },
        "colorChartsPink1200": {
          "light": "#6f062f",
          "dark": "#ffecf1"
        },
        "colorChartsStatusCritical": {
          "light": "{colorChartsRed1000}",
          "dark": "{colorChartsRed300}"
        },
        "colorChartsStatusHigh": {
          "light": "{colorChartsRed600}",
          "dark": "{colorChartsRed500}"
        },
        "colorChartsStatusMedium": {
          "light": "{colorChartsOrange400}",
          "dark": "{colorChartsOrange600}"
        },
        "colorChartsStatusLow": {
          "light": "{colorChartsYellow300}",
          "dark": "{colorChartsYellow700}"
        },
        "colorChartsStatusPositive": {
          "light": "{colorChartsGreen300}",
          "dark": "{colorChartsGreen500}"
        },
        "colorChartsStatusInfo": {
          "light": "{colorChartsBlue1400}",
          "dark": "{colorChartsBlue1500}"
        },
        "colorChartsStatusNeutral": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey500}"
        },
        "colorChartsThresholdNegative": {
          "light": "{colorRed600}",
          "dark": "{colorRed500}"
        },
        "colorChartsThresholdPositive": {
          "light": "{colorGreen600}",
          "dark": "{colorGreen500}"
        },
        "colorChartsThresholdInfo": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue400}"
        },
        "colorChartsThresholdNeutral": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorChartsLineGrid": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey600}"
        },
        "colorChartsLineTick": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey600}"
        },
        "colorChartsLineAxis": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey600}"
        },
        "colorChartsPaletteCategorical1": {
          "light": "{colorChartsBlue2300}",
          "dark": "{colorChartsBlue2300}"
        },
        "colorChartsPaletteCategorical2": {
          "light": "{colorChartsPink500}",
          "dark": "{colorChartsPink500}"
        },
        "colorChartsPaletteCategorical3": {
          "light": "{colorChartsTeal300}",
          "dark": "{colorChartsTeal300}"
        },
        "colorChartsPaletteCategorical4": {
          "light": "{colorChartsPurple500}",
          "dark": "{colorChartsPurple500}"
        },
        "colorChartsPaletteCategorical5": {
          "light": "{colorChartsOrange300}",
          "dark": "{colorChartsOrange300}"
        },
        "colorChartsPaletteCategorical6": {
          "light": "{colorChartsBlue2600}",
          "dark": "{colorChartsBlue2600}"
        },
        "colorChartsPaletteCategorical7": {
          "light": "{colorChartsPink800}",
          "dark": "{colorChartsPink800}"
        },
        "colorChartsPaletteCategorical8": {
          "light": "{colorChartsTeal600}",
          "dark": "{colorChartsTeal600}"
        },
        "colorChartsPaletteCategorical9": {
          "light": "{colorChartsPurple800}",
          "dark": "{colorChartsPurple800}"
        },
        "colorChartsPaletteCategorical10": {
          "light": "{colorChartsOrange600}",
          "dark": "{colorChartsOrange600}"
        },
        "colorChartsPaletteCategorical11": {
          "light": "{colorChartsBlue2900}",
          "dark": "{colorChartsBlue2900}"
        },
        "colorChartsPaletteCategorical12": {
          "light": "{colorChartsPink1100}",
          "dark": "{colorChartsPink1100}"
        },
        "colorChartsPaletteCategorical13": {
          "light": "{colorChartsTeal900}",
          "dark": "{colorChartsTeal900}"
        },
        "colorChartsPaletteCategorical14": {
          "light": "{colorChartsPurple1100}",
          "dark": "{colorChartsPurple1100}"
        },
        "colorChartsPaletteCategorical15": {
          "light": "{colorChartsOrange900}",
          "dark": "{colorChartsOrange900}"
        },
        "colorChartsPaletteCategorical16": {
          "light": "{colorChartsBlue21200}",
          "dark": "{colorChartsBlue21200}"
        },
        "colorChartsPaletteCategorical17": {
          "light": "{colorChartsPink400}",
          "dark": "{colorChartsPink400}"
        },
        "colorChartsPaletteCategorical18": {
          "light": "{colorChartsTeal1200}",
          "dark": "{colorChartsTeal1200}"
        },
        "colorChartsPaletteCategorical19": {
          "light": "{colorChartsPurple400}",
          "dark": "{colorChartsPurple400}"
        },
        "colorChartsPaletteCategorical20": {
          "light": "{colorChartsOrange1200}",
          "dark": "{colorChartsOrange1200}"
        },
        "colorChartsPaletteCategorical21": {
          "light": "{colorChartsBlue2500}",
          "dark": "{colorChartsBlue2500}"
        },
        "colorChartsPaletteCategorical22": {
          "light": "{colorChartsPink700}",
          "dark": "{colorChartsPink700}"
        },
        "colorChartsPaletteCategorical23": {
          "light": "{colorChartsTeal500}",
          "dark": "{colorChartsTeal500}"
        },
        "colorChartsPaletteCategorical24": {
          "light": "{colorChartsPurple700}",
          "dark": "{colorChartsPurple700}"
        },
        "colorChartsPaletteCategorical25": {
          "light": "{colorChartsOrange500}",
          "dark": "{colorChartsOrange500}"
        },
        "colorChartsPaletteCategorical26": {
          "light": "{colorChartsBlue2800}",
          "dark": "{colorChartsBlue2800}"
        },
        "colorChartsPaletteCategorical27": {
          "light": "{colorChartsPink1000}",
          "dark": "{colorChartsPink1000}"
        },
        "colorChartsPaletteCategorical28": {
          "light": "{colorChartsTeal800}",
          "dark": "{colorChartsTeal800}"
        },
        "colorChartsPaletteCategorical29": {
          "light": "{colorChartsPurple1000}",
          "dark": "{colorChartsPurple1000}"
        },
        "colorChartsPaletteCategorical30": {
          "light": "{colorChartsOrange800}",
          "dark": "{colorChartsOrange800}"
        },
        "colorChartsPaletteCategorical31": {
          "light": "{colorChartsBlue21100}",
          "dark": "{colorChartsBlue21100}"
        },
        "colorChartsPaletteCategorical32": {
          "light": "{colorChartsPink300}",
          "dark": "{colorChartsPink300}"
        },
        "colorChartsPaletteCategorical33": {
          "light": "{colorChartsTeal1100}",
          "dark": "{colorChartsTeal1100}"
        },
        "colorChartsPaletteCategorical34": {
          "light": "{colorChartsPurple300}",
          "dark": "{colorChartsPurple300}"
        },
        "colorChartsPaletteCategorical35": {
          "light": "{colorChartsOrange1100}",
          "dark": "{colorChartsOrange1100}"
        },
        "colorChartsPaletteCategorical36": {
          "light": "{colorChartsBlue2400}",
          "dark": "{colorChartsBlue2400}"
        },
        "colorChartsPaletteCategorical37": {
          "light": "{colorChartsPink600}",
          "dark": "{colorChartsPink600}"
        },
        "colorChartsPaletteCategorical38": {
          "light": "{colorChartsTeal400}",
          "dark": "{colorChartsTeal400}"
        },
        "colorChartsPaletteCategorical39": {
          "light": "{colorChartsPurple600}",
          "dark": "{colorChartsPurple600}"
        },
        "colorChartsPaletteCategorical40": {
          "light": "{colorChartsOrange400}",
          "dark": "{colorChartsOrange400}"
        },
        "colorChartsPaletteCategorical41": {
          "light": "{colorChartsBlue2700}",
          "dark": "{colorChartsBlue2700}"
        },
        "colorChartsPaletteCategorical42": {
          "light": "{colorChartsPink900}",
          "dark": "{colorChartsPink900}"
        },
        "colorChartsPaletteCategorical43": {
          "light": "{colorChartsTeal700}",
          "dark": "{colorChartsTeal700}"
        },
        "colorChartsPaletteCategorical44": {
          "light": "{colorChartsPurple900}",
          "dark": "{colorChartsPurple900}"
        },
        "colorChartsPaletteCategorical45": {
          "light": "{colorChartsOrange700}",
          "dark": "{colorChartsOrange700}"
        },
        "colorChartsPaletteCategorical46": {
          "light": "{colorChartsBlue21000}",
          "dark": "{colorChartsBlue21000}"
        },
        "colorChartsPaletteCategorical47": {
          "light": "{colorChartsPink1200}",
          "dark": "{colorChartsPink1200}"
        },
        "colorChartsPaletteCategorical48": {
          "light": "{colorChartsTeal1000}",
          "dark": "{colorChartsTeal1000}"
        },
        "colorChartsPaletteCategorical49": {
          "light": "{colorChartsPurple1200}",
          "dark": "{colorChartsPurple1200}"
        },
        "colorChartsPaletteCategorical50": {
          "light": "{colorChartsOrange1000}",
          "dark": "{colorChartsOrange1000}"
        },
        "colorGreyOpaque25": {
          "light": "rgba(255, 255, 255, 0.25)",
          "dark": "rgba(255, 255, 255, 0.25)"
        },
        "colorGreyOpaque40": {
          "light": "rgba(0, 0, 0, 0.4)",
          "dark": "rgba(0, 0, 0, 0.4)"
        },
        "colorGreyOpaque50": {
          "light": "rgba(0, 0, 0, 0.5)",
          "dark": "rgba(0, 0, 0, 0.5)"
        },
        "colorGreyOpaque70": {
          "light": "rgba(35, 47, 62, 0.7)",
          "dark": "rgba(0, 7, 22, 0.7)"
        },
        "colorGreyOpaque80": {
          "light": "rgba(22, 25, 31, 0.8)",
          "dark": "rgba(22, 25, 31, 0.8)"
        },
        "colorGreyOpaque90": {
          "light": "rgba(242, 243, 243, 0.9)",
          "dark": "rgba(242, 243, 243, 0.9)"
        },
        "colorGreyTransparent": {
          "light": "rgba(0, 7, 22, 0.12)",
          "dark": "rgba(0, 7, 22, 1)"
        },
        "colorGreyTransparentHeavy": {
          "light": "rgba(0, 7, 22, 0.12)",
          "dark": "rgba(0, 7, 22, 1)"
        },
        "colorGreyTransparentLight": {
          "light": "rgba(0, 7, 22, 0.12)",
          "dark": "rgba(0, 7, 22, 1)"
        },
        "colorBackgroundButtonLinkActive": {
          "light": "{colorBlue200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundButtonLinkHover": {
          "light": "{colorBlue100}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundButtonNormalActive": {
          "light": "{colorBlue200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundButtonNormalDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundButtonNormalDisabled": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundButtonNormalHover": {
          "light": "{colorBlue100}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundButtonPrimaryActive": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundButtonPrimaryDefault": {
          "light": "{colorBorderButtonNormalDefault}",
          "dark": "{colorBorderButtonNormalDefault}"
        },
        "colorBackgroundButtonPrimaryDisabled": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundButtonPrimaryHover": {
          "light": "{colorBorderButtonNormalHover}",
          "dark": "{colorBorderButtonNormalHover}"
        },
        "colorBackgroundCalendarToday": {
          "light": "{colorGrey150}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundCellShaded": {
          "light": "{colorGrey125}",
          "dark": "{colorGrey700}"
        },
        "colorBackgroundCodeEditorGutterActiveLineDefault": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey500}"
        },
        "colorBackgroundCodeEditorGutterActiveLineError": {
          "light": "{colorTextStatusError}",
          "dark": "{colorTextStatusError}"
        },
        "colorBackgroundCodeEditorGutterDefault": {
          "light": "{colorGrey150}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundCodeEditorLoading": {
          "light": "{colorGrey100}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundCodeEditorPaneItemHover": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundCodeEditorStatusBar": {
          "light": "{colorGrey150}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundContainerContent": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundContainerHeader": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundControlChecked": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundControlDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundControlDisabled": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundDropdownItemDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundDropdownItemDimmed": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorBackgroundDropdownItemFilterMatch": {
          "light": "{colorBlue100}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundDropdownItemHover": {
          "light": "{colorGrey150}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundDropdownItemSelected": {
          "light": "{colorBackgroundItemSelected}",
          "dark": "{colorBackgroundItemSelected}"
        },
        "colorBackgroundHomeHeader": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey900}"
        },
        "colorBackgroundInputDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundInputDisabled": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundItemSelected": {
          "light": "{colorBlue100}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundLayoutMain": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundLayoutMobilePanel": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey900}"
        },
        "colorBackgroundLayoutPanelContent": {
          "light": "{colorBackgroundContainerContent}",
          "dark": "{colorBackgroundContainerContent}"
        },
        "colorBackgroundLayoutPanelHover": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundLayoutToggleActive": {
          "light": "{colorGrey650}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundLayoutToggleDefault": {
          "light": "{colorGrey750}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundLayoutToggleHover": {
          "light": "{colorGrey650}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundLayoutToggleSelectedActive": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundLayoutToggleSelectedDefault": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundLayoutToggleSelectedHover": {
          "light": "{colorBlue700}",
          "dark": "{colorBlue400}"
        },
        "colorBackgroundModalOverlay": {
          "light": "{colorGreyOpaque70}",
          "dark": "{colorGreyOpaque70}"
        },
        "colorBackgroundNotificationBlue": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue600}"
        },
        "colorBackgroundNotificationGreen": {
          "light": "{colorGreen600}",
          "dark": "{colorGreen600}"
        },
        "colorBackgroundNotificationGrey": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey550}"
        },
        "colorBackgroundNotificationRed": {
          "light": "{colorRed600}",
          "dark": "{colorRed600}"
        },
        "colorBackgroundNotificationStackBar": {
          "light": "{colorGrey700}",
          "dark": "{colorGrey700}"
        },
        "colorBackgroundNotificationStackBarActive": {
          "light": "{colorGrey700}",
          "dark": "{colorGrey700}"
        },
        "colorBackgroundNotificationStackBarHover": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey600}"
        },
        "colorBackgroundPopover": {
          "light": "{colorWhite}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundProgressBarContentDefault": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundProgressBarContentInFlash": {
          "light": "{colorWhite}",
          "dark": "{colorWhite}"
        },
        "colorBackgroundProgressBarLayoutDefault": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey650}"
        },
        "colorBackgroundProgressBarLayoutInFlash": {
          "light": "{colorGreyOpaque25}",
          "dark": "{colorGreyOpaque25}"
        },
        "colorBackgroundSegmentActive": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBackgroundSegmentDefault": {
          "light": "{colorBackgroundButtonNormalDefault}",
          "dark": "{colorBackgroundButtonNormalDefault}"
        },
        "colorBackgroundSegmentDisabled": {
          "light": "{colorBackgroundButtonNormalDisabled}",
          "dark": "{colorBackgroundButtonNormalDisabled}"
        },
        "colorBackgroundSegmentHover": {
          "light": "{colorBackgroundSegmentDefault}",
          "dark": "{colorBackgroundSegmentDefault}"
        },
        "colorBackgroundStatusError": {
          "light": "{colorRed100}",
          "dark": "{colorRed900}"
        },
        "colorBackgroundStatusInfo": {
          "light": "{colorBlue100}",
          "dark": "{colorBlue900}"
        },
        "colorBackgroundStatusSuccess": {
          "light": "{colorGreen100}",
          "dark": "{colorGreen900}"
        },
        "colorBackgroundStatusWarning": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorBackgroundTableHeader": {
          "light": "{colorBackgroundContainerHeader}",
          "dark": "{colorBackgroundContainerHeader}"
        },
        "colorBackgroundTilesDisabled": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey750}"
        },
        "colorBackgroundToggleCheckedDisabled": {
          "light": "{colorBlue300}",
          "dark": "{colorBlue800}"
        },
        "colorBackgroundToggleDefault": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey500}"
        },
        "colorBorderButtonNormalActive": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue400}"
        },
        "colorBorderButtonNormalDefault": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBorderButtonNormalDisabled": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorBorderButtonNormalHover": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue400}"
        },
        "colorBorderButtonPrimaryDisabled": {
          "light": "{colorBackgroundButtonPrimaryDisabled}",
          "dark": "{colorBackgroundButtonPrimaryDisabled}"
        },
        "colorBorderCalendarGrid": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorBorderCalendarGridSelectedFocusRing": {
          "light": "{colorGrey100}",
          "dark": "{colorGrey800}"
        },
        "colorBorderCodeEditorAceActiveLineLightTheme": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey300}"
        },
        "colorBorderCodeEditorAceActiveLineDarkTheme": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey550}"
        },
        "colorBorderCodeEditorDefault": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey550}"
        },
        "colorBorderCodeEditorPaneItemHover": {
          "light": "{colorBorderDropdownItemHover}",
          "dark": "{colorBorderDropdownItemHover}"
        },
        "colorBorderContainerDivider": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorBorderContainerTop": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorBorderControlChecked": {
          "light": "{colorBackgroundControlChecked}",
          "dark": "{colorBackgroundControlChecked}"
        },
        "colorBorderControlDefault": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey500}"
        },
        "colorBorderControlDisabled": {
          "light": "{colorBackgroundControlDisabled}",
          "dark": "{colorBackgroundControlDisabled}"
        },
        "colorBorderDividerActive": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey100}"
        },
        "colorBorderDividerDefault": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey600}"
        },
        "colorBorderDividerPanelBottom": {
          "light": "{colorBorderDividerDefault}",
          "dark": "{colorGreyTransparent}"
        },
        "colorBorderDividerPanelSide": {
          "light": "{colorBorderDividerDefault}",
          "dark": "{colorBorderDividerDefault}"
        },
        "colorBorderDropdownContainer": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorBorderDropdownGroup": {
          "light": "{colorBorderDropdownItemDefault}",
          "dark": "{colorBorderDropdownItemDefault}"
        },
        "colorBorderDropdownItemDefault": {
          "light": "{colorBorderDividerDefault}",
          "dark": "{colorBorderDividerDefault}"
        },
        "colorBorderDropdownItemHover": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey550}"
        },
        "colorBorderDropdownItemDimmedHover": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey500}"
        },
        "colorBorderDropdownItemSelected": {
          "light": "{colorBorderItemSelected}",
          "dark": "{colorBorderItemSelected}"
        },
        "colorBorderDropdownItemTop": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorBorderEditableCellHover": {
          "light": "{colorBorderDropdownItemHover}",
          "dark": "{colorBorderDropdownItemHover}"
        },
        "colorBorderInputDefault": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey550}"
        },
        "colorBorderInputDisabled": {
          "light": "{colorBackgroundInputDisabled}",
          "dark": "{colorBackgroundInputDisabled}"
        },
        "colorBorderItemFocused": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBorderItemPlaceholder": {
          "light": "{colorBorderItemSelected}",
          "dark": "{colorBorderItemSelected}"
        },
        "colorBorderItemSelected": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBorderLayout": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey650}"
        },
        "colorBorderNotificationStackBar": {
          "light": "{colorGrey700}",
          "dark": "{colorGrey700}"
        },
        "colorBorderPopover": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorBorderSegmentActive": {
          "light": "{colorBorderSegmentDefault}",
          "dark": "{colorBorderSegmentDefault}"
        },
        "colorBorderSegmentDefault": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey300}"
        },
        "colorBorderSegmentDisabled": {
          "light": "{colorBorderSegmentDefault}",
          "dark": "{colorBorderSegmentDefault}"
        },
        "colorBorderSegmentHover": {
          "light": "{colorBorderSegmentDefault}",
          "dark": "{colorBorderSegmentDefault}"
        },
        "colorBorderStatusError": {
          "light": "{colorRed600}",
          "dark": "{colorRed500}"
        },
        "colorBorderStatusInfo": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorBorderStatusSuccess": {
          "light": "{colorGreen600}",
          "dark": "{colorGreen500}"
        },
        "colorBorderStatusWarning": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey450}"
        },
        "colorBorderDividerInteractiveDefault": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey300}"
        },
        "colorBorderTabsDivider": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey600}"
        },
        "colorBorderTabsShadow": {
          "light": "{colorGreyTransparent}",
          "dark": "{colorGreyTransparent}"
        },
        "colorBorderTabsUnderline": {
          "light": "{colorTextAccent}",
          "dark": "{colorTextAccent}"
        },
        "colorBorderTilesDisabled": {
          "light": "{colorBackgroundTilesDisabled}",
          "dark": "{colorBackgroundTilesDisabled}"
        },
        "colorBorderTutorial": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey600}"
        },
        "colorForegroundControlDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorForegroundControlDisabled": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorShadowDefault": {
          "light": "{colorGreyTransparentHeavy}",
          "dark": "{colorGreyTransparentHeavy}"
        },
        "colorShadowLayoutToggle": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey650}"
        },
        "colorShadowMedium": {
          "light": "{colorGreyTransparent}",
          "dark": "{colorGreyTransparent}"
        },
        "colorShadowSide": {
          "light": "{colorGreyTransparentLight}",
          "dark": "{colorGreyTransparentLight}"
        },
        "colorStrokeChartLine": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey500}"
        },
        "colorStrokeCodeEditorResizeHandler": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey300}"
        },
        "colorStrokeCodeEditorGutterActiveLineDefault": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey750}"
        },
        "colorStrokeCodeEditorGutterActiveLineHover": {
          "light": "{colorGrey100}",
          "dark": "{colorGrey900}"
        },
        "colorTextAccent": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextBodyDefault": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey300}"
        },
        "colorTextBodySecondary": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey300}"
        },
        "colorTextBreadcrumbCurrent": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey500}"
        },
        "colorTextBreadcrumbIcon": {
          "light": "{colorGrey500}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextButtonInlineIconDefault": {
          "light": "{colorTextLinkDefault}",
          "dark": "{colorTextLinkDefault}"
        },
        "colorTextButtonInlineIconDisabled": {
          "light": "{colorTextInteractiveDisabled}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextButtonInlineIconHover": {
          "light": "{colorTextLinkHover}",
          "dark": "{colorTextLinkHover}"
        },
        "colorTextButtonNormalActive": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue400}"
        },
        "colorTextButtonNormalDefault": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextButtonNormalHover": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue400}"
        },
        "colorTextLinkButtonNormalDefault": {
          "light": "{colorTextButtonNormalDefault}",
          "dark": "{colorTextButtonNormalDefault}"
        },
        "colorTextLinkButtonNormalHover": {
          "light": "{colorTextButtonNormalHover}",
          "dark": "{colorTextButtonNormalHover}"
        },
        "colorTextLinkButtonNormalActive": {
          "light": "{colorTextButtonNormalActive}",
          "dark": "{colorTextButtonNormalActive}"
        },
        "colorTextButtonPrimaryActive": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextButtonPrimaryDefault": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextButtonPrimaryHover": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextCalendarDayHover": {
          "light": "{colorTextDropdownItemDefault}",
          "dark": "{colorTextDropdownItemDefault}"
        },
        "colorTextCalendarDaySelected": {
          "light": "{colorTextAccent}",
          "dark": "{colorTextAccent}"
        },
        "colorTextCalendarMonth": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorTextCodeEditorGutterActiveLine": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextCodeEditorGutterDefault": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey300}"
        },
        "colorTextCodeEditorStatusBarDisabled": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey550}"
        },
        "colorTextCodeEditorTabButtonError": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextColumnHeader": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey400}"
        },
        "colorTextColumnSortingIcon": {
          "light": "{colorTextColumnHeader}",
          "dark": "{colorTextColumnHeader}"
        },
        "colorTextControlDisabled": {
          "light": "{colorTextInteractiveDisabled}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextCounter": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorTextDisabled": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorTextDropdownFooter": {
          "light": "{colorTextFormSecondary}",
          "dark": "{colorTextFormSecondary}"
        },
        "colorTextDropdownGroupLabel": {
          "light": "{colorTextGroupLabel}",
          "dark": "{colorTextGroupLabel}"
        },
        "colorTextDropdownHeader": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey100}"
        },
        "colorTextDropdownItemDefault": {
          "light": "{colorTextFormDefault}",
          "dark": "{colorTextFormDefault}"
        },
        "colorTextDropdownItemDimmed": {
          "light": "{colorTextInteractiveDisabled}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextDropdownItemDisabled": {
          "light": "{colorTextInteractiveDisabled}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextDropdownItemFilterMatch": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue400}"
        },
        "colorTextDropdownItemHighlighted": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey200}"
        },
        "colorTextDropdownItemSecondary": {
          "light": "{colorTextFormSecondary}",
          "dark": "{colorTextFormSecondary}"
        },
        "colorTextDropdownItemSecondaryHover": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey300}"
        },
        "colorTextEmpty": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey300}"
        },
        "colorTextExpandableSectionDefault": {
          "light": "{colorTextInteractiveActive}",
          "dark": "{colorTextInteractiveActive}"
        },
        "colorTextExpandableSectionHover": {
          "light": "{colorTextAccent}",
          "dark": "{colorTextAccent}"
        },
        "colorTextExpandableSectionNavigationIconDefault": {
          "light": "{colorTextInteractiveDefault}",
          "dark": "{colorTextInteractiveDefault}"
        },
        "colorTextFormDefault": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey300}"
        },
        "colorTextFormLabel": {
          "light": "{colorTextFormDefault}",
          "dark": "{colorTextFormDefault}"
        },
        "colorTextFormSecondary": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorTextGroupLabel": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey450}"
        },
        "colorTextHeadingDefault": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey200}"
        },
        "colorTextHeadingSecondary": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey450}"
        },
        "colorTextHomeHeaderDefault": {
          "light": "{colorWhite}",
          "dark": "{colorWhite}"
        },
        "colorTextHomeHeaderSecondary": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey300}"
        },
        "colorTextIconCaret": {
          "light": "{colorGrey500}",
          "dark": "{colorGrey450}"
        },
        "colorTextIconSubtle": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey400}"
        },
        "colorTextInputDisabled": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorTextInputPlaceholder": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey500}"
        },
        "colorTextInputPlaceholderDisabled": {
          "light": "{colorTextInputDisabled}",
          "dark": "{colorTextInputDisabled}"
        },
        "colorTextInteractiveActive": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey100}"
        },
        "colorTextInteractiveDefault": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey300}"
        },
        "colorTextInteractiveDisabled": {
          "light": "{colorGrey400}",
          "dark": "{colorGrey550}"
        },
        "colorTextInteractiveHover": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey100}"
        },
        "colorTextInteractiveInvertedDefault": {
          "light": "{colorGrey300}",
          "dark": "{colorGrey300}"
        },
        "colorTextInteractiveInvertedHover": {
          "light": "{colorGrey100}",
          "dark": "{colorGrey100}"
        },
        "colorTextInverted": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextLabel": {
          "light": "{colorTextFormLabel}",
          "dark": "{colorTextFormLabel}"
        },
        "colorTextLayoutToggle": {
          "light": "{colorWhite}",
          "dark": "{colorWhite}"
        },
        "colorTextLayoutToggleActive": {
          "light": "{colorWhite}",
          "dark": "{colorGrey800}"
        },
        "colorTextLayoutToggleHover": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextLayoutToggleSelected": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextLinkDefault": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextLinkHover": {
          "light": "{colorBlue800}",
          "dark": "{colorBlue400}"
        },
        "colorTextLinkInvertedHover": {
          "light": "{colorWhite}",
          "dark": "{colorWhite}"
        },
        "colorTextLinkButtonUnderline": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorTextLinkButtonUnderlineHover": {
          "light": "transparent",
          "dark": "transparent"
        },
        "colorTextLinkPrimaryUnderline": {
          "light": "{colorTextLinkDefault}",
          "dark": "{colorTextLinkDefault}"
        },
        "colorTextNotificationDefault": {
          "light": "{colorGrey100}",
          "dark": "{colorGrey100}"
        },
        "colorTextNotificationStackBar": {
          "light": "{colorWhite}",
          "dark": "{colorWhite}"
        },
        "colorTextPaginationPageNumberActiveDisabled": {
          "light": "{colorTextInteractiveDisabled}",
          "dark": "{colorTextInteractiveDisabled}"
        },
        "colorTextPaginationPageNumberDefault": {
          "light": "{colorTextInteractiveDefault}",
          "dark": "{colorGrey400}"
        },
        "colorTextSegmentActive": {
          "light": "{colorWhite}",
          "dark": "{colorGrey900}"
        },
        "colorTextSegmentDefault": {
          "light": "{colorGrey600}",
          "dark": "{colorGrey300}"
        },
        "colorTextSegmentHover": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextSmall": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorTextStatusError": {
          "light": "{colorRed600}",
          "dark": "{colorRed500}"
        },
        "colorTextStatusInactive": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey450}"
        },
        "colorTextStatusInfo": {
          "light": "{colorBlue600}",
          "dark": "{colorBlue500}"
        },
        "colorTextStatusSuccess": {
          "light": "{colorGreen600}",
          "dark": "{colorGreen500}"
        },
        "colorTextStatusWarning": {
          "light": "{colorRed600}",
          "dark": "{colorRed500}"
        },
        "colorTextTopNavigationTitle": {
          "light": "{colorGrey900}",
          "dark": "{colorGrey100}"
        },
        "colorBoardPlaceholderActive": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey550}"
        },
        "colorBoardPlaceholderHover": {
          "light": "{colorBlue200}",
          "dark": "{colorBlue600}"
        },
        "colorDragPlaceholderActive": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey550}"
        },
        "colorDragPlaceholderHover": {
          "light": "{colorBlue200}",
          "dark": "{colorBlue600}"
        },
        "colorDropzoneBackgroundActive": {
          "light": "{colorGrey200}",
          "dark": "{colorGrey500}"
        },
        "colorDropzoneBackgroundHover": {
          "light": "{colorBlue200}",
          "dark": "{colorBlue600}"
        },
        "colorDropzoneTextActive": {
          "light": "{colorGrey550}",
          "dark": "{colorGrey800}"
        },
        "colorDropzoneTextHover": {
          "light": "{colorBlue800}",
          "dark": "{colorWhite}"
        },
        "fontBodyMLineHeight": "22px",
        "fontBodyMSize": "14px",
        "fontBodySLetterSpacing": "0.005em",
        "fontBodySLineHeight": "16px",
        "fontBodySSize": "12px",
        "fontButtonLetterSpacing": "0.005em",
        "fontButtonWeight": "{fontWeightHeavy}",
        "fontChartDetailSize": "{fontBodySSize}",
        "fontDisplayLLetterSpacing": "-0.03em",
        "fontDisplayLLineHeight": "54px",
        "fontDisplayLSize": "48px",
        "fontDisplayLabelWeight": "700",
        "fontExpandableHeadingSize": "{fontHeadingSSize}",
        "fontFamilyBase": "'Open Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
        "fontFamilyMonospace": "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
        "fontHeaderH2DescriptionLineHeight": "{fontBodyMLineHeight}",
        "fontHeaderH2DescriptionSize": "{fontBodyMSize}",
        "fontHeadingLLetterSpacing": "-0.015em",
        "fontHeadingLLineHeight": "30px",
        "fontHeadingLSize": "24px",
        "fontHeadingLWeight": "{fontWeightHeavy}",
        "fontHeadingMLetterSpacing": "-0.010em",
        "fontHeadingMLineHeight": "24px",
        "fontHeadingMSize": "20px",
        "fontHeadingMWeight": "{fontWeightHeavy}",
        "fontHeadingSLetterSpacing": "-0.005em",
        "fontHeadingSLineHeight": "20px",
        "fontHeadingSSize": "16px",
        "fontHeadingSWeight": "{fontWeightHeavy}",
        "fontHeadingXlLetterSpacing": "-0.02em",
        "fontHeadingXlLineHeight": "40px",
        "fontHeadingXlSize": "32px",
        "fontHeadingXlWeight": "{fontWeightHeavy}",
        "fontHeadingXsLineHeight": "18px",
        "fontHeadingXsSize": "14px",
        "fontHeadingXsWeight": "{fontWeightHeavy}",
        "fontBoxValueLargeWeight": "{fontWeightHeavy}",
        "fontLinkButtonLetterSpacing": "{fontButtonLetterSpacing}",
        "fontLinkButtonWeight": "{fontButtonWeight}",
        "fontLinkPrimaryDecoration": "underline",
        "fontLinkPrimaryLetterSpacing": "\"inherit\"",
        "fontLinkPrimaryWeight": "\"inherit\"",
        "fontPanelHeaderLineHeight": "{fontHeadingMLineHeight}",
        "fontPanelHeaderSize": "{fontHeadingMSize}",
        "fontSmoothingWebkit": "antialiased",
        "fontSmoothingMozOsx": "grayscale",
        "fontTabsDisabledWeight": "{fontWayfindingLinkActiveWeight}",
        "fontTabsLineHeight": "{fontHeadingSLineHeight}",
        "fontTabsSize": "{fontHeadingSSize}",
        "fontWayfindingLinkActiveWeight": "{fontWeightHeavy}",
        "fontWeightHeavy": "800",
        "borderActiveWidth": "4px",
        "borderCodeEditorStatusDividerWidth": "{borderDividerSectionWidth}",
        "borderContainerStickyWidth": "0px",
        "borderContainerTopWidth": "0px",
        "borderControlFocusRingShadowSpread": "0px",
        "borderControlInvalidFocusRingShadowSpread": "2px",
        "borderDividerListWidth": "1px",
        "borderDividerSectionWidth": "2px",
        "borderDropdownVirtualOffsetWidth": "2px",
        "borderFieldWidth": "2px",
        "borderInvalidWidth": "8px",
        "borderItemWidth": "2px",
        "borderLineChartDashArray": "3 5",
        "borderLineChartLineJoin": "round",
        "borderLineChartWidth": "2px",
        "borderPanelHeaderWidth": "2px",
        "borderPanelTopWidth": "1px",
        "borderRadiusAlert": "{borderRadiusFlashbar}",
        "borderRadiusBadge": "4px",
        "borderRadiusButton": "20px",
        "borderRadiusCalendarDayFocusRing": "3px",
        "borderRadiusCodeEditor": "{borderRadiusInput}",
        "borderRadiusContainer": "16px",
        "borderRadiusControlCircularFocusRing": "4px",
        "borderRadiusControlDefaultFocusRing": "4px",
        "borderRadiusDropdown": "{borderRadiusItem}",
        "borderRadiusDropzone": "12px",
        "borderRadiusFlashbar": "12px",
        "borderRadiusItem": "8px",
        "borderRadiusInput": "8px",
        "borderRadiusPopover": "{borderRadiusInput}",
        "borderRadiusTabsFocusRing": "20px",
        "borderRadiusTiles": "{borderRadiusInput}",
        "borderRadiusToken": "{borderRadiusInput}",
        "borderRadiusTutorialPanelItem": "{borderRadiusInput}",
        "borderTableStickyWidth": "2px",
        "borderLinkFocusRingOutline": "0",
        "borderLinkFocusRingShadowSpread": "2px",
        "motionDurationExtraFast": {
          "default": "45ms",
          "disabled": "0ms"
        },
        "motionDurationExtraSlow": {
          "default": "270ms",
          "disabled": "0ms"
        },
        "motionDurationFast": {
          "default": "90ms",
          "disabled": "0ms"
        },
        "motionDurationModerate": {
          "default": "135ms",
          "disabled": "0ms"
        },
        "motionDurationRefreshOnlyAmbient": {
          "default": "2000ms",
          "disabled": "0ms"
        },
        "motionDurationRefreshOnlyFast": {
          "default": "115ms",
          "disabled": "0ms"
        },
        "motionDurationRefreshOnlyMedium": {
          "default": "165ms",
          "disabled": "0ms"
        },
        "motionDurationRefreshOnlySlow": {
          "default": "250ms",
          "disabled": "0ms"
        },
        "motionDurationRotate180": {
          "default": "{motionDurationModerate}",
          "disabled": "{motionDurationModerate}"
        },
        "motionDurationRotate90": {
          "default": "{motionDurationModerate}",
          "disabled": "{motionDurationModerate}"
        },
        "motionDurationShowPaced": {
          "default": "{motionDurationSlow}",
          "disabled": "{motionDurationSlow}"
        },
        "motionDurationShowQuick": {
          "default": "{motionDurationModerate}",
          "disabled": "{motionDurationModerate}"
        },
        "motionDurationSlow": {
          "default": "180ms",
          "disabled": "0ms"
        },
        "motionDurationTransitionQuick": {
          "default": "{motionDurationFast}",
          "disabled": "{motionDurationFast}"
        },
        "motionDurationTransitionShowPaced": {
          "default": "{motionDurationSlow}",
          "disabled": "{motionDurationSlow}"
        },
        "motionDurationTransitionShowQuick": {
          "default": "{motionDurationFast}",
          "disabled": "{motionDurationFast}"
        },
        "motionEasingEaseOutQuart": {
          "default": "cubic-bezier(0.165, 0.84, 0.44, 1)",
          "disabled": "cubic-bezier(0.165, 0.84, 0.44, 1)"
        },
        "motionEasingRefreshOnlyA": {
          "default": "cubic-bezier(0, 0, 0, 1)",
          "disabled": "cubic-bezier(0, 0, 0, 1)"
        },
        "motionEasingRefreshOnlyB": {
          "default": "cubic-bezier(1, 0, 0.83, 1)",
          "disabled": "cubic-bezier(1, 0, 0.83, 1)"
        },
        "motionEasingRefreshOnlyC": {
          "default": "cubic-bezier(0.84, 0, 0.16, 1)",
          "disabled": "cubic-bezier(0.84, 0, 0.16, 1)"
        },
        "motionEasingRefreshOnlyD": {
          "default": "cubic-bezier(0.33, 0, 0.67, 1)",
          "disabled": "cubic-bezier(0.33, 0, 0.67, 1)"
        },
        "motionEasingRotate180": {
          "default": "{motionEasingEaseOutQuart}",
          "disabled": "{motionEasingEaseOutQuart}"
        },
        "motionEasingRotate90": {
          "default": "{motionEasingEaseOutQuart}",
          "disabled": "{motionEasingEaseOutQuart}"
        },
        "motionEasingShowPaced": {
          "default": "ease-out",
          "disabled": "ease-out"
        },
        "motionEasingShowQuick": {
          "default": "ease-out",
          "disabled": "ease-out"
        },
        "motionEasingTransitionQuick": {
          "default": "linear",
          "disabled": "linear"
        },
        "motionEasingTransitionShowPaced": {
          "default": "ease-out",
          "disabled": "ease-out"
        },
        "motionEasingTransitionShowQuick": {
          "default": "linear",
          "disabled": "linear"
        },
        "motionEasingResponsive": {
          "default": "{motionEasingRefreshOnlyA}",
          "disabled": "{motionEasingRefreshOnlyA}"
        },
        "motionEasingSticky": {
          "default": "{motionEasingRefreshOnlyB}",
          "disabled": "{motionEasingRefreshOnlyB}"
        },
        "motionEasingExpressive": {
          "default": "{motionEasingRefreshOnlyC}",
          "disabled": "{motionEasingRefreshOnlyC}"
        },
        "motionDurationResponsive": {
          "default": "{motionDurationRefreshOnlyFast}",
          "disabled": "{motionDurationRefreshOnlyFast}"
        },
        "motionDurationExpressive": {
          "default": "{motionDurationRefreshOnlyMedium}",
          "disabled": "{motionDurationRefreshOnlyMedium}"
        },
        "motionDurationComplex": {
          "default": "{motionDurationRefreshOnlySlow}",
          "disabled": "{motionDurationRefreshOnlySlow}"
        },
        "motionKeyframesFadeIn": {
          "default": "awsui-fade-in-35003c",
          "disabled": "awsui-fade-in-35003c"
        },
        "motionKeyframesFadeOut": {
          "default": "awsui-fade-out-35003c",
          "disabled": "awsui-fade-out-35003c"
        },
        "motionKeyframesStatusIconError": {
          "default": "awsui-status-icon-error-35003c",
          "disabled": "awsui-status-icon-error-35003c"
        },
        "motionKeyframesScalePopup": {
          "default": "awsui-scale-popup-35003c",
          "disabled": "awsui-scale-popup-35003c"
        },
        "sizeCalendarGridWidth": {
          "comfortable": "238px",
          "compact": "238px"
        },
        "sizeControl": {
          "comfortable": "16px",
          "compact": "16px"
        },
        "sizeIconBig": {
          "comfortable": "32px",
          "compact": "32px"
        },
        "sizeIconLarge": {
          "comfortable": "48px",
          "compact": "48px"
        },
        "sizeIconMedium": {
          "comfortable": "20px",
          "compact": "20px"
        },
        "sizeIconNormal": {
          "comfortable": "16px",
          "compact": "16px"
        },
        "sizeTableSelectionHorizontal": {
          "comfortable": "40px",
          "compact": "40px"
        },
        "sizeVerticalInput": {
          "comfortable": "34px",
          "compact": "30px"
        },
        "sizeVerticalPanelIconOffset": {
          "comfortable": "15px",
          "compact": "13px"
        },
        "spaceAlertActionLeft": {
          "comfortable": "{spaceS}",
          "compact": "{spaceS}"
        },
        "spaceAlertHorizontal": {
          "comfortable": "{spaceFlashbarHorizontal}",
          "compact": "{spaceFlashbarHorizontal}"
        },
        "spaceAlertMessageRight": {
          "comfortable": "{spaceXxs}",
          "compact": "{spaceXxs}"
        },
        "spaceAlertVertical": {
          "comfortable": "{spaceScaledXs}",
          "compact": "{spaceScaledXs}"
        },
        "spaceButtonFocusOutlineGutter": {
          "comfortable": "4px",
          "compact": "4px"
        },
        "spaceButtonIconFocusOutlineGutterVertical": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceButtonIconOnlyHorizontal": {
          "comfortable": "7px",
          "compact": "5px"
        },
        "spaceButtonInlineIconFocusOutlineGutter": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceButtonModalDismissVertical": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceCalendarGridFocusOutlineGutter": {
          "comfortable": "-5px",
          "compact": "-5px"
        },
        "spaceCalendarGridSelectedFocusOutlineGutter": {
          "comfortable": "{spaceCalendarGridFocusOutlineGutter}",
          "compact": "{spaceCalendarGridFocusOutlineGutter}"
        },
        "spaceCardHorizontal": {
          "comfortable": "{spaceContainerHorizontal}",
          "compact": "{spaceContainerHorizontal}"
        },
        "spaceCodeEditorStatusFocusOutlineGutter": {
          "comfortable": "-7px",
          "compact": "-7px"
        },
        "spaceContainerContentTop": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceContainerHeaderVertical": {
          "comfortable": "{spaceS}",
          "compact": "{spaceS}"
        },
        "spaceContainerHorizontal": {
          "comfortable": "{spaceL}",
          "compact": "{spaceL}"
        },
        "spaceContentHeaderPaddingBottom": {
          "comfortable": "{spaceXl}",
          "compact": "{spaceS}"
        },
        "spaceDarkHeaderOverlapDistance": {
          "comfortable": "36px",
          "compact": "32px"
        },
        "spaceExpandableSectionIconOffsetTop": {
          "comfortable": "{spaceScaled2xXxs}",
          "compact": "{spaceScaled2xXxs}"
        },
        "spaceFieldHorizontal": {
          "comfortable": "{spaceS}",
          "compact": "{spaceS}"
        },
        "spaceFieldIconOffset": {
          "comfortable": "36px",
          "compact": "36px"
        },
        "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
          "comfortable": "-5px",
          "compact": "-5px"
        },
        "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
          "comfortable": "-5px",
          "compact": "-5px"
        },
        "spaceFlashbarActionLeft": {
          "comfortable": "{spaceS}",
          "compact": "{spaceS}"
        },
        "spaceFlashbarDismissRight": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceFlashbarHorizontal": {
          "comfortable": "{spaceM}",
          "compact": "{spaceM}"
        },
        "spaceGridGutter": {
          "comfortable": "{spaceL}",
          "compact": "{spaceM}"
        },
        "spaceLayoutContentBottom": {
          "comfortable": "{spaceScaled2xXxxl}",
          "compact": "{spaceScaled2xXxxl}"
        },
        "spaceLayoutToggleDiameter": {
          "comfortable": "40px",
          "compact": "40px"
        },
        "spaceLayoutTogglePadding": {
          "comfortable": "{spaceScaledL}",
          "compact": "{spaceScaledL}"
        },
        "spaceModalContentBottom": {
          "comfortable": "{spaceScaled2xM}",
          "compact": "{spaceScaled2xM}"
        },
        "spaceModalHorizontal": {
          "comfortable": "{spaceContainerHorizontal}",
          "compact": "{spaceContainerHorizontal}"
        },
        "spacePanelNavLeft": {
          "comfortable": "28px",
          "compact": "28px"
        },
        "spacePanelSideLeft": {
          "comfortable": "28px",
          "compact": "28px"
        },
        "spacePanelSideRight": {
          "comfortable": "{spaceScaledXl}",
          "compact": "{spaceScaledXl}"
        },
        "spacePanelSplitTop": {
          "comfortable": "{spaceScaledL}",
          "compact": "{spaceScaledL}"
        },
        "spaceSegmentedControlFocusOutlineGutter": {
          "comfortable": "4px",
          "compact": "4px"
        },
        "spaceTableHeaderFocusOutlineGutter": {
          "comfortable": "0px",
          "compact": "-1px"
        },
        "spaceTabsContentTop": {
          "comfortable": "{spaceScaledS}",
          "compact": "{spaceScaledS}"
        },
        "spaceTableHorizontal": {
          "comfortable": "{spaceContainerHorizontal}",
          "compact": "{spaceContainerHorizontal}"
        },
        "spaceTableHeaderHorizontal": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceTableContentBottom": {
          "comfortable": "4px",
          "compact": "4px"
        },
        "spaceTableContentTop": {
          "comfortable": "{spaceScaledS}",
          "compact": "{spaceScaledS}"
        },
        "spaceTableEmbeddedContentBottom": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceTableEmbeddedHeaderTop": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceTableFooterHorizontal": {
          "comfortable": "{spaceTableHeaderHorizontal}",
          "compact": "{spaceTableHeaderHorizontal}"
        },
        "spaceTabsFocusOutlineGutter": {
          "comfortable": "-8px",
          "compact": "-8px"
        },
        "spaceScaled2xNone": {
          "comfortable": "{spaceNone}",
          "compact": "{spaceNone}"
        },
        "spaceScaled2xXxxs": {
          "comfortable": "{spaceXxxs}",
          "compact": "{spaceNone}"
        },
        "spaceScaled2xXxs": {
          "comfortable": "{spaceXxs}",
          "compact": "{spaceNone}"
        },
        "spaceScaled2xXs": {
          "comfortable": "{spaceXs}",
          "compact": "{spaceNone}"
        },
        "spaceScaled2xS": {
          "comfortable": "{spaceS}",
          "compact": "{spaceXxs}"
        },
        "spaceScaled2xM": {
          "comfortable": "{spaceM}",
          "compact": "{spaceXs}"
        },
        "spaceScaled2xL": {
          "comfortable": "{spaceL}",
          "compact": "{spaceS}"
        },
        "spaceScaled2xXl": {
          "comfortable": "{spaceXl}",
          "compact": "{spaceM}"
        },
        "spaceScaled2xXxl": {
          "comfortable": "{spaceXxl}",
          "compact": "{spaceL}"
        },
        "spaceScaled2xXxxl": {
          "comfortable": "{spaceXxxl}",
          "compact": "{spaceXl}"
        },
        "spaceScaledNone": {
          "comfortable": "{spaceNone}",
          "compact": "{spaceNone}"
        },
        "spaceScaledXxxs": {
          "comfortable": "{spaceXxxs}",
          "compact": "{spaceNone}"
        },
        "spaceScaledXxs": {
          "comfortable": "{spaceXxs}",
          "compact": "{spaceXxxs}"
        },
        "spaceScaledXs": {
          "comfortable": "{spaceXs}",
          "compact": "{spaceXxs}"
        },
        "spaceScaledS": {
          "comfortable": "{spaceS}",
          "compact": "{spaceXs}"
        },
        "spaceScaledM": {
          "comfortable": "{spaceM}",
          "compact": "{spaceS}"
        },
        "spaceScaledL": {
          "comfortable": "{spaceL}",
          "compact": "{spaceM}"
        },
        "spaceScaledXl": {
          "comfortable": "{spaceXl}",
          "compact": "{spaceL}"
        },
        "spaceScaledXxl": {
          "comfortable": "{spaceXxl}",
          "compact": "{spaceXl}"
        },
        "spaceScaledXxxl": {
          "comfortable": "{spaceXxxl}",
          "compact": "{spaceXxl}"
        },
        "spaceStaticXxxs": {
          "comfortable": "{spaceXxxs}",
          "compact": "{spaceXxxs}"
        },
        "spaceStaticXxs": {
          "comfortable": "{spaceXxs}",
          "compact": "{spaceXxs}"
        },
        "spaceStaticXs": {
          "comfortable": "{spaceXs}",
          "compact": "{spaceXs}"
        },
        "spaceStaticS": {
          "comfortable": "{spaceS}",
          "compact": "{spaceS}"
        },
        "spaceStaticM": {
          "comfortable": "{spaceM}",
          "compact": "{spaceM}"
        },
        "spaceStaticL": {
          "comfortable": "{spaceL}",
          "compact": "{spaceL}"
        },
        "spaceStaticXl": {
          "comfortable": "{spaceXl}",
          "compact": "{spaceXl}"
        },
        "spaceStaticXxl": {
          "comfortable": "{spaceXxl}",
          "compact": "{spaceXxl}"
        },
        "spaceStaticXxxl": {
          "comfortable": "{spaceXxxl}",
          "compact": "{spaceXxxl}"
        },
        "spaceNone": {
          "comfortable": "0px",
          "compact": "0px"
        },
        "spaceXxxs": {
          "comfortable": "2px",
          "compact": "2px"
        },
        "spaceXxs": {
          "comfortable": "4px",
          "compact": "4px"
        },
        "spaceXs": {
          "comfortable": "8px",
          "compact": "8px"
        },
        "spaceS": {
          "comfortable": "12px",
          "compact": "12px"
        },
        "spaceM": {
          "comfortable": "16px",
          "compact": "16px"
        },
        "spaceL": {
          "comfortable": "20px",
          "compact": "20px"
        },
        "spaceXl": {
          "comfortable": "24px",
          "compact": "24px"
        },
        "spaceXxl": {
          "comfortable": "32px",
          "compact": "32px"
        },
        "spaceXxxl": {
          "comfortable": "40px",
          "compact": "40px"
        },
        "shadowContainer": {
          "light": "0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12)",
          "dark": "0px 1px 8px 2px rgba(0, 7, 22, 0.6)"
        },
        "shadowContainerStacked": {
          "light": "-1px 1px 1px 0px #e9ebed, 1px 1px 1px 0px #e9ebed, 0px 9px 8px -7px rgb(0 7 22 / 12%), 8px 0px 8px -7px rgb(0 7 22 / 12%), -8px 0px 8px -7px rgb(0 7 22 / 12%)",
          "dark": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)"
        },
        "shadowContainerActive": {
          "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px #0007161a",
          "dark": "0px 1px 1px 1px #192534, 0px 6px 36px #000716"
        },
        "shadowDropdown": {
          "light": "0px 4px 20px 1px rgba(0, 7, 22, 0.10)",
          "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
        },
        "shadowDropup": {
          "light": "{shadowDropdown}",
          "dark": "{shadowDropdown}"
        },
        "shadowFlashCollapsed": {
          "light": "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "dark": "0px 4px 4px rgba(0, 0, 0, 0.25)"
        },
        "shadowFlashSticky": {
          "light": "0px 6px 36px rgba(0, 7, 22, 0.10)",
          "dark": "0px 6px 36px rgba(0, 7, 22, 1)"
        },
        "shadowModal": {
          "light": "{shadowDropdown}",
          "dark": "{shadowDropdown}"
        },
        "shadowPanel": {
          "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.10)",
          "dark": "0px 1px 1px 1px #192534, 0px 6px 36px rgba(0, 7, 22, 1)"
        },
        "shadowPanelToggle": {
          "light": "0px 6px 12px 1px rgba(0, 7, 22, 0.12)",
          "dark": "0px 6px 12px 1px rgba(0, 7, 22, 1)"
        },
        "shadowPopover": {
          "light": "{shadowDropdown}",
          "dark": "{shadowDropdown}"
        },
        "shadowSplitBottom": {
          "light": "0px -36px 36px -36px rgba(0, 7, 22, 0.10)",
          "dark": "0px -36px 36px -36px rgba(0, 7, 22, 1)"
        },
        "shadowSplitSide": {
          "light": "-1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.10)",
          "dark": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)"
        },
        "shadowSticky": {
          "light": "{shadowDropdown}",
          "dark": "{shadowDropdown}"
        },
        "shadowStickyEmbedded": {
          "light": "0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.10)",
          "dark": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)"
        },
        "shadowStickyColumnFirst": {
          "light": "4px 0px 20px 1px rgba(0, 7, 22, 0.1)",
          "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
        },
        "shadowStickyColumnLast": {
          "light": "-4px 0 20px 1px rgba(0, 28, 36, 0.1)",
          "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
        }
      },
      "contexts": {
        "compact-table": {
          "id": "compact-table",
          "selector": ".awsui-context-compact-table",
          "tokens": {
            "spaceAlertActionLeft": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceAlertHorizontal": {
              "comfortable": "{spaceFlashbarHorizontal}",
              "compact": "{spaceFlashbarHorizontal}"
            },
            "spaceAlertMessageRight": {
              "comfortable": "{spaceXxs}",
              "compact": "{spaceXxs}"
            },
            "spaceAlertVertical": {
              "comfortable": "{spaceScaledXs}",
              "compact": "{spaceScaledXs}"
            },
            "spaceButtonFocusOutlineGutter": {
              "comfortable": "4px",
              "compact": "4px"
            },
            "spaceButtonIconFocusOutlineGutterVertical": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceButtonIconOnlyHorizontal": {
              "comfortable": "7px",
              "compact": "5px"
            },
            "spaceButtonInlineIconFocusOutlineGutter": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceButtonModalDismissVertical": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceCalendarGridFocusOutlineGutter": {
              "comfortable": "-5px",
              "compact": "-5px"
            },
            "spaceCalendarGridSelectedFocusOutlineGutter": {
              "comfortable": "{spaceCalendarGridFocusOutlineGutter}",
              "compact": "{spaceCalendarGridFocusOutlineGutter}"
            },
            "spaceCardHorizontal": {
              "comfortable": "{spaceContainerHorizontal}",
              "compact": "{spaceContainerHorizontal}"
            },
            "spaceCodeEditorStatusFocusOutlineGutter": {
              "comfortable": "-7px",
              "compact": "-7px"
            },
            "spaceContainerContentTop": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceContainerHeaderVertical": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceContainerHorizontal": {
              "comfortable": "{spaceL}",
              "compact": "{spaceL}"
            },
            "spaceContentHeaderPaddingBottom": {
              "comfortable": "{spaceXl}",
              "compact": "{spaceS}"
            },
            "spaceDarkHeaderOverlapDistance": {
              "comfortable": "36px",
              "compact": "32px"
            },
            "spaceExpandableSectionIconOffsetTop": {
              "comfortable": "{spaceScaled2xXxs}",
              "compact": "{spaceScaled2xXxs}"
            },
            "spaceFieldHorizontal": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceFieldIconOffset": {
              "comfortable": "36px",
              "compact": "36px"
            },
            "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
              "comfortable": "-5px",
              "compact": "-5px"
            },
            "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
              "comfortable": "-5px",
              "compact": "-5px"
            },
            "spaceFlashbarActionLeft": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceFlashbarDismissRight": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceFlashbarHorizontal": {
              "comfortable": "{spaceM}",
              "compact": "{spaceM}"
            },
            "spaceGridGutter": {
              "comfortable": "{spaceL}",
              "compact": "{spaceM}"
            },
            "spaceLayoutContentBottom": {
              "comfortable": "{spaceScaled2xXxxl}",
              "compact": "{spaceScaled2xXxxl}"
            },
            "spaceLayoutToggleDiameter": {
              "comfortable": "40px",
              "compact": "40px"
            },
            "spaceLayoutTogglePadding": {
              "comfortable": "{spaceScaledL}",
              "compact": "{spaceScaledL}"
            },
            "spaceModalContentBottom": {
              "comfortable": "{spaceScaled2xM}",
              "compact": "{spaceScaled2xM}"
            },
            "spaceModalHorizontal": {
              "comfortable": "{spaceContainerHorizontal}",
              "compact": "{spaceContainerHorizontal}"
            },
            "spacePanelNavLeft": {
              "comfortable": "28px",
              "compact": "28px"
            },
            "spacePanelSideLeft": {
              "comfortable": "28px",
              "compact": "28px"
            },
            "spacePanelSideRight": {
              "comfortable": "{spaceScaledXl}",
              "compact": "{spaceScaledXl}"
            },
            "spacePanelSplitTop": {
              "comfortable": "{spaceScaledL}",
              "compact": "{spaceScaledL}"
            },
            "spaceSegmentedControlFocusOutlineGutter": {
              "comfortable": "4px",
              "compact": "4px"
            },
            "spaceTableHeaderFocusOutlineGutter": {
              "comfortable": "0px",
              "compact": "-1px"
            },
            "spaceTabsContentTop": {
              "comfortable": "{spaceScaledS}",
              "compact": "{spaceScaledS}"
            },
            "spaceTableHorizontal": {
              "comfortable": "{spaceContainerHorizontal}",
              "compact": "{spaceContainerHorizontal}"
            },
            "spaceTableHeaderHorizontal": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceTableContentBottom": {
              "comfortable": "4px",
              "compact": "4px"
            },
            "spaceTableContentTop": {
              "comfortable": "{spaceScaledS}",
              "compact": "{spaceScaledS}"
            },
            "spaceTableEmbeddedContentBottom": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceTableEmbeddedHeaderTop": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceTableFooterHorizontal": {
              "comfortable": "{spaceTableHeaderHorizontal}",
              "compact": "{spaceTableHeaderHorizontal}"
            },
            "spaceTabsFocusOutlineGutter": {
              "comfortable": "-8px",
              "compact": "-8px"
            },
            "spaceScaled2xNone": {
              "comfortable": "{spaceNone}",
              "compact": "{spaceNone}"
            },
            "spaceScaled2xXxxs": {
              "comfortable": "{spaceXxxs}",
              "compact": "{spaceNone}"
            },
            "spaceScaled2xXxs": {
              "comfortable": "{spaceXxs}",
              "compact": "{spaceNone}"
            },
            "spaceScaled2xXs": {
              "comfortable": "{spaceXs}",
              "compact": "{spaceNone}"
            },
            "spaceScaled2xS": {
              "comfortable": "{spaceS}",
              "compact": "{spaceXxs}"
            },
            "spaceScaled2xM": {
              "comfortable": "{spaceM}",
              "compact": "{spaceXs}"
            },
            "spaceScaled2xL": {
              "comfortable": "{spaceL}",
              "compact": "{spaceS}"
            },
            "spaceScaled2xXl": {
              "comfortable": "{spaceXl}",
              "compact": "{spaceM}"
            },
            "spaceScaled2xXxl": {
              "comfortable": "{spaceXxl}",
              "compact": "{spaceL}"
            },
            "spaceScaled2xXxxl": {
              "comfortable": "{spaceXxxl}",
              "compact": "{spaceXl}"
            },
            "spaceScaledNone": {
              "comfortable": "{spaceNone}",
              "compact": "{spaceNone}"
            },
            "spaceScaledXxxs": {
              "comfortable": "{spaceNone}",
              "compact": "{spaceNone}"
            },
            "spaceScaledXxs": {
              "comfortable": "{spaceXxxs}",
              "compact": "{spaceXxxs}"
            },
            "spaceScaledXs": {
              "comfortable": "{spaceXxs}",
              "compact": "{spaceXxs}"
            },
            "spaceScaledS": {
              "comfortable": "{spaceXs}",
              "compact": "{spaceXs}"
            },
            "spaceScaledM": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceScaledL": {
              "comfortable": "{spaceM}",
              "compact": "{spaceM}"
            },
            "spaceScaledXl": {
              "comfortable": "{spaceL}",
              "compact": "{spaceL}"
            },
            "spaceScaledXxl": {
              "comfortable": "{spaceXl}",
              "compact": "{spaceXl}"
            },
            "spaceScaledXxxl": {
              "comfortable": "{spaceXxl}",
              "compact": "{spaceXxl}"
            },
            "spaceStaticXxxs": {
              "comfortable": "{spaceXxxs}",
              "compact": "{spaceXxxs}"
            },
            "spaceStaticXxs": {
              "comfortable": "{spaceXxs}",
              "compact": "{spaceXxs}"
            },
            "spaceStaticXs": {
              "comfortable": "{spaceXs}",
              "compact": "{spaceXs}"
            },
            "spaceStaticS": {
              "comfortable": "{spaceS}",
              "compact": "{spaceS}"
            },
            "spaceStaticM": {
              "comfortable": "{spaceM}",
              "compact": "{spaceM}"
            },
            "spaceStaticL": {
              "comfortable": "{spaceL}",
              "compact": "{spaceL}"
            },
            "spaceStaticXl": {
              "comfortable": "{spaceXl}",
              "compact": "{spaceXl}"
            },
            "spaceStaticXxl": {
              "comfortable": "{spaceXxl}",
              "compact": "{spaceXxl}"
            },
            "spaceStaticXxxl": {
              "comfortable": "{spaceXxxl}",
              "compact": "{spaceXxxl}"
            },
            "spaceNone": {
              "comfortable": "0px",
              "compact": "0px"
            },
            "spaceXxxs": {
              "comfortable": "2px",
              "compact": "2px"
            },
            "spaceXxs": {
              "comfortable": "4px",
              "compact": "4px"
            },
            "spaceXs": {
              "comfortable": "8px",
              "compact": "8px"
            },
            "spaceS": {
              "comfortable": "12px",
              "compact": "12px"
            },
            "spaceM": {
              "comfortable": "16px",
              "compact": "16px"
            },
            "spaceL": {
              "comfortable": "20px",
              "compact": "20px"
            },
            "spaceXl": {
              "comfortable": "24px",
              "compact": "24px"
            },
            "spaceXxl": {
              "comfortable": "32px",
              "compact": "32px"
            },
            "spaceXxxl": {
              "comfortable": "40px",
              "compact": "40px"
            },
            "sizeVerticalInput": {
              "comfortable": "30px",
              "compact": "30px"
            }
          }
        },
        "top-navigation": {
          "id": "top-navigation",
          "selector": ".awsui-context-top-navigation",
          "tokens": {
            "colorGreyOpaque25": {
              "light": "rgba(255, 255, 255, 0.25)",
              "dark": "rgba(255, 255, 255, 0.25)"
            },
            "colorGreyOpaque40": {
              "light": "rgba(0, 0, 0, 0.4)",
              "dark": "rgba(0, 0, 0, 0.4)"
            },
            "colorGreyOpaque50": {
              "light": "rgba(0, 0, 0, 0.5)",
              "dark": "rgba(0, 0, 0, 0.5)"
            },
            "colorGreyOpaque70": {
              "light": "rgba(0, 7, 22, 0.7)",
              "dark": "rgba(0, 7, 22, 0.7)"
            },
            "colorGreyOpaque80": {
              "light": "rgba(22, 25, 31, 0.8)",
              "dark": "rgba(22, 25, 31, 0.8)"
            },
            "colorGreyOpaque90": {
              "light": "rgba(242, 243, 243, 0.9)",
              "dark": "rgba(242, 243, 243, 0.9)"
            },
            "colorGreyTransparent": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentHeavy": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentLight": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorBackgroundButtonLinkActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonLinkHover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonNormalActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonNormalDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundButtonNormalDisabled": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundButtonNormalHover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonPrimaryActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundButtonPrimaryDefault": {
              "light": "{colorBorderButtonNormalDefault}",
              "dark": "{colorBorderButtonNormalDefault}"
            },
            "colorBackgroundButtonPrimaryDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonPrimaryHover": {
              "light": "{colorBorderButtonNormalHover}",
              "dark": "{colorBorderButtonNormalHover}"
            },
            "colorBackgroundCalendarToday": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCellShaded": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBackgroundCodeEditorGutterActiveLineError": {
              "light": "{colorTextStatusError}",
              "dark": "{colorTextStatusError}"
            },
            "colorBackgroundCodeEditorGutterDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorLoading": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorPaneItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCodeEditorStatusBar": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundContainerContent": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundContainerHeader": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlChecked": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundControlDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundDropdownItemDimmed": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundDropdownItemFilterMatch": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemSelected": {
              "light": "{colorBackgroundItemSelected}",
              "dark": "{colorBackgroundItemSelected}"
            },
            "colorBackgroundHomeHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundInputDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundItemSelected": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutMain": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundLayoutMobilePanel": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutPanelContent": {
              "light": "{colorBackgroundContainerContent}",
              "dark": "{colorBackgroundContainerContent}"
            },
            "colorBackgroundLayoutPanelHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutToggleHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleSelectedActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBackgroundModalOverlay": {
              "light": "{colorGreyOpaque70}",
              "dark": "{colorGreyOpaque70}"
            },
            "colorBackgroundNotificationBlue": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorBackgroundNotificationGreen": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen600}"
            },
            "colorBackgroundNotificationGrey": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBackgroundNotificationRed": {
              "light": "{colorRed600}",
              "dark": "{colorRed600}"
            },
            "colorBackgroundNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarActive": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarHover": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBackgroundPopover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundProgressBarContentDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundProgressBarContentInFlash": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBackgroundProgressBarLayoutDefault": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundProgressBarLayoutInFlash": {
              "light": "{colorGreyOpaque25}",
              "dark": "{colorGreyOpaque25}"
            },
            "colorBackgroundSegmentActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundSegmentDefault": {
              "light": "{colorBackgroundButtonNormalDefault}",
              "dark": "{colorBackgroundButtonNormalDefault}"
            },
            "colorBackgroundSegmentDisabled": {
              "light": "{colorBackgroundButtonNormalDisabled}",
              "dark": "{colorBackgroundButtonNormalDisabled}"
            },
            "colorBackgroundSegmentHover": {
              "light": "{colorBackgroundSegmentDefault}",
              "dark": "{colorBackgroundSegmentDefault}"
            },
            "colorBackgroundStatusError": {
              "light": "{colorRed900}",
              "dark": "{colorRed900}"
            },
            "colorBackgroundStatusInfo": {
              "light": "{colorBlue900}",
              "dark": "{colorBlue900}"
            },
            "colorBackgroundStatusSuccess": {
              "light": "{colorGreen900}",
              "dark": "{colorGreen900}"
            },
            "colorBackgroundStatusWarning": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundTableHeader": {
              "light": "{colorBackgroundContainerHeader}",
              "dark": "{colorBackgroundContainerHeader}"
            },
            "colorBackgroundTilesDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundToggleCheckedDisabled": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue800}"
            },
            "colorBackgroundToggleDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderButtonNormalActive": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBorderButtonNormalDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderButtonNormalDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderButtonNormalHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBorderButtonPrimaryDisabled": {
              "light": "{colorBackgroundButtonPrimaryDisabled}",
              "dark": "{colorBackgroundButtonPrimaryDisabled}"
            },
            "colorBorderCalendarGrid": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderCalendarGridSelectedFocusRing": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBorderCodeEditorAceActiveLineLightTheme": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderCodeEditorAceActiveLineDarkTheme": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorPaneItemHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderContainerDivider": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderContainerTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderControlChecked": {
              "light": "{colorBackgroundControlChecked}",
              "dark": "{colorBackgroundControlChecked}"
            },
            "colorBorderControlDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderControlDisabled": {
              "light": "{colorBackgroundControlDisabled}",
              "dark": "{colorBackgroundControlDisabled}"
            },
            "colorBorderDividerActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderDividerDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderDividerPanelBottom": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderDividerPanelSide": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownContainer": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownGroup": {
              "light": "{colorBorderDropdownItemDefault}",
              "dark": "{colorBorderDropdownItemDefault}"
            },
            "colorBorderDropdownItemDefault": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownItemHover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownItemDimmedHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderDropdownItemSelected": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderDropdownItemTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderEditableCellHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderInputDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderInputDisabled": {
              "light": "{colorBackgroundInputDisabled}",
              "dark": "{colorBackgroundInputDisabled}"
            },
            "colorBorderItemFocused": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderItemPlaceholder": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderItemSelected": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderLayout": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBorderNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBorderPopover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderSegmentActive": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderSegmentDisabled": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentHover": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorBorderStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorBorderStatusWarning": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorBorderDividerInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderTabsDivider": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderTabsShadow": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderTabsUnderline": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorBorderTilesDisabled": {
              "light": "{colorBackgroundTilesDisabled}",
              "dark": "{colorBackgroundTilesDisabled}"
            },
            "colorBorderTutorial": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorForegroundControlDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorForegroundControlDisabled": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorShadowDefault": {
              "light": "{colorGreyTransparentHeavy}",
              "dark": "{colorGreyTransparentHeavy}"
            },
            "colorShadowLayoutToggle": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorShadowMedium": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorShadowSide": {
              "light": "{colorGreyTransparentLight}",
              "dark": "{colorGreyTransparentLight}"
            },
            "colorStrokeChartLine": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorStrokeCodeEditorResizeHandler": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorStrokeCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorStrokeCodeEditorGutterActiveLineHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextAccent": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextBodyDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBodySecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBreadcrumbCurrent": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextBreadcrumbIcon": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextButtonInlineIconDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextButtonNormalActive": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextButtonNormalDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextButtonNormalHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkButtonNormalDefault": {
              "light": "{colorTextButtonNormalDefault}",
              "dark": "{colorTextButtonNormalDefault}"
            },
            "colorTextLinkButtonNormalHover": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorTextLinkButtonNormalActive": {
              "light": "{colorTextButtonNormalActive}",
              "dark": "{colorTextButtonNormalActive}"
            },
            "colorTextButtonPrimaryActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCalendarDayHover": {
              "light": "{colorTextDropdownItemDefault}",
              "dark": "{colorTextDropdownItemDefault}"
            },
            "colorTextCalendarDaySelected": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextCalendarMonth": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextCodeEditorGutterActiveLine": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCodeEditorGutterDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextCodeEditorStatusBarDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextCodeEditorTabButtonError": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextColumnHeader": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextColumnSortingIcon": {
              "light": "{colorTextColumnHeader}",
              "dark": "{colorTextColumnHeader}"
            },
            "colorTextControlDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextCounter": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextDropdownFooter": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownGroupLabel": {
              "light": "{colorTextGroupLabel}",
              "dark": "{colorTextGroupLabel}"
            },
            "colorTextDropdownHeader": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextDropdownItemDefault": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextDropdownItemDimmed": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemFilterMatch": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextDropdownItemHighlighted": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextDropdownItemSecondary": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownItemSecondaryHover": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextEmpty": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextExpandableSectionDefault": {
              "light": "{colorTextInteractiveActive}",
              "dark": "{colorTextInteractiveActive}"
            },
            "colorTextExpandableSectionHover": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextExpandableSectionNavigationIconDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorTextInteractiveDefault}"
            },
            "colorTextFormDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextFormLabel": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextFormSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextGroupLabel": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHeadingDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextHeadingSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHomeHeaderDefault": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextHomeHeaderSecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextIconCaret": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextIconSubtle": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextInputDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInputPlaceholder": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextInputPlaceholderDisabled": {
              "light": "{colorTextInputDisabled}",
              "dark": "{colorTextInputDisabled}"
            },
            "colorTextInteractiveActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInteractiveHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveInvertedDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveInvertedHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInverted": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLabel": {
              "light": "{colorTextFormLabel}",
              "dark": "{colorTextFormLabel}"
            },
            "colorTextLayoutToggle": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLayoutToggleActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorTextLayoutToggleHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLayoutToggleSelected": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLinkDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLinkHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkInvertedHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonUnderline": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkButtonUnderlineHover": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkPrimaryUnderline": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextNotificationDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextNotificationStackBar": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextPaginationPageNumberActiveDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextPaginationPageNumberDefault": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextSegmentActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextSegmentHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextSmall": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextStatusInactive": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorTextStatusWarning": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextTopNavigationTitle": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBoardPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBoardPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDragPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorDragPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneBackgroundActive": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorDropzoneBackgroundHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneTextActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorDropzoneTextHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            }
          }
        },
        "header": {
          "id": "header",
          "selector": ".awsui-context-content-header",
          "tokens": {
            "shadowContainer": {
              "light": "none",
              "dark": "none"
            },
            "shadowContainerStacked": {
              "light": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)",
              "dark": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)"
            },
            "shadowContainerActive": {
              "light": "0px 1px 1px 1px #192534, 0px 6px 36px #000716",
              "dark": "0px 1px 1px 1px #192534, 0px 6px 36px #000716"
            },
            "shadowDropdown": {
              "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
              "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
            },
            "shadowDropup": {
              "light": "{shadowDropdown}",
              "dark": "{shadowDropdown}"
            },
            "shadowFlashCollapsed": {
              "light": "0px 4px 4px rgba(0, 0, 0, 0.25)",
              "dark": "0px 4px 4px rgba(0, 0, 0, 0.25)"
            },
            "shadowFlashSticky": {
              "light": "0px 6px 36px rgba(0, 7, 22, 0.10)",
              "dark": "0px 6px 36px rgba(0, 7, 22, 1)"
            },
            "shadowModal": {
              "light": "{shadowDropdown}",
              "dark": "{shadowDropdown}"
            },
            "shadowPanel": {
              "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.10)",
              "dark": "0px 1px 1px 1px #192534, 0px 6px 36px rgba(0, 7, 22, 1)"
            },
            "shadowPanelToggle": {
              "light": "0px 6px 12px 1px rgba(0, 7, 22, 0.12)",
              "dark": "0px 6px 12px 1px rgba(0, 7, 22, 1)"
            },
            "shadowPopover": {
              "light": "{shadowDropdown}",
              "dark": "{shadowDropdown}"
            },
            "shadowSplitBottom": {
              "light": "0px -36px 36px -36px rgba(0, 7, 22, 1)",
              "dark": "0px -36px 36px -36px rgba(0, 7, 22, 1)"
            },
            "shadowSplitSide": {
              "light": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)",
              "dark": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)"
            },
            "shadowSticky": {
              "light": "{shadowDropdown}",
              "dark": "{shadowDropdown}"
            },
            "shadowStickyEmbedded": {
              "light": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)",
              "dark": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)"
            },
            "shadowStickyColumnFirst": {
              "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
              "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
            },
            "shadowStickyColumnLast": {
              "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
              "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
            },
            "colorGreyOpaque25": {
              "light": "rgba(255, 255, 255, 0.25)",
              "dark": "rgba(255, 255, 255, 0.25)"
            },
            "colorGreyOpaque40": {
              "light": "rgba(0, 0, 0, 0.4)",
              "dark": "rgba(0, 0, 0, 0.4)"
            },
            "colorGreyOpaque50": {
              "light": "rgba(0, 0, 0, 0.5)",
              "dark": "rgba(0, 0, 0, 0.5)"
            },
            "colorGreyOpaque70": {
              "light": "rgba(0, 7, 22, 0.7)",
              "dark": "rgba(0, 7, 22, 0.7)"
            },
            "colorGreyOpaque80": {
              "light": "rgba(22, 25, 31, 0.8)",
              "dark": "rgba(22, 25, 31, 0.8)"
            },
            "colorGreyOpaque90": {
              "light": "rgba(242, 243, 243, 0.9)",
              "dark": "rgba(242, 243, 243, 0.9)"
            },
            "colorGreyTransparent": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentHeavy": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentLight": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorBackgroundButtonLinkActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonLinkHover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonNormalActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonNormalDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundButtonNormalDisabled": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundButtonNormalHover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonPrimaryActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundButtonPrimaryDefault": {
              "light": "{colorBorderButtonNormalDefault}",
              "dark": "{colorBorderButtonNormalDefault}"
            },
            "colorBackgroundButtonPrimaryDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonPrimaryHover": {
              "light": "{colorBorderButtonNormalHover}",
              "dark": "{colorBorderButtonNormalHover}"
            },
            "colorBackgroundCalendarToday": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCellShaded": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBackgroundCodeEditorGutterActiveLineError": {
              "light": "{colorTextStatusError}",
              "dark": "{colorTextStatusError}"
            },
            "colorBackgroundCodeEditorGutterDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorLoading": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorPaneItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCodeEditorStatusBar": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundContainerContent": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundContainerHeader": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlChecked": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundControlDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundControlDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundDropdownItemDimmed": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundDropdownItemFilterMatch": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemSelected": {
              "light": "{colorBackgroundItemSelected}",
              "dark": "{colorBackgroundItemSelected}"
            },
            "colorBackgroundHomeHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundItemSelected": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutMain": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutMobilePanel": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutPanelContent": {
              "light": "{colorBackgroundContainerContent}",
              "dark": "{colorBackgroundContainerContent}"
            },
            "colorBackgroundLayoutPanelHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutToggleHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleSelectedActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBackgroundModalOverlay": {
              "light": "{colorGreyOpaque70}",
              "dark": "{colorGreyOpaque70}"
            },
            "colorBackgroundNotificationBlue": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorBackgroundNotificationGreen": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen600}"
            },
            "colorBackgroundNotificationGrey": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBackgroundNotificationRed": {
              "light": "{colorRed600}",
              "dark": "{colorRed600}"
            },
            "colorBackgroundNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarActive": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarHover": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBackgroundPopover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundProgressBarContentDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundProgressBarContentInFlash": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBackgroundProgressBarLayoutDefault": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundProgressBarLayoutInFlash": {
              "light": "{colorGreyOpaque25}",
              "dark": "{colorGreyOpaque25}"
            },
            "colorBackgroundSegmentActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundSegmentDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundSegmentDisabled": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundSegmentHover": {
              "light": "{colorBackgroundSegmentDefault}",
              "dark": "{colorBackgroundSegmentDefault}"
            },
            "colorBackgroundStatusError": {
              "light": "{colorRed900}",
              "dark": "{colorRed900}"
            },
            "colorBackgroundStatusInfo": {
              "light": "{colorBlue900}",
              "dark": "{colorBlue900}"
            },
            "colorBackgroundStatusSuccess": {
              "light": "{colorGreen900}",
              "dark": "{colorGreen900}"
            },
            "colorBackgroundStatusWarning": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundTableHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundTilesDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundToggleCheckedDisabled": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue800}"
            },
            "colorBackgroundToggleDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderButtonNormalActive": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBorderButtonNormalDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderButtonNormalDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderButtonNormalHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBorderButtonPrimaryDisabled": {
              "light": "{colorBackgroundButtonPrimaryDisabled}",
              "dark": "{colorBackgroundButtonPrimaryDisabled}"
            },
            "colorBorderCalendarGrid": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderCalendarGridSelectedFocusRing": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBorderCodeEditorAceActiveLineLightTheme": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderCodeEditorAceActiveLineDarkTheme": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorPaneItemHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderContainerDivider": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderContainerTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderControlChecked": {
              "light": "{colorBackgroundControlChecked}",
              "dark": "{colorBackgroundControlChecked}"
            },
            "colorBorderControlDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderControlDisabled": {
              "light": "{colorBackgroundControlDisabled}",
              "dark": "{colorBackgroundControlDisabled}"
            },
            "colorBorderDividerActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderDividerDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderDividerPanelBottom": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderDividerPanelSide": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownContainer": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownGroup": {
              "light": "{colorBorderDropdownItemDefault}",
              "dark": "{colorBorderDropdownItemDefault}"
            },
            "colorBorderDropdownItemDefault": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownItemHover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownItemDimmedHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderDropdownItemSelected": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderDropdownItemTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderEditableCellHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderInputDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderInputDisabled": {
              "light": "{colorBackgroundInputDisabled}",
              "dark": "{colorBackgroundInputDisabled}"
            },
            "colorBorderItemFocused": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderItemPlaceholder": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderItemSelected": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderLayout": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBorderNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBorderPopover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderSegmentActive": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderSegmentDisabled": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentHover": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorBorderStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorBorderStatusWarning": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorBorderDividerInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderTabsDivider": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderTabsShadow": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderTabsUnderline": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorBorderTilesDisabled": {
              "light": "{colorBackgroundTilesDisabled}",
              "dark": "{colorBackgroundTilesDisabled}"
            },
            "colorBorderTutorial": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorForegroundControlDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorForegroundControlDisabled": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorShadowDefault": {
              "light": "{colorGreyTransparentHeavy}",
              "dark": "{colorGreyTransparentHeavy}"
            },
            "colorShadowLayoutToggle": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorShadowMedium": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorShadowSide": {
              "light": "{colorGreyTransparentLight}",
              "dark": "{colorGreyTransparentLight}"
            },
            "colorStrokeChartLine": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorStrokeCodeEditorResizeHandler": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorStrokeCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorStrokeCodeEditorGutterActiveLineHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextAccent": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextBodyDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBodySecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBreadcrumbCurrent": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextBreadcrumbIcon": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextButtonInlineIconDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextButtonNormalActive": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextButtonNormalDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextButtonNormalHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkButtonNormalDefault": {
              "light": "{colorTextButtonNormalDefault}",
              "dark": "{colorTextButtonNormalDefault}"
            },
            "colorTextLinkButtonNormalHover": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorTextLinkButtonNormalActive": {
              "light": "{colorTextButtonNormalActive}",
              "dark": "{colorTextButtonNormalActive}"
            },
            "colorTextButtonPrimaryActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCalendarDayHover": {
              "light": "{colorTextDropdownItemDefault}",
              "dark": "{colorTextDropdownItemDefault}"
            },
            "colorTextCalendarDaySelected": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextCalendarMonth": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextCodeEditorGutterActiveLine": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCodeEditorGutterDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextCodeEditorStatusBarDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextCodeEditorTabButtonError": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextColumnHeader": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextColumnSortingIcon": {
              "light": "{colorTextColumnHeader}",
              "dark": "{colorTextColumnHeader}"
            },
            "colorTextControlDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextCounter": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextDropdownFooter": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownGroupLabel": {
              "light": "{colorTextGroupLabel}",
              "dark": "{colorTextGroupLabel}"
            },
            "colorTextDropdownHeader": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextDropdownItemDefault": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextDropdownItemDimmed": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemFilterMatch": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextDropdownItemHighlighted": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextDropdownItemSecondary": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownItemSecondaryHover": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextEmpty": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextExpandableSectionDefault": {
              "light": "{colorTextInteractiveActive}",
              "dark": "{colorTextInteractiveActive}"
            },
            "colorTextExpandableSectionHover": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextExpandableSectionNavigationIconDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorTextInteractiveDefault}"
            },
            "colorTextFormDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextFormLabel": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextFormSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextGroupLabel": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHeadingDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextHeadingSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHomeHeaderDefault": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextHomeHeaderSecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextIconCaret": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextIconSubtle": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextInputDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInputPlaceholder": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextInputPlaceholderDisabled": {
              "light": "{colorTextInputDisabled}",
              "dark": "{colorTextInputDisabled}"
            },
            "colorTextInteractiveActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInteractiveHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveInvertedDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveInvertedHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInverted": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLabel": {
              "light": "{colorTextFormLabel}",
              "dark": "{colorTextFormLabel}"
            },
            "colorTextLayoutToggle": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLayoutToggleActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorTextLayoutToggleHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLayoutToggleSelected": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLinkDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLinkHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkInvertedHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonUnderline": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkButtonUnderlineHover": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkPrimaryUnderline": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextNotificationDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextNotificationStackBar": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextPaginationPageNumberActiveDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextPaginationPageNumberDefault": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextSegmentActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextSegmentHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextSmall": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextStatusInactive": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorTextStatusWarning": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextTopNavigationTitle": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBoardPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBoardPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDragPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorDragPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneBackgroundActive": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorDropzoneBackgroundHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneTextActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorDropzoneTextHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            }
          }
        },
        "flashbar": {
          "id": "flashbar",
          "selector": ".awsui-context-flashbar",
          "tokens": {
            "colorGreyOpaque25": {
              "light": "rgba(255, 255, 255, 0.25)",
              "dark": "rgba(255, 255, 255, 0.25)"
            },
            "colorGreyOpaque40": {
              "light": "rgba(0, 0, 0, 0.4)",
              "dark": "rgba(0, 0, 0, 0.4)"
            },
            "colorGreyOpaque50": {
              "light": "rgba(0, 0, 0, 0.5)",
              "dark": "rgba(0, 0, 0, 0.5)"
            },
            "colorGreyOpaque70": {
              "light": "rgba(35, 47, 62, 0.7)",
              "dark": "rgba(0, 7, 22, 0.7)"
            },
            "colorGreyOpaque80": {
              "light": "rgba(22, 25, 31, 0.8)",
              "dark": "rgba(22, 25, 31, 0.8)"
            },
            "colorGreyOpaque90": {
              "light": "rgba(242, 243, 243, 0.9)",
              "dark": "rgba(242, 243, 243, 0.9)"
            },
            "colorGreyTransparent": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentHeavy": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentLight": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorBackgroundButtonLinkActive": {
              "light": "{colorBlue200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonLinkHover": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonNormalActive": {
              "light": "rgba(0, 7, 22, 0.2)",
              "dark": "rgba(0, 7, 22, 0.2)"
            },
            "colorBackgroundButtonNormalDefault": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundButtonNormalDisabled": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundButtonNormalHover": {
              "light": "rgba(0, 7, 22, 0.15)",
              "dark": "rgba(0, 7, 22, 0.15)"
            },
            "colorBackgroundButtonPrimaryActive": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundButtonPrimaryDefault": {
              "light": "{colorBorderButtonNormalDefault}",
              "dark": "{colorBorderButtonNormalDefault}"
            },
            "colorBackgroundButtonPrimaryDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonPrimaryHover": {
              "light": "{colorBorderButtonNormalHover}",
              "dark": "{colorBorderButtonNormalHover}"
            },
            "colorBackgroundCalendarToday": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCellShaded": {
              "light": "{colorGrey125}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorBackgroundCodeEditorGutterActiveLineError": {
              "light": "{colorTextStatusError}",
              "dark": "{colorTextStatusError}"
            },
            "colorBackgroundCodeEditorGutterDefault": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorLoading": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorPaneItemHover": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCodeEditorStatusBar": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundContainerContent": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundContainerHeader": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlChecked": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundControlDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlDisabled": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundDropdownItemDimmed": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundDropdownItemFilterMatch": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemHover": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemSelected": {
              "light": "{colorBackgroundItemSelected}",
              "dark": "{colorBackgroundItemSelected}"
            },
            "colorBackgroundHomeHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundInputDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundItemSelected": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutMain": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundLayoutMobilePanel": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutPanelContent": {
              "light": "{colorBackgroundContainerContent}",
              "dark": "{colorBackgroundContainerContent}"
            },
            "colorBackgroundLayoutPanelHover": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutToggleHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleSelectedActive": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedHover": {
              "light": "{colorBlue700}",
              "dark": "{colorBlue400}"
            },
            "colorBackgroundModalOverlay": {
              "light": "{colorGreyOpaque70}",
              "dark": "{colorGreyOpaque70}"
            },
            "colorBackgroundNotificationBlue": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorBackgroundNotificationGreen": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen600}"
            },
            "colorBackgroundNotificationGrey": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey550}"
            },
            "colorBackgroundNotificationRed": {
              "light": "{colorRed600}",
              "dark": "{colorRed600}"
            },
            "colorBackgroundNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarActive": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarHover": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBackgroundPopover": {
              "light": "{colorWhite}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundProgressBarContentDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundProgressBarContentInFlash": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBackgroundProgressBarLayoutDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundProgressBarLayoutInFlash": {
              "light": "{colorGreyOpaque25}",
              "dark": "{colorGreyOpaque25}"
            },
            "colorBackgroundSegmentActive": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundSegmentDefault": {
              "light": "{colorBackgroundButtonNormalDefault}",
              "dark": "{colorBackgroundButtonNormalDefault}"
            },
            "colorBackgroundSegmentDisabled": {
              "light": "{colorBackgroundButtonNormalDisabled}",
              "dark": "{colorBackgroundButtonNormalDisabled}"
            },
            "colorBackgroundSegmentHover": {
              "light": "{colorBackgroundSegmentDefault}",
              "dark": "{colorBackgroundSegmentDefault}"
            },
            "colorBackgroundStatusError": {
              "light": "{colorRed100}",
              "dark": "{colorRed900}"
            },
            "colorBackgroundStatusInfo": {
              "light": "{colorBlue100}",
              "dark": "{colorBlue900}"
            },
            "colorBackgroundStatusSuccess": {
              "light": "{colorGreen100}",
              "dark": "{colorGreen900}"
            },
            "colorBackgroundStatusWarning": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundTableHeader": {
              "light": "{colorBackgroundContainerHeader}",
              "dark": "{colorBackgroundContainerHeader}"
            },
            "colorBackgroundTilesDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundToggleCheckedDisabled": {
              "light": "{colorBlue300}",
              "dark": "{colorBlue800}"
            },
            "colorBackgroundToggleDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey500}"
            },
            "colorBorderButtonNormalActive": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBorderButtonNormalDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderButtonNormalDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderButtonNormalHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBorderButtonPrimaryDisabled": {
              "light": "{colorBackgroundButtonPrimaryDisabled}",
              "dark": "{colorBackgroundButtonPrimaryDisabled}"
            },
            "colorBorderCalendarGrid": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderCalendarGridSelectedFocusRing": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey800}"
            },
            "colorBorderCodeEditorAceActiveLineLightTheme": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderCodeEditorAceActiveLineDarkTheme": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorPaneItemHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderContainerDivider": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderContainerTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderControlChecked": {
              "light": "{colorBackgroundControlChecked}",
              "dark": "{colorBackgroundControlChecked}"
            },
            "colorBorderControlDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderControlDisabled": {
              "light": "{colorBackgroundControlDisabled}",
              "dark": "{colorBackgroundControlDisabled}"
            },
            "colorBorderDividerActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorBorderDividerDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey600}"
            },
            "colorBorderDividerPanelBottom": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderDividerPanelSide": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownContainer": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownGroup": {
              "light": "{colorBorderDropdownItemDefault}",
              "dark": "{colorBorderDropdownItemDefault}"
            },
            "colorBorderDropdownItemDefault": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownItemHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownItemDimmedHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderDropdownItemSelected": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderDropdownItemTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderEditableCellHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderInputDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorBorderInputDisabled": {
              "light": "{colorBackgroundInputDisabled}",
              "dark": "{colorBackgroundInputDisabled}"
            },
            "colorBorderItemFocused": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderItemPlaceholder": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderItemSelected": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBorderLayout": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorBorderNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBorderPopover": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderSegmentActive": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorBorderSegmentDisabled": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentHover": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderStatusError": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorBorderStatusInfo": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBorderStatusSuccess": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen500}"
            },
            "colorBorderStatusWarning": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey450}"
            },
            "colorBorderDividerInteractiveDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey300}"
            },
            "colorBorderTabsDivider": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey600}"
            },
            "colorBorderTabsShadow": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderTabsUnderline": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorBorderTilesDisabled": {
              "light": "{colorBackgroundTilesDisabled}",
              "dark": "{colorBackgroundTilesDisabled}"
            },
            "colorBorderTutorial": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey600}"
            },
            "colorForegroundControlDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorForegroundControlDisabled": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorShadowDefault": {
              "light": "{colorGreyTransparentHeavy}",
              "dark": "{colorGreyTransparentHeavy}"
            },
            "colorShadowLayoutToggle": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorShadowMedium": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorShadowSide": {
              "light": "{colorGreyTransparentLight}",
              "dark": "{colorGreyTransparentLight}"
            },
            "colorStrokeChartLine": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorStrokeCodeEditorResizeHandler": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorStrokeCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey750}"
            },
            "colorStrokeCodeEditorGutterActiveLineHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey900}"
            },
            "colorTextAccent": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextBodyDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextBodySecondary": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextBreadcrumbCurrent": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorTextBreadcrumbIcon": {
              "light": "{colorGrey500}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextButtonInlineIconDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextButtonNormalActive": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextButtonNormalDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextButtonNormalHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonNormalDefault": {
              "light": "{colorTextButtonNormalDefault}",
              "dark": "{colorTextButtonNormalDefault}"
            },
            "colorTextLinkButtonNormalHover": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorTextLinkButtonNormalActive": {
              "light": "{colorTextButtonNormalActive}",
              "dark": "{colorTextButtonNormalActive}"
            },
            "colorTextButtonPrimaryActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryHover": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextCalendarDayHover": {
              "light": "{colorTextDropdownItemDefault}",
              "dark": "{colorTextDropdownItemDefault}"
            },
            "colorTextCalendarDaySelected": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextCalendarMonth": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextCodeEditorGutterActiveLine": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextCodeEditorGutterDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextCodeEditorStatusBarDisabled": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorTextCodeEditorTabButtonError": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextColumnHeader": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey400}"
            },
            "colorTextColumnSortingIcon": {
              "light": "{colorTextColumnHeader}",
              "dark": "{colorTextColumnHeader}"
            },
            "colorTextControlDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextCounter": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextDropdownFooter": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownGroupLabel": {
              "light": "{colorTextGroupLabel}",
              "dark": "{colorTextGroupLabel}"
            },
            "colorTextDropdownHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextDropdownItemDefault": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextDropdownItemDimmed": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemFilterMatch": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue400}"
            },
            "colorTextDropdownItemHighlighted": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey200}"
            },
            "colorTextDropdownItemSecondary": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownItemSecondaryHover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey300}"
            },
            "colorTextEmpty": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey300}"
            },
            "colorTextExpandableSectionDefault": {
              "light": "{colorTextInteractiveActive}",
              "dark": "{colorTextInteractiveActive}"
            },
            "colorTextExpandableSectionHover": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextExpandableSectionNavigationIconDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorTextInteractiveDefault}"
            },
            "colorTextFormDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextFormLabel": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextFormSecondary": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextGroupLabel": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey450}"
            },
            "colorTextHeadingDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey200}"
            },
            "colorTextHeadingSecondary": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey450}"
            },
            "colorTextHomeHeaderDefault": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextHomeHeaderSecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextIconCaret": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey450}"
            },
            "colorTextIconSubtle": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey400}"
            },
            "colorTextInputDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextInputPlaceholder": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorTextInputPlaceholderDisabled": {
              "light": "{colorTextInputDisabled}",
              "dark": "{colorTextInputDisabled}"
            },
            "colorTextInteractiveActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextInteractiveHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveInvertedDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveInvertedHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInverted": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextLabel": {
              "light": "{colorTextFormLabel}",
              "dark": "{colorTextFormLabel}"
            },
            "colorTextLayoutToggle": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLayoutToggleActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorTextLayoutToggleHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextLayoutToggleSelected": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextLinkDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextLinkHover": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkInvertedHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonUnderline": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkButtonUnderlineHover": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkPrimaryUnderline": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextNotificationDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextNotificationStackBar": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextPaginationPageNumberActiveDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextPaginationPageNumberDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorGrey400}"
            },
            "colorTextSegmentActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextSegmentDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextSegmentHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextSmall": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusError": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorTextStatusInactive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusInfo": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextStatusSuccess": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen500}"
            },
            "colorTextStatusWarning": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorTextTopNavigationTitle": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorBoardPlaceholderActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey550}"
            },
            "colorBoardPlaceholderHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDragPlaceholderActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey550}"
            },
            "colorDragPlaceholderHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneBackgroundActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey500}"
            },
            "colorDropzoneBackgroundHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneTextActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey800}"
            },
            "colorDropzoneTextHover": {
              "light": "{colorBlue800}",
              "dark": "{colorWhite}"
            }
          }
        },
        "alert": {
          "id": "alert",
          "selector": ".awsui-context-alert",
          "tokens": {
            "colorGreyOpaque25": {
              "light": "rgba(255, 255, 255, 0.25)",
              "dark": "rgba(255, 255, 255, 0.25)"
            },
            "colorGreyOpaque40": {
              "light": "rgba(0, 0, 0, 0.4)",
              "dark": "rgba(0, 0, 0, 0.4)"
            },
            "colorGreyOpaque50": {
              "light": "rgba(0, 0, 0, 0.5)",
              "dark": "rgba(0, 0, 0, 0.5)"
            },
            "colorGreyOpaque70": {
              "light": "rgba(35, 47, 62, 0.7)",
              "dark": "rgba(0, 7, 22, 0.7)"
            },
            "colorGreyOpaque80": {
              "light": "rgba(22, 25, 31, 0.8)",
              "dark": "rgba(22, 25, 31, 0.8)"
            },
            "colorGreyOpaque90": {
              "light": "rgba(242, 243, 243, 0.9)",
              "dark": "rgba(242, 243, 243, 0.9)"
            },
            "colorGreyTransparent": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentHeavy": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentLight": {
              "light": "rgba(0, 7, 22, 0.12)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorBackgroundButtonLinkActive": {
              "light": "{colorBlue200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonLinkHover": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonNormalActive": {
              "light": "rgba(0, 7, 22, 0.1)",
              "dark": "rgba(255, 255, 255, 0.15)"
            },
            "colorBackgroundButtonNormalDefault": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundButtonNormalDisabled": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundButtonNormalHover": {
              "light": "rgba(0, 7, 22, 0.05)",
              "dark": "rgba(255, 255, 255, 0.1)"
            },
            "colorBackgroundButtonPrimaryActive": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundButtonPrimaryDefault": {
              "light": "{colorBorderButtonNormalDefault}",
              "dark": "{colorBorderButtonNormalDefault}"
            },
            "colorBackgroundButtonPrimaryDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonPrimaryHover": {
              "light": "{colorBorderButtonNormalHover}",
              "dark": "{colorBorderButtonNormalHover}"
            },
            "colorBackgroundCalendarToday": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCellShaded": {
              "light": "{colorGrey125}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorBackgroundCodeEditorGutterActiveLineError": {
              "light": "{colorTextStatusError}",
              "dark": "{colorTextStatusError}"
            },
            "colorBackgroundCodeEditorGutterDefault": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorLoading": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorPaneItemHover": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCodeEditorStatusBar": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundContainerContent": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundContainerHeader": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlChecked": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundControlDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlDisabled": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundDropdownItemDimmed": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundDropdownItemFilterMatch": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemHover": {
              "light": "{colorGrey150}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemSelected": {
              "light": "{colorBackgroundItemSelected}",
              "dark": "{colorBackgroundItemSelected}"
            },
            "colorBackgroundHomeHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundInputDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundItemSelected": {
              "light": "{colorBlue100}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutMain": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundLayoutMobilePanel": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutPanelContent": {
              "light": "{colorBackgroundContainerContent}",
              "dark": "{colorBackgroundContainerContent}"
            },
            "colorBackgroundLayoutPanelHover": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutToggleHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleSelectedActive": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedHover": {
              "light": "{colorBlue700}",
              "dark": "{colorBlue400}"
            },
            "colorBackgroundModalOverlay": {
              "light": "{colorGreyOpaque70}",
              "dark": "{colorGreyOpaque70}"
            },
            "colorBackgroundNotificationBlue": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorBackgroundNotificationGreen": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen600}"
            },
            "colorBackgroundNotificationGrey": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey550}"
            },
            "colorBackgroundNotificationRed": {
              "light": "{colorRed600}",
              "dark": "{colorRed600}"
            },
            "colorBackgroundNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarActive": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarHover": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBackgroundPopover": {
              "light": "{colorWhite}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundProgressBarContentDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundProgressBarContentInFlash": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBackgroundProgressBarLayoutDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundProgressBarLayoutInFlash": {
              "light": "{colorGreyOpaque25}",
              "dark": "{colorGreyOpaque25}"
            },
            "colorBackgroundSegmentActive": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundSegmentDefault": {
              "light": "{colorBackgroundButtonNormalDefault}",
              "dark": "{colorBackgroundButtonNormalDefault}"
            },
            "colorBackgroundSegmentDisabled": {
              "light": "{colorBackgroundButtonNormalDisabled}",
              "dark": "{colorBackgroundButtonNormalDisabled}"
            },
            "colorBackgroundSegmentHover": {
              "light": "{colorBackgroundSegmentDefault}",
              "dark": "{colorBackgroundSegmentDefault}"
            },
            "colorBackgroundStatusError": {
              "light": "{colorRed100}",
              "dark": "{colorRed900}"
            },
            "colorBackgroundStatusInfo": {
              "light": "{colorBlue100}",
              "dark": "{colorBlue900}"
            },
            "colorBackgroundStatusSuccess": {
              "light": "{colorGreen100}",
              "dark": "{colorGreen900}"
            },
            "colorBackgroundStatusWarning": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundTableHeader": {
              "light": "{colorBackgroundContainerHeader}",
              "dark": "{colorBackgroundContainerHeader}"
            },
            "colorBackgroundTilesDisabled": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundToggleCheckedDisabled": {
              "light": "{colorBlue300}",
              "dark": "{colorBlue800}"
            },
            "colorBackgroundToggleDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey500}"
            },
            "colorBorderButtonNormalActive": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorBorderButtonNormalDefault": {
              "light": "{colorTextButtonNormalDefault}",
              "dark": "{colorTextButtonNormalDefault}"
            },
            "colorBorderButtonNormalDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderButtonNormalHover": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorBorderButtonPrimaryDisabled": {
              "light": "{colorBackgroundButtonPrimaryDisabled}",
              "dark": "{colorBackgroundButtonPrimaryDisabled}"
            },
            "colorBorderCalendarGrid": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderCalendarGridSelectedFocusRing": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey800}"
            },
            "colorBorderCodeEditorAceActiveLineLightTheme": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderCodeEditorAceActiveLineDarkTheme": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorPaneItemHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderContainerDivider": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderContainerTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderControlChecked": {
              "light": "{colorBackgroundControlChecked}",
              "dark": "{colorBackgroundControlChecked}"
            },
            "colorBorderControlDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderControlDisabled": {
              "light": "{colorBackgroundControlDisabled}",
              "dark": "{colorBackgroundControlDisabled}"
            },
            "colorBorderDividerActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorBorderDividerDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey600}"
            },
            "colorBorderDividerPanelBottom": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderDividerPanelSide": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownContainer": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownGroup": {
              "light": "{colorBorderDropdownItemDefault}",
              "dark": "{colorBorderDropdownItemDefault}"
            },
            "colorBorderDropdownItemDefault": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownItemHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownItemDimmedHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderDropdownItemSelected": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderDropdownItemTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderEditableCellHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderInputDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorBorderInputDisabled": {
              "light": "{colorBackgroundInputDisabled}",
              "dark": "{colorBackgroundInputDisabled}"
            },
            "colorBorderItemFocused": {
              "light": "{colorBlue600}",
              "dark": "{colorGrey100}"
            },
            "colorBorderItemPlaceholder": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderItemSelected": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBorderLayout": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorBorderNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBorderPopover": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorBorderSegmentActive": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorBorderSegmentDisabled": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentHover": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderStatusError": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorBorderStatusInfo": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorBorderStatusSuccess": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen500}"
            },
            "colorBorderStatusWarning": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey450}"
            },
            "colorBorderDividerInteractiveDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey300}"
            },
            "colorBorderTabsDivider": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey600}"
            },
            "colorBorderTabsShadow": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderTabsUnderline": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorBorderTilesDisabled": {
              "light": "{colorBackgroundTilesDisabled}",
              "dark": "{colorBackgroundTilesDisabled}"
            },
            "colorBorderTutorial": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey600}"
            },
            "colorForegroundControlDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorForegroundControlDisabled": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorShadowDefault": {
              "light": "{colorGreyTransparentHeavy}",
              "dark": "{colorGreyTransparentHeavy}"
            },
            "colorShadowLayoutToggle": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey650}"
            },
            "colorShadowMedium": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorShadowSide": {
              "light": "{colorGreyTransparentLight}",
              "dark": "{colorGreyTransparentLight}"
            },
            "colorStrokeChartLine": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorStrokeCodeEditorResizeHandler": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorStrokeCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey750}"
            },
            "colorStrokeCodeEditorGutterActiveLineHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey900}"
            },
            "colorTextAccent": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextBodyDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextBodySecondary": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextBreadcrumbCurrent": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorTextBreadcrumbIcon": {
              "light": "{colorGrey500}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextButtonInlineIconDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextButtonNormalActive": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorTextButtonNormalDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextButtonNormalHover": {
              "light": "{colorGrey900}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonNormalDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextLinkButtonNormalHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextLinkButtonNormalActive": {
              "light": "{colorTextButtonNormalActive}",
              "dark": "{colorTextButtonNormalActive}"
            },
            "colorTextButtonPrimaryActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryDefault": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryHover": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextCalendarDayHover": {
              "light": "{colorTextDropdownItemDefault}",
              "dark": "{colorTextDropdownItemDefault}"
            },
            "colorTextCalendarDaySelected": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextCalendarMonth": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextCodeEditorGutterActiveLine": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextCodeEditorGutterDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextCodeEditorStatusBarDisabled": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey550}"
            },
            "colorTextCodeEditorTabButtonError": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextColumnHeader": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey400}"
            },
            "colorTextColumnSortingIcon": {
              "light": "{colorTextColumnHeader}",
              "dark": "{colorTextColumnHeader}"
            },
            "colorTextControlDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextCounter": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextDropdownFooter": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownGroupLabel": {
              "light": "{colorTextGroupLabel}",
              "dark": "{colorTextGroupLabel}"
            },
            "colorTextDropdownHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextDropdownItemDefault": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextDropdownItemDimmed": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemFilterMatch": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue400}"
            },
            "colorTextDropdownItemHighlighted": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey200}"
            },
            "colorTextDropdownItemSecondary": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownItemSecondaryHover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey300}"
            },
            "colorTextEmpty": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey300}"
            },
            "colorTextExpandableSectionDefault": {
              "light": "{colorTextInteractiveActive}",
              "dark": "{colorTextInteractiveActive}"
            },
            "colorTextExpandableSectionHover": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextExpandableSectionNavigationIconDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorTextInteractiveDefault}"
            },
            "colorTextFormDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey300}"
            },
            "colorTextFormLabel": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextFormSecondary": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextGroupLabel": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey450}"
            },
            "colorTextHeadingDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey200}"
            },
            "colorTextHeadingSecondary": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey450}"
            },
            "colorTextHomeHeaderDefault": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextHomeHeaderSecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextIconCaret": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey450}"
            },
            "colorTextIconSubtle": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey400}"
            },
            "colorTextInputDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextInputPlaceholder": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey500}"
            },
            "colorTextInputPlaceholderDisabled": {
              "light": "{colorTextInputDisabled}",
              "dark": "{colorTextInputDisabled}"
            },
            "colorTextInteractiveActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveDisabled": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey550}"
            },
            "colorTextInteractiveHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveInvertedDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveInvertedHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInverted": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextLabel": {
              "light": "{colorTextFormLabel}",
              "dark": "{colorTextFormLabel}"
            },
            "colorTextLayoutToggle": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLayoutToggleActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey800}"
            },
            "colorTextLayoutToggleHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextLayoutToggleSelected": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextLinkDefault": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextLinkHover": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkInvertedHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonUnderline": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkButtonUnderlineHover": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkPrimaryUnderline": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextNotificationDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextNotificationStackBar": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextPaginationPageNumberActiveDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextPaginationPageNumberDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorGrey400}"
            },
            "colorTextSegmentActive": {
              "light": "{colorWhite}",
              "dark": "{colorGrey900}"
            },
            "colorTextSegmentDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey300}"
            },
            "colorTextSegmentHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextSmall": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusError": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorTextStatusInactive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusInfo": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue500}"
            },
            "colorTextStatusSuccess": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen500}"
            },
            "colorTextStatusWarning": {
              "light": "{colorRed600}",
              "dark": "{colorRed500}"
            },
            "colorTextTopNavigationTitle": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey100}"
            },
            "colorBoardPlaceholderActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey550}"
            },
            "colorBoardPlaceholderHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDragPlaceholderActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey550}"
            },
            "colorDragPlaceholderHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneBackgroundActive": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey500}"
            },
            "colorDropzoneBackgroundHover": {
              "light": "{colorBlue200}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneTextActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey800}"
            },
            "colorDropzoneTextHover": {
              "light": "{colorBlue800}",
              "dark": "{colorWhite}"
            }
          }
        },
        "alert-header": {
          "id": "alert-header",
          "selector": ".awsui-context-content-header .awsui-context-alert",
          "tokens": {
            "colorGreyOpaque25": {
              "light": "rgba(255, 255, 255, 0.25)",
              "dark": "rgba(255, 255, 255, 0.25)"
            },
            "colorGreyOpaque40": {
              "light": "rgba(0, 0, 0, 0.4)",
              "dark": "rgba(0, 0, 0, 0.4)"
            },
            "colorGreyOpaque50": {
              "light": "rgba(0, 0, 0, 0.5)",
              "dark": "rgba(0, 0, 0, 0.5)"
            },
            "colorGreyOpaque70": {
              "light": "rgba(0, 7, 22, 0.7)",
              "dark": "rgba(0, 7, 22, 0.7)"
            },
            "colorGreyOpaque80": {
              "light": "rgba(22, 25, 31, 0.8)",
              "dark": "rgba(22, 25, 31, 0.8)"
            },
            "colorGreyOpaque90": {
              "light": "rgba(242, 243, 243, 0.9)",
              "dark": "rgba(242, 243, 243, 0.9)"
            },
            "colorGreyTransparent": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentHeavy": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorGreyTransparentLight": {
              "light": "rgba(0, 7, 22, 1)",
              "dark": "rgba(0, 7, 22, 1)"
            },
            "colorBackgroundButtonLinkActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonLinkHover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundButtonNormalActive": {
              "light": "rgba(255, 255, 255, 0.15)",
              "dark": "rgba(255, 255, 255, 0.15)"
            },
            "colorBackgroundButtonNormalDefault": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundButtonNormalDisabled": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundButtonNormalHover": {
              "light": "rgba(255, 255, 255, 0.1)",
              "dark": "rgba(255, 255, 255, 0.1)"
            },
            "colorBackgroundButtonPrimaryActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundButtonPrimaryDefault": {
              "light": "{colorBorderButtonNormalDefault}",
              "dark": "{colorBorderButtonNormalDefault}"
            },
            "colorBackgroundButtonPrimaryDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundButtonPrimaryHover": {
              "light": "{colorBorderButtonNormalHover}",
              "dark": "{colorBorderButtonNormalHover}"
            },
            "colorBackgroundCalendarToday": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCellShaded": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBackgroundCodeEditorGutterActiveLineError": {
              "light": "{colorTextStatusError}",
              "dark": "{colorTextStatusError}"
            },
            "colorBackgroundCodeEditorGutterDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorLoading": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundCodeEditorPaneItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundCodeEditorStatusBar": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundContainerContent": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundContainerHeader": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlChecked": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundControlDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundControlDisabled": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundDropdownItemDimmed": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBackgroundDropdownItemFilterMatch": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundDropdownItemSelected": {
              "light": "{colorBackgroundItemSelected}",
              "dark": "{colorBackgroundItemSelected}"
            },
            "colorBackgroundHomeHeader": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundInputDefault": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundInputDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundItemSelected": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutMain": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundLayoutMobilePanel": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorBackgroundLayoutPanelContent": {
              "light": "{colorBackgroundContainerContent}",
              "dark": "{colorBackgroundContainerContent}"
            },
            "colorBackgroundLayoutPanelHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleActive": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundLayoutToggleHover": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundLayoutToggleSelectedActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundLayoutToggleSelectedHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorBackgroundModalOverlay": {
              "light": "{colorGreyOpaque70}",
              "dark": "{colorGreyOpaque70}"
            },
            "colorBackgroundNotificationBlue": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorBackgroundNotificationGreen": {
              "light": "{colorGreen600}",
              "dark": "{colorGreen600}"
            },
            "colorBackgroundNotificationGrey": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBackgroundNotificationRed": {
              "light": "{colorRed600}",
              "dark": "{colorRed600}"
            },
            "colorBackgroundNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarActive": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBackgroundNotificationStackBarHover": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBackgroundPopover": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundProgressBarContentDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundProgressBarContentInFlash": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorBackgroundProgressBarLayoutDefault": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBackgroundProgressBarLayoutInFlash": {
              "light": "{colorGreyOpaque25}",
              "dark": "{colorGreyOpaque25}"
            },
            "colorBackgroundSegmentActive": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBackgroundSegmentDefault": {
              "light": "{colorBackgroundButtonNormalDefault}",
              "dark": "{colorBackgroundButtonNormalDefault}"
            },
            "colorBackgroundSegmentDisabled": {
              "light": "{colorBackgroundButtonNormalDisabled}",
              "dark": "{colorBackgroundButtonNormalDisabled}"
            },
            "colorBackgroundSegmentHover": {
              "light": "{colorBackgroundSegmentDefault}",
              "dark": "{colorBackgroundSegmentDefault}"
            },
            "colorBackgroundStatusError": {
              "light": "{colorRed900}",
              "dark": "{colorRed900}"
            },
            "colorBackgroundStatusInfo": {
              "light": "{colorBlue900}",
              "dark": "{colorBlue900}"
            },
            "colorBackgroundStatusSuccess": {
              "light": "{colorGreen900}",
              "dark": "{colorGreen900}"
            },
            "colorBackgroundStatusWarning": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBackgroundTableHeader": {
              "light": "{colorBackgroundContainerHeader}",
              "dark": "{colorBackgroundContainerHeader}"
            },
            "colorBackgroundTilesDisabled": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorBackgroundToggleCheckedDisabled": {
              "light": "{colorBlue800}",
              "dark": "{colorBlue800}"
            },
            "colorBackgroundToggleDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderButtonNormalActive": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorBorderButtonNormalDefault": {
              "light": "{colorTextButtonNormalDefault}",
              "dark": "{colorTextButtonNormalDefault}"
            },
            "colorBorderButtonNormalDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderButtonNormalHover": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorBorderButtonPrimaryDisabled": {
              "light": "{colorBackgroundButtonPrimaryDisabled}",
              "dark": "{colorBackgroundButtonPrimaryDisabled}"
            },
            "colorBorderCalendarGrid": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderCalendarGridSelectedFocusRing": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorBorderCodeEditorAceActiveLineLightTheme": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderCodeEditorAceActiveLineDarkTheme": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderCodeEditorPaneItemHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderContainerDivider": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderContainerTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderControlChecked": {
              "light": "{colorBackgroundControlChecked}",
              "dark": "{colorBackgroundControlChecked}"
            },
            "colorBorderControlDefault": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderControlDisabled": {
              "light": "{colorBackgroundControlDisabled}",
              "dark": "{colorBackgroundControlDisabled}"
            },
            "colorBorderDividerActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderDividerDefault": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderDividerPanelBottom": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderDividerPanelSide": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownContainer": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownGroup": {
              "light": "{colorBorderDropdownItemDefault}",
              "dark": "{colorBorderDropdownItemDefault}"
            },
            "colorBorderDropdownItemDefault": {
              "light": "{colorBorderDividerDefault}",
              "dark": "{colorBorderDividerDefault}"
            },
            "colorBorderDropdownItemHover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderDropdownItemDimmedHover": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorBorderDropdownItemSelected": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderDropdownItemTop": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorBorderEditableCellHover": {
              "light": "{colorBorderDropdownItemHover}",
              "dark": "{colorBorderDropdownItemHover}"
            },
            "colorBorderInputDefault": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderInputDisabled": {
              "light": "{colorBackgroundInputDisabled}",
              "dark": "{colorBackgroundInputDisabled}"
            },
            "colorBorderItemFocused": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBorderItemPlaceholder": {
              "light": "{colorBorderItemSelected}",
              "dark": "{colorBorderItemSelected}"
            },
            "colorBorderItemSelected": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderLayout": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorBorderNotificationStackBar": {
              "light": "{colorGrey700}",
              "dark": "{colorGrey700}"
            },
            "colorBorderPopover": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBorderSegmentActive": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderSegmentDisabled": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderSegmentHover": {
              "light": "{colorBorderSegmentDefault}",
              "dark": "{colorBorderSegmentDefault}"
            },
            "colorBorderStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorBorderStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorBorderStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorBorderStatusWarning": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorBorderDividerInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorBorderTabsDivider": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorBorderTabsShadow": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorBorderTabsUnderline": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorBorderTilesDisabled": {
              "light": "{colorBackgroundTilesDisabled}",
              "dark": "{colorBackgroundTilesDisabled}"
            },
            "colorBorderTutorial": {
              "light": "{colorGrey600}",
              "dark": "{colorGrey600}"
            },
            "colorForegroundControlDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorForegroundControlDisabled": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorShadowDefault": {
              "light": "{colorGreyTransparentHeavy}",
              "dark": "{colorGreyTransparentHeavy}"
            },
            "colorShadowLayoutToggle": {
              "light": "{colorGrey650}",
              "dark": "{colorGrey650}"
            },
            "colorShadowMedium": {
              "light": "{colorGreyTransparent}",
              "dark": "{colorGreyTransparent}"
            },
            "colorShadowSide": {
              "light": "{colorGreyTransparentLight}",
              "dark": "{colorGreyTransparentLight}"
            },
            "colorStrokeChartLine": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorStrokeCodeEditorResizeHandler": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorStrokeCodeEditorGutterActiveLineDefault": {
              "light": "{colorGrey750}",
              "dark": "{colorGrey750}"
            },
            "colorStrokeCodeEditorGutterActiveLineHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextAccent": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextBodyDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBodySecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextBreadcrumbCurrent": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextBreadcrumbIcon": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextButtonInlineIconDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextButtonInlineIconHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextButtonNormalActive": {
              "light": "{colorTextButtonNormalHover}",
              "dark": "{colorTextButtonNormalHover}"
            },
            "colorTextButtonNormalDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextButtonNormalHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonNormalDefault": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextLinkButtonNormalHover": {
              "light": "{colorTextLinkHover}",
              "dark": "{colorTextLinkHover}"
            },
            "colorTextLinkButtonNormalActive": {
              "light": "{colorTextButtonNormalActive}",
              "dark": "{colorTextButtonNormalActive}"
            },
            "colorTextButtonPrimaryActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryDefault": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextButtonPrimaryHover": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCalendarDayHover": {
              "light": "{colorTextDropdownItemDefault}",
              "dark": "{colorTextDropdownItemDefault}"
            },
            "colorTextCalendarDaySelected": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextCalendarMonth": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextCodeEditorGutterActiveLine": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextCodeEditorGutterDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextCodeEditorStatusBarDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextCodeEditorTabButtonError": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextColumnHeader": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextColumnSortingIcon": {
              "light": "{colorTextColumnHeader}",
              "dark": "{colorTextColumnHeader}"
            },
            "colorTextControlDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextCounter": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextDropdownFooter": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownGroupLabel": {
              "light": "{colorTextGroupLabel}",
              "dark": "{colorTextGroupLabel}"
            },
            "colorTextDropdownHeader": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextDropdownItemDefault": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextDropdownItemDimmed": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextDropdownItemFilterMatch": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextDropdownItemHighlighted": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextDropdownItemSecondary": {
              "light": "{colorTextFormSecondary}",
              "dark": "{colorTextFormSecondary}"
            },
            "colorTextDropdownItemSecondaryHover": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextEmpty": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextExpandableSectionDefault": {
              "light": "{colorTextInteractiveActive}",
              "dark": "{colorTextInteractiveActive}"
            },
            "colorTextExpandableSectionHover": {
              "light": "{colorTextAccent}",
              "dark": "{colorTextAccent}"
            },
            "colorTextExpandableSectionNavigationIconDefault": {
              "light": "{colorTextInteractiveDefault}",
              "dark": "{colorTextInteractiveDefault}"
            },
            "colorTextFormDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextFormLabel": {
              "light": "{colorTextFormDefault}",
              "dark": "{colorTextFormDefault}"
            },
            "colorTextFormSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextGroupLabel": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHeadingDefault": {
              "light": "{colorGrey200}",
              "dark": "{colorGrey200}"
            },
            "colorTextHeadingSecondary": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextHomeHeaderDefault": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextHomeHeaderSecondary": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextIconCaret": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextIconSubtle": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextInputDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInputPlaceholder": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorTextInputPlaceholderDisabled": {
              "light": "{colorTextInputDisabled}",
              "dark": "{colorTextInputDisabled}"
            },
            "colorTextInteractiveActive": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveDisabled": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorTextInteractiveHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInteractiveInvertedDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextInteractiveInvertedHover": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextInverted": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLabel": {
              "light": "{colorTextFormLabel}",
              "dark": "{colorTextFormLabel}"
            },
            "colorTextLayoutToggle": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLayoutToggleActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorTextLayoutToggleHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLayoutToggleSelected": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextLinkDefault": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextLinkHover": {
              "light": "{colorBlue400}",
              "dark": "{colorBlue400}"
            },
            "colorTextLinkInvertedHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextLinkButtonUnderline": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkButtonUnderlineHover": {
              "light": "transparent",
              "dark": "transparent"
            },
            "colorTextLinkPrimaryUnderline": {
              "light": "{colorTextLinkDefault}",
              "dark": "{colorTextLinkDefault}"
            },
            "colorTextNotificationDefault": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorTextNotificationStackBar": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            },
            "colorTextPaginationPageNumberActiveDisabled": {
              "light": "{colorTextInteractiveDisabled}",
              "dark": "{colorTextInteractiveDisabled}"
            },
            "colorTextPaginationPageNumberDefault": {
              "light": "{colorGrey400}",
              "dark": "{colorGrey400}"
            },
            "colorTextSegmentActive": {
              "light": "{colorGrey900}",
              "dark": "{colorGrey900}"
            },
            "colorTextSegmentDefault": {
              "light": "{colorGrey300}",
              "dark": "{colorGrey300}"
            },
            "colorTextSegmentHover": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextSmall": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusError": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextStatusInactive": {
              "light": "{colorGrey450}",
              "dark": "{colorGrey450}"
            },
            "colorTextStatusInfo": {
              "light": "{colorBlue500}",
              "dark": "{colorBlue500}"
            },
            "colorTextStatusSuccess": {
              "light": "{colorGreen500}",
              "dark": "{colorGreen500}"
            },
            "colorTextStatusWarning": {
              "light": "{colorRed500}",
              "dark": "{colorRed500}"
            },
            "colorTextTopNavigationTitle": {
              "light": "{colorGrey100}",
              "dark": "{colorGrey100}"
            },
            "colorBoardPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorBoardPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDragPlaceholderActive": {
              "light": "{colorGrey550}",
              "dark": "{colorGrey550}"
            },
            "colorDragPlaceholderHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneBackgroundActive": {
              "light": "{colorGrey500}",
              "dark": "{colorGrey500}"
            },
            "colorDropzoneBackgroundHover": {
              "light": "{colorBlue600}",
              "dark": "{colorBlue600}"
            },
            "colorDropzoneTextActive": {
              "light": "{colorGrey800}",
              "dark": "{colorGrey800}"
            },
            "colorDropzoneTextHover": {
              "light": "{colorWhite}",
              "dark": "{colorWhite}"
            }
          }
        }
      },
      "tokenModeMap": {
        "colorChartsRed300": "color",
        "colorChartsRed400": "color",
        "colorChartsRed500": "color",
        "colorChartsRed600": "color",
        "colorChartsRed700": "color",
        "colorChartsRed800": "color",
        "colorChartsRed900": "color",
        "colorChartsRed1000": "color",
        "colorChartsRed1100": "color",
        "colorChartsRed1200": "color",
        "colorChartsOrange300": "color",
        "colorChartsOrange400": "color",
        "colorChartsOrange500": "color",
        "colorChartsOrange600": "color",
        "colorChartsOrange700": "color",
        "colorChartsOrange800": "color",
        "colorChartsOrange900": "color",
        "colorChartsOrange1000": "color",
        "colorChartsOrange1100": "color",
        "colorChartsOrange1200": "color",
        "colorChartsYellow300": "color",
        "colorChartsYellow400": "color",
        "colorChartsYellow500": "color",
        "colorChartsYellow600": "color",
        "colorChartsYellow700": "color",
        "colorChartsYellow800": "color",
        "colorChartsYellow900": "color",
        "colorChartsYellow1000": "color",
        "colorChartsYellow1100": "color",
        "colorChartsYellow1200": "color",
        "colorChartsGreen300": "color",
        "colorChartsGreen400": "color",
        "colorChartsGreen500": "color",
        "colorChartsGreen600": "color",
        "colorChartsGreen700": "color",
        "colorChartsGreen800": "color",
        "colorChartsGreen900": "color",
        "colorChartsGreen1000": "color",
        "colorChartsGreen1100": "color",
        "colorChartsGreen1200": "color",
        "colorChartsTeal300": "color",
        "colorChartsTeal400": "color",
        "colorChartsTeal500": "color",
        "colorChartsTeal600": "color",
        "colorChartsTeal700": "color",
        "colorChartsTeal800": "color",
        "colorChartsTeal900": "color",
        "colorChartsTeal1000": "color",
        "colorChartsTeal1100": "color",
        "colorChartsTeal1200": "color",
        "colorChartsBlue1300": "color",
        "colorChartsBlue1400": "color",
        "colorChartsBlue1500": "color",
        "colorChartsBlue1600": "color",
        "colorChartsBlue1700": "color",
        "colorChartsBlue1800": "color",
        "colorChartsBlue1900": "color",
        "colorChartsBlue11000": "color",
        "colorChartsBlue11100": "color",
        "colorChartsBlue11200": "color",
        "colorChartsBlue2300": "color",
        "colorChartsBlue2400": "color",
        "colorChartsBlue2500": "color",
        "colorChartsBlue2600": "color",
        "colorChartsBlue2700": "color",
        "colorChartsBlue2800": "color",
        "colorChartsBlue2900": "color",
        "colorChartsBlue21000": "color",
        "colorChartsBlue21100": "color",
        "colorChartsBlue21200": "color",
        "colorChartsPurple300": "color",
        "colorChartsPurple400": "color",
        "colorChartsPurple500": "color",
        "colorChartsPurple600": "color",
        "colorChartsPurple700": "color",
        "colorChartsPurple800": "color",
        "colorChartsPurple900": "color",
        "colorChartsPurple1000": "color",
        "colorChartsPurple1100": "color",
        "colorChartsPurple1200": "color",
        "colorChartsPink300": "color",
        "colorChartsPink400": "color",
        "colorChartsPink500": "color",
        "colorChartsPink600": "color",
        "colorChartsPink700": "color",
        "colorChartsPink800": "color",
        "colorChartsPink900": "color",
        "colorChartsPink1000": "color",
        "colorChartsPink1100": "color",
        "colorChartsPink1200": "color",
        "colorChartsStatusCritical": "color",
        "colorChartsStatusHigh": "color",
        "colorChartsStatusMedium": "color",
        "colorChartsStatusLow": "color",
        "colorChartsStatusPositive": "color",
        "colorChartsStatusInfo": "color",
        "colorChartsStatusNeutral": "color",
        "colorChartsThresholdNegative": "color",
        "colorChartsThresholdPositive": "color",
        "colorChartsThresholdInfo": "color",
        "colorChartsThresholdNeutral": "color",
        "colorChartsLineGrid": "color",
        "colorChartsLineTick": "color",
        "colorChartsLineAxis": "color",
        "colorChartsPaletteCategorical1": "color",
        "colorChartsPaletteCategorical2": "color",
        "colorChartsPaletteCategorical3": "color",
        "colorChartsPaletteCategorical4": "color",
        "colorChartsPaletteCategorical5": "color",
        "colorChartsPaletteCategorical6": "color",
        "colorChartsPaletteCategorical7": "color",
        "colorChartsPaletteCategorical8": "color",
        "colorChartsPaletteCategorical9": "color",
        "colorChartsPaletteCategorical10": "color",
        "colorChartsPaletteCategorical11": "color",
        "colorChartsPaletteCategorical12": "color",
        "colorChartsPaletteCategorical13": "color",
        "colorChartsPaletteCategorical14": "color",
        "colorChartsPaletteCategorical15": "color",
        "colorChartsPaletteCategorical16": "color",
        "colorChartsPaletteCategorical17": "color",
        "colorChartsPaletteCategorical18": "color",
        "colorChartsPaletteCategorical19": "color",
        "colorChartsPaletteCategorical20": "color",
        "colorChartsPaletteCategorical21": "color",
        "colorChartsPaletteCategorical22": "color",
        "colorChartsPaletteCategorical23": "color",
        "colorChartsPaletteCategorical24": "color",
        "colorChartsPaletteCategorical25": "color",
        "colorChartsPaletteCategorical26": "color",
        "colorChartsPaletteCategorical27": "color",
        "colorChartsPaletteCategorical28": "color",
        "colorChartsPaletteCategorical29": "color",
        "colorChartsPaletteCategorical30": "color",
        "colorChartsPaletteCategorical31": "color",
        "colorChartsPaletteCategorical32": "color",
        "colorChartsPaletteCategorical33": "color",
        "colorChartsPaletteCategorical34": "color",
        "colorChartsPaletteCategorical35": "color",
        "colorChartsPaletteCategorical36": "color",
        "colorChartsPaletteCategorical37": "color",
        "colorChartsPaletteCategorical38": "color",
        "colorChartsPaletteCategorical39": "color",
        "colorChartsPaletteCategorical40": "color",
        "colorChartsPaletteCategorical41": "color",
        "colorChartsPaletteCategorical42": "color",
        "colorChartsPaletteCategorical43": "color",
        "colorChartsPaletteCategorical44": "color",
        "colorChartsPaletteCategorical45": "color",
        "colorChartsPaletteCategorical46": "color",
        "colorChartsPaletteCategorical47": "color",
        "colorChartsPaletteCategorical48": "color",
        "colorChartsPaletteCategorical49": "color",
        "colorChartsPaletteCategorical50": "color",
        "colorGreyOpaque25": "color",
        "colorGreyOpaque40": "color",
        "colorGreyOpaque50": "color",
        "colorGreyOpaque70": "color",
        "colorGreyOpaque80": "color",
        "colorGreyOpaque90": "color",
        "colorGreyTransparent": "color",
        "colorGreyTransparentHeavy": "color",
        "colorGreyTransparentLight": "color",
        "colorBackgroundButtonLinkActive": "color",
        "colorBackgroundButtonLinkHover": "color",
        "colorBackgroundButtonNormalActive": "color",
        "colorBackgroundButtonNormalDefault": "color",
        "colorBackgroundButtonNormalDisabled": "color",
        "colorBackgroundButtonNormalHover": "color",
        "colorBackgroundButtonPrimaryActive": "color",
        "colorBackgroundButtonPrimaryDefault": "color",
        "colorBackgroundButtonPrimaryDisabled": "color",
        "colorBackgroundButtonPrimaryHover": "color",
        "colorBackgroundCalendarToday": "color",
        "colorBackgroundCellShaded": "color",
        "colorBackgroundCodeEditorGutterActiveLineDefault": "color",
        "colorBackgroundCodeEditorGutterActiveLineError": "color",
        "colorBackgroundCodeEditorGutterDefault": "color",
        "colorBackgroundCodeEditorLoading": "color",
        "colorBackgroundCodeEditorPaneItemHover": "color",
        "colorBackgroundCodeEditorStatusBar": "color",
        "colorBackgroundContainerContent": "color",
        "colorBackgroundContainerHeader": "color",
        "colorBackgroundControlChecked": "color",
        "colorBackgroundControlDefault": "color",
        "colorBackgroundControlDisabled": "color",
        "colorBackgroundDropdownItemDefault": "color",
        "colorBackgroundDropdownItemDimmed": "color",
        "colorBackgroundDropdownItemFilterMatch": "color",
        "colorBackgroundDropdownItemHover": "color",
        "colorBackgroundDropdownItemSelected": "color",
        "colorBackgroundHomeHeader": "color",
        "colorBackgroundInputDefault": "color",
        "colorBackgroundInputDisabled": "color",
        "colorBackgroundItemSelected": "color",
        "colorBackgroundLayoutMain": "color",
        "colorBackgroundLayoutMobilePanel": "color",
        "colorBackgroundLayoutPanelContent": "color",
        "colorBackgroundLayoutPanelHover": "color",
        "colorBackgroundLayoutToggleActive": "color",
        "colorBackgroundLayoutToggleDefault": "color",
        "colorBackgroundLayoutToggleHover": "color",
        "colorBackgroundLayoutToggleSelectedActive": "color",
        "colorBackgroundLayoutToggleSelectedDefault": "color",
        "colorBackgroundLayoutToggleSelectedHover": "color",
        "colorBackgroundModalOverlay": "color",
        "colorBackgroundNotificationBlue": "color",
        "colorBackgroundNotificationGreen": "color",
        "colorBackgroundNotificationGrey": "color",
        "colorBackgroundNotificationRed": "color",
        "colorBackgroundNotificationStackBar": "color",
        "colorBackgroundNotificationStackBarActive": "color",
        "colorBackgroundNotificationStackBarHover": "color",
        "colorBackgroundPopover": "color",
        "colorBackgroundProgressBarContentDefault": "color",
        "colorBackgroundProgressBarContentInFlash": "color",
        "colorBackgroundProgressBarLayoutDefault": "color",
        "colorBackgroundProgressBarLayoutInFlash": "color",
        "colorBackgroundSegmentActive": "color",
        "colorBackgroundSegmentDefault": "color",
        "colorBackgroundSegmentDisabled": "color",
        "colorBackgroundSegmentHover": "color",
        "colorBackgroundStatusError": "color",
        "colorBackgroundStatusInfo": "color",
        "colorBackgroundStatusSuccess": "color",
        "colorBackgroundStatusWarning": "color",
        "colorBackgroundTableHeader": "color",
        "colorBackgroundTilesDisabled": "color",
        "colorBackgroundToggleCheckedDisabled": "color",
        "colorBackgroundToggleDefault": "color",
        "colorBorderButtonNormalActive": "color",
        "colorBorderButtonNormalDefault": "color",
        "colorBorderButtonNormalDisabled": "color",
        "colorBorderButtonNormalHover": "color",
        "colorBorderButtonPrimaryDisabled": "color",
        "colorBorderCalendarGrid": "color",
        "colorBorderCalendarGridSelectedFocusRing": "color",
        "colorBorderCodeEditorAceActiveLineLightTheme": "color",
        "colorBorderCodeEditorAceActiveLineDarkTheme": "color",
        "colorBorderCodeEditorDefault": "color",
        "colorBorderCodeEditorPaneItemHover": "color",
        "colorBorderContainerDivider": "color",
        "colorBorderContainerTop": "color",
        "colorBorderControlChecked": "color",
        "colorBorderControlDefault": "color",
        "colorBorderControlDisabled": "color",
        "colorBorderDividerActive": "color",
        "colorBorderDividerDefault": "color",
        "colorBorderDividerPanelBottom": "color",
        "colorBorderDividerPanelSide": "color",
        "colorBorderDropdownContainer": "color",
        "colorBorderDropdownGroup": "color",
        "colorBorderDropdownItemDefault": "color",
        "colorBorderDropdownItemHover": "color",
        "colorBorderDropdownItemDimmedHover": "color",
        "colorBorderDropdownItemSelected": "color",
        "colorBorderDropdownItemTop": "color",
        "colorBorderEditableCellHover": "color",
        "colorBorderInputDefault": "color",
        "colorBorderInputDisabled": "color",
        "colorBorderItemFocused": "color",
        "colorBorderItemPlaceholder": "color",
        "colorBorderItemSelected": "color",
        "colorBorderLayout": "color",
        "colorBorderNotificationStackBar": "color",
        "colorBorderPopover": "color",
        "colorBorderSegmentActive": "color",
        "colorBorderSegmentDefault": "color",
        "colorBorderSegmentDisabled": "color",
        "colorBorderSegmentHover": "color",
        "colorBorderStatusError": "color",
        "colorBorderStatusInfo": "color",
        "colorBorderStatusSuccess": "color",
        "colorBorderStatusWarning": "color",
        "colorBorderDividerInteractiveDefault": "color",
        "colorBorderTabsDivider": "color",
        "colorBorderTabsShadow": "color",
        "colorBorderTabsUnderline": "color",
        "colorBorderTilesDisabled": "color",
        "colorBorderTutorial": "color",
        "colorForegroundControlDefault": "color",
        "colorForegroundControlDisabled": "color",
        "colorShadowDefault": "color",
        "colorShadowLayoutToggle": "color",
        "colorShadowMedium": "color",
        "colorShadowSide": "color",
        "colorStrokeChartLine": "color",
        "colorStrokeCodeEditorResizeHandler": "color",
        "colorStrokeCodeEditorGutterActiveLineDefault": "color",
        "colorStrokeCodeEditorGutterActiveLineHover": "color",
        "colorTextAccent": "color",
        "colorTextBodyDefault": "color",
        "colorTextBodySecondary": "color",
        "colorTextBreadcrumbCurrent": "color",
        "colorTextBreadcrumbIcon": "color",
        "colorTextButtonInlineIconDefault": "color",
        "colorTextButtonInlineIconDisabled": "color",
        "colorTextButtonInlineIconHover": "color",
        "colorTextButtonNormalActive": "color",
        "colorTextButtonNormalDefault": "color",
        "colorTextButtonNormalHover": "color",
        "colorTextLinkButtonNormalDefault": "color",
        "colorTextLinkButtonNormalHover": "color",
        "colorTextLinkButtonNormalActive": "color",
        "colorTextButtonPrimaryActive": "color",
        "colorTextButtonPrimaryDefault": "color",
        "colorTextButtonPrimaryHover": "color",
        "colorTextCalendarDayHover": "color",
        "colorTextCalendarDaySelected": "color",
        "colorTextCalendarMonth": "color",
        "colorTextCodeEditorGutterActiveLine": "color",
        "colorTextCodeEditorGutterDefault": "color",
        "colorTextCodeEditorStatusBarDisabled": "color",
        "colorTextCodeEditorTabButtonError": "color",
        "colorTextColumnHeader": "color",
        "colorTextColumnSortingIcon": "color",
        "colorTextControlDisabled": "color",
        "colorTextCounter": "color",
        "colorTextDisabled": "color",
        "colorTextDropdownFooter": "color",
        "colorTextDropdownGroupLabel": "color",
        "colorTextDropdownHeader": "color",
        "colorTextDropdownItemDefault": "color",
        "colorTextDropdownItemDimmed": "color",
        "colorTextDropdownItemDisabled": "color",
        "colorTextDropdownItemFilterMatch": "color",
        "colorTextDropdownItemHighlighted": "color",
        "colorTextDropdownItemSecondary": "color",
        "colorTextDropdownItemSecondaryHover": "color",
        "colorTextEmpty": "color",
        "colorTextExpandableSectionDefault": "color",
        "colorTextExpandableSectionHover": "color",
        "colorTextExpandableSectionNavigationIconDefault": "color",
        "colorTextFormDefault": "color",
        "colorTextFormLabel": "color",
        "colorTextFormSecondary": "color",
        "colorTextGroupLabel": "color",
        "colorTextHeadingDefault": "color",
        "colorTextHeadingSecondary": "color",
        "colorTextHomeHeaderDefault": "color",
        "colorTextHomeHeaderSecondary": "color",
        "colorTextIconCaret": "color",
        "colorTextIconSubtle": "color",
        "colorTextInputDisabled": "color",
        "colorTextInputPlaceholder": "color",
        "colorTextInputPlaceholderDisabled": "color",
        "colorTextInteractiveActive": "color",
        "colorTextInteractiveDefault": "color",
        "colorTextInteractiveDisabled": "color",
        "colorTextInteractiveHover": "color",
        "colorTextInteractiveInvertedDefault": "color",
        "colorTextInteractiveInvertedHover": "color",
        "colorTextInverted": "color",
        "colorTextLabel": "color",
        "colorTextLayoutToggle": "color",
        "colorTextLayoutToggleActive": "color",
        "colorTextLayoutToggleHover": "color",
        "colorTextLayoutToggleSelected": "color",
        "colorTextLinkDefault": "color",
        "colorTextLinkHover": "color",
        "colorTextLinkInvertedHover": "color",
        "colorTextLinkButtonUnderline": "color",
        "colorTextLinkButtonUnderlineHover": "color",
        "colorTextLinkPrimaryUnderline": "color",
        "colorTextNotificationDefault": "color",
        "colorTextNotificationStackBar": "color",
        "colorTextPaginationPageNumberActiveDisabled": "color",
        "colorTextPaginationPageNumberDefault": "color",
        "colorTextSegmentActive": "color",
        "colorTextSegmentDefault": "color",
        "colorTextSegmentHover": "color",
        "colorTextSmall": "color",
        "colorTextStatusError": "color",
        "colorTextStatusInactive": "color",
        "colorTextStatusInfo": "color",
        "colorTextStatusSuccess": "color",
        "colorTextStatusWarning": "color",
        "colorTextTopNavigationTitle": "color",
        "colorBoardPlaceholderActive": "color",
        "colorBoardPlaceholderHover": "color",
        "colorDragPlaceholderActive": "color",
        "colorDragPlaceholderHover": "color",
        "colorDropzoneBackgroundActive": "color",
        "colorDropzoneBackgroundHover": "color",
        "colorDropzoneTextActive": "color",
        "colorDropzoneTextHover": "color",
        "motionDurationExtraFast": "motion",
        "motionDurationExtraSlow": "motion",
        "motionDurationFast": "motion",
        "motionDurationModerate": "motion",
        "motionDurationRefreshOnlyAmbient": "motion",
        "motionDurationRefreshOnlyFast": "motion",
        "motionDurationRefreshOnlyMedium": "motion",
        "motionDurationRefreshOnlySlow": "motion",
        "motionDurationRotate180": "motion",
        "motionDurationRotate90": "motion",
        "motionDurationShowPaced": "motion",
        "motionDurationShowQuick": "motion",
        "motionDurationSlow": "motion",
        "motionDurationTransitionQuick": "motion",
        "motionDurationTransitionShowPaced": "motion",
        "motionDurationTransitionShowQuick": "motion",
        "motionEasingEaseOutQuart": "motion",
        "motionEasingRefreshOnlyA": "motion",
        "motionEasingRefreshOnlyB": "motion",
        "motionEasingRefreshOnlyC": "motion",
        "motionEasingRefreshOnlyD": "motion",
        "motionEasingRotate180": "motion",
        "motionEasingRotate90": "motion",
        "motionEasingShowPaced": "motion",
        "motionEasingShowQuick": "motion",
        "motionEasingTransitionQuick": "motion",
        "motionEasingTransitionShowPaced": "motion",
        "motionEasingTransitionShowQuick": "motion",
        "motionEasingResponsive": "motion",
        "motionEasingSticky": "motion",
        "motionEasingExpressive": "motion",
        "motionDurationResponsive": "motion",
        "motionDurationExpressive": "motion",
        "motionDurationComplex": "motion",
        "motionKeyframesFadeIn": "motion",
        "motionKeyframesFadeOut": "motion",
        "motionKeyframesStatusIconError": "motion",
        "motionKeyframesScalePopup": "motion",
        "sizeCalendarGridWidth": "density",
        "sizeControl": "density",
        "sizeIconBig": "density",
        "sizeIconLarge": "density",
        "sizeIconMedium": "density",
        "sizeIconNormal": "density",
        "sizeTableSelectionHorizontal": "density",
        "sizeVerticalInput": "density",
        "sizeVerticalPanelIconOffset": "density",
        "spaceAlertActionLeft": "density",
        "spaceAlertHorizontal": "density",
        "spaceAlertMessageRight": "density",
        "spaceAlertVertical": "density",
        "spaceButtonFocusOutlineGutter": "density",
        "spaceButtonIconFocusOutlineGutterVertical": "density",
        "spaceButtonIconOnlyHorizontal": "density",
        "spaceButtonInlineIconFocusOutlineGutter": "density",
        "spaceButtonModalDismissVertical": "density",
        "spaceCalendarGridFocusOutlineGutter": "density",
        "spaceCalendarGridSelectedFocusOutlineGutter": "density",
        "spaceCardHorizontal": "density",
        "spaceCodeEditorStatusFocusOutlineGutter": "density",
        "spaceContainerContentTop": "density",
        "spaceContainerHeaderVertical": "density",
        "spaceContainerHorizontal": "density",
        "spaceContentHeaderPaddingBottom": "density",
        "spaceDarkHeaderOverlapDistance": "density",
        "spaceExpandableSectionIconOffsetTop": "density",
        "spaceFieldHorizontal": "density",
        "spaceFieldIconOffset": "density",
        "spaceFilteringTokenDismissButtonFocusOutlineGutter": "density",
        "spaceFilteringTokenOperationSelectFocusOutlineGutter": "density",
        "spaceFlashbarActionLeft": "density",
        "spaceFlashbarDismissRight": "density",
        "spaceFlashbarHorizontal": "density",
        "spaceGridGutter": "density",
        "spaceLayoutContentBottom": "density",
        "spaceLayoutToggleDiameter": "density",
        "spaceLayoutTogglePadding": "density",
        "spaceModalContentBottom": "density",
        "spaceModalHorizontal": "density",
        "spacePanelNavLeft": "density",
        "spacePanelSideLeft": "density",
        "spacePanelSideRight": "density",
        "spacePanelSplitTop": "density",
        "spaceSegmentedControlFocusOutlineGutter": "density",
        "spaceTableHeaderFocusOutlineGutter": "density",
        "spaceTabsContentTop": "density",
        "spaceTableHorizontal": "density",
        "spaceTableHeaderHorizontal": "density",
        "spaceTableContentBottom": "density",
        "spaceTableContentTop": "density",
        "spaceTableEmbeddedContentBottom": "density",
        "spaceTableEmbeddedHeaderTop": "density",
        "spaceTableFooterHorizontal": "density",
        "spaceTabsFocusOutlineGutter": "density",
        "spaceScaled2xNone": "density",
        "spaceScaled2xXxxs": "density",
        "spaceScaled2xXxs": "density",
        "spaceScaled2xXs": "density",
        "spaceScaled2xS": "density",
        "spaceScaled2xM": "density",
        "spaceScaled2xL": "density",
        "spaceScaled2xXl": "density",
        "spaceScaled2xXxl": "density",
        "spaceScaled2xXxxl": "density",
        "spaceScaledNone": "density",
        "spaceScaledXxxs": "density",
        "spaceScaledXxs": "density",
        "spaceScaledXs": "density",
        "spaceScaledS": "density",
        "spaceScaledM": "density",
        "spaceScaledL": "density",
        "spaceScaledXl": "density",
        "spaceScaledXxl": "density",
        "spaceScaledXxxl": "density",
        "spaceStaticXxxs": "density",
        "spaceStaticXxs": "density",
        "spaceStaticXs": "density",
        "spaceStaticS": "density",
        "spaceStaticM": "density",
        "spaceStaticL": "density",
        "spaceStaticXl": "density",
        "spaceStaticXxl": "density",
        "spaceStaticXxxl": "density",
        "spaceNone": "density",
        "spaceXxxs": "density",
        "spaceXxs": "density",
        "spaceXs": "density",
        "spaceS": "density",
        "spaceM": "density",
        "spaceL": "density",
        "spaceXl": "density",
        "spaceXxl": "density",
        "spaceXxxl": "density",
        "shadowContainer": "color",
        "shadowContainerStacked": "color",
        "shadowContainerActive": "color",
        "shadowDropdown": "color",
        "shadowDropup": "color",
        "shadowFlashCollapsed": "color",
        "shadowFlashSticky": "color",
        "shadowModal": "color",
        "shadowPanel": "color",
        "shadowPanelToggle": "color",
        "shadowPopover": "color",
        "shadowSplitBottom": "color",
        "shadowSplitSide": "color",
        "shadowSticky": "color",
        "shadowStickyEmbedded": "color",
        "shadowStickyColumnFirst": "color",
        "shadowStickyColumnLast": "color"
      }
    }
  ],
  "themeable": [
    "colorChartsStatusCritical",
    "colorChartsStatusHigh",
    "colorChartsStatusMedium",
    "colorChartsStatusLow",
    "colorChartsStatusPositive",
    "colorChartsStatusInfo",
    "colorChartsStatusNeutral",
    "colorChartsThresholdNegative",
    "colorChartsThresholdPositive",
    "colorChartsThresholdInfo",
    "colorChartsThresholdNeutral",
    "colorChartsPaletteCategorical1",
    "colorChartsPaletteCategorical2",
    "colorChartsPaletteCategorical3",
    "colorChartsPaletteCategorical4",
    "colorChartsPaletteCategorical5",
    "colorChartsPaletteCategorical6",
    "colorChartsPaletteCategorical7",
    "colorChartsPaletteCategorical8",
    "colorChartsPaletteCategorical9",
    "colorChartsPaletteCategorical10",
    "colorChartsPaletteCategorical11",
    "colorChartsPaletteCategorical12",
    "colorChartsPaletteCategorical13",
    "colorChartsPaletteCategorical14",
    "colorChartsPaletteCategorical15",
    "colorChartsPaletteCategorical16",
    "colorChartsPaletteCategorical17",
    "colorChartsPaletteCategorical18",
    "colorChartsPaletteCategorical19",
    "colorChartsPaletteCategorical20",
    "colorChartsPaletteCategorical21",
    "colorChartsPaletteCategorical22",
    "colorChartsPaletteCategorical23",
    "colorChartsPaletteCategorical24",
    "colorChartsPaletteCategorical25",
    "colorChartsPaletteCategorical26",
    "colorChartsPaletteCategorical27",
    "colorChartsPaletteCategorical28",
    "colorChartsPaletteCategorical29",
    "colorChartsPaletteCategorical30",
    "colorChartsPaletteCategorical31",
    "colorChartsPaletteCategorical32",
    "colorChartsPaletteCategorical33",
    "colorChartsPaletteCategorical34",
    "colorChartsPaletteCategorical35",
    "colorChartsPaletteCategorical36",
    "colorChartsPaletteCategorical37",
    "colorChartsPaletteCategorical38",
    "colorChartsPaletteCategorical39",
    "colorChartsPaletteCategorical40",
    "colorChartsPaletteCategorical41",
    "colorChartsPaletteCategorical42",
    "colorChartsPaletteCategorical43",
    "colorChartsPaletteCategorical44",
    "colorChartsPaletteCategorical45",
    "colorChartsPaletteCategorical46",
    "colorChartsPaletteCategorical47",
    "colorChartsPaletteCategorical48",
    "colorChartsPaletteCategorical49",
    "colorChartsPaletteCategorical50",
    "colorBackgroundButtonNormalActive",
    "colorBackgroundButtonNormalDefault",
    "colorBackgroundButtonNormalDisabled",
    "colorBackgroundButtonNormalHover",
    "colorBackgroundButtonPrimaryActive",
    "colorBackgroundButtonPrimaryDefault",
    "colorBackgroundButtonPrimaryDisabled",
    "colorBackgroundButtonPrimaryHover",
    "colorBackgroundCellShaded",
    "colorBackgroundContainerContent",
    "colorBackgroundContainerHeader",
    "colorBackgroundControlChecked",
    "colorBackgroundControlDefault",
    "colorBackgroundControlDisabled",
    "colorBackgroundDropdownItemDefault",
    "colorBackgroundDropdownItemFilterMatch",
    "colorBackgroundDropdownItemHover",
    "colorBackgroundHomeHeader",
    "colorBackgroundInputDefault",
    "colorBackgroundInputDisabled",
    "colorBackgroundItemSelected",
    "colorBackgroundLayoutMain",
    "colorBackgroundLayoutToggleActive",
    "colorBackgroundLayoutToggleDefault",
    "colorBackgroundLayoutToggleHover",
    "colorBackgroundLayoutToggleSelectedActive",
    "colorBackgroundLayoutToggleSelectedDefault",
    "colorBackgroundLayoutToggleSelectedHover",
    "colorBackgroundNotificationBlue",
    "colorBackgroundNotificationGreen",
    "colorBackgroundNotificationRed",
    "colorBackgroundPopover",
    "colorBackgroundStatusError",
    "colorBackgroundStatusInfo",
    "colorBackgroundStatusSuccess",
    "colorBackgroundStatusWarning",
    "colorBackgroundToggleCheckedDisabled",
    "colorBorderButtonNormalDefault",
    "colorBorderButtonNormalDisabled",
    "colorBorderButtonNormalHover",
    "colorBorderButtonPrimaryDisabled",
    "colorBorderContainerTop",
    "colorBorderControlDefault",
    "colorBorderDividerDefault",
    "colorBorderDropdownItemHover",
    "colorBorderInputDefault",
    "colorBorderItemFocused",
    "colorBorderItemSelected",
    "colorBorderStatusError",
    "colorBorderStatusInfo",
    "colorBorderStatusSuccess",
    "colorBorderStatusWarning",
    "colorForegroundControlDefault",
    "colorForegroundControlDisabled",
    "colorTextAccent",
    "colorTextBodyDefault",
    "colorTextBodySecondary",
    "colorTextButtonNormalActive",
    "colorTextButtonNormalDefault",
    "colorTextButtonNormalHover",
    "colorTextLinkButtonNormalDefault",
    "colorTextLinkButtonNormalHover",
    "colorTextLinkButtonNormalActive",
    "colorTextButtonPrimaryActive",
    "colorTextButtonPrimaryDefault",
    "colorTextButtonPrimaryHover",
    "colorTextCounter",
    "colorTextDropdownItemFilterMatch",
    "colorTextDropdownItemHighlighted",
    "colorTextEmpty",
    "colorTextFormDefault",
    "colorTextFormSecondary",
    "colorTextGroupLabel",
    "colorTextHeadingDefault",
    "colorTextHeadingSecondary",
    "colorTextHomeHeaderDefault",
    "colorTextHomeHeaderSecondary",
    "colorTextInputDisabled",
    "colorTextInputPlaceholder",
    "colorTextInteractiveActive",
    "colorTextInteractiveDefault",
    "colorTextInteractiveDisabled",
    "colorTextInteractiveHover",
    "colorTextInteractiveInvertedDefault",
    "colorTextInteractiveInvertedHover",
    "colorTextLabel",
    "colorTextLayoutToggle",
    "colorTextLayoutToggleActive",
    "colorTextLayoutToggleHover",
    "colorTextLayoutToggleSelected",
    "colorTextLinkDefault",
    "colorTextLinkHover",
    "colorTextNotificationDefault",
    "colorTextStatusError",
    "colorTextStatusInactive",
    "colorTextStatusInfo",
    "colorTextStatusSuccess",
    "colorTextStatusWarning",
    "colorTextTopNavigationTitle",
    "fontFamilyBase",
    "fontFamilyMonospace",
    "borderRadiusAlert",
    "borderRadiusBadge",
    "borderRadiusButton",
    "borderRadiusCalendarDayFocusRing",
    "borderRadiusContainer",
    "borderRadiusControlCircularFocusRing",
    "borderRadiusControlDefaultFocusRing",
    "borderRadiusDropdown",
    "borderRadiusFlashbar",
    "borderRadiusItem",
    "borderRadiusInput",
    "borderRadiusPopover",
    "borderRadiusTabsFocusRing",
    "borderRadiusTiles",
    "borderRadiusToken",
    "borderRadiusTutorialPanelItem"
  ],
  "exposed": [
    "colorChartsRed300",
    "colorChartsRed400",
    "colorChartsRed500",
    "colorChartsRed600",
    "colorChartsRed700",
    "colorChartsRed800",
    "colorChartsRed900",
    "colorChartsRed1000",
    "colorChartsRed1100",
    "colorChartsRed1200",
    "colorChartsOrange300",
    "colorChartsOrange400",
    "colorChartsOrange500",
    "colorChartsOrange600",
    "colorChartsOrange700",
    "colorChartsOrange800",
    "colorChartsOrange900",
    "colorChartsOrange1000",
    "colorChartsOrange1100",
    "colorChartsOrange1200",
    "colorChartsYellow300",
    "colorChartsYellow400",
    "colorChartsYellow500",
    "colorChartsYellow600",
    "colorChartsYellow700",
    "colorChartsYellow800",
    "colorChartsYellow900",
    "colorChartsYellow1000",
    "colorChartsYellow1100",
    "colorChartsYellow1200",
    "colorChartsGreen300",
    "colorChartsGreen400",
    "colorChartsGreen500",
    "colorChartsGreen600",
    "colorChartsGreen700",
    "colorChartsGreen800",
    "colorChartsGreen900",
    "colorChartsGreen1000",
    "colorChartsGreen1100",
    "colorChartsGreen1200",
    "colorChartsTeal300",
    "colorChartsTeal400",
    "colorChartsTeal500",
    "colorChartsTeal600",
    "colorChartsTeal700",
    "colorChartsTeal800",
    "colorChartsTeal900",
    "colorChartsTeal1000",
    "colorChartsTeal1100",
    "colorChartsTeal1200",
    "colorChartsBlue1300",
    "colorChartsBlue1400",
    "colorChartsBlue1500",
    "colorChartsBlue1600",
    "colorChartsBlue1700",
    "colorChartsBlue1800",
    "colorChartsBlue1900",
    "colorChartsBlue11000",
    "colorChartsBlue11100",
    "colorChartsBlue11200",
    "colorChartsBlue2300",
    "colorChartsBlue2400",
    "colorChartsBlue2500",
    "colorChartsBlue2600",
    "colorChartsBlue2700",
    "colorChartsBlue2800",
    "colorChartsBlue2900",
    "colorChartsBlue21000",
    "colorChartsBlue21100",
    "colorChartsBlue21200",
    "colorChartsPurple300",
    "colorChartsPurple400",
    "colorChartsPurple500",
    "colorChartsPurple600",
    "colorChartsPurple700",
    "colorChartsPurple800",
    "colorChartsPurple900",
    "colorChartsPurple1000",
    "colorChartsPurple1100",
    "colorChartsPurple1200",
    "colorChartsPink300",
    "colorChartsPink400",
    "colorChartsPink500",
    "colorChartsPink600",
    "colorChartsPink700",
    "colorChartsPink800",
    "colorChartsPink900",
    "colorChartsPink1000",
    "colorChartsPink1100",
    "colorChartsPink1200",
    "colorChartsStatusCritical",
    "colorChartsStatusHigh",
    "colorChartsStatusMedium",
    "colorChartsStatusLow",
    "colorChartsStatusPositive",
    "colorChartsStatusInfo",
    "colorChartsStatusNeutral",
    "colorChartsThresholdNegative",
    "colorChartsThresholdPositive",
    "colorChartsThresholdInfo",
    "colorChartsThresholdNeutral",
    "colorChartsLineGrid",
    "colorChartsLineTick",
    "colorChartsLineAxis",
    "colorChartsPaletteCategorical1",
    "colorChartsPaletteCategorical2",
    "colorChartsPaletteCategorical3",
    "colorChartsPaletteCategorical4",
    "colorChartsPaletteCategorical5",
    "colorChartsPaletteCategorical6",
    "colorChartsPaletteCategorical7",
    "colorChartsPaletteCategorical8",
    "colorChartsPaletteCategorical9",
    "colorChartsPaletteCategorical10",
    "colorChartsPaletteCategorical11",
    "colorChartsPaletteCategorical12",
    "colorChartsPaletteCategorical13",
    "colorChartsPaletteCategorical14",
    "colorChartsPaletteCategorical15",
    "colorChartsPaletteCategorical16",
    "colorChartsPaletteCategorical17",
    "colorChartsPaletteCategorical18",
    "colorChartsPaletteCategorical19",
    "colorChartsPaletteCategorical20",
    "colorChartsPaletteCategorical21",
    "colorChartsPaletteCategorical22",
    "colorChartsPaletteCategorical23",
    "colorChartsPaletteCategorical24",
    "colorChartsPaletteCategorical25",
    "colorChartsPaletteCategorical26",
    "colorChartsPaletteCategorical27",
    "colorChartsPaletteCategorical28",
    "colorChartsPaletteCategorical29",
    "colorChartsPaletteCategorical30",
    "colorChartsPaletteCategorical31",
    "colorChartsPaletteCategorical32",
    "colorChartsPaletteCategorical33",
    "colorChartsPaletteCategorical34",
    "colorChartsPaletteCategorical35",
    "colorChartsPaletteCategorical36",
    "colorChartsPaletteCategorical37",
    "colorChartsPaletteCategorical38",
    "colorChartsPaletteCategorical39",
    "colorChartsPaletteCategorical40",
    "colorChartsPaletteCategorical41",
    "colorChartsPaletteCategorical42",
    "colorChartsPaletteCategorical43",
    "colorChartsPaletteCategorical44",
    "colorChartsPaletteCategorical45",
    "colorChartsPaletteCategorical46",
    "colorChartsPaletteCategorical47",
    "colorChartsPaletteCategorical48",
    "colorChartsPaletteCategorical49",
    "colorChartsPaletteCategorical50",
    "colorBackgroundButtonNormalActive",
    "colorBackgroundButtonNormalDefault",
    "colorBackgroundButtonNormalDisabled",
    "colorBackgroundButtonNormalHover",
    "colorBackgroundButtonPrimaryActive",
    "colorBackgroundButtonPrimaryDefault",
    "colorBackgroundButtonPrimaryDisabled",
    "colorBackgroundButtonPrimaryHover",
    "colorBackgroundCellShaded",
    "colorBackgroundContainerContent",
    "colorBackgroundContainerHeader",
    "colorBackgroundControlChecked",
    "colorBackgroundControlDefault",
    "colorBackgroundControlDisabled",
    "colorBackgroundDropdownItemDefault",
    "colorBackgroundDropdownItemFilterMatch",
    "colorBackgroundDropdownItemHover",
    "colorBackgroundHomeHeader",
    "colorBackgroundInputDefault",
    "colorBackgroundInputDisabled",
    "colorBackgroundItemSelected",
    "colorBackgroundLayoutMain",
    "colorBackgroundLayoutToggleActive",
    "colorBackgroundLayoutToggleDefault",
    "colorBackgroundLayoutToggleHover",
    "colorBackgroundLayoutToggleSelectedActive",
    "colorBackgroundLayoutToggleSelectedDefault",
    "colorBackgroundLayoutToggleSelectedHover",
    "colorBackgroundNotificationBlue",
    "colorBackgroundNotificationGreen",
    "colorBackgroundNotificationRed",
    "colorBackgroundPopover",
    "colorBackgroundStatusError",
    "colorBackgroundStatusInfo",
    "colorBackgroundStatusSuccess",
    "colorBackgroundStatusWarning",
    "colorBackgroundToggleCheckedDisabled",
    "colorBorderButtonNormalDefault",
    "colorBorderButtonNormalDisabled",
    "colorBorderButtonNormalHover",
    "colorBorderButtonPrimaryDisabled",
    "colorBorderContainerTop",
    "colorBorderControlDefault",
    "colorBorderDividerDefault",
    "colorBorderDropdownItemHover",
    "colorBorderInputDefault",
    "colorBorderItemFocused",
    "colorBorderItemSelected",
    "colorBorderStatusError",
    "colorBorderStatusInfo",
    "colorBorderStatusSuccess",
    "colorBorderStatusWarning",
    "colorForegroundControlDefault",
    "colorForegroundControlDisabled",
    "colorTextAccent",
    "colorTextBodyDefault",
    "colorTextBodySecondary",
    "colorTextButtonNormalActive",
    "colorTextButtonNormalDefault",
    "colorTextButtonNormalHover",
    "colorTextButtonPrimaryActive",
    "colorTextButtonPrimaryDefault",
    "colorTextButtonPrimaryHover",
    "colorTextCounter",
    "colorTextDropdownItemFilterMatch",
    "colorTextDropdownItemHighlighted",
    "colorTextEmpty",
    "colorTextFormDefault",
    "colorTextFormSecondary",
    "colorTextGroupLabel",
    "colorTextHeadingDefault",
    "colorTextHeadingSecondary",
    "colorTextHomeHeaderDefault",
    "colorTextHomeHeaderSecondary",
    "colorTextInputDisabled",
    "colorTextInputPlaceholder",
    "colorTextInteractiveActive",
    "colorTextInteractiveDefault",
    "colorTextInteractiveDisabled",
    "colorTextInteractiveHover",
    "colorTextInteractiveInvertedDefault",
    "colorTextInteractiveInvertedHover",
    "colorTextLabel",
    "colorTextLayoutToggle",
    "colorTextLayoutToggleActive",
    "colorTextLayoutToggleHover",
    "colorTextLayoutToggleSelected",
    "colorTextLinkDefault",
    "colorTextLinkHover",
    "colorTextNotificationDefault",
    "colorTextStatusError",
    "colorTextStatusInactive",
    "colorTextStatusInfo",
    "colorTextStatusSuccess",
    "colorTextStatusWarning",
    "colorTextTopNavigationTitle",
    "colorBoardPlaceholderActive",
    "colorBoardPlaceholderHover",
    "colorDragPlaceholderActive",
    "colorDragPlaceholderHover",
    "fontFamilyBase",
    "fontFamilyMonospace",
    "borderRadiusAlert",
    "borderRadiusBadge",
    "borderRadiusButton",
    "borderRadiusCalendarDayFocusRing",
    "borderRadiusContainer",
    "borderRadiusControlCircularFocusRing",
    "borderRadiusControlDefaultFocusRing",
    "borderRadiusDropdown",
    "borderRadiusFlashbar",
    "borderRadiusItem",
    "borderRadiusInput",
    "borderRadiusPopover",
    "borderRadiusTabsFocusRing",
    "borderRadiusTiles",
    "borderRadiusToken",
    "borderRadiusTutorialPanelItem",
    "motionEasingResponsive",
    "motionEasingSticky",
    "motionEasingExpressive",
    "motionDurationResponsive",
    "motionDurationExpressive",
    "motionDurationComplex",
    "motionKeyframesFadeIn",
    "motionKeyframesFadeOut",
    "motionKeyframesStatusIconError",
    "motionKeyframesScalePopup",
    "spaceContainerHorizontal",
    "spaceFieldHorizontal",
    "spaceScaledXxxs",
    "spaceScaledXxs",
    "spaceScaledXs",
    "spaceScaledS",
    "spaceScaledM",
    "spaceScaledL",
    "spaceScaledXl",
    "spaceScaledXxl",
    "spaceScaledXxxl",
    "spaceStaticXxxs",
    "spaceStaticXxs",
    "spaceStaticXs",
    "spaceStaticS",
    "spaceStaticM",
    "spaceStaticL",
    "spaceStaticXl",
    "spaceStaticXxl",
    "spaceStaticXxxl",
    "shadowContainerActive"
  ],
  "variablesMap": {
    "colorAmazonOrange": "color-amazon-orange",
    "colorAwsSquidInk": "color-aws-squid-ink",
    "colorBlack": "color-black",
    "colorBlue100": "color-blue-100",
    "colorBlue200": "color-blue-200",
    "colorBlue300": "color-blue-300",
    "colorBlue400": "color-blue-400",
    "colorBlue500": "color-blue-500",
    "colorBlue600": "color-blue-600",
    "colorBlue700": "color-blue-700",
    "colorBlue800": "color-blue-800",
    "colorBlue900": "color-blue-900",
    "colorBlueOpaque": "color-blue-opaque",
    "colorGreen100": "color-green-100",
    "colorGreen500": "color-green-500",
    "colorGreen600": "color-green-600",
    "colorGreen700": "color-green-700",
    "colorGreen900": "color-green-900",
    "colorGrey100": "color-grey-100",
    "colorGrey125": "color-grey-125",
    "colorGrey150": "color-grey-150",
    "colorGrey200": "color-grey-200",
    "colorGrey300": "color-grey-300",
    "colorGrey400": "color-grey-400",
    "colorGrey450": "color-grey-450",
    "colorGrey500": "color-grey-500",
    "colorGrey550": "color-grey-550",
    "colorGrey600": "color-grey-600",
    "colorGrey650": "color-grey-650",
    "colorGrey700": "color-grey-700",
    "colorGrey750": "color-grey-750",
    "colorGrey800": "color-grey-800",
    "colorGrey900": "color-grey-900",
    "colorGrey950": "color-grey-950",
    "colorOrange100": "color-orange-100",
    "colorOrange500": "color-orange-500",
    "colorOrange600": "color-orange-600",
    "colorOrange700": "color-orange-700",
    "colorRed100": "color-red-100",
    "colorRed500": "color-red-500",
    "colorRed600": "color-red-600",
    "colorRed700": "color-red-700",
    "colorRed900": "color-red-900",
    "colorTransparent": "color-transparent",
    "colorWhite": "color-white",
    "colorChartsRed300": "color-charts-red-300",
    "colorChartsRed400": "color-charts-red-400",
    "colorChartsRed500": "color-charts-red-500",
    "colorChartsRed600": "color-charts-red-600",
    "colorChartsRed700": "color-charts-red-700",
    "colorChartsRed800": "color-charts-red-800",
    "colorChartsRed900": "color-charts-red-900",
    "colorChartsRed1000": "color-charts-red-1000",
    "colorChartsRed1100": "color-charts-red-1100",
    "colorChartsRed1200": "color-charts-red-1200",
    "colorChartsOrange300": "color-charts-orange-300",
    "colorChartsOrange400": "color-charts-orange-400",
    "colorChartsOrange500": "color-charts-orange-500",
    "colorChartsOrange600": "color-charts-orange-600",
    "colorChartsOrange700": "color-charts-orange-700",
    "colorChartsOrange800": "color-charts-orange-800",
    "colorChartsOrange900": "color-charts-orange-900",
    "colorChartsOrange1000": "color-charts-orange-1000",
    "colorChartsOrange1100": "color-charts-orange-1100",
    "colorChartsOrange1200": "color-charts-orange-1200",
    "colorChartsYellow300": "color-charts-yellow-300",
    "colorChartsYellow400": "color-charts-yellow-400",
    "colorChartsYellow500": "color-charts-yellow-500",
    "colorChartsYellow600": "color-charts-yellow-600",
    "colorChartsYellow700": "color-charts-yellow-700",
    "colorChartsYellow800": "color-charts-yellow-800",
    "colorChartsYellow900": "color-charts-yellow-900",
    "colorChartsYellow1000": "color-charts-yellow-1000",
    "colorChartsYellow1100": "color-charts-yellow-1100",
    "colorChartsYellow1200": "color-charts-yellow-1200",
    "colorChartsGreen300": "color-charts-green-300",
    "colorChartsGreen400": "color-charts-green-400",
    "colorChartsGreen500": "color-charts-green-500",
    "colorChartsGreen600": "color-charts-green-600",
    "colorChartsGreen700": "color-charts-green-700",
    "colorChartsGreen800": "color-charts-green-800",
    "colorChartsGreen900": "color-charts-green-900",
    "colorChartsGreen1000": "color-charts-green-1000",
    "colorChartsGreen1100": "color-charts-green-1100",
    "colorChartsGreen1200": "color-charts-green-1200",
    "colorChartsTeal300": "color-charts-teal-300",
    "colorChartsTeal400": "color-charts-teal-400",
    "colorChartsTeal500": "color-charts-teal-500",
    "colorChartsTeal600": "color-charts-teal-600",
    "colorChartsTeal700": "color-charts-teal-700",
    "colorChartsTeal800": "color-charts-teal-800",
    "colorChartsTeal900": "color-charts-teal-900",
    "colorChartsTeal1000": "color-charts-teal-1000",
    "colorChartsTeal1100": "color-charts-teal-1100",
    "colorChartsTeal1200": "color-charts-teal-1200",
    "colorChartsBlue1300": "color-charts-blue-1-300",
    "colorChartsBlue1400": "color-charts-blue-1-400",
    "colorChartsBlue1500": "color-charts-blue-1-500",
    "colorChartsBlue1600": "color-charts-blue-1-600",
    "colorChartsBlue1700": "color-charts-blue-1-700",
    "colorChartsBlue1800": "color-charts-blue-1-800",
    "colorChartsBlue1900": "color-charts-blue-1-900",
    "colorChartsBlue11000": "color-charts-blue-1-1000",
    "colorChartsBlue11100": "color-charts-blue-1-1100",
    "colorChartsBlue11200": "color-charts-blue-1-1200",
    "colorChartsBlue2300": "color-charts-blue-2-300",
    "colorChartsBlue2400": "color-charts-blue-2-400",
    "colorChartsBlue2500": "color-charts-blue-2-500",
    "colorChartsBlue2600": "color-charts-blue-2-600",
    "colorChartsBlue2700": "color-charts-blue-2-700",
    "colorChartsBlue2800": "color-charts-blue-2-800",
    "colorChartsBlue2900": "color-charts-blue-2-900",
    "colorChartsBlue21000": "color-charts-blue-2-1000",
    "colorChartsBlue21100": "color-charts-blue-2-1100",
    "colorChartsBlue21200": "color-charts-blue-2-1200",
    "colorChartsPurple300": "color-charts-purple-300",
    "colorChartsPurple400": "color-charts-purple-400",
    "colorChartsPurple500": "color-charts-purple-500",
    "colorChartsPurple600": "color-charts-purple-600",
    "colorChartsPurple700": "color-charts-purple-700",
    "colorChartsPurple800": "color-charts-purple-800",
    "colorChartsPurple900": "color-charts-purple-900",
    "colorChartsPurple1000": "color-charts-purple-1000",
    "colorChartsPurple1100": "color-charts-purple-1100",
    "colorChartsPurple1200": "color-charts-purple-1200",
    "colorChartsPink300": "color-charts-pink-300",
    "colorChartsPink400": "color-charts-pink-400",
    "colorChartsPink500": "color-charts-pink-500",
    "colorChartsPink600": "color-charts-pink-600",
    "colorChartsPink700": "color-charts-pink-700",
    "colorChartsPink800": "color-charts-pink-800",
    "colorChartsPink900": "color-charts-pink-900",
    "colorChartsPink1000": "color-charts-pink-1000",
    "colorChartsPink1100": "color-charts-pink-1100",
    "colorChartsPink1200": "color-charts-pink-1200",
    "colorChartsStatusCritical": "color-charts-status-critical",
    "colorChartsStatusHigh": "color-charts-status-high",
    "colorChartsStatusMedium": "color-charts-status-medium",
    "colorChartsStatusLow": "color-charts-status-low",
    "colorChartsStatusPositive": "color-charts-status-positive",
    "colorChartsStatusInfo": "color-charts-status-info",
    "colorChartsStatusNeutral": "color-charts-status-neutral",
    "colorChartsThresholdNegative": "color-charts-threshold-negative",
    "colorChartsThresholdPositive": "color-charts-threshold-positive",
    "colorChartsThresholdInfo": "color-charts-threshold-info",
    "colorChartsThresholdNeutral": "color-charts-threshold-neutral",
    "colorChartsLineGrid": "color-charts-line-grid",
    "colorChartsLineTick": "color-charts-line-tick",
    "colorChartsLineAxis": "color-charts-line-axis",
    "colorChartsPaletteCategorical1": "color-charts-palette-categorical-1",
    "colorChartsPaletteCategorical2": "color-charts-palette-categorical-2",
    "colorChartsPaletteCategorical3": "color-charts-palette-categorical-3",
    "colorChartsPaletteCategorical4": "color-charts-palette-categorical-4",
    "colorChartsPaletteCategorical5": "color-charts-palette-categorical-5",
    "colorChartsPaletteCategorical6": "color-charts-palette-categorical-6",
    "colorChartsPaletteCategorical7": "color-charts-palette-categorical-7",
    "colorChartsPaletteCategorical8": "color-charts-palette-categorical-8",
    "colorChartsPaletteCategorical9": "color-charts-palette-categorical-9",
    "colorChartsPaletteCategorical10": "color-charts-palette-categorical-10",
    "colorChartsPaletteCategorical11": "color-charts-palette-categorical-11",
    "colorChartsPaletteCategorical12": "color-charts-palette-categorical-12",
    "colorChartsPaletteCategorical13": "color-charts-palette-categorical-13",
    "colorChartsPaletteCategorical14": "color-charts-palette-categorical-14",
    "colorChartsPaletteCategorical15": "color-charts-palette-categorical-15",
    "colorChartsPaletteCategorical16": "color-charts-palette-categorical-16",
    "colorChartsPaletteCategorical17": "color-charts-palette-categorical-17",
    "colorChartsPaletteCategorical18": "color-charts-palette-categorical-18",
    "colorChartsPaletteCategorical19": "color-charts-palette-categorical-19",
    "colorChartsPaletteCategorical20": "color-charts-palette-categorical-20",
    "colorChartsPaletteCategorical21": "color-charts-palette-categorical-21",
    "colorChartsPaletteCategorical22": "color-charts-palette-categorical-22",
    "colorChartsPaletteCategorical23": "color-charts-palette-categorical-23",
    "colorChartsPaletteCategorical24": "color-charts-palette-categorical-24",
    "colorChartsPaletteCategorical25": "color-charts-palette-categorical-25",
    "colorChartsPaletteCategorical26": "color-charts-palette-categorical-26",
    "colorChartsPaletteCategorical27": "color-charts-palette-categorical-27",
    "colorChartsPaletteCategorical28": "color-charts-palette-categorical-28",
    "colorChartsPaletteCategorical29": "color-charts-palette-categorical-29",
    "colorChartsPaletteCategorical30": "color-charts-palette-categorical-30",
    "colorChartsPaletteCategorical31": "color-charts-palette-categorical-31",
    "colorChartsPaletteCategorical32": "color-charts-palette-categorical-32",
    "colorChartsPaletteCategorical33": "color-charts-palette-categorical-33",
    "colorChartsPaletteCategorical34": "color-charts-palette-categorical-34",
    "colorChartsPaletteCategorical35": "color-charts-palette-categorical-35",
    "colorChartsPaletteCategorical36": "color-charts-palette-categorical-36",
    "colorChartsPaletteCategorical37": "color-charts-palette-categorical-37",
    "colorChartsPaletteCategorical38": "color-charts-palette-categorical-38",
    "colorChartsPaletteCategorical39": "color-charts-palette-categorical-39",
    "colorChartsPaletteCategorical40": "color-charts-palette-categorical-40",
    "colorChartsPaletteCategorical41": "color-charts-palette-categorical-41",
    "colorChartsPaletteCategorical42": "color-charts-palette-categorical-42",
    "colorChartsPaletteCategorical43": "color-charts-palette-categorical-43",
    "colorChartsPaletteCategorical44": "color-charts-palette-categorical-44",
    "colorChartsPaletteCategorical45": "color-charts-palette-categorical-45",
    "colorChartsPaletteCategorical46": "color-charts-palette-categorical-46",
    "colorChartsPaletteCategorical47": "color-charts-palette-categorical-47",
    "colorChartsPaletteCategorical48": "color-charts-palette-categorical-48",
    "colorChartsPaletteCategorical49": "color-charts-palette-categorical-49",
    "colorChartsPaletteCategorical50": "color-charts-palette-categorical-50",
    "colorGreyOpaque25": "color-grey-opaque-25",
    "colorGreyOpaque40": "color-grey-opaque-40",
    "colorGreyOpaque50": "color-grey-opaque-50",
    "colorGreyOpaque70": "color-grey-opaque-70",
    "colorGreyOpaque80": "color-grey-opaque-80",
    "colorGreyOpaque90": "color-grey-opaque-90",
    "colorGreyTransparent": "color-grey-transparent",
    "colorGreyTransparentHeavy": "color-grey-transparent-heavy",
    "colorGreyTransparentLight": "color-grey-transparent-light",
    "colorBackgroundButtonLinkActive": "color-background-button-link-active",
    "colorBackgroundButtonLinkHover": "color-background-button-link-hover",
    "colorBackgroundButtonNormalActive": "color-background-button-normal-active",
    "colorBackgroundButtonNormalDefault": "color-background-button-normal-default",
    "colorBackgroundButtonNormalDisabled": "color-background-button-normal-disabled",
    "colorBackgroundButtonNormalHover": "color-background-button-normal-hover",
    "colorBackgroundButtonPrimaryActive": "color-background-button-primary-active",
    "colorBackgroundButtonPrimaryDefault": "color-background-button-primary-default",
    "colorBackgroundButtonPrimaryDisabled": "color-background-button-primary-disabled",
    "colorBackgroundButtonPrimaryHover": "color-background-button-primary-hover",
    "colorBackgroundCalendarToday": "color-background-calendar-today",
    "colorBackgroundCellShaded": "color-background-cell-shaded",
    "colorBackgroundCodeEditorGutterActiveLineDefault": "color-background-code-editor-gutter-active-line-default",
    "colorBackgroundCodeEditorGutterActiveLineError": "color-background-code-editor-gutter-active-line-error",
    "colorBackgroundCodeEditorGutterDefault": "color-background-code-editor-gutter-default",
    "colorBackgroundCodeEditorLoading": "color-background-code-editor-loading",
    "colorBackgroundCodeEditorPaneItemHover": "color-background-code-editor-pane-item-hover",
    "colorBackgroundCodeEditorStatusBar": "color-background-code-editor-status-bar",
    "colorBackgroundContainerContent": "color-background-container-content",
    "colorBackgroundContainerHeader": "color-background-container-header",
    "colorBackgroundControlChecked": "color-background-control-checked",
    "colorBackgroundControlDefault": "color-background-control-default",
    "colorBackgroundControlDisabled": "color-background-control-disabled",
    "colorBackgroundDropdownItemDefault": "color-background-dropdown-item-default",
    "colorBackgroundDropdownItemDimmed": "color-background-dropdown-item-dimmed",
    "colorBackgroundDropdownItemFilterMatch": "color-background-dropdown-item-filter-match",
    "colorBackgroundDropdownItemHover": "color-background-dropdown-item-hover",
    "colorBackgroundDropdownItemSelected": "color-background-dropdown-item-selected",
    "colorBackgroundHomeHeader": "color-background-home-header",
    "colorBackgroundInputDefault": "color-background-input-default",
    "colorBackgroundInputDisabled": "color-background-input-disabled",
    "colorBackgroundItemSelected": "color-background-item-selected",
    "colorBackgroundLayoutMain": "color-background-layout-main",
    "colorBackgroundLayoutMobilePanel": "color-background-layout-mobile-panel",
    "colorBackgroundLayoutPanelContent": "color-background-layout-panel-content",
    "colorBackgroundLayoutPanelHover": "color-background-layout-panel-hover",
    "colorBackgroundLayoutToggleActive": "color-background-layout-toggle-active",
    "colorBackgroundLayoutToggleDefault": "color-background-layout-toggle-default",
    "colorBackgroundLayoutToggleHover": "color-background-layout-toggle-hover",
    "colorBackgroundLayoutToggleSelectedActive": "color-background-layout-toggle-selected-active",
    "colorBackgroundLayoutToggleSelectedDefault": "color-background-layout-toggle-selected-default",
    "colorBackgroundLayoutToggleSelectedHover": "color-background-layout-toggle-selected-hover",
    "colorBackgroundModalOverlay": "color-background-modal-overlay",
    "colorBackgroundNotificationBlue": "color-background-notification-blue",
    "colorBackgroundNotificationGreen": "color-background-notification-green",
    "colorBackgroundNotificationGrey": "color-background-notification-grey",
    "colorBackgroundNotificationRed": "color-background-notification-red",
    "colorBackgroundNotificationStackBar": "color-background-notification-stack-bar",
    "colorBackgroundNotificationStackBarActive": "color-background-notification-stack-bar-active",
    "colorBackgroundNotificationStackBarHover": "color-background-notification-stack-bar-hover",
    "colorBackgroundPopover": "color-background-popover",
    "colorBackgroundProgressBarContentDefault": "color-background-progress-bar-content-default",
    "colorBackgroundProgressBarContentInFlash": "color-background-progress-bar-content-in-flash",
    "colorBackgroundProgressBarLayoutDefault": "color-background-progress-bar-layout-default",
    "colorBackgroundProgressBarLayoutInFlash": "color-background-progress-bar-layout-in-flash",
    "colorBackgroundSegmentActive": "color-background-segment-active",
    "colorBackgroundSegmentDefault": "color-background-segment-default",
    "colorBackgroundSegmentDisabled": "color-background-segment-disabled",
    "colorBackgroundSegmentHover": "color-background-segment-hover",
    "colorBackgroundStatusError": "color-background-status-error",
    "colorBackgroundStatusInfo": "color-background-status-info",
    "colorBackgroundStatusSuccess": "color-background-status-success",
    "colorBackgroundStatusWarning": "color-background-status-warning",
    "colorBackgroundTableHeader": "color-background-table-header",
    "colorBackgroundTilesDisabled": "color-background-tiles-disabled",
    "colorBackgroundToggleCheckedDisabled": "color-background-toggle-checked-disabled",
    "colorBackgroundToggleDefault": "color-background-toggle-default",
    "colorBorderButtonNormalActive": "color-border-button-normal-active",
    "colorBorderButtonNormalDefault": "color-border-button-normal-default",
    "colorBorderButtonNormalDisabled": "color-border-button-normal-disabled",
    "colorBorderButtonNormalHover": "color-border-button-normal-hover",
    "colorBorderButtonPrimaryDisabled": "color-border-button-primary-disabled",
    "colorBorderCalendarGrid": "color-border-calendar-grid",
    "colorBorderCalendarGridSelectedFocusRing": "color-border-calendar-grid-selected-focus-ring",
    "colorBorderCodeEditorAceActiveLineLightTheme": "color-border-code-editor-ace-active-line-light-theme",
    "colorBorderCodeEditorAceActiveLineDarkTheme": "color-border-code-editor-ace-active-line-dark-theme",
    "colorBorderCodeEditorDefault": "color-border-code-editor-default",
    "colorBorderCodeEditorPaneItemHover": "color-border-code-editor-pane-item-hover",
    "colorBorderContainerDivider": "color-border-container-divider",
    "colorBorderContainerTop": "color-border-container-top",
    "colorBorderControlChecked": "color-border-control-checked",
    "colorBorderControlDefault": "color-border-control-default",
    "colorBorderControlDisabled": "color-border-control-disabled",
    "colorBorderDividerActive": "color-border-divider-active",
    "colorBorderDividerDefault": "color-border-divider-default",
    "colorBorderDividerPanelBottom": "color-border-divider-panel-bottom",
    "colorBorderDividerPanelSide": "color-border-divider-panel-side",
    "colorBorderDropdownContainer": "color-border-dropdown-container",
    "colorBorderDropdownGroup": "color-border-dropdown-group",
    "colorBorderDropdownItemDefault": "color-border-dropdown-item-default",
    "colorBorderDropdownItemHover": "color-border-dropdown-item-hover",
    "colorBorderDropdownItemDimmedHover": "color-border-dropdown-item-dimmed-hover",
    "colorBorderDropdownItemSelected": "color-border-dropdown-item-selected",
    "colorBorderDropdownItemTop": "color-border-dropdown-item-top",
    "colorBorderEditableCellHover": "color-border-editable-cell-hover",
    "colorBorderInputDefault": "color-border-input-default",
    "colorBorderInputDisabled": "color-border-input-disabled",
    "colorBorderItemFocused": "color-border-item-focused",
    "colorBorderItemPlaceholder": "color-border-item-placeholder",
    "colorBorderItemSelected": "color-border-item-selected",
    "colorBorderLayout": "color-border-layout",
    "colorBorderNotificationStackBar": "color-border-notification-stack-bar",
    "colorBorderPopover": "color-border-popover",
    "colorBorderSegmentActive": "color-border-segment-active",
    "colorBorderSegmentDefault": "color-border-segment-default",
    "colorBorderSegmentDisabled": "color-border-segment-disabled",
    "colorBorderSegmentHover": "color-border-segment-hover",
    "colorBorderStatusError": "color-border-status-error",
    "colorBorderStatusInfo": "color-border-status-info",
    "colorBorderStatusSuccess": "color-border-status-success",
    "colorBorderStatusWarning": "color-border-status-warning",
    "colorBorderDividerInteractiveDefault": "color-border-divider-interactive-default",
    "colorBorderTabsDivider": "color-border-tabs-divider",
    "colorBorderTabsShadow": "color-border-tabs-shadow",
    "colorBorderTabsUnderline": "color-border-tabs-underline",
    "colorBorderTilesDisabled": "color-border-tiles-disabled",
    "colorBorderTutorial": "color-border-tutorial",
    "colorForegroundControlDefault": "color-foreground-control-default",
    "colorForegroundControlDisabled": "color-foreground-control-disabled",
    "colorShadowDefault": "color-shadow-default",
    "colorShadowLayoutToggle": "color-shadow-layout-toggle",
    "colorShadowMedium": "color-shadow-medium",
    "colorShadowSide": "color-shadow-side",
    "colorStrokeChartLine": "color-stroke-chart-line",
    "colorStrokeCodeEditorResizeHandler": "color-stroke-code-editor-resize-handler",
    "colorStrokeCodeEditorGutterActiveLineDefault": "color-stroke-code-editor-gutter-active-line-default",
    "colorStrokeCodeEditorGutterActiveLineHover": "color-stroke-code-editor-gutter-active-line-hover",
    "colorTextAccent": "color-text-accent",
    "colorTextBodyDefault": "color-text-body-default",
    "colorTextBodySecondary": "color-text-body-secondary",
    "colorTextBreadcrumbCurrent": "color-text-breadcrumb-current",
    "colorTextBreadcrumbIcon": "color-text-breadcrumb-icon",
    "colorTextButtonInlineIconDefault": "color-text-button-inline-icon-default",
    "colorTextButtonInlineIconDisabled": "color-text-button-inline-icon-disabled",
    "colorTextButtonInlineIconHover": "color-text-button-inline-icon-hover",
    "colorTextButtonNormalActive": "color-text-button-normal-active",
    "colorTextButtonNormalDefault": "color-text-button-normal-default",
    "colorTextButtonNormalHover": "color-text-button-normal-hover",
    "colorTextLinkButtonNormalDefault": "color-text-link-button-normal-default",
    "colorTextLinkButtonNormalHover": "color-text-link-button-normal-hover",
    "colorTextLinkButtonNormalActive": "color-text-link-button-normal-active",
    "colorTextButtonPrimaryActive": "color-text-button-primary-active",
    "colorTextButtonPrimaryDefault": "color-text-button-primary-default",
    "colorTextButtonPrimaryHover": "color-text-button-primary-hover",
    "colorTextCalendarDayHover": "color-text-calendar-day-hover",
    "colorTextCalendarDaySelected": "color-text-calendar-day-selected",
    "colorTextCalendarMonth": "color-text-calendar-month",
    "colorTextCodeEditorGutterActiveLine": "color-text-code-editor-gutter-active-line",
    "colorTextCodeEditorGutterDefault": "color-text-code-editor-gutter-default",
    "colorTextCodeEditorStatusBarDisabled": "color-text-code-editor-status-bar-disabled",
    "colorTextCodeEditorTabButtonError": "color-text-code-editor-tab-button-error",
    "colorTextColumnHeader": "color-text-column-header",
    "colorTextColumnSortingIcon": "color-text-column-sorting-icon",
    "colorTextControlDisabled": "color-text-control-disabled",
    "colorTextCounter": "color-text-counter",
    "colorTextDisabled": "color-text-disabled",
    "colorTextDropdownFooter": "color-text-dropdown-footer",
    "colorTextDropdownGroupLabel": "color-text-dropdown-group-label",
    "colorTextDropdownHeader": "color-text-dropdown-header",
    "colorTextDropdownItemDefault": "color-text-dropdown-item-default",
    "colorTextDropdownItemDimmed": "color-text-dropdown-item-dimmed",
    "colorTextDropdownItemDisabled": "color-text-dropdown-item-disabled",
    "colorTextDropdownItemFilterMatch": "color-text-dropdown-item-filter-match",
    "colorTextDropdownItemHighlighted": "color-text-dropdown-item-highlighted",
    "colorTextDropdownItemSecondary": "color-text-dropdown-item-secondary",
    "colorTextDropdownItemSecondaryHover": "color-text-dropdown-item-secondary-hover",
    "colorTextEmpty": "color-text-empty",
    "colorTextExpandableSectionDefault": "color-text-expandable-section-default",
    "colorTextExpandableSectionHover": "color-text-expandable-section-hover",
    "colorTextExpandableSectionNavigationIconDefault": "color-text-expandable-section-navigation-icon-default",
    "colorTextFormDefault": "color-text-form-default",
    "colorTextFormLabel": "color-text-form-label",
    "colorTextFormSecondary": "color-text-form-secondary",
    "colorTextGroupLabel": "color-text-group-label",
    "colorTextHeadingDefault": "color-text-heading-default",
    "colorTextHeadingSecondary": "color-text-heading-secondary",
    "colorTextHomeHeaderDefault": "color-text-home-header-default",
    "colorTextHomeHeaderSecondary": "color-text-home-header-secondary",
    "colorTextIconCaret": "color-text-icon-caret",
    "colorTextIconSubtle": "color-text-icon-subtle",
    "colorTextInputDisabled": "color-text-input-disabled",
    "colorTextInputPlaceholder": "color-text-input-placeholder",
    "colorTextInputPlaceholderDisabled": "color-text-input-placeholder-disabled",
    "colorTextInteractiveActive": "color-text-interactive-active",
    "colorTextInteractiveDefault": "color-text-interactive-default",
    "colorTextInteractiveDisabled": "color-text-interactive-disabled",
    "colorTextInteractiveHover": "color-text-interactive-hover",
    "colorTextInteractiveInvertedDefault": "color-text-interactive-inverted-default",
    "colorTextInteractiveInvertedHover": "color-text-interactive-inverted-hover",
    "colorTextInverted": "color-text-inverted",
    "colorTextLabel": "color-text-label",
    "colorTextLayoutToggle": "color-text-layout-toggle",
    "colorTextLayoutToggleActive": "color-text-layout-toggle-active",
    "colorTextLayoutToggleHover": "color-text-layout-toggle-hover",
    "colorTextLayoutToggleSelected": "color-text-layout-toggle-selected",
    "colorTextLinkDefault": "color-text-link-default",
    "colorTextLinkHover": "color-text-link-hover",
    "colorTextLinkInvertedHover": "color-text-link-inverted-hover",
    "colorTextLinkButtonUnderline": "color-text-link-button-underline",
    "colorTextLinkButtonUnderlineHover": "color-text-link-button-underline-hover",
    "colorTextLinkPrimaryUnderline": "color-text-link-primary-underline",
    "colorTextNotificationDefault": "color-text-notification-default",
    "colorTextNotificationStackBar": "color-text-notification-stack-bar",
    "colorTextPaginationPageNumberActiveDisabled": "color-text-pagination-page-number-active-disabled",
    "colorTextPaginationPageNumberDefault": "color-text-pagination-page-number-default",
    "colorTextSegmentActive": "color-text-segment-active",
    "colorTextSegmentDefault": "color-text-segment-default",
    "colorTextSegmentHover": "color-text-segment-hover",
    "colorTextSmall": "color-text-small",
    "colorTextStatusError": "color-text-status-error",
    "colorTextStatusInactive": "color-text-status-inactive",
    "colorTextStatusInfo": "color-text-status-info",
    "colorTextStatusSuccess": "color-text-status-success",
    "colorTextStatusWarning": "color-text-status-warning",
    "colorTextTopNavigationTitle": "color-text-top-navigation-title",
    "colorBoardPlaceholderActive": "color-board-placeholder-active",
    "colorBoardPlaceholderHover": "color-board-placeholder-hover",
    "colorDragPlaceholderActive": "color-drag-placeholder-active",
    "colorDragPlaceholderHover": "color-drag-placeholder-hover",
    "colorDropzoneBackgroundActive": "color-dropzone-background-active",
    "colorDropzoneBackgroundHover": "color-dropzone-background-hover",
    "colorDropzoneTextActive": "color-dropzone-text-active",
    "colorDropzoneTextHover": "color-dropzone-text-hover",
    "fontBodyMLineHeight": "font-body-m-line-height",
    "fontBodyMSize": "font-body-m-size",
    "fontBodySLetterSpacing": "font-body-s-letter-spacing",
    "fontBodySLineHeight": "font-body-s-line-height",
    "fontBodySSize": "font-body-s-size",
    "fontButtonLetterSpacing": "font-button-letter-spacing",
    "fontButtonWeight": "font-button-weight",
    "fontChartDetailSize": "font-chart-detail-size",
    "fontDisplayLLetterSpacing": "font-display-l-letter-spacing",
    "fontDisplayLLineHeight": "font-display-l-line-height",
    "fontDisplayLSize": "font-display-l-size",
    "fontDisplayLabelWeight": "font-display-label-weight",
    "fontExpandableHeadingSize": "font-expandable-heading-size",
    "fontFamilyBase": "font-family-base",
    "fontFamilyMonospace": "font-family-monospace",
    "fontHeaderH2DescriptionLineHeight": "font-header-h2-description-line-height",
    "fontHeaderH2DescriptionSize": "font-header-h2-description-size",
    "fontHeadingLLetterSpacing": "font-heading-l-letter-spacing",
    "fontHeadingLLineHeight": "font-heading-l-line-height",
    "fontHeadingLSize": "font-heading-l-size",
    "fontHeadingLWeight": "font-heading-l-weight",
    "fontHeadingMLetterSpacing": "font-heading-m-letter-spacing",
    "fontHeadingMLineHeight": "font-heading-m-line-height",
    "fontHeadingMSize": "font-heading-m-size",
    "fontHeadingMWeight": "font-heading-m-weight",
    "fontHeadingSLetterSpacing": "font-heading-s-letter-spacing",
    "fontHeadingSLineHeight": "font-heading-s-line-height",
    "fontHeadingSSize": "font-heading-s-size",
    "fontHeadingSWeight": "font-heading-s-weight",
    "fontHeadingXlLetterSpacing": "font-heading-xl-letter-spacing",
    "fontHeadingXlLineHeight": "font-heading-xl-line-height",
    "fontHeadingXlSize": "font-heading-xl-size",
    "fontHeadingXlWeight": "font-heading-xl-weight",
    "fontHeadingXsLineHeight": "font-heading-xs-line-height",
    "fontHeadingXsSize": "font-heading-xs-size",
    "fontHeadingXsWeight": "font-heading-xs-weight",
    "fontBoxValueLargeWeight": "font-box-value-large-weight",
    "fontLinkButtonLetterSpacing": "font-link-button-letter-spacing",
    "fontLinkButtonWeight": "font-link-button-weight",
    "fontLinkPrimaryDecoration": "font-link-primary-decoration",
    "fontLinkPrimaryLetterSpacing": "font-link-primary-letter-spacing",
    "fontLinkPrimaryWeight": "font-link-primary-weight",
    "fontPanelHeaderLineHeight": "font-panel-header-line-height",
    "fontPanelHeaderSize": "font-panel-header-size",
    "fontSmoothingWebkit": "font-smoothing-webkit",
    "fontSmoothingMozOsx": "font-smoothing-moz-osx",
    "fontTabsDisabledWeight": "font-tabs-disabled-weight",
    "fontTabsLineHeight": "font-tabs-line-height",
    "fontTabsSize": "font-tabs-size",
    "fontWayfindingLinkActiveWeight": "font-wayfinding-link-active-weight",
    "fontWeightHeavy": "font-weight-heavy",
    "borderActiveWidth": "border-active-width",
    "borderCodeEditorStatusDividerWidth": "border-code-editor-status-divider-width",
    "borderContainerStickyWidth": "border-container-sticky-width",
    "borderContainerTopWidth": "border-container-top-width",
    "borderControlFocusRingShadowSpread": "border-control-focus-ring-shadow-spread",
    "borderControlInvalidFocusRingShadowSpread": "border-control-invalid-focus-ring-shadow-spread",
    "borderDividerListWidth": "border-divider-list-width",
    "borderDividerSectionWidth": "border-divider-section-width",
    "borderDropdownVirtualOffsetWidth": "border-dropdown-virtual-offset-width",
    "borderFieldWidth": "border-field-width",
    "borderInvalidWidth": "border-invalid-width",
    "borderItemWidth": "border-item-width",
    "borderLineChartDashArray": "border-line-chart-dash-array",
    "borderLineChartLineJoin": "border-line-chart-line-join",
    "borderLineChartWidth": "border-line-chart-width",
    "borderPanelHeaderWidth": "border-panel-header-width",
    "borderPanelTopWidth": "border-panel-top-width",
    "borderRadiusAlert": "border-radius-alert",
    "borderRadiusBadge": "border-radius-badge",
    "borderRadiusButton": "border-radius-button",
    "borderRadiusCalendarDayFocusRing": "border-radius-calendar-day-focus-ring",
    "borderRadiusCodeEditor": "border-radius-code-editor",
    "borderRadiusContainer": "border-radius-container",
    "borderRadiusControlCircularFocusRing": "border-radius-control-circular-focus-ring",
    "borderRadiusControlDefaultFocusRing": "border-radius-control-default-focus-ring",
    "borderRadiusDropdown": "border-radius-dropdown",
    "borderRadiusDropzone": "border-radius-dropzone",
    "borderRadiusFlashbar": "border-radius-flashbar",
    "borderRadiusItem": "border-radius-item",
    "borderRadiusInput": "border-radius-input",
    "borderRadiusPopover": "border-radius-popover",
    "borderRadiusTabsFocusRing": "border-radius-tabs-focus-ring",
    "borderRadiusTiles": "border-radius-tiles",
    "borderRadiusToken": "border-radius-token",
    "borderRadiusTutorialPanelItem": "border-radius-tutorial-panel-item",
    "borderTableStickyWidth": "border-table-sticky-width",
    "borderLinkFocusRingOutline": "border-link-focus-ring-outline",
    "borderLinkFocusRingShadowSpread": "border-link-focus-ring-shadow-spread",
    "motionDurationExtraFast": "motion-duration-extra-fast",
    "motionDurationExtraSlow": "motion-duration-extra-slow",
    "motionDurationFast": "motion-duration-fast",
    "motionDurationModerate": "motion-duration-moderate",
    "motionDurationRefreshOnlyAmbient": "motion-duration-refresh-only-ambient",
    "motionDurationRefreshOnlyFast": "motion-duration-refresh-only-fast",
    "motionDurationRefreshOnlyMedium": "motion-duration-refresh-only-medium",
    "motionDurationRefreshOnlySlow": "motion-duration-refresh-only-slow",
    "motionDurationRotate180": "motion-duration-rotate-180",
    "motionDurationRotate90": "motion-duration-rotate-90",
    "motionDurationShowPaced": "motion-duration-show-paced",
    "motionDurationShowQuick": "motion-duration-show-quick",
    "motionDurationSlow": "motion-duration-slow",
    "motionDurationTransitionQuick": "motion-duration-transition-quick",
    "motionDurationTransitionShowPaced": "motion-duration-transition-show-paced",
    "motionDurationTransitionShowQuick": "motion-duration-transition-show-quick",
    "motionEasingEaseOutQuart": "motion-easing-ease-out-quart",
    "motionEasingRefreshOnlyA": "motion-easing-refresh-only-a",
    "motionEasingRefreshOnlyB": "motion-easing-refresh-only-b",
    "motionEasingRefreshOnlyC": "motion-easing-refresh-only-c",
    "motionEasingRefreshOnlyD": "motion-easing-refresh-only-d",
    "motionEasingRotate180": "motion-easing-rotate-180",
    "motionEasingRotate90": "motion-easing-rotate-90",
    "motionEasingShowPaced": "motion-easing-show-paced",
    "motionEasingShowQuick": "motion-easing-show-quick",
    "motionEasingTransitionQuick": "motion-easing-transition-quick",
    "motionEasingTransitionShowPaced": "motion-easing-transition-show-paced",
    "motionEasingTransitionShowQuick": "motion-easing-transition-show-quick",
    "motionEasingResponsive": "motion-easing-responsive",
    "motionEasingSticky": "motion-easing-sticky",
    "motionEasingExpressive": "motion-easing-expressive",
    "motionDurationResponsive": "motion-duration-responsive",
    "motionDurationExpressive": "motion-duration-expressive",
    "motionDurationComplex": "motion-duration-complex",
    "motionKeyframesFadeIn": "motion-keyframes-fade-in",
    "motionKeyframesFadeOut": "motion-keyframes-fade-out",
    "motionKeyframesStatusIconError": "motion-keyframes-status-icon-error",
    "motionKeyframesScalePopup": "motion-keyframes-scale-popup",
    "sizeCalendarGridWidth": "size-calendar-grid-width",
    "sizeControl": "size-control",
    "sizeIconBig": "size-icon-big",
    "sizeIconLarge": "size-icon-large",
    "sizeIconMedium": "size-icon-medium",
    "sizeIconNormal": "size-icon-normal",
    "sizeTableSelectionHorizontal": "size-table-selection-horizontal",
    "sizeVerticalInput": "size-vertical-input",
    "sizeVerticalPanelIconOffset": "size-vertical-panel-icon-offset",
    "spaceAlertActionLeft": "space-alert-action-left",
    "spaceAlertHorizontal": "space-alert-horizontal",
    "spaceAlertMessageRight": "space-alert-message-right",
    "spaceAlertVertical": "space-alert-vertical",
    "spaceButtonFocusOutlineGutter": "space-button-focus-outline-gutter",
    "spaceButtonIconFocusOutlineGutterVertical": "space-button-icon-focus-outline-gutter-vertical",
    "spaceButtonIconOnlyHorizontal": "space-button-icon-only-horizontal",
    "spaceButtonInlineIconFocusOutlineGutter": "space-button-inline-icon-focus-outline-gutter",
    "spaceButtonModalDismissVertical": "space-button-modal-dismiss-vertical",
    "spaceCalendarGridFocusOutlineGutter": "space-calendar-grid-focus-outline-gutter",
    "spaceCalendarGridSelectedFocusOutlineGutter": "space-calendar-grid-selected-focus-outline-gutter",
    "spaceCardHorizontal": "space-card-horizontal",
    "spaceCodeEditorStatusFocusOutlineGutter": "space-code-editor-status-focus-outline-gutter",
    "spaceContainerContentTop": "space-container-content-top",
    "spaceContainerHeaderVertical": "space-container-header-vertical",
    "spaceContainerHorizontal": "space-container-horizontal",
    "spaceContentHeaderPaddingBottom": "space-content-header-padding-bottom",
    "spaceDarkHeaderOverlapDistance": "space-dark-header-overlap-distance",
    "spaceExpandableSectionIconOffsetTop": "space-expandable-section-icon-offset-top",
    "spaceFieldHorizontal": "space-field-horizontal",
    "spaceFieldIconOffset": "space-field-icon-offset",
    "spaceFilteringTokenDismissButtonFocusOutlineGutter": "space-filtering-token-dismiss-button-focus-outline-gutter",
    "spaceFilteringTokenOperationSelectFocusOutlineGutter": "space-filtering-token-operation-select-focus-outline-gutter",
    "spaceFlashbarActionLeft": "space-flashbar-action-left",
    "spaceFlashbarDismissRight": "space-flashbar-dismiss-right",
    "spaceFlashbarHorizontal": "space-flashbar-horizontal",
    "spaceGridGutter": "space-grid-gutter",
    "spaceLayoutContentBottom": "space-layout-content-bottom",
    "spaceLayoutToggleDiameter": "space-layout-toggle-diameter",
    "spaceLayoutTogglePadding": "space-layout-toggle-padding",
    "spaceModalContentBottom": "space-modal-content-bottom",
    "spaceModalHorizontal": "space-modal-horizontal",
    "spacePanelNavLeft": "space-panel-nav-left",
    "spacePanelSideLeft": "space-panel-side-left",
    "spacePanelSideRight": "space-panel-side-right",
    "spacePanelSplitTop": "space-panel-split-top",
    "spaceSegmentedControlFocusOutlineGutter": "space-segmented-control-focus-outline-gutter",
    "spaceTableHeaderFocusOutlineGutter": "space-table-header-focus-outline-gutter",
    "spaceTabsContentTop": "space-tabs-content-top",
    "spaceTableHorizontal": "space-table-horizontal",
    "spaceTableHeaderHorizontal": "space-table-header-horizontal",
    "spaceTableContentBottom": "space-table-content-bottom",
    "spaceTableContentTop": "space-table-content-top",
    "spaceTableEmbeddedContentBottom": "space-table-embedded-content-bottom",
    "spaceTableEmbeddedHeaderTop": "space-table-embedded-header-top",
    "spaceTableFooterHorizontal": "space-table-footer-horizontal",
    "spaceTabsFocusOutlineGutter": "space-tabs-focus-outline-gutter",
    "spaceScaled2xNone": "space-scaled-2x-none",
    "spaceScaled2xXxxs": "space-scaled-2x-xxxs",
    "spaceScaled2xXxs": "space-scaled-2x-xxs",
    "spaceScaled2xXs": "space-scaled-2x-xs",
    "spaceScaled2xS": "space-scaled-2x-s",
    "spaceScaled2xM": "space-scaled-2x-m",
    "spaceScaled2xL": "space-scaled-2x-l",
    "spaceScaled2xXl": "space-scaled-2x-xl",
    "spaceScaled2xXxl": "space-scaled-2x-xxl",
    "spaceScaled2xXxxl": "space-scaled-2x-xxxl",
    "spaceScaledNone": "space-scaled-none",
    "spaceScaledXxxs": "space-scaled-xxxs",
    "spaceScaledXxs": "space-scaled-xxs",
    "spaceScaledXs": "space-scaled-xs",
    "spaceScaledS": "space-scaled-s",
    "spaceScaledM": "space-scaled-m",
    "spaceScaledL": "space-scaled-l",
    "spaceScaledXl": "space-scaled-xl",
    "spaceScaledXxl": "space-scaled-xxl",
    "spaceScaledXxxl": "space-scaled-xxxl",
    "spaceStaticXxxs": "space-static-xxxs",
    "spaceStaticXxs": "space-static-xxs",
    "spaceStaticXs": "space-static-xs",
    "spaceStaticS": "space-static-s",
    "spaceStaticM": "space-static-m",
    "spaceStaticL": "space-static-l",
    "spaceStaticXl": "space-static-xl",
    "spaceStaticXxl": "space-static-xxl",
    "spaceStaticXxxl": "space-static-xxxl",
    "spaceNone": "space-none",
    "spaceXxxs": "space-xxxs",
    "spaceXxs": "space-xxs",
    "spaceXs": "space-xs",
    "spaceS": "space-s",
    "spaceM": "space-m",
    "spaceL": "space-l",
    "spaceXl": "space-xl",
    "spaceXxl": "space-xxl",
    "spaceXxxl": "space-xxxl",
    "shadowContainer": "shadow-container",
    "shadowContainerStacked": "shadow-container-stacked",
    "shadowContainerActive": "shadow-container-active",
    "shadowDropdown": "shadow-dropdown",
    "shadowDropup": "shadow-dropup",
    "shadowFlashCollapsed": "shadow-flash-collapsed",
    "shadowFlashSticky": "shadow-flash-sticky",
    "shadowModal": "shadow-modal",
    "shadowPanel": "shadow-panel",
    "shadowPanelToggle": "shadow-panel-toggle",
    "shadowPopover": "shadow-popover",
    "shadowSplitBottom": "shadow-split-bottom",
    "shadowSplitSide": "shadow-split-side",
    "shadowSticky": "shadow-sticky",
    "shadowStickyEmbedded": "shadow-sticky-embedded",
    "shadowStickyColumnFirst": "shadow-sticky-column-first",
    "shadowStickyColumnLast": "shadow-sticky-column-last"
  },
  "propertiesMap": {
    "colorAmazonOrange": "--color-amazon-orange-aymvxn",
    "colorAwsSquidInk": "--color-aws-squid-ink-wk3w8m",
    "colorBlack": "--color-black-bi1ose",
    "colorBlue100": "--color-blue-100-9vq0r8",
    "colorBlue200": "--color-blue-200-50in01",
    "colorBlue300": "--color-blue-300-cdaq0n",
    "colorBlue400": "--color-blue-400-yrnm56",
    "colorBlue500": "--color-blue-500-p3hu8x",
    "colorBlue600": "--color-blue-600-kr5k8s",
    "colorBlue700": "--color-blue-700-2xul0x",
    "colorBlue800": "--color-blue-800-f3swhu",
    "colorBlue900": "--color-blue-900-8ufy1c",
    "colorBlueOpaque": "--color-blue-opaque-qfl5jo",
    "colorGreen100": "--color-green-100-2ejyx6",
    "colorGreen500": "--color-green-500-5jqflw",
    "colorGreen600": "--color-green-600-yz1l9n",
    "colorGreen700": "--color-green-700-alxbd0",
    "colorGreen900": "--color-green-900-6dczff",
    "colorGrey100": "--color-grey-100-zrd08j",
    "colorGrey125": "--color-grey-125-gk7ez6",
    "colorGrey150": "--color-grey-150-hc7irr",
    "colorGrey200": "--color-grey-200-ivrcq1",
    "colorGrey300": "--color-grey-300-l315fb",
    "colorGrey400": "--color-grey-400-8hw313",
    "colorGrey450": "--color-grey-450-ajzswl",
    "colorGrey500": "--color-grey-500-cii366",
    "colorGrey550": "--color-grey-550-6og9mi",
    "colorGrey600": "--color-grey-600-m1ccr7",
    "colorGrey650": "--color-grey-650-b9njrz",
    "colorGrey700": "--color-grey-700-kmiyr9",
    "colorGrey750": "--color-grey-750-w2ve3z",
    "colorGrey800": "--color-grey-800-3btah9",
    "colorGrey900": "--color-grey-900-dy988a",
    "colorGrey950": "--color-grey-950-a42817",
    "colorOrange100": "--color-orange-100-vapvx9",
    "colorOrange500": "--color-orange-500-2x6e52",
    "colorOrange600": "--color-orange-600-twg42s",
    "colorOrange700": "--color-orange-700-ci8mjq",
    "colorRed100": "--color-red-100-04i15p",
    "colorRed500": "--color-red-500-1gdrhs",
    "colorRed600": "--color-red-600-1iuc7l",
    "colorRed700": "--color-red-700-xj71gj",
    "colorRed900": "--color-red-900-vqe7zh",
    "colorTransparent": "--color-transparent-ctc9eq",
    "colorWhite": "--color-white-8k8ahx",
    "colorChartsRed300": "--color-charts-red-300-srv55h",
    "colorChartsRed400": "--color-charts-red-400-4k2epl",
    "colorChartsRed500": "--color-charts-red-500-ev0zri",
    "colorChartsRed600": "--color-charts-red-600-1k9wug",
    "colorChartsRed700": "--color-charts-red-700-fmuno3",
    "colorChartsRed800": "--color-charts-red-800-clydtl",
    "colorChartsRed900": "--color-charts-red-900-stttan",
    "colorChartsRed1000": "--color-charts-red-1000-ektrdv",
    "colorChartsRed1100": "--color-charts-red-1100-8ruojp",
    "colorChartsRed1200": "--color-charts-red-1200-h8eu54",
    "colorChartsOrange300": "--color-charts-orange-300-o5bwsv",
    "colorChartsOrange400": "--color-charts-orange-400-w908km",
    "colorChartsOrange500": "--color-charts-orange-500-zzeary",
    "colorChartsOrange600": "--color-charts-orange-600-f1o561",
    "colorChartsOrange700": "--color-charts-orange-700-o2q6az",
    "colorChartsOrange800": "--color-charts-orange-800-p8y2c2",
    "colorChartsOrange900": "--color-charts-orange-900-8ajoqk",
    "colorChartsOrange1000": "--color-charts-orange-1000-jbb4v4",
    "colorChartsOrange1100": "--color-charts-orange-1100-kxtwrv",
    "colorChartsOrange1200": "--color-charts-orange-1200-x3metq",
    "colorChartsYellow300": "--color-charts-yellow-300-zw2e3f",
    "colorChartsYellow400": "--color-charts-yellow-400-b2aw5y",
    "colorChartsYellow500": "--color-charts-yellow-500-24fqul",
    "colorChartsYellow600": "--color-charts-yellow-600-fyiqfx",
    "colorChartsYellow700": "--color-charts-yellow-700-64m7va",
    "colorChartsYellow800": "--color-charts-yellow-800-mdw2mp",
    "colorChartsYellow900": "--color-charts-yellow-900-y25wba",
    "colorChartsYellow1000": "--color-charts-yellow-1000-7bogcb",
    "colorChartsYellow1100": "--color-charts-yellow-1100-2hmgxg",
    "colorChartsYellow1200": "--color-charts-yellow-1200-6ix5rt",
    "colorChartsGreen300": "--color-charts-green-300-gy69qu",
    "colorChartsGreen400": "--color-charts-green-400-ua9tg1",
    "colorChartsGreen500": "--color-charts-green-500-j4z3iq",
    "colorChartsGreen600": "--color-charts-green-600-qa4lsv",
    "colorChartsGreen700": "--color-charts-green-700-38mghc",
    "colorChartsGreen800": "--color-charts-green-800-dbrcze",
    "colorChartsGreen900": "--color-charts-green-900-9riv6j",
    "colorChartsGreen1000": "--color-charts-green-1000-l09r77",
    "colorChartsGreen1100": "--color-charts-green-1100-fzrzq0",
    "colorChartsGreen1200": "--color-charts-green-1200-qaf80e",
    "colorChartsTeal300": "--color-charts-teal-300-otgk2s",
    "colorChartsTeal400": "--color-charts-teal-400-v47zgf",
    "colorChartsTeal500": "--color-charts-teal-500-hzvrmp",
    "colorChartsTeal600": "--color-charts-teal-600-8eapyo",
    "colorChartsTeal700": "--color-charts-teal-700-1tg9fx",
    "colorChartsTeal800": "--color-charts-teal-800-qe9546",
    "colorChartsTeal900": "--color-charts-teal-900-lth12l",
    "colorChartsTeal1000": "--color-charts-teal-1000-80nxo4",
    "colorChartsTeal1100": "--color-charts-teal-1100-1cxt0g",
    "colorChartsTeal1200": "--color-charts-teal-1200-w9xxe7",
    "colorChartsBlue1300": "--color-charts-blue-1-300-ml7t00",
    "colorChartsBlue1400": "--color-charts-blue-1-400-i94swt",
    "colorChartsBlue1500": "--color-charts-blue-1-500-5c592y",
    "colorChartsBlue1600": "--color-charts-blue-1-600-5tu06z",
    "colorChartsBlue1700": "--color-charts-blue-1-700-uxned9",
    "colorChartsBlue1800": "--color-charts-blue-1-800-gdgqby",
    "colorChartsBlue1900": "--color-charts-blue-1-900-mcrv9g",
    "colorChartsBlue11000": "--color-charts-blue-1-1000-7y5ne6",
    "colorChartsBlue11100": "--color-charts-blue-1-1100-q2dlue",
    "colorChartsBlue11200": "--color-charts-blue-1-1200-l26iuc",
    "colorChartsBlue2300": "--color-charts-blue-2-300-kz66rm",
    "colorChartsBlue2400": "--color-charts-blue-2-400-wungn2",
    "colorChartsBlue2500": "--color-charts-blue-2-500-qoz4mt",
    "colorChartsBlue2600": "--color-charts-blue-2-600-i0ghlv",
    "colorChartsBlue2700": "--color-charts-blue-2-700-1zkxd1",
    "colorChartsBlue2800": "--color-charts-blue-2-800-xd3qtm",
    "colorChartsBlue2900": "--color-charts-blue-2-900-lka2q1",
    "colorChartsBlue21000": "--color-charts-blue-2-1000-7ln2gw",
    "colorChartsBlue21100": "--color-charts-blue-2-1100-fv25o4",
    "colorChartsBlue21200": "--color-charts-blue-2-1200-426m4k",
    "colorChartsPurple300": "--color-charts-purple-300-nuu98n",
    "colorChartsPurple400": "--color-charts-purple-400-1vvkny",
    "colorChartsPurple500": "--color-charts-purple-500-2osc4n",
    "colorChartsPurple600": "--color-charts-purple-600-hzywpo",
    "colorChartsPurple700": "--color-charts-purple-700-vjmss9",
    "colorChartsPurple800": "--color-charts-purple-800-guvto1",
    "colorChartsPurple900": "--color-charts-purple-900-rwsmhw",
    "colorChartsPurple1000": "--color-charts-purple-1000-9852zg",
    "colorChartsPurple1100": "--color-charts-purple-1100-tdyeha",
    "colorChartsPurple1200": "--color-charts-purple-1200-2ea5ov",
    "colorChartsPink300": "--color-charts-pink-300-b59ko2",
    "colorChartsPink400": "--color-charts-pink-400-rudlfd",
    "colorChartsPink500": "--color-charts-pink-500-4z8kty",
    "colorChartsPink600": "--color-charts-pink-600-uatrov",
    "colorChartsPink700": "--color-charts-pink-700-64u2rq",
    "colorChartsPink800": "--color-charts-pink-800-anf3kk",
    "colorChartsPink900": "--color-charts-pink-900-3f2muj",
    "colorChartsPink1000": "--color-charts-pink-1000-kcym14",
    "colorChartsPink1100": "--color-charts-pink-1100-f09rd3",
    "colorChartsPink1200": "--color-charts-pink-1200-srvst7",
    "colorChartsStatusCritical": "--color-charts-status-critical-cep0dz",
    "colorChartsStatusHigh": "--color-charts-status-high-lbzx35",
    "colorChartsStatusMedium": "--color-charts-status-medium-ksjux8",
    "colorChartsStatusLow": "--color-charts-status-low-8osm4b",
    "colorChartsStatusPositive": "--color-charts-status-positive-6noygh",
    "colorChartsStatusInfo": "--color-charts-status-info-v0gujt",
    "colorChartsStatusNeutral": "--color-charts-status-neutral-no8rjb",
    "colorChartsThresholdNegative": "--color-charts-threshold-negative-jjf6sj",
    "colorChartsThresholdPositive": "--color-charts-threshold-positive-8myk77",
    "colorChartsThresholdInfo": "--color-charts-threshold-info-1sce9u",
    "colorChartsThresholdNeutral": "--color-charts-threshold-neutral-ikaiiq",
    "colorChartsLineGrid": "--color-charts-line-grid-0r3q3h",
    "colorChartsLineTick": "--color-charts-line-tick-dhjpwa",
    "colorChartsLineAxis": "--color-charts-line-axis-4u4941",
    "colorChartsPaletteCategorical1": "--color-charts-palette-categorical-1-w6bmw0",
    "colorChartsPaletteCategorical2": "--color-charts-palette-categorical-2-bfitrn",
    "colorChartsPaletteCategorical3": "--color-charts-palette-categorical-3-3drvd2",
    "colorChartsPaletteCategorical4": "--color-charts-palette-categorical-4-a21po6",
    "colorChartsPaletteCategorical5": "--color-charts-palette-categorical-5-0ywuey",
    "colorChartsPaletteCategorical6": "--color-charts-palette-categorical-6-bg6bvo",
    "colorChartsPaletteCategorical7": "--color-charts-palette-categorical-7-bw1k8b",
    "colorChartsPaletteCategorical8": "--color-charts-palette-categorical-8-buqt5c",
    "colorChartsPaletteCategorical9": "--color-charts-palette-categorical-9-ekdavp",
    "colorChartsPaletteCategorical10": "--color-charts-palette-categorical-10-2cxy5i",
    "colorChartsPaletteCategorical11": "--color-charts-palette-categorical-11-049oe3",
    "colorChartsPaletteCategorical12": "--color-charts-palette-categorical-12-4yzaf4",
    "colorChartsPaletteCategorical13": "--color-charts-palette-categorical-13-hldcek",
    "colorChartsPaletteCategorical14": "--color-charts-palette-categorical-14-b0ajjc",
    "colorChartsPaletteCategorical15": "--color-charts-palette-categorical-15-i7ee0e",
    "colorChartsPaletteCategorical16": "--color-charts-palette-categorical-16-ztscdv",
    "colorChartsPaletteCategorical17": "--color-charts-palette-categorical-17-hdsi8a",
    "colorChartsPaletteCategorical18": "--color-charts-palette-categorical-18-ct2ua2",
    "colorChartsPaletteCategorical19": "--color-charts-palette-categorical-19-0uf9f9",
    "colorChartsPaletteCategorical20": "--color-charts-palette-categorical-20-kgcspa",
    "colorChartsPaletteCategorical21": "--color-charts-palette-categorical-21-cxou5n",
    "colorChartsPaletteCategorical22": "--color-charts-palette-categorical-22-b4opnc",
    "colorChartsPaletteCategorical23": "--color-charts-palette-categorical-23-rcgsuv",
    "colorChartsPaletteCategorical24": "--color-charts-palette-categorical-24-uuy37s",
    "colorChartsPaletteCategorical25": "--color-charts-palette-categorical-25-a618ie",
    "colorChartsPaletteCategorical26": "--color-charts-palette-categorical-26-ouufu7",
    "colorChartsPaletteCategorical27": "--color-charts-palette-categorical-27-s3lop9",
    "colorChartsPaletteCategorical28": "--color-charts-palette-categorical-28-21znzj",
    "colorChartsPaletteCategorical29": "--color-charts-palette-categorical-29-s7b4nz",
    "colorChartsPaletteCategorical30": "--color-charts-palette-categorical-30-um9shr",
    "colorChartsPaletteCategorical31": "--color-charts-palette-categorical-31-7xtub6",
    "colorChartsPaletteCategorical32": "--color-charts-palette-categorical-32-ligt5g",
    "colorChartsPaletteCategorical33": "--color-charts-palette-categorical-33-knvy2m",
    "colorChartsPaletteCategorical34": "--color-charts-palette-categorical-34-2q75un",
    "colorChartsPaletteCategorical35": "--color-charts-palette-categorical-35-2bp2og",
    "colorChartsPaletteCategorical36": "--color-charts-palette-categorical-36-idubtv",
    "colorChartsPaletteCategorical37": "--color-charts-palette-categorical-37-x9cp4s",
    "colorChartsPaletteCategorical38": "--color-charts-palette-categorical-38-pddyba",
    "colorChartsPaletteCategorical39": "--color-charts-palette-categorical-39-lo5zc8",
    "colorChartsPaletteCategorical40": "--color-charts-palette-categorical-40-uof3ob",
    "colorChartsPaletteCategorical41": "--color-charts-palette-categorical-41-2h3m1n",
    "colorChartsPaletteCategorical42": "--color-charts-palette-categorical-42-yif97k",
    "colorChartsPaletteCategorical43": "--color-charts-palette-categorical-43-kya6i6",
    "colorChartsPaletteCategorical44": "--color-charts-palette-categorical-44-4fv550",
    "colorChartsPaletteCategorical45": "--color-charts-palette-categorical-45-e3k7nm",
    "colorChartsPaletteCategorical46": "--color-charts-palette-categorical-46-zqopno",
    "colorChartsPaletteCategorical47": "--color-charts-palette-categorical-47-yb5djr",
    "colorChartsPaletteCategorical48": "--color-charts-palette-categorical-48-ym4gp7",
    "colorChartsPaletteCategorical49": "--color-charts-palette-categorical-49-sprf1u",
    "colorChartsPaletteCategorical50": "--color-charts-palette-categorical-50-l20yoz",
    "colorGreyOpaque25": "--color-grey-opaque-25-5turpj",
    "colorGreyOpaque40": "--color-grey-opaque-40-eg5ge7",
    "colorGreyOpaque50": "--color-grey-opaque-50-uq379i",
    "colorGreyOpaque70": "--color-grey-opaque-70-gyxc9f",
    "colorGreyOpaque80": "--color-grey-opaque-80-er0lcj",
    "colorGreyOpaque90": "--color-grey-opaque-90-mjrtn8",
    "colorGreyTransparent": "--color-grey-transparent-pxiv45",
    "colorGreyTransparentHeavy": "--color-grey-transparent-heavy-79xbgq",
    "colorGreyTransparentLight": "--color-grey-transparent-light-gnd45e",
    "colorBackgroundButtonLinkActive": "--color-background-button-link-active-rlics7",
    "colorBackgroundButtonLinkHover": "--color-background-button-link-hover-qf83z5",
    "colorBackgroundButtonNormalActive": "--color-background-button-normal-active-79iynn",
    "colorBackgroundButtonNormalDefault": "--color-background-button-normal-default-t2tuyv",
    "colorBackgroundButtonNormalDisabled": "--color-background-button-normal-disabled-8fnu13",
    "colorBackgroundButtonNormalHover": "--color-background-button-normal-hover-kgzdqb",
    "colorBackgroundButtonPrimaryActive": "--color-background-button-primary-active-kdt3vz",
    "colorBackgroundButtonPrimaryDefault": "--color-background-button-primary-default-1flr6f",
    "colorBackgroundButtonPrimaryDisabled": "--color-background-button-primary-disabled-apuj38",
    "colorBackgroundButtonPrimaryHover": "--color-background-button-primary-hover-b2mmsk",
    "colorBackgroundCalendarToday": "--color-background-calendar-today-0692qx",
    "colorBackgroundCellShaded": "--color-background-cell-shaded-guxnnq",
    "colorBackgroundCodeEditorGutterActiveLineDefault": "--color-background-code-editor-gutter-active-line-default-v3re8u",
    "colorBackgroundCodeEditorGutterActiveLineError": "--color-background-code-editor-gutter-active-line-error-sy4x9c",
    "colorBackgroundCodeEditorGutterDefault": "--color-background-code-editor-gutter-default-hx14ys",
    "colorBackgroundCodeEditorLoading": "--color-background-code-editor-loading-h9inzp",
    "colorBackgroundCodeEditorPaneItemHover": "--color-background-code-editor-pane-item-hover-ck35nl",
    "colorBackgroundCodeEditorStatusBar": "--color-background-code-editor-status-bar-y32lc8",
    "colorBackgroundContainerContent": "--color-background-container-content-xlzim4",
    "colorBackgroundContainerHeader": "--color-background-container-header-gnwbip",
    "colorBackgroundControlChecked": "--color-background-control-checked-uprbe0",
    "colorBackgroundControlDefault": "--color-background-control-default-3975zi",
    "colorBackgroundControlDisabled": "--color-background-control-disabled-44nu28",
    "colorBackgroundDropdownItemDefault": "--color-background-dropdown-item-default-we492v",
    "colorBackgroundDropdownItemDimmed": "--color-background-dropdown-item-dimmed-p5nayy",
    "colorBackgroundDropdownItemFilterMatch": "--color-background-dropdown-item-filter-match-8hf2rr",
    "colorBackgroundDropdownItemHover": "--color-background-dropdown-item-hover-ooa2c9",
    "colorBackgroundDropdownItemSelected": "--color-background-dropdown-item-selected-ud58gi",
    "colorBackgroundHomeHeader": "--color-background-home-header-ae9yxg",
    "colorBackgroundInputDefault": "--color-background-input-default-16mzof",
    "colorBackgroundInputDisabled": "--color-background-input-disabled-izitmw",
    "colorBackgroundItemSelected": "--color-background-item-selected-7226j1",
    "colorBackgroundLayoutMain": "--color-background-layout-main-nd5gs3",
    "colorBackgroundLayoutMobilePanel": "--color-background-layout-mobile-panel-68gaep",
    "colorBackgroundLayoutPanelContent": "--color-background-layout-panel-content-jx4wcr",
    "colorBackgroundLayoutPanelHover": "--color-background-layout-panel-hover-yn48lk",
    "colorBackgroundLayoutToggleActive": "--color-background-layout-toggle-active-3tl7p5",
    "colorBackgroundLayoutToggleDefault": "--color-background-layout-toggle-default-ra31l6",
    "colorBackgroundLayoutToggleHover": "--color-background-layout-toggle-hover-ptxkb8",
    "colorBackgroundLayoutToggleSelectedActive": "--color-background-layout-toggle-selected-active-fkoocx",
    "colorBackgroundLayoutToggleSelectedDefault": "--color-background-layout-toggle-selected-default-ksjxnl",
    "colorBackgroundLayoutToggleSelectedHover": "--color-background-layout-toggle-selected-hover-3wnu1o",
    "colorBackgroundModalOverlay": "--color-background-modal-overlay-09h3el",
    "colorBackgroundNotificationBlue": "--color-background-notification-blue-oqsgou",
    "colorBackgroundNotificationGreen": "--color-background-notification-green-mwnj66",
    "colorBackgroundNotificationGrey": "--color-background-notification-grey-plyfpj",
    "colorBackgroundNotificationRed": "--color-background-notification-red-pvsx5r",
    "colorBackgroundNotificationStackBar": "--color-background-notification-stack-bar-oqpncr",
    "colorBackgroundNotificationStackBarActive": "--color-background-notification-stack-bar-active-b7cvj2",
    "colorBackgroundNotificationStackBarHover": "--color-background-notification-stack-bar-hover-vd6bw6",
    "colorBackgroundPopover": "--color-background-popover-eshpkd",
    "colorBackgroundProgressBarContentDefault": "--color-background-progress-bar-content-default-mj2xf1",
    "colorBackgroundProgressBarContentInFlash": "--color-background-progress-bar-content-in-flash-zqvleg",
    "colorBackgroundProgressBarLayoutDefault": "--color-background-progress-bar-layout-default-e9fsiz",
    "colorBackgroundProgressBarLayoutInFlash": "--color-background-progress-bar-layout-in-flash-g6s05g",
    "colorBackgroundSegmentActive": "--color-background-segment-active-sn866x",
    "colorBackgroundSegmentDefault": "--color-background-segment-default-pobt39",
    "colorBackgroundSegmentDisabled": "--color-background-segment-disabled-inuizc",
    "colorBackgroundSegmentHover": "--color-background-segment-hover-dwy018",
    "colorBackgroundStatusError": "--color-background-status-error-hrmert",
    "colorBackgroundStatusInfo": "--color-background-status-info-y7xysq",
    "colorBackgroundStatusSuccess": "--color-background-status-success-j700hs",
    "colorBackgroundStatusWarning": "--color-background-status-warning-0emqgh",
    "colorBackgroundTableHeader": "--color-background-table-header-fqke5t",
    "colorBackgroundTilesDisabled": "--color-background-tiles-disabled-6ulu0p",
    "colorBackgroundToggleCheckedDisabled": "--color-background-toggle-checked-disabled-yx7c2i",
    "colorBackgroundToggleDefault": "--color-background-toggle-default-8sumr9",
    "colorBorderButtonNormalActive": "--color-border-button-normal-active-fx1up1",
    "colorBorderButtonNormalDefault": "--color-border-button-normal-default-ujnvhm",
    "colorBorderButtonNormalDisabled": "--color-border-button-normal-disabled-ndy4g8",
    "colorBorderButtonNormalHover": "--color-border-button-normal-hover-b4wys9",
    "colorBorderButtonPrimaryDisabled": "--color-border-button-primary-disabled-36gaht",
    "colorBorderCalendarGrid": "--color-border-calendar-grid-ufay6s",
    "colorBorderCalendarGridSelectedFocusRing": "--color-border-calendar-grid-selected-focus-ring-8fhzc9",
    "colorBorderCodeEditorAceActiveLineLightTheme": "--color-border-code-editor-ace-active-line-light-theme-47zraw",
    "colorBorderCodeEditorAceActiveLineDarkTheme": "--color-border-code-editor-ace-active-line-dark-theme-fc0euz",
    "colorBorderCodeEditorDefault": "--color-border-code-editor-default-gopxy0",
    "colorBorderCodeEditorPaneItemHover": "--color-border-code-editor-pane-item-hover-455lav",
    "colorBorderContainerDivider": "--color-border-container-divider-b2ream",
    "colorBorderContainerTop": "--color-border-container-top-1t94bd",
    "colorBorderControlChecked": "--color-border-control-checked-miuk2h",
    "colorBorderControlDefault": "--color-border-control-default-zx2mvl",
    "colorBorderControlDisabled": "--color-border-control-disabled-p74xpm",
    "colorBorderDividerActive": "--color-border-divider-active-w8jlsh",
    "colorBorderDividerDefault": "--color-border-divider-default-uqjcpn",
    "colorBorderDividerPanelBottom": "--color-border-divider-panel-bottom-l65byr",
    "colorBorderDividerPanelSide": "--color-border-divider-panel-side-isxyme",
    "colorBorderDropdownContainer": "--color-border-dropdown-container-xnyl2e",
    "colorBorderDropdownGroup": "--color-border-dropdown-group-5ahp44",
    "colorBorderDropdownItemDefault": "--color-border-dropdown-item-default-enmspa",
    "colorBorderDropdownItemHover": "--color-border-dropdown-item-hover-jn30h1",
    "colorBorderDropdownItemDimmedHover": "--color-border-dropdown-item-dimmed-hover-ffe22s",
    "colorBorderDropdownItemSelected": "--color-border-dropdown-item-selected-33sxxr",
    "colorBorderDropdownItemTop": "--color-border-dropdown-item-top-xaio9x",
    "colorBorderEditableCellHover": "--color-border-editable-cell-hover-oi7qcj",
    "colorBorderInputDefault": "--color-border-input-default-3zchtj",
    "colorBorderInputDisabled": "--color-border-input-disabled-4rrzz6",
    "colorBorderItemFocused": "--color-border-item-focused-4clyb1",
    "colorBorderItemPlaceholder": "--color-border-item-placeholder-ohwyrb",
    "colorBorderItemSelected": "--color-border-item-selected-044zoh",
    "colorBorderLayout": "--color-border-layout-rmnayj",
    "colorBorderNotificationStackBar": "--color-border-notification-stack-bar-y6latu",
    "colorBorderPopover": "--color-border-popover-r8tmdo",
    "colorBorderSegmentActive": "--color-border-segment-active-8zm2yj",
    "colorBorderSegmentDefault": "--color-border-segment-default-wlnh48",
    "colorBorderSegmentDisabled": "--color-border-segment-disabled-ziyzhi",
    "colorBorderSegmentHover": "--color-border-segment-hover-2zshg7",
    "colorBorderStatusError": "--color-border-status-error-jb9vli",
    "colorBorderStatusInfo": "--color-border-status-info-lqyesl",
    "colorBorderStatusSuccess": "--color-border-status-success-n4mtn1",
    "colorBorderStatusWarning": "--color-border-status-warning-9ffnra",
    "colorBorderDividerInteractiveDefault": "--color-border-divider-interactive-default-ktxsgx",
    "colorBorderTabsDivider": "--color-border-tabs-divider-8f8ime",
    "colorBorderTabsShadow": "--color-border-tabs-shadow-asaqh9",
    "colorBorderTabsUnderline": "--color-border-tabs-underline-lgst0j",
    "colorBorderTilesDisabled": "--color-border-tiles-disabled-aqjfes",
    "colorBorderTutorial": "--color-border-tutorial-9o8gmz",
    "colorForegroundControlDefault": "--color-foreground-control-default-nqkae0",
    "colorForegroundControlDisabled": "--color-foreground-control-disabled-7tx8eg",
    "colorShadowDefault": "--color-shadow-default-bkdge5",
    "colorShadowLayoutToggle": "--color-shadow-layout-toggle-67ezos",
    "colorShadowMedium": "--color-shadow-medium-p7o7jv",
    "colorShadowSide": "--color-shadow-side-4kgrk2",
    "colorStrokeChartLine": "--color-stroke-chart-line-sahr4b",
    "colorStrokeCodeEditorResizeHandler": "--color-stroke-code-editor-resize-handler-zn467r",
    "colorStrokeCodeEditorGutterActiveLineDefault": "--color-stroke-code-editor-gutter-active-line-default-2uk6w8",
    "colorStrokeCodeEditorGutterActiveLineHover": "--color-stroke-code-editor-gutter-active-line-hover-ffv8rz",
    "colorTextAccent": "--color-text-accent-exu66k",
    "colorTextBodyDefault": "--color-text-body-default-fckvk9",
    "colorTextBodySecondary": "--color-text-body-secondary-vrqm14",
    "colorTextBreadcrumbCurrent": "--color-text-breadcrumb-current-teapwy",
    "colorTextBreadcrumbIcon": "--color-text-breadcrumb-icon-ku9hw0",
    "colorTextButtonInlineIconDefault": "--color-text-button-inline-icon-default-au9sza",
    "colorTextButtonInlineIconDisabled": "--color-text-button-inline-icon-disabled-320glj",
    "colorTextButtonInlineIconHover": "--color-text-button-inline-icon-hover-3vml1m",
    "colorTextButtonNormalActive": "--color-text-button-normal-active-lwprdr",
    "colorTextButtonNormalDefault": "--color-text-button-normal-default-8uqrfs",
    "colorTextButtonNormalHover": "--color-text-button-normal-hover-b8w3yw",
    "colorTextLinkButtonNormalDefault": "--color-text-link-button-normal-default-dlq865",
    "colorTextLinkButtonNormalHover": "--color-text-link-button-normal-hover-nprmu3",
    "colorTextLinkButtonNormalActive": "--color-text-link-button-normal-active-wxaaoj",
    "colorTextButtonPrimaryActive": "--color-text-button-primary-active-zf2rn1",
    "colorTextButtonPrimaryDefault": "--color-text-button-primary-default-50hikz",
    "colorTextButtonPrimaryHover": "--color-text-button-primary-hover-ygf0co",
    "colorTextCalendarDayHover": "--color-text-calendar-day-hover-gfp9kc",
    "colorTextCalendarDaySelected": "--color-text-calendar-day-selected-8ov8ao",
    "colorTextCalendarMonth": "--color-text-calendar-month-s5xkxe",
    "colorTextCodeEditorGutterActiveLine": "--color-text-code-editor-gutter-active-line-x1146e",
    "colorTextCodeEditorGutterDefault": "--color-text-code-editor-gutter-default-bwvqvq",
    "colorTextCodeEditorStatusBarDisabled": "--color-text-code-editor-status-bar-disabled-g1lmt9",
    "colorTextCodeEditorTabButtonError": "--color-text-code-editor-tab-button-error-6uvp9u",
    "colorTextColumnHeader": "--color-text-column-header-4pges2",
    "colorTextColumnSortingIcon": "--color-text-column-sorting-icon-2fj7hd",
    "colorTextControlDisabled": "--color-text-control-disabled-qxodrv",
    "colorTextCounter": "--color-text-counter-3wolcv",
    "colorTextDisabled": "--color-text-disabled-uznqkj",
    "colorTextDropdownFooter": "--color-text-dropdown-footer-a7l8xo",
    "colorTextDropdownGroupLabel": "--color-text-dropdown-group-label-0hp13b",
    "colorTextDropdownHeader": "--color-text-dropdown-header-o1u4cu",
    "colorTextDropdownItemDefault": "--color-text-dropdown-item-default-x23sfz",
    "colorTextDropdownItemDimmed": "--color-text-dropdown-item-dimmed-ngtz2z",
    "colorTextDropdownItemDisabled": "--color-text-dropdown-item-disabled-98o9ly",
    "colorTextDropdownItemFilterMatch": "--color-text-dropdown-item-filter-match-7wdfpu",
    "colorTextDropdownItemHighlighted": "--color-text-dropdown-item-highlighted-9nmduk",
    "colorTextDropdownItemSecondary": "--color-text-dropdown-item-secondary-77yrz2",
    "colorTextDropdownItemSecondaryHover": "--color-text-dropdown-item-secondary-hover-9vpnla",
    "colorTextEmpty": "--color-text-empty-ks3bhj",
    "colorTextExpandableSectionDefault": "--color-text-expandable-section-default-dhf1fv",
    "colorTextExpandableSectionHover": "--color-text-expandable-section-hover-q765vp",
    "colorTextExpandableSectionNavigationIconDefault": "--color-text-expandable-section-navigation-icon-default-7jwgwp",
    "colorTextFormDefault": "--color-text-form-default-09oko9",
    "colorTextFormLabel": "--color-text-form-label-0vkd9z",
    "colorTextFormSecondary": "--color-text-form-secondary-icb4vu",
    "colorTextGroupLabel": "--color-text-group-label-it5ws2",
    "colorTextHeadingDefault": "--color-text-heading-default-pytdm8",
    "colorTextHeadingSecondary": "--color-text-heading-secondary-2r0p61",
    "colorTextHomeHeaderDefault": "--color-text-home-header-default-s38lcl",
    "colorTextHomeHeaderSecondary": "--color-text-home-header-secondary-bkwtrh",
    "colorTextIconCaret": "--color-text-icon-caret-udasup",
    "colorTextIconSubtle": "--color-text-icon-subtle-dag22x",
    "colorTextInputDisabled": "--color-text-input-disabled-w14lvq",
    "colorTextInputPlaceholder": "--color-text-input-placeholder-j38kg2",
    "colorTextInputPlaceholderDisabled": "--color-text-input-placeholder-disabled-x5vuev",
    "colorTextInteractiveActive": "--color-text-interactive-active-2cnt2n",
    "colorTextInteractiveDefault": "--color-text-interactive-default-9x433a",
    "colorTextInteractiveDisabled": "--color-text-interactive-disabled-48m1sz",
    "colorTextInteractiveHover": "--color-text-interactive-hover-6fw5y8",
    "colorTextInteractiveInvertedDefault": "--color-text-interactive-inverted-default-df090e",
    "colorTextInteractiveInvertedHover": "--color-text-interactive-inverted-hover-p1wv99",
    "colorTextInverted": "--color-text-inverted-6ei1b1",
    "colorTextLabel": "--color-text-label-cgoyox",
    "colorTextLayoutToggle": "--color-text-layout-toggle-hg4zdn",
    "colorTextLayoutToggleActive": "--color-text-layout-toggle-active-xajvuf",
    "colorTextLayoutToggleHover": "--color-text-layout-toggle-hover-x3sh37",
    "colorTextLayoutToggleSelected": "--color-text-layout-toggle-selected-b917aa",
    "colorTextLinkDefault": "--color-text-link-default-0jy39k",
    "colorTextLinkHover": "--color-text-link-hover-z15m9s",
    "colorTextLinkInvertedHover": "--color-text-link-inverted-hover-qulh2k",
    "colorTextLinkButtonUnderline": "--color-text-link-button-underline-auxfuj",
    "colorTextLinkButtonUnderlineHover": "--color-text-link-button-underline-hover-ezyh57",
    "colorTextLinkPrimaryUnderline": "--color-text-link-primary-underline-ewz0jv",
    "colorTextNotificationDefault": "--color-text-notification-default-1d4z49",
    "colorTextNotificationStackBar": "--color-text-notification-stack-bar-7sqymq",
    "colorTextPaginationPageNumberActiveDisabled": "--color-text-pagination-page-number-active-disabled-i6v0z4",
    "colorTextPaginationPageNumberDefault": "--color-text-pagination-page-number-default-dtrbyb",
    "colorTextSegmentActive": "--color-text-segment-active-lhvxxu",
    "colorTextSegmentDefault": "--color-text-segment-default-vxoghx",
    "colorTextSegmentHover": "--color-text-segment-hover-fx0efi",
    "colorTextSmall": "--color-text-small-wl1hyo",
    "colorTextStatusError": "--color-text-status-error-6ntion",
    "colorTextStatusInactive": "--color-text-status-inactive-npnnh8",
    "colorTextStatusInfo": "--color-text-status-info-ljzs7r",
    "colorTextStatusSuccess": "--color-text-status-success-enko1i",
    "colorTextStatusWarning": "--color-text-status-warning-1ch2bz",
    "colorTextTopNavigationTitle": "--color-text-top-navigation-title-rfejca",
    "colorBoardPlaceholderActive": "--color-board-placeholder-active-vhih01",
    "colorBoardPlaceholderHover": "--color-board-placeholder-hover-xqo09x",
    "colorDragPlaceholderActive": "--color-drag-placeholder-active-gpgj4c",
    "colorDragPlaceholderHover": "--color-drag-placeholder-hover-ph4yxf",
    "colorDropzoneBackgroundActive": "--color-dropzone-background-active-x5rqse",
    "colorDropzoneBackgroundHover": "--color-dropzone-background-hover-6edrvi",
    "colorDropzoneTextActive": "--color-dropzone-text-active-5iu70l",
    "colorDropzoneTextHover": "--color-dropzone-text-hover-4q4iwk",
    "fontBodyMLineHeight": "--font-body-m-line-height-9vkzhc",
    "fontBodyMSize": "--font-body-m-size-0qqejn",
    "fontBodySLetterSpacing": "--font-body-s-letter-spacing-bzrysr",
    "fontBodySLineHeight": "--font-body-s-line-height-jfgg5d",
    "fontBodySSize": "--font-body-s-size-v1w8ey",
    "fontButtonLetterSpacing": "--font-button-letter-spacing-668fbm",
    "fontButtonWeight": "--font-button-weight-lifqd4",
    "fontChartDetailSize": "--font-chart-detail-size-32v9jd",
    "fontDisplayLLetterSpacing": "--font-display-l-letter-spacing-4z7f9n",
    "fontDisplayLLineHeight": "--font-display-l-line-height-qysxq1",
    "fontDisplayLSize": "--font-display-l-size-2vcm2f",
    "fontDisplayLabelWeight": "--font-display-label-weight-udcxbe",
    "fontExpandableHeadingSize": "--font-expandable-heading-size-x20mdp",
    "fontFamilyBase": "--font-family-base-nzcxu9",
    "fontFamilyMonospace": "--font-family-monospace-t2i6ax",
    "fontHeaderH2DescriptionLineHeight": "--font-header-h2-description-line-height-a838oe",
    "fontHeaderH2DescriptionSize": "--font-header-h2-description-size-9x583i",
    "fontHeadingLLetterSpacing": "--font-heading-l-letter-spacing-898wn9",
    "fontHeadingLLineHeight": "--font-heading-l-line-height-b1ar04",
    "fontHeadingLSize": "--font-heading-l-size-s5huxt",
    "fontHeadingLWeight": "--font-heading-l-weight-hqql3g",
    "fontHeadingMLetterSpacing": "--font-heading-m-letter-spacing-t3csz2",
    "fontHeadingMLineHeight": "--font-heading-m-line-height-ahaded",
    "fontHeadingMSize": "--font-heading-m-size-bwdbnx",
    "fontHeadingMWeight": "--font-heading-m-weight-fukq3n",
    "fontHeadingSLetterSpacing": "--font-heading-s-letter-spacing-jp7jyt",
    "fontHeadingSLineHeight": "--font-heading-s-line-height-m71f3f",
    "fontHeadingSSize": "--font-heading-s-size-dnu1l1",
    "fontHeadingSWeight": "--font-heading-s-weight-rxw9ij",
    "fontHeadingXlLetterSpacing": "--font-heading-xl-letter-spacing-gwr2it",
    "fontHeadingXlLineHeight": "--font-heading-xl-line-height-vkzpnf",
    "fontHeadingXlSize": "--font-heading-xl-size-is7x8e",
    "fontHeadingXlWeight": "--font-heading-xl-weight-q85svm",
    "fontHeadingXsLineHeight": "--font-heading-xs-line-height-61ulqg",
    "fontHeadingXsSize": "--font-heading-xs-size-zxjy53",
    "fontHeadingXsWeight": "--font-heading-xs-weight-5uohdd",
    "fontBoxValueLargeWeight": "--font-box-value-large-weight-nt4rcf",
    "fontLinkButtonLetterSpacing": "--font-link-button-letter-spacing-zntxrt",
    "fontLinkButtonWeight": "--font-link-button-weight-2omqnn",
    "fontLinkPrimaryDecoration": "--font-link-primary-decoration-azbtan",
    "fontLinkPrimaryLetterSpacing": "--font-link-primary-letter-spacing-wsaj96",
    "fontLinkPrimaryWeight": "--font-link-primary-weight-cpyp2f",
    "fontPanelHeaderLineHeight": "--font-panel-header-line-height-nzzvgi",
    "fontPanelHeaderSize": "--font-panel-header-size-7dlfnh",
    "fontSmoothingWebkit": "--font-smoothing-webkit-teqshp",
    "fontSmoothingMozOsx": "--font-smoothing-moz-osx-apq2ca",
    "fontTabsDisabledWeight": "--font-tabs-disabled-weight-dss4vj",
    "fontTabsLineHeight": "--font-tabs-line-height-i5k9yb",
    "fontTabsSize": "--font-tabs-size-v5swzt",
    "fontWayfindingLinkActiveWeight": "--font-wayfinding-link-active-weight-aix7m6",
    "fontWeightHeavy": "--font-weight-heavy-q6t3v9",
    "borderActiveWidth": "--border-active-width-yythya",
    "borderCodeEditorStatusDividerWidth": "--border-code-editor-status-divider-width-mt04p4",
    "borderContainerStickyWidth": "--border-container-sticky-width-iyq76r",
    "borderContainerTopWidth": "--border-container-top-width-um0aeg",
    "borderControlFocusRingShadowSpread": "--border-control-focus-ring-shadow-spread-qycpr2",
    "borderControlInvalidFocusRingShadowSpread": "--border-control-invalid-focus-ring-shadow-spread-56jreh",
    "borderDividerListWidth": "--border-divider-list-width-iu80dg",
    "borderDividerSectionWidth": "--border-divider-section-width-p0xg84",
    "borderDropdownVirtualOffsetWidth": "--border-dropdown-virtual-offset-width-qfyj8v",
    "borderFieldWidth": "--border-field-width-gmdyxy",
    "borderInvalidWidth": "--border-invalid-width-6tnuc9",
    "borderItemWidth": "--border-item-width-x3q2fl",
    "borderLineChartDashArray": "--border-line-chart-dash-array-eqbiso",
    "borderLineChartLineJoin": "--border-line-chart-line-join-w4zve7",
    "borderLineChartWidth": "--border-line-chart-width-m20n2t",
    "borderPanelHeaderWidth": "--border-panel-header-width-8stwum",
    "borderPanelTopWidth": "--border-panel-top-width-yyryvo",
    "borderRadiusAlert": "--border-radius-alert-3sud2k",
    "borderRadiusBadge": "--border-radius-badge-foiz0d",
    "borderRadiusButton": "--border-radius-button-auxdmc",
    "borderRadiusCalendarDayFocusRing": "--border-radius-calendar-day-focus-ring-sdlzls",
    "borderRadiusCodeEditor": "--border-radius-code-editor-kygsx4",
    "borderRadiusContainer": "--border-radius-container-53367b",
    "borderRadiusControlCircularFocusRing": "--border-radius-control-circular-focus-ring-6frgrc",
    "borderRadiusControlDefaultFocusRing": "--border-radius-control-default-focus-ring-uu8qi4",
    "borderRadiusDropdown": "--border-radius-dropdown-svczfv",
    "borderRadiusDropzone": "--border-radius-dropzone-xbmhaw",
    "borderRadiusFlashbar": "--border-radius-flashbar-yhmwt8",
    "borderRadiusItem": "--border-radius-item-gy51bh",
    "borderRadiusInput": "--border-radius-input-gfayl6",
    "borderRadiusPopover": "--border-radius-popover-tkm4sy",
    "borderRadiusTabsFocusRing": "--border-radius-tabs-focus-ring-zh31wf",
    "borderRadiusTiles": "--border-radius-tiles-p1a4ne",
    "borderRadiusToken": "--border-radius-token-tjjs9o",
    "borderRadiusTutorialPanelItem": "--border-radius-tutorial-panel-item-negng0",
    "borderTableStickyWidth": "--border-table-sticky-width-yx825w",
    "borderLinkFocusRingOutline": "--border-link-focus-ring-outline-e033ba",
    "borderLinkFocusRingShadowSpread": "--border-link-focus-ring-shadow-spread-3gfzjd",
    "motionDurationExtraFast": "--motion-duration-extra-fast-k704le",
    "motionDurationExtraSlow": "--motion-duration-extra-slow-edlvev",
    "motionDurationFast": "--motion-duration-fast-hb4hmg",
    "motionDurationModerate": "--motion-duration-moderate-yvjj8o",
    "motionDurationRefreshOnlyAmbient": "--motion-duration-refresh-only-ambient-m2xqxk",
    "motionDurationRefreshOnlyFast": "--motion-duration-refresh-only-fast-osz7cj",
    "motionDurationRefreshOnlyMedium": "--motion-duration-refresh-only-medium-smx8a1",
    "motionDurationRefreshOnlySlow": "--motion-duration-refresh-only-slow-5shm2u",
    "motionDurationRotate180": "--motion-duration-rotate-180-ur235g",
    "motionDurationRotate90": "--motion-duration-rotate-90-l1syz5",
    "motionDurationShowPaced": "--motion-duration-show-paced-et23hs",
    "motionDurationShowQuick": "--motion-duration-show-quick-cfya8h",
    "motionDurationSlow": "--motion-duration-slow-59jsmh",
    "motionDurationTransitionQuick": "--motion-duration-transition-quick-s6zxev",
    "motionDurationTransitionShowPaced": "--motion-duration-transition-show-paced-w46a9p",
    "motionDurationTransitionShowQuick": "--motion-duration-transition-show-quick-jutpn8",
    "motionEasingEaseOutQuart": "--motion-easing-ease-out-quart-szkny3",
    "motionEasingRefreshOnlyA": "--motion-easing-refresh-only-a-9ds92l",
    "motionEasingRefreshOnlyB": "--motion-easing-refresh-only-b-9wxidy",
    "motionEasingRefreshOnlyC": "--motion-easing-refresh-only-c-yvk8k3",
    "motionEasingRefreshOnlyD": "--motion-easing-refresh-only-d-28ln1k",
    "motionEasingRotate180": "--motion-easing-rotate-180-eilno1",
    "motionEasingRotate90": "--motion-easing-rotate-90-8xzw2x",
    "motionEasingShowPaced": "--motion-easing-show-paced-ddbkug",
    "motionEasingShowQuick": "--motion-easing-show-quick-iz5tz5",
    "motionEasingTransitionQuick": "--motion-easing-transition-quick-1rczl6",
    "motionEasingTransitionShowPaced": "--motion-easing-transition-show-paced-efc0r6",
    "motionEasingTransitionShowQuick": "--motion-easing-transition-show-quick-yjztq3",
    "motionEasingResponsive": "--motion-easing-responsive-8ogwf3",
    "motionEasingSticky": "--motion-easing-sticky-ry2pb1",
    "motionEasingExpressive": "--motion-easing-expressive-43th0g",
    "motionDurationResponsive": "--motion-duration-responsive-c760wh",
    "motionDurationExpressive": "--motion-duration-expressive-ktvbkb",
    "motionDurationComplex": "--motion-duration-complex-tgnddh",
    "motionKeyframesFadeIn": "--motion-keyframes-fade-in-dtf45n",
    "motionKeyframesFadeOut": "--motion-keyframes-fade-out-ug9nv7",
    "motionKeyframesStatusIconError": "--motion-keyframes-status-icon-error-i4vr6p",
    "motionKeyframesScalePopup": "--motion-keyframes-scale-popup-zkiuiw",
    "sizeCalendarGridWidth": "--size-calendar-grid-width-92llmb",
    "sizeControl": "--size-control-6eaw6l",
    "sizeIconBig": "--size-icon-big-6vh0f3",
    "sizeIconLarge": "--size-icon-large-duafr6",
    "sizeIconMedium": "--size-icon-medium-9v2l3x",
    "sizeIconNormal": "--size-icon-normal-sz51st",
    "sizeTableSelectionHorizontal": "--size-table-selection-horizontal-yct218",
    "sizeVerticalInput": "--size-vertical-input-yg5yti",
    "sizeVerticalPanelIconOffset": "--size-vertical-panel-icon-offset-1vmzlx",
    "spaceAlertActionLeft": "--space-alert-action-left-jyjob3",
    "spaceAlertHorizontal": "--space-alert-horizontal-tgnc21",
    "spaceAlertMessageRight": "--space-alert-message-right-76dae3",
    "spaceAlertVertical": "--space-alert-vertical-95y4j3",
    "spaceButtonFocusOutlineGutter": "--space-button-focus-outline-gutter-pow250",
    "spaceButtonIconFocusOutlineGutterVertical": "--space-button-icon-focus-outline-gutter-vertical-i0hxof",
    "spaceButtonIconOnlyHorizontal": "--space-button-icon-only-horizontal-bgkkaz",
    "spaceButtonInlineIconFocusOutlineGutter": "--space-button-inline-icon-focus-outline-gutter-v7tn85",
    "spaceButtonModalDismissVertical": "--space-button-modal-dismiss-vertical-hbpr1b",
    "spaceCalendarGridFocusOutlineGutter": "--space-calendar-grid-focus-outline-gutter-z4nann",
    "spaceCalendarGridSelectedFocusOutlineGutter": "--space-calendar-grid-selected-focus-outline-gutter-08ibte",
    "spaceCardHorizontal": "--space-card-horizontal-0pwa5x",
    "spaceCodeEditorStatusFocusOutlineGutter": "--space-code-editor-status-focus-outline-gutter-svnmb3",
    "spaceContainerContentTop": "--space-container-content-top-5kufne",
    "spaceContainerHeaderVertical": "--space-container-header-vertical-ezarcz",
    "spaceContainerHorizontal": "--space-container-horizontal-7bp7wa",
    "spaceContentHeaderPaddingBottom": "--space-content-header-padding-bottom-v55qlt",
    "spaceDarkHeaderOverlapDistance": "--space-dark-header-overlap-distance-g5z45b",
    "spaceExpandableSectionIconOffsetTop": "--space-expandable-section-icon-offset-top-4ysrlk",
    "spaceFieldHorizontal": "--space-field-horizontal-xg7uom",
    "spaceFieldIconOffset": "--space-field-icon-offset-v49om3",
    "spaceFilteringTokenDismissButtonFocusOutlineGutter": "--space-filtering-token-dismiss-button-focus-outline-gutter-kfmnuz",
    "spaceFilteringTokenOperationSelectFocusOutlineGutter": "--space-filtering-token-operation-select-focus-outline-gutter-8aybuc",
    "spaceFlashbarActionLeft": "--space-flashbar-action-left-l51wy6",
    "spaceFlashbarDismissRight": "--space-flashbar-dismiss-right-ym2exn",
    "spaceFlashbarHorizontal": "--space-flashbar-horizontal-w3fjml",
    "spaceGridGutter": "--space-grid-gutter-jlj43y",
    "spaceLayoutContentBottom": "--space-layout-content-bottom-zu47sf",
    "spaceLayoutToggleDiameter": "--space-layout-toggle-diameter-b5vqct",
    "spaceLayoutTogglePadding": "--space-layout-toggle-padding-j06q89",
    "spaceModalContentBottom": "--space-modal-content-bottom-io4sah",
    "spaceModalHorizontal": "--space-modal-horizontal-0as3uz",
    "spacePanelNavLeft": "--space-panel-nav-left-woldqx",
    "spacePanelSideLeft": "--space-panel-side-left-v0z44b",
    "spacePanelSideRight": "--space-panel-side-right-q7rj50",
    "spacePanelSplitTop": "--space-panel-split-top-74zu5m",
    "spaceSegmentedControlFocusOutlineGutter": "--space-segmented-control-focus-outline-gutter-vw40an",
    "spaceTableHeaderFocusOutlineGutter": "--space-table-header-focus-outline-gutter-w7nu2w",
    "spaceTabsContentTop": "--space-tabs-content-top-yu9ton",
    "spaceTableHorizontal": "--space-table-horizontal-lwojp9",
    "spaceTableHeaderHorizontal": "--space-table-header-horizontal-a2koq0",
    "spaceTableContentBottom": "--space-table-content-bottom-1d9z26",
    "spaceTableContentTop": "--space-table-content-top-nzg0b3",
    "spaceTableEmbeddedContentBottom": "--space-table-embedded-content-bottom-mp1fho",
    "spaceTableEmbeddedHeaderTop": "--space-table-embedded-header-top-mxrtd1",
    "spaceTableFooterHorizontal": "--space-table-footer-horizontal-b4tgte",
    "spaceTabsFocusOutlineGutter": "--space-tabs-focus-outline-gutter-el4yxk",
    "spaceScaled2xNone": "--space-scaled-2x-none-bym99m",
    "spaceScaled2xXxxs": "--space-scaled-2x-xxxs-skin9v",
    "spaceScaled2xXxs": "--space-scaled-2x-xxs-v9o3y6",
    "spaceScaled2xXs": "--space-scaled-2x-xs-yheah3",
    "spaceScaled2xS": "--space-scaled-2x-s-jqd5vq",
    "spaceScaled2xM": "--space-scaled-2x-m-nqgj14",
    "spaceScaled2xL": "--space-scaled-2x-l-aseh7x",
    "spaceScaled2xXl": "--space-scaled-2x-xl-6yv6qx",
    "spaceScaled2xXxl": "--space-scaled-2x-xxl-wq2apd",
    "spaceScaled2xXxxl": "--space-scaled-2x-xxxl-k13drt",
    "spaceScaledNone": "--space-scaled-none-zq3l2k",
    "spaceScaledXxxs": "--space-scaled-xxxs-wx4fgm",
    "spaceScaledXxs": "--space-scaled-xxs-gmgwxk",
    "spaceScaledXs": "--space-scaled-xs-sg3tfb",
    "spaceScaledS": "--space-scaled-s-73r995",
    "spaceScaledM": "--space-scaled-m-5caa5e",
    "spaceScaledL": "--space-scaled-l-w7rqqb",
    "spaceScaledXl": "--space-scaled-xl-2yypb9",
    "spaceScaledXxl": "--space-scaled-xxl-socb7n",
    "spaceScaledXxxl": "--space-scaled-xxxl-r9nxwo",
    "spaceStaticXxxs": "--space-static-xxxs-rv01lb",
    "spaceStaticXxs": "--space-static-xxs-l688u7",
    "spaceStaticXs": "--space-static-xs-yo8ivc",
    "spaceStaticS": "--space-static-s-fozeo4",
    "spaceStaticM": "--space-static-m-o28cnp",
    "spaceStaticL": "--space-static-l-evoy2t",
    "spaceStaticXl": "--space-static-xl-ly9qfg",
    "spaceStaticXxl": "--space-static-xxl-wanay9",
    "spaceStaticXxxl": "--space-static-xxxl-7jsur8",
    "spaceNone": "--space-none-5qi5pj",
    "spaceXxxs": "--space-xxxs-du4mq0",
    "spaceXxs": "--space-xxs-xx079q",
    "spaceXs": "--space-xs-7veqkr",
    "spaceS": "--space-s-o95p2n",
    "spaceM": "--space-m-2wfcpy",
    "spaceL": "--space-l-z6h7qi",
    "spaceXl": "--space-xl-uesynn",
    "spaceXxl": "--space-xxl-y3qgr4",
    "spaceXxxl": "--space-xxxl-ecj2b1",
    "shadowContainer": "--shadow-container-zksiv4",
    "shadowContainerStacked": "--shadow-container-stacked-5kph6k",
    "shadowContainerActive": "--shadow-container-active-dbq0ni",
    "shadowDropdown": "--shadow-dropdown-fq8gdb",
    "shadowDropup": "--shadow-dropup-v0gwx2",
    "shadowFlashCollapsed": "--shadow-flash-collapsed-aahjdb",
    "shadowFlashSticky": "--shadow-flash-sticky-ajmlkl",
    "shadowModal": "--shadow-modal-9r20ey",
    "shadowPanel": "--shadow-panel-5eimfm",
    "shadowPanelToggle": "--shadow-panel-toggle-qhgjxj",
    "shadowPopover": "--shadow-popover-h28s6z",
    "shadowSplitBottom": "--shadow-split-bottom-bhy97e",
    "shadowSplitSide": "--shadow-split-side-pjembz",
    "shadowSticky": "--shadow-sticky-80zglr",
    "shadowStickyEmbedded": "--shadow-sticky-embedded-tua7gl",
    "shadowStickyColumnFirst": "--shadow-sticky-column-first-koaqrl",
    "shadowStickyColumnLast": "--shadow-sticky-column-last-hzi1qw"
  }
};
