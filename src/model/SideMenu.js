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
   
  },
  reducers: {
    onDidGet(state) {
      const couter=parseInt(state.couter)+1;
      const nextId=parseInt(state.couter)+1;
      const nextData = [...state.data,{id:nextId,'name':'ljl'}];
      return {
        data: nextData,
        couter:couter
      };
     
    }
  },
}
