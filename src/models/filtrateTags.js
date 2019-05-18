import dataHanlde from "../utils/dataHandle";
import searchTagHanlde from "../utils/searchTagHanlde";

export default {
  namespace: "filtrateTags",

  state: {},

  reducers: {
    getData(state, { data }) {
      return { ...state, discussList: data };
    },
    decreseData(state, { data }) {
      return { ...state, discussList: data };
    },
    getTag(state, { data }) {
      return { ...state, data };
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
    },
    *searchTag(action, { call, put }) {
      let data = yield call(searchTagHanlde, action.payload);
      yield put({ type: "getTag", data });
    }
  }
};
