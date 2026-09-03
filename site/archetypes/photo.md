---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: ""
# Optional manual fallbacks -- only used if the image in this bundle
# has no readable EXIF data (e.g. it's been stripped, or it's a
# scan/graphic rather than a camera photo).
camera: ""
resolution: ""
exposure: ""
focal_length: ""
fstop: ""
iso: ""
---
