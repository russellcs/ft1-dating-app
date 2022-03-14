import { users, messages } from "./mock";
import Interface from "./components/Interface";

const App = () => {
  return (
    <>
      <Interface users={users} messages={messages} />
    </>
  );
};

export default App;
