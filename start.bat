start C:\WINDOWS\system32\wsl.exe -d Ubuntu-22.04 -e ./init_server.sh
ping 127.0.0.1 -n 1 > nul
@echo off
echo Set objShell = CreateObject("Shell.Application") > "%temp%\RunElevated.vbs"
echo args = "" >> "%temp%\RunElevated.vbs"
echo For Each strArg in WScript.Arguments >> "%temp%\RunElevated.vbs"
echo args = args & strArg & " "  >> "%temp%\RunElevated.vbs"
echo Next >> "%temp%\RunElevated.vbs"
echo objShell.ShellExecute "powershell.exe", " -Command ngrok http 5000", args, "", "runas" >> "%temp%\RunElevated.vbs"
cscript //nologo "%temp%\RunElevated.vbs"
del "%temp%\RunElevated.vbs"