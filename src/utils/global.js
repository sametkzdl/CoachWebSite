export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  tabletL: 960,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  tabletL: `(max-width: ${size.tabletL}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
};

export const theme = {
  primary: "rgb(41, 131, 221)",
  secondary: "rgb(98, 58, 234)",
  darkBlue: "rgb(34, 32, 129)",
  dark: "rgb(0, 0, 0)",
  lightBlue: "rgb(1, 194, 204)",
};

export const leftDays = () => {
  const dateFormat = new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  let formattedDay = dateFormat
    .format(new Date())
    .replaceAll(".", "/")
    .toString();
  let [day, month, year] = formattedDay.split("/");
  let currentDay = new Date(`${year}-${month}-${day}`);
  let expireDate = new Date("2025-06-21");
  const leftDays = Math.round(
    (expireDate.getTime() - currentDay.getTime()) / (1000 * 3600 * 24)
  );
  return leftDays;
};
