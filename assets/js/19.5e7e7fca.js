(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{249:function(s,a,n){s.exports=n.p+"assets/img/aggregated-doc.8b0095e9.png"},250:function(s,a,n){s.exports=n.p+"assets/img/gateway-endpoint-forwarding-effect-1.b802aff2.png"},251:function(s,a,n){s.exports=n.p+"assets/img/gateway-endpoint-forwarding-effect-2.3a63aa5c.png"},716:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("将常用微服务网关的依赖集成，便于使用"),a("br"),s._v("\n增加网关聚合文档兼容性，支持网关配置过滤器为->将请求的路径前缀去除")]),s._v(" "),a("h2",{attrs:{id:"网关聚合文档效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关聚合文档效果"}},[s._v("#")]),s._v(" 网关聚合文档效果")]),s._v(" "),a("h3",{attrs:{id:"支持网关配置过滤器为-将请求的路径前缀去除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持网关配置过滤器为-将请求的路径前缀去除"}},[s._v("#")]),s._v(" 支持网关配置过滤器为->将请求的路径前缀去除")]),s._v(" "),a("p",[s._v("网关效果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("单体服务 接口地址 访问http://localhost:11100/simple-demo-cloud/hello/world\n通过网关 接口地址 访问http://localhost:11000/simple-demo-cloud/hello/world\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("网关配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spring:\n  application:\n    name: simple-demo-gateway\n  cloud:\n    nacos:\n    # 路由网关配置\n    gateway:\n      # 启用了自动根据服务名建立路由\n      discovery:\n        locator:\n          lowerCaseServiceId: true\n          enabled: true\n          # 配置过滤器为->将请求的路径前缀去除\n          filters:\n            - name: StripPrefix\n              args:\n                parts: 0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("聚合文档兼容效果："),a("br"),s._v("\n打开网关接口文档地址： http://localhost:11000/doc.html"),a("br"),s._v("\n展示接口地址内容与微服务文档地址内容一致：http://localhost:11100/doc.html")]),s._v(" "),a("p",[s._v("注：微服务接口代码，Mapping中需包含微服务名称，网关才能正确转发：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@RestController\n@RequestMapping("/simple-demo-cloud/hello")\n@Tag(name = "你好")\npublic class HelloController {\n\n    @Operation(summary = "世界")\n    @GetMapping(value = "/world")\n    public String world() {\n        return "simple-demo-cloud: hello world";\n    }\n\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("不在配置文件中写 server.servlet.context-path=simple-demo-cloud 的原因为:")]),s._v(" "),a("p",[s._v("当所有微服务融合为单体工程时，接口地址将发生根本性改变，从而增加修改调用接口地址的工作量。")]),s._v(" "),a("p",[s._v("微服务是否需要融合为单体工程，可视服务器资源情况决定")]),s._v(" "),a("p",[s._v("兼容该功能涉及代码")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ok1996/ok-system-simple/blob/main/simple-starter/simple-starter-web/src/main/java/cn/iosd/starter/web/base/AggregatedDocGatewayForward.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("simple-starter-web"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ok1996/ok-system-simple/blob/main/simple-starter/simple-starter-gateway/src/main/java/cn/iosd/starter/gateway/handler/AggregatedDocGatewayHandler.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("simple-starter-gateway"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"引入依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    <dependencies>\n        <dependency>\n            <groupId>cn.iosd</groupId>\n            <artifactId>simple-starter-gateway</artifactId>\n            <version>Version</version>\n        </dependency>\n    </dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[s._v("#")]),s._v(" 配置项")]),s._v(" "),a("h3",{attrs:{id:"nacos远程配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos远程配置中心"}},[s._v("#")]),s._v(" Nacos远程配置中心")]),s._v(" "),a("p",[s._v("示例：application.yml  公共-通用配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("simple:\n  openApi:\n    version: 1.0.0\n    contact:\n      name: ok1996\n      url: https://ok96.cn\n      email: ku29@qq.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"本地工程配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地工程配置"}},[s._v("#")]),s._v(" 本地工程配置")]),s._v(" "),a("p",[s._v("application.yml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server:\n  port: 11000\nspring:\n  application:\n    name: simple-demo-gateway\n  cloud:\n    nacos:\n      server-addr: http://127.0.0.1:8848\n      username:\n      password:\n      discovery:\n        registerEnabled: true\n        namespace:\n      config:\n        namespace:\n        file-extension: yml\n    # 路由网关配置\n    gateway:\n      # 启用了自动根据服务名建立路由\n      discovery:\n        locator:\n          lowerCaseServiceId: true\n          enabled: true\n  config:\n    import:\n      - nacos:application.yml\nknife4j:\n  gateway:\n    enabled: true\n    strategy: discover\n    discover:\n      enabled: true\n      version: openapi3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h3",{attrs:{id:"add-vm-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-vm-options"}},[s._v("#")]),s._v(" Add VM options")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Dspring.cloud.nacos.server-addr=\n-Dspring.cloud.nacos.username=nacos\n-Dspring.cloud.nacos.password=\n-Dspring.cloud.nacos.discovery.namespace=\n-Dspring.cloud.nacos.config.namespace=\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"效果图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果图"}},[s._v("#")]),s._v(" 效果图")]),s._v(" "),a("h4",{attrs:{id:"网关聚合微服务列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关聚合微服务列表"}},[s._v("#")]),s._v(" 网关聚合微服务列表")]),s._v(" "),a("p",[a("img",{attrs:{src:n(249),alt:"效果图"}})]),s._v(" "),a("h4",{attrs:{id:"网关聚合微服务接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网关聚合微服务接口"}},[s._v("#")]),s._v(" 网关聚合微服务接口")]),s._v(" "),a("p",[s._v("网关页面调用接口-端口11000\n"),a("img",{attrs:{src:n(250),alt:"效果图"}}),s._v("\n单体服务调用接口-端口11010\n"),a("img",{attrs:{src:n(251),alt:"效果图"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);