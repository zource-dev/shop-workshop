import MainLayout from '@/components/layouts/main';
import { useFetch } from '@/components/hooks/useFetch';

export default function HelloPage() {
  const [response, makeRequest] = useFetch('http://localhost:3000/api/hello');

  const handleClick = () => makeRequest('http://localhost:3000/api/bye');

  return (
    <MainLayout>
      <div>
      {
        response.loading
        ? 'Loading...'
        : (response.error ?? JSON.stringify(response.data))
      }
      </div>
      <button onClick={handleClick}>Bye</button>
    </MainLayout>
  );
}
