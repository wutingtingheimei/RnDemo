const userIds: string[] = ['101', '102', '103', '201', '202'];
console.log(userIds[0]);
// 元组
let userInfos: [string, number];
userInfos = ['admin', 100];
console.log(userInfos[0]);
// 枚举
// let type = {
//   '0': '男生',
//   '1': '女生',
// };
// let typeStr = type['0'];
// console.log(typeStr);

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

let gender = Gender.Female;
console.log(gender);

export const add = (x: number, y?: number) => {
  if (y === undefined || y === null) {
    y = 0;
  }
  return x + y;
};

interface User {
  // 只读
  readonly id: number;
  name: string;
  age?: number;
}

export const getUser = (user: User) => {
  console.log(user.name);
  return user.age;
};

getUser({id: 1, name: '张三', age: 20});

interface UseMap {
  [name: string]: User;
}

let use1: User = {
  id: 1,
  name: '张三',
};

let use2: User = {
  id: 1,
  name: '李四',
};
let userMap: UseMap = {
  [use1.id]: use1,
  [use2.id]: use2,
};
console.log(userMap[use1.id]);

// 泛型
