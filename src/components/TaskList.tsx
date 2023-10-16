import "bootstrap/dist/css/bootstrap.css";
import { Task } from "./Task";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <div>No tasks to display.</div>;
  }

  return (
    <div>
      <h2 className="d-flex justify-content-center ">Task List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Due Date</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{new Date(task.dueDate).toDateString()}</td>
              <td>{task.category}</td>
              <td>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
