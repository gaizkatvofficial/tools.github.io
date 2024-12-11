const _0x5340ba = _0x3751;
(function (_0xb69cbd, _0x371e8f) {
  const _0x4737d0 = _0x3751, _0x4317f5 = _0xb69cbd();
  while (true) {
    try {
      const _0x419404 = parseInt(_0x4737d0(521)) / 1 * (-parseInt(_0x4737d0(539)) / 2) + -parseInt(_0x4737d0(496)) / 3 * (-parseInt(_0x4737d0(543)) / 4) + parseInt(_0x4737d0(701)) / 5 + parseInt(_0x4737d0(636)) / 6 + parseInt(_0x4737d0(487)) / 7 * (-parseInt(_0x4737d0(633)) / 8) + parseInt(_0x4737d0(638)) / 9 + -parseInt(_0x4737d0(528)) / 10 * (parseInt(_0x4737d0(605)) / 11);
      if (_0x419404 === _0x371e8f) break; else _0x4317f5.push(_0x4317f5.shift());
    } catch (_0x152882) {
      _0x4317f5.push(_0x4317f5.shift());
    }
  }
}(_0x4475, 138436));
let player;
const scheduleData = {Badminton: [{time: _0x5340ba(608), title: _0x5340ba(474) + _0x5340ba(564) + _0x5340ba(630), videoId: _0x5340ba(648), date: _0x5340ba(657)}, {time: _0x5340ba(608), title: _0x5340ba(474) + _0x5340ba(564) + _0x5340ba(593), videoId: _0x5340ba(542), date: _0x5340ba(657)}, {time: _0x5340ba(608), title: _0x5340ba(474) + _0x5340ba(564) + _0x5340ba(622), videoId: _0x5340ba(505), date: _0x5340ba(657)}, {time: _0x5340ba(608), title: _0x5340ba(474) + _0x5340ba(564) + _0x5340ba(601), videoId: _0x5340ba(579), date: _0x5340ba(657)}, {time: _0x5340ba(498), title: _0x5340ba(687) + _0x5340ba(667) + _0x5340ba(550) + _0x5340ba(670), videoId: _0x5340ba(634), date: _0x5340ba(657)}, {time: _0x5340ba(498), title: _0x5340ba(687) + _0x5340ba(667) + _0x5340ba(550) + _0x5340ba(548), videoId: _0x5340ba(459), date: _0x5340ba(657)}]};
function loadSchedule() {
  const _0x1c1966 = _0x5340ba, _0x3c09b5 = {ylIhT: _0x1c1966(576), TFEts: _0x1c1966(682) + _0x1c1966(685), whdSW: _0x1c1966(532) + "st", adluP: _0x1c1966(584), rtTrn: _0x1c1966(610) + _0x1c1966(571)}, _0xe6460f = document[_0x1c1966(692) + _0x1c1966(557)](_0x3c09b5[_0x1c1966(533)]);
  _0xe6460f[_0x1c1966(526)] = "";
  for (const _0x5a4189 in scheduleData) {
    const _0x532158 = document[_0x1c1966(585) + _0x1c1966(495)](_0x3c09b5[_0x1c1966(582)]), _0x2333d0 = document[_0x1c1966(585) + _0x1c1966(495)]("h3");
    _0x2333d0[_0x1c1966(669)][_0x1c1966(684)](_0x3c09b5[_0x1c1966(555)]), _0x2333d0[_0x1c1966(468) + "t"] = _0x5a4189, _0x532158[_0x1c1966(611) + "d"](_0x2333d0);
    const _0xb1e247 = document[_0x1c1966(585) + _0x1c1966(495)]("ul");
    scheduleData[_0x5a4189][_0x1c1966(659)](_0x2e4bab => {
      const _0x51b132 = _0x1c1966, _0x1e6144 = document[_0x51b132(585) + _0x51b132(495)]("li");
      _0x1e6144[_0x51b132(520) + "te"](_0x3c09b5[_0x51b132(552)], _0x2e4bab[_0x51b132(641)][_0x51b132(627) + "e"]()), _0x1e6144[_0x51b132(520) + "te"](_0x3c09b5[_0x51b132(456)], _0x5a4189[_0x51b132(627) + "e"]()), _0x1e6144[_0x51b132(526)] = _0x2e4bab[_0x51b132(467)] + _0x51b132(516) + _0x2e4bab[_0x51b132(641)] + _0x51b132(506) + _0x2e4bab[_0x51b132(596)] + (_0x51b132(485) + _0x51b132(614) + _0x51b132(537) + _0x51b132(695) + ": ") + _0x2e4bab[_0x51b132(514)] + (_0x51b132(594) + _0x51b132(614) + _0x51b132(494) + _0x51b132(647) + _0x51b132(561) + _0x51b132(664) + _0x51b132(488) + _0x51b132(619)) + _0x2e4bab[_0x51b132(514)] + (_0x51b132(632) + _0x51b132(614) + _0x51b132(688) + _0x51b132(653) + _0x51b132(477) + _0x51b132(511) + _0x51b132(504) + _0x51b132(473) + _0x51b132(614) + _0x51b132(465)), _0xb1e247[_0x51b132(611) + "d"](_0x1e6144);
    }), _0x532158[_0x1c1966(611) + "d"](_0xb1e247), _0xe6460f[_0x1c1966(611) + "d"](_0x532158);
  }
}
function searchSchedule() {
  const _0xac6dfc = _0x5340ba, _0x31fed3 = {AQKjt: _0xac6dfc(576), gaUjO: _0xac6dfc(682) + _0xac6dfc(685), ImBak: _0xac6dfc(471), AwnOz: _0xac6dfc(568) + "t", LMBth: _0xac6dfc(532) + "st"}, _0x350590 = document[_0xac6dfc(692) + _0xac6dfc(557)](_0x31fed3[_0xac6dfc(600)])[_0xac6dfc(529)][_0xac6dfc(627) + "e"](), _0x4bfebc = document[_0xac6dfc(692) + _0xac6dfc(557)](_0x31fed3[_0xac6dfc(612)]), _0x55aa9e = _0x4bfebc[_0xac6dfc(656) + _0xac6dfc(676)]("li");
  _0x55aa9e[_0xac6dfc(659)](_0x46f2a6 => {
    const _0xba005e = _0xac6dfc, _0x50a79e = _0x46f2a6[_0xba005e(517) + "te"](_0x31fed3[_0xba005e(620)]), _0x295c62 = _0x46f2a6[_0xba005e(517) + "te"](_0x31fed3[_0xba005e(672)]);
    _0x50a79e[_0xba005e(602)](_0x350590) || _0x295c62[_0xba005e(602)](_0x350590) ? _0x46f2a6[_0xba005e(577)][_0xba005e(479)] = "" : _0x46f2a6[_0xba005e(577)][_0xba005e(479)] = _0x31fed3[_0xba005e(699)];
  });
}
function copyToClipboard(_0x33f1aa) {
  const _0x57e9aa = _0x5340ba, _0x126ec0 = {DeqIM: _0x57e9aa(578), TbJFF: _0x57e9aa(572), JmuMr: function (_0x16f206, _0x5661ab) {
    return _0x16f206(_0x5661ab);
  }, omaOg: _0x57e9aa(470) + _0x57e9aa(515) + _0x57e9aa(508)}, _0x1da010 = document[_0x57e9aa(585) + _0x57e9aa(495)](_0x126ec0[_0x57e9aa(645)]);
  _0x1da010[_0x57e9aa(529)] = _0x33f1aa, document[_0x57e9aa(673)][_0x57e9aa(611) + "d"](_0x1da010), _0x1da010[_0x57e9aa(472)](), document[_0x57e9aa(668) + "d"](_0x126ec0[_0x57e9aa(587)]), document[_0x57e9aa(673)][_0x57e9aa(616) + "d"](_0x1da010), _0x126ec0[_0x57e9aa(536)](alert, _0x126ec0[_0x57e9aa(483)]);
}
document[_0x5340ba(621) + _0x5340ba(637)](_0x5340ba(547) + _0x5340ba(484), () => {
  const _0x5631a0 = _0x5340ba, _0x4818ba = {YtCmB: function (_0x457c19) {
    return _0x457c19();
  }};
  _0x4818ba[_0x5631a0(629)](loadSchedule);
});
function copyToClipboard(_0x1f47bd) {
  const _0x3403d4 = _0x5340ba, _0x3dc676 = {ClAqC: _0x3403d4(578), AzZCw: _0x3403d4(572), CthOz: function (_0x4bb8e1, _0xcecea7) {
    return _0x4bb8e1(_0xcecea7);
  }, WibkR: _0x3403d4(470) + _0x3403d4(515) + _0x3403d4(508)}, _0x1a331b = document[_0x3403d4(585) + _0x3403d4(495)](_0x3dc676[_0x3403d4(671)]);
  _0x1a331b[_0x3403d4(529)] = _0x1f47bd, document[_0x3403d4(673)][_0x3403d4(611) + "d"](_0x1a331b), _0x1a331b[_0x3403d4(472)](), document[_0x3403d4(668) + "d"](_0x3dc676[_0x3403d4(500)]), document[_0x3403d4(673)][_0x3403d4(616) + "d"](_0x1a331b), _0x3dc676[_0x3403d4(626)](alert, _0x3dc676[_0x3403d4(546)]);
}
function _0x3751(_0xc49650, _0xed2eed) {
  const _0x9335c3 = _0x4475();
  return _0x3751 = function (_0x32a8bb, _0x14d2bf) {
    _0x32a8bb = _0x32a8bb - 454;
    let _0x2f7feb = _0x9335c3[_0x32a8bb];
    return _0x2f7feb;
  }, _0x3751(_0xc49650, _0xed2eed);
}
document[_0x5340ba(621) + _0x5340ba(637)](_0x5340ba(547) + _0x5340ba(484), () => {
  const _0x1ee54b = _0x5340ba, _0x2c697e = {SJAUO: function (_0xe13f70) {
    return _0xe13f70();
  }};
  _0x2c697e[_0x1ee54b(604)](loadSchedule), _0x2c697e[_0x1ee54b(604)](startClock);
});
function startClock() {
  const _0x476172 = _0x5340ba, _0x550fe3 = {EnvZH: _0x476172(598), GPXNn: function (_0x5139fb, _0x5b8e75, _0x34f4fc) {
    return _0x5139fb(_0x5b8e75, _0x34f4fc);
  }}, _0x35a2a6 = document[_0x476172(692) + _0x476172(557)](_0x550fe3[_0x476172(503)]);
  _0x550fe3[_0x476172(490)](setInterval, () => {
    const _0x45991f = _0x476172, _0x29ecd9 = new Date;
    _0x35a2a6[_0x45991f(468) + "t"] = _0x29ecd9[_0x45991f(545) + _0x45991f(694)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x5ea091 = _0x5340ba, _0x3b4800 = {HDyaV: _0x5ea091(514), tVjzI: function (_0x3e133b, _0x26586b) {
    return _0x3e133b(_0x26586b);
  }, ikztv: function (_0x247106, _0x404dd6) {
    return _0x247106 < _0x404dd6;
  }, bFVrO: function (_0x3b11fe, _0x3b1543) {
    return _0x3b11fe > _0x3b1543;
  }, JXTEd: _0x5ea091(595) + _0x5ea091(556), OdIDh: _0x5ea091(462), JWjnz: function (_0x3b4896, _0x143728) {
    return _0x3b4896(_0x143728);
  }, iVjKx: _0x5ea091(507), xeuBc: _0x5ea091(566) + _0x5ea091(493), gNrDj: _0x5ea091(463), VtaqD: _0x5ea091(475), XSOui: _0x5ea091(471)}, _0x2fea07 = document[_0x5ea091(692) + _0x5ea091(557)](_0x3b4800[_0x5ea091(639)])[_0x5ea091(529)][_0x5ea091(599)]();
  if (_0x3b4800[_0x5ea091(567)](isNaN, _0x2fea07) || _0x3b4800[_0x5ea091(509)](_0x2fea07[_0x5ea091(650)], 4) || _0x3b4800[_0x5ea091(590)](_0x2fea07[_0x5ea091(650)], 8)) {
    document[_0x5ea091(692) + _0x5ea091(557)](_0x3b4800[_0x5ea091(464)])[_0x5ea091(577)][_0x5ea091(479)] = _0x3b4800[_0x5ea091(683)];
    return;
  }
  _0x3b4800[_0x5ea091(525)](jwplayer, _0x3b4800[_0x5ea091(680)])[_0x5ea091(570)]({file: _0x5ea091(492) + _0x5ea091(686) + _0x5ea091(597) + _0x5ea091(586) + _0x2fea07 + _0x5ea091(663), image: _0x3b4800[_0x5ea091(635)], width: _0x3b4800[_0x5ea091(454)], height: _0x3b4800[_0x5ea091(524)], autostart: true}), document[_0x5ea091(692) + _0x5ea091(557)](_0x3b4800[_0x5ea091(464)])[_0x5ea091(577)][_0x5ea091(479)] = _0x3b4800[_0x5ea091(674)];
}
function _0x4475() {
  const _0x2959d0 = ["yang sesua", "ram group<", "11:30", "   </ul>\n ", "category-t", "appendChil", "LMBth", "       <li", "          ", "strong>Ent", "removeChil", "an visual.", "Mode</stro", "ipboard('", "AQKjt", "addEventLi", "- COURT 3", "trong> and", "njut.</li>", "rong> untu", "CthOz", "toLowerCas", "g diperluk", "YtCmB", "- COURT 1", "tang.</li>", "')\">\n     ", "2104UnDste", "33120", "xeuBc", "1375260jNocYd", "stener", "539577NYKILv", "HDyaV", "    <ul>\n ", "title", "iate langu", "legram</st", "si Pecinta", "DeqIM", " the butto", "utton clas", "24360", "i lebih la", "length", "the video.", "ong>View t", 'i class="f', "dGXCb", "ideo ID fo", "querySelec", "12-12-2024", "deo ID yan", "forEach", "abung deng", "ntent", "he event s", ".m3u8", 'n" onclick', "er Video I", "or more in", "Tour Final", "execComman", "classList", "OURT 1", "ClAqC", "gaUjO", "body", "XSOui", " the Teleg", "torAll", "   <ul>\n  ", " Gelap</st", "k informas", "iVjKx", "toggle", "data-categ", "OdIDh", "add", "ory", "bo.huminbi", "BWF World ", "         <", "g></li>\n  ", "    <li><s", "k kenyaman", "getElement", "   <h2>Car", "meString", "n>Video ID", "i><strong>", "sual comfo", "cara menda", "ImBak", "trong>Berg", "504155pRRmpx", "><strong>P", "minton</h2", "gNrDj", "tombol unt", "TFEts", " events.</", "   <h2>How", "32990", "n to load ", "D</strong>", "block", "100%", "JXTEd", " </button>", "strong> da", "time", "textConten", "        </", "Video ID c", "none", "select", "\n         ", "Odisha Mas", "auto", "Lihat jadw", "as fa-copy", "ng> for vi", "display", "trong>Join", "vate Dark ", "g>Select t", "omaOg", "Loaded", " <br>\n    ", "strong>Akt", "3878otbiFn", '="copyToCl', "video.</li", "GPXNn", "</li>\n    ", "https://le", ".gd/oeye", "        <b", "ent", "19521vaHQdz", "vflDL", "08:30", "  <li><str", "AzZCw", "ilih tutor", "al acara</", "EnvZH", "y Video ID", "24240", " on ", "player", "lipboard!", "ikztv", " and click", '"></i> Cop', "required V", "r upcoming", "videoId", "opied to c", " - ", "getAttribu", " dan klik ", "</strong> ", "setAttribu", "563dJInvX", "formation.", "        <l", "VtaqD", "JWjnz", "innerHTML", "ial bahasa", "140JAgaSC", "value", "uUbTV", "age tutori", "scheduleLi", "whdSW", "n salin Vi", "trong>Acti", "JmuMr", "      <spa", "ifkan Mode", "326atFqoE", "ong>Masukk", "rt.</li>\n ", "22930", "116LbXVcO", "dark-mode", "toLocaleTi", "WibkR", "DOMContent", "OURT 2", "     <li><", "s 2024 - C", "a Mengguna", "ylIhT", "n App</h2>", "i.</li>\n  ", "rtTrn", "age", "ById", "cintaminto", "       ", "an grup Te", 's="copy-bt', " to Use Pe", "he appropr", "ters 2024 ", "uk memuat ", "https://da", "tVjzI", "searchInpu", " copy the ", "setup", "itle", "copy", ">\n        ", "tutorialCo", "<li><stron", "data-title", "style", "textarea", "23190", "an Video I", "ul>\n      ", "adluP", "li>\n      ", "div", "createElem", "/ballbar_", "TbJFF", "kan Aplika", "al.</stron", "bFVrO", "chedule</s", "/strong> f", "- COURT 2", "</span>\n  ", "error-mess", "date", "rd.cn/live", "clock", "trim", "AwnOz", "- COURT 4", "includes", "an untuk a", "SJAUO", "159335TaOVQM"];
  _0x4475 = function () {
    return _0x2959d0;
  };
  return _0x4475();
}
function toggleDarkMode() {
  const _0x597f47 = _0x5340ba, _0xbf2860 = {uUbTV: _0x597f47(544)};
  document[_0x597f47(673)][_0x597f47(669)][_0x597f47(681)](_0xbf2860[_0x597f47(530)]);
}
function showTutorial(_0x363a58) {
  const _0x2986dd = _0x5340ba, _0x1ea448 = {dGXCb: _0x2986dd(574) + _0x2986dd(661), vflDL: function (_0x2e3e2f, _0x2b2990) {
    return _0x2e3e2f === _0x2b2990;
  }}, _0x113421 = document[_0x2986dd(692) + _0x2986dd(557)](_0x1ea448[_0x2986dd(654)]), _0x4bc4e1 = _0x2986dd(473) + _0x2986dd(458) + _0x2986dd(562) + _0x2986dd(558) + _0x2986dd(553) + _0x2986dd(473) + _0x2986dd(677) + _0x2986dd(614) + _0x2986dd(690) + _0x2986dd(535) + _0x2986dd(481) + _0x2986dd(618) + _0x2986dd(478) + _0x2986dd(697) + _0x2986dd(541) + _0x2986dd(614) + _0x2986dd(549) + _0x2986dd(615) + _0x2986dd(665) + _0x2986dd(461) + _0x2986dd(510) + _0x2986dd(646) + _0x2986dd(460) + _0x2986dd(651) + _0x2986dd(491) + _0x2986dd(614) + _0x2986dd(499) + _0x2986dd(652) + _0x2986dd(662) + _0x2986dd(591) + _0x2986dd(623) + _0x2986dd(569) + _0x2986dd(512) + _0x2986dd(655) + _0x2986dd(513) + _0x2986dd(457) + _0x2986dd(583) + _0x2986dd(614) + _0x2986dd(575) + _0x2986dd(482) + _0x2986dd(563) + _0x2986dd(642) + _0x2986dd(531) + _0x2986dd(589) + _0x2986dd(689) + _0x2986dd(614) + _0x2986dd(690) + _0x2986dd(480) + _0x2986dd(675) + _0x2986dd(607) + _0x2986dd(592) + _0x2986dd(666) + _0x2986dd(522) + _0x2986dd(491) + _0x2986dd(469) + _0x2986dd(581) + "  ", _0xefa4e1 = _0x2986dd(473) + _0x2986dd(693) + _0x2986dd(551) + _0x2986dd(588) + _0x2986dd(644) + _0x2986dd(703) + _0x2986dd(573) + _0x2986dd(640) + _0x2986dd(614) + _0x2986dd(549) + _0x2986dd(486) + _0x2986dd(538) + _0x2986dd(678) + _0x2986dd(625) + _0x2986dd(691) + _0x2986dd(617) + _0x2986dd(491) + _0x2986dd(614) + _0x2986dd(499) + _0x2986dd(540) + _0x2986dd(580) + _0x2986dd(461) + _0x2986dd(518) + _0x2986dd(455) + _0x2986dd(565) + _0x2986dd(489) + _0x2986dd(573) + _0x2986dd(523) + _0x2986dd(696) + _0x2986dd(476) + _0x2986dd(502) + _0x2986dd(466) + _0x2986dd(534) + _0x2986dd(658) + _0x2986dd(628) + _0x2986dd(603) + _0x2986dd(698) + _0x2986dd(631) + _0x2986dd(473) + _0x2986dd(613) + _0x2986dd(702) + _0x2986dd(501) + _0x2986dd(527) + _0x2986dd(519) + _0x2986dd(606) + _0x2986dd(554) + _0x2986dd(614) + _0x2986dd(690) + _0x2986dd(700) + _0x2986dd(660) + _0x2986dd(560) + _0x2986dd(643) + _0x2986dd(625) + _0x2986dd(679) + _0x2986dd(649) + _0x2986dd(624) + _0x2986dd(473) + _0x2986dd(609) + _0x2986dd(559);
  _0x1ea448[_0x2986dd(497)](_0x363a58, "en") ? _0x113421[_0x2986dd(526)] = _0x4bc4e1 : _0x113421[_0x2986dd(526)] = _0xefa4e1;
}
