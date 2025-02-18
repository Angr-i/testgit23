const salary = 55;

interface UserDate {
  isBirtdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData = '{ "isBirtdayData": true ,"ageData":40,"userNameData":"John"}';

const arr = ['sss', 2, 2];

const userObj: UserDate = JSON.parse(userData);

console.log(userObj);

const isOkay = true;
let movment: boolean | string = false;

if (isOkay) {
  movment = 'moving';
}
