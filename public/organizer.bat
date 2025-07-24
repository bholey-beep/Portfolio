@echo off
cd /d "%~dp0"
 curl -o organize.js https://raw.githubusercontent.com/bholey-beep/clutter/refs/heads/main/organize.js
node organize.js
pause
