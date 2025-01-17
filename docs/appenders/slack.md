# Slack Appender

Sends log events to a [slack](https://slack.com) channel.

```bash
npm install --save @tsed/logger-slack
```

## Configuration

* `type` - `slack`
* `options.token` - `string` - your Slack API token (see the slack and slack-node docs)
* `options.channel_id` - `string` - the channel to send log messages
* `options.icon_url` - `string` (optional) - the icon to use for the message
* `options.username` - `string` - the username to display with the message

## Example

```typescript
import {Logger} from "@tsed/logger";
import "@tsed/logger-slack";

const logger = new Logger("loggerName");

logger.appenders.set("stdout", {
  type: "slack",
  level: ["error"],
  options: {
    token: "abc123def",
    channel_id: "prod-alerts",
    username: "our_application"
  }
});
```
