const videoChannels = [
    {
        name: "History",
        file: "https://av-ch-cdn.mncnow.id/live/eds/History/sa_dash_vmx/History.mpd",
        drm: {
            clearkey: {
                keyId: "2ccaa7d9731c2e69fa5344c5a547b836",
                key: "d23fb6a3c73eb7ab8ad19ca841db0fb5"
            }
        }
    },
    {
        name: "iNews",
        file: "https://av-ch-cdn.mncnow.id/live/eds/iNewsTV-HDD/sa_dash_vmx/iNewsTV-HDD.mpd",
        drm: {
            clearkey: {
                keyId: "a31cf5136789514b7e12b9cc99307c84",
                key: "980e54d671ffc2b2f4cf54e75cae0ac2"
            }
        }
    },
    {
        name: "MNC TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd",
        drm: {
            clearkey: {
                keyId: "828e0aba9825c3546a2831e4c0c36f7f",
                key: "f85d3dcd38981368ab3da597e97ebdcc"
            }
        }
    },
    {
        name: "GTV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd",
        drm: {
            clearkey: {
                keyId: "88f6c7cbd793374cb5f12d7e26dcd63b",
                key: "e82daa7c7bfb03d99327463fdbd37336"
            }
        }
    },
    {
        name: "RCTI",
        file: "https://av-ch-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd",
        drm: {
            clearkey: {
                keyId: "9ba3e153ef8956d6e2b0684fcf74f58f",
                key: "dbc28cb5c6426080f984a5b6d436bb30"
            }
        }
    },
    {
        name: "Music TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MusicChannel/sa_dash_vmx/MusicChannel.mpd",
        drm: {
            clearkey: {
                keyId: "0bea88ab972e06760a04712cc423d841",
                key: "4039d607f88f1b1f677e4beb6ee66637"
            }
        }
    },
    {
        name: "TVMU",
        file: "https://av-ch-cdn.mncnow.id/live/eds/TVMuhammadiyah/sa_dash_vmx/TVMuhammadiyah.mpd",
        drm: {
            clearkey: {
                keyId: "2fa7625e3470d5e9429f64150614f9a5",
                key: "c495ad0e82e2266fd207934327c71ce3"
            }
        }
    },
    {
        name: "Reformed 21",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Reformed21/sa_dash_vmx/Reformed21.mpd",
        drm: {
            clearkey: {
                keyId: "1acfe74d40e91e0368324b074c256bab",
                key: "f3211e3f8079a8584ac77afda2b0e119"
            }
        }
    },
    {
        name: "Kids TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/KidsChannel/sa_dash_vmx/KidsChannel.mpd",
        drm: {
            clearkey: {
                keyId: "17340c4223a4674b1b7da8d8d9e11174",
                key: "11a73aad2c75ddf338840b08fb915993"
            }
        }
    },
    {
        name: "Fight Sports",
        file: "https://av-ch-cdn.mncnow.id/live/eds/FightSports/sa_dash_vmx/FightSports.mpd",
        drm: {
            clearkey: {
                keyId: "d2159ffe3be22ed4916a6abe4d58d265",
                key: "3e4efcec08d5d5c18a403b7048a43638"
            }
        }
    },
    {
        name: "TVRI",
        file: "https://av-ch-cdn.mncnow.id/live/eds/PemersatuBangsa/sa_dash_vmx/PemersatuBangsa.mpd",
        drm: {
            clearkey: {
                keyId: "ca65af90adc5e3ddb180e16426bb67da",
                key: "b6f87a3a128dbd75ead036f596edeae7"
            }
        }
    },
    {
        name: "MNC Sport 1",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd",
        drm: {
            clearkey: {
                keyId: "531c6d50e3e9f9ba66446f624f492289",
                key: "d769d9ae238bdd424f8bcdcdc9a3801f"
            }
        }
    },
    {
        name: "MNC Sport 2",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd",
        drm: {
            clearkey: {
                keyId: "45fec91ce1f19b6b1f31d69dcfaaf6cd",
                key: "843e228ab109e9aa6c4822ee4ad05d7d"
            }
        }
    },
    {
        name: "MNC Sport 3",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Soccer-2/sa_dash_vmx/Soccer-2.mpd",
        drm: {
            clearkey: {
                keyId: "fadd2720deff5925ab86df0819cd7775",
                key: "f67ff08c7ebc779f6a6fcfc83835f65b"
            }
        }
    },
    {
        name: "Soccer Channel",
        file: "https://av-ch-cdn.mncnow.id/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd",
        drm: {
            clearkey: {
                keyId: "4d38060bf41b3c29df0ec950ece6b5da",
                key: "7ee9506b13480491d79b71c062ab5366"
            }
        }
    },
    {
        name: "ANTV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/ANTV/sa_dash_vmx/ANTV.mpd",
        drm: {
            clearkey: {
                keyId: "4310edb8b9ffe79abb40bacafa778ec3",
                key: "aebb7e86d8a336d9a93d3dd8a41153cf"
            }
        }
    },
    {
        name: "Net TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NetTV-HD/sa_dash_vmx/NetTV-HD.mpd",
        drm: {
            clearkey: {
                keyId: "6b7bbcf1d511a56e6b3ceda392e4fa33",
                key: "d1766244d7c1c44efd4c67aafae3ee7b"
            }
        }
    },
    {
        name: "Galaxy Premium",
        file: "https://av-ch-cdn.mncnow.id/live/eds/GalaxyPremium-HD/sa_dash_vmx/GalaxyPremium-HD.mpd",
        drm: {
            clearkey: {
                keyId: "7bc29ff5f405dff971e3a326223fe26c",
                key: "06849a953a38da997b31bacf433cc74a"
            }
        }
    },
    {
        name: "Galaxy",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Galaxy-HD/sa_dash_vmx/Galaxy-HD.mpd",
        drm: {
            clearkey: {
                keyId: "e5c40292f8d01b1d5f0c6b3904d73104",
                key: "bcb2ac12e11c69594ba217bfe8714efe"
            }
        }
    },
    {
        name: "TVN Premium Indonesia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/tvN/sa_dash_vmx/tvN.mpd",
        drm: {
            clearkey: {
                keyId: "742131dbcb507c31502eb60b32be6bb8",
                key: "209f03c525bbbc9fd8652aa7a9cc5cb0"
            }
        }
    },
    {
        name: "KIX",
        file: "https://av-ch-cdn.mncnow.id/live/eds/KIX/sa_dash_vmx/KIX.mpd",
        drm: {
            clearkey: {
                keyId: "fe761e8fac143d40510e70825dad0b20",
                key: "eed9fb0b4e254e9104ef98e8a7035387"
            }
        }
    },
    {
        name: "Cinemax Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CinemaxHD2/sa_dash_vmx/CinemaxHD2.mpd",
        drm: {
            clearkey: {
                keyId: "fba45325e2cd8355972ede4981f43b2a",
                key: "d88a4bdd67f89cd21eb074c81de1b994"
            }
        }
    },
    {
        name: "Celestial Classic Movies",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CelestialClassic/sa_dash_vmx/CelestialClassic.mpd",
        drm: {
            clearkey: {
                keyId: "12da619438b3748da206142216d0943b",
                key: "6958377109d34561ad20645319cec62c"
            }
        }
    },
    {
        name: "Animax Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Animax/sa_dash_vmx/Animax.mpd",
        drm: {
            clearkey: {
                keyId: "6344a8272809245e3fa9d926099528c3",
                key: "93b6c4ff420c6864a6294f6d223d9b2c"
            }
        }
    },
    {
        name: "Nickelodeon South East Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Nickelodeon/sa_dash_vmx/Nickelodeon.mpd",
        drm: {
            clearkey: {
                keyId: "785024598882dc751652cea2bce44b8e",
                key: "56a40e58acd59965e865947dd719108d"
            }
        }
    },
    {
        name: "Nick Jr Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NickJr-HDD/sa_dash_vmx/NickJr-HDD.mpd",
        drm: {
            clearkey: {
                keyId: "f71ca09f57ea09e27ee63d7d1f0d0e31",
                key: "8a07ef45b4a18973ef12f8da482dcec0"
            }
        }
    },
    {
        name: "Miao Mi",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MiaoMi/sa_dash_vmx/MiaoMi.mpd",
        drm: {
            clearkey: {
                keyId: "e179c8d2ae0ddf520b905823d417f028",
                key: "327c62356a811a1c0802cf0c4f5a1d50"
            }
        }
    },
    {
        name: "CBeebies Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Cbeebies/sa_dash_vmx/Cbeebies.mpd",
        drm: {
            clearkey: {
                keyId: "194891b41223a5f1ec2beff1c95e2f53",
                key: "eeb1fb2ec011f9563653495f9ac427b1"
            }
        }
    },
    {
        name: "Cartoon Network Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CartoonNetwork/sa_dash_vmx/CartoonNetwork.mpd",
        drm: {
            clearkey: {
                keyId: "37ef71f668c1c1126595be0f557587f5",
                key: "008df022d78a9ec318a745cf8365b048"
            }
        }
    },
    {
        name: "Boomerang South East Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Boomerang/sa_dash_vmx/Boomerang.mpd",
        drm: {
            clearkey: {
                keyId: "5ff6154f28d6950063f9f5b4db7be009",
                key: "93cac38fd15124acce5b658896df0a25"
            }
        }
    },
    {
        name: "Baby TV Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/BabyTV-NewHD/sa_dash_vmx/BabyTV-NewHD.mpd",
        drm: {
            clearkey: {
                keyId: "2fc62ba18b44dce828a5fb8a213d6e5b",
                key: "02a01282f77edf03e964e713fb447e93"
            }
        }
    },
    {
        name: "NatGeo Wild",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NatGeoWild/sa_dash_vmx/NatGeoWild.mpd",
        drm: {
            clearkey: {
                keyId: "c3066eaa0984588f78d12dcdb75ef88b",
                key: "4e98eb4927941bff51ea526d223fa16d"
            }
        }
    },
    {
        name: "National Geographic Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NatGeoChannel/sa_dash_vmx/NatGeoChannel.mpd",
        drm: {
            clearkey: {
                keyId: "05457a5e16a76fe666a22cc7ae2c6548",
                key: "626e37901bfb985e994d714e9f9de1b5"
            }
        }
    },
    {
        name: "Discovery Channel",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Discovery/sa_dash_vmx/Discovery.mpd",
        drm: {
            clearkey: {
                keyId: "8b27270c10422acdf2b70c296c8ddb29",
                key: "32ca577ab5b577a31cc61eb847642fa8"
            }
        }
    },
    {
        name: "BBC Earth Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/BBCEarth-HD/sa_dash_vmx/BBCEarth-HD.mpd",
        drm: {
            clearkey: {
                keyId: "c154c12b5f8336cc9cbef82fb5cc0ab4",
                key: "5c365427c75eacf217255effcb5fff3e"
            }
        }
    },
    {
        name: "Animal Planet",
        file: "https://av-ch-cdn.mncnow.id/live/eds/AnimalPlanet/sa_dash_vmx/AnimalPlanet.mpd",
        drm: {
            clearkey: {
                keyId: "ccc52e94c493492773612a04fa3a1ae1",
                key: "adf87643eef60a4df18d69044a970d66"
            }
        }
    },
    {
        name: "TLC Southeast Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/TLC/sa_dash_vmx/TLC.mpd",
        drm: {
            clearkey: {
                keyId: "b9c123fbf587e6524b2706bd960c7f67",
                key: "d2aaac6845b33627cdce1272feac5acc"
            }
        }
    },
    {
        name: "Lifetime Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Lifetime/sa_dash_vmx/Lifetime.mpd",
        drm: {
            clearkey: {
                keyId: "8bd8efd4840c37f50f8a053f92e9b015",
                key: "7f8b3b508bb394919dab1b6e91e7bacf"
            }
        }
    },
    {
        name: "HGTV Asia",
        file: "https://liveaneviadev.mncnow.id/live/eds/HGTV/sa_dash_vmx/HGTV.mpd",
        drm: {
            clearkey: {
                keyId: "c704a6e7fb9e79809a542dcb04583835",
                key: "570a676fa8b2d5433789ebe8a07063cc"
            }
        }
    },
    {
        name: "Asian Food Network",
        file: "https://av-ch-cdn.mncnow.id/live/eds/AFN-HD/sa_dash_vmx/AFN-HD.mpd",
        drm: {
            clearkey: {
                keyId: "57d2ac9210cfbca3596cc679a01c8b29",
                key: "d5e35c0f39c76adf24853d7ea18c71e7"
            }
        }
    },
    {
        name: "Arirang World",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Arirang/sa_dash_vmx/Arirang.mpd",
        drm: {
            clearkey: {
                keyId: "9bc202de2b177ff5bb64dacb0ab3fd8d",
                key: "d71b81338f16bf009608665b08a49197"
            }
        }
    },
    {
        name: "ABC Australia Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/AustraliaPlus/sa_dash_vmx/AustraliaPlus.mpd",
        drm: {
            clearkey: {
                keyId: "a2dd864fc95998efd52979e5f732e029",
                key: "4f705ca934ba3ef5513fea618d4f938d"
            }
        }
    },
    {
        name: "TRT World",
        file: "https://av-ch-cdn.mncnow.id/live/eds/TRTWorld/sa_dash_vmx/TRTWorld.mpd",
        drm: {
            clearkey: {
                keyId: "2664cc86dfb0f48e6b3f792dd4e8983c",
                key: "5fc5b980db05c4450482b4bd7cda39fe"
            }
        }
    },
    {
        name: "RT English",
        file: "https://av-ch-cdn.mncnow.id/live/eds/RTEnglish/sa_dash_vmx/RTEnglish.mpd",
        drm: {
            clearkey: {
                keyId: "ec5705bb82f3e66b054de048287fd3a4",
                key: "7819a6f6427b7c7764a514abe8173b02"
            }
        }
    },
    {
        name: "NHK World Premium",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NHKWorldPremium/sa_dash_vmx/NHKWorldPremium.mpd",
        drm: {
            clearkey: {
                keyId: "a56d6a274eb073cdf94754bd0ffe3335",
                key: "10ad173ac7249bc42c8390c090ca09e3"
            }
        }
    },
    {
        name: "NHK World Japan",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NHKWorldTV/sa_dash_vmx/NHKWorldTV.mpd",
        drm: {
            clearkey: {
                keyId: "62ce01c83653c3f20af6bcafc6979fe6",
                key: "f1325e71f440c06f7e93d7551cb4014a"
            }
        }
    },
    {
        name: "France 24 English",
        file: "https://av-ch-cdn.mncnow.id/live/eds/France24/sa_dash_vmx/France24.mpd",
        drm: {
            clearkey: {
                keyId: "2968b8d8884c66ebfc54b53bee1070ee",
                key: "7182638b386cb06e211b6771c1a10861"
            }
        }
    },
    {
        name: "Fox News Channel",
        file: "https://av-ch-cdn.mncnow.id/live/eds/FoxNews/sa_dash_vmx/FoxNews.mpd",
        drm: {
            clearkey: {
                keyId: "a547a31e9c19c36f94d120a83f61f92d",
                key: "7e86ccfba721e3297b73fc9e2b07628d"
            }
        }
    },
    {
        name: "EuroNews English",
        file: "https://av-ch-cdn.mncnow.id/live/eds/EuroNews/sa_dash_vmx/EuroNews.mpd",
        drm: {
            clearkey: {
                keyId: "9acec565e4d5e994523b3b18e0a7521e",
                key: "a16eb03e31229b194ec4b45c3cb80b46"
            }
        }
    },
    {
        name: "DW English",
        file: "https://av-ch-cdn.mncnow.id/live/eds/DW/sa_dash_vmx/DW.mpd",
        drm: {
            clearkey: {
                keyId: "4472db9a36186f11703d04a4adbbf279",
                key: "f00791bacba0575927de6cf15cfcd9d9"
            }
        }
    },
    {
        name: "CNN International Asia Pacific",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CNNInternational/sa_dash_vmx/CNNInternational.mpd",
        drm: {
            clearkey: {
                keyId: "faa79feb03b3ebf0e4566e649cb938f0",
                key: "2d5e77223719fb1af573cbeab56bb16a"
            }
        }
    },
    {
        name: "CNBC Asia-Pacific",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CNBC/sa_dash_vmx/CNBC.mpd",
        drm: {
            clearkey: {
                keyId: "a6de9ad0c51e2673f543b71ac5a54211",
                key: "533886c95819317d48fd079d78c3d757"
            }
        }
    },
    {
        name: "Bloomberg TV Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Bloomberg/sa_dash_vmx/Bloomberg.mpd",
        drm: {
            clearkey: {
                keyId: "272401a5b200375e49a4712cf39f369c",
                key: "39d7bc2faf1f13b8a2bb106b617e604a"
            }
        }
    },
    {
        name: "BBC World News Asia Pacif",
        file: "https://av-ch-cdn.mncnow.id/live/eds/BBCWorldNews/sa_dash_vmx/BBCWorldNews.mpd",
        drm: {
            clearkey: {
                keyId: "82e458dc5613eaaa2608de8d190f1637",
                key: "c25659bd78913e93e3fddace99a964c1"
            }
        }
    },
    {
        name: "Aljazeera English",
        file: "https://av-ch-cdn.mncnow.id/live/eds/AlJazeeraInternational/sa_dash_vmx/AlJazeeraInternational.mpd",
        drm: {
            clearkey: {
                keyId: "59b86c4bc0dc5de64bdfafe5152cc8f1",
                key: "014e41ad9ec2997fe29d3c3bc372491f"
            }
        }
    },
    {
        name: "TV 9 Nusantara",
        file: "https://av-ch-cdn.mncnow.id/live/eds/TV9/sa_dash_vmx/TV9.mpd",
        drm: {
            clearkey: {
                keyId: "ce1a653fafa780cd4a8747c08872e3ab",
                key: "d83bcf72b3f5a3d09674602b06caaa71"
            }
        }
    },
    {
        name: "Tawaf TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/TawafTV/sa_dash_vmx/TawafTV.mpd",
        drm: {
            clearkey: {
                keyId: "52bc18038d025c26ead432fa521f83a",
                key: "beab0589d5f15d4a56278c7df913b263"
            }
        }
    },
    {
        name: "Muslim TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/MNCMuslim/sa_dash_vmx/MNCMuslim.mpd",
        drm: {
            clearkey: {
                keyId: "eefa1c34afba72f8fe902b061632528f",
                key: "334cde07f6ebe092c0ae0521591d73cf"
            }
        }
    },
    {
        name: "Celestial Movies Indonesia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CelestialMovie/sa_dash_vmx/CelestialMovie.mpd",
        drm: {
            clearkey: {
                keyId: "13aecb26aeee22bc86920045f22d134d",
                key: "80aa44d998c7c0cc221c96d26730fe9b"
            }
        }
    },
    {
        name: "Crime + Investigation Asia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CrimeInvestigation/sa_dash_vmx/CrimeInvestigation.mpd",
        drm: {
            clearkey: {
                keyId: "dc6157edc80fa15e6b6f23e695d461e4",
                key: "7c068dd99c87e0ab1efc635bb77adcb4"
            }
        }
    },
    {
        name: "Vision Prime",
        file: "https://av-ch-cdn.mncnow.id/live/eds/VisionPrime/sa_dash_vmx/VisionPrime.mpd",
        drm: {
            clearkey: {
                keyId: "50056951f6d5f5fbaf286cd99c965379",
                key: "4ec78e3b7d66d1db3815a127f792b604"
            }
        }
    },
    {
        name: "ONE",
        file: "https://av-ch-cdn.mncnow.id/live/eds/SetOne/sa_dash_vmx/SetOne.mpd",
        drm: {
            clearkey: {
                keyId: "7b212a67ce3e8b056af85b890e3de811",
                key: "428a68fac3d97a5fae0f695edcee6346"
            }
        }
    },
    {
        name: "Lifestyle & Fashion",
        file: "https://av-ch-cdn.mncnow.id/live/eds/LifeStyleFashion/sa_dash_vmx/LifeStyleFashion.mpd",
        drm: {
            clearkey: {
                keyId: "eeba2c9c08078d2a729328dbcd1e002b",
                key: "19090336609b8f4fee1e7aea837a10d9"
            }
        }
    },
    {
        name: "CNA",
        file: "https://av-ch-cdn.mncnow.id/live/eds/ChannelNewsAsia/sa_dash_vmx/ChannelNewsAsia.mpd",
        drm: {
            clearkey: {
                keyId: "e1ae750e09889a610744516182c8e95a",
                key: "2f7aa7b21102d05a986a4212c4afa06f"
            }
        }
    },
    {
        name: "SEA Today",
        file: "https://av-ch-cdn.mncnow.id/live/eds/SEA-Channel/sa_dash_vmx/SEA-Channel.mpd",
        drm: {
            clearkey: {
                keyId: "dfb76a400a6af053881f7fff14483323",
                key: "aa5af1f3edb3abd10a68b8f7e7c0b1ad"
            }
        }
    },
    {
        name: "IDX Channel",
        file: "https://av-ch-cdn.mncnow.id/live/eds/IDX/sa_dash_vmx/IDX.mpd",
        drm: {
            clearkey: {
                keyId: "fbdbe252e6354b175852d1929c42d848",
                key: "7a8bb14fcf8fd0b896ab41c29a78aae0"
            }
        }
    },
    {
        name: "Bandung TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/BandungTV/sa_dash_vmx/BandungTV.mpd",
        drm: {
            clearkey: {
                keyId: "a7fd43751f24d64a16f6f4d289ebd395",
                key: "2ef65773d541ccaf8ba61a3d141711f0"
            }
        }
    },
    {
        name: "Da Ai TV Indonesia",
        file: "https://av-ch-cdn.mncnow.id/live/eds/DAAITV/sa_dash_vmx/DAAITV.mpd",
        drm: {
            clearkey: {
                keyId: "eb7c09e964e89e668266ea31f2710ffa",
                key: "0a9832e32206fff46674b8210c9b6897"
            }
        }
    },
    {
        name: "JTV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/JTV/sa_dash_vmx/JTV.mpd",
        drm: {
            clearkey: {
                keyId: "10e203f655014b5d18b0c85a6c72c809",
                key: "acdcd0b65014e4929c6296171bdfebad"
            }
        }
    },
    {
        name: "CGTN",
        file: "https://av-ch-cdn.mncnow.id/live/eds/CGTN/sa_dash_vmx/CGTN.mpd",
        drm: {
            clearkey: {
                keyId: "725ccd861fa88300c0e1d258b20bc9b1",
                key: "ab190baece633191b7201cb96d065bbb"
            }
        }
    },
    {
        name: "TVN Movies",
        file: "https://av-ch-cdn.mncnow.id/live/eds/tvNMovies/sa_dash_vmx/tvNMovies.mpd",
        drm: {
            clearkey: {
                keyId: "45c004003b09719751adb885d28d491f",
                key: "fe82bc3ffe00477c833812fae74caed7"
            }
        }
    },
    {
        name: "Anhui TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/AnhuiTV/sa_dash_vmx/AnhuiTV.mpd",
        drm: {
            clearkey: {
                keyId: "6935d1a7c21abca8907b1a7b63f2d2c9",
                key: "1842c9b39c3558bb4c7dbb6e400561aa"
            }
        }
    },
    {
        name: "Cinema World",
        file: "https://anevia114.mncnow.id//live/eds/CinemaWorld/sa_dash_vmx/CinemaWorld.mpd",
        drm: {
            clearkey: {
                keyId: "958df746f24f371dffc95e7cd714fbd7",
                key: "fbd6e4540b9a917a27da8be01542f53f"
            }
        }
    },
    {
        name: "EWTN",
        file: "https://anevia114.mncnow.id//live/eds/EWTN/sa_dash_vmx/EWTN.mpd",
        drm: {
            clearkey: {
                keyId: "cb2393dc078c4b708cce148304db1ea7",
                key: "78437d7ccfe7a3a220c53180eb5bdeb1"
            }
        }
    },
    {
        name: "Jiangsu TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/JiangsuTV/sa_dash_vmx/JiangsuTV.mpd",
        drm: {
            clearkey: {
                keyId: "ab3b56e3b5bd35ee40d1f18a8e2a73f0",
                key: "1ae67b4eeeb450fd430e3540694abc6a"
            }
        }
    },
    {
        name: "Hunan TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HunanTV/sa_dash_vmx/HunanTV.mpd",
        drm: {
            clearkey: {
                keyId: "0e9df1ff194224dd922a4ee50a083ea8",
                key: "1f822977efb4700dfef3aef29ce53d98"
            }
        }
    },
    {
        name: "Thrill",
        file: "https://av-ch-cdn.mncnow.id/live/eds/Thrill/sa_dash_vmx/Thrill.mpd",
        drm: {
            clearkey: {
                keyId: "06e7e95fdb30086d24111f300c9d91f1",
                key: "9431050f760f692bfd396bbd84cb5161"
            }
        }
    },
    {
        name: "ZeeBioskop",
        file: "https://av-ch-cdn.mncnow.id/live/eds/ZeeBIOSKOP/sa_dash_vmx/ZeeBIOSKOP.mpd",
        drm: {
            clearkey: {
                keyId: "9e7df70530006bef067327cefde82c0e",
                key: "b92b6a2aba522bd9bb2d07cf241e7398"
            }
        }
    },
    {
        name: "AXN",
        file: "https://anevia114.mncnow.id//live/eds/AXN/sa_dash_vmx/AXN.mpd",
        drm: {
            clearkey: {
                keyId: "c5d5297a84f8b2de977f07286345c591",
                key: "bdb773d6d25303b75a396b8040cfaf8c"
            }
        }
    },
    {
        name: "FMN",
        file: "https://av-ch-cdn.mncnow.id/live/eds/FMN/sa_dash_vmx/FMN.mpd",
        drm: {
            clearkey: {
                keyId: "009a1278e0755ed82e70df01460e90c3",
                key: "12d010a918431785676c4fd63ef648bd"
            }
        }
    },
    {
        name: "BBC Earth",
        file: "https://av-ch-cdn.mncnow.id/live/eds/BBCEarth-HD/sa_dash_vmx/BBCEarth-HD.mpd",
        drm: {
            clearkey: {
                keyId: "c154c12b5f8336cc9cbef82fb5cc0ab4",
                key: "5c365427c75eacf217255effcb5fff3e"
            }
        }
    },
    {
        name: "Nat Geo Channel",
        file: "https://av-ch-cdn.mncnow.id/live/eds/NatGeoChannel/sa_dash_vmx/NatGeoChannel.mpd",
        drm: {
            clearkey: {
                keyId: "05457a5e16a76fe666a22cc7ae2c6548",
                key: "626e37901bfb985e994d714e9f9de1b5"
            }
        }
    },
    {
        name: "OK TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/OKTV/sa_dash_vmx/OKTV.mpd",
        drm: {
            clearkey: {
                keyId: "57d2ac9210cfbca3596cc679a01c8b29",
                key: "d5e35c0f39c76adf24853d7ea18c71e7"
            }
        }
    },
    {
        name: "Warner TV",
        file: "https://av-ch-cdn.mncnow.id/live/eds/WarnerTV/sa_dash_vmx/WarnerTV.mpd",
        drm: {
            clearkey: {
                keyId: "355764373f8a926534fbc42666ab7b13",
                key: "382106ed34f0330b073b1fa940c1516e"
            }
        }
    },
    {
        name: "Hits Movies",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HitsMovies/sa_dash_vmx/HitsMovies.mpd",
        drm: {
            clearkey: {
                keyId: "5d9684b1737e3b68801b4cff7225d4bb",
                key: "902e7634820c26a8ff36f3708f0191d4"
            }
        }
    },
    {
        name: "HIts",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HITS/sa_dash_vmx/HITS.mpd",
        drm: {
            clearkey: {
                keyId: "78d17d4851a5e9eede96f283b15ec053",
                key: "c5ae33f70cc967fe107b35eb7225f52a"
            }
        }
    },
    {
        name: "HBO Family",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HBOFamily2/sa_dash_vmx/HBOFamily2.mpd",
        drm: {
            clearkey: {
                keyId: "be6190a3cfbbed4ec34e4d9c7a30e1e",
                key: "d161b1f737e2aee9501149406c8abe9e"
            }
        }
    },
    {
        name: "HBO Signature",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HBOSignature2/sa_dash_vmx/HBOSignature2.mpd",
        drm: {
            clearkey: {
                keyId: "b64eee6360b118d0d90329cc2c9e4c60",
                key: "4e97aa6422b26ffb372647dbd0a7683c"
            }
        }
    },
    {
        name: "HBO Hits",
        file: "https://av-ch-cdn.mncnow.id/live/eds/HBOHits/sa_dash_vmx/HBOHits.mpd",
        drm: {
            clearkey: {
                keyId: "6c256f70830647e4bdf654d86e710ed5",
                key: "fe41e9bcbae52f9d233407f7488bca5f"
            }
        }
    },
    {
        name: "HBO",
        file: "https://av-ch-cdn.mncnow.id/live/eds/hbo-2/sa_dash_vmx/hbo-2.mpd",
        drm: {
            clearkey: {
                keyId: "eeea0c2986e91a13eacd590ad1ebfe43",
                key: "0acc16bd84921489f67bad19e4099cae"
            }
        }
    }
];