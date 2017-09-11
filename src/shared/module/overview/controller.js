import React, { Component } from 'react';

export default class Controller extends Component {
  // constructor() {
  //
  // }

  render() {
    const img = [
      'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?h=350&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/220118/pexels-photo-220118.jpeg?h=350&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/87646/horsehead-nebula-dark-nebula-constellation-orion-87646.jpeg?h=350&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?h=350&auto=compress&cs=tinysrgb'
    ];
    const list = img.map((item, index) => {
      return <div key={index}><img className="lazyloading" alt={index} data-src={item} style={{ display: 'inline-block', width: '600px', height: '300px' }} /></div>
    })
    return (
      <div ref={wrapper => this.wrapper = wrapper}>
        {list}
      </div>
    )
  }

  componentDidMount() {
    window.onscroll = () => {
      const clientHeight = window.innerHeight;
      const imgs = document.getElementsByClassName('lazyloading');
      for (let i = 0; i < imgs.length; i += 1) {
        const imgTop = imgs[i].getBoundingClientRect().top;// 图片距离顶部高度
        if (clientHeight > imgTop) {
          imgs[i].src = imgs[i].getAttribute('data-src');
          imgs[i].classList.remove('lazyloading');
        }
      }
    };
  }
}
