import {defineStore} from 'pinia'
 
export const useMasterStore = defineStore('master',{
    state: () => ({
        AllPosts: [ 
        {
            id: 1,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
            Description: "This was my time at bootcamp"
        },
        {
            id: 2,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
            Description: "This was my time at bootcamp"
        },
        {
            id: 3, 
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
            Description: "This was my time at bootcamp"
        },
        {
            id: 4,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
            Description: "This was my time at bootcamp"
        }
    ],

    FooterPhotos: [
        {
            id: 1,
            URL: "https://cf.ltkcdn.net/family/images/orig/264755-2121x1414-group-of-friends.jpg"
        },
        {
            id: 2,
            URL: "https://www.verywellfamily.com/thmb/1KtU8sIs60tWw8gkG1OG4GEB5S4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-479223703-9e3132fa5ee44c12814aa3db16051199.jpg"
        },
        {
            id: 3,
            URL: "https://cf.ltkcdn.net/family/images/orig/264755-2121x1414-group-of-friends.jpg"
        },
        {
            id: 4,
            URL: "https://www.verywellfamily.com/thmb/1KtU8sIs60tWw8gkG1OG4GEB5S4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-479223703-9e3132fa5ee44c12814aa3db16051199.jpg"
        },
        {
            id: 5,
            URL: "https://cf.ltkcdn.net/family/images/orig/264755-2121x1414-group-of-friends.jpg"
        }
        
    ]

    }),
    getters: {
        getFooterURLs(state) {
            return state.AllPosts.map((obj) => obj.PhotoURL)
        }
 
    },

    actions: {

    }
})