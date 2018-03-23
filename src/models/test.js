export default {
  namespace:"test",
  state:[{
ref:"yi",
    title: "It’s so nice to hear from her again. _____, we last met more than thirty years ago.",
    first: "What’s more ",
    second:"That’s to say ",
    third:"In other words ",
    fourth:"Believe it or not ",
    answer:4

  },
    {
      ref:"er",
      title: "2. Lily’s drawing may not be excellent, _________ I know she has done her best.",
      first: "so",
      second:"or",
      third:"for",
      fourth:"but",
      answer:4
    },],
  subscriptions:{

  },
  effects:{

  },
  reducers:{
    add(state,{payload}) {
      // localStorage.setItem('siderFold', !state.siderFold);
      return state.push(payload);
    }
  }
}
