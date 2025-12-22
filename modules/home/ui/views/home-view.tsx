"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomeView() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const onSignOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="mt-4">
        <p>Welcome {session.user?.name}</p>
        <Button onClick={onSignOut}>Sign Out</Button>
      </div>
    </div>
  );
}
