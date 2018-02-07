// Hyphenation patterns for Esperanto
// Based on http://mirrors.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-eo.tex
// Source www.ctan.org

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.hyphenationPatternsEo = factory();
  }
}(this, function () {

  // Hyphenation patterns
  var patterns=`
a1 e1 i1 o1 u1       % ebligu tranĉon post la vokaloj,
2aj. 2ajn. 2an. 2as. % krom se antaŭ finaĵo,
en. is. 2oj. 2ojn. 2on. 2os. 2us.
a3a e3a i3a o3a u3a  % krom se post vokalo
a3e e3e i3e o3e u3e
a3i e3i i3i o3i u3i
a3o e3o i3o o3o u3o
a3u e3u i3u o3u u3u
e2sper
% konsonantaj finaĵoj:
2jn. 2lp. 2lt. 2nk. 2ns. 2nt. 2st.
%
.bl4 .br4 .dr4 .dl4 .fl4 .fr4 .gl4 .gn4 .gr4 .kl4 .kn4 .kr4 .kv4 .pl4 .pr4
.ps4 .pt4 .sf4 .sk4 .skl4 .skr4 .skv4 .sl4 .sm4 .sn4 .sp4 .spl4 .spr4
.st4 .str4 .sv4 .ŝl4 .ŝm4 .ŝn4 .ŝp4 .ŝr4 .ŝpr4 .ŝt4 .ŝtr4 .ŝv4 .tr4
.vr4
% AĈ
\nom{1a2ĉ}
% AD:
\nom{1a2d} \ver{1a2d}
.avok2a3d .bal2a3d ĉokol2a3d .fas2a3d .inv2a3d kamar2a3d .kan2a3d limon2a3d
persv2a3d .pom2a3d seren2a3d
% AĴ:
\nom{1a2ĵ}
% ALT-
.al2t
al3tabl al3t2a3r al3ter al3trui
% AN:
\nom{1a2n} \ver{1a2n} 1a2nism 1a2n1i2n
afg2a3n akomp2a3n arg2a3n ark2a3n ban2a3n but2a3n cig2a3n ĉambel2a3n
ĉamp2a3n ĉarlat2a3n ĉik2a3n dek2a3n dog2a3n el2a3n faz2a3n font2a3n
galv2a3n germ2a3n ĝentlem2a3n hisp2a3n .ĥa3n inf2a3n ir2a3n jap2a3n
.ka3n kalk2a3n kank2a3n kapit2a3n kard2a3n karav2a3n kor2a3n
.ma3n marcip2a3n membr2a3n met2a3n nirv2a3n .on2a3n org2a3n
.pa3n partiz2a3n pelik2a3n porcel2a3n prof2a3n .ra3n rum2a3n
.sa3n 3s2log2a3n sopr2a3n stef2a3n sufrag2a3n sult2a3n
ŝam2a3n teher2a3n tir2a3n turb2a3n .va3n vatik2a3n veter2a3n vulk2a3n
%
.ka3n2i3n safr2a3n2i3n .ta3n2i3n
% ANT:
\nom{1an2t}
adjut2an3t .arog2an3t .atl2an3t .ban3t .brok2an3t .diam2an3t dilet2an3t
disk2an3t elef2an3t .gal2an3t .gig2an3t inf2a4n3t inst2an3t konson2an3t
.kan3t konst2an3t kvadr2an3t .kv2an3t leŭten2an3t mom2an3t .okt2an3t
.ped2an3t .plan3t tal2an3t batal3an4t
% ant-ar, -ig, -ec:
1an2t3ar an3t2arkt kan3t2arel
1an2t1ig 1an2t1ec
% APUD:
.apu2d1
% AR:
\nom{1a2r} 1a2rig 1a2riĝ
am2a3r barb2a3r baz2a3r biz2a3r boj2a3r bulg2a3r .ci3d2a3r cig2a3r
din2a3r dol2a3r er2a3r fanf2a3r .f2a3r formul2a3r  garg2a3r git2a3r
.ha3r2 hung2a3r invent2a3r izob2a3r jug2u3l2a3r
kalend2a3r kap2i3l2a3r kla3r komp2a3r kulin2a3r kvatern2a3r
lap2i3d2a3r .mol2a3r najb4a1r om2a3r ordin2a3r partik2u3l2a3r .pol2a3r
pop2u3l2a3r prep2a3r prim2a3r rad2a3r remp2a3r rip2a3r sa3m2ov2a3r sanit2a3r
sek2u3l2ar sekund2a3r sing2u3l2ar skal2a3r .st2a3r sol2i3d2a3r tal2a3r tat2a3r
.vel2a3r vulg2a3r
% AT:
\nom{1a2t} 1a2t1ec
adiab2a3t agreg2a3t aŭtom2a3t aŭtorit2a3t .ab2a3t .adekv2a3t
advok2a3t afrik2a3t .ag2a3t akrob2a3t .akur2a3t alop2a3t .apar2a3t
apost2a3t arom2a3t .ba3t .bl2a3t .brok2a3t .deb2a3t delik2a3t
diplom2a3t .duk2a3t .et2a3t fakult2a3t .fr2a3t .gefr2a3t .gla3t .gran2a3t
.hep2a3t
kandid2a3t .kar2a3t .kazem2a3t .klim2a3t .kom2a3t .komit2a3t .komp2a3t
konkord2a3t .konst2a3t .krav2a3t kro3m2a3t .kvadr2a3t magistr2a3t .magn2a3t
majorit2a3t malgl2a3t .mals2a3t .mand2a3t .mecen2a3t minorit2a3t .mon2a3t
.mul2a3t .musk2a3t ordin2a3t .pal2a3t .pir2a3t .prel2a3t .prim2a3t
priorit2a3t .priv2a3t .rab2a3t .ren2a3t .ril2a3t .sab2a3t .sal2a3t
.sen2a3t sindik2a3t .skarl2a3t .sold2a3t .son2a3t .sp2a3t stigm2a3t
substr2a3t surog2a3t .tok2a3t .tom2a3t .ultim2a3t universit2a3t .vulg2a3t
% ĈEF-
.ĉe2f1
% ĈIUtaga ktp:
.ĉi4a .ĉia4m1 .ĉi4e .ĉie4s .ĉi4o .ĉio4m .ĉi4u
ĉi3el1
% ĈJ:
3ĉ2jo
% DIS:
.di2s1
.di3s2ert .di3s2erv .di3s2ip .di3s2oci
\adj{.di3s2} .di3s2en.
% DUM-
.du2m1
dump2in3g
% DUON-
.du2on1
% EBL:
\nom{1e2bl} \ver{1e2bl} 1e2bl1ec 1e2bl1aĵ
.fe3b1l .me3b1l
% EC:
\nom{1e2c}
.apr2e3c .de3c .pe3c sp2e3c
% EG:
\nom{1e2g} \ver{1e2g}
.del2e3g .fl2e3g kol2e3g .om2e3g .prel2e3g .strat2e3g .norv2e3g
% EJ:
\nom{1e2j} 1e2j1ig 1e2j1iĝ
.be3j .pl2ej malpl2ej
% EK-, EKS-
.ek2s1 .ek3s2ci ek4s3cit ek4s3ciz .ek3s2id .ek1i2r .ek1rid
1e2kzem
% EKSTER-
.ekste2r1
\nom{.ekste3r} \ver{.ekste3r}
% EL-
.el1i2r .el1aĉet .el1uz
% EM:
\nom{1e2m} \ver{1e2m} 1e2m1ec
.alpr2e3m .anat2e3m blasf2e3m .boh2e3m diad2e3m .dil2e3m .ed2e3m ekstr2e3m
.ektr2e3m .ekpr2e3m embl2e3m emfiz2e3m .ekz2e3m .har2e3m jerusal2e3m
krizant2e3m .le3m .po2e3m .pr2e3m .probl2e3m .sk2e3m .te3m .tand2e3m .teor2e3m
.tot2e3m .tr2e3m sist2e3m
% EN-
.en1ir2
% END:
\adj{1en2d} \ver{1en2d} 1en2do. 1en2don.
.am2en3d .at2en3d .def2en3d .et2en3d .kal2en3d kresĉ2en3d .men3d .of2en3d
.pen3d .pl2en3d pret2en3d rekom2en3d .sen3d sc2en3d .ten3d .ven3d
% ET:
\nom{1e2t} \ver{1e2ta}
a2ĉ2e3t alfab2e3t alum2e3t amul2e3t .ask2e3t .atl2e3t .be3t
bajon2e3t bil2e3t .bol2e3t bracel2e3t brev2e3t .buĝ2e3t .deb2e3t .dem2e3t
diab2e3t elizab2e3t .enk2e3t epit2e3t .form2e3t .gaz2e3t .herm2e3t .ĥe3t
.ĵak2e3t ĵ2e3t kabin2e3t .kad2e3t kastanj2e3t .kin2e3t klarn2e3t
kloz2e3t .kom2e3t kompl2e3t .konf2e3t kors2e3t korv2e3t kotl2e3t .krik2e3t
.krok2e3t kvodlib2e3t .me3t magn2e3t marion2e3t .mot2e3t .ne3t .oml2e3t
pamfl2e3t parg2e3t .pl2e3t .po2e3t .prof2e3t .prol2e3t .rak2e3t .rem2e3t
.rip2e3t sekr2e3t skel2e3t .son2e3t .sov2e3t spag2e3t spin2e3t staf2e3t
.stil2e3t ŝibol2e3t .tib2e3t tual2e3t .ve3t .veg2e3t .vend2e3t vinj2e3t
%
1es2tr
% FOR-
.fo2r1
.fo3r2in3t .fo3r2u3m
\nom{.fo3r2} .fo3r2en \ver{.fo3r2}
% ĜIS-
.ĝi2s1
% ID:
\nom{1i2d}
.abs2i3d .ac2i3d .akr2i3d .aps2i3d .ar2i3d .askar2i3d .asp2i3d .av2i3d
.bi3d .bol2i3d .br2i3d cirkumc2i3d .dav2i3d .dec2i3d .eŭkl2i3d
.eg2i3d .fi3d .flor2i3d .fr2i3d frig2i3d genoc2i3d .gv2i3d hibr2i3d
hum2i3d ĥlam2i3d .inc2i3d .ins2i3d inval2i3d .ji3d kan3t2ar2i3d koinc2i3d
.konf2i3d krizal2i3d .li3d .lib2i3d likv2i3d .liv2i3d .luc2i3d
.madr2i3d morb2i3d .muc2i3d perf2i3d piram2i3d .prez2i3d .ri3d
rap2i3d rez2i3d rig2i3d .si3d .sol2i3d .str2i3d telev2i3d .tim2i3d
.vi3d .val2i3d
%
1i2d1ar  1i2d1i2n .pir2i3d2in
% IG:
\nom{1i2g} \ver{1i2g}
.br2i3g .di3g .fi3g .in3d2i3g .inst2i3g .intr2i3g .kvadr2i3g
.li3g pfen2i3g .pi3g .prod2i3g .ri3g .rodr2i3g .str2i3g .ti3g .nav2i3g
%
1i2gebl
1i2gant 1i2gint 1i2gont
1i2gat al2i3g2a3tor l2i3g2a3turo
1i2git 1i2got
%
1i2g1a2d br2i3g2a3d
1i2g1e2m 1i2g1i2l
% IĜ:
\nom{1i2ĝ} \ver{1i2ĝ} 1i2ĝant 1i2ĝint 1i2ĝont
.br2i3ĝ .negl2i3ĝ .prest2i3ĝ .vert2i3ĝ .vest2i3ĝ
% -iĝ-ad, -em
1i2ĝ1a2d 1i2ĝ1e2m
% IL:
\nom{1i2l}
abut2i3l acet2i3l .ang2i3l .apr2i3l .arg2i3l .az2i3l .bab2i3l .bac2i3l
.baz2i3l .ber2i3l .bi3l .br2i3l .braz2i3l .ced2i3l .civ2i3l .ĉi3l
ĉinĉ2i3l .dakt2i3l .deb2i3l .def2i3l .dist2i3l .domic2i3l .dr2i3l
.ed2i3l .ekz2i3l .eps2i3l .et2i3l .fi3l .fac2i3l .fus2i3l .gor2i3l
.gr2i3l .ĝent2i3l .hum2i3l .jub2i3l .ki3l .kamar2i3l kamom2i3l
.komp2i3l .kons2i3l krokod2i3l .mi3l .mant2i3l .met2i3l mob2i3l
.mut2i3l naŭt2i3l of2i3l .osc2i3l paskv2i3l .ps2i3l pterodakt2i3l
.pup2i3l sen2il sim2i3l .st2i3l .stab2i3l stenc2i3l strob2i3l subt2i3l
svah2i3l trankv2i3l .ut2i3l .vi3l .van2i3l .vig2i3l vodev2i3l volat2i3l
% -il-ar:
1i2l1ar
b2i3l2a3rd dakt2i3l2a3rb pl2i3l2a3rĝ f2i3l2a3ri frit2i3l2a3ri f2i3l2a3rb
% IN (nur estrin istin ulin; patrin fratin knabin prefere restu senanalizaj):
\nom{1e2str1i2n}
% ist-in:
\nom{1i2s2t1i2n}
d2is3t2ingo
% ul-in:
\nom{1u2l1i2n}
ins2ul2i3n
% ant-in:
\nom{1an2t1i2n}
adam2a4n3t2i3n a4n3t2i3nom brig2a4n3t2i3n gal2a4n3t2i3n .k2a4n3t2i3n
strof2a4n3t2i3n
% IND:
\adj{1in2d} \ver{1in2d} 1in2do. 1in2don. 1in2d3ec 1in2d3ig 1in2d3iĝ
.bin3d .hin3d .lin3d rozal4in3d .bl4in3d .pin3d tamar4in3d .ŝin3d .vin3d
.in3d2ign in3d2iĝen
% ING:
\nom{1in2g} 1in2gig
.din3g .pud2in3g .vik2in3g 3s2mok2in3g ŝil2in3g .klin3g sterl2in3g
dom2in3g men2in3g salp2in3g .rin3g .far2in3g .har2in3g
.lar2in3g .mer2in3g .fr2in3g .sir2in3g .krin3g str2in3g vrin3g
.at2in3g .mit2in3g .est2in3g .dist2in3g .svin3g
% INT:
\nom{1in2t} 1in2t3ar 1in2t3ec 1in2t3us
.abs2in3t .fin3t hiac2in3t .jac2in3t .kvin3t labir2in3t .pin3t .pl2in3t
.tin3t tereb2in3t
% INTER-
.inte2r1
.inte3r2es .inte3r2ez .inte3r2upt
\nom{.inte3r} \ver{.inte3r} .inte3ren.
% ISM:
\nom{1is2m} 1i2s2m3ec
.pr2is3m .ris3m .sk2is3m .sis3m
% IST:
\nom{1i2s2t} 1i2s2t3ec 1i2s2t3ar
%
.amet2i3s3t antikr2i3s3t aor2i3s3t .ar2i3s3t .bal2i3s3t .bat2i3s3t .ci3s3t
.di3s3t ekz2i3s3t .gen2i3s3t .gi3s3t .hi3s3t ins2i3s3t kons2i3s3t .ki3s3t
.kr2i3s3t .li3s3t .pi3s3t pers2i3s3t .rez2i3s3t .sk2i3s3t .vi3s3t
% IT:
\nom{1i2t} 1i2t3ec p2i3t4eci
%
.ag2i3t akred2i3t antrac2i3t .apet2i3t .bi3t .band2i3t biskv2i3t
.br2i3t .ci3t .cenob2i3t .cirkv2i3t .civ2i3t .deb2i3t defic2i3t .di3g2i3t
dinam2i3t .efr2i3t .eksc2i3t eksplic2i3t .el2i3t .emer2i3t .erm2i3t
.erud2i3t .ev2i3t .fr2i3t .gamb2i3t .gl2i3t .graf2i3t .gran2i3t
.grav2i3t hermafrod2i3t .hez2i3t hipokr2i3t .im2i3t .inc2i3t
infin2i3t inkogn2i3t interm2i3t .inv2i3t kapac2i3t komprom2i3t
.konf2i3t .kred2i3t .kv2i3t .kval2i3t .kviv2i3t .li3t .mi3t
malak2i3t .margar2i3t .marm2i3t .med2i3t megal2i3t .mer2i3t
mil2i3t asimil3i4t
.mosk2i3t .neof2i3t okcip2i3t ol2i3t .orb2i3t palp2i3t .paraz2i3t
.pir2i3t plebisc2i3t precip2i3t prestid2i3g2i3t preter2i3t prof2i3t
prozel2i3t .ri3t rehabil2i3t .rekviz2i3t sanskr2i3t .satel2i3t
sibar2i3t .sk2i3t .sp2i3t .spir2i3t .spl2i3t .spr2i3t stalagm2i3t
stalakt2i3t .stil2i3t .su3b2i3t .ŝv2i3t .term2i3t .trans2i3t
troglod2i3t .vi3t .viz2i3t .zen2i3t
% KELK-
.kel2k
% KROM-
.kro2m1 \adj{.kro3m} krom2o % kromoforo, -foto, -lito, -sfero, -somo ...
% KUN-
.ku2n1
ku3n2ikl
% LIA-
.li4a
li5an li5as
% MAL:
.ma2l1 ma3l2ic
% MALNOV-
.malno2v
% MEM:
.me2m1 me3m2or
% MIA-
.mi4a
mi5asm mi5aŭ
% MIS:
.mi2s1
.mi3s2al mi3s2il .mi3s2ia .mi3s2ie .mi3s2ii .mi3s2io .mi3s2iu
% MEZ-
.me2z1
mez2alianc me3z2embri me3z2enter .me3z2ere .mez2o me3z2ur
% NIA-
.ni4a
% NJ:
\nom{3nj}
% NOV-
.no2v
% OBL:
\nom{1o2bl} 1o2bl1ec
gren2o3bl malno3bl .no3bl .vo3bl
% ON:
\nom{du3on}
.trio2n .kvar3o2n .kvin3o2n .ses3o2n .sep3o2n \nom{.ok3o2n} .naŭo4n
\nom{dek3o2n} \nom{cent3o2n} \nom{mil3o2n}
% ONT:
\nom{1on2t}
disk2on3t .fon3t .fr2on3t .hon3t horiz2on3t .kon3t konfr2on3t
.mon3t mastod2on3t .melol2on3t .pon3t .rak2on3t .rem2on3t .renk2on3t
.sp2on3t vol2on3t
% OP:
\nom{duo2p} .trio2p kvar3o2p kvin3o2p ses3o2p sep3o2p
\nom{.ok3o2p} naŭo4p \nom{dek3o2p} \nom{cent3o2p} \nom{mil3o2p}
% OT:
\nom{1o2t}
abrik2o3t anekd2o3t antid2o3t asimpt2o3t .az2o3t .bo3t .bal2o3t
bankr2o3t .behem2o3t bergam2o3t .bi3g2o3t .bisk2o3t bojk2o3t .do3t
.dep2o3t .desp2o3t .dev2o3t dorl2o3t .ekz2o3t .er2o3t .erg2o3t .fo3t
.fag2o3t .fakt2o3t .fl2o3t fokstr2o3t .fr2o3t .go3t .gav2o3t
.golg2o3t .gr2o3t .herod2o3t hipn2o3t hotent2o3t .jo3t ĵab2o3t
.ko3t .kaĉal2o3t kalik2o3t .kaml2o3t .kan2o3t .kap2o3t .kar2o3t
.koj2o3t .komp2o3t kompl2o3t kreoz2o3t .kul2o3t .kv2o3t .alikv2o3t
.lo3t .lit2o3t .mo3t .mar2o3t .mark2o3t marm2o3t .mioz2o3t .no3t
nark2o3t .po3t perlam2o3t .pier2o3t .pil2o3t .piv2o3t .pl2o3t
poligl2o3t .ro3t .rab2o3t reding2o3t .rob2o3t .sab2o3t sacerd2o3t
.sk2o3t .skler2o3t .skr2o3t .sp2o3t .ŝo3t ŝevj2o3t .terak2o3t
.tr2o3t .trik2o3t .vo3t .zel2o3t
% POR-
.po2r
% POST-
.pos2t1
pos3t2ament pos3t2iljon pos3t2u3l
% PRETER:
.prete2r1
.re2f3l2ig .re2spond .re2spublik .re2storaci
% RETRO:
.re2tro
% SAM-
.sa2m
sam2ar .sa3m2u3m sa3m2uraj
% SEN-
.se2n1
.se3n2aa .se3n2ao sen2at sen2eskal
% SIA-
.si4a
% SUB-
.su2b1
.su3b2ute
% SUPER-
.supe2r1
\nom{.supe3r} \ver{.supe3r}
% ŜIA-
.ŝi4a
% TRANS:
.tran2s
tran3scend tran3sept  tran3sistor  tran3sit  tran3s2pir
% TUT-
.tu2t1
\nom{.tu3t}
% UJ:
\nom{1u2j} 1u2j1ig 1u2j1iĝ
.and2u3j .halel2u3j
% UL:
\nom{1u2l} 1e2m1u2l e3m2u3ls 1u2l3ec 1u2l3ej
%
.akum2u3l .ang2u3l .bu3l .bet2u3l .bru3l .ejak2u3l .fist2u3l
form2u3l .fu3l galin2u3l .gran2u3l .grat2u3l .herk2u3l
hierod2u3l homunk2u3l .inok2u3l .ins2u3l .instanb2u3l .ju3l .ĵu3l
.ku3l .kab2u3l kalend2u3l kalk2u3l kapit2u3l kaps2u3l koag2u3l
.kons2u3l .kop2u3l korpusk2u3l .kum2u3l .lu3l .liverp2u3l .mu3l
.mak2u3l manip2u3l matrik2u3l .mod2u3l molek2u3l .nu3l .neb2u3l
.ok2u3l .pu3l .paĉ2u3l partik2u3l .pust2u3l .ru3l
.reg2u3l retik2u3l .ruk2u3l .sim2u3l skrup2u3l somnamb2u3l speg2u3l
.spek2u3l .stim2u3l .tu3l .tab2u3l tarant2u3l .tru3l tuberk2u3l
turb2u3l .ul2u3l .uv2u3l .vist2u3l
%
1u2l1ar 2u3l2ari 2u3l2ard .pedik2u3l2ar
% UM:
\nom{1u2m} \ver{1u2m} 1u2m3ec
.alb2u3m .bu3m .opid2u3m referend2u3m .fu3m parf2u3m .gu3m
.hu3m .kuk2u3m .luk2u3m .lu3m vol2u3m .plu3m .stern2u3m
.pu3m .ru3m .ser2u3m .gru3m .kvor2u3m .tru3m .stru3m
.su3m .res2u3m kons2u3m opos2u3m .bit2u3m .kost2u3m .zu3m
% VIA-
.vi4a
vi5and vi5atik
% VIC-
.vi2c1
\nom{.vi3c}
.vi3c2ia .vi3c2io
% VIR-
.vi2r1
vir2us vi1r2ulent
% ===
1a2fabl 1a2gra 1a2kr 1a2per 1a2va1r
4ologi 4ografi 2fik
fre2m2d3l
%
4b1c 4b1b2 4b1d 4b1f 4b1g 4b1h4 4b1j2 4b1k 4b1m 4b1n 4b1p 4b1s 4b1s2k 4b1t 4b1v
4b1z 4b1ĉ 4b1ĝ 4b1ĵ 4b1ŝ
4c1b 4c1c2 4c1ĉ 4c1d 4c1f 4c1g 4c1ĝ 4c1h4 4c1j2 4c1ĵ 4c1k 4c1l 4c1m 4c1n
4c1p 4c1r 4c1s 4c1ŝ 4c1t 4c1v 4c1z
%
4ĉ1b 4ĉ1c 4ĉ1d 4ĉ1f 4ĉ1g 4ĉ1h4 4ĉ1j2 4ĉ1k 4ĉ1l 4ĉ1m 4ĉ1n 4ĉ1p
4ĉ1s 4ĉ1t 4ĉ1v 4ĉ1z 4ĉ1ĉ 4ĉ1ĝ 4ĉ1ĵ 4ĉ1ŝ
%
4d1b 4d1c 4d1d2 4d1f 4d1g 4d1h4 4d1j2 4d1k 4d1l 4d1m 4d1n 4d1p 4d1s 4d1t 4d1v
4d1z 4d1ĉ 4d1ĝ 4d1ĵ 4d1ŝ
%
1e2ben 1e2d2z 1e2gal 1e2le1g2an3t
%
4f1b 4f1c 4f1ĉ 4f1d 4f1f2 4f1g 4f1ĝ 4f1h4 4f1j2 4f1ĵ 4f1k 4f1m 4f1n 4f1p
4f1s 4f1ŝ f1t 4f1v 4f1z
4g1b 4g1c 4g1ĉ g1d 4g1f 4g1g2 4g1ĝ 4g1h4 4g1j2 4g1ĵ 4g1k g1m g1n 4g1p
4g1s 4g1ŝ 4g1t g1v 4g1z
%
4ĝ1b 4ĝ1c 4ĝ1d 4ĝ1f 4ĝ1g 4ĝ1h4 4ĝ1j2 4ĝ1k 4ĝ1l 4ĝ1m 4ĝ1n 4ĝ1p
4ĝ1s 4ĝ1t 4ĝ1v 4ĝ1z 4ĝ1ĉ 4ĝ1ĝ 4ĝ1ĵ 4ĝ1ŝ
%
4h1ĉ 4h1ĝ 4h1ĵ 4h1ŝ
%
4ĥ1b 4ĥ1c 4ĥ1d 4ĥ1f 4ĥ1g 4ĥ1h4 4ĥ1j2 4ĥ1k 4ĥ1m 4ĥ1n 4ĥ1p
4ĥ1s 4ĥ1t 4ĥ1v 4ĥ1z 4ĥ1ĉ 4ĥ1ĝ 4ĥ1ĵ 4ĥ1ŝ
%
1i2dent
%
4j1b 4j1c 4j1d 4j1f 4j1g 4j1h4 4j1k 4j1l 4j1m 4j1n 4j1p 4j1r 4j1s
4j1t 4j1v 4j1z 4j1ĉ 4j1ĝ 4j1ĵ 4j1ŝ
%
4ĵ1b 4ĵ1c 4ĵ1d 4ĵ1f 4ĵ1g 4ĵ1h4 4ĵ1j2 4ĵ1k 4ĵ1l 4ĵ1m 4ĵ1n 4ĵ1p
4ĵ1s 4ĵ1t 4ĵ1v 4ĵ1z 4ĵ1ĉ 4ĵ1ĝ 4ĵ1ĵ 4ĵ1ŝ
%
4k1b 4k1c 4k1d 4k1f 4k1g 4k1h4 4k1j2 4k1m 4k1n 4k1p 4k1s
k1s2t2r
4k1t k1v 4k1z 4k1ĉ 4k1ĝ 4k1ĵ 4k1ŝ
%
4l1b 4l1c 4l1d 4l1f 4l1g 4l1h4 4l1j2 4l1k 4l1l2 4l1m 4l1n 4l1p 4l1r 4l1s2
4l1t 4l1v 4l1z 4l1ĉ 4l1ĝ 4l1ĵ 4l5ŝ2 % mal^pari, elŝraŭbi
4m1b 4m1c 4m1d 4m1f 4m1g 4m1h4 4m1j2
4m1k 4m1l 4m1m2 4m1n 4m1p 4m1r 4m1s 4m1t 4m1v 4m1z 4m1ĉ 4m1ĝ 4m1ĵ 4m1ŝ
mul2t1 mult2e mul2t3eg mul3ta mul3te. mul3to mul4t3obl
%
4n1b 4n1c 4n1d 4n1f 4n1g 4n1h4 4n1j 4n1k
n2kv
4n1l n1m 4n1n 4n1p 4n1r 4n1s
n1s2c n1s2t
4n1t
4n1v2
4n1z 4n1ĉ 4n1ĝ 4n1ĵ 4n1ŝ
n2k1c n2s1f
nor2d1af nor2d1am nor2d1az nor2d1eŭ nor2d1rus nor2d1germ
%
1o2be 1o2kup 1o2por1tun
%
4p1b 4p1c 4p1d p1f 4p1g 4p1h4 p1j2 p1k p1m p1n p1s p1t 4p1v 4p1z 4p1ĉ
4p1ĝ 4p1ĵ p1ŝ
%
4r1b 4r1c 4r1d 4r1f 4r1g 4r1h4 4r1j2 4r1k 4r1l 4r1m 4r1n 4r1p 4r1s 4r1t
4r1v 4r1z 4r1ĉ 4r1ĝ 4r1ĵ 4r1ŝ
%
s1b s1c 4s1ĉ 4s1d s1f s1g 4s1ĝ 4s1h4 4s1j2 4s1ĵ s1k
4s1l 3s2lab 3s2lalom 3s2lang 3s2lav 3s2led 3s2lip 3s2lojd 3s2lovak
3s2loven 3s2lup 3s2lofoks
4s1m 3s2malt 3s2merald 3s2milak 3s2mirg 3s2mut % smokING
4s1n 3s2nob 3s2nuf
s1p s1r 4s1s 4s1ŝ
s1t 1s2tu1d
s1v 4s1z
.su2d1af .su2d1am .su2d1azi .su2d1eŭr .su2d1rus
%
4ŝ1b 4ŝ1c 4ŝ1d 4ŝ1f 4ŝ1g 4ŝ1h4 4ŝ1j2 4ŝ1k ŝ1m ŝ1n ŝ1p
4ŝ1s ŝ1t ŝ1v 4ŝ1z 4ŝ1ĉ 4ŝ1ĝ 4ŝ1ĵ 4ŝ1ŝ
1ŝ2tel
%
4t1b 4t1c 4t1d 4t1f 4t1g 4t1h4 4t1j2 4t1k 4t1m 4t1n 4t1p 4t1s 4t1t 4t1v
4t1z 4t1ĉ 4t1ĝ 4t1ĵ 4t1ŝ
%
4ŭ1 ŭ2s1k
%
4v1b 4v1c 4v1d 4v1f 4v1g 4v1h4 4v1j2 4v1k 4v1l 4v1m 4v1n 4v1p 4v1s 4v1t 4v1v
4v1z 4v1ĉ 4v1ĝ 4v1ĵ 4v1ŝ
%
4z1b 4z1c 4z1d 4z1f 4z1g 4z1h4 4z1j2 4z1k 4z1l
z2lot
4z1m 4z1n 4z1p 4z1r 4z1s 4z1t 4z1v 4z1ĉ 4z1ĝ 4z1ĵ 4z1ŝ
`;

  // Hyphenation exceptions
  var exceptions=`
`;

  return {
    patterns: patterns,
    exceptions: exceptions
  };
}));
