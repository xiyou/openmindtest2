import dataHanlde from "../utils/dataHandle";

export default {
  namespace: "filtrateTags",

  state: {},

  reducers: {
    getData(state, { data }) {
      return { ...state, discussList: data };
    },
    decreseData(state, { data }) {
      return { ...state, discussList: data };
    }
  },

  effects: {
 
    *addTag(action, { call, put }) {
      let data = yield call(dataHanlde, action.payload, true);
      yield put({ type: "getData", data });
    },
    
    *decreseTag(action, { call, put }) {
      let data = yield call(dataHanlde, action.payload, false);
      yield put({ type: "decreseData", data });
    }
  }
};
