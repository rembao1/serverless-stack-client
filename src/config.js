export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-rbd"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://zc5b523000.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_RVDG9mS9i",
      APP_CLIENT_ID: "1safntcqjnv5nahj2un11kkg96",
      IDENTITY_POOL_ID: "us-east-1:5c0c1e40-2fcb-4585-a79b-b8cf2477acab"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HCsFZLesJgBqV0P5VEeWipuzcnqs0v7NdQ5KSCnQnJEAewRLExNMM38KSEJigHi29WQqjCsUZAJVhiMJypw2hJM00TPMbFjDy"
  };