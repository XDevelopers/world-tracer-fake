@echo OFF
echo ========================================
echo ===== Process to restart the Self-Host =
echo ========================================
set HOST_DIR=%cd%
cd %HOST_DIR%/code/self-host/

echo ========================================
echo ===== Restarting the Self-Host process =
echo ========================================
node app.js

PAUSE