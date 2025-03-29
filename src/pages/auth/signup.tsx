import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { signupValidationSchema } from "../../utils/validation";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleSignup = (values: any) => {
    if (signup(values.username, values.email, values.password)) {
      navigate("/");
    } else {
      alert("User already exists!");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ username:"", email: "", password: "", }}
          validationSchema={signupValidationSchema}
          onSubmit={(values) => handleSignup(values)}
        >
          {({ handleSubmit }) => (
            <Form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-start text-sm font-medium text-gray-900">Username</label>
                <div className="mt-2">
                  <Field
                    name="username"
                    type="username"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm text-start" />
                </div>
              </div>
              <div>
                <label className="block text-start text-sm font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                  <Field
                    name="email"
                    type="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm text-start" />
                </div>
              </div>
              <div>
                <label className="block text-start text-sm font-medium text-gray-900">Password</label>
                <div className="mt-2">
                  <Field
                    name="password"
                    type="password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm text-start" />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
