const countryFormats = {
  US: {
    code: "1",
    len: 11,
  },
};

const checkBrackets = (nums) => {
  if (nums.match(/[()]/gm) !== null) {
    return true;
  }
  return false;
};

const checkClosedBrackets = (nums) => {
  if (nums.match(/\((?:[^)(]+|(R))*\)/gm) !== null) {
    return true;
  }
  return false;
};

const checkMinusStart = (nums) => {
  if (nums.match(/^\-.*$/gm) !== null) {
    return true;
  }
  return false;
};

const checkCountryCode = (nums, code) => {
  let numCode = nums.substring(0, code.length);

  if (code === numCode) {
    return true;
  }
  return false;
};

const getNumerals = (nums) => nums.match(/\d+/gm).join("");

const telephoneCheck = (number) => {
  if (checkMinusStart(number)) {
    console.log("- instead of + used", false);
    return false;
  }

  if (checkBrackets(number)) {
    if (!checkClosedBrackets(number)) {
      console.log("Not closed brackets", false);
      return false;
    }
  }

  let numOnly = getNumerals(number);

  switch (numOnly.length) {
    case countryFormats.US.len:
      if (checkCountryCode(numOnly, countryFormats.US.code)) {
        console.log("With country code, code correct", true);
        return true;
      }
      console.log("Country code incorrect", false);
      return false;

    case countryFormats.US.len - countryFormats.US.code.length:
      console.log("Format correct, no country code", true);
      return true;

    default:
      console.log("Something went wrong", false);
      return false;
  }
};

telephoneCheck("2 (555)555-5555");
