# wechat-bot-demo

使用步骤非常简单

1. git clone
2. npm install
3. npm run start
4. 终端扫码登录（ps:电脑登录微信客户端会被挤下去）
5. 终端看消息
6. 目前功能，别人对你说ding，你会自动回复dong
7. 可以`wechat-bot.ts`中修改`onMessage`逻辑
    - roomTopic 群名（没有代表是私聊），可是根据room字段是否有判断是否是群聊
    - talkerName 发信人name（群聊中的talker不一定能获取到name）
    - text 发送的内容
