const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://s1.1zoom.me/big0/544/Model_Makeup_Hat_Glance_Bokeh_594429_1280x854.jpg?fbclid=IwAR1-62cbwwyVo1i0mc-3oX9b8Nac5jWFOHb29UXKA2Sf8BDD9tEYL388mc8',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://trnds.co/wp-content/uploads/2019/10/91db055a9aba0d7f6f08293a75627a60.jpg?fbclid=IwAR16F06Ol1Cr2rDqaxxzIfTU_svO66gklUF4tbLxJwX6wICP4US9H-1eG5s',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://creativepool.com/files/candidate/portfolio/full/1108283.png?fbclid=IwAR0YU1QAtIJHNYstTnjIIYv9-CINWy1rsjUQWZzXmxcvHx7sVDR_Uu19X84',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://img.freepik.com/darmowe-zdjecie/mloda-kobieta-zaklada-okulary-wyglada-na-zdeterminowana_176420-20746.jpg?size=626&ext=jpg&fbclid=IwAR0qf0QGwHR-aC-A6RK19iXvdUSXG-bUlniYj9mD7OY20KslTDmabQmoaMw',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://media.istockphoto.com/photos/the-perfect-outfit-means-a-perfect-day-picture-id890289344?k=6&m=890289344&s=612x612&w=0&h=oury8nRKhxuQa9q3UInH8a4s-nVLqel0gpVr5FRLRZg%3D&fbclid=IwAR1Zl3VZYkCRBiSOg7S018V2cyoMlb6bDPK8gYvpR45SxSEIVEWtwwv1oVc',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
