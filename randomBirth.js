function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getRandomDateOfBirth() {
  const randomYear = getRandomInt(1960, 2002);
  const randomMonth = getRandomInt(1, 12);

  let maxDay = 31;
  if (randomMonth === 2) {
    // 2월인 경우 윤년을 고려하여 일수 결정
    maxDay = isLeapYear(randomYear) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(randomMonth)) {
    // 4, 6, 9, 11월인 경우 30일까지 있음
    maxDay = 30;
  }

  const randomDay = getRandomInt(1, maxDay);

  // 월과 일에 앞에 0을 추가하지 않고 그대로 반환
  const dateOfBirth = `${randomYear}-${randomMonth}-${randomDay}`;
  return dateOfBirth;
}
