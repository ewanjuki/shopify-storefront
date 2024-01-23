export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatShopName(name) {
  const names = name.split("-");

  return names.map((name) => capitalizeFirstLetter(name)).join(" ");
}
