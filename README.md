# (UNMAINTAINED) ParaView Glance Cornerstone

This is a repo demonstrating cornerstone integration with ParaView Glance.

See [ParaView Glance](https://github.com/Kitware/pv-web-viewer) for more info
on Glance.

**NOTE**: This repo has reached end of life. It is based on Glance v1, while
development has moved on to Glance v2. This repo is preserved for demonstration
purposes only.

Functionality:

- add cornerstone annotations (ellipse, angle, probe, length)
- view cornerstone annotation state
- slice-based annotations

Limitations:

- no overlay support
- No support for overlaying geometry on 2D views

![cornerstone2](https://user-images.githubusercontent.com/1812167/38758076-635a91fe-3f3d-11e8-886c-069809eaa2c1.gif)

## Building/running

```
# Install prerequsistes
npm install

# Run development server
# You can see the output at http://localhost:9999/
npm run start

# Build project for distribution
npm run build
```
