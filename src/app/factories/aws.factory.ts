import { SQS } from "aws-sdk";
import { Agent } from 'http';
import { AwsSqsAdapter } from "../../../src/adapters/queue/awsSqs.adapter";

const awsFactory = () => {
  console.log("REGION: ", process.env.AWS_REGION);
  console.log("Entrou");
  return new AwsSqsAdapter(
    new SQS({
      region: process.env.AWS_REGION,
      httpOptions: {
        connectTimeout: 0,
        agent: new Agent({
          keepAlive: true
        })
      }
    })
  );
};

export { awsFactory };
