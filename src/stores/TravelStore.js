import {defineStore} from 'pinia'
 
export const useTravelStore = defineStore('travel',{
    state: () => ({
        Thumbnails: [ 
        {
            id: 1,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
        },
        {
            id: 2,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
        },
        {
            id: 3, 
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
        },
        {
            id: 4,
            PhotoURL: "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869336.jpg?itok=FG8M8buS",
            Title: "My time at bootcamp",
            PostingDate: "02/19/2023",
        }
    ],

    }),
    getters: {
        getFooterURLs(state) {
            return state.AllPosts.map((obj) => obj.PhotoURL)
        }
 
    },

    actions: {

    }
})