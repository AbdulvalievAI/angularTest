interface IUser {
  id: string;
  name: string;
  age: string;
  group: string;
}
interface IGroupsUsers {
  [key: string]: Array<IUser['id']>;
}

const data: Array<IUser> = [
  {
    id: '1234',
    name: 'Ivanov V',
    age: '18',
    group: 'first',
  },
  {
    id: 'asd233',
    name: 'Petrov C',
    age: '20',
    group: 'second',
  },
  {
    id: 'ew112',
    name: 'Semenov Z',
    age: '19',
    group: 'first',
  },
  {
    id: 'g2rhq3',
    name: 'Semenov D',
    age: '19',
    group: 'three',
  },
  {
    id: '9fg64',
    name: 'Semenov S',
    age: '19',
    group: 'three',
  },
];
const groupUsers = data.reduce((previousValue, currentValue): IGroupsUsers => {
  const result = previousValue;
  if (!previousValue[currentValue.group]) {
    previousValue[currentValue.group] = [];
  }
  result[currentValue.group].push(currentValue.id);
  return result;
}, {} as IGroupsUsers);
console.log('groupUsers', groupUsers);
// Результат
// groupUsers {
//   first: [ '1234', 'ew112' ],
//     second: [ 'asd233' ],
//     three: [ 'g2rhq3', '9fg64' ]
// }
