const SlideContentView = (() => {

  function build(slide, index, totalSliders) {
    return DomElement({
      tag: 'div',
      content: [slideBody(slide), slideFooter(slide, index, totalSliders)],
      attributes: {
        class: "slideshow__content",
      },
    });
  }

  function slideFooter(index, totalSliders) {
    return SlideFooterView.build(index, totalSliders);
  }

  function slideBody(slide) {
    return DomElement({
      tag: 'div',
      content: [
        slideTitle(slide),
        slideSubTitle(slide),
        ...slide.paragraphs.map(paragraph => slideParagraph(paragraph))
      ],
      attributes: {
        class: "slideshow__body",
      },
    });
  }

  function slideTitle(slide) {
    return DomElement({
      tag: 'h2',
      content: slide.title,
      attributes: {
        class: "slideshow__title",
      },
    });
  }

  function slideSubTitle(slide) {
    return DomElement({
      tag: 'h3',
      content: slide.subtitle,
      attributes: {
        class: "slideshow__subtitle",
      },
    });
  }

  function slideParagraph(paragraph) {
    return DomElement({
      tag: 'p',
      content: paragraph,
      attributes: {
        class: "slideshow__paragraph",
      },
    });
  }



  return { build }
})(); 