import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      // getStaticPathsの場合は、フィールドの名前に必ずparamsをつける必要がある
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  return post;
}
