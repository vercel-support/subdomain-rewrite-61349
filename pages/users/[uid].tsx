import { useRouter } from 'next/router';

export default function UserPage() {
  const router = useRouter();
  const { uid } = router.query;

  return <h1>User: {uid}</h1>;
}
