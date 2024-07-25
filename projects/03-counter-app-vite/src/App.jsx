import { FirstComponent } from "./FirstComponent";
import "./styles/style.scss";

const newMessage = () => {
  return "Hello World !!";
};

export const App = () => {
  return (
    <>
      <h1>{newMessage()}</h1>
      <h2>Implementig React App</h2>
      <p>Props desde otro componente: </p>
      <FirstComponent title={"Hello"} subTitle={123}></FirstComponent>
    </>
  );
};
