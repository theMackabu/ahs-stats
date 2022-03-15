function _0x5dda(_0xb23466, _0x52e577) {
  var _0x3c9ae2 = _0x3c9a();
  return (
    (_0x5dda = function (_0x5dda57, _0x330e14) {
      _0x5dda57 = _0x5dda57 - 0xfc;
      var _0x3f0f79 = _0x3c9ae2[_0x5dda57];
      return _0x3f0f79;
    }),
    _0x5dda(_0xb23466, _0x52e577)
  );
}
var _0x3d425a = _0x5dda;
function _0x3c9a() {
  var _0x21476e = [
    "indexOf",
    "then",
    "delete",
    "32216nQZvyt",
    "install",
    "addAll",
    "log",
    "3794454pStiEP",
    "2429276nRBoVq",
    "map",
    "activate",
    "7lWGkSs",
    "22wzSISZ",
    "request",
    "open",
    "5127480VfDZmy",
    "3744200impciJ",
    "respondWith",
    "/offline/index.html",
    "153mCNGkf",
    "206175KrbQuv",
    "keys",
    "fetch",
    "match",
    "addEventListener",
    "5948128VtkDzG",
    "waitUntil",
    "all",
    "5vPQIdf",
  ];
  _0x3c9a = function () {
    return _0x21476e;
  };
  return _0x3c9a();
}
(function (_0x38e073, _0x40a6dd) {
  var _0x34b747 = _0x5dda,
    _0x3377d0 = _0x38e073();
  while (!![]) {
    try {
      var _0x47b364 =
        parseInt(_0x34b747(0x117)) / 0x1 +
        (parseInt(_0x34b747(0x106)) / 0x2) * (parseInt(_0x34b747(0x116)) / 0x3) +
        (-parseInt(_0x34b747(0x10b)) / 0x4) * (parseInt(_0x34b747(0x102)) / 0x5) +
        parseInt(_0x34b747(0x10a)) / 0x6 +
        (parseInt(_0x34b747(0x10e)) / 0x7) * (parseInt(_0x34b747(0xff)) / 0x8) +
        -parseInt(_0x34b747(0x112)) / 0x9 +
        (parseInt(_0x34b747(0x113)) / 0xa) * (-parseInt(_0x34b747(0x10f)) / 0xb);
      if (_0x47b364 === _0x40a6dd) break;
      else _0x3377d0["push"](_0x3377d0["shift"]());
    } catch (_0x1cdf6f) {
      _0x3377d0["push"](_0x3377d0["shift"]());
    }
  }
})(_0x3c9a, 0x74a21);
var CACHE_NAME = "ahsPreCalc" + new Date()["getTime"](),
  urlsToCache = [_0x3d425a(0x115)];
self["addEventListener"](_0x3d425a(0x107), (_0x1356f9) => {
  var _0x1bcf47 = _0x3d425a;
  _0x1356f9[_0x1bcf47(0x100)](
    caches[_0x1bcf47(0x111)](CACHE_NAME)["then"](function (_0x2f979b) {
      var _0x59ec98 = _0x1bcf47;
      return console[_0x59ec98(0x109)]("Cache\x20opened"), _0x2f979b[_0x59ec98(0x108)](urlsToCache);
    })
  );
}),
  self["addEventListener"](_0x3d425a(0xfc), (_0x40f7e6) => {
    var _0x46398e = _0x3d425a;
    _0x40f7e6[_0x46398e(0x114)](
      caches[_0x46398e(0xfd)](_0x40f7e6[_0x46398e(0x110)])[_0x46398e(0x104)](function (_0x49a8bb) {
        if (_0x49a8bb) return _0x49a8bb;
        return fetch(_0x40f7e6["request"]);
      })
    );
  }),
  self[_0x3d425a(0xfe)](_0x3d425a(0x10d), (_0x1ceb9f) => {
    var _0x32354b = _0x3d425a,
      _0x17ba92 = [CACHE_NAME];
    _0x1ceb9f[_0x32354b(0x100)](
      caches[_0x32354b(0x118)]()[_0x32354b(0x104)]((_0x351234) => {
        var _0x211f2f = _0x32354b;
        return Promise[_0x211f2f(0x101)](
          _0x351234[_0x211f2f(0x10c)]((_0x20fb30) => {
            var _0x29b468 = _0x211f2f;
            if (_0x17ba92[_0x29b468(0x103)](_0x20fb30) === -0x1) return caches[_0x29b468(0x105)](_0x20fb30);
          })
        );
      })
    );
  });
