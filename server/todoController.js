module.exports = {
  getAllTodos: async (req, res) => {
    const db = req.app.get("db");
    await db
      .read_todos()
      .then((userTodos) => {
        res.status(200).send(userTodos);
      })
      .catch((err) => res.status(500).send(err));
  },
};
