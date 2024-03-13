import Realm from 'realm';
console.log(Realm.defaultPath);
// 定义模型
const CarSchema = {
  name: 'Car',
  properties: {
    make: 'string',
    model: 'string',
    year: 'int',
  },
};

// 创建 Realm 数据库实例
const realm = new Realm({schema: [CarSchema]});
export default realm;
