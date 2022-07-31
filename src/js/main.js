import MiniSlider from './modules/slider/slider-mini';
import videoPlayer from './modules/videoPlayer';
import MainSlider from './modules/slider/slider-main';
import Differences from './modules/difference';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', ()=> {
    const slider = new MainSlider({btns : '.next', page: '.page'});
    slider.render();

    const modulePageSlider = new MainSlider({page: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const player = new videoPlayer('.showup .play', '.overlay');
    player.init();

    const showUpSlider = new MiniSlider({
        page: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });

    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        page: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        page: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
        animate: false,
        autoplay: true
    });
    feedSlider.init();

    new Differences('.officerold', '.officernew', '.officer__card-item').init();

    new Form('.form').init();
});