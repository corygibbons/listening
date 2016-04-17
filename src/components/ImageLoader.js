import React from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgLoaded: this.isImgCached(),
      imgSrc: this.isImgCached() ? this.props.imgSrc : '',
    }
  }

  onImgLoad() {
    this.setState({
      imgLoaded: true,
    });
  }

  isImgCached() {
    const image = new Image();
    image.src = this.props.imgSrc;

    return image.complete;
  }

  isInViewport() {
    var rect = this.el.getBoundingClientRect();
    return (rect.bottom - 60) <= (window.innerHeight || document.documentElement.clientHeight);
  }

  checkVisibility() {
    if(this.isInViewport()) {
      this.setState({
        imgSrc: this.props.imgSrc,
      });
    }
  }

  componentDidMount() {
    if (!this.el) return;

    const onScroll = debounce(() => {
      this.checkVisibility()
    }, 100);

    window.addEventListener('scroll', onScroll);

    this.onUnMount = () => {
      window.removeEventListener('scroll', onScroll);
    }

    onScroll();
  }

  componentWillUnmount() {
    if (this.onUnMount) {
      this.onUnMount();
    }
  }

  render() {
    const classes = classnames('img-loader-container', {
      'no-image': this.props.imgSrc.length === 0,
      'img-loaded': this.state.imgLoaded,
      [this.props.className]: (this.props.className !== undefined),
    })

    return (
      <div className={classes}>
        {this.props.imgSrc.length ? <img className="img-loader-img" src={this.state.imgSrc} onLoad={this.onImgLoad.bind(this)} ref={(el) => this.el = el} /> : null}
        {this.props.children}
      </div>
    );
  }
}

ImageLoader.propTypes = {
  className: React.PropTypes.string,
  imgSrc: React.PropTypes.string.isRequired,
};

export default ImageLoader;
