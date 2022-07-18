import TodoCard from "./components/TodoCard";

function App() {
  return (
    <div>
      <h1>My todo card</h1>
      <TodoCard title = "Work" />
      <TodoCard title = "Learning" />
      <TodoCard title = "Watching movie" />
      <TodoCard title = "sport" />
      <TodoCard title = "Reading" />
      <TodoCard title = "Game" />
    </div>
  );
}

export default App;
