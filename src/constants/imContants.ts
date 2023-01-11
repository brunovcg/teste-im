const imConstants = {
  httpResponseStatus: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
  },

  enviroments: {
    PRODUCTION: 'production',
    REVIEW: 'Review',
    STAGING: 'Staging',
    DEVLOPMENT: 'Development',
  },
};

export default imConstants;
