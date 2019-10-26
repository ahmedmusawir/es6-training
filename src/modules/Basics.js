/**This is a Basic Module */
const Basics = () => {
  let score = '100';
  score = Number(score);
  console.log(`The type of score is ${typeof score}`);

  let email = 'moose@cyberize.com';
  console.log(email);

  /**String Concat */
  let firstName = 'Bibo';
  let lastName = 'Bachcha';

  makeFullName(firstName, lastName);

  /**String Play */
  stringPlay(email);

  /**Array Play */
  let strArray = ['Angular', 'Vue', 'React'];
  let numArray = [10, 20, 30, 40, 50];

  arrayPlay(strArray, numArray);
};

const makeFullName = (fName, lName) => {
  const fullName = 'Mrs. ' + fName + ' ' + lName;
  console.log(fullName);
  console.log(fullName.toLowerCase());
  console.log(fullName.toUpperCase());
  console.log(fullName.length + ' Chars Long!');
};

const stringPlay = (email) => {
  /**Index of */
  let index = email.indexOf('@');
  console.log('The index of @ is: ', index);

  let para =
    'Lorem ipsum Dolor sit amet, consectetur adipisicing elit. Ea neque quod quasi dolor nam beatae fugit cupiditate soluta tempore ducimus, reiciendis labore sed quaerat ipsum dicta ab voluptatem suscipit autem dolor Lorem ipsum Dolor sit amet, consectetur adipisicing elit. Ea neque quod quasi dolor nam beatae fugit cupiditate soluta tempore ducimus, reiciendis labore sed quaerat ipsum dicta ab voluptatem suscipit autem Dolor ';

  // let result = email.slice(6, 18);
  // let result = email.substr(6, 17);
  // let result = email.replace('moose', 'The.Madness');
  // let result = para.replace('dolor', 'The.Madness');
  // let result = para.replace(/dolor/g, 'DOLOR');
  // let result = para.replace(/dolor/gi, '[DOLOR]');
  let result = para.replace(/ipsum|dolor|Lorem/gi, (x) => {
    return x.toUpperCase();
  });

  console.log(result);
};

const arrayPlay = (strA, numA) => {
  let strResult = strA.push('BackBone');
  let strResult1 = strA.join('+');
  // let strResult1 = strA.concat();
  let strResult2 = strA.indexOf('React');
  // let numResult = numA.pop();
  console.log(strA, numA);
  // console.log(`Just popped out ${numResult}`);
  // console.log(`New Text Array String:  ${strResult1}`);
  // console.log(`Index of React is:  ${strResult2}`);

  strA.forEach((framework, index) => {
    console.log(`${index} is ${framework}`);
  });

  strA.forEach(logFramework);

  let i = 0;
  console.log(numA.length);
  while (i < numA.length) {
    console.log(`Number is ${i}`);
    i++;
  }
};

const logFramework = (frmwrk) => {
  console.log(`Hello ${frmwrk} Framework!`);
};

export default Basics;
