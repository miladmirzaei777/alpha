import Image from "next/image";
import { createOrUpdateUser } from "@/lib/actions/user";
import { connect } from '@/lib/mongodb/mongoose';
export default async function Home() {

  return (
    <>
      Hello world
      
    </>
  );
}
