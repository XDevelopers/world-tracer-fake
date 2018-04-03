@echo off

D:
CD D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake
SET destino="\\192.168.227.68\d$\Util\Fake-WorldTracer\code\self-host"
SET destinoResult="\\192.168.227.68\d$\Util\Fake-WorldTracer\code\self-host\results"
@echo on

REM Copia os arquivos necessarios ao Fake Server
REM Path: D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake

XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\app.js" %destino% /Y
XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\package.json" %destino% /Y
XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\.gitignore" %destino% /Y
XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\copyFiles.bat" %destino% /Y
XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\gruntfile.js" %destino% /Y
XCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\README.md" %destino% /Y
ROBOCOPY "D:\Projects\CINQ\2018\WTR\WorldTracerFakeServer\world-tracer-fake\results" %destinoResult% /mir

@echo on

REM ---------- Terminou a Copia ------------
REM 192.168.227.68\d$\Util\Fake-WorldTracer\code\self-host
REM Executar o npm install
REM Executar o npm start

@echo off