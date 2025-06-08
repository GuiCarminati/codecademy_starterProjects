function modNoZero(n, p) {
  return (n % p + p) % p || p; // if mod result==0, then last value (e.g., 26%26==0 -> 26, giving a range of 1-26 instead of 0-25)
}

function mod(n, p) {
  return (n % p + p) % p;
}

const res = {mod, modNoZero}
export default res;