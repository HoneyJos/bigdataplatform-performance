function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(0, characters.length - 1);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export function getRandomHumanReadableEmailId() {
  const usernameLength = getRandomInt(5, 10); // 5자리에서 10자리 사이의 길이로 랜덤 설정
  const randomUsername = generateRandomString(usernameLength); // 랜덤 문자열 생성
  return randomUsername;
}
