if (typeof require === 'function') {
  require(['WebChat'], (WebChat) => {
      useWebChat(WebChat);
  });
} else if (window.WebChat) {
  useWebChat(window.WebChat);
} else {
  console.error('It was not possible to load WebChat');
}

function useWebChat(WebChat) {
  let weni_j = document.createElement("div");
  weni_j.id = "wwc";
  document.body.appendChild(weni_j);

  let weni_s = document.createElement("link");
  weni_s.rel = "stylesheet";
  weni_s.href = "";
  document.head.appendChild(weni_s);

  let weni_p = {
"title": "Sou R\u00ea",
"tooltipMessage": "Ol\u00e1, sou o R\u00ea, posso te ajudar a encontrar produtos com base no que voc\u00ea precisa, me conta um pouco o que procura?",
"inputTextFieldHint": "Type a message...",
"showFullScreenButton": false,
"displayUnreadCount": false,
"mainColor": "#f20707",
"profileAvatar": "https://weni-sp-integrations-production.s3.amazonaws.com/apptypes/wwc/0ecbd125-0bc5-4ea2-b257-055a56a2fe54/avatar.jpeg",
"startFullScreen": false,
"embedded": false,
"contactTimeout": 0,
"openLauncherImage": "https://weni-sp-integrations-production.s3.amazonaws.com/apptypes/wwc/0ecbd125-0bc5-4ea2-b257-055a56a2fe54/avatar.jpeg",
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
}