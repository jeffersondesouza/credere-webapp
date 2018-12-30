const SlideshowLayout1View = (() => {

  function slideFigure(slide) {
    return SlideImageView.build(slide);
  }


  function slideContent(slide, index, totalSliders) {
    return SlideContentView.build(slide, index, totalSliders);
  }

  function build(slide, index, totalSliders) {
    return DomElement({
      tag: 'li',
      content: [
        slideFigure(slide), slideContent(slide, index, totalSliders),
      ],
      attributes: {
        class: `slideshow__layout--${slide.layout}`,
      },
    });
  }


  return { build }
})(); 