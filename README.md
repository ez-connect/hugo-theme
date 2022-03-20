# Hugo theme

## Getting started

### GNU Make

Windows

```bash
winget install -e GNU.Make
```

Linux

```bash
sudo apt install make
```

### Hugo

Download `hugo extended`: https://github.com/gohugoio/hugo/releases

```bash
curl -L -o C:/Apps/hugo.zip https://github.com/gohugoio/hugo/releases/download/v0.95.0/hugo_extended_0.95.0_Windows-64bit.zip
unzip -d C:/Apps/hugo C:/Apps/hugo.zip
rm C:/Apps/hugo.zip
cmd <<< "mklink C:\Apps\bin\hugo.exe C:\Apps\hugo\hugo.exe"
```

## Development

```bash
make run
make build
```

## HTML/CSS Style Guide

https://home.freemind.vn/document/development/htmlcss-style-guide-24/

## Deploy

### Development

```bash
helm install home freemind/home --version 0.2.2-dev -n dev
k describe pvc home-ssh -n dev
```

### Production

```bash
helm install home freemind/home --version -n prod
```

## Preview

- Development: http://home.freemind.com.vn
- Production: https://home.freemind.vn
