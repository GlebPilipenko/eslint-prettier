// class Post {
//   static get = async (route: string): Promise<PostsType[]> => {
//     const response: AxiosResponse<PostsType[], string> = await API_CONFIG.get(
//       `${route}`,
//     );
//     const { data: posts } = response;
//
//     return posts;
//   };
//   static post = async () => { ... };
//   static update = async () => { ... };
//   static delete = async () => { ... };
// }
//
// export default Post;
