let openHoleDiameter = prompt("what is the open hole diameter in inches");
let openHoleLength = prompt("what is the open hole length in feet");
let casedHoleDiameter = prompt("what is the cased hole diameter in inches");
let casedHoleLength = prompt("what is the length of cased hole in feet");
let drillStringDiameter = prompt("What is the diameter of the drill string");
let drillStringLength = prompt("What is the length of the drillstring");
let bhaDiameter = prompt("What is the diameter of the BHA");
let bhaLength = prompt("what is the length of the BHA");
let openHoleVolume;
let casedHoleVolume;
let drillStringVolume;
let bhaVolume;


console.log(openHoleDiameter, openHoleLength, casedHoleDiameter, casedHoleLength);

function volumeOpenHole(openHoleDiameter, openHoleLength) {
  openHoleVolume = (((openHoleDiameter * openHoleDiameter) / 1029.4) * openHoleLength);
  return "open hole volume is " + openHoleVolume + " Barrels";
}
console.log(volumeOpenHole(openHoleDiameter, openHoleLength));

function volumeCasedHole(casedHoleDiameter, casedHoleLength) {
  casedHoleVolume = (((casedHoleDiameter * casedHoleDiameter) / 1029.4) * casedHoleLength);
  return "cased hole volume is " + casedHoleVolume + " Barrels";
}
console.log(volumeCasedHole(casedHoleDiameter, casedHoleLength));

function volumeDrillString(drillStringDiameter, drillStringLength) {
  drillStringVolume = (((drillStringDiameter * drillStringDiameter) / 1029.4) * drillStringLength);
  return "drill string volume is " + drillStringVolume + " Barrels";
}
console.log(volumeDrillString(drillStringDiameter, drillStringLength));

function volumeBha(bhaDiameter, bhaLength) {
  bhaVolume = (((bhaDiameter * bhaDiameter) / 1029.4) * bhaLength);
  return "bha volume is " + bhaVolume + " Barrels";
}
console.log(volumeBha(bhaDiameter, bhaLength));

function volumeAnnular(openHoleVolume, casedHoleVolume, drillStringVolume, bhaVolume) {
  let annularVolume = ((openHoleVolume + casedHoleVolume) - (drillStringVolume + bhaVolume));
  return "Annularvolume is " + annularVolume + " Barrels";
}
console.log(volumeAnnular(openHoleVolume, casedHoleVolume, drillStringVolume, bhaVolume));




