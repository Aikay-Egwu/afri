export const state = () => ({
  image: {},
  images: [
    {
      id: 1,
      src: require(`~/assets/images/events/img1.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 2,
      src: require(`~/assets/images/events/img2.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 3,
      src: require(`~/assets/images/events/img3.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 4,
      src: require(`~/assets/images/events/img4.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 5,
      src: require(`~/assets/images/events/img5.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 6,
      src: require(`~/assets/images/events/img6.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 7,
      src: require(`~/assets/images/events/img7.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 8,
      src: require(`~/assets/images/events/img8.jpg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    },
    {
      id: 0,
      src: require(`~/assets/images/events/img0.jpeg`),
      title: "Image Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor augue, pulvinar non pharetra in, tincidunt lobortis elit. Quisque vitae augue diam. In ipsum arcu, varius eu velit eget, rhoncus tincidunt sem. Nulla vestibulum erat velit, in tempus nulla aliquam quis. Sed arcu ante, consectetur et mi at, vestibulum bibendum velit. Quisque dictum in orci eget imperdiet. Nulla facilisi. Donec sit amet magna vitae risus bibendum tincidunt"
    }
  ]
})

export const mutations = {
  mImage(state, val) {
    const image  = state.images.find(image => image.id == val)
    state.image = image
  }
}