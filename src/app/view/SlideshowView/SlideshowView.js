const SlideshowView = (({ selector, data }) => {

  const slideShowParentEl = document.querySelector(selector);

  function buildSlideSelector(id, checked) {
    return DomElement({
      tag: 'input',
      attributes: {
        checked: checked,
        class: "slideshow__check",
        type: "radio",
        name:"radio",
        id: id
      },
    });
  }

  function buildSlideShow() {

    data.forEach((slide, i, datataArr) => {

      const inputId = i+1;
      slideShowParentEl.appendChild(buildSlideSelector(inputId, slide.id === 1));

      slideShowParentEl.appendChild(SlideshowLayout1View.build(slide, i, datataArr.length));

    });
  }

  return {
    buildSlideShow
  };

}); 