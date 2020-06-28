function whichQuarter(num) {
  if (num > 0 && num <= 3) {
    return 1;
  }
  else if (num >= 4 && num <= 6) {
    return 2;
  }
  else if (num >= 7 && num <= 9) {
    return 3;
  }
  else if (num >= 10 && num <= 12) {
    return 4;
  }
}

whichQuarter(2)
