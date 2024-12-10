const _0x54057f = _0x3e74;
(function (_0x11ff77, _0x1a0b2e) {
  const _0x46766c = _0x3e74, _0x32ce99 = _0x11ff77();
  while (true) {
    try {
      const _0xe7f8c0 = parseInt(_0x46766c(204)) / 1 + parseInt(_0x46766c(280)) / 2 + parseInt(_0x46766c(340)) / 3 + parseInt(_0x46766c(251)) / 4 + -parseInt(_0x46766c(206)) / 5 * (parseInt(_0x46766c(199)) / 6) + parseInt(_0x46766c(364)) / 7 + -parseInt(_0x46766c(158)) / 8;
      if (_0xe7f8c0 === _0x1a0b2e) break; else _0x32ce99.push(_0x32ce99.shift());
    } catch (_0x37275d) {
      _0x32ce99.push(_0x32ce99.shift());
    }
  }
}(_0x2de9, 334787));
let player;
const scheduleData = {Badminton: [{time: _0x54057f(226), title: _0x54057f(181) + _0x54057f(376) + _0x54057f(243), videoId: _0x54057f(257), date: _0x54057f(400)}, {time: _0x54057f(226), title: _0x54057f(181) + _0x54057f(376) + _0x54057f(191), videoId: _0x54057f(320), date: _0x54057f(400)}, {time: _0x54057f(226), title: _0x54057f(181) + _0x54057f(376) + _0x54057f(196), videoId: _0x54057f(326), date: _0x54057f(400)}, {time: _0x54057f(226), title: _0x54057f(181) + _0x54057f(376) + _0x54057f(213), videoId: _0x54057f(338), date: _0x54057f(400)}, {time: _0x54057f(346), title: _0x54057f(203) + _0x54057f(312) + _0x54057f(390) + _0x54057f(192), videoId: _0x54057f(349), date: _0x54057f(400)}, {time: _0x54057f(346), title: _0x54057f(203) + _0x54057f(312) + _0x54057f(390) + _0x54057f(164), videoId: _0x54057f(166), date: _0x54057f(400)}]};
function loadSchedule() {
  const _0x383961 = _0x54057f, _0x30876e = {wPABl: _0x383961(315), LOaSw: _0x383961(350) + _0x383961(373), wGrKr: _0x383961(317) + "st", OASAH: _0x383961(394), aWpRX: _0x383961(339) + _0x383961(303)}, _0xe4b688 = document[_0x383961(185) + _0x383961(169)](_0x30876e[_0x383961(285)]);
  _0xe4b688[_0x383961(207)] = "";
  for (const _0x5b1883 in scheduleData) {
    const _0x18b032 = document[_0x383961(288) + _0x383961(296)](_0x30876e[_0x383961(254)]), _0x78bdd6 = document[_0x383961(288) + _0x383961(296)]("h3");
    _0x78bdd6[_0x383961(175)][_0x383961(299)](_0x30876e[_0x383961(293)]), _0x78bdd6[_0x383961(375) + "t"] = _0x5b1883, _0x18b032[_0x383961(278) + "d"](_0x78bdd6);
    const _0x1d7696 = document[_0x383961(288) + _0x383961(296)]("ul");
    scheduleData[_0x5b1883][_0x383961(271)](_0x162ec4 => {
      const _0x55ffcd = _0x383961, _0x658766 = document[_0x55ffcd(288) + _0x55ffcd(296)]("li");
      _0x658766[_0x55ffcd(328) + "te"](_0x30876e[_0x55ffcd(228)], _0x162ec4[_0x55ffcd(286)][_0x55ffcd(163) + "e"]()), _0x658766[_0x55ffcd(328) + "te"](_0x30876e[_0x55ffcd(404)], _0x5b1883[_0x55ffcd(163) + "e"]()), _0x658766[_0x55ffcd(207)] = _0x162ec4[_0x55ffcd(186)] + _0x55ffcd(308) + _0x162ec4[_0x55ffcd(286)] + _0x55ffcd(200) + _0x162ec4[_0x55ffcd(160)] + (_0x55ffcd(252) + _0x55ffcd(395) + _0x55ffcd(383) + _0x55ffcd(225) + ": ") + _0x162ec4[_0x55ffcd(300)] + (_0x55ffcd(229) + _0x55ffcd(395) + _0x55ffcd(294) + _0x55ffcd(402) + _0x55ffcd(336) + _0x55ffcd(316) + _0x55ffcd(270) + _0x55ffcd(250)) + _0x162ec4[_0x55ffcd(300)] + (_0x55ffcd(219) + _0x55ffcd(395) + _0x55ffcd(202) + _0x55ffcd(211) + _0x55ffcd(208) + _0x55ffcd(363) + _0x55ffcd(327) + _0x55ffcd(356) + _0x55ffcd(395) + _0x55ffcd(324)), _0x1d7696[_0x55ffcd(278) + "d"](_0x658766);
    }), _0x18b032[_0x383961(278) + "d"](_0x1d7696), _0xe4b688[_0x383961(278) + "d"](_0x18b032);
  }
}
function searchSchedule() {
  const _0x49c036 = _0x54057f, _0x231d8b = {LMOgM: _0x49c036(315), hhkfZ: _0x49c036(350) + _0x49c036(373), acTKi: _0x49c036(353), EQRbG: _0x49c036(306) + "t", VuJKa: _0x49c036(317) + "st"}, _0x59e957 = document[_0x49c036(185) + _0x49c036(169)](_0x231d8b[_0x49c036(396)])[_0x49c036(347)][_0x49c036(163) + "e"](), _0xee053c = document[_0x49c036(185) + _0x49c036(169)](_0x231d8b[_0x49c036(222)]), _0x24225f = _0xee053c[_0x49c036(304) + _0x49c036(323)]("li");
  _0x24225f[_0x49c036(271)](_0x5f01c4 => {
    const _0x3cb26b = _0x49c036, _0xcc6395 = _0x5f01c4[_0x3cb26b(171) + "te"](_0x231d8b[_0x3cb26b(247)]), _0x3b1182 = _0x5f01c4[_0x3cb26b(171) + "te"](_0x231d8b[_0x3cb26b(355)]);
    _0xcc6395[_0x3cb26b(362)](_0x59e957) || _0x3b1182[_0x3cb26b(362)](_0x59e957) ? _0x5f01c4[_0x3cb26b(387)][_0x3cb26b(259)] = "" : _0x5f01c4[_0x3cb26b(387)][_0x3cb26b(259)] = _0x231d8b[_0x3cb26b(378)];
  });
}
function _0x2de9() {
  const _0x4db8f0 = ["BWF World ", "527813dAsHdc", "the video.", "6775ejXCNr", "innerHTML", "as fa-copy", "ydMoP", "ideo ID fo", 'i class="f', "formation.", "- COURT 4", "auto", "copy", "GkQEs", "an visual.", "ong>View t", "')\">\n     ", "error-mess", ".m3u8", "VuJKa", "al acara</", "CCtBc", "n>Video ID", "10:30", "100%", "wPABl", "</span>\n  ", "tombol unt", "     <li><", "vate Dark ", "trong>Acti", "njut.</li>", "strong>Akt", "ng> for vi", "opied to c", "a Mengguna", "DOMContent", "yang sesua", "   <h2>Car", "        </", "- COURT 1", ".v.smtcdns", "lipboard!", "stener", "LMOgM", "https://da", "RKhgH", "ipboard('", "1690992pwdguG", " <br>\n    ", "n to load ", "OASAH", "strong> da", "er Video I", "12020", " copy the ", "display", "WzyGm", "ong>Masukk", "select", "kan Aplika", ".gd/oeye", " Gelap</st", "ial bahasa", "legram</st", "FUowQ", "removeChil", '="copyToCl', "forEach", "><strong>P", "a001a90a8c", "Lihat jadw", "required V", "   <ul>\n  ", "cara menda", "appendChil", "ifkan Mode", "891126yWatkY", "       <li", "k informas", "EBGZf", "clock", "wGrKr", "title", "ElPxY", "createElem", "D</strong>", "strong>Ent", " events.</", "k kenyaman", "aWpRX", "        <b", "iate langu", "ent", "execComman", "ikGCl", "add", "videoId", "rong> untu", "trim", "itle", "querySelec", "abung deng", "searchInpu", "trong> and", " - ", "g></li>\n  ", "toLocaleTi", "deo ID yan", "Tour Final", "meString", "setup", "data-title", 'n" onclick', "scheduleLi", "an untuk a", "PglCc", "19040", "trong>Berg", "Mode</stro", "torAll", " </button>", "Loaded", "17370", "y Video ID", "setAttribu", "al.</stron", "AmYeh", "cintaminto", "body", "<li><stron", "nm.hnyongs", "he appropr", 's="copy-bt', "    <ul>\n ", "17780", "category-t", "1761708CmeNJQ", "DxuDI", "length", "GrRzN", "bEUSY", "i lebih la", "08:30", "value", " the Teleg", "20010", "data-categ", ".net/play1", "   </ul>\n ", "none", "https://12", "hhkfZ", "\n         ", "sual comfo", "        <l", "MTBJh", "an Video I", "ZLuoG", "includes", '"></i> Cop', "121436xKItrn", "or more in", "g>Select t", "    <li><s", "hun.cn/liv", "e/ballbar_", "n salin Vi", "RYJWU", "n App</h2>", "ory", " and click", "textConten", "ters 2024 ", "vlhEb", "acTKi", "aqpaZ", " dan klik ", "tang.</li>", "bqvuB", "      <spa", "LeMBk", "  <li><str", "i><strong>", "style", " the butto", "/strong> f", "s 2024 - C", "textarea", "rt.</li>\n ", "45927f7710", "div", "          ", "EQRbG", "age", "       ", "cRtSq", "11-12-2024", " to Use Pe", "utton clas", "gtkSS", "LOaSw", "li>\n      ", "age tutori", "chedule</s", "minton</h2", "</strong> ", "10281328QEOdnd", "ilih tutor", "date", "ram group<", "nQhIs", "toLowerCas", "OURT 2", "Video ID c", "19740", "xqzZv", "si Pecinta", "ById", "he event s", "getAttribu", ">\n        ", "LqKfn", "an grup Te", "classList", "i.</li>\n  ", "dark-mode", "DcTDP", "r upcoming", "ntent", "Odisha Mas", "g diperluk", "trong>Join", "video.</li", "getElement", "time", "a6ee02e8e6", "block", "tutorialCo", "</li>\n    ", "- COURT 2", "OURT 1", "   <h2>How", "addEventLi", "ul>\n      ", "- COURT 3", "toggle", "player", "1686bRjiOp", " on ", "uk memuat ", "         <"];
  _0x2de9 = function () {
    return _0x4db8f0;
  };
  return _0x2de9();
}
function copyToClipboard(_0x1ca218) {
  const _0x6a2b94 = _0x54057f, _0x779e6c = {vlhEb: _0x6a2b94(391), ZLuoG: _0x6a2b94(215), LqKfn: function (_0x32050a, _0x50b099) {
    return _0x32050a(_0x50b099);
  }, MTBJh: _0x6a2b94(165) + _0x6a2b94(237) + _0x6a2b94(245)}, _0xf1b1a2 = document[_0x6a2b94(288) + _0x6a2b94(296)](_0x779e6c[_0x6a2b94(377)]);
  _0xf1b1a2[_0x6a2b94(347)] = _0x1ca218, document[_0x6a2b94(332)][_0x6a2b94(278) + "d"](_0xf1b1a2), _0xf1b1a2[_0x6a2b94(262)](), document[_0x6a2b94(297) + "d"](_0x779e6c[_0x6a2b94(361)]), document[_0x6a2b94(332)][_0x6a2b94(269) + "d"](_0xf1b1a2), _0x779e6c[_0x6a2b94(173)](alert, _0x779e6c[_0x6a2b94(359)]);
}
document[_0x54057f(194) + _0x54057f(246)](_0x54057f(239) + _0x54057f(325), () => {
  const _0x32afb1 = _0x54057f, _0x3fd828 = {ydMoP: function (_0x114cf5) {
    return _0x114cf5();
  }};
  _0x3fd828[_0x32afb1(209)](loadSchedule);
});
function copyToClipboard(_0x7c6f49) {
  const _0x319273 = _0x54057f, _0x4b95e0 = {ElPxY: _0x319273(391), EBGZf: _0x319273(215), CCtBc: function (_0x4c5b5d, _0x55c8a3) {
    return _0x4c5b5d(_0x55c8a3);
  }, bEUSY: _0x319273(165) + _0x319273(237) + _0x319273(245)}, _0x45090c = document[_0x319273(288) + _0x319273(296)](_0x4b95e0[_0x319273(287)]);
  _0x45090c[_0x319273(347)] = _0x7c6f49, document[_0x319273(332)][_0x319273(278) + "d"](_0x45090c), _0x45090c[_0x319273(262)](), document[_0x319273(297) + "d"](_0x4b95e0[_0x319273(283)]), document[_0x319273(332)][_0x319273(269) + "d"](_0x45090c), _0x4b95e0[_0x319273(224)](alert, _0x4b95e0[_0x319273(344)]);
}
function _0x3e74(_0x43a8f2, _0x2609b5) {
  const _0x1754ba = _0x2de9();
  return _0x3e74 = function (_0x122323, _0x548d18) {
    _0x122323 = _0x122323 - 154;
    let _0x565895 = _0x1754ba[_0x122323];
    return _0x565895;
  }, _0x3e74(_0x43a8f2, _0x2609b5);
}
document[_0x54057f(194) + _0x54057f(246)](_0x54057f(239) + _0x54057f(325), () => {
  const _0xe4589d = _0x54057f, _0x737f4 = {gtkSS: function (_0x2b519b) {
    return _0x2b519b();
  }};
  _0x737f4[_0xe4589d(403)](loadSchedule), _0x737f4[_0xe4589d(403)](startClock);
});
function startClock() {
  const _0x3ba1e8 = _0x54057f, _0x283f83 = {cRtSq: _0x3ba1e8(284), WzyGm: function (_0x20de7e, _0x547015, _0x42ef18) {
    return _0x20de7e(_0x547015, _0x42ef18);
  }}, _0x1a52af = document[_0x3ba1e8(185) + _0x3ba1e8(169)](_0x283f83[_0x3ba1e8(399)]);
  _0x283f83[_0x3ba1e8(260)](setInterval, () => {
    const _0x4745d0 = _0x3ba1e8, _0x359546 = new Date;
    _0x1a52af[_0x4745d0(375) + "t"] = _0x359546[_0x4745d0(310) + _0x4745d0(313)]();
  }, 1e3);
}
function loadPlayer() {
  const _0x33ddc5 = _0x54057f, _0x3ff086 = {aqpaZ: _0x33ddc5(300), nQhIs: function (_0x5eaa85, _0x4cc9ea) {
    return _0x5eaa85(_0x4cc9ea);
  }, ikGCl: function (_0x208fa4, _0x579aec) {
    return _0x208fa4 < _0x579aec;
  }, DcTDP: function (_0x1f6915, _0x34879d) {
    return _0x1f6915 > _0x34879d;
  }, PglCc: _0x33ddc5(220) + _0x33ddc5(397), FUowQ: _0x33ddc5(188), xqzZv: function (_0x140cba, _0x275a8f) {
    return _0x140cba(_0x275a8f);
  }, AmYeh: _0x33ddc5(198), GkQEs: _0x33ddc5(248) + _0x33ddc5(264), DxuDI: _0x33ddc5(227), RYJWU: _0x33ddc5(214), RKhgH: _0x33ddc5(353)}, _0x2075fb = document[_0x33ddc5(185) + _0x33ddc5(169)](_0x3ff086[_0x33ddc5(379)])[_0x33ddc5(347)][_0x33ddc5(302)]();
  if (_0x3ff086[_0x33ddc5(162)](isNaN, _0x2075fb) || _0x3ff086[_0x33ddc5(298)](_0x2075fb[_0x33ddc5(342)], 4) || _0x3ff086[_0x33ddc5(178)](_0x2075fb[_0x33ddc5(342)], 8)) {
    document[_0x33ddc5(185) + _0x33ddc5(169)](_0x3ff086[_0x33ddc5(319)])[_0x33ddc5(387)][_0x33ddc5(259)] = _0x3ff086[_0x33ddc5(268)];
    return;
  }
  _0x3ff086[_0x33ddc5(167)](jwplayer, _0x3ff086[_0x33ddc5(330)])[_0x33ddc5(314)]({file: _0x33ddc5(354) + _0x33ddc5(273) + _0x33ddc5(393) + _0x33ddc5(187) + _0x33ddc5(244) + _0x33ddc5(351) + _0x33ddc5(334) + _0x33ddc5(368) + _0x33ddc5(369) + _0x2075fb + _0x33ddc5(221), image: _0x3ff086[_0x33ddc5(216)], width: _0x3ff086[_0x33ddc5(341)], height: _0x3ff086[_0x33ddc5(371)], autostart: true}), document[_0x33ddc5(185) + _0x33ddc5(169)](_0x3ff086[_0x33ddc5(319)])[_0x33ddc5(387)][_0x33ddc5(259)] = _0x3ff086[_0x33ddc5(249)];
}
function toggleDarkMode() {
  const _0x55f7f6 = _0x54057f, _0x4b703f = {bqvuB: _0x55f7f6(177)};
  document[_0x55f7f6(332)][_0x55f7f6(175)][_0x55f7f6(197)](_0x4b703f[_0x55f7f6(382)]);
}
function showTutorial(_0x1c9d78) {
  const _0x1124ca = _0x54057f, _0x21a93a = {GrRzN: _0x1124ca(189) + _0x1124ca(180), LeMBk: function (_0x46bfd8, _0x42c840) {
    return _0x46bfd8 === _0x42c840;
  }}, _0xde55c3 = document[_0x1124ca(185) + _0x1124ca(169)](_0x21a93a[_0x1124ca(343)]), _0x25c4f4 = _0x1124ca(356) + _0x1124ca(193) + _0x1124ca(401) + _0x1124ca(331) + _0x1124ca(372) + _0x1124ca(356) + _0x1124ca(276) + _0x1124ca(395) + _0x1124ca(367) + _0x1124ca(233) + _0x1124ca(232) + _0x1124ca(322) + _0x1124ca(236) + _0x1124ca(357) + _0x1124ca(392) + _0x1124ca(395) + _0x1124ca(231) + _0x1124ca(290) + _0x1124ca(256) + _0x1124ca(289) + _0x1124ca(374) + _0x1124ca(388) + _0x1124ca(253) + _0x1124ca(205) + _0x1124ca(190) + _0x1124ca(395) + _0x1124ca(385) + _0x1124ca(218) + _0x1124ca(170) + _0x1124ca(155) + _0x1124ca(307) + _0x1124ca(258) + _0x1124ca(275) + _0x1124ca(210) + _0x1124ca(179) + _0x1124ca(291) + _0x1124ca(405) + _0x1124ca(395) + _0x1124ca(333) + _0x1124ca(366) + _0x1124ca(335) + _0x1124ca(295) + _0x1124ca(154) + _0x1124ca(329) + _0x1124ca(309) + _0x1124ca(395) + _0x1124ca(367) + _0x1124ca(183) + _0x1124ca(348) + _0x1124ca(161) + _0x1124ca(389) + _0x1124ca(365) + _0x1124ca(212) + _0x1124ca(190) + _0x1124ca(242) + _0x1124ca(195) + "  ", _0x323bc6 = _0x1124ca(356) + _0x1124ca(241) + _0x1124ca(238) + _0x1124ca(263) + _0x1124ca(168) + _0x1124ca(156) + _0x1124ca(172) + _0x1124ca(337) + _0x1124ca(395) + _0x1124ca(231) + _0x1124ca(235) + _0x1124ca(279) + _0x1124ca(265) + _0x1124ca(301) + _0x1124ca(292) + _0x1124ca(217) + _0x1124ca(190) + _0x1124ca(395) + _0x1124ca(385) + _0x1124ca(261) + _0x1124ca(360) + _0x1124ca(289) + _0x1124ca(380) + _0x1124ca(230) + _0x1124ca(201) + _0x1124ca(184) + _0x1124ca(172) + _0x1124ca(358) + _0x1124ca(386) + _0x1124ca(274) + _0x1124ca(223) + _0x1124ca(255) + _0x1124ca(370) + _0x1124ca(311) + _0x1124ca(182) + _0x1124ca(318) + _0x1124ca(277) + _0x1124ca(381) + _0x1124ca(356) + _0x1124ca(281) + _0x1124ca(272) + _0x1124ca(159) + _0x1124ca(266) + _0x1124ca(157) + _0x1124ca(240) + _0x1124ca(176) + _0x1124ca(395) + _0x1124ca(367) + _0x1124ca(321) + _0x1124ca(305) + _0x1124ca(174) + _0x1124ca(267) + _0x1124ca(301) + _0x1124ca(282) + _0x1124ca(345) + _0x1124ca(234) + _0x1124ca(356) + _0x1124ca(352) + _0x1124ca(398);
  _0x21a93a[_0x1124ca(384)](_0x1c9d78, "en") ? _0xde55c3[_0x1124ca(207)] = _0x25c4f4 : _0xde55c3[_0x1124ca(207)] = _0x323bc6;
}
