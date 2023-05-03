# [WIP] ChromeOS Desktop
## A project bringing Windows-like desktop experience to ChromeOS

### Note: This project is still developing, it might not be stable enough

## If you want to try it out...
- Install dependencies on your Linux VM:
```shell
sudo apt install nodejs npm libnss3
```

- Download [archive](https://github.com/supechicken/ChromeOS-Desktop/archive/refs/heads/main.zip) of this repository
- Install necessary Node modules:
```shell
cd <the root of this repository>
npm install --save-dev ws
npm install --save-dev electron
```

- Run `npm start` on the root of this repository
- Create a new virtual desktop, drag the overlay window into it
- Sideload the integration extension (located in `/chrome_extension`) (see [here](https://github.com/supechicken/ChromeOS-LivePaper#installation) for a detailed instructions)
- Switch to the virtual desktop created previously and try it out

## How it works?
- A transparent overlay created using Electron, with shortcuts and widgets on top
- Communicate with the integration extension in order to launch built-in apps (like `Files` and `Settings`)
- WIP...
