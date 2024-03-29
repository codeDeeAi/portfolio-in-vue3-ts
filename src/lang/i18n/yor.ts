const yorTrans = {
    menu: {
        items: {
            home: "ile",
            projects: "ise agbese",
            tools: "irinṣẹ",
            "about me": "nipa mi",
            "contact me": "kan si mi",
        },
    },
    hero_section: {
        desc: "Ṣiṣe awọn solusan oni-nọmba pẹlu koodu. Emi jẹ < Olùgbéejáde Fullstack /> ti iwulo rẹ wa ni kikọ daradara, iyara ati oju opo wẹẹbu ode oni ti iwọn awọn ohun elo",
        resume: "resumé"
    },
    about_me: {
        desc: `Oruko mi ni Adeola Bada. Mo ni abẹlẹ ni Imọ-ẹrọ Ilu. Ifẹ mi si awọn kọnputa ti mu mi lepa iṣẹ ni idagbasoke sọfitiwia.
        Mo jẹ akẹẹkọ ti o yara pẹlu iwulo to jinlẹ si awọn iṣoro, Mo ni itara nla fun kikọ igbalode, iyara, rọrun, daradara, ati awọn ojutu oju opo wẹẹbu iwọn.
        Ni akoko apoju mi, Mo nifẹ ṣiṣe awọn ere fidio, lilo akoko pẹlu ẹbi mi tabi rin aja mi.`
    },
    contact_section: {
        name: 'oruko',
        email: 'imeeli',
        message: 'ifiranṣẹ',
        send_message: 'firanṣẹ ifiranṣẹ',
    },
    projects_section: {
        controls: {
            next: "t'okan",
            previous: "Ti tẹlẹ",
            read_more: "Ka siwaju",
            description: "apejuwe",
            tags: "awọn afi",
            links: "awọn ọna asopọ",
            request_demo: "Ikọkọ, ìbéèrè demo",
            cancel: "Fagilee"
        },
        scroll_desc: "Yi lọ/Rẹ petele lati wo diẹ sii",
        projects: {
            1: `Thrift.io jẹ ohun elo ti o ṣe iranlọwọ pẹlu ikojọpọ ati iṣeto awọn ohun-ini (ti o gbajumọ si AJO) laarin ẹbi ati awọn ọrẹ. Thrift.io gba laaye
            o lati ṣẹda awọn ẹgbẹ onijagidijagan lọpọlọpọ, iṣakoso awọn members, ṣe iṣiro awọn ọjọ ti o yẹ thrifte ati bẹbẹ lọ lakoko ti o fun ọ ni awotẹlẹ inyuitive ti awọn inawo rẹ`,
            2: `Finance Tracker/Logger ṣe iranlọwọ fun awọn olumulo lati tọpa owo-wiwọle ojoojumọ, awọn inawo ati fifipamọ fun oriṣiriṣi awọn akọọlẹ ati tun ṣe awọn abajade jade nipasẹ 
                awọn atokọ ati awọn shatti`,
            3: `Ibi ọja ohun-ini gidi (PWA) ti o ni ifọkansi lati sisopọ awọn oniwun ile ti a rii daju ati awọn onile si awọn olura ti ifojusọna. O ẹya ara ẹrọ
            Ijeri olumulo ti o ni aabo, awọn igbejade aworan, awọn isọdi aaye bii awọn nkọwe olumulo ti a ti ṣaju ati ipo dudu,
            awọn atokọ ile, wiwa ile aṣa, awọn ijẹrisi gidi, awọn ṣiṣe alabapin, awọn iṣeduro atokọ, awọn ibaraẹnisọrọ akoko gidi, awọn iwifunni olumulo, awọn imeeli, profaili aṣa fun awọn ile-iṣẹ ohun-ini gidi ati bẹbẹ lọ
            `,
            4: `Kaadi GTA V jẹ iṣẹ akanṣe igbadun ti n ṣafihan kaadi gta v ti o rọrun pẹlu iyipada awọn aworan abẹlẹ ati ohun`,
            5: `Portal Alakoso fun iṣakoso awọn iṣẹ ṣiṣe lori ohun elo hulo, o ṣe ẹya ifitonileti olumulo, awọn ibaraẹnisọrọ akoko gidi, awọn ipa, awọn igbanilaaye,
            awọn isọdi ohun elo bii akori, fifiranṣẹ awọn imeeli ati awọn iwifunni olumulo, iṣakoso awọn atokọ ile ati awọn olumulo ati bẹbẹ lọ`,
            6: `CBT jẹ ohun elo ti n ṣiṣẹ apis fun ṣiṣe Awọn igbelewọn Da Kọmputa fun awọn ọmọ ile-iwe.
            Awọn olukọ/Oludanwo le ṣẹda awọn idanwo ati awọn ọmọ ile-iwe giga ni lilo cbt apis.
            Awọn ẹya ara ẹrọ pẹlu ṣẹda awọn idanwo, iforukọsilẹ awọn ọmọ ile-iwe fun awọn idanwo,
            auto ati Afowoyi igbelewọn fun pato igbeyewo, ese esi lẹhin ti kẹhìn Ipari, ati
            Akeko išẹ shatti.`,
            7: `Oro/Olutọpa kokoro fun gbigbasilẹ awọn idun/aṣiṣe awọn oluyẹwo idaniloju didara. Ṣakoso awọn ẹgbẹ, Fi Awọn iṣẹ-ṣiṣe ranṣẹ & Firanṣẹ si okeere si dì tayo`,

            8: "Òrò ìròlè tó fún ọwọ̀ ojú ìran API tọlẹ́lẹ́ (https://sv443.net/jokeapi/v2/) ti scripiti pẹlu Vue Js àti Tailwind Css",

            9: "Àpápọ̀ wèbì ìbímọ̀lẹ̀ bílógù pẹ̀lú Laravel àti Vue Js, ọpọ̀lọpọ̀ ìràn ìṣeṣe ìgbàgbọ́ àti ìsọdàn tó lè wà, tó jẹ́ àní látòun àdìran. Ẹ jẹ́ kí àní fúnra rè láti jẹ́ kóòrùn yúnifọ̀rmù túnṣe láàárín ogbeni. Nígbà tí àwọn àtúnníranṣẹ̀ àṣayàn àti ìkọ̀wàjú tùnṣe ní akọ́kọ́ èlò ẹni.",

            10: "Òrò àkọ́kọ́ àwọn oṣu Twitter pẹ̀lú HTML, CSS, Bootstrap àti JavaScript tó jẹ́ ànílẹ̀kàn.",

            11: `Précis jẹ́ àwọn àpótí pípè fún PHP tó wà lára ìwò. Àwọn àpótí yii ni àwọn ìsọdàn bí ìsọdàn
                Ìmọjú ìsọdàn tó ṣènú,
                Ìyíþayọò,
                Ìtẹju ìbí,
                Ìwò àti Ìpò,
                Àwọn ìbó,
                Ìgbàgbọ́ àràmọ́kò,
                Àwọn ìpàkò,
                Ìpòjú àràmọ́kò,
                Àwọn ìṣèlè lórúkọ,
                Àwọn ìpòjú.`,

            12: `Àpótí ọwọ́ bánkì jẹ́ ọkàn ìkẹ́yìn pẹ̀lú PHP 8+, ìkẹ́yìn sákèjá sílẹ̀. Àwọn àpótí yii ni àwọn ìsọdàn bí ìsọdàn
                Sílẹ̀ ìwò ìwòrà,
                Tíẹ́ làti ní lórúkọ àwọn ìwòrà,
                Tíẹ́ tàbí túnṣe lórúkọ àwọn ìwòrà.`,

            13: `Yi jẹ́ àpótí àwọn ọjọ́ àpẹ̀rò òdò àti àwọn àìtọkè àṣàní lórúkọ Node js àti Express Js, ó ní àwọn orílẹ̀-èdè gbogbo àwọn orílẹ̀. Àwọn àpótí yii ni àwọn ìsọdàn bí ìsọdàn
                Àwọn API tó ẹ̀yẹ àti tó yíyípò,
                Àwọn API ìṣèlè,
                Rírù jẹ́ ọkàn àti òlè dájú.`,
        }
    }
};

export default yorTrans;