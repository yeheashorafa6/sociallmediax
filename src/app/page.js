import Feed from "@/components/Feed/Feed";
import Nav from "@/components/Nav/Nav";
import Share from "@/components/Share/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Share/>
      <Feed/>
    </div>
  );
}
