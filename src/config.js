const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "my-notes-app-upload-service",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://9vvbpxl71j.execute-api.us-east-2.amazonaws.com/dev_API_GATEWAY_URL",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_t3HleakRP",
      APP_CLIENT_ID: "3a6ha30hk3hej8jghvbuo4lua7",
      IDENTITY_POOL_ID: "us-east-2_t3HleakRP",
    },
  };
  
  export default config;