import  "dotenv/config";
import { awsFactory } from "./factories";

const init = () => {
  awsFactory().execute();
};

init();
