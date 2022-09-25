const config = {
  SENTRY_DSN: "https://283747b7bf5b49e685258075119b1dcf@o1389703.ingest.sentry.io/6723091",
  STRIPE_KEY: "pk_test_51LbiaOJ6W61oxJw8GS6BniJyKdEhTPsAC74XXLetoPpZH2xuuQGeSsN6KdK51h10ekrDh7ZQbWrxEdNQDo9DgJfb00VY4ygatO",
  MAX_ATTACHMENT_SIZE: 5000000,
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
  };
  
  export default config;