import { AWSError, SQS } from "aws-sdk";
import { Consumer } from 'sqs-consumer'

export class AwsSqsAdapter {
  constructor(private awsConfigs: SQS) {}

  execute() {
    console.log("LISTENING...");
    Consumer.create({
      queueUrl: String(process.env.AWS_QUEUE_URL),
      sqs: this.awsConfigs,
      handleMessage: async message => {
        console.log(message)
      }
    }).start()
  }

  callback(error: AWSError, data: SQS.ReceiveMessageResult) {
    if (data?.Messages && data.Messages.length > 0) {
      const [message] = data.Messages as Array<any>;
      console.log(message);
    }
    if (error) {
      console.error(error);
    }
  }
}
