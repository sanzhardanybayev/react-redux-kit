import React from 'react';

const styles = require('./styles.scss');


class toTopButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: '',
      activeClass: styles.activeTopBtn,
      timeOut: null
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
  }

  scrollToTop() {
    if (!(window.pageYOffset !== 0 || document.documentElement.scrollTop !== 0)) {
      clearTimeout(this.state.timeOut);
    } else {
      window.scrollBy(0, -50);
      this.setState({ timeOut: setTimeout(this.scrollToTop, 5) });
    }
  }

  handleScroll() {
    if (window.pageYOffset > window.innerHeight) {
      this.setState({ active: this.state.activeClass });
    } else {
      this.setState({ active: '' });
    }
  }


  render() {
    return (
      <div >
        <button className={[styles.toTop, this.state.active].join(' ')} onClick={this.scrollToTop} >
          <span className={styles.arrowUp} />
          <span className={styles.arrowUp} />
        </button >
      </div >
    );
  }
}

export default toTopButton;