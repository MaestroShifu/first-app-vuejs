import { createStore, ActionTree } from "vuex";

export interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

export interface IStore {
  count: number;
  todoList: ITodo[];
}

const state: IStore = {
  count: 0,
  todoList: [
    { id: "1", text: "...", done: true },
    { id: "2", text: "...", done: false },
  ],
};

const mutations = {
  // Tienen que ser sincronicas
  increment: (state: IStore) => state.count++,
  decrement: (state: IStore) => state.count--,
  addTodo: (state: IStore, payload: ITodo) => state.todoList.push(payload),
};

const getters = {
  getDoneList: (state: IStore) => {
    return state.todoList.filter((todo) => todo.done);
  },
  getCount: (state: IStore) => {
    return state.count;
  },
};

// https://vuex.vuejs.org/guide/actions.html#composing-actions
const actions: ActionTree<IStore, IStore> = {
  addTodoAsync: ({ commit, state }, payload: ITodo) => {
    setTimeout(() => {
      state.todoList.push(payload);
      commit("addTodo");
    }, 1000);
  },
  incrementAsync: ({ commit, state }) => {
    setTimeout(() => {
      state.count++;
      commit("increment");
    }, 1000);
  },
  decrementAsync: ({ commit, state }) => {
    setTimeout(() => {
      state.count--;
      commit("decrement");
    }, 1000);
  },
};

export default createStore<IStore>({
  state, // Manejo del estado global de la aplicacion
  mutations, // Cambios al estado global
  getters, // Nos da unas puertas de acceso a los datos
  actions, // Sirven para realizar operaciones asincronas

  modules: {}, // Sirve para separar el state global
});
