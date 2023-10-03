import { useNavigate } from "@solidjs/router";
import { Button } from "../components/Button";
import { supabase } from "../lib/utils/supabase";

export function Dashboard() {
  const navigate = useNavigate();

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
    } else {
      navigate("/", { replace: true });
    }
  }

  return <Button onClick={logout}>Log out</Button>;
}
