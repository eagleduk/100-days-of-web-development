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
      isLoading: false,
    };
  },

  /**
   *      Vue JS 객체가 생성되고 나서 실행
   */
  created() {},

  /**
   *      Vue JS 가 마운트 되고 나서 실행
   * @returns
   */
  async mounted() {
    let response;
    isLoading = true;

    try {
      response = await fetch("http://localhost:3000/todos");
    } catch (error) {
      alert("Something went wrong!");
      return;
    } finally {
      isLoading = false;
    }

    if (!response.ok) {
      alert("Something went wrong!");
      return;
    }

    const responseData = await response.json();
    this.todos = responseData.todos;
  },

  /**
   *    DOM 이벤트에 사용할 Event 작성
   */
  methods: {
    async submit(event) {
      event.preventDefault();
      if (this.id) {
        const id = this.id;
        const text = this.text;

        let response;

        try {
          response = await fetch("http://localhost:3000/todos/" + this.id, {
            method: "PATCH",
            body: JSON.stringify({
              text: this.text,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          alert("Something went wrong!");
          return;
        }

        if (!response.ok) {
          alert("Something went wrong!");
          return;
        }

        this.todos = this.todos.map((todo) =>
          todo._id === id ? { _id: id, text } : todo
        );
      } else {
        let response;

        try {
          response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              text: this.text,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (error) {
          alert("Something went wrong!");
          return;
        }

        if (!response.ok) {
          alert("Something went wrong!");
          return;
        }

        const responseData = await response.json();
        const todoId = responseData.todo.id;

        this.todos.push({
          text: this.text,
          _id: todoId,
        });
      }
      this.text = "";
    },
    editItem(id) {
      this.id = id;
      this.text = this.todos.find((todo) => todo._id === id).text;
    },
    async deleteItem(id) {
      console.log(id);
      let response;

      try {
        response = await fetch("http://localhost:3000/todos/" + id, {
          method: "DELETE",
        });
      } catch (error) {
        alert("Something went wrong!");
        return;
      }

      if (!response.ok) {
        alert("Something went wrong!");
        return;
      }

      this.todos = this.todos.filter((todo) => todo._id !== id);
    },
  },
}).mount("#app");
