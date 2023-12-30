import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();

  return <p>Movie ID: {router.query.id}</p>;
}
