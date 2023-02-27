import { Ref } from 'vue';

// 获取每日番剧
export interface CalendarItem {
    id: number;
    coverUrl: string;
    title: string;
    airDate: string;
    rate: number;
}

interface CalendarAPI {
    id: number;
    images: {
        large: string;
    };
    name: string;
    name_cn: string;
    air_date: string;
    rating: {
        score: number;
    };
}

export async function GetCalendar(calendarItems: Ref<CalendarItem[]>) {
    const res = await fetch('https://api.bgm.tv/calendar');
    const data = await res.json();
    try {
        data[new Date().getDay() != 0 ? new Date().getDay() - 1 : 6].items.forEach(
            (item: CalendarAPI) => {
                calendarItems.value.push({
                    id: item.id,
                    coverUrl: item.images.large,
                    title: item.name_cn ? item.name_cn : item.name,
                    airDate: item.air_date,
                    rate: item.rating.score,
                });
            }
        );
    } catch (e) {
        if (!(e instanceof TypeError)) {
            throw e;
        }
    }
}


// 测试数据
const testItems = [
    {
        date: '2023/02/26 16:50',
        category: '动画',
        title:
            '【馴獸師聯盟】數碼寶貝/數碼暴龍/數碼獸幽靈遊戲[Digimon Ghost Game][65][1080p][繁日字幕]',
        team: '驯兽师联盟',
        team_id: 626,
        size: '496.9MB',
        uploader: 'Hanada',
        url: '/topics/view/632552_Digimon_Ghost_Game_65_1080p.html',
    },
    {
        date: '2023/02/26 16:49',
        category: '动画',
        title:
            '【驯兽师联盟】数码宝贝/数码暴龙/数码兽幽灵游戏[Digimon Ghost Game][65][1080p][简日字幕]',
        team: '驯兽师联盟',
        team_id: 626,
        size: '496.8MB',
        uploader: 'Hanada',
        url: '/topics/view/632551_Digimon_Ghost_Game_65_1080p.html',
    },
    {
        date: '2023/02/26 15:55',
        category: '动画',
        title:
            '[千夏字幕組][不當哥哥了！_Oniichan wa Oshimai!][第06話][1080p_HEVC][簡繁內封][招募新人]',
        team: '千夏字幕组',
        team_id: 283,
        size: '414.8MB',
        uploader: '千夏字幕組',
        url: '/topics/view/632550_Oniichan_wa_Oshimai%21_06_1080p_HEVC.html',
    },
    {
        date: '2023/02/26 15:55',
        category: '动画',
        title:
            '[千夏字幕組][不當哥哥了！_Oniichan wa Oshimai!][第06話][1080p_AVC][繁體][招募新人]',
        team: '千夏字幕组',
        team_id: 283,
        size: '244.8MB',
        uploader: '千夏字幕組',
        url: '/topics/view/632549_Oniichan_wa_Oshimai%21_06_1080p_AVC.html',
    },
    {
        date: '2023/02/26 15:54',
        category: '动画',
        title:
            '[千夏字幕组][别当欧尼酱了！_Oniichan wa Oshimai!][第06话][1080p_AVC][简体][招募新人]',
        team: '千夏字幕组',
        team_id: 283,
        size: '244.7MB',
        uploader: '千夏字幕組',
        url: '/topics/view/632548_Oniichan_wa_Oshimai%21_06_1080p_AVC.html',
    },
    {
        date: '2023/02/26 15:54',
        category: '动画',
        title:
            '[千夏字幕組][不當哥哥了！_Oniichan wa Oshimai!][第05話][1080p_HEVC][簡繁內封][招募新人]',
        team: '千夏字幕组',
        team_id: 283,
        size: '393.1MB',
        uploader: '千夏字幕組',
        url: '/topics/view/632547_Oniichan_wa_Oshimai%21_05_1080p_HEVC.html',
    },
    {
        date: '2023/02/26 15:33',
        category: '动画',
        title:
            '[LoliHouse] 为了养老金去异界存八万金 / Roukin8 - 08 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
        team: 'LoliHouse',
        team_id: 657,
        size: '328.6MB',
        uploader: 'LoliHouse',
        url: '/topics/view/632546_LoliHouse_Roukin8_-_08_WebRip_1080p_HEVC-10bit_AAC.html',
    },
    {
        date: '2023/02/26 15:18',
        category: '动画',
        title: '[c.c動漫][1月新番][為了養老金去異界存八萬金][08][BIG5][1080P][MP4]',
        team: 'c.c动漫',
        team_id: 604,
        size: '231MB',
        uploader: 'lleeopen',
        url: '/topics/view/632545_c_c_1_08_BIG5_1080P_MP4.html',
    },
    {
        date: '2023/02/26 15:18',
        category: '动画',
        title: '[c.c動漫][1月新番][最強陰陽師的異世界轉生記][08][BIG5][1080P][MP4]',
        team: 'c.c动漫',
        team_id: 604,
        size: '200.2MB',
        uploader: 'lleeopen',
        url: '/topics/view/632544_c_c_1_08_BIG5_1080P_MP4.html',
    },
    {
        date: '2023/02/26 15:18',
        category: '动画',
        title:
            '[c.c動漫][1月新番][被解雇的暗黑士兵（30 歲）慢生活的第二人生][08][BIG5][1080P][MP4]',
        team: 'c.c动漫',
        team_id: 604,
        size: '254.5MB',
        uploader: 'lleeopen',
        url: '/topics/view/632543_c_c_1_30_08_BIG5_1080P_MP4.html',
    },
    {
        date: '2023/02/26 15:14',
        category: '动画',
        title:
            '[夜莺家族\u0026YYQ字幕组]New Doraemon 哆啦A梦新番[747][2023.02.25][AVC][1080P][GB_JP]',
        team: '夜莺家族',
        team_id: 808,
        size: '579.3MB',
        uploader: 'xiaoxin123',
        url: '/topics/view/632542_YYQ_New_Doraemon_A_747_2023_02_25_AVC_1080P_GB_JP.html',
    },
    {
        date: '2023/02/26 15:10',
        category: '动画',
        title:
            '[Skymoon-Raws][One Piece 海賊王][1053][ViuTV][WEB-DL][1080p][AVC AAC][CHT][MP4+ASS](正式版本)',
        team: '天月動漫\u0026發佈組',
        team_id: 767,
        size: '441.6MB',
        uploader: 'Laputa',
        url: '/topics/view/632541_Skymoon-Raws_One_Piece_1053_ViuTV_WEB-DL_1080p_AVC_AAC_CHT_MP4_ASS.html',
    },
    {
        date: '2023/02/26 15:09',
        category: '动画',
        title:
            '[Skymoon-Raws][One Piece 海賊王][1053][ViuTV][WEB-RIP][CHT][SRT][1080p][MKV](先行版本)',
        team: '天月動漫\u0026發佈組',
        team_id: 767,
        size: '426.2MB',
        uploader: 'Laputa',
        url: '/topics/view/632540_Skymoon-Raws_One_Piece_1053_ViuTV_WEB-RIP_CHT_SRT_1080p_MKV.html',
    },
    {
        date: '2023/02/26 14:54',
        category: '动画',
        title:
            '[GM-Team][国漫][斗破苍穹 第5季][Fights Break Sphere Ⅴ][2022][33][HEVC][GB][4K]',
        team: 'GMTeam',
        team_id: 755,
        size: '476.8MB',
        uploader: 'GMTeam',
        url: '/topics/view/632539_GM-Team_5_Fights_Break_Sphere_2022_33_HEVC_GB_4K.html',
    },
    {
        date: '2023/02/26 14:54',
        category: '动画',
        title:
            '[GM-Team][国漫][斗破苍穹 第5季][Fights Break Sphere Ⅴ][2022][33][AVC][GB][1080P]',
        team: 'GMTeam',
        team_id: 755,
        size: '337.4MB',
        uploader: 'GMTeam',
        url: '/topics/view/632538_GM-Team_5_Fights_Break_Sphere_2022_33_AVC_GB_1080P.html',
    },
    {
        date: '2023/02/26 14:53',
        category: '动画',
        title: '[天月搬運組] 藍色監獄 / BLUE LOCK - 20 [1080P][簡繁日外掛]',
        team: '天月動漫\u0026發佈組',
        team_id: 767,
        size: '322.5MB',
        uploader: 'Laputa',
        url: '/topics/view/632537_BLUE_LOCK_-_20_1080P.html',
    },
    {
        date: '2023/02/26 14:52',
        category: '动画',
        title: '[天月搬運組] Trigun Stampede - 08 [1080P][簡繁日外掛]',
        team: '天月動漫\u0026發佈組',
        team_id: 767,
        size: '189.9MB',
        uploader: 'Laputa',
        url: '/topics/view/632536_Trigun_Stampede_-_08_1080P.html',
    },
    {
        date: '2023/02/26 14:52',
        category: '动画',
        title:
            '[天月搬運組] 不要欺負我，長瀞同學 2nd Attack / Ijiranaide, Nagatoro-san S02 - 09 [1080P][簡繁日外掛]',
        team: '天月動漫\u0026發佈組',
        team_id: 767,
        size: '185.7MB',
        uploader: 'Laputa',
        url: '/topics/view/632535_2nd_Attack_Ijiranaide_Nagatoro-san_S02_-_09_1080P.html',
    },
    {
        date: '2023/02/26 14:37',
        category: '特摄',
        title:
            '[DBD-Raws][牙狼：魔戒闪骑/牙狼：魔戒战记/牙狼-GARO- 〜MAKAISENKI〜][01-24TV全集+特别篇+特典映像][1080P][BDRip][HEVC-10bit][FLAC][MKV]',
        team: 'DBD制作组',
        team_id: 805,
        size: '41.3GB',
        uploader: '黑暗路基艾尔',
        url: '/topics/view/632534_DBD-Raws_-GARO-_MAKAISENKI_01-24TV_1080P_BDRip_HEVC-10bit_FLAC_MKV.html',
    },
    {
        date: '2023/02/26 14:25',
        category: '动画',
        title:
            '[雪飘工作室][海阔天空！光之美少女/Hirogaru_Sky！Precure/ひろがるスカイ！プリキュア][WEBDL][1080p][04][简繁外挂](检索:Q娃)',
        team: '雪飄工作室(FLsnow)',
        team_id: 37,
        size: '1.4GB',
        uploader: 'MingHyuk',
        url: '/topics/view/632533_Hirogaru_Sky_Precure_WEBDL_1080p_04_Q.html',
    },
    {
        date: '2023/02/26 14:24',
        category: '动画',
        title:
            '[雪飄工作室][海闊天空！光之美少女/Hirogaru_Sky！Precure/ひろがるスカイ！プリキュア][04][720p][繁體內嵌](检索:Q娃)',
        team: '雪飄工作室(FLsnow)',
        team_id: 37,
        size: '232.9MB',
        uploader: 'MingHyuk',
        url: '/topics/view/632532_Hirogaru_Sky_Precure_04_720p_Q.html',
    },
    {
        date: '2023/02/26 14:15',
        category: '其他',
        title: '[萝莉哒胖次不见了][第193期][300P]',
        team: '萝莉社活动室',
        team_id: 550,
        size: '1.8GB',
        uploader: '恋之星第六季',
        url: '/topics/view/632531_193_300P.html',
    },
    {
        date: '2023/02/26 14:10',
        category: '日剧',
        title:
            '【幻月字幕组】【23年日剧】【想踢心仪男的女人】【07】【1080P】【中日双语】',
        team: '幻月字幕组',
        team_id: 749,
        size: '503.2MB',
        uploader: '幻月字幕组',
        url: '/topics/view/632530_23_07_1080P.html',
    },
    {
        date: '2023/02/26 14:05',
        category: '动画',
        title:
            '[LoliHouse] 被解雇的暗黑士兵（30多岁）开始了慢生活的第二人生 / Kaiko sareta Ankoku Heishi - 08 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
        team: 'LoliHouse',
        team_id: 657,
        size: '321.5MB',
        uploader: 'LoliHouse',
        url: '/topics/view/632529_LoliHouse_30_Kaiko_sareta_Ankoku_Heishi_-_08_WebRip_1080p_HEVC-10bit_AAC.html',
    },
    {
        date: '2023/02/26 13:46',
        category: '动画',
        title:
            '[LoliHouse] 最强阴阳师的异世界转生记 / Saikyou Onmyouji no Isekai Tenseiki - 08 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
        team: 'LoliHouse',
        team_id: 657,
        size: '292.8MB',
        uploader: 'LoliHouse',
        url: '/topics/view/632528_LoliHouse_Saikyou_Onmyouji_no_Isekai_Tenseiki_-_08_WebRip_1080p_HEVC-10bit_AAC.html',
    },
    {
        date: '2023/02/26 13:34',
        category: '动画',
        title:
            '【鈴風字幕組】【在地下城尋求邂逅是否搞錯了什麼IV/DanMachi IV】[12-17][1080P][MKV][繁體外掛][招募翻譯]',
        team: '鈴風字幕組',
        team_id: 225,
        size: '2.4GB',
        uploader: 'suzukaze',
        url: '/topics/view/632527_IV_DanMachi_IV_12-17_1080P_MKV.html',
    },
    {
        date: '2023/02/26 13:20',
        category: '动画',
        title:
            '[雪飘工作室][海阔天空！光之美少女/Hirogaru_Sky！Precure/ひろがるスカイ！プリキュア][04][720p][简体内嵌](检索:Q娃)',
        team: '雪飄工作室(FLsnow)',
        team_id: 37,
        size: '232.9MB',
        uploader: 'MingHyuk',
        url: '/topics/view/632526_Hirogaru_Sky_Precure_04_720p_Q.html',
    },
    {
        date: '2023/02/26 13:01',
        category: 'ＲＡＷ',
        title: '[AI-Raws] 風都探偵 / Fuuto PI / 風都偵探 BDRip 1080p MKV',
        team: 'AI-Raws',
        team_id: 613,
        size: '19.9GB',
        uploader: 'AIRaws',
        url: '/topics/view/632525_AI-Raws_Fuuto_PI_BDRip_1080p_MKV.html',
    },
    {
        date: '2023/02/26 13:00',
        category: '动画',
        title:
            '[神楽坂 まひろ] 海贼王 / One Piece - 1053 (B-Global 3840x2160 HEVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '726.9MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632524_One_Piece_-_1053_B-Global_3840x2160_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 13:00',
        category: 'ＲＡＷ',
        title:
            '[AI-Raws] 宝石商リチャード氏の謎鑑定 / The Case Files of Jeweler Richard / 寶石商人理察的謎鑑定 BDRip 1080p MKV',
        team: 'AI-Raws',
        team_id: 613,
        size: '18.2GB',
        uploader: 'AIRaws',
        url: '/topics/view/632523_AI-Raws_The_Case_Files_of_Jeweler_Richard_BDRip_1080p_MKV.html',
    },
    {
        date: '2023/02/26 12:00',
        category: '动画',
        title:
            '[XK SPIRITS][Kamen Rider Geats][24][简日双语][1080P][WEBrip][MP4]（急招校对、时轴）',
        team: '星空字幕组',
        team_id: 731,
        size: '672.5MB',
        uploader: 'XKSub',
        url: '/topics/view/632522_XK_SPIRITS_Kamen_Rider_Geats_24_1080P_WEBrip_MP4.html',
    },
    {
        date: '2023/02/26 11:32',
        category: '动画',
        title:
            '[漫猫字幕社\u0026猫恋汉化组][1月新番][尼尔：机械纪元 Ver1.1a][NieR Automata Ver1.1a][03][1080P][MP4][GB][简中]',
        team: '爱恋字幕社',
        team_id: 47,
        size: '436.4MB',
        uploader: 'KissSub',
        url: '/topics/view/632521_1_Ver1_1a_NieR_Automata_Ver1_1a_03_1080P_MP4_GB.html',
    },
    {
        date: '2023/02/26 11:31',
        category: '动画',
        title:
            '[漫貓字幕社\u0026貓戀漢化組][1月新番][尼爾：自動人形 Ver1.1a][NieR Automata Ver1.1a][03][1080P][MP4][BIG5][繁中]',
        team: '爱恋字幕社',
        team_id: 47,
        size: '436.3MB',
        uploader: 'KissSub',
        url: '/topics/view/632520_1_Ver1_1a_NieR_Automata_Ver1_1a_03_1080P_MP4_BIG5.html',
    },
    {
        date: '2023/02/26 11:31',
        category: '动画',
        title:
            '[漫貓字幕社\u0026貓戀漢化組][1月新番][尼爾：自動人形 Ver1.1a][NieR Automata Ver1.1a][03][1080P][MP4][BIG5][繁中]',
        team: '爱恋字幕社',
        team_id: 47,
        size: '436.3MB',
        uploader: 'KissSub',
        url: '/topics/view/632519_1_Ver1_1a_NieR_Automata_Ver1_1a_03_1080P_MP4_BIG5.html',
    },
    {
        date: '2023/02/26 11:31',
        category: '动画',
        title:
            '[漫猫字幕社\u0026猫恋汉化组][1月新番][尼尔：机械纪元 Ver1.1a][NieR Automata Ver1.1a][03][1080P][MP4][GB][简中]',
        team: '爱恋字幕社',
        team_id: 47,
        size: '436.4MB',
        uploader: 'KissSub',
        url: '/topics/view/632518_1_Ver1_1a_NieR_Automata_Ver1_1a_03_1080P_MP4_GB.html',
    },
    {
        date: '2023/02/26 11:13',
        category: '动画',
        title:
            '[神楽坂 まひろ] 为了养老金去异世界存八万金 / Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu - 08 (B-Global 1920x1080 HEVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '192.3MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632517_Rougo_ni_Sonaete_Isekai_de_8-manmai_no_Kinka_wo_Tamemasu_-_08_B-Global_1920x1080_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 11:12',
        category: '动画',
        title:
            '[神楽坂 まひろ] 最强阴阳师的异世界转生记 / Saikyou Onmyouji no Isekai Tenseiki - 08 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632516_Saikyou_Onmyouji_no_Isekai_Tenseiki_-_08_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 11:12',
        category: '动画',
        title:
            '[神楽坂 まひろ] 不要欺负我，长瀞同学 二次攻击 / Ijiranaide, Nagatoro-san 2nd Attack - 09 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632515_Ijiranaide_Nagatoro-san_2nd_Attack_-_09_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 11:11',
        category: '动画',
        title:
            '[神楽坂 まひろ] 藍色監獄 / Blue Lock - 20 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632514_Blue_Lock_-_20_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 11:10',
        category: '动画',
        title:
            '[神楽坂 まひろ] 为了养老金去异世界存八万金 / Rougo ni Sonaete Isekai de 8-manmai no Kinka wo Tamemasu - 08 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.3GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632513_Rougo_ni_Sonaete_Isekai_de_8-manmai_no_Kinka_wo_Tamemasu_-_08_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 11:00',
        category: '动画',
        title:
            "[神楽坂 まひろ] 我家大师兄有点靠谱 / What's Wrong with My Big Brother - 09 (B-Global Donghua 1920x1080 HEVC AAC MKV)",
        team: '',
        team_id: -1,
        size: '268.6MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632512_What_s_Wrong_with_My_Big_Brother_-_09_B-Global_Donghua_1920x1080_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 10:52',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[不當哥哥了！ / Oniichan wa Oshimai! / Onimai][08][1080p][繁日雙語][招募翻譯]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '503.6MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632511_01_Oniichan_wa_Oshimai%21_Onimai_08_1080p.html',
    },
    {
        date: '2023/02/26 10:52',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[不当哥哥了！ / Oniichan wa Oshimai! / Onimai][08][1080p][简日双语][招募翻译]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '503.7MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632510_01_Oniichan_wa_Oshimai%21_Onimai_08_1080p.html',
    },
    {
        date: '2023/02/26 10:52',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[不當哥哥了！ / Oniichan wa Oshimai! / Onimai][08][720p][繁日雙語][招募翻譯]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '196.6MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632509_01_Oniichan_wa_Oshimai%21_Onimai_08_720p.html',
    },
    {
        date: '2023/02/26 10:50',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[不当哥哥了！ / Oniichan wa Oshimai! / Onimai][08][720p][简日双语][招募翻译]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '196.5MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632508_01_Oniichan_wa_Oshimai%21_Onimai_08_720p.html',
    },
    {
        date: '2023/02/26 10:31',
        category: '动画',
        title:
            '[神楽坂 まひろ] 数码宝贝：幽灵游戏 / Digimon Ghost Game - 65 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.3GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632507_Digimon_Ghost_Game_-_65_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 10:01',
        category: '动画',
        title:
            '[神楽坂 まひろ] 海贼王 / One Piece - 1053 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632506_One_Piece_-_1053_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 09:31',
        category: '动画',
        title:
            '[神楽坂 まひろ] 开阔天空！光之美少女 / Hirogaru Sky! Precure - 04 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632505_Hirogaru_Sky%21_Precure_-_04_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 09:30',
        category: '特摄',
        title:
            '【合集】[MagicStar] 暴太郎战队咚兄弟 / 暴太郎戦隊ドンブラザーズ [WEBDL] [1080p] [TTFC]【生】',
        team: '魔星字幕团',
        team_id: 648,
        size: '35.3GB',
        uploader: 'jackieliiy',
        url: '/topics/view/632504_MagicStar_WEBDL_1080p_TTFC.html',
    },
    {
        date: '2023/02/26 09:05',
        category: '特摄',
        title:
            '【终】[MagicStar] 暴太郎战队咚兄弟 最终话 / 暴太郎戦隊ドンブラザーズ EP50 END [WEBDL] [1080p] [TTFC]【生】',
        team: '魔星字幕团',
        team_id: 648,
        size: '533.2MB',
        uploader: 'jackieliiy',
        url: '/topics/view/632503_MagicStar_EP50_END_WEBDL_1080p_TTFC.html',
    },
    {
        date: '2023/02/26 08:39',
        category: '特摄',
        title:
            '[MagicStar] 假面骑士Geats / 仮面ライダーギーツ EP24 [WEBDL] [1080p] [TTFC]【生】',
        team: '魔星字幕团',
        team_id: 648,
        size: '538.7MB',
        uploader: 'jackieliiy',
        url: '/topics/view/632502_MagicStar_Geats_EP24_WEBDL_1080p_TTFC.html',
    },
    {
        date: '2023/02/26 07:30',
        category: '日剧',
        title:
            '【幻月字幕组】【23年日剧】【我能用尽全力爱你吗】【04】【1080P】【中日双语】',
        team: '幻月字幕组',
        team_id: 749,
        size: '507.3MB',
        uploader: '幻月字幕组',
        url: '/topics/view/632501_23_04_1080P.html',
    },
    {
        date: '2023/02/26 06:32',
        category: '日剧',
        title:
            '【日影】[MagicStar] 神寻求回报 / 神は見返りを求める 2022 [WEBDL] [1080p] [AMZN]【生】',
        team: '魔星字幕团',
        team_id: 648,
        size: '7.3GB',
        uploader: 'jackieliiy',
        url: '/topics/view/632500_MagicStar_2022_WEBDL_1080p_AMZN.html',
    },
    {
        date: '2023/02/26 03:31',
        category: '动画',
        title:
            '[神楽坂 まひろ] 飙速宅男 第五季 / Yowamushi Pedal: Limit Break - 20 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632499_Yowamushi_Pedal_Limit_Break_-_20_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 02:36',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[轉生公主與天才千金的魔法革命/Tensei Oujo to Tensai Reijou no Mahou Kakumei][08][1080p][繁日雙語][招募翻譯校對]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '293.1MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632498_01_Tensei_Oujo_to_Tensai_Reijou_no_Mahou_Kakumei_08_1080p.html',
    },
    {
        date: '2023/02/26 02:35',
        category: '动画',
        title:
            '【喵萌奶茶屋】★01月新番★[轉生公主與天才千金的魔法革命/Tensei Oujo to Tensai Reijou no Mahou Kakumei][08][720p][繁日雙語][招募翻譯校對]',
        team: '喵萌奶茶屋',
        team_id: 669,
        size: '137.5MB',
        uploader: 'nekomoekissaten',
        url: '/topics/view/632497_01_Tensei_Oujo_to_Tensai_Reijou_no_Mahou_Kakumei_08_720p.html',
    },
    {
        date: '2023/02/26 02:03',
        category: '动画',
        title:
            '[ANi]  為了養老金去異界存八萬金（僅限港澳台地區） - 08 [1080P][Bilibili][WEB-DL][AAC AVC][CHT CHS][MP4]',
        team: 'ANi',
        team_id: 816,
        size: '347.2MB',
        uploader: 'ANiTorrent',
        url: '/topics/view/632496_ANi_-_08_1080P_Bilibili_WEB-DL_AAC_AVC_CHT_CHS_MP4.html',
    },
    {
        date: '2023/02/26 01:33',
        category: '动画',
        title:
            '[银色子弹字幕组][名侦探柯南][第1075集 河豚火锅对决推理之旅（下关篇）][简繁日多语MKV][1080P]',
        team: '银色子弹字幕组',
        team_id: 576,
        size: '278.3MB',
        uploader: '银色子弹字幕组',
        url: '/topics/view/632495_1075_MKV_1080P.html',
    },
    {
        date: '2023/02/26 01:33',
        category: '动画',
        title:
            '[銀色子彈字幕組][名偵探柯南][第1075集 河豚火鍋對決推理之旅（下關篇）][繁日雙語MP4][1080P]',
        team: '银色子弹字幕组',
        team_id: 576,
        size: '207.9MB',
        uploader: '银色子弹字幕组',
        url: '/topics/view/632494_1075_MP4_1080P.html',
    },
    {
        date: '2023/02/26 01:33',
        category: '动画',
        title:
            '[银色子弹字幕组][名侦探柯南][第1075集 河豚火锅对决推理之旅（下关篇）][简日双语MP4][1080P]',
        team: '银色子弹字幕组',
        team_id: 576,
        size: '207.7MB',
        uploader: '银色子弹字幕组',
        url: '/topics/view/632493_1075_MP4_1080P.html',
    },
    {
        date: '2023/02/26 01:31',
        category: '动画',
        title:
            '[神楽坂 まひろ] 尼爾：自動人形 Ver1.1a / NieR:Automata Ver1.1a - 05 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632492_Ver1_1a_NieR_Automata_Ver1_1a_-_05_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 01:29',
        category: '动画',
        title:
            '[动漫国字幕组\u0026LoliHouse] REVENGER - 06 [WebRip 1080p HEVC-10bit AAC][简繁内封字幕]',
        team: 'LoliHouse',
        team_id: 657,
        size: '422.6MB',
        uploader: 'LoliHouse',
        url: '/topics/view/632491_LoliHouse_REVENGER_-_06_WebRip_1080p_HEVC-10bit_AAC.html',
    },
    {
        date: '2023/02/26 01:16',
        category: '动画',
        title:
            '[Lilith-Raws] 藍色監獄 / Blue Lock - 20 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
        team: 'Lilith-Raws',
        team_id: 803,
        size: '895.8MB',
        uploader: 'lilithraws',
        url: '/topics/view/632490_Lilith-Raws_Blue_Lock_-_20_Baha_WEB-DL_1080p_AVC_AAC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:15',
        category: '动画',
        title:
            '[Lilith-Raws] 不要欺負我，長瀞同學 / Ijiranaide, Nagatoro-san S02 - 09 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
        team: 'Lilith-Raws',
        team_id: 803,
        size: '468.7MB',
        uploader: 'lilithraws',
        url: '/topics/view/632489_Lilith-Raws_Ijiranaide_Nagatoro-san_S02_-_09_Baha_WEB-DL_1080p_AVC_AAC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:15',
        category: '动画',
        title:
            '[Lilith-Raws] 最強陰陽師的異世界轉生記 / Saikyou Onmyouji no Isekai Tenseiki - 08 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
        team: 'Lilith-Raws',
        team_id: 803,
        size: '363.9MB',
        uploader: 'lilithraws',
        url: '/topics/view/632488_Lilith-Raws_Saikyou_Onmyouji_no_Isekai_Tenseiki_-_08_Baha_WEB-DL_1080p_AVC_AAC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:05',
        category: '动画',
        title:
            '[神楽坂 まひろ] 蓝色监狱 / Blue Lock - 20 (B-Global 3840x2160 HEVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.0GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632487_Blue_Lock_-_20_B-Global_3840x2160_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 01:04',
        category: '动画',
        title:
            '[ANi]  最強陰陽師的異世界轉生記 - 08 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]',
        team: 'ANi',
        team_id: 816,
        size: '364.1MB',
        uploader: 'ANiTorrent',
        url: '/topics/view/632486_ANi_-_08_1080P_Baha_WEB-DL_AAC_AVC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:04',
        category: '动画',
        title:
            '[ANi]  不要欺負我，長瀞同學 2nd Attack - 09 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]',
        team: 'ANi',
        team_id: 816,
        size: '468.9MB',
        uploader: 'ANiTorrent',
        url: '/topics/view/632485_ANi_2nd_Attack_-_09_1080P_Baha_WEB-DL_AAC_AVC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:02',
        category: '动画',
        title:
            '[ANi] BLUELOCK -  藍色監獄 - 20 [1080P][Baha][WEB-DL][AAC AVC][CHT][MP4]',
        team: 'ANi',
        team_id: 816,
        size: '896MB',
        uploader: 'ANiTorrent',
        url: '/topics/view/632484_ANi_BLUELOCK_-_-_20_1080P_Baha_WEB-DL_AAC_AVC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 01:02',
        category: '动画',
        title:
            '[神楽坂 まひろ] UniteUp! 眾星齊聚 / UniteUp! - 06 (CR 1920x1080 AVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '1.4GB',
        uploader: '九十九朔夜',
        url: '/topics/view/632483_UniteUp%21_UniteUp%21_-_06_CR_1920x1080_AVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 01:02',
        category: '动画',
        title:
            '[神楽坂 まひろ] 藍色監獄 / Blue Lock - 20 (Baha 1920x1080 AVC AAC MP4)',
        team: '',
        team_id: -1,
        size: '895.9MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632482_Blue_Lock_-_20_Baha_1920x1080_AVC_AAC_MP4.html',
    },
    {
        date: '2023/02/26 01:02',
        category: '动画',
        title:
            '[神楽坂 まひろ] 不要欺負我，長瀞同學 2nd Attack / Ijiranaide, Nagatoro-san 2nd Attack - 09 (Baha 1920x1080 AVC AAC MP4)',
        team: '',
        team_id: -1,
        size: '468.9MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632481_2nd_Attack_Ijiranaide_Nagatoro-san_2nd_Attack_-_09_Baha_1920x1080_AVC_AAC_MP4.html',
    },
    {
        date: '2023/02/26 01:01',
        category: '动画',
        title:
            '[神楽坂 まひろ] 最強陰陽師的異世界轉生記 / Saikyou Onmyouji no Isekai Tenseiki - 08 (Baha 1920x1080 AVC AAC MP4)',
        team: '',
        team_id: -1,
        size: '364.1MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632480_Saikyou_Onmyouji_no_Isekai_Tenseiki_-_08_Baha_1920x1080_AVC_AAC_MP4.html',
    },
    {
        date: '2023/02/26 01:01',
        category: '动画',
        title:
            '[神楽坂 まひろ] 不要欺负我，长瀞同学 二次攻击 / Ijiranaide, Nagatoro-san 2nd Attack - 09 (B-Global 3840x2160 HEVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '590.9MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632479_Ijiranaide_Nagatoro-san_2nd_Attack_-_09_B-Global_3840x2160_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 01:01',
        category: '动画',
        title:
            '[神楽坂 まひろ] 最强阴阳师的异世界转生记 / Saikyou Onmyouji no Isekai Tenseiki - 08 (B-Global 1920x1080 HEVC AAC MKV)',
        team: '',
        team_id: -1,
        size: '194MB',
        uploader: '九十九朔夜',
        url: '/topics/view/632478_Saikyou_Onmyouji_no_Isekai_Tenseiki_-_08_B-Global_1920x1080_HEVC_AAC_MKV.html',
    },
    {
        date: '2023/02/26 00:40',
        category: '动画',
        title:
            '[Lilith-Raws] 尼爾：自動人形 Ver1.1a / NieR：Automata Ver1.1a - 05 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
        team: 'Lilith-Raws',
        team_id: 803,
        size: '839.4MB',
        uploader: 'lilithraws',
        url: '/topics/view/632477_Lilith-Raws_Ver1_1a_NieR_Automata_Ver1_1a_-_05_Baha_WEB-DL_1080p_AVC_AAC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 00:39',
        category: '动画',
        title:
            '[Lilith-Raws] UniteUp! 眾星齊聚 / UniteUp! - 06 [Baha][WEB-DL][1080p][AVC AAC][CHT][MP4]',
        team: 'Lilith-Raws',
        team_id: 803,
        size: '373.7MB',
        uploader: 'lilithraws',
        url: '/topics/view/632476_Lilith-Raws_UniteUp%21_UniteUp%21_-_06_Baha_WEB-DL_1080p_AVC_AAC_CHT_MP4.html',
    },
    {
        date: '2023/02/26 00:34',
        category: '动画',
        title:
            '[桜都字幕组] 入间同学入魔了！第3季 / Mairimashita! Iruma-kun 3rd Season [19][1080p][简繁内封]',
        team: '桜都字幕组',
        team_id: 619,
        size: '324.4MB',
        uploader: 'sakurato',
        url: '/topics/view/632475_3_Mairimashita%21_Iruma-kun_3rd_Season_19_1080p.html',
    },
    {
        date: '2023/02/26 00:33',
        category: '动画',
        title:
            '[桜都字幕组] 入间同学入魔了！第3季 / Mairimashita! Iruma-kun 3rd Season [19][1080p高帧率][简繁内封]',
        team: '桜都字幕组',
        team_id: 619,
        size: '480.2MB',
        uploader: 'sakurato',
        url: '/topics/view/632474_3_Mairimashita%21_Iruma-kun_3rd_Season_19_1080p.html',
    },
    {
        date: '2023/02/26 00:33',
        category: '动画',
        title:
            '[桜都字幕組] 入間同學入魔了！ 第3季 / Mairimashita! Iruma-kun 3rd Season [19][1080p][繁體內嵌]',
        team: '桜都字幕组',
        team_id: 619,
        size: '455.7MB',
        uploader: 'sakurato',
        url: '/topics/view/632473_3_Mairimashita%21_Iruma-kun_3rd_Season_19_1080p.html',
    },
];

export { testItems }