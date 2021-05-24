const USregex = /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/g;

const telephoneCheck = (num) => {
  if (num.match(USregex)) {
    return true;
  }
  return false;
};

telephoneCheck("555-555-5555");
