// -----------------------prototype inheritance-----------------------------

var normalHuman = {
  canFly: false,
  canTalk: true,
  canWalk: true,
  haveEmotions: true,
  hasFourLegs: false,
};

var superHuman = {
  canTeleport: true,
  canShootWithFinger: true,
  canRegenerate: true,
};

superHuman.__proto__ = normalHuman;
