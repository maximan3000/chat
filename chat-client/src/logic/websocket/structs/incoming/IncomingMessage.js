/**
 * Message gotten from the websocket
 */
class IncomingMessage {
  /**
   * @constructor
   * @param {number} timestamp Timestamp of message creation
   * @param {string} sender Name of user sended the message
   * @param {string} text Content of the message
   * @param {string} id Id of websocket partial in which the message was created
   */
  constructor(timestamp, sender, text, id) {
    this.text = text;
    this.timestamp = timestamp;
    this.sender = sender;
    this.id = id;
  }
}

export default IncomingMessage;
