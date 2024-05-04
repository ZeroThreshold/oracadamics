import AuthButton from "./AuthButton";
import { createClient } from "@/utils/supabase/server";
import OraLogo from "./SupabaseLogo";

const AppHeader = async () => {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white z-20">
      <div className="w-full max-w-6xl flex justify-between items-center p-3 text-sm">
        <OraLogo />
        <div className="flex gap-2">
          <ul className="flex gap-4 items-center ">
            <li>Home</li>
          </ul>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
