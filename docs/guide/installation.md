---
title: Installation
description: Install QuickLook on Windows via Microsoft Store, GitHub, WinGet, Scoop or Chocolatey.
---

# Installation

<span class="ql-badge">Getting Started</span>

## Choose Your Method

<InstallTabs />

## System Requirements

| Requirement          | Minimum                              |
| -------------------- | ------------------------------------ |
| **Operating System** | Windows 10 version 1803 or later     |
| **Architecture**     | x64 or ARM64                         |
| **Disk Space**       | ~20 MB                               |
| **.NET Runtime**     | Bundled — no separate install needed |

## After Installing

Once installed, QuickLook **starts automatically with Windows** and sits in the system tray (near the clock).

**To preview a file:**

1. Open **Windows Explorer**
2. Click any file to select it
3. Press **Space**

Press `Space` again or `Esc` to close the preview. Press `Enter` to open the file normally.

::: tip
QuickLook only activates when Windows Explorer is in focus. It won't intercept Space in other apps, games or text editors.
:::

## Updating

| Method          | Command                                           |
| --------------- | ------------------------------------------------- |
| Microsoft Store | Automatic, or open Store → _Get updates_          |
| WinGet          | `winget upgrade QL-Win.QuickLook`                 |
| Scoop           | `scoop update quicklook`                          |
| GitHub          | Download the latest `.msi` from the Releases page |

## Uninstalling

- **Store version:** Settings → Apps → QuickLook → Uninstall
- **Installer version:** Settings → Apps → QuickLook → Uninstall, or run `winget uninstall QL-Win.QuickLook`
- **Scoop:** `scoop uninstall quicklook`
