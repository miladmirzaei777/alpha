import Image from "next/image";
import { createOrUpdateUser } from "@/lib/actions/user";
import { connect } from '@/lib/mongodb/mongoose';
export default async function Home() {
  // const user = await createOrUpdateUser(
  //   "1111121",
  //   "first_name",
  //   "last_name",
  //   "image_url",
  //   "email_addresses"
  // );
  return (
    <>
      Hello world
      
    </>
  );
}
