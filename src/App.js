import { useForm } from "react-hook-form";
import Input from "./components/Input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function App() {

  const schema = yup.object({
    username: yup.string().required("Username is required"),
    phoneNum: yup.string().required().matches(/^(0|91)?[6-9][0-9]{9}$/, "Phone Number is not valid"),
    emailId: yup.string().required("Email is required").email("Email is not valid"),
    password: yup.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Password must match"),

  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <p>Please create a account to get in our system. Thank you!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="User Name" id="username" type="text" placeholder="User Name" register={{ ...register("username") }} errorMessage={errors.username?.message} />
        <Input label="Phone Number" id="phoneNum" type="text" placeholder="Phone Number" register={{ ...register("phoneNum") }} errorMessage={errors.phoneNum?.message} />
        <Input label="Email" id="emailId" type="email" placeholder="Enter Email" register={{ ...register("emailId") }} errorMessage={errors.emailId?.message} />
        <Input label="Password" id="password" type="password" placeholder="Enter Password" register={{ ...register("password") }} errorMessage={errors.password?.message} />
        <Input label="Confirm Password" id="confirmPassword" type="password" placeholder="Confirm Password" register={{ ...register("confirmPassword") }} errorMessage={errors.confirmPassword?.message} />
        <button>Sign Up</button>
      </form>

    </div>
  );
}

export default App;
