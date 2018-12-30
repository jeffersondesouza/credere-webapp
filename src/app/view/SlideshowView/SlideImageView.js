const SlideImageView = (() => {

  function build(slide) {
    const img = DomElement({
      tag: 'img',
      attributes: {
        class: "slideshow__figure-img",
        src: slide.src
      },
    });

    return DomElement({
      tag: 'figure',
      content: img,
      attributes: {
        class: "slideshow__figure",
      },
    });
  }


  return { build }
})(); 