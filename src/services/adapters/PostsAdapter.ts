// Release adapter pattern, (normalize data from API)
// Example one class or some functions/methods

// Sometimes we can get data from server in some structure, for example ({ ... }),
// but for effective rendering you want get ([{ ... }, { ... }]), and backend developer
// leaved from company or back use Java or PHP and you don't know this language.
// You can use adapter pattern, (class with method or some function)...

// It's function get data, updated it, and return, you can think about HOC,
// no problem it's a good analogy, but HOC get component))

//              postsAdapter
// export const normalizePosts = (posts: PostData[]) => {
//   const updatedPosts = ...
//
//   return updatedPosts
// }

// This function usually called in api folder, when we get data from server (some endpoint)
// or if you use SLAP you can call this function in folder services api,
// in some method in class or function, who make all logic api.

// EXAMPLE
// const getCvs = config.get('someEndpoint')
//   .then(({ data }) => normalizePosts(data));

// CONGRATULATION, you have learned a simple (ADAPTER) pattern and can talk about it in interview...
