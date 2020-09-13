/**
 * Message that is sended from the socket
 */
class OutgoingMessage {
  /**
   * @constructor
   * @param {string} id Id of socket connection in which the message was created
   * @param {string} sender Name of user sended the message
   * @param {number} timestamp Timestamp of message creation
   * @param {string} text Content of the message
   */
  constructor(id, sender, timestamp, text) {
    this.id = id;
    this.sender = sender;
    this.timestamp = timestamp;
    this.text = text;
  }
}

module.exports = OutgoingMessage;
