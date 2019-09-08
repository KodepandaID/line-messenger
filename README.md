# Line Messenger API
[![Build Status](https://travis-ci.org/LordAur/line-messenger.svg?branch=master)](https://travis-ci.org/LordAur/line-messenger)
[![Coverage Status](https://coveralls.io/repos/github/LordAur/line-messenger/badge.svg?branch=master)](https://coveralls.io/github/LordAur/line-messenger?branch=master)

This package helps you to build Line Messenger API easier and faster. This packages supports Node.JS version 8 or higher.

This package created by [Yudha Pratama](https://github.com/LordAur) If you found bugs or errors, you can report at Github Issue or send a direct message to my [twitter](https://twitter.com/LordAur).

If you like this project, please support us to give a [Coffee](https://ko-fi.com/kodepandakreasimedia)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T312Z2T)

# Installation
```bash
npm i line-messenger-api
```

# Usage
```js
const Line = require('line-messenger-api').connect({
  client_id: 'your client id',
  client_secret: 'your client secret'
});
```

# API
## OAUTH
### Get channel access token
You can get a channel access token that is valid for 30 days. To get a long-lived a channel access token, use the "Issue" button found on your console.

```js
Line
  .getAccessToken()
  .then((results))
  .catch()
```
The return looks like this:
```json
{
  "access_token":"W1TeHCgfH2Liwa.....",
  "expires_in":2592000,
  "token_type":"Bearer"
}
```

### Revoke channel access token
Revokes a channel access token.

```js
Line
  .revokeAccessToken(accessToken)
  .then()
  .catch()
```

## Message
### Send reply message
Sends a reply message in response to an event from a user, group, or room.

To send reply messages, you must have a reply token. You can get a reply token from Webhook events.

```js
Line
  .replyMessage(accessToken, replyToken, (message) => {
    message.text('Hello!');
  })
  .then()
  .catch(); 
```

### Send push message
Sends a push message to a user, goup, or room at any time.

To send a push message you should use the user id, group id, or room id.

```js
Line
  .sendPushMessage(accessToken, (message) => {
    message.to('user id');
    message.text('Hello!');
  })
  .then()
  .catch();
```

### Send multicast message
Sends push messages to multiple users at any time. Messages cannot be sent to groups or rooms.

```js
Line
  .sendMulticastMessage(accessToken, (message) => {
    message.to(['userid 1', 'userid 2']);
    message.text('Hello!');
  })
  .then()
  .catch();
```

### Send broadcast message
Sends push messages to multiple users at any time.

```js
Line
  .broadcastMessage(accessToken, (message) => {
    message.text('Hello!');
  })
  .then()
  .catch();
```

To send a message, you have several choices according to the content. You can send a text message, sticker, image, video, audio, location, image map, or button quick reply.

This is the available [message objects](#message-object)


## Message Object
### Text Message
```js
message.text('Your text message');
```

### Sticker Message
To send a sticker, you must have a package id and sticker id. You can see the sticker list in this link https://developers.line.biz/media/messaging-api/sticker_list.pdf

```js
message.sticker('sticker package id', 'sticker id');
```

### Image Message
To send an image message, you should use a preview image with a smaller resolution rather than an original image.

Line Messenger requires an https URL link to send an image, video or audio.

```js
message.image('preview image url', 'original image url');
```

### Video Message
To send a video message, you should use a preview image.

Line Messenger requires an https URL link to send an image, video or audio.

```js
message.video('preview image url', 'video url');
```

### Audio Message
To send an audio message, you should use the audio duration in a millisecond.

Line Messenger requires an https URL link to send an image, video or audio.

```js
message.audio('audio url', 60000);
```

### Location Message
To send a location message, you should use 4 arguments like description, address, latitude, and longitude in float type.

```js
message.location('description', 'address', latitude, longitude);
```

### ImageMap
Imagemap messages are messages configured with an image that has multiple tappable areas.

To send an imagemap message you should use image URL and alternate text.

For more information about the specification of images supported by imagemap messages, see [How to configure an image](https://developers.line.biz/en/reference/messaging-api/#base-url).

```js
message.imageMap('image url', 'alternate text', (imageMap) => {
  imageMap.video('video url', 'preview image url', width, height, x_position, y_position);
});
```

The imagemap message has a quick action on tappable areas. You can check the available action object below:

### Video ImageMap Message
```js
imageMap.video('video url', 'preview image url', width, height, x_position, y_position);
```

### External link ImageMap Message
```js
imageMap.externalLink('URL link', 'label text');
```

### Action uri ImageMap Message
```js
imageMap.actionUri('URL link', width, height, x_position, y_position);
```

### Action Message ImageMap
```js
imageMap.actionMessage('label', 'text message', width, height, x_position, y_position);
```

### Quick Reply Message
If you want to send a quick reply button messages, you can use this method.

```js
message.quickReply('Your text message', (reply) => {
  reply.text('label', 'text message');
});
```

You can set up to 13 quick reply buttons to a message of any type.

You can see the action message of a quick reply in this below:

### Postback Quick Reply
```js
reply.postback('label', 'text message', 'url postback event');
```

### Text Quick Reply
```js
reply.text('label', 'text message');
```

### Datetime picker Quick Reply
If you want to send a DateTime picker action, you should use initial date time, minimal date time, maximal date time, and mode.

You can use mode ```date```, ```time```, or ```datetime```.

For the initial date time, minimal, and maximal date time you can see the format in this link https://developers.line.biz/en/reference/messaging-api/#datetime-picker-action

```js
reply.dateTimePicker('label', 'url postback event', initial_datetime, max_datetime, min_datetime, mode);
```

### Camera Quick Reply
```js
reply.camera('label');
```

### Camera Roll Quick Reply
```js
reply.cameraRoll('label');
```

### Location Quick Reply
```js
reply.location('label');
```

### Disabled notification
If you want to send messages without notification, you can use notificationDisabled method

```js
message.notificationDisabled();
```

### Get content message
If you want to get an image, video, and audio data sent by users. You can use this method with message id from messages event. 

```js
Line
  .getContentMessage(accessToken, messageId)
  .then((results))
  .catch()
```

### Get the target limit for additional messages
If you want to get the target limit for additional messages in the current month.

```js
Line
  .getTargetLimit(accessToken)
  .then((results))
  .catch()
```

### Get number of messages sent this month
Gets the number of messages sent in the current month.

```js
Line
  .getQuotaMessage(accessToken)
  .then((results))
  .catch()
```

### Get number of sent reply messages
Gets the number of reply messages sent by the date messages was sent.

```js
Line
  .getReplyMessageConsumption(accessToken)
  .then((results))
  .catch()
```

### Get number of sent push messages
Gets the number of push messages sent by the date messages was sent.

```js
Line
  .getPushMessageConsumption(accessToken)
  .then((results))
  .catch()
```

### Get number of sent multicast messages
Gets the number of multicast messages sent by the date messages was sent.

```js
Line
  .getMulticastMessageConsumption(accessToken)
  .then((results))
  .catch()
```

### Get number of sent broadcast messages
Gets the number of broadcast messages sent by the date messages was sent.

```js
Line
  .getBroadcastMessageConsumption(accessToken)
  .then((results))
  .catch()
```

## Rich Menu
### Create rich menu
To create a rich menu you must upload a rich menu image after the rich menu was created. You can create up to 1000 rich menus for one LINE official account with the Messaging API.

```js
Line
  .createRichMenu(accessToken, (menu) => {
    menu.sizeMenu();
    menu.selectedMenu();
    menu.nameMenu('Rich menu');
    menu.chatbar('Tap to open');
    menu.area(0, 0, 385, 372, (tap) => {
      tap.text('Test 1', 'Test 1');
    });
  })
  .then((results))
  .catch()
```

The createRichMenu method has many objects. You can see this below:

###  Size rich menu
You can use rich menu images with the followong specifications:
* Image ormatL JPEG or PNG
* Image size 2500x1686 or 2500x843 pixels. 2500x843 is set by default.
* Maximum file size: 1MB

```js
menu.sizeMenu(width, height);
```

### Selected rich menu
To display the rich menu by default.

```js
menu.selectedMenu();
```

### Name rich menu
This name value can be used to help manage your rich menus and is not displayed to users.

```js
menu.nameMenu('Write name here');
```

### Chatbar text rich meny
This chatbar text will be displayed to users. You can 
set the value like **Tap to open** or whatever.

```js
menu.chatbar('Tap to open');
```

### Area rich menu
The area is a tappable image which define the coordinates and size. 

You can see this [link](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/) for more information about rich meny tappable area images.

```js
menu.area(x_coordinate, y_coordinate, width, height, (tap) => {
  tap.text('Test 1', 'Test 1');
});
```

The area method used message object callback. You can see the message objects on [message objects](#message-object).

After the rich menu was created you will receive rich menu id.

### Upload rich menu images
Uploads and attaches an image to a rich menu.

You can use rich menu images with the followong specifications:
* Image ormatL JPEG or PNG
* Image size 2500x1686 or 2500x843 pixels. 2500x843 is set by default.
* Maximum file size: 1MB

```js
Line
  .uploadRichMenuImage(accessToken, richMenuId, imagePath)
  .then()
  .catch()
```

### Get rich menu list
Gets a list of all rich menus created by Create rich menu.

```js
Line
  .getRichMenuList(accessToken)
  .then((results))
  .catch()
```

### Get rich menu detail by rich menu id
Gets a specific rich menu by rich menu id.

```js
Line
  .getRichMenu(accessToken, richMenuId)
  .then((results))
  .catch()
```

### Set default rich menu
Sets the default rich menu. The default rich menu is displayed to all users who have added your LINE official account as a friend and are not linked to any per-user rich menu.

```js
Line
  .setDefaultRichMeny(accessToken, richMenuId)
  .then()
  .catch()
```

### Cancel default rich menu
Cancels the default rich menu.

```js
Line
  .cancelDefaultRichMenu(accessToken)
  .then()
  .catch()
```

### Get rich menu from user
Gets an active rich menu from a specific user.

```js
Line
  .getRichMenuUser(accessToken, userId)
  .then((results))
  .catch()
```

### Link rich menu to specific user
Links a rich menu to a user. Only one rich menu can be linked to a user at one time.

```js
Line
  .linkRichMenuToUser(accessToken, userId, richMenuId)
  .then()
  .catch()
```

### Unlink rich menu from specific user
Unlinks a rich menu from specific user.

```js
Line
  .unlinkRichMenuFromUser(accessToken, userId)
  .then()
  .catch()
```

### Link rich menu to many users
Links a rich menu to many users at one time. Only one rich menu can be linked to a user at one time.

```js
Line
  .linkRichMenuToMultipleUser(accessToken, [userId1, userId2], richMenuId)
  .then()
  .catch()
```

### Unlink rich menu from many users
Unlinks a rich meny from many users.

```js
Line
  .unlinkRichMenuFromMultipleUser(accessToken, userId)
  .then()
  .catch()
```

### Delete rich menu
Deletes a rich menu.

```js
Line
  .deleteRichMenu(accessToken, richMenuId)
  .then()
  .catch()
```

## Profile
### Get profile
Gets user profile information.

```js
Line
  .getUserProfile(accessToken, userId)
  .then((results))
  .catch()
```

## Account Link
### Issue link token
Issues a link token used for the [account link](https://developers.line.biz/en/docs/messaging-api/linking-accounts/) feature.

```js
Line
  .getAccountLinkToken(accessToken, userId)
  .then((results))
  .catch()
```
