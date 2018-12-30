const SlideFooterView = (() => {

  function build(index, totalSliders) {

    const targetFor = (index + 2 < totalSliders)
      ? (index + 2)
      : 1;


    const label = DomElement({
      tag: 'label',
      content: 'Próximo',
      attributes: {
        for: targetFor,
        class: "slideshow__button",
      },
    });


    return DomElement({
      tag: 'footer',
      content: label,
      attributes: {
        class: "slideshow__footer",
      },
    });
  }

  return { build }
})(); 