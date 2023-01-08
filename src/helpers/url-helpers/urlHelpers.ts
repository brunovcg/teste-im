const urlHelpers = {
  getEviromentURL() {
    switch (window.location.hostname) {
      case 'investor-machine-front.herokuapp.com': {
        return 'https://investor-machine-back.herokuapp.com';
      }
      case 'investor-machine-front-staging.herokuapp.com': {
        return 'https://investor-machine-back-staging.herokuapp.com';
      }
      case 'investor-machine-front-review.herokuapp.com': {
        return 'https://investor-machine-back-review.herokuapp.com';
      }
      case 'localhost': {
        return 'http://localhost:8080';
      }
      default: {
        return '';
      }
    }
  },
};

export default urlHelpers;
