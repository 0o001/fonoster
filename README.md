
# Fonoster: The open-source alternative to Twilio

[Fonoster Inc](https://fonoster.com) researches an innovative Programmable Telecommunications Stack that will allow for an entirely cloud-based utility for businesses to connect telephony services with the Internet.

<br />

<a href="https://gitpod.io/#https://github.com/fonoster/fonoster/tree/0.4"> <img src="https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod" alt="Contribute with Gitpod" />
</a> [![Discord](https://img.shields.io/discord/1016419835455996076?color=5865F2&label=Discord&logo=discord&logoColor=white)](https://discord.gg/mpWSRUhG7e) <a href="https://github.com/fonoster/fonoster/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Code%20of%20Conduct-v1.0-ff69b4.svg?color=%2347b96d" alt="Code Of Conduct"></a> ![GitHub](https://img.shields.io/github/license/fonoster/fonoster?color=%2347b96d) ![Twitter Follow](https://img.shields.io/twitter/follow/fonoster?style=social)

## Features

The most notable features on FN 0.3 are:

- [x] Cloud initialization with Cloud-Init
- [x] Multitenancy
- [x] Easy deployment of PBXs functionalities
- [x] Programmable Voice Applications
- [x] NodeJS SDK
- [x] Web SDK
- [x] Support for Amazon Simple Storage Service (S3)
- [x] Secure API endpoints with Let's Encrypt
- [x] Authentication with OAuth2
- [X] Authentication with JWT 
- [x] Role-Based Access Control (RBAC)
- [x] Plugins-based Command-line Tool
- [x] Support for Google Speech API
- [x] Experimental support for Cloud Functions
- [x] Experimental support for Secret management

## Code Examples

A Voice Application is a server that takes control of the flow in a call. A Voice Application can use any combination of the following verbs:

- `Answer` - Accepts an incoming call
- `Hangup` - Closes the call
- `Play` - Takes an URL or file and streams the sound back to the calling party
- `Say` - Takes a text, synthesizes the text into audio, and streams back the result
- `Gather` - Waits for DTMF or speech events and returns back the result
- `SGather` - Returns a stream for future DTMF and speech results
- `Dial` - Passes the call to an Agent or a Number at the PSTN
- `Record` - It records the voice of the calling party and saves the audio on the Storage sub-system
- `Mute` - It tells the channel to stop sending media, effectively muting the channel
- `Unmute` - It tells the channel to allow media flow

Voice Application Example:

```typescript
const { VoiceServer } = require("@fonoster/voice");

const serverConfig = {
  pathToFiles: `${process.cwd()}/sounds`,
};

new VoiceServer(serverConfig).listen(
  async (req, res) => {
    console.log(req);
    await res.answer();
    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);
    await res.hangup();
  }
);

// your app will live at http://127.0.0.1:3000 
// and you can easily publish it to the Internet with:
// ngrok http 3000
```

Everything in FN is an API first, and initiating a call is no exception. You can use the SDK to start a call with a few lines of code.

Example of originating a call with the SDK:

```typescript
const Fonoster = require("@fonoster/sdk");
const callManager = new Fonoster.CallManager();

callManager.call({
 from: "9842753574",
 to: "17853178070",
 webhook: "https://5a2d2ea5d84d.ngrok.io/voiceapp"
})
 .then(console.log)
 .catch(console.error);
```

## Deployment

### Instant Server deployment with Docker and Compose

For a quick demo of Fonoster, run the following command:

```
git clone https://github.com/fonoster/fonoster
docker-compose up 
```

### Deploying in development mode with Gitpod

Routr's one-click interactive deployment will familiarize you with the server in development mode.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fonoster/fonoster/tree/0.4)

To connect to your instance, follow these steps:

First, add your public SSH-keys to your Gitpod account by going to [Gitpod account keys](https://gitpod.io/user/keys) and adding your public key.

Next, find your [Gitpod workspace](https://gitpod.io/workspaces) and click on the "More" button. Then, select "Connect via SSH."

Finally, copy the SSH Command and run it in your terminal by pasting it and pressing Enter. The command should look like this:

```bash
ssh -L 5060:localhost:5060 <workspace-ssh-connection>
```

Replace <workspace-ssh-connection> with your own workspace SSH connection.

For example, your command might look like this:

```bash
ssh -L 5060:localhost:5060 fonoster-mn8nsx0d9px@fonoster-mn8nsx0d9px.ssh.ws-us90.gitpod.io
```

This command forwards traffic from your local port 5060 to your Gitpod workspace's port 5060, allowing you to access your instance.

### Kubernetes

Deploying Routr in Kubernetes is coming soon.

## Getting Started

To get started with FN use the following resources:

- [Deploying Fonoster to the Cloud](./docs/operator/deploy-your-server.md)
- [Getting started with Fonoster](https://learn.fonoster.com/)
- [Connecting Fonoster with Dialogflow](https://learn.fonoster.com/docs/tutorials/connecting_with_dialogflow)
- [Using Google Speech APIs](https://learn.fonoster.com/docs/tutorials/using_google_speech)
- [How we created an open-source alternative to Twilio and why it matters](https://github.com/fonoster/blog/blob/main/2021/001/post.md)

## Give a Star! ⭐

If you like this project or plan to use it in the future, please give it a star. Thanks 🙏

## Bugs and Feedback

For bugs, questions, and discussions, please use the [Github Issues](https://github.com/fonoster/fonoster/issues)

## Contributing

For contributing, please see the following links:

 - [Contribution Documents](https://github.com/fonoster/fonoster/blob/main/CONTRIBUTING.md)
 - [Contributors](https://github.com/fonoster/fonoster/contributors)

**Sponsors**

We're glad to be supported by respected companies and individuals from several industries.

<a href="https://github.com/sponsors/fonoster"><img src="https://www.camanio.com/en/wp-content/uploads/sites/11/2018/09/camanio-carerund-cclogga-transparent.png" height="50"/></a>

Find all our supporters [here](https://github.com/sponsors/fonoster)

> [Become a Github Sponsor](https://github.com/sponsors/fonoster)

## Authors
 - [Pedro Sanders](https://github.com/psanders)

## License
Copyright (C) 2022 by [Fonoster Inc](https://fonoster.com). MIT License (see [LICENSE](https://github.com/fonoster/fonoster/blob/main/LICENSE) for details).

