export const state = () => ({
  loaded: false,
  cart: [],
  products: [
    {
      slug: 'custom_facemask',
      title: 'Custom Face Mask',
      img: '/images/customfacemask.webp',
      price: 10,
      attributes: ['green', 'blue', 'red'],
      featured: false
    },
    {
      slug: 'round_board_sign',
      title: 'Round Board Sign',
      img: '/images/roundsignboard.webp',
      price: 25,
      attributes: ['green', 'blue', 'red'],
      featured: true
    },
    {
      slug: 'cotton_facemasks',
      title: '100% Cotton Face Masks',
      img: '/images/cottonfacemask.webp',
      price: 10,
      attributes: ['green', 'blue', 'red'],
      featured: true
    },
    {
      slug: 'key_holder',
      title: 'Personalized Key Holder',
      img: '/images/keyholder.webp',
      price: 15,
      attributes: ['green', 'blue', 'red'],
      featured: false
    },
    {
      slug: 'song_box',
      title: 'Wedding Song Shadow Box',
      img: '/images/shadowbox.webp',
      price: 10,
      attributes: ['green', 'blue', 'red'],
      featured: true
      
    },
    {
      slug: 'custom_onesie',
      title: 'Custom Onesie',
      img: '/images/onesie.webp',
      price: 10,
      attributes: ['green', 'blue', 'red'],
      featured: false
    }
  ]
})

export const mutations = {
  loaded(state) {
    state.loaded = true
  },
  addToCart(state, product) {
    state.cart.push(product)
  },
  REMOVE_ITEM(state, index) {
    state.cart.splice(index, 1)
  }
}
export const actions = {
  removeItem(context, index) {
    context.commit("REMOVE_ITEM", index)
  }
}