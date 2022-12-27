let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi,how are you", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11}
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Hi"},
            {id: 4, message: "Hi"},
            {id: 5, message: "Hi"},
            {id: 6, message: "Hi"}
        ],
        dialogs: [
            {id: 1, name: "Lena"},
            {id: 2, name: "Ann"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Inna"},
            {id: 5, name: "Piggy"},
            {id: 6, name: "Tony"}
        ]
    }
}
export let addPost = (postMessage: string) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}

export default state;