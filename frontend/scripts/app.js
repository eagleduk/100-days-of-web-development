Vue.createApp({
  /**
   *      DOM 에서 사용될 변수(상태) 지정
   * @returns
   */
  data() {
    return {
      text: "",
      todos: [],
      id: null,
    };
  },
  /**
   *    DOM 이벤트에 사용할 Event 작성
   */
  methods: {
    submit(event) {
      event.preventDefault();
      if (this.id) {
        const id = this.id;
        const text = this.text;
        this.todos = this.todos.map((todo) =>
          todo.id === id ? { id, text } : todo
        );
      } else {
        this.todos.push({
          text: this.text,
          id: Date.now(),
        });
      }
      this.text = "";
    },
    editItem(id) {
      this.id = id;
      this.text = this.todos.find((todo) => todo.id === id).text;
    },
    deleteItem(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
}).mount("#app");
