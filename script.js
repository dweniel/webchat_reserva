let weni_j = document.createElement("div");
weni_j.id = "wwc";
document.body.appendChild(weni_j);

let weni_s = document.createElement("link");
weni_s.rel = "stylesheet";
weni_s.href = "";
document.head.appendChild(weni_s);

let weni_p = {
  "title": "Reserva",
  "inputTextFieldHint": "Type a message...",
  "showFullScreenButton": false,
  "displayUnreadCount": false,
  "transformURLIntoImages": true,
  "mainColor": "#f20707",
  "profileAvatar": "https://weni-sp-integrations-production.s3.amazonaws.com/apptypes/wwc/0ecbd125-0bc5-4ea2-b257-055a56a2fe54/avatar.png",
  "startFullScreen": true,
  "embedded": false,
  "contactTimeout": 0,
  "openLauncherImage": "https://weni-sp-integrations-production.s3.amazonaws.com/apptypes/wwc/0ecbd125-0bc5-4ea2-b257-055a56a2fe54/avatar.png",
  "selector": "#wwc",
  "customizeWidget": {
    "headerBackgroundColor": "#f20707",
    "launcherColor": "#f20707",
    "userMessageBubbleColor": "#f20707",
    "quickRepliesFontColor": "#f20707",
    "quickRepliesBackgroundColor": "#f2070733",
    "quickRepliesBorderColor": "#f20707"
  },
  "params": {
    "images": {
      "dims": {
        "width": 300,
        "height": 200
      }
    },
    "storage": "session"
  },
  "socketUrl": "https://websocket.weni.ai",
  "host": "https://flows.weni.ai",
  "channelUuid": "81310c47-8520-40bf-a8a2-281bd495b7ba"
};

weni_p["customMessageDelay"] = message => {
    return 1 * 1000;
}

WebChat.default.init(weni_p);