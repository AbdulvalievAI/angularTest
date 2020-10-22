/* постичиать сумму count для всех a */
type RoleUser = 'admin' | 'moderator' | 'user';
interface IUser {
  name: string;
  role: RoleUser;
  money: number;
  children?: Array<IUser>;
}

const users: Array<IUser> = [
  {
    name: 'Andrey D.',
    role: 'admin',
    money: 1000,
    children: [
      {
        name: 'Bogdan E.',
        role: 'user',
        money: 550,
      },
      {
        name: 'Vova P.',
        role: 'user',
        money: 550,
        children: [
          {
            name: 'Vadim G.',
            role: 'moderator',
            money: 1000,
          },
          {
            name: 'Viktor G.',
            role: 'moderator',
            money: 1000,
            children: [
              {
                name: 'Katya A.',
                role: 'admin',
                money: 1100,
              },
            ],
          },
        ],
      },
      {
        name: 'Viktor D.',
        role: 'admin',
        money: 1000,
        children: [
          {
            name: 'Katya D.',
            role: 'user',
            money: 1100,
          },
        ],
      },
    ],
  },
  {
    name: 'Vika S.',
    role: 'moderator',
    money: 1000,
    children: [
      {
        name: 'Viktor H.',
        role: 'moderator',
        money: 1000,
      },
      {
        name: 'Katya Z.',
        role: 'user',
        money: 1100,
      },
    ],
  },
  {
    name: 'Nastya T.',
    role: 'user',
    money: 1050,
    children: [
      {
        name: 'Vova S.',
        role: 'user',
        money: 1650,
        children: [
          {
            name: 'Vadim U.',
            role: 'user',
            money: 1200,
          },
          {
            name: 'Viktor I.',
            role: 'admin',
            money: 1300,
            children: [
              {
                name: 'Katya M.',
                role: 'admin',
                money: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Oleg A.',
    role: 'user',
    money: 1000,
    children: [
      {
        name: 'Katya Z.',
        role: 'admin',
        money: 1100,
      },
    ],
  },
  {
    name: 'Karina',
    role: 'moderator',
    money: 1000,
  },
];
// moderator: 5000
// user: 8200
// admin: 5600

const countMoneyUsers = (
  arrayUsers: Array<IUser>,
  roles?: Array<RoleUser>,
  initialValue: number = 0
): number => {
  return arrayUsers.reduce((previousValue, currentValue) => {
    let resultCount = previousValue;
    if (!roles || roles.includes(currentValue.role)) {
      resultCount += currentValue.money;
    }

    if (currentValue.children) {
      resultCount += countMoneyUsers(currentValue.children, roles);
    }
    return resultCount;
  }, initialValue);
};

console.log('================================================');
console.log(
  'resultMoneyRole || moderator',
  countMoneyUsers(users, ['moderator'])
);
console.log(
  'resultMoneyRole || user',
  countMoneyUsers(users, ['user'])
);
console.log(
  'resultMoneyRole || admin',
  countMoneyUsers(users, ['admin'])
);
console.log(
  'resultMoneyRole || admin, moderator',
  countMoneyUsers(users, ['admin', 'moderator'])
);
console.log(
  'resultMoneyRole || all',
  countMoneyUsers(users)
);

// =====================================================================================
// =====================================================================================

/*type objMoney = { ['money']: number };
const myArr: Array<objMoney> = [
  { money: 1000 },
  { money: 1000 },
  { money: 1000 },
  { money: 1000 },
];
const myReduce = <U>(
  arr: Array<U>,
  callBackFn: (previousValue: number, currentValue: U) => number
): number => {
  let result = 0;
  arr.forEach((item) => {
    result = callBackFn(result, item);
  });
  return result;
};

const myReduceResult = myReduce(myArr, (previousValue, currentValue) => {
  return previousValue + currentValue.money;
});
console.log('myReduceResult', myReduceResult);*/

// =====================================================================================
// =====================================================================================

// const countMoneyUser = (user: IUser, role: RoleUser) => {
//
// }

// console.log(countMoneyUsers(users, 'moderator'));

/* Написать функцию reverse
Нельзя использовать строки и приведение к ним, циклы и массивы.
Разрешены только математические операции и рекурсия.
 */
// let reverse;
// alert(reverse(154) === 451, 'expected true');
