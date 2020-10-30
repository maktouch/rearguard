const faker = require('faker');

const domains = [
  'wroclaw-tenis-stolowy.pl',
  'mbetxapp4.com',
  'lungmater.ga',
  'overkidlde.space',
  'wallpaperpedia.club',
  'promocjawnecie.pl',
  'bloggg.de',
  'hugowhiteleaf.com',
  'ruay976.com',
  'sienna12bourne.ga',
  'buyu745.com',
  'nkmmpg.work',
  'soaronwings.shop',
  'gnorimies.xyz',
  'farmerlife.us',
  'novembermovo.com',
  'congtymaydongphuc.org',
  'theintim.ru',
  'coinecon.com',
  'aseztakwholesale.com',
  'b-clickp-company.site',
  'mc45.club',
  'dezend.shop',
  'zimail.com',
  'lttmail.com',
  'textjobs.ru',
  'punjabihousetakeaway.com',
  'thecasinowatcher.com',
  'freeunlimitedebooks.com',
  'waskitacorp.cf',
  'dkbmpm.fun',
  'jokerbet93.com',
  'bg4llrhznrom.gq',
  '759b76.com',
  'buyu831.com',
  'enwi7gpptiqee5slpxt.gq',
  'kernersvilleapartments.com',
  'plantscan.online',
  'barclays-plc.cf',
  'vphnfuu2sd85w.ga',
  'valleybrains.tech',
  'eruj33y5g1a8isg95.cf',
  'truxbox.ru',
  'pxtv052d46b7e333b664.xyz',
  'melitta-remont.ru',
  'ywamarts.org',
  'ilvplay.com',
  'hqv8grv8dxdkt1b.ga',
  'rhumworld.com',
  'raisnacur.cf',
  'wholesaleshtcphones.info',
  'vlipbttm9p37te.tk',
  'primerka.co.cc',
  'chartier.name',
  '21timebet.com',
  '708997.com',
  'kjg.website',
  'steveharrismedia.com',
  'mentechtma.website',
  '956ac.com',
  'discountbuyreviews.org',
  'iptvmaximum.online',
  'naiditceo.ga',
  '201920065.com',
  'muleaks.com',
  '8vnond.us',
  'triginar.ml',
  'enmail.com',
  'bdbdqxxknb.xyz',
  '411jobsblog.xyz',
  '1rnydobtxcgijcfgl.ga',
  'copyrightdesk.com',
  'allirelandcarrentals.com',
  'icedmilk.com',
  'd7899.com',
  'huetreasure.com',
  'thechampionofwhatif.com',
  'fashionbets13.com',
  'a5freighter.website',
  'sagame.stream',
  'puiw.website',
  'sgilde.com',
  'ceipanto.cf',
  'good-names.info',
  'mntechcare.com',
  'yildirimgurses.xyz',
  'nds8ufik2kfxku.tk',
  '216636.com',
  'luxuryshomemn.com',
  'lei.kr',
  'ofertebune.info',
  'floodbrother.com',
  'barzan.mielno.pl',
  'treebate.org',
  'gistnewgkal.cf',
  'projexpartners.com',
  '188881-g.com',
  'db-vets.com',
  '5.emailfake.ml',
  '847331.com',
  'dy7fpcmwck.gq',
  'pchelovodstvo-tut.ru',
  'neds.promo',
  'hiphop-fotografiach.com',
  'doublescanner.com',
  'bynyqs.com',
  'attobas.tk',
  'kidswebmo.cf',
  'iqos33.com',
  'cachlamdep247.com',
  'garsvisi.gq',
  'anglepoise-inc.com',
  'inoutmail.info',
  'goalofgtr.tk',
  'afscmelocal2181.org',
  '40abc.ru',
  'clubexnis.tk',
  'tortconli.ga',
  'vfienvtua2dlahfi7.tk',
  'bookclick.online',
  'bloompi.ru',
  'presmolthi.cf',
  'affricca.com',
  '2movierulz.club',
  'kibriscontinentalbank.xyz',
  'minimail.club',
  'yj3nas.tk',
  'lovelyladygirl.com',
  'dextm.ro',
  'opinion-bank.ru',
  'wx6018.com',
  'maxtommy-ra.ru',
  'hii5pdqcebe.gq',
  'coldmail.ml',
  'astropharm.com',
  'zilonggj.com',
  'barrindia.com',
  'clk2020.org',
  'xinli18.info',
  'tnrequinpascherboutiquenlignefr.com',
  'warriorsvscavs.info',
  'unalcas.cf',
  '759b101.com',
  'agxngcxklmahntob.gq',
  'spammer.fail',
  'fitness-wolke.de',
  'hashicorp.asia',
  'fifa555x.com',
  'xn--80ajixegdgzc.xn--p1ai',
  'topairdrops.site',
  'platedeph.cf',
  'store389.top',
  'energieloket.tools',
  'jumperhighs.ru',
  'priobx.net',
  'aestheticclinic.org',
  'utahmail.com',
  'delicacybags.com',
  'bdbdqqxksb.xyz',
  'dispomail.xyz',
  'westin.media',
  'ser2201b.buzz',
  '05ovik.com',
  'maslokkd.gq',
  'npug4.us',
  'kmuye.xyz',
  'hadmins.com',
  'jcredding.com',
  'streamdrop.org',
  'mallinator.com',
  'wish-shoponline.info',
  'tafayati.com',
  'wiebunkgi.tk',
  'pasco.store',
  'sdfgsdrfgf.org',
  'yritysporssi.ru',
  'rxcbilling.com',
  'dragome.fun',
  'mourouzis.com',
  'cannextenze.com',
  'stocosur.ml',
  'lettermania.site',
  'covidfinder.asia',
  'yth238.com',
  '9927bc.com',
  'hypnosischangelife.com',
  'ppcwoo.com',
  'xn--ehquh6ex304a.top',
  'mailsucker1.ga',
  'ngowscf.pl',
  'vpntochina.city',
  '234dhyjgj.com',
  'dlpt7ksggv.tk',
  'mail2000.ml',
  'nanshan-yule.com',
  'mhqxl.us',
  'pylehome.com',
  'express1040.space',
  'ventureschedule.com',
  'txtadvertise.com',
];

const fakeEmail = new Array(100).fill('').map(() => faker.internet.email());
const actualBurners = domains.map(d => `${faker.internet.userName()}@${d}`);

module.exports = fakeEmail.concat(actualBurners);
