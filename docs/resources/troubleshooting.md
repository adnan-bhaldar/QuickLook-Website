---
title: Troubleshooting
description: Fix common issues with QuickLook on Windows.
---

# Troubleshooting

<span class="ql-badge">Resources</span>

## Space key isn't triggering a preview

**Check that QuickLook is running.** Look for its icon in the system tray near the clock. If it's not there, relaunch QuickLook from the Start menu.

**Make sure Windows Explorer is in focus.** QuickLook only activates when a file is selected in Windows Explorer. It won't intercept Space in other applications, text fields, or on the Desktop.

**Check if QuickLook is paused.** Right-click the tray icon — if it shows *Resume*, click it to re-enable.

---

## The preview window doesn't appear

**Try restarting QuickLook.** Right-click the tray icon → Quit, then relaunch from Start.

**Check for conflicting apps.** Some apps (e.g. launchers, macro tools) may capture the Space key globally. Try disabling them temporarily.

**Run as Administrator.** In some enterprise environments, QuickLook may need elevated permissions. Right-click the QuickLook shortcut → *Run as administrator*.

---

## Video/audio files show a blank preview

Install the required codecs:
- **HEVC/H.265:** [HEVC Video Extensions](https://www.microsoft.com/store/apps/9nmzlz57r3t7)
- **AV1:** [AV1 Video Extension](https://www.microsoft.com/store/apps/9mvzqvxjbq9v)

QuickLook uses Windows' built-in media engine, so any codec installed system-wide will work.

---

## HEIC images show as blank

Install the **HEIF Image Extensions** from the Microsoft Store:
[microsoft.com/store/apps/9pmmsr1cgpwg](https://www.microsoft.com/store/apps/9pmmsr1cgpwg)

---

## Office files (.docx, .xlsx) don't preview

Office file preview requires the **QL-Office plugin**:
1. Download from [github.com/QL-Win/QuickLook.Plugin.Office](https://github.com/QL-Win/QuickLook.Plugin.Office/releases)
2. Double-click the `.qlplugin` file to install

---

## QuickLook crashes on startup

**Check your .NET runtime.** QuickLook bundles the required runtime, but a corrupted installation can cause issues. Try uninstalling and reinstalling QuickLook.

**Check the logs.** QuickLook writes logs to `%AppData%\QuickLook\QuickLook.log`. Share the log content when reporting issues on GitHub.

---

## Still stuck?

::: tip Get Help
- [GitHub Issues](https://github.com/QL-Win/QuickLook/issues) — bug reports
- [GitHub Discussions](https://github.com/QL-Win/QuickLook/discussions) — questions and help
:::

When reporting a bug, please include:
- Windows version (`winver`)
- QuickLook version (tray icon → About)
- The file type that's causing issues
- Contents of `%AppData%\QuickLook\QuickLook.log`
