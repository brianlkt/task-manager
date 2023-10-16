import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Task } from "./Task";

interface TaskFormProps {
  addTask: (newTask: Task) => void;
  categories: readonly string[];
}

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  dueDate: Yup.date().required("Due date is required"),
  category: Yup.string().required("Category is required"),
});

function TaskForm({ addTask, categories }: TaskFormProps) {
  const initialValues = {
    title: "",
    dueDate: "",
    category: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    addTask({
      id: Math.floor(Math.random() * 1000),
      ...values,
    });
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="mr-3">Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="mb-4">
            <label>Due Date:</label>
            <Field type="date" name="dueDate" />
            <ErrorMessage name="dueDate" component="div" className="error" />
          </div>

          <div className="mb-4">
            <label>Category:</label>
            <Field as="select" name="category">
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" className="error" />
          </div>

          <div className="mb-4 d-flex justify-content-center ">
            <button type="submit" className="btn btn-light">
              Add Task
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TaskForm;
