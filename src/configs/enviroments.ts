import imConstants from '@/constants/imContants';

const { PRODUCTION, DEVLOPMENT, REVIEW, STAGING } = imConstants.enviroments;

export default function getEnviroment() {
  switch (window.location.hostname) {
    case 'investor-machine-front.herokuapp.com': {
      return { name: PRODUCTION, backendURL: 'https://investor-machine-back.herokuapp.com' };
    }
    case 'investor-machine-front-staging.herokuapp.com': {
      return { name: STAGING, backendURL: 'https://investor-machine-back-staging.herokuapp.com' };
    }
    case 'investor-machine-front-review.herokuapp.com': {
      return { name: REVIEW, backendURL: 'https://investor-machine-back-review.herokuapp.com' };
    }
    case 'localhost': {
      return { name: DEVLOPMENT, backendURL: 'http://localhost:8080' };
    }
    default: {
      return { name: undefined, backendURL: '' };
    }
  }
}
