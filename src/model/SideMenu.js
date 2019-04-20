import request from '../util/request';

export default {
 namespace: 'SideMenu',
  state: {
    data: [
      {
        name:'hello',
      },
      {
        name:'word',
      },
    ],
    counter: 100,
  },
   effects: { 
   // 定义 effects 成员
    'onDidGet': function*() {}
  },
  reducers: {
    onDidGet(state) {
      const nextData = [...state.data,{name:'new'}];
      console.log(nextData);
      return {
        data: nextData
      };
     
    }
  },
}