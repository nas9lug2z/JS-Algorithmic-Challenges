function dutyFree(normPrice, discount, hol){
  let savings = normPrice * (discount * 0.01);
  return Math.floor(hol / savings);
}

dutyFree(24, 35, 3000)
