import { users, messages } from "./mock";
import Interface from "./components/Interface";

const App = () => {
  //loads of api calls

  return (
    <>
      <Interface users={users} messages={messages} />
    </>
  );
};

export default App;
