import puppeteer from 'puppeteer';
import { getRandomDateOfBirth } from './randomBirth.js';
import { getRandomHumanReadableEmailId } from './randomEmail.js';
// [생년,월,일]이 들어간 배열
const randomDateOfBirth = getRandomDateOfBirth().split('-');
const name = '정종헌';
const randomEmail = getRandomHumanReadableEmailId();
const signUpPage =
  'https://accounts.google.com/signup/v2/createaccount?biz=false&cc=KR&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1140732640%3A1691032815366170&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AXo7B7Us3qKf7Y_CKIIbjHLysKgizxHkr8-aywrWvGiwCl92WAsXj6EaEB6M5qHcNJW6c_jnVtf75A';
const nameSelector = '#firstName';
const nameNextSelector = '#collectNameNext > div > button > div.VfPpkd-RLmnJb';
const birthdayYearSelector = '#year';
const birthdayMonthDropdownSelector = '#month';
const birthdayDaySelector = '#day';
const genderDropdownSelector = '#gender';
const birthdayNextSelector =
  '#birthdaygenderNext > div > button > div.VfPpkd-RLmnJb';
const createMyGmailSelector = '#selectionc2';
const mailIdSelector =
  '#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div.akwVEf > div.d2CFce.cDSmF > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
const passwordSelector =
  '#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
const passwordConfirmSelector =
  '#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
const emailNextSelector = '#next > div > button > div.VfPpkd-RLmnJb';
const passwordNextSelector =
  '#createpasswordNext > div > button > div.VfPpkd-RLmnJb';

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  const userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'; // 원하는 사용자 에이전트를 입력

  await page.setUserAgent(userAgent);

  await page.goto(signUpPage);

  await page.waitForSelector(nameSelector);
  await page.type(nameSelector, name);

  await page.click(nameNextSelector);

  await page.waitForTimeout(1000);
  await page.waitForSelector(birthdayYearSelector);
  await page.type(birthdayYearSelector, randomDateOfBirth[0]);

  await page.select(birthdayMonthDropdownSelector, randomDateOfBirth[1]);

  await page.type(birthdayDaySelector, randomDateOfBirth[2]);

  await page.select(genderDropdownSelector, '3');

  await page.click(birthdayNextSelector);

  await page.waitForSelector(createMyGmailSelector);

  await page.waitForTimeout(1000);

  await page.click(createMyGmailSelector);

  await page.type(mailIdSelector, randomEmail);

  await page.click(emailNextSelector);

  await page.waitForSelector(passwordSelector);

  await page.waitForTimeout(1000);

  await page.type(passwordSelector, 'Qwer3!141592');
  await page.type(passwordConfirmSelector, 'Qwer3!141592');

  await page.click(passwordNextSelector);
};

main();
