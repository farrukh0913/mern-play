import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const ContextComponent = ({ children }) => {
  const [user, setUser] = useState(null);

  const [bool, setBool] = useState(false);
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const toggleBool = () => {
    setBool((prev) => !prev);
  };

  const addItem = () => {
    if (!value.trim()) return;

    setList((prev) => [
      ...prev,
      {
        id: Date.now(),
        value,
      },
    ]);

    setValue("");
  };

  const removeItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setUser({
      name: "John Doe",
      email: "V7B2V@example.com",
    });
  }, []);

  const contextValue = {
    user,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextComponent;