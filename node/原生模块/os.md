## os
### os.tmpdir()
返回操作系统中默认的存放临时文件的目录;
### os.type()
返回操作系统类型；在 Linux 上返回 ‘Linux’，在 macOS 上返回 ‘Darwin’，在 Windows 上返回 ‘Windows_NT’。
### os.hostname()
返回操作系统主机名
### os.platform
该方法用于获取操作系统平台,可能返回的值为’darwin’、‘linux’、‘win32’
### os.arch()
获取操作系统的CPU架构 可能的值有 “x64”、“arm” 和 “ia32”
### os.release()
获取操作系统的发行版本。
### os.uptime
该方法用于获取系统的当前运行时间，单位为秒。
### os.totalmem()
获取操作系统总内存量，单位为字节;
### os.freemem()
返回系统的空闲内存量，单位为字节;
### os.cpus
该方法返回一个数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
### os.networkInterfaces()
该方法返回一个数组，其中存放了系统中的所有网络接口。
### os.loadavg()
该方法返回一个数组，其中存放了1分钟、5分钟及15分钟的系统平均负载。