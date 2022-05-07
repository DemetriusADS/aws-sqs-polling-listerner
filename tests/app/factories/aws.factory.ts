import { SQS } from "aws-sdk";
import { AwsSqsAdapter } from "../../../src/adapters/queue/awsSqs.adapter";

const awsFactory = () => {
  console.log("REGION: ", process.env.AWS_REGION);
  console.log("Entrou");
  return new AwsSqsAdapter(
    new SQS({
      region: "us-east-2",
    })
  );
};

export { awsFactory };
