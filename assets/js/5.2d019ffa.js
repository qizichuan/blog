(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{488:function(t,s,e){t.exports=e.p+"assets/img/1665396047313.bcd88c5d.png"},489:function(t,s,e){t.exports=e.p+"assets/img/1665396348967.956dea91.png"},490:function(t,s,e){t.exports=e.p+"assets/img/1665402990433.122d6c8e.png"},491:function(t,s,e){t.exports=e.p+"assets/img/1665404348473.56d4af60.png"},492:function(t,s,e){t.exports=e.p+"assets/img/1665404705512.afc0e420.png"},493:function(t,s,e){t.exports=e.p+"assets/img/1665406315916.4677fcb3.png"},494:function(t,s,e){t.exports=e.p+"assets/img/1665406335537.b711e4d9.png"},495:function(t,s,e){t.exports=e.p+"assets/img/1665406347983.465b83bc.png"},496:function(t,s,e){t.exports=e.p+"assets/img/1665406371760.01acfe68.png"},497:function(t,s,e){t.exports=e.p+"assets/img/1665406377683.29571194.png"},498:function(t,s,e){t.exports=e.p+"assets/img/1665406385067.02246933.png"},499:function(t,s,e){t.exports=e.p+"assets/img/1665406399698.44335c8d.png"},500:function(t,s,e){t.exports=e.p+"assets/img/1665406410285.682005fc.png"},501:function(t,s,e){t.exports=e.p+"assets/img/1665406420343.e40f0d98.png"},502:function(t,s,e){t.exports=e.p+"assets/img/1665406426215.a7374ae0.png"},503:function(t,s,e){t.exports=e.p+"assets/img/1665406433293.33a03bb3.png"},504:function(t,s,e){t.exports=e.p+"assets/img/1665406444717.4686a259.png"},505:function(t,s,e){t.exports=e.p+"assets/img/1665406463032.bef4df6d.png"},506:function(t,s,e){t.exports=e.p+"assets/img/1665406468375.1cd5da13.png"},507:function(t,s,e){t.exports=e.p+"assets/img/1665406682521.e49bc2b3.png"},508:function(t,s,e){t.exports=e.p+"assets/img/1665406714999.ceed9b4b.png"},509:function(t,s,e){t.exports=e.p+"assets/img/1665406734449.b0bcfeed.png"},510:function(t,s,e){t.exports=e.p+"assets/img/1665406904416.f9dca290.png"},511:function(t,s,e){t.exports=e.p+"assets/img/1665406914135.86dc81db.png"},512:function(t,s,e){t.exports=e.p+"assets/img/1665406935727.fab239c9.png"},513:function(t,s,e){t.exports=e.p+"assets/img/1665406941156.7f496198.png"},514:function(t,s,e){t.exports=e.p+"assets/img/1665406946297.e7dea0f3.png"},550:function(t,s,e){"use strict";e.r(s);var r=e(1),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("写本篇博客主要是受到了我的舍友感发，校园网一个月59元，那么贵，我的舍友高同学，一天只吃一顿饭，被迫减肥，1米9身高，200斤的大壮，一天一顿饭，你能想想的到吗？")])]),t._v(" "),s("ul",[s("li",[t._v("2022年了，几乎每个学校都有校园网了，但基本上学校的校园网都被三家运行商之一垄断，甚至进入了某学校只能去使用2G网，这样的校园网基本都是高昂的价格，像我这种穷小子，自然买不起，于是便有了本篇教程。")]),t._v(" "),s("li",[t._v("使用该方式连接校园网需要有一定的计算机学习基础，本次搭建教程共使用工具：云服务器、Wireshark、SoftEther VPN Server 管理工具、openVPN")]),t._v(" "),s("li",[t._v("安装包已上传"),s("a",{attrs:{href:"https://www.aliyundrive.com/drive/folder/6344f98af625fc327d5b42b892164d23ae613ef2",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云盘"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"一、测试校园网"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、测试校园网"}},[t._v("#")]),t._v(" 一、测试校园网")]),t._v(" "),s("p",[t._v("连接我们的校园网，不需要打开浏览器，连接上即可")]),t._v(" "),s("p",[s("img",{attrs:{src:e(488),alt:"1665396047313"}})]),t._v(" "),s("p",[t._v("打开dos命令窗口（Windows + R，输入 cmd），在窗口中输入"),s("strong",[t._v("ping baidu.com")]),t._v("，红色部分会有一些串ip地址，其实现在我们已经连上网了，只不过，我们没有登录校园网，被拦截了而已，而我们要实现的就是跳过校园网的拦截。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(489),alt:"1665396348967"}})]),t._v(" "),s("h2",{attrs:{id:"二、云服务器安装vpnserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、云服务器安装vpnserver"}},[t._v("#")]),t._v(" 二、云服务器安装vpnServer")]),t._v(" "),s("p",[t._v("如果你没有云服务器，你可以去**腾讯云("),s("font",{staticStyle:{color:"orange"}},[t._v("优先选择高带宽、近距离、系统推荐Ubuntu 20.04")]),t._v(")**购买一台，新用户点击该链接，白嫖一个月 "),s("a",{attrs:{href:"https://cloud.tencent.com/act/free/personal?from=17591",target:"_blank",rel:"noopener noreferrer"}},[t._v("白嫖点这里"),s("OutboundLink")],1),t._v("，选择如下图：")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(490),alt:"1665402990433"}})]),t._v(" "),s("p",[t._v("搭建该服务，带宽越高越好，6M带宽实际下载速度大约1M。使用服务器需要实名认证。")]),t._v(" "),s("h3",{attrs:{id:"_1、首先你要设置你的云服务器密码-root管理员的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、首先你要设置你的云服务器密码-root管理员的"}},[t._v("#")]),t._v(" 1、首先你要设置你的云服务器密码（root管理员的）")]),t._v(" "),s("p",[t._v("如下图，你需要点击"),s("strong",[t._v("重置密码")]),t._v("输入密码后，重启云服务器")]),t._v(" "),s("h3",{attrs:{id:"_2、登录云服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、登录云服务器"}},[t._v("#")]),t._v(" 2、登录云服务器")]),t._v(" "),s("p",[t._v("点击下图的"),s("strong",[t._v("登录")]),t._v("，打开一个新的页面，再点击登录，显示 "),s("strong",[t._v("lighthouse@VM-8-12-ubuntu:~$")]),t._v(",表示我们登录的用户是lighthouse")]),t._v(" "),s("p",[s("img",{attrs:{src:e(491),alt:"1665404348473"}})]),t._v(" "),s("p",[t._v("输入 "),s("strong",[t._v("su")]),t._v("   # 表示切换root管理员登录，出现Password时：输入你设置的密码，完成后回车")]),t._v(" "),s("p",[s("img",{attrs:{src:e(492),alt:"1665404705512"}})]),t._v(" "),s("p",[t._v("执行一下代码，更新一下系统和安装编译环境")]),t._v(" "),s("h3",{attrs:{id:"_3、安装vpnserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装vpnserver"}},[t._v("#")]),t._v(" 3、安装vpnServer")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get update\nsudo apt-get install build-essential\napt-get install make gcc g++  -y\n\n# 下载\nwget https://www.witersen.com/wp-content/uploads/2022/03/softether-vpnserver-v4.38-9760-rtm-2021.08.17-linux-x64-64bit.tar.gz\n# 使用github镜像，可能会慢推荐使用上面的网站\n# wget https://github.com/SoftEtherVPN/SoftEtherVPN_Stable/releases/download/v4.38-9760-rtm/softether-vpnserver-v4.38-9760-rtm-2021.08.17-linux-x64-64bit.tar.gz \n\n# 解压\ntar -zxvf softether-vpnserver-v4.38-9760-rtm-2021.08.17-linux-x64-64bit.tar.gz \n#进入目录\ncd vpnserver/\n \n#编译（因为该目录下已经有 Makefile 文件了 所以可直接进行编译操作）\nmake\n \n#以daemon方式运行服务器端程序（要停止只需要 ./vpnserver stop 即可）\n./vpnserver start\n\n# 然后我们设置VPN密码,依次输入\n./vpncmd\n# 输入1，再按3次回车键，会进入到vpnserver中，这时输入\nServerPasswordSet\n# 输入两次我们的密码\n# 就OK了\n# 如果失败了，看一下你的防火墙\n# 1.防火墙关闭输入  systemctl stop firewalld.service\n# 2.腾讯云上的防火墙 tcp 443 开放、 udp 53 开放\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v("如果你使用的Windows做服务器，可以去github下载专用的版本"),s("a",{attrs:{href:"https://github.com/SoftEtherVPN/SoftEtherVPN_Stable/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"三、softether-vpn-server-管理工具安装及使用配置教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、softether-vpn-server-管理工具安装及使用配置教程"}},[t._v("#")]),t._v(" 三、SoftEther VPN Server 管理工具安装及使用配置教程")]),t._v(" "),s("p",[t._v("大部分学校都是53端口，有的是67端口  "),s("a",{attrs:{href:"#五、Wireshark 查询端口"}},[t._v("点击查询端口教程")]),t._v("  ，如果你觉得麻烦，你就直接设置53端口，基本上就是53端口")]),t._v(" "),s("p",[t._v("打开softether-vpnserver_vpnbridge-v4.34-9744-beta-2020.03.20-windows-x86_x64-intel.exe 安装")]),t._v(" "),s("p",[s("img",{attrs:{src:e(493),alt:"1665406315916"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(494),alt:"1665406335537"}})]),t._v(" "),s("p",[s("strong",[t._v("如果你不想安装到C盘，你可以选择指定目录安装")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(495),alt:"1665406347983"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(496),alt:"1665406371760"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(497),alt:"1665406377683"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(498),alt:"1665406385067"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(499),alt:"1665406399698"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(500),alt:"1665406410285"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(501),alt:"1665406420343"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(502),alt:"1665406426215"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(503),alt:"1665406433293"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(504),alt:"1665406444717"}})]),t._v(" "),s("p",[s("strong",[t._v("用户名和密码后期我们连接vpn需要使用")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(505),alt:"1665406463032"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(506),alt:"1665406468375"}})]),t._v(" "),s("p",[s("strong",[t._v("端口53，如果你用Wireshark 抓到的不是53，那就填你抓到的端口")])]),t._v(" "),s("p",[t._v("最后会生成一个zip文件夹，然后关闭SoftEther VPN Server 管理工具，我们解压文件夹，用记事本打开*********l3.ovpn这个文件（末尾是l3.ovpn的）")]),t._v(" "),s("p",[t._v("Ctrl + F 查询  remote")]),t._v(" "),s("p",[t._v("把remote 后面的地址改为你的ip 端口")]),t._v(" "),s("p",[t._v("如 remote 127.0.0.1 53")]),t._v(" "),s("p",[t._v("保存，关闭")]),t._v(" "),s("p",[s("strong",[t._v("本文未配置ca证书，如果你要配置证书参考"),s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2067212",target:"_blank",rel:"noopener noreferrer"}},[t._v("openvpn安装及证书制作"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"四、openvpn使用教程-win10-11软件相同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、openvpn使用教程-win10-11软件相同"}},[t._v("#")]),t._v(" 四、OpenVPN使用教程（Win10/11软件相同）")]),t._v(" "),s("h3",{attrs:{id:"_1-打开win10-2-4-9-exe-安装即可-安装过于简单。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-打开win10-2-4-9-exe-安装即可-安装过于简单。"}},[t._v("#")]),t._v(" 1.打开win10-2.4.9.exe，安装即可，安装过于简单。")]),t._v(" "),s("h3",{attrs:{id:"_2-安装好后-打开软件-任务栏右下角右击该软件-点击导入配置选项-选择刚刚我们生成的-l3-ovpn-这个文件-点击连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装好后-打开软件-任务栏右下角右击该软件-点击导入配置选项-选择刚刚我们生成的-l3-ovpn-这个文件-点击连接"}},[t._v("#")]),t._v(" 2.安装好后，打开软件，任务栏右下角右击该软件，点击导入配置选项，选择刚刚我们生成的*******_l3.ovpn 这个文件，点击连接")]),t._v(" "),s("p",[s("img",{attrs:{src:e(507),alt:"1665406682521"}})]),t._v(" "),s("p",[t._v("弹出输入框，输入账号密码即可连接，连接成功后会有提示，如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:e(508),alt:"1665406714999"}})]),t._v(" "),s("p",[t._v("一般都有发送字节，有了接收字节就可以连接成功，如下图，在右下角弹出表示连接成功。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(509),alt:"1665406734449"}})]),t._v(" "),s("p",[t._v("至此配置便已完成，你就可以上网喽，当然，带宽比较低，偶尔看个电影和听歌没问题，打游戏就不太合适了")]),t._v(" "),s("h2",{attrs:{id:"五、wireshark-查询端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、wireshark-查询端口"}},[t._v("#")]),t._v(" 五、Wireshark 查询端口")]),t._v(" "),s("p",[t._v("先给电脑链接校园网wifi或者有线网络（不用输入账号密码，连接即可）")]),t._v(" "),s("p",[s("img",{attrs:{src:e(510),alt:"1665406904416"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(511),alt:"1665406914135"}})]),t._v(" "),s("p",[t._v("打开浏览器进入认证页面，然后返回软件，进行如下操作")]),t._v(" "),s("p",[s("img",{attrs:{src:e(512),alt:"1665406935727"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(513),alt:"1665406941156"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(514),alt:"1665406946297"}})]),t._v(" "),s("p",[t._v("端口不是53就是67,   百分之八十的端口是53，其余是67")]),t._v(" "),s("h2",{attrs:{id:"六、高级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、高级"}},[t._v("#")]),t._v(" 六、高级")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果你有时间和足够的能力研究这方面，你可以去实现一下 CA证书和VPNserver集群搭建")])]),t._v(" "),s("li",[s("p",[t._v("这篇文章有使用证书你可以参考一下"),s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/2067212",target:"_blank",rel:"noopener noreferrer"}},[t._v("openvpn安装及证书制作"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("如果你不想配置ca证书，那么你的线路是不安全的，就不要做一下敏感的操作，如：登录邮箱等等")])]),t._v(" "),s("ul",[s("li",[t._v("如果你已经购买了校园网，而舍友没购买，想多个人用一个校园网，你可以通过路由器实现（软路由，一台软路由相当于一个小型主机），路由器如： "),s("strong",[t._v("斐讯K2P")]),t._v(" ，"),s("strong",[t._v("红米 AC 2100")]),t._v("等，可以刷 "),s("em",[t._v("老毛子Padavan")]),t._v(" 或者 "),s("em",[t._v("openWRT")]),t._v(" 等 嵌入式的Linux，相关操作请参考"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E6%A0%A1%E5%9B%AD%E7%BD%91%E8%B7%AF%E7%94%B1%E5%99%A8&t=blog&u=weixin_43272781",target:"_blank",rel:"noopener noreferrer"}},[t._v("csdn"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);