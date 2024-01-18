import FirstComponent, { FifthComponent } from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThridComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

export default function LearningComponents() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThridComponent></ThridComponent>
      <FourthComponent></FourthComponent>
      <FifthComponent></FifthComponent>
    </div>
  );
}
