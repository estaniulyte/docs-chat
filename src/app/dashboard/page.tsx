import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/server';
import { redirect } from 'next/navigation';

const Page = async () => {
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  console.log(user.email);

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard');

  return <div>{user.email}</div>;
};

export default Page;
