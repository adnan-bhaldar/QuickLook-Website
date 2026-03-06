---
title: File Support
description: Complete list of file formats supported by QuickLook natively and via plugins.
---

# File Support

<span class="ql-badge">Features</span>

QuickLook supports over **50 file types natively**, with the plugin ecosystem extending coverage to virtually any format.

## Supported Formats

<FormatTable />

## Plugin-Extended Formats

| Plugin | Formats |
|---|---|
| [QL-Office](https://github.com/QL-Win/QuickLook.Plugin.Office) | `.docx` `.xlsx` `.pptx` `.doc` `.xls` `.ppt` |
| [QL-ePub](https://github.com/QL-Win/QuickLook.Plugin.EPub) | `.epub` |
| [QL-Markdown](https://github.com/QL-Win/QuickLook.Plugin.MarkdownViewer) | `.md` `.mdx` `.markdown` |
| [QL-3D / GLTF](https://github.com/QL-Win/QuickLook.Plugin.GLTFViewer) | `.stl` `.obj` `.gltf` `.glb` |
| [QL-AppxPackage](https://github.com/QL-Win/QuickLook.Plugin.AppxPackage) | `.appx` `.appxbundle` `.msix` |

## Format Not Listed?

If your format isn't listed, you have two options:

1. **Check the Plugin Gallery** — a community plugin may already exist
2. **Build your own plugin** — QuickLook's plugin SDK makes it straightforward

[Browse Plugins →](/features/plugins)

::: tip HEIC Support
HEIC/HEIF images require the **HEIF Image Extensions** codec from the Microsoft Store. QuickLook handles the rendering once the codec is installed.
:::
