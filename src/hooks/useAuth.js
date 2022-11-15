import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const user = Cookies.get("user");

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, [user]);

  return { auth, loading, user };
};
