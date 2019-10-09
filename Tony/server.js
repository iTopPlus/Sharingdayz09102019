(function publishDocument(uploadParam, topicName) {
  const { PubSub } = require("@google-cloud/pubsub");
  const pubsub = new PubSub();
  const data = JSON.stringify(uploadParam);
  const dataBuffer = Buffer.from(data);
  pubsub
    .topic(topicName)
    .publish(dataBuffer)
    .then(messageId => {
      console.log(`Message ${messageId} published.`);
    });
})({ test: "Hello123123", message: "Tonmanna" }, "hell-world");
