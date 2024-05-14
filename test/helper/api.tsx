import { useQuery } from 'react-query';

export function getPost() {
  return useQuery({
    queryKey: 'posts',
    queryFn: fetchPosts,
  });
}

async function fetchPosts() {
  const response = await fetch('http://192.168.2.241:8686/getlistproduct.php');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}
