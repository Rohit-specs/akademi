// "use client"
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/dashboard");
//   }, [router]);

//   return null;
// }
import { redirect } from "next/navigation";

export default function Home() {
  const loggedIn = true;

  if (loggedIn) {
    redirect("/dashboard");
  }

  redirect("/signin");
}